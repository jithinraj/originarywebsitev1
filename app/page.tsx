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
    absolute: 'Originary | System of Record for AI Agent Interactions'
  },
  description: 'Originary builds open standards for managing AI interaction terms and issuing proofs. Built for policy enforcement, compliance, and agentic commerce.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Originary | System of Record for AI Agent Interactions',
    description: 'Originary builds open standards for managing AI interaction terms and issuing proofs. Built for policy enforcement, compliance, and agentic commerce.',
    url: 'https://www.originary.xyz',
    type: 'website',
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary | System of Record for AI Agent Interactions',
    description: 'Originary builds open standards for managing AI interaction terms and issuing proofs. Built for policy enforcement, compliance, and agentic commerce.',
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