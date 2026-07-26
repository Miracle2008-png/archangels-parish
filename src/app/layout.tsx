import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL ?? 'https://archangelscatholicchurch.org'),
  title: {
    default: 'Archangels Catholic Church — Satellite Town, Lagos',
    template: '%s | Archangels Catholic Church',
  },
  description:
    'Archangels Catholic Church, Satellite Town — a parish family in the Archdiocese of Lagos, Nigeria. Mass times, sacraments, ministries, and parish news.',
  keywords: ['Catholic church Lagos', 'Archangels Catholic Church', 'Satellite Town parish', 'Archdiocese of Lagos', 'Mass times Lagos', 'Catholic parish Nigeria'],
  authors: [{ name: 'Archangels Catholic Church' }],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: '/',
    siteName: 'Archangels Catholic Church',
    title: 'Archangels Catholic Church — Satellite Town, Lagos',
    description: 'A parish family in the Archdiocese of Lagos, Nigeria.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Archangels Catholic Church',
    description: 'A parish family in the Archdiocese of Lagos, Nigeria.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
