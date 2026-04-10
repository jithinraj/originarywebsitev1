import type { Metadata } from 'next'
import { Inter, Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import SkipNavigation from '@/components/SkipNavigation'
import ClarityAnalytics from '@/components/ClarityAnalytics'
import AmplitudeAnalytics from '@/components/AmplitudeAnalytics'
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration'
import ScrollAnimationProvider from '@/components/ScrollAnimationProvider'
// CursorGlow removed: does not work on light backgrounds

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

// Fraunces and JetBrains Mono removed: using Geist + Geist Mono only

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
    'https://github.com/peacprotocol/peac',
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
    'evidence workflows',
    'PEAC Protocol',
    'signed records',
    'portable proof',
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
    default: 'Originary | Prove what agents did',
    template: '%s | Originary',
  },
  description: 'Verify AI agent, API, and MCP interactions with signed, portable records. Tamper-evident audit trails teams can prove later across vendors, audits, disputes, and reviews. Built on PEAC.',
  keywords: [
    'AI agent verification',
    'verify agent actions',
    'MCP security',
    'MCP governance',
    'MCP audit trail',
    'verifiable audit trail',
    'tamper-evident audit trail',
    'signed interaction records',
    'offline verification',
    'portable evidence',
    'PEAC Protocol',
    'evidence for AI agents',
    'API request verification',
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
    title: 'Originary | Know what every agent did. Prove it later.',
    description: 'Originary is the verification layer for agent-facing systems. Verify agent requests, apply policy, and return signed interaction records.',
    url: 'https://www.originary.xyz',
    siteName: 'Originary',
    images: [{
      url: '/og',
      width: 1200,
      height: 630,
      alt: 'Originary: know what every agent did, prove it later'
    }],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary | Know what every agent did. Prove it later.',
    description: 'Originary is the verification layer for agent-facing systems. Verify agent requests, apply policy, and return signed interaction records.',
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
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#F7F9FC', // matches var(--surface-base)
  colorScheme: 'light',
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" rx="48" fill="%230B0B0C"/><path d="M573 -24C875 -24 1078 201 1078 526C1078 853 875 1080 573 1080C271 1080 67 853 67 526C67 201 271 -24 573 -24ZM573 158C392 158 281 301 281 526C281 753 393 898 573 898C753 898 865 753 865 526C865 302 754 158 573 158Z" transform="translate(54.9,195.4) scale(0.1277,-0.1277)" fill="%23FFFFFF"/></svg>' />
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
        <div className="wrap">
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
