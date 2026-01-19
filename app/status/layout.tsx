import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Status',
  description: 'Live service status and incident history for Originary, Trace, and PEAC-based infrastructure.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/status'
  },
  openGraph: {
    title: 'Status | Originary',
    description: 'Live service status and incident history for Originary, Trace, and PEAC-based infrastructure.',
    url: '/status',
    siteName: 'Originary',
    type: 'website',
    images: ['/og'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Status | Originary',
    description: 'Live service status and incident history for Originary.',
    images: ['/og'],
  },
}

export default function StatusLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
