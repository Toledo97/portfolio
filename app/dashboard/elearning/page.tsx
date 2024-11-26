import { Metadata } from 'next';
import { mono } from '@/app/ui/fonts';
import { CertificateyCardGrid } from '@/app/ui/dashboard/my-cards';

export const metadata: Metadata = {
  title: 'eLearning',
};

export default async function Page() {
  return (
    <div>
      <div className="flex flex-wrap gap-4 bg-gray-50 shadow p-6 align-left">
        <h1 className={`${mono.className} text-3xl`}>eLearning</h1>
        <CertificateyCardGrid />
      </div>
    </div>
  );
}