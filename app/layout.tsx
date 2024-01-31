import '@/app/ui/global.css';
import { inconsolata } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Carlos\' Dashboard',
    default: 'Carlos\' Dashboard',
  },
  description: 'The official Next.js based website for Carlos Toledo\'s experiences and projects.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={`${inconsolata.className} antialiased`}>{children}</body>
    </html>
  );
}
