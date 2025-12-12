import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Originary Cloud | Private Beta'
  },
  description: 'Managed PEAC verification, attested receipts, compliance bundles, and analytics. Apply for early access.',
  keywords: 'Originary Cloud, PEAC receipts, managed hosting, compliance automation, attested receipts',
  alternates: {
    canonical: '/cloud',
  },
  openGraph: {
    title: 'Originary Cloud | Private Beta',
    description: 'Managed PEAC verification, attested receipts, compliance bundles, and analytics. Apply for early access.',
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
