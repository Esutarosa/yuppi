import type { Metadata } from "next"
import { inter } from "@/lib/fonts"
import { cn } from '@/lib/utils'
import "../styles/globals.scss"

export const metadata: Metadata = {
  title: "Yuppi",
  description: "Separate universe of mangas and light novels",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        'antialiased',
        inter.className
      )}>
      <body className="min-h-screen antialiased">
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  )
}
