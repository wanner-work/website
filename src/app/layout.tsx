import clsx from 'clsx'
import type { Metadata } from 'next'
import { Inconsolata } from 'next/font/google'
import { ReactNode } from 'react'
import '../styles/style.css'

const font = Inconsolata({ subsets: ['latin'] })

interface Props {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'wanner.work',
  description: 'my recent work.'
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={clsx(font.className, 'antialiased')}>{children}</body>
    </html>
  )
}
