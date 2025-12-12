import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Company',
  description: 'Originary is a product company building orchestration for the agentic web. Learn about our infrastructure for intent routing, policy enforcement, and verified receipts across humans, agents, and machines. Contact our team or explore press resources.',
  keywords: 'agentic web, orchestration protocol, AI coordination, PEAC protocol',
  robots: 'noindex,follow',
  openGraph: {
    title: 'Company | Originary',
    description: 'Originary is a product company building orchestration for the agentic web.',
    url: 'https://www.originary.xyz/company',
    siteName: 'Originary',
    images: [{ url: 'https://www.originary.xyz/og.jpg' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Company | Originary',
    description: 'Originary is a product company building orchestration for the agentic web.',
    images: ['https://www.originary.xyz/og.jpg'],
  },
  alternates: {
    canonical: '/company',
  },
}

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
