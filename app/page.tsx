import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import NewHero from '@/components/NewHero'
import HowItWorksNew from '@/components/HowItWorksNew'
import ProductSuite from '@/components/ProductSuite'
import Partners from '@/components/Partners'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    absolute: 'Originary | System of Record for Agent Interactions'
  },
  description: 'Originary stewards an open standard for publishing interaction terms and issuing verifiable receipts. Built for agent economies, policy enforcement, and compliance.',
  keywords: 'Originary, PEAC protocol, agent interactions, agent economies, verifiable receipts, policy enforcement, HTTP 402, agentic web, agentic economy, agent infrastructure',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Originary | System of Record for Agent Interactions',
    description: 'Originary stewards an open standard for publishing interaction terms and issuing verifiable receipts. Built for agent economies, policy enforcement, and compliance.',
    url: 'https://www.originary.xyz',
    type: 'website',
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary | System of Record for Agent Interactions',
    description: 'Originary stewards an open standard for publishing interaction terms and issuing verifiable receipts. Built for agent economies, policy enforcement, and compliance.',
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
        <Partners />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}