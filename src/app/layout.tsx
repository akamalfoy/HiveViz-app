import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HiveViz — Vision Beyond Reality',
  description: 'Architectural visualization and immersive experiences. Turn your design into VR before it becomes reality.',
  metadataBase: new URL('https://hiveviz.com'),
  openGraph: {
    title: 'HiveViz — Vision Beyond Reality',
    description: 'Architectural visualization and immersive experiences. Turn your design into VR before it becomes reality.',
    siteName: 'HiveViz',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/images/hero-bg.jpg',
      width: 1920,
      height: 1080,
      alt: 'HiveViz Architectural Visualization'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HiveViz — Vision Beyond Reality',
    description: 'Architectural visualization and immersive experiences. Turn your design into VR before it becomes reality.',
    images: ['/images/hero-bg.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg?v=4', type: 'image/svg+xml' },
      { url: '/favicon.png?v=4', type: 'image/png' },
      { url: '/favicon.ico?v=4' },
    ],
    apple: '/favicon.png?v=4',
  },
  keywords: ['architectural visualization', 'VR', 'virtual reality', '3D rendering', 'immersive experience'],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://hiveviz.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter bg-cream text-dark antialiased">
        {children}
      </body>
    </html>
  )
}
