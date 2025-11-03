import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import HeroSection from '@/components/HeroSection'
import VerifySection from '@/components/VerifySection'
import SocialProofSection from '@/components/SocialProofSection'
import ControlPlaneSection from '@/components/ControlPlaneSection'
import StandardsIntegrations from '@/components/StandardsIntegrations'
import WorldClassHomePage from '@/components/WorldClassHomePage'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Originary | Receipts for the Agentic Web (HTTP 402, x402, PEAC)',
  description: 'Add policy discovery, HTTP 402/x402 payments, and a cryptographic PEAC-Receipt to every response - provable access, settlement, and compliance.',
  keywords: 'Originary, PEAC Protocol, HTTP 402, x402, AIPREF, agentic web, AI commerce, verifiable receipts',
  alternates: {
    canonical: 'https://www.originary.xyz/'
  },
  openGraph: {
    title: 'Originary | Receipts for the Agentic Web',
    description: 'Add policy discovery, HTTP 402/x402 payments, and a cryptographic PEAC-Receipt to every response - provable access, settlement, and compliance.',
    url: 'https://www.originary.xyz/',
    type: 'website',
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary | Receipts for the Agentic Web',
    description: 'Add policy discovery, HTTP 402/x402 payments, and a cryptographic PEAC-Receipt to every response',
    images: ['https://www.originary.xyz/og.jpg'],
    site: '@originary',
    creator: '@originary',
  },
  robots: 'index,follow',
}

export default function Page() {
  return (
    <>
      <NavigationHeader />
      <main id="main-content" role="main">
        <HeroSection />
        <VerifySection />
        <SocialProofSection />
        <ControlPlaneSection />
        <StandardsIntegrations />
        <WorldClassHomePage />
      </main>
      <Footer />
    </>
  )
}