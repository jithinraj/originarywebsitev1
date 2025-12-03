import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About | Originary',
  description: 'We build receipts and policy infrastructure for the agentic web, across Access, Attribution, Consent, Commerce, Compliance, Privacy, and Provenance.',
  alternates: {
    canonical: '/about'
  },
  openGraph: {
    title: 'About Originary',
    description: 'We build receipts and policy infrastructure for the agentic web. Built on the open-source PEAC Protocol.',
    url: 'https://www.originary.xyz/about',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <>
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        <section className="section" style={{ paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-24)' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            {/* Strapline */}
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.7,
                  color: 'var(--gray-600)',
                  marginBottom: 'var(--space-12)',
                  fontWeight: 500
                }}
              >
                We build receipts and policy infrastructure for the agentic web, across Access, Attribution, Consent, Commerce, Compliance, Privacy, and Provenance.
              </p>

              <h1
                style={{
                  fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.04em',
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}
              >
                About Originary
              </h1>

              <p style={{ fontSize: 'var(--text-xl)', color: 'var(--gray-600)', lineHeight: 1.7 }}>
                Making the web work for both humans and agents
              </p>
            </div>

            {/* Mission */}
            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
                Mission
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-700)', lineHeight: 1.8, marginBottom: 'var(--space-4)' }}>
                The web was built for humans clicking links. AI agents need something different: clear policies, machine-readable consent, economic rails that work at internet scale, and a way to prove what actually happened.
              </p>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-700)', lineHeight: 1.8, marginBottom: 'var(--space-4)' }}>
                Our mission is to make every meaningful AI interaction leave a verifiable receipt - a cryptographic record of who accessed what, under which policy, using which payment rail, and for which purpose.
              </p>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-700)', lineHeight: 1.8, marginBottom: 'var(--space-4)' }}>
                We&apos;re building that infrastructure on two foundations:
              </p>
              <ul style={{ fontSize: 'var(--text-base)', color: 'var(--gray-700)', lineHeight: 1.8, paddingLeft: 'var(--space-6)', marginBottom: 0 }}>
                <li style={{ marginBottom: 'var(--space-2)' }}>
                  <strong>PEAC Protocol</strong> - an open-source protocol for policy discovery, cryptographic receipts, and HTTP 402 payment semantics
                </li>
                <li>
                  <strong>Originary products</strong> - software that lets teams declare policy, gate access, and verify receipts in production
                </li>
              </ul>
            </div>

            {/* Seven Pillars */}
            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left', background: 'var(--gray-50)' }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
                The seven pillars we focus on
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-700)', lineHeight: 1.8, marginBottom: 'var(--space-4)' }}>
                We design everything around seven pillars of agent infrastructure, all tied together through receipts:
              </p>
              <ol style={{ fontSize: 'var(--text-base)', color: 'var(--gray-700)', lineHeight: 1.8, paddingLeft: 'var(--space-6)', marginBottom: 0 }}>
                <li style={{ marginBottom: 'var(--space-2)' }}><strong>Access</strong> - which agents are allowed to read or call what</li>
                <li style={{ marginBottom: 'var(--space-2)' }}><strong>Attribution</strong> - who created the content or data being used</li>
                <li style={{ marginBottom: 'var(--space-2)' }}><strong>Consent</strong> - what the publisher or data subject has actually agreed to</li>
                <li style={{ marginBottom: 'var(--space-2)' }}><strong>Commerce</strong> - how access and usage are priced and settled</li>
                <li style={{ marginBottom: 'var(--space-2)' }}><strong>Compliance</strong> - how obligations map to concrete, testable controls</li>
                <li style={{ marginBottom: 'var(--space-2)' }}><strong>Privacy</strong> - how data is scoped, minimized, and retained</li>
                <li><strong>Provenance</strong> - how content and decisions can be traced back to their sources</li>
              </ol>
            </div>

            {/* What we're building */}
            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
                What we&apos;re building
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-700)', lineHeight: 1.8, marginBottom: 'var(--space-6)' }}>
                We start with policy and receipts, then add analytics, payments, verification, and operations as traffic grows.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--gray-900)', marginBottom: 'var(--space-1)' }}>
                    Declare (Policy Kit)
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                    Define AI policy and receipt requirements once, in a way that is both human-readable and machine-enforceable.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--gray-900)', marginBottom: 'var(--space-1)' }}>
                    Trace
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                    Observe AI crawlers and agent traffic, tied to receipts and policies.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--gray-900)', marginBottom: 'var(--space-1)' }}>
                    Gateway 402
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                    Payment and HTTP 402 controls so you can turn AI traffic into revenue, not just load.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--gray-900)', marginBottom: 'var(--space-1)' }}>
                    Verify API
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                    Verification service for PEAC receipts and policy conformance.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--gray-900)', marginBottom: 'var(--space-1)' }}>
                    Studio
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                    Visual tooling to design, test, and operate policy and receipts with teams.
                  </p>
                </div>
              </div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)', lineHeight: 1.6, marginTop: 'var(--space-6)' }}>
                Today, teams typically start with Declare and the developer tools (CLI, SDKs, PEAC upstream packages), then layer on Trace, Gateway 402, Verify API, and Studio as they move from experiments into operational AI traffic.
              </p>
              <div style={{ marginTop: 'var(--space-6)' }}>
                <Link href="/products" className="btn btn-ghost btn-sm">
                  View all products →
                </Link>
              </div>
            </div>

            {/* PEAC Protocol */}
            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left', background: 'var(--gray-50)' }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
                PEAC Protocol: open-source foundation
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-700)', lineHeight: 1.8, marginBottom: 'var(--space-4)' }}>
                PEAC (Programmable Environment for Agent Coordination) is the open protocol behind our receipts.
              </p>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-700)', lineHeight: 1.8, marginBottom: 'var(--space-4)' }}>
                It defines how policies are published (for example at <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: '4px', fontSize: 'var(--text-sm)' }}>/.well-known/peac.txt</code>) and how cryptographically signed receipts prove &ldquo;who paid whom, for what, using which rail, under which terms&rdquo; across different payment systems and agent protocols.
              </p>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-700)', lineHeight: 1.8, marginBottom: 'var(--space-4)' }}>
                PEAC is Apache-2.0 licensed and stewarded in the open on GitHub by contributors from Originary and the broader community. Multiple independent implementations are expected and encouraged. Originary is one implementation and hosting environment, not the protocol itself.
              </p>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)', lineHeight: 1.6 }}>
                Right now PEAC is in an active 0.9.x development line. Wire formats and APIs are still being refined; receipts and policy concepts are designed to remain stable as the ecosystem converges.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginTop: 'var(--space-6)' }}>
                <Link href="/peac" className="btn btn-primary btn-sm">
                  Explore PEAC
                </Link>
                <a
                  href="https://github.com/peacprotocol/peac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  View on GitHub
                </a>
              </div>
            </div>

            {/* How we work */}
            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
                How we work
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--gray-900)', marginBottom: 'var(--space-1)' }}>
                    Receipts-first
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                    Everything we build is anchored in an auditable, cryptographically verifiable record of what happened.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--gray-900)', marginBottom: 'var(--space-1)' }}>
                    Protocol-driven
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                    PEAC evolves in the open, with clear specifications, test vectors, and governance so that anyone can implement it.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--gray-900)', marginBottom: 'var(--space-1)' }}>
                    Developer-led
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                    CLI tools, SDKs, and upstream packages are treated as first-class, so you can start with a single file and a command-line tool before committing to any hosted service.
                  </p>
                </div>
              </div>
            </div>

            {/* Company */}
            <div className="card" style={{ textAlign: 'left', background: 'var(--gray-50)' }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
                Company
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-700)', lineHeight: 1.8, marginBottom: 'var(--space-4)' }}>
                ORIGINARY <span style={{ fontSize: '0.75em', verticalAlign: 'super' }}>™</span> is a brand of <strong>Poem, Inc.</strong>
              </p>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-700)', lineHeight: 1.8, marginBottom: 'var(--space-4)' }}>
                Poem, Inc. builds AI infrastructure software and tools for the agentic web, and maintains the Originary products and services that run on top of PEAC Protocol.
              </p>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)', lineHeight: 1.6, marginBottom: 'var(--space-6)' }}>
                In the U.S., &ldquo;Originary&rdquo; is used by Poem, Inc. as a brand for its AI infrastructure software and tools for the agentic web. Poem, Inc. is not affiliated with Originary Inc.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary btn-sm">
                  Contact us
                </Link>
                <Link href="/legal/imprint" className="btn btn-ghost btn-sm">
                  View imprint
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
