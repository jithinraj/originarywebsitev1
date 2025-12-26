import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trace Demo | Agent Observability',
  description: 'Live demo of Originary Trace for agent observability and interaction tracking. See how PEAC-Receipts capture every agent request.',
  keywords: 'Trace demo, agent observability demo, GPTBot tracking, ClaudeBot tracking, PEAC receipts',
  alternates: {
    canonical: '/trace/demo'
  },
  openGraph: {
    title: 'Trace Demo | Agent Observability',
    description: 'Live demo of Originary Trace for agent observability and interaction tracking. See how PEAC-Receipts capture every agent request.',
    type: 'website',
    url: 'https://www.originary.xyz/trace/demo',
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
