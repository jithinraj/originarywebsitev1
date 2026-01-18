import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Open System of Record for AI Agents',
  description: 'Policy + receipts as verifiable evidence for agent interactions. PEAC Protocol creates portable, cryptographic proof of what was accessed, under what terms, and how it was paid.',
  keywords: 'system of record, AI agents, PEAC protocol, receipts, policy, verification, agent commerce, HTTP 402, cryptographic proof, agentic web',
  alternates: {
    canonical: '/system-of-record'
  },
  openGraph: {
    title: 'Open System of Record for AI Agents | Originary',
    description: 'Policy + receipts as verifiable evidence for agent interactions. Portable, cryptographic proof for the agentic web.',
    url: '/system-of-record',
    type: 'website',
    images: ['/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open System of Record for AI Agents | Originary',
    description: 'Policy + receipts as verifiable evidence for agent interactions. Portable, cryptographic proof for the agentic web.',
    images: ['/og.jpg'],
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
