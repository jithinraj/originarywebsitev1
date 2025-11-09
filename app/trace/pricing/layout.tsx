import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trace Pricing : Originary',
  description: 'Start free with Trace OSS or scale with Trace Cloud. Self-host for free or get managed hosting with attested receipts and compliance automation.',
  openGraph: {
    title: 'Trace Pricing : Originary',
    description: 'OSS self-hosted or managed Cloud with attested receipts and compliance automation',
    type: 'website',
    url: 'https://www.originary.xyz/trace/pricing',
  },
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.originary.xyz/trace/pricing',
  },
}

export default function TracePricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
