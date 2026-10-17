import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'PEAC Protocol is free and open-source. Apache-2.0. Self-host with no limits, no fees, no sign-up. Commercial support available for teams deploying at scale.',
  robots: 'index,follow',
  alternates: {
    canonical: '/pricing'
  },
  openGraph: {
    title: 'Pricing | Originary',
    description: 'PEAC Protocol is free and open source under Apache-2.0. The Verification Pilot puts one production workflow on signed records, by scoped quote.',
    url: '/pricing',
    siteName: 'Originary',
    images: [{
      url: '/og',
      width: 1200,
      height: 630,
      alt: 'Originary Pricing'
    }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | Originary',
    description: 'PEAC Protocol is free and open source under Apache-2.0. The Verification Pilot puts one production workflow on signed records, by scoped quote.',
    images: ['/og']
  }
}

const offerCatalogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  'name': 'Originary Pricing',
  'itemListElement': [
    {
      '@type': 'Offer',
      'name': 'Open Source',
      'description': 'Full PEAC Protocol and core tooling. Self-host with no limits.',
      'price': '0',
      'priceCurrency': 'USD',
      'availability': 'https://schema.org/InStock'
    },
    {
      '@type': 'Offer',
      'name': 'Verification Pilot',
      'description': 'A fixed-scope engagement: one production workflow, issued and verified end to end in your infrastructure. Priced by scoped quote.',
      'availability': 'https://schema.org/PreOrder'
    }
  ]
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script
        id="pricing-json-ld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogJsonLd) }}
      />
      {children}
    </>
  )
}