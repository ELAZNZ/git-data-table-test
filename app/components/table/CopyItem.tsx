"use client";
import Image from "next/image";
import { useState } from "react";
import copy from "@/app/assets/icons/copy.svg";

export const CopyItem = ({ value }: { value: string }) => {
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);

    setCopiedValue(value);

    setTimeout(() => setCopiedValue(null), 1500);
  };

  return (
    <div className="relative flex items-center gap-1">
      <Image
        src={copy}
        alt=""
        width={20}
        height={20}
        className="cursor-pointer"
        onClick={handleCopy}
      />
      <span className="">{value}</span>

      {copiedValue && (
        <span className="absolute -top-6 right-0 text-xs bg-black text-white px-2 py-1 rounded">
          کپی شد
        </span>
      )}
    </div>
  );
};
