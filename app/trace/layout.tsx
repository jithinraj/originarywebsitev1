import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trace | Agent Observability and Decision Records',
  description: 'Trace gives your website real time visibility into AI agents and automated services, with detailed logs, verifiable receipts and PEAC Protocol based access controls.',
  alternates: {
    canonical: '/trace'
  },
  openGraph: {
    title: 'Trace | Agent Observability and Decision Records by Originary',
    description: 'Trace gives your website real time visibility into AI agents and automated services, with detailed logs, verifiable receipts and PEAC Protocol based access controls.',
    type: 'website',
    url: 'https://www.originary.xyz/trace',
  },
  robots: 'index,follow'
}

export default function TraceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
