import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Mark from '@/components/Mark'
import Link from 'next/link'
import Script from 'next/script'
import { ArrowRight, CheckCircle } from 'lucide-react'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is this the same as originary.ai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Originary is not affiliated with the operators of originary.ai.'
      }
    }
  ]
}

export const metadata: Metadata = {
  title: 'Originary AI - Receipts for the Agentic Web',
  description: 'Originary delivers verifiable Receipts for AI agents and APIs. Publish peac.txt, settle via x402 or Stripe/fiat/stablecoin, and prove access, consent, attribution, privacy & payment on every request.',
  keywords: 'Originary AI, agentic web, AI receipts, x402, PEAC protocol, agent compliance',
  robots: 'index,follow',
  openGraph: {
    title: 'Originary AI - Receipts for the Agentic Web',
    description: 'Originary delivers verifiable Receipts for AI agents and APIs. Publish peac.txt, settle via x402 or Stripe/fiat/stablecoin, and prove access, consent, attribution, privacy & payment on every request.',
    url: 'https://originary.xyz/originary-ai',
    type: 'website'
  }
}

export default function OriginaryAI() {
  return (
    <div className="wrap">
      <Script id="faq-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(faqJsonLd)}
      </Script>
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        <section className="section" style={{ background: 'var(--white)', paddingTop: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)'
              }}>
                <Mark>Originary</Mark> AI - Receipts for the Agentic Web
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.7,
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-8)'
              }}>
                Publish peac.txt, settle via <strong>x402</strong> (or Stripe/credits/fiat/stablecoin/on-chain), and present a <strong>Receipt</strong> on every request - proof of access, consent, attribution, privacy, and payment.
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'var(--space-4)',
                flexWrap: 'wrap',
                marginBottom: 'var(--space-16)'
              }}>
                <Link href="/receipts" className="btn btn-primary btn-lg">
                  <span>See a live receipt</span>
                  <ArrowRight size={18} />
                </Link>
                <Link href="/company/contact" className="btn btn-secondary btn-lg">
                  Get started
                </Link>
              </div>
            </div>

            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: 'var(--space-12)',
                color: 'var(--gray-900)'
              }}>
                Why Originary vs generic agent frameworks
              </h2>

              <div style={{ display: 'grid', gap: 'var(--space-6)', marginBottom: 'var(--space-12)' }}>
                {[
                  {
                    title: 'Not another framework.',
                    description: 'Keep your MCP/A2A tools and orchestrators - Originary adds verifiable Receipts so every access has proof of terms, consent, attribution, privacy, and payment.'
                  },
                  {
                    title: 'Rail-neutral payments (x402 first).',
                    description: 'Settle via x402 by default, or Stripe/credits/fiat/stablecoin/on-chain via adapters - no lock-in, same receipt format.'
                  },
                  {
                    title: 'Compliance by construction.',
                    description: 'Receipts encode purposes, retention windows, attribution & consent flags - turn audits into evidence, not meetings.'
                  },
                  {
                    title: 'Drop-in at the edge.',
                    description: 'Enforce at Cloudflare/Vercel/AWS edge with minimal overhead; no app rewrite required.'
                  },
                  {
                    title: 'Interoperable with MCP/A2A.',
                    description: 'Pass a PEAC-Receipt alongside existing tool/resolver calls; verify before data leaves your origin.'
                  },
                  {
                    title: 'Simple, web-native.',
                    description: 'A tiny /.well-known/peac.txt declares your terms; everything else is adapters and a signed receipt.'
                  }
                ].map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-4)',
                    padding: 'var(--space-6)',
                    background: 'var(--gray-50)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--gray-200)'
                  }}>
                    <CheckCircle size={24} style={{ color: 'var(--brand-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <h3 style={{
                        fontSize: 'var(--text-lg)',
                        fontWeight: 600,
                        marginBottom: 'var(--space-2)',
                        color: 'var(--gray-900)'
                      }}>
                        {item.title}
                      </h3>
                      <p style={{
                        color: 'var(--gray-700)',
                        lineHeight: 1.6,
                        margin: 0
                      }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                background: 'var(--brand-primary)',
                color: 'var(--white)',
                padding: 'var(--space-6)',
                borderRadius: 'var(--radius-lg)',
                marginBottom: 'var(--space-12)'
              }}>
                <h3 style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  marginBottom: 'var(--space-3)'
                }}>
                  MCP/A2A Integration
                </h3>
                <p style={{ margin: 0, lineHeight: 1.6 }}>
                  Add Receipts beside your tools/resolvers, not instead of them - send a PEAC-Receipt with requests; verify at the edge.
                </p>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'var(--space-4)',
                flexWrap: 'wrap',
                marginBottom: 'var(--space-16)'
              }}>
                <Link href="/receipts" className="btn btn-primary">
                  See a live receipt
                </Link>
                <Link href="/company/contact" className="btn btn-secondary">
                  Get started
                </Link>
                <Link href="/pricing" className="btn btn-ghost">
                  Pricing
                </Link>
              </div>

              <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
                <h3 style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 600,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}>
                  Works with
                </h3>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: 'var(--space-6)',
                  opacity: 0.8
                }}>
                  {['MCP', 'A2A', 'x402', 'Stripe', 'Circle', 'Cloudflare', 'Vercel'].map((tech) => (
                    <span key={tech} style={{
                      fontSize: 'var(--text-sm)',
                      fontWeight: 500,
                      color: 'var(--gray-600)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}