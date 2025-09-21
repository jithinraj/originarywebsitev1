import { Metadata } from 'next'
import StaticPageLayout from '@/components/StaticPageLayout'
import ContactPage from '@/components/ContactPage'

export const metadata: Metadata = {
  title: 'Contact : Originary',
  description: 'Get in touch with the Originary team. Sales, support, partnerships, and general inquiries welcome.',
  keywords: 'contact Originary, sales, support, partnerships, customer service',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'Contact : Originary',
    description: 'Get in touch with the Originary team. Sales, support, partnerships, and general inquiries welcome.',
    url: 'https://originary.xyz/company/contact',
    images: ['https://originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact : Originary',
    description: 'Get in touch with the Originary team. Sales, support, partnerships, and general inquiries welcome.',
    images: ['https://originary.xyz/og.jpg'],
    site: '@originary',
    creator: '@originary',
  },
  robots: 'index,follow',
  alternates: {
    canonical: 'https://originary.xyz/company/contact',
  },
}

export default function Contact() {
  return (
    <StaticPageLayout>
      <ContactPage />
    </StaticPageLayout>
  )
}
