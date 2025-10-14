import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Order Confirmation : Originary',
  description: 'Your Start Plan purchase is confirmed. Access your developer sandbox and tools.',
  robots: 'noindex,nofollow',
}

export default function ConfirmationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
