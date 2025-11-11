import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import CompanyHeroSection from '@/components/CompanyHeroSection'
import ProductsBand from '@/components/ProductsBand'
import PEACBand from '@/components/PEACBand'
import VerifySection from '@/components/VerifySection'
import SocialProofSection from '@/components/SocialProofSection'
import ControlPlaneSection from '@/components/ControlPlaneSection'
import StandardsIntegrations from '@/components/StandardsIntegrations'
import WorldClassHomePage from '@/components/WorldClassHomePage'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Originary | Receipts, policy, and tooling for the agentic web',
  description: 'Originary provides tools and infrastructure for PEAC-enabled applications. Track AI crawlers with Trace, verify receipts, and build for the agentic web.',
  keywords: 'Originary, PEAC Protocol, AI crawler tracking, Trace, HTTP 402, verifiable receipts, agentic web, x402, policy discovery',
  alternates: {
    canonical: 'https://www.originary.xyz/'
  },
  openGraph: {
    title: 'Originary | Receipts, policy, and tooling for the agentic web',
    description: 'Originary provides tools and infrastructure for PEAC-enabled applications. Track AI crawlers with Trace, verify receipts, and build for the agentic web.',
    url: 'https://www.originary.xyz/',
    type: 'website',
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary | Tooling for the agentic web',
    description: 'Originary provides tools and infrastructure for PEAC-enabled applications.',
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
        <CompanyHeroSection />
        <ProductsBand />
        <PEACBand />
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