import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Demo',
  description: 'Interactive demo experience for Originary and PEAC-Receipts. Explore how receipts, policy, and HTTP 402 flows work in practice.',
  keywords: 'verifiable receipts, policy discovery, payment gateway, receipt verification, cryptographic signatures',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'Demo',
    description: 'Interactive demo experience for Originary and PEAC-Receipts. Explore how receipts, policy, and HTTP 402 flows work in practice.',
    url: 'https://www.originary.xyz/demo',
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Demo',
    description: 'Interactive demo experience for Originary and PEAC-Receipts. Explore how receipts, policy, and HTTP 402 flows work in practice.',
    images: ['https://www.originary.xyz/og.jpg'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: {
    canonical: '/demo'
  },
}

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
