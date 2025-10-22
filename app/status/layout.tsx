import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Status : Originary',
  description: 'Real-time service health and performance metrics for Originary Gateway, Verify API, and Policy Engine',
  openGraph: {
    title: 'Status : Originary',
    description: 'Real-time service health and performance metrics for Originary',
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
