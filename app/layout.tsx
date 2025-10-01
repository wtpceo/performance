import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '퍼포먼스 마케팅 제안',
  description: '퍼포먼스 마케팅 제안',
  metadataBase: new URL('https://performance-lovat.vercel.app'),
  openGraph: {
    title: '퍼포먼스 마케팅 제안',
    description: '퍼포먼스 마케팅 제안',
    siteName: '퍼포먼스 마케팅 제안',
    url: 'https://performance-lovat.vercel.app',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '퍼포먼스 마케팅 제안',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '퍼포먼스 마케팅 제안',
    description: '퍼포먼스 마케팅 제안',
    site: '@performance',
    creator: '@performance',
  },
  alternates: {
    canonical: 'https://performance-lovat.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
}