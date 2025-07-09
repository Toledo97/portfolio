import { Metadata } from 'next';
import PageFrame from '@/app/ui/dashboard/page-frame'
import ActivitiesCardGrid from '@/app/ui/dashboard/activity-card';

export const metadata: Metadata = {
  title: 'Activities',
};

export default async function Page() {
  return (
    <main>
      <PageFrame title='Activities'>
        <ActivitiesCardGrid />
      </PageFrame>
    </main>
  );
}