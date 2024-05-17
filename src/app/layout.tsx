import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const mono = IBM_Plex_Mono({
  weight: ['200', '400', '600', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'wanner.work',
  description: 'a wanner cooperation.'
}

interface Props {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={mono.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
