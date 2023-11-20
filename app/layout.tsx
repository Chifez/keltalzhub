import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Raleway } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/shared/Navigation';

const inter = Inter({ subsets: ['latin'] });
const raleway = Raleway({ weight: ['500', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <div className="bg-[#FEF7F7] px-2 lg:px-12 lg:py-2 relative overflow-x-hidden h-screen w-full">
          <Navigation />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
