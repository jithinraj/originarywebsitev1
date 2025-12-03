import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import DeveloperLuxuryHero from '@/components/DeveloperLuxuryHero'
import BentoFeatures from '@/components/BentoFeatures'
import ProductsBand from '@/components/ProductsBand'
import SocialProofSection from '@/components/SocialProofSection'
import StandardsIntegrations from '@/components/StandardsIntegrations'
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
      <NavigationHeader />
      <main id="main-content" role="main">
        <DeveloperLuxuryHero />

        <BentoFeatures />

        <SocialProofSection />

        {/* What is Originary Section - SEO for brand keyword */}
        <section className="section" style={{
          paddingTop: 'var(--space-20)',
          paddingBottom: 'var(--space-20)',
          background: 'linear-gradient(180deg, var(--white) 0%, var(--gray-50) 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle background decoration */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(99, 91, 255, 0.03) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div className="container" style={{ position: 'relative' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              {/* Badge */}
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  background: 'linear-gradient(135deg, rgba(99, 91, 255, 0.1), rgba(0, 212, 170, 0.1))',
                  border: '1px solid rgba(99, 91, 255, 0.2)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--space-2) var(--space-4)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600,
                  color: 'var(--brand-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  <span style={{
                    width: '6px',
                    height: '6px',
                    background: 'var(--brand-primary)',
                    borderRadius: '50%'
                  }} />
                  About
                </span>
              </div>

              {/* Heading */}
              <h2 style={{
                fontSize: 'clamp(var(--text-3xl), 5vw, var(--text-4xl))',
                fontWeight: 700,
                marginBottom: 'var(--space-8)',
                color: 'var(--gray-900)',
                textAlign: 'center',
                letterSpacing: '-0.02em'
              }}>
                What is Originary?
              </h2>

              {/* Main content card */}
              <div style={{
                background: 'var(--white)',
                border: '1px solid var(--gray-200)',
                borderRadius: 'var(--radius-2xl)',
                padding: 'var(--space-8)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)'
              }}>
                <p style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--gray-700)',
                  lineHeight: 1.8,
                  marginBottom: 'var(--space-6)',
                  textAlign: 'center'
                }}>
                  We build <strong style={{ color: 'var(--gray-900)' }}>receipts and policy infrastructure</strong> for the agentic web. With software and protocol tooling on top of PEAC Protocol, we help you declare AI policy once, gate access with HTTP 402, and issue verifiable receipts for every interaction.
                </p>

                {/* Visual divider */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-4)',
                  marginBottom: 'var(--space-6)'
                }}>
                  <div style={{ flex: 1, height: '1px', background: 'var(--gray-200)' }} />
                  <span style={{
                    fontSize: 'var(--text-xs)',
                    color: 'var(--gray-400)',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    Our approach
                  </span>
                  <div style={{ flex: 1, height: '1px', background: 'var(--gray-200)' }} />
                </div>

                <p style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--gray-600)',
                  lineHeight: 1.8,
                  textAlign: 'center'
                }}>
                  Originary brings seven pillars of agent infrastructure onto one set of rails: <strong style={{ color: 'var(--gray-700)' }}>access, attribution, consent, commerce, compliance, privacy, and provenance</strong> - all anchored in receipts. Start with policy using Declare, then layer on analytics with Trace, payments via Gateway 402, verification through Verify API, and day-to-day operations in Studio as your AI traffic grows.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ProductsBand />
        <StandardsIntegrations />
        <HomePage />
      </main>
      <Footer />
    </>
  )
}