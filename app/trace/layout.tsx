import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Originary Trace | AI crawler analytics, policy & receipts',
  description: 'Originary Trace is an AI crawler analytics and bot tracker for the agentic web. See every AI bot on your site, enforce policy, and generate PEAC-Receipts as verifiable evidence.',
  alternates: {
    canonical: '/trace'
  },
  openGraph: {
    title: 'Trace | AI Crawler Analytics & Bot Tracking | Originary',
    description: 'AI crawler analytics and bot tracker. See every AI bot, enforce policy, and generate PEAC-Receipts. Built on the open PEAC Protocol.',
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
