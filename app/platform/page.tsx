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
  title: 'Platform | Originary',
  description: 'Originary platform for AI commerce, consent and compliance. Deploy policy, enforce at the edge, and verify every outcome with signed receipts.',
  keywords: 'Originary platform, PEAC implementation, AI policy, HTTP 402, x402, verifiable receipts, agentic web, policy enforcement',
  alternates: {
    canonical: '/platform'
  },
  openGraph: {
    title: 'Platform | Originary',
    description: 'Originary platform for AI commerce, consent and compliance. Deploy policy, enforce at the edge, and verify every outcome with signed receipts.',
    url: 'https://www.originary.xyz/platform',
    type: 'website',
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Platform | Originary',
    description: 'Originary platform for AI commerce, consent and compliance. Deploy policy, enforce at the edge, and verify every outcome with signed receipts.',
    images: ['https://www.originary.xyz/og.jpg'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
}

export default function PlatformPage() {
  return (
    <>
      <NavigationHeader />
      <main id="main-content" role="main">
        <PeacAnimationHero />
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
