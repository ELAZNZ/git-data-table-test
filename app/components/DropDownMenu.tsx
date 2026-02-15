"use client";

import { useState } from "react";

export const DropDownMenu = () => {
  const [openDropDonwMenu, setOpenDropDownMenu] = useState(false);

  const handleButtonClick = () => {
    setOpenDropDownMenu(!openDropDonwMenu);
  };

  return (
    <div className="">
      <button onClick={handleButtonClick}>
        ...
        {openDropDonwMenu && (
          <div className="">
            <button onClick={() => {}}>Meow</button>
            <button onClick={() => {}}>Vizh</button>
          </div>
        )}
      </button>
    </div>
  );
};
