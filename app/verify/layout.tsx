import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Verify PEAC-Receipts | Receipt Verification Tool',
  description: 'Verify PEAC-Receipts and Originary receipts. Check signatures, expiry, and policy compliance for AI usage receipts.',
  keywords: 'JWS verification, offline signature check, PEAC-Receipt, receipt verification, cryptographic verification, JWT validation, offline verification',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'Verify PEAC-Receipts | Receipt Verification Tool',
    description: 'Verify PEAC-Receipts and Originary receipts. Check signatures, expiry, and policy compliance for AI usage receipts.',
    url: 'https://www.originary.xyz/verify',
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verify PEAC-Receipts | Receipt Verification Tool',
    description: 'Verify PEAC-Receipts and Originary receipts. Check signatures, expiry, and policy compliance for AI usage receipts.',
    images: ['https://www.originary.xyz/og.jpg'],
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
    "name": "Originary Verify",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Any",
    "description": "Offline JWS signature verification tool for PEAC-Receipt tokens. Verify cryptographic signatures without API calls.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Offline JWS signature verification",
      "PEAC-Receipt token validation",
      "Cryptographic signature checks",
      "No API calls required",
      "Instant verification results"
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
