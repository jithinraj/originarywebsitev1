import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import NewHero from '@/components/NewHero'
import HowItWorksNew from '@/components/HowItWorksNew'
import ProductSuite from '@/components/ProductSuite'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    absolute: 'Originary | AI Agent Tools, Infrastructure & Systems'
  },
  description: 'Originary powers agent economies, AI commerce, and compliance with an open system of record to monitor, manage, and monetize AI interactions and access via PEAC.',
  keywords: 'Originary, PEAC protocol, system of record, agent interactions, signed receipts, policy enforcement, verifiable outcomes, agentic web',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Originary | AI Agent Tools, Infrastructure & Systems',
    description: 'Originary powers agent economies, AI commerce, and compliance with an open system of record to monitor, manage, and monetize AI interactions and access via PEAC.',
    url: 'https://www.originary.xyz',
    type: 'website',
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary | AI Agent Tools, Infrastructure & Systems',
    description: 'Originary powers agent economies, AI commerce, and compliance with an open system of record to monitor, manage, and monetize AI interactions and access via PEAC.',
    images: ['https://www.originary.xyz/og.jpg'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
}

export default function Page() {
  return (
    <>
      <NavigationHeader />
      <main id="main-content" role="main">
        <NewHero />
        <HowItWorksNew />
        <ProductSuite />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}