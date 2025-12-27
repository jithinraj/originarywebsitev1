import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Observability & Receipts',
  description: 'PEAC receipts and observability infrastructure. Self-host open source for free or talk to us about managed Originary Cloud with attested receipts and compliance automation.',
  openGraph: {
    title: 'Observability & Receipts | Originary',
    description: 'PEAC receipts and observability infrastructure. Self-host for free or talk to us about managed cloud.',
    type: 'website',
    url: 'https://www.originary.xyz/trace/pricing',
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Observability & Receipts | Originary',
    description: 'PEAC receipts and observability. Self-host for free or talk to us about managed cloud.',
  },
  robots: 'index,follow',
  alternates: {
    canonical: '/trace/pricing'
  },
}

export default function TracePricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
