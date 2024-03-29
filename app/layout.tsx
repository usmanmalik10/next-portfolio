import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/app/components/header';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Usman | Personal Portfolio',
  description:
    'Usman is a full-stack software developer based in Pakistan, with 3+ years of experience in building web applications. He is currently working as a full-stack software developer at a company called ITS TECH WORLD. He is also a part-time freelancer and has worked with clients from all over the world. He is passionate about building products that are scalable, maintainable, and user-friendly.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <Header />
        {children}
      </body>
    </html>
  );
}
