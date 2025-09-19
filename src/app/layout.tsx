import type { Metadata } from 'next';
import { Alegreya, Belleza } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';

const fontBody = Alegreya({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const fontHeadline = Belleza({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-headline',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Campus Harvest Alert',
  description: 'Daily fresh produce from local farmers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-body antialiased", fontBody.variable, fontHeadline.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
