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
    title: 'Status',
    description: 'Live service status and incident history for Originary, Trace, and PEAC-based infrastructure.',
    type: 'website',
  },
}

export default function StatusLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
