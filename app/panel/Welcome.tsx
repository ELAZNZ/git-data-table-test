"use client";

import Link from "next/link";
import { useState } from "react";

export default function Welcome() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex items-center flex-col border border-gray-100 rounded-xl min-h-screen w-full gap-5">
      <h1 className="text-gray-800 m-5">سلام خوش آمدید.</h1>

      <Link href="/panel/table">جدول سرویس ها</Link>

      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
        className="bg-purple-400 hover:bg-purple-600 outline-none rounded-xl py-3 px-5 text-purple-100 shadow-lg cursor-pointer"
      >
        میو؟!
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-lg">
          <div className="bg-white py-10 px-20 rounded-2xl text-center">
            <h3 className="text-blue-800 mb-5">ویژژژ</h3>

            <button
              onClick={() => {
                setIsModalOpen(false);
              }}
              className="w-full bg-blue-200 hover:bg-blue-400 rounded-xl text-blue-900 py-3 px-5 cursor-pointer"
            >
              بستن
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
