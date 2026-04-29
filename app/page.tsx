import type { Metadata } from 'next'
import { HomeNav } from '@/components/homepage/HomeNav'
import { Hero } from '@/components/homepage/Hero'
import { SinglePageHome } from '@/components/homepage/SinglePageHome'
import { HomeFooter } from '@/components/homepage/HomeFooter'

export const metadata: Metadata = {
  title: {
    absolute: 'Originary | Signed records for AI agents, APIs, MCP, and commerce'
  },
  description: 'Originary issues portable signed interaction records for AI agents, APIs, MCP tools, and commerce workflows so another party can verify what happened without relying on internal logs.',
  keywords: [
    'portable signed records',
    'signed interaction records',
    'cross-boundary workflows',
    'API verification',
    'MCP verification',
    'agent workflow verification',
    'commerce workflow proof',
    'offline verification',
    'PEAC Protocol',
  ],
  authors: [{ name: 'Originary', url: 'https://www.originary.xyz' }],
  creator: 'Originary',
  publisher: 'Originary',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Originary | Signed records for AI agents, APIs, MCP, and commerce',
    description: 'Originary issues portable signed interaction records for AI agents, APIs, MCP tools, and commerce workflows so another party can verify what happened without relying on internal logs.',
    url: 'https://www.originary.xyz',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Originary: portable signed records for cross-boundary workflows' }],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary | Signed records for AI agents, APIs, MCP, and commerce',
    description: 'Originary issues portable signed interaction records for AI agents, APIs, MCP tools, and commerce workflows so another party can verify what happened without relying on internal logs.',
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
      name: 'What is Originary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Originary is a production layer for issuing, verifying, and exporting portable signed interaction records for workflows that need to be verified outside your system.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Originary create?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Originary creates signed interaction records that bind issuer, timestamp, policy, terms, result, metadata, and signature into a portable artifact.',
      },
    },
    {
      '@type': 'Question',
      name: 'When do teams need Originary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Teams need Originary when another party needs proof beyond internal logs for an API, MCP, agent, commerce, or runtime workflow.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is verification tied to Originary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Records are portable, verification can stay independent, and self-hosted paths remain available.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where should we start?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With one workflow where another party needs something stronger than logs.',
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
          <SinglePageHome />
        </main>
        <HomeFooter />
      </div>
    </>
  )
}
