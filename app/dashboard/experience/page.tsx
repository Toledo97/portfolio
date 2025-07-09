import { Metadata } from 'next';
import { CompanyCardGrid } from '@/app/ui/dashboard/my-cards';
import PageFrame from '@/app/ui/dashboard/page-frame'

export const metadata: Metadata = {
  title: 'Experience',
};

export default function Page() {
  return (
    <main>
      <PageFrame title='Experience'>
        <CompanyCardGrid />
      </PageFrame>
    </main>
  );
}
