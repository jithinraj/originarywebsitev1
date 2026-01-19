import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trace Demo | Agent Observability',
  description: 'Live demo of Originary Trace for agent observability and interaction tracking. See how PEAC-Receipts capture every agent request.',
  alternates: {
    canonical: '/trace/demo'
  },
  openGraph: {
    title: 'Trace Demo | Agent Observability',
    description: 'Live demo of Originary Trace for agent observability and interaction tracking. See how PEAC-Receipts capture every agent request.',
    type: 'website',
    url: '/trace/demo',
    images: ['/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trace Demo | Agent Observability',
    description: 'Live demo of Originary Trace for agent observability and interaction tracking.',
    images: ['/og.jpg'],
  },
  robots: 'index,follow',
}

export default function TraceDemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
