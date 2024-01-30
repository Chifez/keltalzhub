import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Raleway } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const raleway = Raleway({ weight: ['500', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Keltalz techhub',
  description: 'Acquire tech skills for every generation',
  icons: [{ rel: 'icon', url: '/keltalz_logo.svg' }],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const background = 'bg-[#FEF7F7]';
  return (
    <html lang="en">
      <body className={`${raleway.className} ${inter.variable}`}>
        <div
          className={`${background}  lg:px-12 lg:py-2 relative overflow-x-hidden h-full w-full`}
        >
          <Navigation />
          <div>{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
