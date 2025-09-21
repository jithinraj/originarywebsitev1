import type { Metadata } from 'next'
import { Inter, Fraunces, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import SkipNavigation from '@/components/SkipNavigation'

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
  name: 'Originary',
  url: 'https://originary.xyz',
  alternateName: ['Originary AI'],
  sameAs: [
    'https://x.com/originaryinc',
    'https://www.linkedin.com/company/originary/',
    'https://github.com/peacprotocol',
    'https://originaryai.com',
    'https://peacprotocol.org'
  ],
  logo: 'https://originary.xyz/og/originary-logo.png'
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Originary',
  url: 'https://originary.xyz'
}

export const metadata: Metadata = {
  title: {
    default: 'Originary : Receipts for the Agentic Web',
    template: '%s | Originary'
  },
  description: 'Publish peac.txt, settle via x402 or your rail, and prove compliance on every request with Receipts. Powered by the PEAC open protocol.',
  keywords: ['agentic web', 'orchestration protocol', 'AI coordination', 'PEAC protocol', 'HTTP 402', 'verifiable receipts', 'API policy', 'machine readable payments', 'AI transparency'],
  authors: [{ name: 'Originary', url: 'https://originary.xyz' }],
  creator: 'Originary',
  publisher: 'Originary',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://originary.xyz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Originary : Orchestration for the Agentic Web',
    description: 'Publish peac.txt, settle via x402 or your rail, and prove compliance on every request with Receipts. Powered by the PEAC open protocol.',
    url: 'https://originary.xyz/',
    siteName: 'Originary',
    images: [{
      url: '/og.jpg',
      width: 1200,
      height: 630,
      alt: 'Originary - Orchestration for the Agentic Web'
    }],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary : Orchestration for the Agentic Web',
    description: 'Publish peac.txt, settle via x402 or your rail, and prove compliance on every request with Receipts. Powered by the PEAC open protocol.',
    images: ['/og.jpg'],
    site: '@originaryinc',
    creator: '@originaryinc',
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
    google: 'your-google-verification-code',
  },
}

export const viewport = {
  themeColor: '#FAF8F1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" rx="64" fill="%23FAF8F1"/><circle cx="128" cy="128" r="78" fill="%230B0B0B"/><circle cx="128" cy="128" r="48" fill="%23FAF8F1"/></svg>' />
        <link rel="canonical" href="https://originary.xyz/" />
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
        <div className="wrap">
          {/* Texture overlay */}
          <div className="grain" aria-hidden="true"></div>

          {children}
        </div>

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
      </body>
    </html>
  )
}
