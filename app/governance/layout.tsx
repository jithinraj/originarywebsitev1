import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Governance | Originary',
  description: 'How the PEAC protocol evolves. Governance process, versioning rules, and neutrality guarantees.',
  alternates: {
    canonical: '/governance'
  },
  openGraph: {
    title: 'Governance | Originary',
    description: 'How the PEAC protocol evolves. Governance process, versioning rules, and neutrality guarantees.',
    url: 'https://www.originary.xyz/governance',
    type: 'website',
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Governance | Originary',
    description: 'How the PEAC protocol evolves. Governance process, versioning rules, and neutrality guarantees.',
    images: ['/og.jpg'],
  },
  robots: 'index,follow',
}

export default function GovernanceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
