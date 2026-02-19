import type { Metadata } from 'next'
import { Prompt, Sora } from 'next/font/google'
import './globals.css'

const bodyFont = Prompt({
  subsets: ['latin', 'thai'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
})

const displayFont = Sora({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'eCloudTec | LINE-first HR SaaS Presentation',
  description:
    'Landing presentation for eCloudTec HR SaaS on LINE OA, LIFF and LINE Mini App, covering check in-out, leave, OT, payroll and dashboard.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th">
      <body className={`${bodyFont.variable} ${displayFont.variable} antialiased`}>{children}</body>
    </html>
  )
}
