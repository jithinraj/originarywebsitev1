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
  CategoryMatrix,
  Ladder,
  DemoCTA,
  Reveal,
  PALETTE,
} from '@/components/home'
import { WordmarkStream } from '@/components/home/motion/WordmarkStream'

export const metadata: Metadata = {
  title: {
    absolute: 'Originary | Verifiable Records for AI Agents and APIs',
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
    title: 'Originary | Verifiable Records for AI Agents and APIs',
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
    title: 'Originary | Verifiable Records for AI Agents and APIs',
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
      '@id': 'https://www.originary.xyz/#poem',
      name: 'Poem, Inc.',
      legalName: 'Poem, Inc.',
      url: 'https://www.originary.xyz',
      sameAs: [
        'https://www.linkedin.com/company/originary',
        'https://www.crunchbase.com/organization/originary',
      ],
    },
    {
      '@type': 'Brand',
      '@id': 'https://www.originary.xyz/#originary',
      name: 'Originary',
      url: 'https://www.originary.xyz',
      logo: 'https://www.originary.xyz/logo/originary-wordmark.svg',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.originary.xyz/#website',
      url: 'https://www.originary.xyz',
      name: 'Originary',
      publisher: { '@id': 'https://www.originary.xyz/#poem' },
      description:
        'Portable signed records for API, MCP, agent, gateway, payment, and provisioning workflows.',
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://www.originary.xyz/product#verify',
      name: 'Originary Verify',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Cross-platform',
      url: 'https://www.originary.xyz/product',
      brand: { '@id': 'https://www.originary.xyz/#originary' },
      provider: { '@id': 'https://www.originary.xyz/#poem' },
      description:
        'Software and support for issuing, verifying, and packaging signed interaction records in production workflows.',
    },
    {
      '@type': 'SoftwareSourceCode',
      '@id': 'https://www.originary.xyz/peac#protocol',
      name: 'PEAC Protocol',
      description:
        'Apache-2.0 open-source protocol for portable signed interaction records, maintained by Originary.',
      codeRepository: 'https://github.com/peacprotocol/peac',
      license: 'https://www.apache.org/licenses/LICENSE-2.0',
      programmingLanguage: ['TypeScript', 'JavaScript'],
      maintainer: { '@id': 'https://www.originary.xyz/#poem' },
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
            <Divider eyebrow="the product" />
            <ProductSystem />
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
            <Divider eyebrow="start small" />
            <Ladder />
          </Reveal>
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
