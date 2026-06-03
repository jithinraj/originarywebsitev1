import type { Metadata } from 'next'
import { Inter, Geist, Geist_Mono, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import SkipNavigation from '@/components/SkipNavigation'
import ClarityAnalytics from '@/components/ClarityAnalytics'
import AmplitudeAnalytics from '@/components/AmplitudeAnalytics'
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration'
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

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.originary.xyz/#org',
  name: 'Originary',
  legalName: 'Poem, Inc.',
  alternateName: ['Originary™', 'Originary AI', 'Poem, Inc.', 'Originary PEAC', 'Originary Protocol', 'Originary Receipts'],
  url: 'https://www.originary.xyz',
  telephone: '+14157070402',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dover',
    addressRegion: 'DE',
    postalCode: '19904',
    addressCountry: 'US'
  },
  sameAs: [
    'https://www.linkedin.com/company/originary',
    'https://x.com/originaryx',
    'https://bsky.app/profile/originary.bsky.social',
    'https://warpcast.com/originary',
    'https://github.com/originaryx',
    'https://github.com/peacprotocol',
    'https://github.com/peacprotocol/peac',
    'https://www.npmjs.com/org/peac',
    'https://originary.substack.com'
  ],
  logo: 'https://www.originary.xyz/logo.svg',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      email: 'contact@originary.xyz',
      telephone: '+14157070402',
      contactType: 'sales',
      areaServed: ['US', 'IN', 'UK', 'CA', 'EU']
    }
  ],
  knowsAbout: [
    'agent verification',
    'verifiable interaction records',
    'offline verification',
    'verification workflows',
    'PEAC Protocol',
    'signed records',
    'portable signed records',
    'MCP',
    'A2A',
    'AI agent interactions',
    'API policy verification',
    'AIPREF',
    'AI consent',
    'AI compliance evidence',
    'Model Context Protocol',
    'Agent-to-Agent communication',
    'HTTP 402',
    'x402',
    'open evidence'
  ]
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.originary.xyz/#website',
  url: 'https://www.originary.xyz',
  name: 'Originary',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.originary.xyz/search?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
}

// SiteNavigationElement to influence Google sitelinks
const siteNavJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'SiteNavigationElement',
      position: 1,
      name: 'Products',
      url: 'https://www.originary.xyz/products'
    },
    {
      '@type': 'SiteNavigationElement',
      position: 2,
      name: 'Developers',
      url: 'https://www.originary.xyz/developers'
    },
    {
      '@type': 'SiteNavigationElement',
      position: 3,
      name: 'Pricing',
      url: 'https://www.originary.xyz/pricing'
    },
    {
      '@type': 'SiteNavigationElement',
      position: 4,
      name: 'Trust',
      url: 'https://www.originary.xyz/trust'
    },
    {
      '@type': 'SiteNavigationElement',
      position: 5,
      name: 'PEAC Protocol',
      url: 'https://www.originary.xyz/peac'
    },
    {
      '@type': 'SiteNavigationElement',
      position: 6,
      name: 'About',
      url: 'https://www.originary.xyz/about'
    }
  ]
}

export const metadata: Metadata = {
  title: {
    default: 'Originary | Interaction records for AI agents, MCP, & APIs',
    template: '%s | Originary',
  },
  description: 'Originary turns API calls, MCP tool use, runtime decisions, and payment events into signed records another party can verify.',
  keywords: [
    'signed interaction records',
    'MCP verification',
    'agent audit trail',
    'API audit trail',
    'offline verification',
    'verifiable interaction records',
    'PEAC Protocol',
    'cross-runtime verification',
    'AI agent verification',
  ],
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
        <link rel="icon" type="image/svg+xml" href="/assets/img/favicon.svg" />
        <link rel="apple-touch-icon" href="/assets/img/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavJsonLd) }} />
      </head>
      <body>
        <PerformanceMonitor />
        <SkipNavigation />
        <ServiceWorkerRegistration />
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
