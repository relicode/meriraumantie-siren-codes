import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { info } from '@/utils'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: `Myydään ${info.address}`,
  description: `${info.copy}`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} text-[#171717] antialiased bg-yellow-50`}>
        <main className="p-4 flex flex-col space-y-4">{children}</main>
      </body>
    </html>
  )
}
