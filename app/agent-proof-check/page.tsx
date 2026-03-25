import type { Metadata } from 'next'
import EvidenceCheckClient from './EvidenceCheckClient'

const PAGE_URL = 'https://www.originary.xyz/agent-proof-check'

export const metadata: Metadata = {
  title: 'AI Agent Proof Check | See What Logs Can\'t Prove',
  description:
    'Paste logs, traces, webhooks, signed records, or incident summaries from AI agents, APIs, tool calls, and MCP servers. See what another party can verify, what is missing, and what holds up in a review, dispute, or audit.',
  keywords: [
    'evidence check',
    'agent evidence',
    'log verification',
    'receipt verification',
    'signed receipts',
    'interaction records',
    'agent accountability',
    'portable evidence',
    'audit trail',
    'verifiable logs',
  ],
  authors: [{ name: 'Originary', url: 'https://www.originary.xyz' }],
  creator: 'Originary',
  publisher: 'Originary',
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
  alternates: {
    canonical: '/agent-proof-check',
  },
  openGraph: {
    title: 'Can you prove what your AI agent did?',
    description:
      'A browser-based check for AI agent, API, tool, and MCP activity. Compare logs to signed records and see what another party can verify.',
    url: '/agent-proof-check',
    siteName: 'Originary',
    images: [
      {
        url: '/og',
        width: 1200,
        height: 630,
        alt: 'Can you prove what your AI agent did?',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Can you prove what your AI agent did?',
    description:
      'A browser-based check for AI agent, API, tool, and MCP activity. Compare logs to signed records and see what another party can verify.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
}

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': PAGE_URL,
  url: PAGE_URL,
  name: 'AI Agent Audit & Proof Check',
  description:
    'Paste logs, traces, webhooks, signed records, or incident summaries from AI agents, APIs, tool calls, and MCP servers. See what another party can verify, what is missing, and what holds up in a review, dispute, or audit.',
  isPartOf: { '@id': 'https://www.originary.xyz/#website' },
  publisher: { '@id': 'https://www.originary.xyz/#org' },
  inLanguage: 'en-US',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Originary',
      item: 'https://www.originary.xyz',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Proof Check',
      item: PAGE_URL,
    },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${PAGE_URL}#faq`,
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does the evidence analyzer work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The analyzer uses client-side heuristics to classify your input and estimate evidence strength. It checks for structural properties like signatures, timestamps, issuer fields, and policy references. Everything runs in your browser.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of artifacts can I analyze?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Logs, traces, JSON payloads, signed records (compact JWS), webhooks, payment events, and plain-English incident descriptions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my data sent anywhere?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. All analysis runs locally in your browser. No data is transmitted to any server.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Proof Check and Agent Auditor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Proof Check helps you understand whether your current artifacts are strong enough. Agent Auditor is for opening and verifying a signed record once you already have one.',
      },
    },
  ],
}

export default function EvidenceCheckPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <EvidenceCheckClient />
    </>
  )
}
