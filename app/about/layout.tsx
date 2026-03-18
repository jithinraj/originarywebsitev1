import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Originary builds middleware, tools, and SDKs for verifiable agent interactions. PEAC is the open protocol underneath.',
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
    images: [
      {
        url: '/og',
        width: 1200,
        height: 630,
        alt: 'About Originary',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Originary',
    description: 'Originary builds and stewards PEAC, an open standard for portable decision records for agent interactions.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
