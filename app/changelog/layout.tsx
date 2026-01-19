import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'Product updates, new features, and improvements to Originary. Track releases, breaking changes, and upcoming features.',
  robots: 'index,follow',
  alternates: {
    canonical: '/changelog'
  },
  openGraph: {
    title: 'Changelog | Originary',
    description: 'Product updates, new features, and improvements to Originary. Track releases and upcoming features.',
    url: '/changelog',
    siteName: 'Originary',
    images: [{
      url: '/og',
      width: 1200,
      height: 630,
      alt: 'Originary Changelog'
    }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Changelog | Originary',
    description: 'Product updates, new features, and improvements to Originary.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx'
  }
}

export default function ChangelogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
