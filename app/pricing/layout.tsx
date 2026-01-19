import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Pricing for Originary Trace and decision record infrastructure. Plans for agent observability, interaction tracking, and PEAC-Receipts.',
  keywords: 'trace pricing, agent interactions, decision records, self-hosted, cloud pricing, PEAC Protocol',
  robots: 'index,follow',
  alternates: {
    canonical: '/pricing'
  },
  openGraph: {
    title: 'Pricing',
    description: 'Pricing for Originary Trace and decision record infrastructure. Plans for agent observability, interaction tracking, and PEAC-Receipts.',
    url: '/pricing',
    siteName: 'Originary',
    images: [{
      url: '/og.jpg',
      width: 1200,
      height: 630,
      alt: 'Originary Pricing'
    }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing',
    description: 'Pricing for Originary Trace and decision record infrastructure. Plans for agent observability, interaction tracking, and PEAC-Receipts.',
    images: ['/og.jpg']
  }
}

const offerCatalogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  'name': 'Originary Trace Pricing',
  'itemListElement': [
    {
      '@type': 'Offer',
      'name': 'Trace OSS',
      'description': 'Self-hosted agent interaction tracking with PEAC receipts',
      'price': '0',
      'priceCurrency': 'USD',
      'availability': 'https://schema.org/InStock'
    },
    {
      '@type': 'Offer',
      'name': 'Trace Starter',
      'description': 'Managed Trace Cloud with 90-day retention',
      'price': '29',
      'priceCurrency': 'USD',
      'billingDuration': 'P1M',
      'availability': 'https://schema.org/InStock'
    },
    {
      '@type': 'Offer',
      'name': 'Trace Pro',
      'description': 'Production deployments with 1-year retention and SSO',
      'price': '99',
      'priceCurrency': 'USD',
      'billingDuration': 'P1M',
      'availability': 'https://schema.org/InStock'
    },
    {
      '@type': 'Offer',
      'name': 'Trace Enterprise',
      'description': 'Custom deployment with domain attestation and KMS',
      'price': '0',
      'priceCurrency': 'USD',
      'priceSpecification': {
        '@type': 'UnitPriceSpecification',
        'price': '0',
        'priceCurrency': 'USD'
      },
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