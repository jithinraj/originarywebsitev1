import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Changelog : Originary',
  description: 'Product changelog for Originary and Gateway 402 with performance updates, new features, and improvements to agentic web infrastructure.',
  alternates: {
    canonical: '/changelog'
  }
}

export default function ChangelogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
