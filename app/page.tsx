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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Originary",
    "url": "https://www.originary.xyz",
    "logo": "https://www.originary.xyz/logo.png",
    "sameAs": [
      "https://github.com/originaryx"
    ]
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