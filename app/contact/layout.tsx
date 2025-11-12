import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Originary',
  description: 'Get in touch with the Originary team. General inquiries, partnerships, support, and sales.',
  alternates: {
    canonical: 'https://www.originary.xyz/contact'
  },
  openGraph: {
    title: 'Contact Originary',
    description: 'Get in touch with the Originary team.',
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
