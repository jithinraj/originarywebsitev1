import type { Metadata } from 'next'
import { Inter, Fraunces, JetBrains_Mono, Geist, Geist_Mono } from 'next/font/google'
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

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  preload: true,
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
    'https://github.com/peacprotocol/peac',
    'https://peacprotocol.substack.com/'
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
    'HTTP 402',
    'x402',
    'AIPREF',
    'PEAC Protocol',
    'MCP',
    'ACP',
    'A2A',
    'Agentic Web',
    'AI commerce',
    'AI infrastructure',
    'AI compliance',
    'AI Consent',
    'AI Access',
    'Ethical crawling',
    'verifiable receipts',
    'agent-to-agent transactions',
    'Verifiable receipts for AI agents',
    'HTTP 402 Payment Required',
    'Agent-to-Agent communication',
    'Model Context Protocol',
    'Agentic Commerce Protocol',
    'AI Preferences',
    'API policy enforcement',
    'Agent coordination',
    'Machine-readable payment flows'
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
      name: 'Platform',
      url: 'https://www.originary.xyz/platform'
    },
    {
      '@type': 'SiteNavigationElement',
      position: 2,
      name: 'PEAC Protocol',
      url: 'https://www.originary.xyz/peac'
    },
    {
      '@type': 'SiteNavigationElement',
      position: 3,
      name: 'Products',
      url: 'https://www.originary.xyz/products'
    },
    {
      '@type': 'SiteNavigationElement',
      position: 4,
      name: 'Developers',
      url: 'https://www.originary.xyz/developers'
    },
    {
      '@type': 'SiteNavigationElement',
      position: 5,
      name: 'Declare',
      url: 'https://www.originary.xyz/declare'
    },
    {
      '@type': 'SiteNavigationElement',
      position: 6,
      name: 'Blog',
      url: 'https://www.originary.xyz/blog'
    },
    {
      '@type': 'SiteNavigationElement',
      position: 7,
      name: 'Verify',
      url: 'https://www.originary.xyz/verify'
    },
    {
      '@type': 'SiteNavigationElement',
      position: 8,
      name: 'About',
      url: 'https://www.originary.xyz/about'
    }
  ]
}

export const metadata: Metadata = {
  title: {
    default: 'Originary | Verify Agent Interactions Instantly',
    template: '%s | Originary',
  },
  description: 'Originary issues signature-verified records you can verify offline and export for audits. Built for policy enforcement, compliance, and agentic commerce.',
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
    title: 'Originary | Verify Agent Interactions Instantly',
    description: 'Originary issues signature-verified records you can verify offline and export for audits. Built for policy enforcement, compliance, and agentic commerce.',
    url: 'https://www.originary.xyz',
    siteName: 'Originary',
    images: [{
      url: '/og',
      width: 1200,
      height: 630,
      alt: 'Originary - Verify agent interactions instantly'
    }],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary | Verify Agent Interactions Instantly',
    description: 'Originary issues signature-verified records you can verify offline and export for audits. Built for policy enforcement, compliance, and agentic commerce.',
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
  themeColor: '#FAF8F1',
  colorScheme: 'light',
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" rx="48" fill="%2309090b"/><circle cx="128" cy="128" r="72" fill="none" stroke="%23ffffff" stroke-width="24"/><circle cx="128" cy="128" r="24" fill="%23635BFF"/></svg>' />
        <link rel="icon" type="image/svg+xml" href="/assets/img/favicon.svg" />
        <link rel="apple-touch-icon" href="/assets/img/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <Script id="originary-organization-json-ld" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(organizationJsonLd)}
        </Script>
        <Script id="originary-website-json-ld" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(websiteJsonLd)}
        </Script>
        <Script id="originary-sitenav-json-ld" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(siteNavJsonLd)}
        </Script>
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
