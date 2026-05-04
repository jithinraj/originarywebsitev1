import type { Metadata } from 'next'
import { HomeNav } from '@/components/homepage/HomeNav'
import { Hero } from '@/components/homepage/Hero'
import { SinglePageHome } from '@/components/homepage/SinglePageHome'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    absolute: 'Originary | Interaction records for AI agents, MCP, & APIs'
  },
  description: 'Originary helps teams create portable signed records for agent, API, MCP, gateway, A2A, and payment workflows, so another party can verify what happened without trusting your logs.',
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
    title: 'Originary | Interaction records for AI agents, MCP, & APIs',
    description: 'Originary helps teams create portable signed records for agent, API, MCP, gateway, A2A, and payment workflows, so another party can verify what happened without trusting your logs.',
    url: 'https://www.originary.xyz',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Originary: proof that leaves the system that made it' }],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary | Interaction records for AI agents, MCP, & APIs',
    description: 'Originary helps teams create portable signed records for agent, API, MCP, gateway, A2A, and payment workflows, so another party can verify what happened without trusting your logs.',
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
      description: 'Originary helps teams create portable signed records for agent, API, MCP, gateway, A2A, and payment workflows, so another party can verify what happened without trusting your logs.',
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://www.originary.xyz/#software',
      name: 'Originary',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: 'https://www.originary.xyz',
      publisher: { '@id': 'https://www.originary.xyz/#organization' },
      description: 'Originary helps teams issue, verify, and export portable signed interaction records for APIs, MCP servers, tools, agent workflows, and commerce events.',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.originary.xyz/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is this observability?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Observability helps your team understand system behavior. Originary creates records another party can verify independently.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need Originary to verify a record?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Verification should work offline with issuer public keys. Originary helps teams run issuance, verification, and export workflows in production.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if I stop using Originary?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your records remain portable. PEAC is open, and verification does not require a callback to Originary.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this only for AI agents?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. It is for automated actions across APIs, MCP servers, tools, gateways, and agent workflows.',
          },
        },
      ],
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
      <div className="hp-root">
        <HomeNav />
        <main id="main-content" role="main">
          <Hero />
          <SinglePageHome />
        </main>
        <Footer />
      </div>
    </>
  )
}
