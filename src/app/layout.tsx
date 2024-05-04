import type { Metadata } from "next";
import type { FC, PropsWithChildren } from 'react';

import { nunito } from '@/next.fonts';
import { ThemeProvider } from "@/providers/themeProvider";
import BaseLayout from "@/layouts/Base";

import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Yuppi",
  description: "",
};

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
  return (
    <html className={nunito.className} lang="en">
      <body suppressHydrationWarning>
        <ThemeProvider>
          <BaseLayout>{children}</BaseLayout>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;