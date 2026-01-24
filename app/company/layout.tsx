import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Company',
  description: 'Originary builds AI infrastructure and tools for the agentic web, across Access, Attribution, Consent, Commerce, Compliance, Privacy, and Provenance.',
  keywords: 'Originary company, Poem Inc, about Originary, agentic web, PEAC Protocol, AI infrastructure',
  robots: 'noindex,follow',
  openGraph: {
    title: 'Company | Originary',
    description: 'Originary builds AI infrastructure and tools for the agentic web, across Access, Attribution, Consent, Commerce, Compliance, Privacy, and Provenance.',
    url: '/company',
    siteName: 'Originary',
    images: [{
      url: '/og',
      width: 1200,
      height: 630,
      alt: 'Originary Company'
    }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Company | Originary',
    description: 'Originary builds AI infrastructure and tools for the agentic web, across Access, Attribution, Consent, Commerce, Compliance, Privacy, and Provenance.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx'
  },
}

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
