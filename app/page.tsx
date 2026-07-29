import type { Metadata } from 'next'
import {
  Nav,
  HomeFooter,
  Divider,
  HeroV2,
  InteropMarquee,
  ProofStrip,
  Problem,
  ProductSystem,
  EvidenceBoundary,
  EvidenceCasePanel,
  RecordGallery,
  StartHere,
  UseCases,
  BuiltOnPEAC,
  DemoCTA,
  Reveal,
  PALETTE,
} from '@/components/home'
import { WordmarkStream } from '@/components/home/motion/WordmarkStream'
import { originaryVerificationPilot, peacProtocol } from '@/lib/structured-data/entities'

export const metadata: Metadata = {
  title: {
    absolute: 'Originary | Verifiable Records for Agents, APIs & Gateways',
  },
  description:
    'Create signed records for agent actions, API calls, MCP tool runs, gateway decisions, payments, and provisioning. Verify them without sharing internal logs.',
  authors: [{ name: 'Originary', url: 'https://www.originary.xyz' }],
  creator: 'Originary',
  publisher: 'Originary',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Originary | Verifiable Records for Agents, APIs & Gateways',
    description:
      'Create signed records for agent actions, API calls, MCP tool runs, gateway decisions, payments, and provisioning. Verify them without sharing internal logs.',
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
    title: 'Originary | Verifiable Records for Agents, APIs & Gateways',
    description:
      'Create signed records for agent actions, API calls, MCP tool runs, gateway decisions, payments, and provisioning. Verify them without sharing internal logs.',
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
  '@graph': [originaryVerificationPilot, peacProtocol],
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
          <HeroV2 />
          <InteropMarquee />
          <Reveal threshold={0.12}>
            <Divider eyebrow="start here" />
            <StartHere />
          </Reveal>
          <Reveal threshold={0.12}>
            <Divider eyebrow="the failure" />
            <Problem />
          </Reveal>
          <Reveal threshold={0.12}>
            <Divider eyebrow="the evidence case" />
            <EvidenceCasePanel />
          </Reveal>
          <Reveal threshold={0.12}>
            <Divider eyebrow="the product" />
            <ProductSystem />
          </Reveal>
          <Reveal threshold={0.12}>
            <Divider eyebrow="review workflows" />
            <UseCases />
          </Reveal>
          <Reveal threshold={0.12}>
            <Divider eyebrow="record gallery" />
            <RecordGallery />
          </Reveal>
          <Reveal threshold={0.12}>
            <Divider eyebrow="the boundary" />
            <EvidenceBoundary />
          </Reveal>
          <Reveal threshold={0.12}>
            <Divider eyebrow="open foundation" />
            <BuiltOnPEAC />
            <ProofStrip />
          </Reveal>
          <Reveal threshold={0.12}>
            <Divider eyebrow="start with one action" />
            <DemoCTA />
          </Reveal>
        </main>
        <HomeFooter />
        <WordmarkStream />
      </div>
    </>
  )
}
