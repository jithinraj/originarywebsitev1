import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import NewHero from '@/components/NewHero'
import StandardsCompatibility from '@/components/StandardsCompatibility'
import WhatThisSolves from '@/components/WhatThisSolves'
import AudienceChooser from '@/components/AudienceChooser'
import HowItWorksNew from '@/components/HowItWorksNew'
import ProductSuite from '@/components/ProductSuite'
import ProofSection from '@/components/ProofSection'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import { FaqAccordion, FaqJsonLd } from '@/components/faq'
import { homeFaqs } from '@/content/faqs'

export const metadata: Metadata = {
  title: {
    absolute: 'Originary | Verification for Automated Interactions'
  },
  description: 'Originary provides verification infrastructure for automated interactions. Issue, verify, and handoff interaction records with the open PEAC standard.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Originary | Verification for Automated Interactions',
    description: 'Originary provides verification infrastructure for automated interactions. Issue, verify, and handoff interaction records with the open PEAC standard.',
    url: 'https://www.originary.xyz',
    type: 'website',
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary | Verification Infrastructure for Automated Interactions',
    description: 'Originary provides verification infrastructure for automated interactions. Issue, verify, and handoff interaction records with the open PEAC standard.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Originary',
  url: 'https://www.originary.xyz',
  logo: 'https://www.originary.xyz/logo.svg',
  sameAs: [
    'https://twitter.com/originaryx',
    'https://github.com/peacprotocol',
  ],
  description: 'Verification infrastructure for automated interactions. Issue, verify, and handoff interaction records with the open PEAC standard.',
}

const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Originary',
  url: 'https://www.originary.xyz',
  description: 'Verification infrastructure for automated interactions.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.originary.xyz/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Originary Verify',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web',
  url: 'https://www.originary.xyz/verify',
  description: 'Deterministic verification for PEAC interaction records.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <FaqJsonLd items={homeFaqs} />
      <NavigationHeader />
      <main id="main-content" role="main">
        <NewHero />
        <StandardsCompatibility />
        <WhatThisSolves />
        <AudienceChooser />
        <HowItWorksNew />
        <ProductSuite />
        <ProofSection />
        <section style={{ padding: 'var(--space-20) 0', borderTop: '1px solid var(--border-default)', background: 'var(--surface-base)' }}>
          <div className="container">
            <FaqAccordion items={homeFaqs} />
          </div>
        </section>
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}