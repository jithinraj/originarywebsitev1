import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Offline',
  description: 'You are currently offline.',
  robots: 'noindex',
}

export default function OfflineLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
