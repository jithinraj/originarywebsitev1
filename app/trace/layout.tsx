import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trace | Agent Access Monitoring',
  description: 'Monitor which agents access your APIs and content. Apply policy. Export verifiable interaction records. Open source, self-hostable.',
  robots: 'index,follow',
  openGraph: {
    title: 'Trace | Agent Access Monitoring | Originary',
    description: 'Monitor which agents access your APIs and content. Apply policy. Export verifiable interaction records.',
    url: '/trace',
    siteName: 'Originary',
    images: [{ url: '/og' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trace | Agent Access Monitoring | Originary',
    description: 'Monitor which agents access your APIs and content. Apply policy. Export verifiable interaction records.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  alternates: {
    canonical: '/trace',
  },
}

export default function TraceLayout({ children }: { children: React.ReactNode }) {
  return children
}
