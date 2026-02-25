import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-3 border border-gray-100 min-h-screen py-3 px-6 rounded-xl w-70">
      <h2 className="text-bold text-2xl mb-8 text-gray-400">لوگو</h2>

      <Link
        href="/panel"
        className="hover:bg-gray-100 hover:rounded-xl text-gray-700 hover:text-gray-900"
      >
        صفحه اصلی
      </Link>

      <Link
        href="/panel/table"
        className="hover:bg-gray-100 hover:rounded-xl text-gray-700 hover:text-gray-900"
      >
        جدول سرویس ها
      </Link>
    </aside>
  );
}
