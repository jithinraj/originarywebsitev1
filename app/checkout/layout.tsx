import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Checkout',
  description: 'Complete your Originary purchase',
  robots: {
    index: false,
    follow: true,
  },
}

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
