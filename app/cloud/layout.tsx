import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Trace Cloud | Originary',
  description: 'Managed Trace with retention, alerts, signed bundles, and compliance automation. Start your 14-day free trial.',
  keywords: 'Trace Cloud, AI crawler analytics, managed hosting, compliance automation, PEAC receipts',
  alternates: {
    canonical: 'https://www.originary.xyz/cloud',
  },
  openGraph: {
    title: 'Get Trace Cloud | Originary',
    description: 'Managed Trace with retention, alerts, signed bundles, and compliance automation.',
    type: 'website',
    url: 'https://www.originary.xyz/cloud',
  },
  robots: 'index,follow',
}

export default function CloudLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
