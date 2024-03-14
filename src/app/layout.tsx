import type { Metadata } from "next"
import { inter } from "@/lib/fonts"
import { cn } from '@/lib/utils'
import "@/styles/globals.scss"
import NavBar from "@/components/NavBar"

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
    <html lang="en">
      <body className={cn(
        'relative min-h-screen flex flex-col bg-background antialiased',
        inter.className
      )}>
        <NavBar />

        <main className="container">
          {children}
        </main>

      </body>
    </html>
  )
}
