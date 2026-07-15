import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Originary',
  description: 'Originary builds software for verifiable interaction records across AI agents, APIs, MCP, and automated workflows, built on the PEAC open-source protocol.',
  robots: 'index,follow',
  alternates: {
    canonical: '/about'
  },
  openGraph: {
    title: 'About | Originary',
    description: 'Originary builds software for verifiable interaction records across AI agents, APIs, MCP, and automated workflows, built on the PEAC open-source protocol.',
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
    title: 'About | Originary',
    description: 'Originary builds software for verifiable interaction records across AI agents, APIs, MCP, and automated workflows, built on the PEAC open-source protocol.',
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
