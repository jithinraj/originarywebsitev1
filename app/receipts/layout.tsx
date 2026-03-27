import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Verifiable Interaction Records',
  description: 'A verifiable interaction record is portable proof of what an agent did. Signed, timestamped, and independently verifiable offline. Built on PEAC.',
  robots: 'index,follow',
  openGraph: {
    title: 'Verifiable Interaction Records',
    description: 'A verifiable interaction record is portable proof of what an agent did. Signed, timestamped, and independently verifiable offline.',
    url: '/receipts',
    siteName: 'Originary',
    images: [{ url: '/og' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verifiable Interaction Records',
    description: 'A verifiable interaction record is portable proof of what an agent did. Signed, timestamped, and independently verifiable offline.',
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
