import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Originary Receipts | Signed Receipts for AI Interactions',
  description: 'Originary PEAC-Receipts generate tamper-evident proofs of policy, consent, attribution, and payment events. Cryptographically signed receipts for audit trails and dispute resolution.',
  keywords: 'Originary receipts, PEAC receipts, cryptographic receipts, AI audit trail, verifiable receipts, JWS receipts, signed proofs, AI compliance',
  robots: 'index,follow',
  openGraph: {
    title: 'Originary Receipts | Signed Receipts for AI Interactions',
    description: 'Originary PEAC-Receipts generate tamper-evident proofs of policy, consent, attribution, and payment events. Cryptographically signed receipts for audit trails.',
    url: 'https://www.originary.xyz/receipts',
    siteName: 'Originary',
    images: [{ url: 'https://www.originary.xyz/og.jpg' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary Receipts | Signed Receipts for AI Interactions',
    description: 'Originary PEAC-Receipts generate tamper-evident proofs of policy, consent, attribution, and payment events.',
    images: ['https://www.originary.xyz/og.jpg'],
  },
  alternates: {
    canonical: 'https://www.originary.xyz/receipts',
  },
}

export default function ReceiptsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
