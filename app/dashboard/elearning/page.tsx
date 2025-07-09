import { Metadata } from 'next';
import { CertificateyCardGrid } from '@/app/ui/dashboard/my-cards';
import PageFrame from '@/app/ui/dashboard/page-frame'

export const metadata: Metadata = {
  title: 'eLearning',
};

export default async function Page() {
  return (
    <main>
      <PageFrame title='eLearning'>
        <CertificateyCardGrid />
      </PageFrame>
    </main>
  );
}