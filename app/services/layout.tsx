import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Services',
  description: 'Implementation, migration, compliance audits, and custom development for PEAC Protocol. Fixed pricing, clear timelines.',
  robots: 'index,follow',
  alternates: {
    canonical: '/services'
  },
  openGraph: {
    title: 'Professional Services | Originary',
    description: 'Implementation, migration, compliance audits, and custom development for PEAC Protocol.',
    url: 'https://www.originary.xyz/services',
    siteName: 'Originary',
    images: [{
      url: 'https://www.originary.xyz/og.jpg',
      width: 1200,
      height: 630,
      alt: 'Originary Professional Services'
    }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Services | Originary',
    description: 'Implementation, migration, and compliance services for PEAC Protocol.',
    images: ['/og.jpg'],
    site: '@originaryx',
    creator: '@originaryx'
  }
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
