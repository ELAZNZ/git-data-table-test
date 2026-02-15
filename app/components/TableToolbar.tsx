"use client";

interface TableToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export const TableToolbar = ({ search, onSearchChange }: TableToolbarProps) => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="جستجو و فیلتر.."
        value={search}
        onChange={(e) => {
          onSearchChange(e.target.value);
        }}
        className="text-[#C0C1C7] py-2 px-3 mb-4 border border-[#C0C1C7] rounded-xl outline-none w-"
      />
      <button>فیلتر</button>
    </div>
  );
};
