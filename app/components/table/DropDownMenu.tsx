"use client";

import { useState } from "react";

export const DropDownMenu = () => {
  const [openDropDonwMenu, setOpenDropDownMenu] = useState(false);

  const handleButtonClick = () => {
    setOpenDropDownMenu(!openDropDonwMenu);
  };

  return (
    <div className="relative">
      <button
        onClick={handleButtonClick}
        className="text-[#323338] hover:text-[#3B60CD] hover:bg-[#F1F2F3] rounded-sm w-6 h-6"
      >
        ...
      </button>
      {openDropDonwMenu && (
        <div className="absolute left-0 w-30 rounded-xl bg-white shadow-sm overflow-hidden border border-gray-50 z-50">
          <button className="px-4 py-2.5 text-sm text-[#323338] hover:bg-gray-50 hover:text-[#3B60CD]">
            Meow
          </button>
          <button className="px-4 py-2 text-sm text-[#323338] hover:bg-gray-50 hover:text-[#3B60CD]">
            Vizh
          </button>
        </div>
      )}
    </div>
  );
};
