import type { Metadata } from 'next'
import { ReactNode } from 'react'
import '../styles/style.css'

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
      <body className="bg-dark antialiased">{children}</body>
    </html>
  )
}
