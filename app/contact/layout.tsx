import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Originary',
  description: 'Talk to Originary about technical review, enterprise deployment, pilots, integration support, security, or partner workflows.',
  robots: 'index,follow',
  alternates: {
    canonical: '/contact'
  },
  openGraph: {
    title: 'Contact | Originary',
    description: 'Talk to Originary about a Verification Pilot, integration support, security questions or partner workflows that need signed records.',
    url: '/contact',
    siteName: 'Originary',
    type: 'website',
    images: ['/og'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Originary',
    description: 'Talk to Originary about a Verification Pilot, integration support, security questions or partner workflows that need signed records.',
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
