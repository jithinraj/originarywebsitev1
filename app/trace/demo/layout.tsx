import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trace Demo | AI Crawler Analytics | Originary',
  description: 'Live demo of Originary Trace for AI crawler analytics and bot tracking. See how PEAC-Receipts capture every agent request.',
  keywords: 'Trace demo, AI crawler demo, GPTBot tracking, ClaudeBot analytics, PEAC receipts',
  alternates: {
    canonical: '/trace/demo'
  },
  openGraph: {
    title: 'Trace Demo | AI Crawler Analytics | Originary',
    description: 'Live demo of Originary Trace for AI crawler analytics and bot tracking. See how PEAC-Receipts capture every agent request.',
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
