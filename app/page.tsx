import type { Metadata } from 'next'
import { HomeNav } from '@/components/homepage/HomeNav'
import { Hero } from '@/components/homepage/Hero'
// import { TractionStrip } from '@/components/homepage/TractionStrip'  // preserved: disabled for now
import { WhoIsItFor } from '@/components/homepage/WhoIsItFor'
import { Problem } from '@/components/homepage/Problem'
// import { HowItWorks } from '@/components/homepage/HowItWorks'  // preserved: redundant with ArchDiagram
import { TrustProof } from '@/components/homepage/TrustProof'
// import { EnterpriseProof } from '@/components/homepage/EnterpriseProof'  // preserved: merged into TrustProof
import { WhyNow } from '@/components/homepage/WhyNow'
// import { ArchDiagram } from '@/components/homepage/ArchDiagram'  // preserved: disabled for now
import { Comparison } from '@/components/homepage/Comparison'
// import { LogsVsRecords } from '@/components/homepage/LogsVsRecords'  // preserved: now integrated into Hero
import { OpenStandard } from '@/components/homepage/OpenStandard'
import { FAQ } from '@/components/homepage/FAQ'
import { DemoCTA } from '@/components/homepage/DemoCTA'
import { EvidenceTeaser } from '@/components/homepage/EvidenceTeaser'
import { HomeFooter } from '@/components/homepage/HomeFooter'

export const metadata: Metadata = {
  title: {
    absolute: 'Originary | Prove what agents did'
  },
  description: 'Originary helps teams return signed records for AI agents, APIs, MCP, and automated workflows so another party can verify what happened without trusting a dashboard.',
  keywords: [
    'AI agent verification',
    'signed interaction records',
    'MCP verification',
    'agent audit trail',
    'API audit trail',
    'offline verification',
    'PEAC Protocol',
    'verifiable interaction records',
    'cross-runtime verification',
  ],
  authors: [{ name: 'Originary', url: 'https://www.originary.xyz' }],
  creator: 'Originary',
  publisher: 'Originary',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Originary | Prove what agents did',
    description: 'Originary helps teams return signed records for AI agents, APIs, MCP, and automated workflows so another party can verify what happened without trusting a dashboard.',
    url: 'https://www.originary.xyz',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Originary: prove what agents did' }],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary | Prove what agents did',
    description: 'Originary helps teams return signed records for AI agents, APIs, MCP, and automated workflows so another party can verify what happened without trusting a dashboard.',
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
      name: 'Is this only for people building AI agents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. It is also for API publishers, MCP server operators, priced API teams, security reviewers, compliance teams, and any workflow where automated requests cross organizational boundaries.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does this still work if agents do not comply?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The point is not to assume good behavior. The point is to return records that help you inspect what happened, what was allowed, and what another party can verify later.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this just observability?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Observability helps teams understand internal behavior. Signed records help teams prove what happened across boundaries.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need PEAC to use Originary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Originary is built on PEAC. In practice, you use the product surface while keeping the underlying record format and verification model open.',
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
          {/* EvidenceTeaser removed: redundant with hero artifact card */}
          {/* <TractionStrip /> */}
          <Problem />
          <Comparison />
          <WhoIsItFor />
          <TrustProof />
          <WhyNow />
          {/* <ArchDiagram /> */}{/* preserved: disabled for now */}
          {/* <EnterpriseProof /> */}{/* merged into TrustProof */}
          {/* <HowItWorks /> */}{/* redundant with ArchDiagram */}
          <OpenStandard />
          <FAQ />
          <DemoCTA />
        </main>
        <HomeFooter />
      </div>
    </>
  )
}
