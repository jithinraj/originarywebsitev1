import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Originary demo — verifiable receipts',
  description: 'Interactive receipt flow: discover policy, request access, obtain a signed receipt, and verify.',
  keywords: 'verifiable receipts, policy discovery, payment gateway, receipt verification, cryptographic signatures',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'Originary demo — verifiable receipts',
    description: 'Interactive receipt flow: discover policy, request access, obtain a signed receipt, and verify.',
    url: 'https://www.originary.xyz/demo',
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary demo — verifiable receipts',
    description: 'Interactive receipt flow: discover policy, request access, obtain a signed receipt, and verify.',
    images: ['https://www.originary.xyz/og.jpg'],
    site: '@originary',
    creator: '@originary',
  },
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.originary.xyz/demo',
  },
}

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
