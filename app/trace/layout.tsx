import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Originary Trace | AI crawler analytics, policy & receipts (Built on PEAC)',
  description: 'Distributed tracing for your content. Track AI crawler access, ensure PEAC Protocol compliance, and generate verifiable evidence.',
  alternates: {
    canonical: '/trace'
  },
  openGraph: {
    title: 'Trace - AI Content Tracking | Originary',
    description: 'Track which AI services accessed your site and what they took. Built on PEAC Protocol.',
    type: 'website',
    url: 'https://www.originary.xyz/trace',
  },
  robots: 'index,follow'
}

export default function TraceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
