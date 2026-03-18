import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Signed Receipts for AI Interactions',
  description: 'Signed records provide tamper-evident proof of policy, consent, and payment. Verifiable evidence for audits and disputes.',
  robots: 'index,follow',
  openGraph: {
    title: 'Signed Receipts for AI Interactions | Originary',
    description: 'Signed records provide tamper-evident proof of policy, consent, attribution, and payment events. Cryptographically verifiable evidence for audit trails.',
    url: '/receipts',
    siteName: 'Originary',
    images: [{ url: '/og' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Signed Receipts for AI Interactions | Originary',
    description: 'Signed records provide tamper-evident proof of policy, consent, attribution, and payment events.',
    images: ['/og'],
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
