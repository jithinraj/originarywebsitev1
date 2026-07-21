import type { Metadata } from 'next'
import {
  Nav,
  HomeFooter,
  Divider,
  HeroV2,
  WorksWithStrip,
  ProofStrip,
  Problem,
  ProductSystem,
  UseCases,
  BuiltOnPEAC,
  DemoCTA,
  Reveal,
  PALETTE,
} from '@/components/home'
import { WordmarkStream } from '@/components/home/motion/WordmarkStream'
import { originaryVerify, peacProtocol } from '@/lib/structured-data/entities'

export const metadata: Metadata = {
  title: {
    absolute: 'AI agent audit records and verification software | Originary',
  },
  description:
    'Issue, verify, and package signed records for API, agent, MCP, gateway, payment, and provisioning workflows, without sharing private logs.',
  authors: [{ name: 'Originary', url: 'https://www.originary.xyz' }],
  creator: 'Originary',
  publisher: 'Originary',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AI agent audit records and verification software | Originary',
    description:
      'Signed records for API, MCP, agent, gateway, payment, and provisioning workflows, verifiable without your private logs.',
    url: 'https://www.originary.xyz',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og',
        width: 1200,
        height: 630,
        alt: 'Originary | Verify Machine Actions Across Boundaries',
      },
    ],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI agent audit records and verification software | Originary',
    description:
      'Issue signed records so another party can verify what the issuer recorded without internal logs or dashboard access.',
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

// The canonical Organization and WebSite render once in the layout. The
// homepage adds only the product and protocol nodes, referencing that Org @id.
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [originaryVerify, peacProtocol],
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
          {/* 1. Hero, with the interop strip directly beneath it */}
          <HeroV2 />
          <WorksWithStrip />
          {/* 2. Boundary problem */}
          <Reveal threshold={0.12}>
            <Divider eyebrow="where logs fail" />
            <Problem />
          </Reveal>
          {/* 3. Record / Verify / Bundle */}
          <Reveal threshold={0.12}>
            <Divider eyebrow="the product" />
            <ProductSystem />
          </Reveal>
          {/* 4. Priority workflows, with a link to all six */}
          <Reveal threshold={0.12}>
            <Divider eyebrow="where it fits" />
            <UseCases />
          </Reveal>
          {/* 5. PEAC / open-source proof */}
          <Reveal threshold={0.12}>
            <Divider eyebrow="open source" />
            <BuiltOnPEAC />
            <ProofStrip />
          </Reveal>
          {/* 6. Final CTA */}
          <Reveal threshold={0.12}>
            <Divider eyebrow="see it on your workflow" />
            <DemoCTA />
          </Reveal>
        </main>
        <HomeFooter />
        <WordmarkStream />
      </div>
    </>
  )
}
