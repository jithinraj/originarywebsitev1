import type { Metadata } from 'next'
import { rootGraph } from '@/lib/structured-data/entities'
import { BRAND } from '@/lib/brand-tokens'
import { THEME_INIT_SCRIPT } from '@/components/brand/theme'
import { MOTION_INIT_SCRIPT } from '@/lib/motion'
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import SkipNavigation from '@/components/SkipNavigation'
import AnalyticsGate from '@/components/consent/AnalyticsGate'

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
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: 'Originary | Verifiable Records for Agents, APIs & Gateways',
    template: '%s | Originary',
  },
  description: 'Create signed records for agent actions, API calls, MCP tool runs, gateway decisions, payments, and provisioning. Verify them without sharing internal logs.',
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
    title: 'Originary | Verifiable Records for Agents, APIs & Gateways',
    description: 'Create signed records for agent actions, API calls, MCP tool runs, gateway decisions, payments, and provisioning. Verify them without sharing internal logs.',
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
    title: 'Originary | Verifiable Records for Agents, APIs & Gateways',
    description: 'Create signed records for agent actions, API calls, MCP tool runs, gateway decisions, payments, and provisioning. Verify them without sharing internal logs.',
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
  // Light is the default whatever the system setting; THEME_INIT_SCRIPT and the theme
  // toggle switch these to dark only when the reader picks dark.
  themeColor: BRAND.bg,
  colorScheme: 'light',
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning className={`${plexSans.variable} ${plexMono.variable}`}>
      <head>
        {/* Applies a saved dark pick before first paint; everyone else gets light. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        {/* Applies a saved pause of looping motion before first paint. */}
        <script dangerouslySetInnerHTML={{ __html: MOTION_INIT_SCRIPT }} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(rootGraph) }} />
      </head>
      <body>
        <PerformanceMonitor />
        <SkipNavigation />
        <div className="site-root">
          {children}
        </div>

        {/* Analytics load only after the reader opts in (see /privacy). */}
        <AnalyticsGate />
      </body>
    </html>
  )
}
