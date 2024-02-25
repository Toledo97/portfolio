import '@/app/ui/global.css';
import { inconsolata } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Carlos\' Dashboard',
    default: 'Carlos\' Dashboard',
  },
  description: 'Carlos Toledo\'s website based on Next.js for his experiences and projects.',
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
