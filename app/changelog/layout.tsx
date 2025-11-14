import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Changelog : Originary',
  description: 'Product updates, new features, and improvements to Originary platform.',
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
