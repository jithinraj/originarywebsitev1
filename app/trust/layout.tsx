import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trust & Compliance : Originary',
  description: 'Security, compliance, and transparency resources for Originary - PEAC protocol orchestration platform',
  openGraph: {
    title: 'Trust & Compliance : Originary',
    description: 'Security, compliance, and transparency resources for Originary',
    type: 'website',
  },
}

export default function TrustLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
