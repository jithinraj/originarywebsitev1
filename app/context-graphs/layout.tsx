import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Context Graphs & System of Record for AI Agents',
  description: 'Decision traces are the missing infrastructure for agent autonomy. How context graphs and cryptographic receipts create a system of record.',
  keywords: 'context graphs, decision traces, AI agents, system of record, PEAC protocol, agent autonomy, HTTP 402, cryptographic receipts, agentic web, enterprise AI',
  alternates: {
    canonical: '/context-graphs'
  },
  openGraph: {
    title: 'Context Graphs & System of Record for AI Agents | Originary',
    description: 'Decision traces are the missing infrastructure for agent autonomy. How context graphs emerge and why the internet needs an open system of record.',
    url: '/context-graphs',
    type: 'website',
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Context Graphs & System of Record for AI Agents | Originary',
    description: 'Decision traces are the missing infrastructure for agent autonomy. How context graphs emerge and why the internet needs an open system of record.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
}

export default function ContextGraphsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
