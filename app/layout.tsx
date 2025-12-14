import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prarthana - UI/UX Designer Portfolio',
  description: 'Creative portfolio of Prarthana, a UI/UX Designer specializing in modern, futuristic design solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

