import { Metadata } from 'next';
import PageFrame from '@/app/ui/dashboard/page-frame'
import { ActivitiesCardGrid } from '@/app/ui/dashboard/my-cards';

export const metadata: Metadata = {
  title: 'Activities',
};

export default async function Page() {
  return (
    <main>
      <PageFrame title='Activities'>
        <ActivitiesCardGrid/>
      </PageFrame>
    </main>
  );
}