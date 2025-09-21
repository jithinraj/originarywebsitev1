import { Metadata } from 'next'
import StaticPageLayout from '@/components/StaticPageLayout'
import DevelopersPage from '@/components/DevelopersPage'

export const metadata: Metadata = {
  title: 'Developers : Originary',
  description: 'Developer documentation, SDKs, and tools for building with the PEAC protocol and Originary platform. APIs, code examples, and integration guides.',
  keywords: 'developer docs, PEAC protocol, SDKs, APIs, integration guides, code examples',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'Developers : Originary',
    description: 'Developer documentation, SDKs, and tools for building with the PEAC protocol and Originary platform. APIs, code examples, and integration guides.',
    url: 'https://originary.xyz/developers',
    images: ['https://originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developers : Originary',
    description: 'Developer documentation, SDKs, and tools for building with the PEAC protocol and Originary platform. APIs, code examples, and integration guides.',
    images: ['https://originary.xyz/og.jpg'],
    site: '@originary',
    creator: '@originary',
  },
  robots: 'index,follow',
  alternates: {
    canonical: 'https://originary.xyz/developers',
  },
}

export default function Developers() {
  return (
    <StaticPageLayout>
      <DevelopersPage />
    </StaticPageLayout>
  )
}