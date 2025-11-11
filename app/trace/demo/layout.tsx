import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trace Demo | Originary',
  description: 'Explore a live Trace dashboard with synthetic AI crawler data. See how Trace identifies GPTBot, ClaudeBot, and other crawlers.',
  keywords: 'Trace demo, AI crawler demo, GPTBot tracking, ClaudeBot analytics, PEAC receipts',
  alternates: {
    canonical: 'https://www.originary.xyz/trace/demo',
  },
  openGraph: {
    title: 'Trace Demo | Originary',
    description: 'Explore a live Trace dashboard with synthetic AI crawler data.',
    type: 'website',
    url: 'https://www.originary.xyz/trace/demo',
  },
  robots: 'index,follow',
}

export default function TraceDemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
