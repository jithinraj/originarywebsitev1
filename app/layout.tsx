import type { Metadata } from 'next'
import { rootGraph } from '@/lib/structured-data/entities'
import { Inter, Geist, Geist_Mono, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import SkipNavigation from '@/components/SkipNavigation'
import ClarityAnalytics from '@/components/ClarityAnalytics'
import AmplitudeAnalytics from '@/components/AmplitudeAnalytics'
import ScrollAnimationProvider from '@/components/ScrollAnimationProvider'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
  preload: true,
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
  preload: true,
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-plex-sans',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  preload: true,
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-plex-mono',
  weight: ['400', '500'],
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  title: {
    default: 'Originary | Interaction records for AI agents, MCP, & APIs',
    template: '%s | Originary',
  },
  description: 'Originary turns API calls, MCP tool use, runtime decisions, and payment events into signed records another party can verify.',
  authors: [{ name: 'Originary', url: 'https://www.originary.xyz' }],
  creator: 'Originary',
  publisher: 'Originary',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.originary.xyz'),
  openGraph: {
    title: 'Originary | Interaction records for AI agents, MCP, & APIs',
    description: 'Originary turns API calls, MCP tool use, runtime decisions, and payment events into signed records another party can verify.',
    url: 'https://www.originary.xyz',
    siteName: 'Originary',
    images: [{
      url: '/og',
      width: 1200,
      height: 630,
      alt: 'Originary: verify what agents and APIs did across company boundaries'
    }],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary | Interaction records for AI agents, MCP, & APIs',
    description: 'Originary turns API calls, MCP tool use, runtime decisions, and payment events into signed records another party can verify.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { other: { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } }
      : {}),
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#f4f1ea', // matches homepage PALETTE.bg
  colorScheme: 'light',
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(rootGraph) }} />
      </head>
      <body>
        <PerformanceMonitor />
        <SkipNavigation />
        <ScrollAnimationProvider />
        <div className="wrap hp-root site-root">
          {children}
        </div>

        {/* Microsoft Clarity */}
        <ClarityAnalytics />

        {/* Amplitude Analytics */}
        <AmplitudeAnalytics />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FPG3HTSN2R"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FPG3HTSN2R');
          `}
        </Script>

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  )
}
