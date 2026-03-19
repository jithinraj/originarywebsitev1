import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Open System of Record for AI Agents',
  description: 'Verifiable evidence of what agents did, under what policy, provable later. PEAC creates portable, cryptographic proof across trust boundaries.',
  keywords: 'system of record, AI agents, PEAC protocol, receipts, policy, verification, agent commerce, HTTP 402, cryptographic proof, agentic web',
  alternates: {
    canonical: '/system-of-record'
  },
  openGraph: {
    title: 'Open System of Record for AI Agents | Originary',
    description: 'Policy + records as verifiable evidence for agent interactions. Portable, cryptographic proof for the agentic web.',
    url: '/system-of-record',
    type: 'website',
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open System of Record for AI Agents | Originary',
    description: 'Policy + records as verifiable evidence for agent interactions. Portable, cryptographic proof for the agentic web.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
}

export default function SystemOfRecordLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
