import Sidebar from "../components/Sidebar";

export default function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen p-6 gap-6" dir="rtl">
      <Sidebar />

      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
}
