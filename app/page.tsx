import type { Metadata } from 'next'
import {
  Nav,
  HomeFooter,
  Divider,
  Hero,
  Problem,
  HowItWorks,
  UseCases,
  Comparison,
  Ladder,
  DemoCTA,
  PALETTE,
} from '@/components/home'

export const metadata: Metadata = {
  title: {
    absolute: 'Originary | Portable verification for machine actions',
  },
  description:
    'Issue and verify portable signed records for agent, API, MCP, gateway, and payment workflows. No shared logs, no dashboard access required.',
  keywords: [
    'portable signed records',
    'machine action verification',
    'offline verification',
    'PEAC Protocol',
    'agent verification',
    'API verification',
    'MCP verification',
  ],
  authors: [{ name: 'Originary', url: 'https://www.originary.xyz' }],
  creator: 'Originary',
  publisher: 'Originary',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Originary | Portable verification for machine actions',
    description:
      'Issue and verify portable signed records for agent, API, MCP, gateway, and payment workflows. No shared logs, no dashboard access required.',
    url: 'https://www.originary.xyz',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og',
        width: 1200,
        height: 630,
        alt: 'Originary | Portable verification for machine actions',
      },
    ],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary | Portable verification for machine actions',
    description:
      'Issue and verify portable signed records for agent, API, MCP, gateway, and payment workflows. No shared logs, no dashboard access required.',
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
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.originary.xyz/#organization',
      name: 'Originary',
      url: 'https://www.originary.xyz',
      logo: 'https://www.originary.xyz/logo/originary-wordmark.svg',
      sameAs: [
        'https://github.com/peacprotocol/peac',
        'https://x.com/originaryx',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.originary.xyz/#website',
      name: 'Originary',
      url: 'https://www.originary.xyz',
      publisher: { '@id': 'https://www.originary.xyz/#organization' },
      description:
        'Issue and verify portable signed records for agent, API, MCP, gateway, and payment workflows. No shared logs, no dashboard access required.',
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div
        style={{
          background: PALETTE.bg,
          color: PALETTE.ink,
          fontFamily: 'var(--font-plex-sans), "IBM Plex Sans", system-ui, sans-serif',
          minHeight: '100vh',
        }}
      >
        <Nav />
        <main id="main-content" role="main">
          <Hero />
          <Divider eyebrow="the problem" />
          <Problem />
          <Divider eyebrow="how it works" />
          <HowItWorks />
          <Divider eyebrow="use cases" />
          <UseCases />
          <Divider eyebrow="what originary is not" />
          <Comparison />
          <Divider eyebrow="get started" />
          <Ladder />
          <Divider eyebrow="request a demo" />
          <DemoCTA />
        </main>
        <HomeFooter />
      </div>
    </>
  )
}
