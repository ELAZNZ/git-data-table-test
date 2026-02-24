import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-3 border border-gray-100 min-h-screen py-3 px-6 rounded-xl w-60">
      <h2 className="text-bold text-2xl mb-8 text-purple-400">لوگو</h2>

      <Link href="/panel">صفحه اصلی</Link>

      <Link href="/panel/table">جدول سرویس ها</Link>
    </aside>
  );
}
