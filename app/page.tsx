import type { Metadata } from 'next'
import {
  Nav,
  HomeFooter,
  Divider,
  HeroV2,
  WorksWithStrip,
  ProofStrip,
  Problem,
  HowItWorks,
  UseCases,
  CategoryMatrix,
  Comparison,
  Ladder,
  DemoCTA,
  Reveal,
  PALETTE,
} from '@/components/home'
import { WordmarkStream } from '@/components/home/motion/WordmarkStream'

export const metadata: Metadata = {
  title: {
    absolute: 'Originary | Verify Machine Actions Across Boundaries',
  },
  description:
    'Originary helps teams issue signed records for API, MCP, agent, gateway, payment, and provisioning workflows without sharing logs or dashboard access.',
  keywords: [
    'Originary',
    'PEAC Protocol',
    'signed records',
    'machine action verification',
    'verifiable interaction records',
    'API verification',
    'MCP verification',
    'agent workflows',
    'gateway decisions',
    'payment workflows',
    'provisioning records',
    'audit bundles',
    'offline verification',
    'open-source protocol',
  ],
  authors: [{ name: 'Originary', url: 'https://www.originary.xyz' }],
  creator: 'Originary',
  publisher: 'Originary',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Originary | Verify Machine Actions Across Boundaries',
    description:
      'Signed records for API, MCP, agent, gateway, payment, and provisioning workflows.',
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
    title: 'Originary | Verify Machine Actions Across Boundaries',
    description:
      'Issue signed records so another party can verify what happened without internal logs or dashboard access.',
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
      '@id': 'https://www.originary.xyz/#org',
      name: 'Originary',
      url: 'https://www.originary.xyz',
      logo: 'https://www.originary.xyz/logo/originary-wordmark.svg',
      description:
        'Originary helps teams issue and verify portable signed records for machine actions.',
      sameAs: [
        'https://www.linkedin.com/company/originary',
        'https://x.com/originaryx',
        'https://bsky.app/profile/originary.bsky.social',
        'https://warpcast.com/originary',
        'https://github.com/originaryx',
        'https://github.com/peacprotocol',
        'https://github.com/peacprotocol/peac',
        'https://www.npmjs.com/org/peac',
        'https://originary.substack.com',
        'https://www.crunchbase.com/organization/originary',
        'https://tracxn.com/d/companies/originary/__hozixk1ps7D4a5LcU9JgV4wq9zY0rDHugXaahrTgh0g',
      ],
      subjectOf: [
        {
          '@type': 'SocialMediaPosting',
          headline: 'Jithin Raj, Founder, Originary on CNBC-TV18',
          name: 'Jithin Raj, Founder, Originary on CNBC-TV18',
          url: 'https://x.com/CNBCTV18News/status/2024805869775421702',
          datePublished: '2026-02-20',
          author: { '@type': 'Organization', name: 'CNBC-TV18' },
          publisher: { '@type': 'Organization', name: 'CNBC-TV18' },
        },
        {
          '@type': 'VideoObject',
          name: 'India AI Impact Summit 2026 LIVE | In Conversation Jithin Raj, Founder of Originary',
          description: 'In conversation with Jithin Raj, Founder of Originary, at the India AI Impact Summit 2026.',
          thumbnailUrl: 'https://i.ytimg.com/vi/jaNuIGwAges/hqdefault.jpg',
          uploadDate: '2026-02-20T03:25:42-08:00',
          contentUrl: 'https://www.youtube.com/watch?v=jaNuIGwAges',
          embedUrl: 'https://www.youtube.com/embed/jaNuIGwAges',
          url: 'https://www.youtube.com/watch?v=jaNuIGwAges',
          publisher: { '@type': 'Organization', name: 'Network18' },
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.originary.xyz/#website',
      url: 'https://www.originary.xyz',
      name: 'Originary',
      publisher: { '@id': 'https://www.originary.xyz/#org' },
      description:
        'Signed records for API, MCP, agent, gateway, payment, and provisioning workflows.',
    },
    {
      '@type': 'SoftwareSourceCode',
      '@id': 'https://www.originary.xyz/peac#protocol',
      name: 'PEAC Protocol',
      description:
        'Open-source software for portable signed interaction records, published by Originary.',
      codeRepository: 'https://github.com/peacprotocol/peac',
      license: 'https://www.apache.org/licenses/LICENSE-2.0',
      programmingLanguage: ['TypeScript', 'JavaScript'],
      publisher: { '@id': 'https://www.originary.xyz/#org' },
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
          <HeroV2 />
          <ProofStrip />
          <WorksWithStrip />
          <Reveal threshold={0.12}>
            <Divider eyebrow="where logs fail" />
            <Problem />
          </Reveal>
          <Reveal threshold={0.12}>
            <Divider eyebrow="how it works" />
            <HowItWorks />
          </Reveal>
          <Reveal threshold={0.12}>
            <Divider eyebrow="where it fits" />
            <UseCases />
          </Reveal>
          <Reveal threshold={0.12}>
            <Divider eyebrow="ecosystem fit" />
            <CategoryMatrix />
          </Reveal>
          <Reveal threshold={0.12}>
            <Divider eyebrow="what originary is not" />
            <Comparison />
          </Reveal>
          <Reveal threshold={0.12}>
            <Divider eyebrow="start small" />
            <Ladder />
          </Reveal>
          <Reveal threshold={0.12}>
            <Divider eyebrow="see it on your workflow" />
            <DemoCTA />
          </Reveal>
        </main>
        <WordmarkStream />
        <HomeFooter />
      </div>
    </>
  )
}
