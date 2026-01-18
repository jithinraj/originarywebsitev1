import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Originary Receipts | Signed Receipts for AI Interactions',
  description: 'PEAC-Receipts generate tamper-evident proofs of policy, consent, and payment. Signed receipts for audits and disputes.',
  robots: 'index,follow',
  openGraph: {
    title: 'Originary Receipts | Signed Receipts for AI Interactions',
    description: 'Originary PEAC-Receipts generate tamper-evident proofs of policy, consent, attribution, and payment events. Cryptographically signed receipts for audit trails.',
    url: '/receipts',
    siteName: 'Originary',
    images: [{ url: '/og.jpg' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary Receipts | Signed Receipts for AI Interactions',
    description: 'Originary PEAC-Receipts generate tamper-evident proofs of policy, consent, attribution, and payment events.',
    images: ['/og.jpg'],
  },
  alternates: {
    canonical: '/receipts',
  },
}

export default function ReceiptsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
