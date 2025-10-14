import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Start Plan Checkout : Originary',
  description: '30-day access to Originary developer sandbox, verification tools, and Gateway 402 demo for $1 USD.',
  robots: 'noindex,nofollow',
}

export default function CheckoutStartLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
