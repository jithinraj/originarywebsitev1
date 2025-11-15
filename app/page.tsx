import type { Metadata } from 'next'
import Link from 'next/link'
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
import { ArrowRight, BookOpen, Bot, Code, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute: 'Infrastructure and Tools for the Agentic Web | Originary'
  },
  description: 'Originary provides infrastructure for the agentic web, enabling AI commerce, consent and compliance with HTTP 402/x402 payments, PEAC-Receipts, AIPREF and AI crawler analytics.',
  keywords: 'Originary, PEAC Protocol, AI crawler tracking, Trace, HTTP 402, x402, verifiable receipts, agentic web, policy discovery, agent infrastructure, AI commerce, AIPREF',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Infrastructure and Tools for the Agentic Web',
    description: 'Originary provides infrastructure for the agentic web, enabling AI commerce, consent and compliance with HTTP 402/x402 payments, PEAC-Receipts, AIPREF and AI crawler analytics.',
    url: 'https://www.originary.xyz',
    type: 'website',
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Infrastructure and Tools for the Agentic Web',
    description: 'Originary provides infrastructure for the agentic web, enabling AI commerce, consent and compliance with HTTP 402/x402 payments, PEAC-Receipts and AI crawler analytics.',
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

        {/* What is Originary Section */}
        <section className="section" style={{ background: 'var(--gray-50)', paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-16)' }}>
          <div className="container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                What is Originary
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                lineHeight: 1.7,
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-4)'
              }}>
                Originary is AI infrastructure tools for the agentic web. We enable AI commerce and consent tracking, AI provenance tracking, and policy compliance through PEAC-Receipts - verifiable proof for every agent-to-agent transaction and API access.
              </p>
              <p style={{
                fontSize: 'var(--text-lg)',
                lineHeight: 1.7,
                color: 'var(--gray-600)'
              }}>
                Whether you&rsquo;re building AI agents, running APIs, or managing content, Originary provides the infrastructure rails for agentic commerce and automated economy compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dives Links Section */}
        <section className="section" style={{ paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-16)' }}>
          <div className="container">
            <h2 style={{
              fontSize: 'var(--text-3xl)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: 'var(--space-12)',
              color: 'var(--gray-900)'
            }}>
              Deep dives
            </h2>
            <div className="grid grid-2" style={{ gap: 'var(--space-6)', maxWidth: '1000px', margin: '0 auto' }}>
              <Link href="/peac" className="card" style={{ textDecoration: 'none', display: 'block' }}>
                <Code size={32} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  PEAC Protocol: open standard for the agentic web
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6, marginBottom: 'var(--space-3)' }}>
                  Apache-2.0 licensed protocol for policy, payments, and receipts across agent-to-agent transactions
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--brand-primary)', fontWeight: 600 }}>
                  <span>Learn more</span>
                  <ArrowRight size={16} />
                </div>
              </Link>

              <Link href="/trace" className="card" style={{ textDecoration: 'none', display: 'block' }}>
                <Bot size={32} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  AI crawler analytics and bot tracking
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6, marginBottom: 'var(--space-3)' }}>
                  See every AI bot, enforce policy, and track usage with Originary Trace
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--brand-primary)', fontWeight: 600 }}>
                  <span>Explore Trace</span>
                  <ArrowRight size={16} />
                </div>
              </Link>

              <Link href="/integrations/x402" className="card" style={{ textDecoration: 'none', display: 'block' }}>
                <DollarSign size={32} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  HTTP 402 and x402 payments
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6, marginBottom: 'var(--space-3)' }}>
                  Implement machine-payable APIs with HTTP 402 Payment Required and x402 headers
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--brand-primary)', fontWeight: 600 }}>
                  <span>View integration guide</span>
                  <ArrowRight size={16} />
                </div>
              </Link>

              <Link href="/blog/aipref-by-ietf" className="card" style={{ textDecoration: 'none', display: 'block' }}>
                <BookOpen size={32} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  AIPREF: AI preferences
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6, marginBottom: 'var(--space-3)' }}>
                  Learn about the IETF standard for declaring AI usage preferences and policy
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--brand-primary)', fontWeight: 600 }}>
                  <span>Read article</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
            </div>
          </div>
        </section>

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