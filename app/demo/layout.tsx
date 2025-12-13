import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'PEAC Protocol Trace | Originary' },
  description: 'Watch a complete PEAC v0.9.23 transaction end to end. Agent discovers policy via peac.txt, receives HTTP 402 challenge, pays via x402/l402/stripe, and receives a signed PEAC-Receipt verifiable offline with JWKS.',
  keywords: 'PEAC protocol, HTTP 402, verifiable receipts, policy discovery, x402, l402, JWKS verification, agent transactions, aipref, peac.txt',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'article',
    title: 'PEAC Protocol Trace - HTTP 402 Transaction Demo',
    description: 'Watch a complete PEAC v0.9.23 transaction end to end. Agent discovers policy, receives 402 challenge, pays, and receives a signed receipt verifiable offline.',
    url: 'https://www.originary.xyz/demo',
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PEAC Protocol Trace - HTTP 402 Transaction Demo',
    description: 'Watch a complete PEAC v0.9.23 transaction end to end. Agent discovers policy, receives 402 challenge, pays, and receives a signed receipt verifiable offline.',
    images: ['https://www.originary.xyz/og.jpg'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.originary.xyz/demo'
  },
}

// JSON-LD structured data for the demo page
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'PEAC Protocol Transaction Trace',
  description: 'Interactive demonstration of a complete PEAC v0.9.23 transaction flow including policy discovery, HTTP 402 payment challenge, and receipt verification.',
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
      url: 'https://www.originary.xyz/og/originary-logo.png'
    }
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.originary.xyz/demo'
  },
  datePublished: '2025-12-13',
  dateModified: '2025-12-13',
  about: [
    { '@type': 'Thing', name: 'HTTP 402 Payment Required' },
    { '@type': 'Thing', name: 'PEAC Protocol' },
    { '@type': 'Thing', name: 'Verifiable Receipts' },
    { '@type': 'Thing', name: 'JWKS Verification' }
  ],
  keywords: 'PEAC, HTTP 402, x402, l402, JWKS, verifiable receipts, agent transactions'
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
