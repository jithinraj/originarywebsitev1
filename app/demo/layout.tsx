import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'PEAC Protocol Trace | Originary' },
  description: 'Watch a PEAC v0.9.27 transaction: policy discovery, HTTP 402 challenge, payment, and signed receipt verification.',
  keywords: 'PEAC protocol, HTTP 402, verifiable receipts, policy discovery, x402, JWKS verification, agent transactions, aipref, peac.txt',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'article',
    title: 'PEAC Protocol Trace - HTTP 402 Transaction Demo',
    description: 'Watch a complete PEAC v0.9.27 transaction end to end. Agent discovers policy, receives 402 challenge, pays, and receives a signed receipt verifiable offline.',
    url: '/demo',
    images: ['/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PEAC Protocol Trace - HTTP 402 Transaction Demo',
    description: 'Watch a complete PEAC v0.9.27 transaction end to end. Agent discovers policy, receives 402 challenge, pays, and receives a signed receipt verifiable offline.',
    images: ['/og.jpg'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: {
    canonical: '/demo'
  },
}

// JSON-LD structured data for the demo page
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'PEAC Protocol Transaction Trace',
  description: 'Interactive demonstration of a complete PEAC v0.9.27 transaction flow including policy discovery, HTTP 402 payment challenge, and receipt verification.',
  author: {
    '@type': 'Organization',
    name: 'Originary',
    url: 'https://www.originary.xyz'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Originary',
    logo: {
      '@type': 'ImageObject',
      url: '/og/originary-logo.png'
    }
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.originary.xyz/demo'
  },
  datePublished: '2026-01-02',
  dateModified: '2026-01-02',
  about: [
    { '@type': 'Thing', name: 'HTTP 402 Payment Required' },
    { '@type': 'Thing', name: 'PEAC Protocol' },
    { '@type': 'Thing', name: 'Verifiable Receipts' },
    { '@type': 'Thing', name: 'JWKS Verification' }
  ],
  keywords: 'PEAC, HTTP 402, x402, JWKS, verifiable receipts, agent transactions'
}

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
