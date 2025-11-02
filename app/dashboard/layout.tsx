import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard : Originary',
  description: 'Manage your Originary account, policies, and receipts',
  robots: {
    index: false,
    follow: true,
  },
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
