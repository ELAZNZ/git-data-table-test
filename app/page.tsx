"use client";
import DataTable from "./components/DataTable";
import { SwitchButton } from "./components/SwitchButton";
import { CopyItem } from "./components/CopyItem";
import { TableToolbar } from "./components/TableToolbar";
import { useMemo, useState } from "react";
import { DropDownMenu } from "./components/DropDownMenu";

// interface ServiceItem {
//   id: number;
//   nameService: string;
//   typeService: string;
//   tag: string;
//   ip: string;
//   creationDate: string;
//   serverStatus: boolean;
// }

const testData = [
  {
    id: 1,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "-",
    ip: "185.94.189.27",
    creationDate: "درحال ساخت",
    serverStatus: false,
  },
  {
    id: 2,
    nameService: "CI-2",
    typeService: "گرافیک ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.28",
    creationDate: "1403/07/12",
    serverStatus: true,
  },
  {
    id: 3,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/13",
    serverStatus: false,
  },
  {
    id: 4,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/14",
    serverStatus: false,
  },
  {
    id: 5,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.30",
    creationDate: "1403/07/15",
    serverStatus: false,
  },
  {
    id: 6,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/16",
    serverStatus: false,
  },
  {
    id: 7,
    nameService: "CI-3",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/17",
    serverStatus: false,
  },
  {
    id: 8,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/18",
    serverStatus: false,
  },
  {
    id: 9,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کتتتتتتتتتتتتتتتتتتتتتتتلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/19",
    serverStatus: false,
  },
  {
    id: 10,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/20",
    serverStatus: false,
  },
  {
    id: 1,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "-",
    ip: "185.94.189.27",
    creationDate: "درحال ساخت",
    serverStatus: false,
  },
  {
    id: 2,
    nameService: "CI-2",
    typeService: "گرافیک ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.28",
    creationDate: "1403/07/12",
    serverStatus: true,
  },
  {
    id: 3,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/13",
    serverStatus: false,
  },
  {
    id: 4,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/14",
    serverStatus: false,
  },
  {
    id: 5,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.30",
    creationDate: "1403/07/15",
    serverStatus: false,
  },
  {
    id: 6,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/16",
    serverStatus: false,
  },
  {
    id: 7,
    nameService: "CI-3",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/17",
    serverStatus: false,
  },
  {
    id: 8,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/18",
    serverStatus: false,
  },
  {
    id: 9,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کتتتتتتتتتتتتتتتتتتتتتتتلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/19",
    serverStatus: false,
  },
  {
    id: 10,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/20",
    serverStatus: false,
  },
  {
    id: 1,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "-",
    ip: "185.94.189.27",
    creationDate: "درحال ساخت",
    serverStatus: false,
  },
  {
    id: 2,
    nameService: "CI-2",
    typeService: "گرافیک ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.28",
    creationDate: "1403/07/12",
    serverStatus: true,
  },
  {
    id: 3,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/13",
    serverStatus: false,
  },
  {
    id: 4,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/14",
    serverStatus: false,
  },
  {
    id: 5,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.30",
    creationDate: "1403/07/15",
    serverStatus: false,
  },
  {
    id: 6,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/16",
    serverStatus: false,
  },
  {
    id: 7,
    nameService: "CI-3",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/17",
    serverStatus: false,
  },
  {
    id: 8,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/18",
    serverStatus: false,
  },
  {
    id: 9,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کتتتتتتتتتتتتتتتتتتتتتتتلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/19",
    serverStatus: false,
  },
  {
    id: 10,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/20",
    serverStatus: false,
  },
  {
    id: 1,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "-",
    ip: "185.94.189.27",
    creationDate: "درحال ساخت",
    serverStatus: false,
  },
  {
    id: 2,
    nameService: "CI-2",
    typeService: "گرافیک ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.28",
    creationDate: "1403/07/12",
    serverStatus: true,
  },
  {
    id: 3,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/13",
    serverStatus: false,
  },
  {
    id: 4,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/14",
    serverStatus: false,
  },
  {
    id: 5,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.30",
    creationDate: "1403/07/15",
    serverStatus: false,
  },
  {
    id: 6,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/16",
    serverStatus: false,
  },
  {
    id: 7,
    nameService: "CI-3",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/17",
    serverStatus: false,
  },
  {
    id: 8,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/18",
    serverStatus: false,
  },
  {
    id: 9,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کتتتتتتتتتتتتتتتتتتتتتتتلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/19",
    serverStatus: false,
  },
  {
    id: 10,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/20",
    serverStatus: false,
  },
  {
    id: 1,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "-",
    ip: "185.94.189.27",
    creationDate: "درحال ساخت",
    serverStatus: false,
  },
  {
    id: 2,
    nameService: "CI-2",
    typeService: "گرافیک ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.28",
    creationDate: "1403/07/12",
    serverStatus: true,
  },
  {
    id: 3,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/13",
    serverStatus: false,
  },
  {
    id: 4,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/14",
    serverStatus: false,
  },
  {
    id: 5,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.30",
    creationDate: "1403/07/15",
    serverStatus: false,
  },
  {
    id: 6,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/16",
    serverStatus: false,
  },
  {
    id: 7,
    nameService: "CI-3",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/17",
    serverStatus: false,
  },
  {
    id: 8,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/18",
    serverStatus: false,
  },
  {
    id: 9,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کتتتتتتتتتتتتتتتتتتتتتتتلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/19",
    serverStatus: false,
  },
  {
    id: 10,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/20",
    serverStatus: false,
  },
  {
    id: 1,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "-",
    ip: "185.94.189.27",
    creationDate: "درحال ساخت",
    serverStatus: false,
  },
  {
    id: 2,
    nameService: "CI-2",
    typeService: "گرافیک ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.28",
    creationDate: "1403/07/12",
    serverStatus: true,
  },
  {
    id: 3,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/13",
    serverStatus: false,
  },
  {
    id: 4,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/14",
    serverStatus: false,
  },
  {
    id: 5,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.30",
    creationDate: "1403/07/15",
    serverStatus: false,
  },
  {
    id: 6,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/16",
    serverStatus: false,
  },
  {
    id: 7,
    nameService: "CI-3",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/17",
    serverStatus: false,
  },
  {
    id: 8,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/18",
    serverStatus: false,
  },
  {
    id: 9,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کتتتتتتتتتتتتتتتتتتتتتتتلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/19",
    serverStatus: false,
  },
  {
    id: 10,
    nameService: "CI-2",
    typeService: "سرور ابری",
    tag: "ارائهٔ اطلاعات کلیدی در کوتاه و شفاف",
    ip: "185.94.189.27",
    creationDate: "1403/07/20",
    serverStatus: false,
  },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const columns = [
    { header: "نام سرویس", key: "nameService", sortable: true, width: "120px" },
    { header: "نوع سرویس", key: "typeService", width: "140px" },
    {
      header: "تگ",
      key: "tag",
      width: "280px",
      render: (row) => (
        <span className="truncate max-w-70 block" title={row.tag}>
          {row.tag}
        </span>
      ),
    },
    {
      header: "آی پی",
      key: "ip",
      width: "180px",
      render: (row) => <CopyItem value={row.ip} />,
    },
    {
      header: "تاریخ ایجاد",
      key: "creationDate",
      sortable: true,
      width: "180px",
    },
    {
      header: "وضعیت سرور",
      key: "serverStatus",
      width: "120px",
      render: (row) => <SwitchButton initialValue={row.serverStatus} />,
    },
    {
      header: "",
      key: "actions",
      width: "40px",
      render: (row) => <DropDownMenu />,
    },
    //
    //   render: (row) => (
    //     <div className="flex justify-end pl-2">
    //       <DropDownMenu
    //         id={row.id}
    //         onEdit={handleEdit}
    //         onDelete={handleDelete}
    //       />
    //     </div>
  ];

  const filteredData = useMemo(() => {
    if (!search.trim()) return testData;

    const lowerSearch = search.toLowerCase();

    return testData.filter((item) => {
      return (
        item.nameService.toLowerCase().includes(lowerSearch) ||
        item.typeService.toLowerCase().includes(lowerSearch) ||
        item.tag.toLowerCase().includes(lowerSearch) ||
        item.ip.includes(search) ||
        item.creationDate.includes(search)
      );
    });
  }, [search]);

  return (
    <div className="p-10 " dir="rtl">
      <TableToolbar search={search} onSearchChange={setSearch} />
      <DataTable data={filteredData} columns={columns} />
    </div>
  );
}
