import { Metadata } from 'next';
import { ProfileCard, SkillCards } from '@/app/ui/dashboard/my-cards';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default async function Page() {
  return (
    <div>
      <div className="flex flex-wrap gap-4 bg-gray-50 shadow p-6 justify-center">
        <div className="mt-2 flex flex-col " >
          <ProfileCard/>
        </div>
        <div className="mt-2 flex flex-col gap-4 lg:flex-row" >
          <SkillCards />
        </div>
      </div>
    </div>
  );
}