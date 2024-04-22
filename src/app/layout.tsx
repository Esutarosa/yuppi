import type { Metadata } from "next";
import { cn } from '@/lib/utils';

import { OpenSans } from '@/next.fonts';

import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Yuppi",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        'relative min-w-[320px] min-h-screen bg-background antialiased',
        OpenSans.className
      )}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
};
