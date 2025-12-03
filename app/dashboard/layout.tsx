import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Sign in to your Originary dashboard to manage Trace, receipts, API keys, and agentic web infrastructure.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/dashboard'
  }
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
