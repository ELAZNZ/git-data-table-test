"use client";

import Image from "next/image";
import leftArroW from "@/app/assets/icons/leftArrow.svg";
import rightArrow from "@/app/assets/icons/rightArrow.svg";
import chevronsUpDown from "@/app/assets/icons/chevronsUpDown.svg";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  rowsPerPage: number;
  setCurrentPage: (page: number) => void;
  setRowsPerPage: (rows: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  rowsPerPage,
  setCurrentPage,
  setRowsPerPage,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-between mt-5">
      <div className="flex items-center">
        <div className="flex items-center gap-2 ml-8">
          <button
            onClick={() => setCurrentPage(Math.max(currentPage - 2, 1))}
            disabled={currentPage === 1}
            className="w-8 h-8 rounded-lg bg-white flex items-center justify-center"
          >
            <Image src={rightArrow} alt="" />
            <Image src={rightArrow} alt="" />
          </button>

          <button
            onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
            className="w-8 h-8 rounded-lg bg-white flex items-center justify-center"
          >
            <Image src={rightArrow} alt="" />
          </button>

          <button
            onClick={() =>
              setCurrentPage(Math.min(currentPage + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="w-8 h-8 rounded-lg bg-white flex items-center justify-center"
          >
            <Image src={leftArroW} alt="" />
          </button>

          <button
            onClick={() =>
              setCurrentPage(Math.min(currentPage + 2, totalPages))
            }
            disabled={currentPage === totalPages}
            className="w-8 h-8 rounded-lg bg-white flex items-center justify-center"
          >
            <Image src={leftArroW} alt="" />
            <Image src={leftArroW} alt="" />
          </button>
        </div>
        <span className="text-[#54565F]">
          صفحه {currentPage} از {totalPages}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-[#54565F] leading-6">ردیف در هر صفحه</span>
        <div className="relative flex items-center justify-between bg-white w-17.5 border border-[#D5D5D9] rounded-lg cursor-pointer px-3 py-1.5">
          <Image
            src={chevronsUpDown}
            alt=""
            width={16}
            height={16}
            className="pointer-events-none"
          />

          <span className="text-sm">{rowsPerPage}</span>

          <select
            value={rowsPerPage}
            onChange={(e) => {
              const value = Number(e.target.value);
              setRowsPerPage(value);
              setCurrentPage(1);
            }}
            className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
          >
            {[10, 20, 50, 100].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
