import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact the Originary team for sales, partnerships, support, and press. Talk to us about PEAC Protocol, Trace, and agentic web infrastructure.',
  robots: 'index,follow',
  alternates: {
    canonical: '/contact'
  },
  openGraph: {
    title: 'Contact | Originary',
    description: 'Contact the Originary team for sales, partnerships, support, and press. Talk to us about PEAC Protocol, Trace, and agentic web infrastructure.',
    url: 'https://www.originary.xyz/contact',
    siteName: 'Originary',
    type: 'website',
    images: ['/og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Originary',
    description: 'Contact the Originary team for sales, partnerships, and support.',
    images: ['/og.jpg'],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
