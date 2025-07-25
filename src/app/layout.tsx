import type { Metadata } from 'next'
import './globals.css'
import { inter } from '@/config/font'



export const metadata: Metadata = {
  title: 'Teslo | Shop',
  description: 'Tienda virtual de ropa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
