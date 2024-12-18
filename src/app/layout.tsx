import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import QueryProvider from '@/components/providers/QueryProvider'
import DarkModeProvider from '@/components/providers/DarkModeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'League of Legends App',
  description:
    'An app that provides the League of Legends champion list, item list, and weekly champion rotation.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DarkModeProvider>
          <Navbar />
          <div className="pt-[90px] h-full">
            <QueryProvider>{children}</QueryProvider>
          </div>
        </DarkModeProvider>
      </body>
    </html>
  )
}
