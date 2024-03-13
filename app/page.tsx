import { Metadata } from 'next';
import SideNav from '@/app/ui/dashboard/sidenav';
import { LinkCard, ResistorFrom } from '@/app/ui/dashboard/my-cards';

export const metadata: Metadata = {
  title: 'Landing Page',
};

export default function Page() {
  const linkTitle = "Useful links for you!";
  const formTitle = "Resistor Calculator"


  return (
    <main className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      {/* <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52"> */}
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>

      
      <div className="flex flex-wrap lg:p-12  p-6">
        <div className="flex flex-row grow flex-wrap justify-center gap-4 bg-gray-50 shadow bg-gray-50 p-6 ">
        <ResistorFrom title={formTitle} />
        <LinkCard title={linkTitle} />
        <LinkCard title={linkTitle} />
        <LinkCard title={linkTitle} />
        </div>
      </div>


    </main>
  );
}