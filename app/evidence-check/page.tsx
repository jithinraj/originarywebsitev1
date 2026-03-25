import type { Metadata } from 'next'
import EvidenceCheckClient from './EvidenceCheckClient'

const PAGE_URL = 'https://www.originary.xyz/evidence-check'

export const metadata: Metadata = {
  title: 'Evidence Check | Can you prove what your agent did? | Originary',
  description:
    'Paste a log, trace, webhook, receipt, or incident summary. See what another party can verify, what is missing, and how to make evidence portable.',
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
    canonical: '/evidence-check',
  },
  openGraph: {
    title: 'Evidence Check | Can you prove what your agent did?',
    description:
      'Paste a log, trace, webhook, receipt, or plain-English incident summary. See what your team can see, what another party can verify, what is missing, and how to make it portable.',
    url: '/evidence-check',
    siteName: 'Originary',
    images: [
      {
        url: '/og',
        width: 1200,
        height: 630,
        alt: 'Evidence Check: Can you prove what your agent did?',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evidence Check | Can you prove what your agent did?',
    description:
      'Paste a log, trace, webhook, or receipt. See what another party can verify and what is missing.',
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
  name: 'Evidence Check | Can you prove what your agent did?',
  description:
    'Free diagnostic tool: paste a log, trace, webhook, or receipt and see what another party can verify, what is missing, and how to make evidence portable.',
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
      name: 'Evidence Check',
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
      name: 'What is the difference between Evidence Check and Agent Auditor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Evidence Check helps you understand whether your current artifacts are strong enough. Agent Auditor is for opening and verifying a signed record once you already have one.',
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
