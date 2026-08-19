import type { Metadata } from 'next'
import {
  Nav,
  HomeFooter,
  Divider,
  HeroV2,
  WhenThisMatters,
  RecordVerifyShare,
  RecordGallery,
  VerificationLimits,
  StartHere,
  LogsStayPrivate,
  ProtocolSimple,
  InteropMarquee,
  EndCTA,
  Reveal,
  PALETTE,
} from '@/components/home'
import { WordmarkStream } from '@/components/home/motion/WordmarkStream'
import { originaryVerificationPilot, peacProtocol } from '@/lib/structured-data/entities'

export const metadata: Metadata = {
  title: {
    absolute: 'Originary | Verifiable Records for Agent Actions',
  },
  description:
    'Originary gives agent, API, MCP and gateway actions signed records you can verify later, share with customers or auditors, and use without exposing your logs.',
  authors: [{ name: 'Originary', url: 'https://www.originary.xyz' }],
  creator: 'Originary',
  publisher: 'Originary',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Originary | Verifiable Records for Agent Actions',
    description:
      'Originary gives agent, API, MCP and gateway actions signed records you can verify later, share with customers or auditors, and use without exposing your logs.',
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
    title: 'Originary | Verifiable Records for Agent Actions',
    description:
      'Originary gives agent, API, MCP and gateway actions signed records you can verify later, share with customers or auditors, and use without exposing your logs.',
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
            <Divider />
            <WhenThisMatters />
          </Reveal>
          <Reveal threshold={0.12}>
            <Divider eyebrow="how it works" />
            <RecordVerifyShare />
          </Reveal>
          <Reveal threshold={0.12}>
            <Divider />
            <LogsStayPrivate />
          </Reveal>
          <Reveal threshold={0.12}>
            <Divider eyebrow="records" />
            <RecordGallery />
          </Reveal>
          <Reveal threshold={0.12}>
            <Divider />
            <VerificationLimits />
          </Reveal>
          <Reveal threshold={0.12}>
            <Divider eyebrow="open source" />
            <ProtocolSimple />
          </Reveal>
          <Reveal threshold={0.12}>
            <Divider />
            <StartHere />
          </Reveal>
          <Reveal threshold={0.12}>
            <Divider />
            <EndCTA />
          </Reveal>
        </main>
        <HomeFooter />
        <WordmarkStream />
      </div>
    </>
  )
}
