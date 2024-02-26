import { Metadata } from 'next';
import SideNav from '@/app/ui/dashboard/sidenav';

export const metadata: Metadata = {
  title: 'Landing Page',
};

export default function Page() {
  return (
    <main className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      {/* <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52"> */}
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>

      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        
        </div>
      </div>
    </main>
  );
}