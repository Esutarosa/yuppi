import type { Metadata } from "next";
import { cn } from '@/lib/utils';

import { nunito } from '@/next.fonts';
import { ThemeProvider } from "@/providers/themeProvider";

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
        nunito.className
      )}>
        <ThemeProvider>
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
};
