import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'We build receipts and policy infrastructure for the agentic web, across Access, Attribution, Consent, Commerce, Compliance, Privacy, and Provenance.',
  alternates: {
    canonical: '/about'
  },
  openGraph: {
    title: 'About Originary',
    description: 'We build receipts and policy infrastructure for the agentic web. Built on the open-source PEAC Protocol.',
    url: 'https://www.originary.xyz/about',
    type: 'website',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
