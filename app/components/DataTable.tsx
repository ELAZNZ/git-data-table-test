"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import chevronsUpDown from "@/app/assets/icons/chevronsUpDown.svg";

interface Column {
  header: string;
  key: string;
  sortable?: boolean;
  width?: string;
  render?: (row: DataRow) => React.ReactNode;
}

interface DataRow {
  [key: string]: unknown;
}

interface DataTableProps {
  data: DataRow[];
  columns: Column[];
}

export default function DataTable({ data, columns }: DataTableProps) {
  type SortOrder = "asc" | "desc";

  const [tableData, setTableData] = useState<DataRow[]>(data);
  const [sortField, setSortField] = useState<string | null>(null);
  const [order, setOrder] = useState<SortOrder>("asc");

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const handleSorting = (field: string, sortOrder: SortOrder) => {
    const sorted = [...tableData].sort((a, b) => {
      const aValue = a[field];
      const bValue = b[field];

      if (aValue == null && bValue == null) return 0;
      if (aValue == null) return 1;
      if (bValue == null) return -1;

      return (
        aValue
          .toString()
          .localeCompare(bValue.toString(), "fa", { numeric: true }) *
        (sortOrder === "asc" ? 1 : -1)
      );
    });

    setTableData(sorted);
  };

  return (
    <table
      className="text-right text-sm border-collapse text-[#323338] overflow-hidden rounded-2xl"
      dir="rtl"
    >
      <thead className="bg-[#ECF0FC]">
        <tr>
          {columns.map((col) => (
            <th
              key={col.key}
              className={`py-2.5 pr-2 leading-6 ${
                col.sortable ? "cursor-pointer select-none" : ""
              }`}
              style={{ width: col.width }}
              onClick={() => {
                if (!col.sortable) return;

                const newOrder =
                  sortField === col.key && order === "asc" ? "desc" : "asc";

                setSortField(col.key);
                setOrder(newOrder);
                handleSorting(col.key, newOrder);
              }}
            >
              <div className="flex items-center gap-1">
                {col.sortable && sortField === col.key && (
                  <Image src={chevronsUpDown} alt="" width={16} height={16} />
                )}

                {col.header}
              </div>
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="py-4 px-2 ">
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex} className="">
            {columns.map((col) => (
              <td key={col.key} className="p-2 leading-5 hover:text-[#3B60CD]">
                {col.render ? col.render(row) : String(row[col.key] ?? "")}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
