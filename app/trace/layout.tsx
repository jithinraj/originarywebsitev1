import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trace | AI Crawler Analytics and Bot Tracking',
  description: 'Track every AI crawler that accesses your content. Use Trace as your bot management and bot protection layer for AI crawlers. See which agents visit, what they take, and when.',
  alternates: {
    canonical: '/trace'
  },
  openGraph: {
    title: 'Trace | AI Crawler Analytics and Bot Tracking',
    description: 'Track every AI crawler that accesses your content. Use Trace as your bot management and bot protection layer for AI crawlers. See which agents visit, what they take, and when.',
    type: 'website',
    url: 'https://www.originary.xyz/trace',
  },
  robots: 'index,follow'
}

export default function TraceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
