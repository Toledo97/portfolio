import { Metadata } from 'next';
import { mono } from '@/app/ui/fonts';

import { ProjectsCardGrid } from '@/app/ui/dashboard/my-cards';


export const metadata: Metadata = {
  title: 'Projects',
};

export default async function Page() {
  return (
    <main>
      <div className="flex flex-wrap gap-4 bg-gray-50 shadow p-6 align-left">
        <h1 className={`${mono.className} text-3xl`}>Projects</h1>
        <ProjectsCardGrid/>
      </div>
    </main>
  );
}