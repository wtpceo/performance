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
  },
  twitter: {
    card: 'summary',
    title: '퍼포먼스 마케팅 제안',
    description: '퍼포먼스 마케팅 제안',
    site: '@performance',
    creator: '@performance',
  },
  alternates: {
    canonical: 'https://performance-lovat.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <meta property="og:title" content="퍼포먼스 마케팅 제안" />
        <meta property="og:description" content="퍼포먼스 마케팅 제안" />
        <meta property="og:url" content="https://performance-lovat.vercel.app" />
        <meta property="og:site_name" content="퍼포먼스 마케팅 제안" />
        <meta name="twitter:title" content="퍼포먼스 마케팅 제안" />
        <meta name="twitter:description" content="퍼포먼스 마케팅 제안" />
        <meta name="twitter:card" content="summary" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}