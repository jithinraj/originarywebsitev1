import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Observability & Receipts',
  description: 'PEAC receipts and observability infrastructure. Self-host open source for free or choose managed Originary Cloud.',
  openGraph: {
    title: 'Observability & Receipts | Originary',
    description: 'PEAC receipts and observability infrastructure. Self-host for free or talk to us about managed cloud.',
    type: 'website',
    url: '/trace/pricing',
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Observability & Receipts | Originary',
    description: 'PEAC receipts and observability. Self-host for free or talk to us about managed cloud.',
  },
  robots: 'noindex,follow',
}

export default function TracePricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
