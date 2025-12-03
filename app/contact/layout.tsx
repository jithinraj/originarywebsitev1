import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact the Originary team for sales, partnerships, support, and press. Talk to us about PEAC Protocol, Trace, and agentic web infrastructure.',
  alternates: {
    canonical: '/contact'
  },
  openGraph: {
    title: 'Contact | Originary',
    description: 'Contact the Originary team for sales, partnerships, support, and press. Talk to us about PEAC Protocol, Trace, and agentic web infrastructure.',
    url: 'https://www.originary.xyz/contact',
    type: 'website',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
