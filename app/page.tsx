import { Metadata } from 'next';
import SideNav from '@/app/ui/dashboard/sidenav';
import { LinkCard } from '@/app/ui/dashboard/my-cards';
import { ResistorFrom } from '@/app/ui/dashboard/my-form';

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

      
      <div className="flex lg:p-12 p-6 w-full">
        <div className="flex flex-row grow flex-wrap justify-center gap-4 bg-gray-50 shadow p-6 ">

        <div className="m-auto overflow-clip shadow p-4 rounded bg-gray-100">
        <div className="relative flex w-full flex-col">
            Welcome to my Personal Website! My name is Carlos Antonio Toledo Jr and I am an UIUC 2023 Alum with a BS in Computer Engineering.
        </div></div>

        <LinkCard title={linkTitle} />
        <ResistorFrom title={formTitle} />
        
        </div>
      </div>
    </main>
  );
}