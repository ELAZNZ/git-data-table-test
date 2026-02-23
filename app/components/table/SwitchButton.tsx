"use client";

import { useState } from "react";
import Image from "next/image";
import power from "@/app/assets/icons/power.svg";

import { SwitchButtonProps } from "../../utils/types";

export const SwitchButton = ({
  initialValue = false,
  onChange,
}: SwitchButtonProps) => {
  const [enabled, setEnabled] = useState(initialValue);

  const toggle = () => {
    const newValue = !enabled;
    setEnabled(newValue);
    onChange?.(newValue);
  };

  return (
    <button
      onClick={toggle}
      type="button"
      role="switch"
      aria-checked={enabled}
      className={`
        relative flex h-5.25 w-9.5 items-center justify-end rounded-full p-1 focus:outline-none transition duration-300
        ${enabled ? "bg-[#12B28C]" : "bg-[#D5D5D9]"}
      `}
    >
      <div
        className={`cursor-pointer flex h-4 w-4 transform items-center justify-center rounded-full bg-white transiion duration-300
          ${enabled ? "translate-x-4" : "translate-x-0"}
        `}
      >
        <Image
          src={power}
          alt=""
          width={10}
          height={10}
          className={`${enabled ? "" : "opacity-50"}`}
        />
      </div>
    </button>
  );
};
