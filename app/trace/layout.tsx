import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trace | AI Crawler Analytics and Bot Tracking by Originary',
  description: 'Trace gives your website real time visibility into AI crawlers, bots and LLM agents, with detailed logs, verifiable receipts and PEAC Protocol based access controls.',
  alternates: {
    canonical: '/trace'
  },
  openGraph: {
    title: 'Trace | AI Crawler Analytics and Bot Tracking by Originary',
    description: 'Trace gives your website real time visibility into AI crawlers, bots and LLM agents, with detailed logs, verifiable receipts and PEAC Protocol based access controls.',
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
