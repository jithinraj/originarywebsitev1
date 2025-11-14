import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services : Originary',
  description: 'Originary services and solutions for agent coordination and compliance.',
  alternates: {
    canonical: '/services'
  }
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
