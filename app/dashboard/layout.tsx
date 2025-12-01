import SideNav from '@/app/ui/dashboard/side-nav';

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className={"flex flex-col md:flex-row md:overflow-hidden bg-gray-50"}>
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-3 md:overflow-y-auto md:p-12 ">{children}</div>
    </main>
  );
}