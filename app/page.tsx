import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import CompanyHeroSection from '@/components/CompanyHeroSection'
import ProductsBand from '@/components/ProductsBand'
import PEACBand from '@/components/PEACBand'
import FoundationalRailsSection from '@/components/FoundationalRailsSection'
import VerifySection from '@/components/VerifySection'
import SocialProofSection from '@/components/SocialProofSection'
import ControlPlaneSection from '@/components/ControlPlaneSection'
import StandardsIntegrations from '@/components/StandardsIntegrations'
import WorldClassHomePage from '@/components/WorldClassHomePage'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Originary: Infrastructure for the Agentic Web',
  description: 'Policy, payments, and verifiable receipts for AI agents. Track, control, and monetize AI access with Originary Trace on PEAC Protocol.',
  keywords: 'Originary, PEAC Protocol, AI crawler tracking, Trace, HTTP 402, verifiable receipts, agentic web, policy discovery, agent infrastructure',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Originary: Infrastructure for the Agentic Web',
    description: 'Policy, payments, and verifiable receipts for AI agents. Built on the open-source PEAC Protocol.',
    url: 'https://www.originary.xyz',
    type: 'website',
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary: Infrastructure for the Agentic Web',
    description: 'Policy, payments, and verifiable receipts for AI agents. Built on PEAC Protocol.',
    images: ['https://www.originary.xyz/og.jpg'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
}

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Originary",
    "url": "https://www.originary.xyz",
    "logo": "https://www.originary.xyz/logo.png",
    "description": "Infrastructure for the agentic web. Policy, payments, and verifiable receipts for AI agents.",
    "sameAs": [
      "https://github.com/originaryx",
      "https://x.com/originaryx",
      "https://www.linkedin.com/company/originary",
      "https://bsky.app/profile/originary.bsky.social",
      "https://peacprotocol.substack.com"
    ],
    "founder": {
      "@type": "Organization",
      "name": "Poem, Inc.",
      "url": "https://www.originary.xyz/legal/imprint"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavigationHeader />
      <main id="main-content" role="main">
        <CompanyHeroSection />
        <ProductsBand />
        <PEACBand />
        <FoundationalRailsSection />
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