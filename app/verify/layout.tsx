import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inspector | Inspect and Validate Interaction Records',
  description: 'Inspect PEAC interaction records. Parse JWS structure, decode claims, and check token format. For full receipt verification with evidence bundles, see Agent Auditor.',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'Inspector | Inspect and Validate Interaction Records',
    description: 'Inspect PEAC interaction records. Parse JWS structure, decode claims, and check token format.',
    url: '/verify',
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inspector | Inspect and Validate Interaction Records',
    description: 'Inspect PEAC interaction records. Parse JWS structure, decode claims, and check token format.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: {
    canonical: '/verify'
  },
}

export default function VerifyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PEAC Inspector",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Any",
    "description": "Inspect and validate PEAC interaction records. Parse JWS structure, decode claims, and check token format.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "JWS structure parsing",
      "Claims decoding",
      "Token format validation",
      "No API calls required",
      "Instant results"
    ],
    "url": "https://www.originary.xyz/verify"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      {children}
    </>
  )
}
