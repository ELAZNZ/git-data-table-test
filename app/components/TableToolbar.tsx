"use client";

import Image from "next/image";
import frame from "@/app/assets/icons/frame.svg";

interface TableToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export const TableToolbar = ({ search, onSearchChange }: TableToolbarProps) => {
  return (
    <div className="flex items-center justify-between">
      <input
        type="text"
        placeholder="جستجو و فیلتر.."
        value={search}
        onChange={(e) => {
          onSearchChange(e.target.value);
        }}
        className="placeholder:text-[#C0C1C7] text-[#323338] py-2 px-3 mb-4 border border-[#C0C1C7] rounded-xl outline-none w-120"
      />
      <div className="flex items-center gap-2 border border-[#4169E1] rounded-xl">
        <button className=" text-[#4169E1] text-sm py-1.5 px-3.5 cursor-pointer">
          فیلتر
        </button>
        <Image src={frame} alt="" className="pl-2.5 cursor-pointer" />
      </div>
    </div>
  );
};
