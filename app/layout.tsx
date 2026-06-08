import type { Metadata } from 'next'
import { Syne, Sora, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
})

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Dustin Brinkman — Full Stack Engineer',
  description: 'Full Stack Engineer with 8+ years building scalable web, mobile, and automation products end to end.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${sora.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
