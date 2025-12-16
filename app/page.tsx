import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import PeacAnimationHero from '@/components/PeacAnimationHero'
import TrustedByStrip from '@/components/TrustedByStrip'
import HowItWorksSection from '@/components/HowItWorksSection'
import BentoFeatures from '@/components/BentoFeatures'
import SocialProofSection from '@/components/SocialProofSection'
import HomePage from '@/components/HomePage'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    absolute: 'Originary | Infrastructure & tools for Agentic Web'
  },
  description: 'Originary builds infra for AI commerce, consent and compliance via HTTP 402/x402 payments, PEAC receipts and AI crawler analytics.',
  keywords: 'Originary, PEAC Policy Kit, Declare, AI policy, AI Access, peac.txt, AIPREF, AI crawler policy, PEAC Protocol, HTTP 402, x402, verifiable receipts, agentic web, policy discovery, agent infrastructure',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Originary | Infrastructure & tools for Agentic Web',
    description: 'Originary powers the agentic web with infrastructure for AI commerce, consent and compliance: HTTP 402/x402 payments, PEAC receipts and AI crawler analytics. Start with Originary Declare (PEAC Policy Kit) to define AI policy once across peac.txt, AIPREF and robots.txt.',
    url: 'https://www.originary.xyz',
    type: 'website',
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary | Infrastructure & tools for Agentic Web',
    description: 'Originary powers the agentic web with infrastructure for AI commerce, consent and compliance: HTTP 402/x402 payments, PEAC receipts and AI crawler analytics. Start with Originary Declare (PEAC Policy Kit) to define AI policy once across peac.txt, AIPREF and robots.txt.',
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
        <PeacAnimationHero />

        {/* Trust strip immediately after hero */}
        <TrustedByStrip />

        <HowItWorksSection />

        <BentoFeatures />

        <SocialProofSection />

        <HomePage />
      </main>
      <Footer />
    </>
  )
}