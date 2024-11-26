import { Metadata } from 'next';
import { mono } from '@/app/ui/fonts';
import LoggingIn from '@/app/ui/guestbook/my-login';

export const metadata: Metadata = {
  title: 'Guestbook',
};

export default async function Page() {
  return (
    <div>
      <div className="flex flex-wrap gap-4 bg-gray-50 shadow p-6 align-left">
        <h1 className={`${mono.className} text-3xl`}>Guestbook</h1>
        <LoggingIn/>
      </div>
    </div>
  );
}