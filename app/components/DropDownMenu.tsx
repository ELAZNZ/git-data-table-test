"use client";

import { useState } from "react";

export const DropDownMenu = () => {
  const [openDropDonwMenu, setOpenDropDownMenu] = useState(false);

  const handleButtonClick = () => {
    setOpenDropDownMenu(!openDropDonwMenu);
  };

  return (
    <div className="">
      <button onClick={handleButtonClick}>...</button>
      {openDropDonwMenu && (
        <div className="">
          <button>Meow</button>
          <button>Vizh</button>
        </div>
      )}
    </div>
  );
};
