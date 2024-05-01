import type { Metadata } from "next";
import { cn } from '@/lib/utils';

import { nunito } from '@/next.fonts';
import { ThemeProvider } from "@/providers/themeProvider";

import WithNavBar from "@/components/withNavBar";
import WithFooter from "@/components/withFooter";

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
      <body
        suppressHydrationWarning
        className={cn(
          'relative min-w-[320px] min-h-screen bg-background antialiased',
          nunito.className
        )}
      >
        <ThemeProvider>
          <WithNavBar />
          <main>
            {children}
          </main>
          <WithFooter />
        </ThemeProvider>
      </body>
    </html>
  );
};
