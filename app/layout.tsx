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
  alternateName: ['Poem, Inc.', 'Originary™', 'Originary AI', 'Originary Receipts'],
  url: 'https://www.originary.xyz/',
  telephone: '+14157070402',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1111B S Governors Ave, STE 40987',
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
    'https://peacprotocol.substack.com/',
    'https://www.originary.xyz/blog'
  ],
  logo: 'https://www.originary.xyz/og/originary-logo.png',
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
  url: 'https://www.originary.xyz/',
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

export const metadata: Metadata = {
  title: {
    default: 'Originary | Infrastructure and tools for the agentic web',
    template: '%s | Originary',
  },
  description: 'Originary builds infrastructure rails and tools for the agentic web, turning AI agent traffic into verified revenue with HTTP 402/x402 payments, PEAC receipts, AI crawler analytics, and policy tools like Originary Declare (PEAC Policy Kit).',
  keywords: ['Originary', 'PEAC Protocol', 'agentic web', 'AI commerce', 'AI payments', 'HTTP 402', 'x402', 'AI crawler analytics', 'AI policy', 'AIPREF', 'PEAC receipts', 'AI consent', 'AI compliance'],
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
    title: 'Originary | Infrastructure and tools for the agentic web',
    description: 'Originary builds infrastructure rails and tools for the agentic web, turning AI agent traffic into verified revenue with HTTP 402/x402 payments, PEAC receipts, AI crawler analytics, and policy tools like Originary Declare (PEAC Policy Kit).',
    url: 'https://www.originary.xyz',
    siteName: 'Originary',
    images: [{
      url: '/og.jpg',
      width: 1200,
      height: 630,
      alt: 'Originary - Infrastructure and tools for the agentic web'
    }],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary | Infrastructure and tools for the agentic web',
    description: 'Originary builds infrastructure rails and tools for the agentic web, turning AI agent traffic into verified revenue with HTTP 402/x402 payments, PEAC receipts, AI crawler analytics, and policy tools like Originary Declare (PEAC Policy Kit).',
    images: ['/og.jpg'],
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
        <link rel="icon" href='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" rx="64" fill="%23FAF8F1"/><circle cx="128" cy="128" r="78" fill="%230B0B0B"/><circle cx="128" cy="128" r="48" fill="%23FAF8F1"/></svg>' />
        <link rel="manifest" href="/manifest.json" />
        <Script id="originary-organization-json-ld" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(organizationJsonLd)}
        </Script>
        <Script id="originary-website-json-ld" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(websiteJsonLd)}
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
