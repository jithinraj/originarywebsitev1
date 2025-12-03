import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trace Pricing | AI Crawler Analytics Plans',
  description: 'Trace pricing for AI crawler analytics, bot tracking, and policy enforcement. Simple plans suitable for small sites and growing platforms.',
  openGraph: {
    title: 'Trace Pricing | AI Crawler Analytics Plans',
    description: 'Trace pricing for AI crawler analytics, bot tracking, and policy enforcement. Simple plans suitable for small sites and growing platforms.',
    type: 'website',
    url: 'https://www.originary.xyz/trace/pricing',
  },
  robots: 'index,follow',
  alternates: {
    canonical: '/trace/pricing'
  },
}

export default function TracePricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
