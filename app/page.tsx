import type { Metadata } from 'next'
import { HomeNav } from '@/components/homepage/HomeNav'
import { Hero } from '@/components/homepage/Hero'
import { WhoIsItFor } from '@/components/homepage/WhoIsItFor'
import { HowItWorks } from '@/components/homepage/HowItWorks'
import { TrustProof } from '@/components/homepage/TrustProof'
import { Comparison } from '@/components/homepage/Comparison'
import { OpenStandard } from '@/components/homepage/OpenStandard'
import { FAQ } from '@/components/homepage/FAQ'
import { DemoCTA } from '@/components/homepage/DemoCTA'
import { HomeFooter } from '@/components/homepage/HomeFooter'

export const metadata: Metadata = {
  title: {
    absolute: 'Originary | Verify agent requests, apply policy, return portable signed records'
  },
  description: 'Originary helps APIs, tools, and MCP servers verify agent requests, apply policy, and return portable signed records. Built on PEAC. Self-hostable. Offline-verifiable.',
  keywords: [
    'agent verification',
    'API access control',
    'request evaluation',
    'signed records',
    'portable records',
    'PEAC Protocol',
    'MCP server',
    'agent-facing API',
    'policy engine',
    'open source',
  ],
  authors: [{ name: 'Originary', url: 'https://www.originary.xyz' }],
  creator: 'Originary',
  publisher: 'Originary',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Originary | Verify agent requests, apply policy, return portable signed records',
    description: 'Originary helps APIs, tools, and MCP servers verify agent requests, apply policy, and return portable signed records. Built on PEAC. Self-hostable. Offline-verifiable.',
    url: 'https://www.originary.xyz',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Originary: verify agent requests, apply policy, return portable signed records' }],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary | Verify agent requests, apply policy, return portable signed records',
    description: 'Originary helps APIs, tools, and MCP servers verify agent requests, apply policy, and return portable signed records. Built on PEAC. Self-hostable. Offline-verifiable.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Originary only for people building agents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Originary is built first for operators of systems that agents access: APIs, tools, MCP servers, and platforms exposing actions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Originary still work if agents do not comply?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, partially. Originary can still enforce operator-side policy and generate operator-side records. Full cross-party proof gets stronger when both sides participate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Originary just observability?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Observability helps you inspect behavior. Originary adds access-time control and a portable signed record you can use outside one product.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need PEAC to use Originary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Originary delivers product value directly. PEAC keeps the records portable and standards-aligned.',
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="hp-root">
        <HomeNav />
        <main id="main-content" role="main">
          <Hero />
          <WhoIsItFor />
          <HowItWorks />
          <TrustProof />
          <Comparison />
          <OpenStandard />
          <FAQ />
          <DemoCTA />
        </main>
        <HomeFooter />
      </div>
    </>
  )
}
