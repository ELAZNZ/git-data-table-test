export default function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center" dir="rtl">
      <div className="p-8">{children}</div>
    </div>
  );
}
