import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Originary',
  description: 'Talk to Originary about technical review, enterprise deployment, pilots, integration support, security, or partnerships.',
  robots: 'index,follow',
  alternates: {
    canonical: '/contact'
  },
  openGraph: {
    title: 'Contact | Originary',
    description: 'Talk to Originary about technical review, enterprise deployment, pilots, integration support, security, or partnerships.',
    url: '/contact',
    siteName: 'Originary',
    type: 'website',
    images: ['/og'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Originary',
    description: 'Talk to Originary about technical review, enterprise deployment, pilots, integration support, security, or partnerships.',
    images: ['/og'],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
