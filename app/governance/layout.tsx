import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Governance',
  description: 'How PEAC Protocol is governed, maintained, and contributed to. Open development, Apache-2.0 license.',
  alternates: {
    canonical: '/governance'
  },
  openGraph: {
    title: 'Governance ',
    description: 'How PEAC Protocol is governed, maintained, and contributed to. Open development, Apache-2.0 license.',
    url: '/governance',
    type: 'website',
    images: ['/og'],
    siteName: 'Originary',
  },
}

export default function GovernanceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
