// "use client";

// import { useState } from "react";
// import Image from "next/image";

// type SwitchButtonProps = {
//   initialValue: boolean;
//   onChange?: (value: boolean) => void;
// };

// export const SwitchButton = ({ initialValue, onChange }: SwitchButtonProps) => {
//   const [enabled, setEnabled] = useState(initialValue);

//   const toggle = () => {
//     const newValue = !enabled;
//     setEnabled(newValue);
//     onChange?.(newValue);
//   };

//   return (
//     <button
//       onClick={toggle}
//       className={`
//         flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ease-in-out outline-none
//         ${
//           enabled
//             ? "bg-green-100 shadow-[0_0_10px_rgba(34,197,94,0.6)] ring-1 ring-green-300"
//             : "bg-gray-100 hover:bg-gray-200"
//         }
//       `}
//     >
//       <Image
//         src={"/icons/power.svg"}
//         alt=""
//         width={16}
//         height={16}
//         className={`transition-all duration-300 ${
//           enabled
//             ? "opacity-100 filter-none scale-110"
//             : "opacity-40 grayscale scale-100"
//         }`}
//       />
//     </button>
//   );
// };

"use client";

import { useState } from "react";
import Image from "next/image";
import power from "@/app/assets/icons/power.svg";

type SwitchButtonProps = {
  initialValue?: boolean;
  onChange?: (value: boolean) => void;
};

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
        relative flex h-8 w-14 items-center justify-end rounded-full p-1 focus:outline-none
        ${enabled ? "bg-[#12B28C]" : "bg-[#D5D5D9]"}
      `}
    >
      <div
        className={`cursor-pointer flex h-6 w-6 transform items-center justify-center rounded-full bg-white
          ${enabled ? "translate-x-6" : "translate-x-0"}
        `}
      >
        <Image
          src={power}
          alt=""
          width={16}
          height={16}
          className={`${enabled ? "" : "opacity-50"}`}
        />
      </div>
    </button>
  );
};
