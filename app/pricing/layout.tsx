import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Transparent Pricing for Every Scale : Originary',
  description: 'From startups building their first agent to Fortune 500 companies running millions of autonomous transactions. Originary receipts with transparent pricing.',
  keywords: 'pricing, receipts, agentic web, API monetization, x402, transparent pricing',
  robots: 'index,follow',
  openGraph: {
    title: 'Transparent Pricing for Every Scale : Originary',
    description: 'From startups building their first agent to Fortune 500 companies running millions of autonomous transactions. Originary receipts with transparent pricing.',
    url: 'https://www.originary.xyz/pricing',
    siteName: 'Originary',
    images: [{
      url: '/og.jpg',
      width: 1200,
      height: 630,
      alt: 'Originary Pricing - Transparent pricing for every scale'
    }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transparent Pricing for Every Scale : Originary',
    description: 'From startups building their first agent to Fortune 500 companies running millions of autonomous transactions. Originary receipts with transparent pricing.',
    images: ['/og.jpg']
  },
  alternates: {
    canonical: 'https://www.originary.xyz/pricing'
  }
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}