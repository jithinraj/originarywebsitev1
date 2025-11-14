import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Checkout | Originary',
  description: 'Secure checkout to start using Originary Trace and PEAC-based infrastructure. Complete payment to activate your account.',
  robots: 'noindex,nofollow',
  alternates: {
    canonical: '/checkout/start'
  }
}

export default function CheckoutStartLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
