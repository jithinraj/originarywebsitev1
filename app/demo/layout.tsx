import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interactive Demo : Originary',
  description: 'Watch how Originary implements the open PEAC protocol. See agents discover policies via peac.txt and aipref.json, process payments through Gateway (402), and generate verifiable cryptographic receipts.',
  keywords: 'PEAC demo, interactive demo, agent transactions, policy discovery, verifiable receipts, Gateway 402',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'Interactive Demo : Originary',
    description: 'Watch how Originary implements the open PEAC protocol. See agents discover policies via peac.txt and aipref.json, process payments through Gateway (402), and generate verifiable cryptographic receipts.',
    url: 'https://originary.xyz/demo',
    images: ['https://originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interactive Demo : Originary',
    description: 'Watch how Originary implements the open PEAC protocol. See agents discover policies via peac.txt and aipref.json, process payments through Gateway (402), and generate verifiable cryptographic receipts.',
    images: ['https://originary.xyz/og.jpg'],
    site: '@originary',
    creator: '@originary',
  },
  robots: 'index,follow',
  alternates: {
    canonical: 'https://originary.xyz/demo',
  },
}

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
