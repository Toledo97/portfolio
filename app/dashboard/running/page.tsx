import { Metadata } from 'next';
import PageFrame from '@/app/ui/dashboard/page-frame'
import { ProjectsCardGrid } from '@/app/ui/dashboard/project-card';

export const metadata: Metadata = {
  title: 'Projects',
};

export default async function Page() {
  return (
    <main>
      <PageFrame title='Running'>

      </PageFrame>
    </main>
  );
}