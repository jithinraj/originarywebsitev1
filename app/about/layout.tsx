import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Originary builds and stewards PEAC, an open standard for portable decision records for agent interactions. Production components for policy, enforcement, and receipt verification.',
  robots: 'index,follow',
  alternates: {
    canonical: '/about'
  },
  openGraph: {
    title: 'About Originary',
    description: 'Originary builds and stewards PEAC, an open standard for portable decision records for agent interactions.',
    url: '/about',
    siteName: 'Originary',
    type: 'website',
    images: ['/og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Originary',
    description: 'Originary builds and stewards PEAC, an open standard for portable decision records for agent interactions.',
    images: ['/og.jpg'],
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
