import { Metadata } from 'next';
import { mono } from '@/app/ui/fonts';
import { ActivitiesCardGrid } from '@/app/ui/dashboard/my-cards';

export const metadata: Metadata = {
  title: 'Activities',
};

export default async function Page() {
  return (
    <main>
      <div className="flex flex-wrap gap-4 bg-gray-50 shadow p-6 align-left">
        <h1 className={`${mono.className} text-3xl`}>Activities</h1>
        <ActivitiesCardGrid/>
      </div>
    </main>
  );
}