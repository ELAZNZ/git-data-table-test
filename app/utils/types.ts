import React from "react";

export interface Column<T> {
  header: string;
  key: string;
  sortable?: boolean;
  width?: string;
  headerIcon?: React.ReactNode;
  render?: (row: T) => React.ReactNode;
}

export interface DataRow {
  [key: string]: string | number | boolean | React.ReactNode;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
}

export interface ServiceItem {
  id: number;
  nameService: string;
  typeService: string;
  tag: string;
  ip: string;
  creationDate: string;
  serverStatus: boolean;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  rowsPerPage: number;
  setCurrentPage: (page: number) => void;
  setRowsPerPage: (rows: number) => void;
}

export type SwitchButtonProps = {
  initialValue?: boolean;
  onChange?: (value: boolean) => void;
};

export interface TableToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
}
