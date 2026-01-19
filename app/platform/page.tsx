import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import PeacAnimationHero from '@/components/PeacAnimationHero'
import TrustedByStrip from '@/components/TrustedByStrip'
import HowItWorksSection from '@/components/HowItWorksSection'
import BentoFeatures from '@/components/BentoFeatures'
import SocialProofSection from '@/components/SocialProofSection'
import HomePage from '@/components/HomePage'
import Footer from '@/components/Footer'
import { FileText, Lock, CheckCircle, Activity, Layers, ArrowRight, Code, Cloud, Server } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Platform | Manage & monitor AI Agent Interactions',
  description: 'Deploy the PEAC standard in production: publish terms, enforce decisions, issue signed receipts, and verify outcomes across protocols and rails.',
  keywords: 'PEAC platform, deploy PEAC, policy enforcement, signed receipts, verification, portable decision records, open standard deployment',
  alternates: {
    canonical: '/platform'
  },
  openGraph: {
    title: 'Originary Platform: Deploy PEAC in production',
    description: 'Production components for PEAC: policy generation, enforcement, receipt issuance, verification, and operational exports. Open, portable, no lock-in.',
    url: '/platform',
    type: 'website',
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary Platform: Deploy PEAC in production',
    description: 'Production components for PEAC: policy generation, enforcement, receipt issuance, verification, and operational exports. Open, portable, no lock-in.',
    images: ['/og'],
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

        {/* Section 1: From policy to proof */}
        <section className="section" style={{ background: 'var(--gray-50)', padding: 'clamp(60px, 10vh, 100px) 0' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 var(--space-6)' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: 'var(--space-12)',
              color: 'var(--gray-900)'
            }}>
              From policy to proof
            </h2>

            <p style={{
              fontSize: 'var(--text-lg)',
              lineHeight: 1.7,
              color: 'var(--gray-600)',
              maxWidth: '800px',
              margin: '0 auto var(--space-12)',
              textAlign: 'center'
            }}>
              The PEAC standard defines a lifecycle: declare terms, enforce access decisions,
              optionally request settlement, issue signed receipts, and verify outcomes. Originary provides modular
              components for each step.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 'var(--space-6)',
              marginBottom: 'var(--space-8)'
            }}>
              {[
                { label: 'Policy', icon: FileText, desc: 'Declare terms via peac.txt' },
                { label: 'Access', icon: Lock, desc: 'Enforce with HTTP 402' },
                { label: 'Settlement (optional)', icon: Activity, desc: 'Adapter-based settlement evidence' },
                { label: 'Receipt', icon: CheckCircle, desc: 'Signed PEAC-Receipt headers' },
                { label: 'Trace', icon: Layers, desc: 'Verification endpoints' }
              ].map((step) => (
                <div key={step.label} style={{
                  background: 'var(--white)',
                  border: '1px solid var(--gray-200)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-6)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}>
                  <step.icon size={32} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-3)' }} />
                  <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                    {step.label}
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.5 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Portable by design */}
        <section className="section" style={{ background: 'var(--white)', padding: 'clamp(60px, 10vh, 100px) 0' }}>
          <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 var(--space-6)' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: 'var(--space-8)',
              color: 'var(--gray-900)'
            }}>
              Portable by design
            </h2>

            <p style={{
              fontSize: 'var(--text-lg)',
              lineHeight: 1.7,
              color: 'var(--gray-600)',
              maxWidth: '800px',
              margin: '0 auto var(--space-8)',
              textAlign: 'center'
            }}>
              PEAC receipts work across any conformant implementation. Your policies and decision records
              are not locked to Originary's platform - they're portable across ecosystems, payment rails,
              and verification endpoints.
            </p>

            <div style={{
              background: 'linear-gradient(135deg, rgba(99, 91, 255, 0.05) 0%, rgba(0, 212, 170, 0.05) 100%)',
              border: '1px solid var(--gray-200)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'var(--space-8)',
              marginBottom: 'var(--space-8)'
            }}>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-4)'
              }}>
                {[
                  'Receipts: signed JWS (Ed25519), verifiable offline with issuer public keys',
                  'Policies: published at /.well-known/peac.txt. No proprietary APIs.',
                  'Settlement: optional, adapter-based. x402 live, Stripe in preview, custom adapters supported.',
                  'Verification: pure cryptography. No phone home to Originary servers.'
                ].map((item, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-3)',
                    fontSize: 'var(--text-base)',
                    color: 'var(--gray-700)',
                    lineHeight: 1.6
                  }}>
                    <CheckCircle size={20} style={{ color: 'var(--brand-primary)', marginTop: '2px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Platform modules */}
        <section className="section" style={{ background: 'var(--gray-50)', padding: 'clamp(60px, 10vh, 100px) 0' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 var(--space-6)' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: 'var(--space-6)',
              color: 'var(--gray-900)'
            }}>
              Production components around the standard
            </h2>

            <p style={{
              fontSize: 'var(--text-base)',
              lineHeight: 1.6,
              color: 'var(--gray-600)',
              maxWidth: '700px',
              margin: '0 auto var(--space-12)',
              textAlign: 'center'
            }}>
              Use as much or as little as you need. Each module is independently deployable.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-6)'
            }}>
              {[
                {
                  icon: FileText,
                  title: 'Declare',
                  desc: 'Generate and publish peac.txt policies with AIPREF snapshots. CLI tool and web UI for policy authoring.',
                  cta: { label: 'Try Declare', href: '/declare' }
                },
                {
                  icon: Lock,
                  title: 'Gateway',
                  desc: 'HTTP 402 enforcement at the edge. Deploy as middleware or standalone gateway. Works with Cloudflare Workers, Vercel Edge, self-hosted.',
                  cta: { label: 'View Gateway docs', href: '/products/gateway-402' }
                },
                {
                  icon: CheckCircle,
                  title: 'Verify',
                  desc: 'Verify PEAC-Receipt signatures offline via JWKS or online via API. Verify any receipt from any PEAC-conformant issuer.',
                  cta: { label: 'Try verification', href: '/verify' }
                },
                {
                  icon: Activity,
                  title: 'Trace',
                  desc: 'Operational exports for audits and dispute resolution. Export receipts, payment proofs, and policy snapshots as JSONL.',
                  cta: { label: 'See Trace demo', href: '/trace' }
                },
                {
                  icon: Layers,
                  title: 'Adapters',
                  desc: 'Connect to payment rails (x402, Stripe), AI preference formats (AIPREF), and verification protocols. Extend with custom adapters.',
                  cta: { label: 'Browse adapters', href: '/integrations' }
                }
              ].map((module, i) => (
                <div key={i} className="card" style={{
                  background: 'var(--white)',
                  border: '1px solid var(--gray-200)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-8)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-xl)',
                    background: 'rgba(99, 91, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-4)'
                  }}>
                    <module.icon size={24} style={{ color: 'var(--brand-primary)' }} />
                  </div>
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                    {module.title}
                  </h3>
                  <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-600)', lineHeight: 1.6, marginBottom: 'var(--space-4)', flex: 1 }}>
                    {module.desc}
                  </p>
                  <Link href={module.cta.href} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                    color: 'var(--brand-primary)',
                    textDecoration: 'none',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 500
                  }}>
                    {module.cta.label}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Deployment patterns */}
        <section className="section" style={{ background: 'var(--white)', padding: 'clamp(60px, 10vh, 100px) 0' }}>
          <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 var(--space-6)' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: 'var(--space-8)',
              color: 'var(--gray-900)'
            }}>
              Deploy it your way
            </h2>

            <p style={{
              fontSize: 'var(--text-lg)',
              lineHeight: 1.7,
              color: 'var(--gray-600)',
              maxWidth: '800px',
              margin: '0 auto var(--space-8)',
              textAlign: 'center'
            }}>
              Choose the deployment model that fits your infrastructure, compliance requirements, and operational needs.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-6)'
            }}>
              {[
                { icon: Code, label: 'Self-hosted', desc: 'Deploy components in your own infrastructure. Full control, zero vendor dependency.' },
                { icon: Cloud, label: 'Edge functions', desc: 'Run Gateway 402 on Cloudflare Workers, Vercel Edge, or AWS Lambda@Edge.' },
                { icon: Server, label: 'Managed', desc: 'Originary-hosted components for teams that want operational support. Contact us for managed deployments.' }
              ].map((pattern, i) => (
                <div key={i} style={{
                  background: 'var(--gray-50)',
                  border: '1px solid var(--gray-200)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-6)',
                  textAlign: 'center'
                }}>
                  <pattern.icon size={32} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-3)' }} />
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                    {pattern.label}
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.5 }}>
                    {pattern.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Getting started */}
        <section className="section" style={{ background: 'var(--gray-50)', padding: 'clamp(60px, 10vh, 100px) 0' }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 var(--space-6)' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: 'var(--space-12)',
              color: 'var(--gray-900)'
            }}>
              Integrate in three steps
            </h2>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-8)'
            }}>
              {[
                { num: '1', text: <>Publish your <Link href="/declare" style={{ color: 'var(--brand-primary)', textDecoration: 'none', borderBottom: '1px solid var(--brand-primary)' }}>peac.txt policy</Link> at /.well-known/peac.txt</> },
                { num: '2', text: <>Deploy <Link href="/products/gateway-402" style={{ color: 'var(--brand-primary)', textDecoration: 'none', borderBottom: '1px solid var(--brand-primary)' }}>Gateway 402</Link> to enforce access decisions and issue receipts</> },
                { num: '3', text: <>Use <Link href="/verify" style={{ color: 'var(--brand-primary)', textDecoration: 'none', borderBottom: '1px solid var(--brand-primary)' }}>Verify</Link> to validate receipts from any PEAC-conformant source</> }
              ].map((step) => (
                <div key={step.num} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'var(--space-4)',
                  background: 'var(--white)',
                  border: '1px solid var(--gray-200)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-6)'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'var(--brand-primary)',
                    color: 'var(--white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'var(--text-lg)',
                    fontWeight: 700,
                    flexShrink: 0
                  }}>
                    {step.num}
                  </div>
                  <p style={{ fontSize: 'var(--text-lg)', color: 'var(--gray-700)', lineHeight: 1.6, margin: 0 }}>
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Who this is for */}
        <section className="section" style={{ background: 'var(--white)', padding: 'clamp(60px, 10vh, 100px) 0' }}>
          <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 var(--space-6)' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: 'var(--space-8)',
              color: 'var(--gray-900)'
            }}>
              Built for ecosystems, not silos
            </h2>

            <p style={{
              fontSize: 'var(--text-lg)',
              lineHeight: 1.7,
              color: 'var(--gray-600)',
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center'
            }}>
              PEAC is designed for organizations that operate in multi-party ecosystems: API providers
              serving AI builders, content platforms managing inference and training terms, payment networks
              coordinating settlements, and compliance teams needing auditable decision records. If you need
              portable, verifiable proof of access decisions, PEAC is for you.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section" style={{
          background: 'linear-gradient(180deg, var(--gray-50) 0%, var(--white) 100%)',
          padding: 'clamp(80px, 12vh, 120px) 0'
        }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 var(--space-6)', textAlign: 'center' }}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3rem)',
              fontWeight: 700,
              marginBottom: 'var(--space-6)',
              color: 'var(--gray-900)',
              lineHeight: 1.2
            }}>
              Ship the standard in production
            </h2>

            <p style={{
              fontSize: 'var(--text-xl)',
              lineHeight: 1.7,
              color: 'var(--gray-600)',
              maxWidth: '700px',
              margin: '0 auto var(--space-8)'
            }}>
              Start with the demo, explore the docs, or talk to us about your use case.
            </p>

            <div style={{
              display: 'flex',
              gap: 'var(--space-4)',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: 'var(--space-8)'
            }}>
              <Link href="/demo" className="btn btn-primary btn-lg" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)'
              }}>
                View demo
                <ArrowRight size={18} />
              </Link>
              <Link href="/peac" className="btn btn-secondary btn-lg">
                Read the spec
              </Link>
              <Link href="/contact" className="btn btn-ghost btn-lg">
                Contact us
              </Link>
            </div>

            <p style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--gray-500)',
              fontStyle: 'italic'
            }}>
              Open protocol. No lock-in. Multiple implementations welcome.
            </p>
          </div>
        </section>

        <HomePage />
      </main>
      <Footer />
    </>
  )
}
