import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Krish Patel | Sales Engineer, AI & RAG',
  description: 'Sales / Forward Deployed Engineer building AI prototypes, retrieval systems, and LLM applications. UCLA Computer Science.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
