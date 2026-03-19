import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Mark from '@/components/Mark'

export const metadata: Metadata = {
  title: 'Press',
  description: 'Press information, media resources, and brand assets for Originary. Contact press@originary.xyz for inquiries.',
  robots: 'index,follow',
  alternates: {
    canonical: '/press',
  },
  openGraph: {
    title: 'Press | Originary',
    description: 'Press information, media resources, and brand assets for Originary.',
    url: '/press',
    siteName: 'Originary',
    images: [{ url: '/og' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Press | Originary',
    description: 'Press information, media resources, and brand assets for Originary.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
}

export default function Press() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        <section className="section" style={{ background: 'var(--surface-elevated)', paddingTop: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
                color: 'var(--text-primary)'
              }}>
                Press Information
              </h1>

              <div style={{ fontSize: 'var(--text-lg)', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                <h2 style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 600,
                  marginTop: 'var(--space-12)',
                  marginBottom: 'var(--space-6)'
                }}>
                  About <Mark>Originary</Mark>
                </h2>
                <p style={{ marginBottom: 'var(--space-6)' }}>
                  Originary is the verification layer for agent-facing systems. Teams publish peac.txt to declare access, consent, attribution, privacy, and pricing terms. Every API call, tool run, or agent handoff produces a signed interaction record that can be verified independently, even offline. PEAC is the open standard; Originary is a production implementation.
                </p>

                <h2 style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 600,
                  marginTop: 'var(--space-12)',
                  marginBottom: 'var(--space-6)'
                }}>
                  Media Contact
                </h2>
                <div style={{
                  background: 'var(--surface-subtle)',
                  border: '1px solid var(--border-default)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-6)',
                  marginBottom: 'var(--space-8)'
                }}>
                  <p style={{ margin: 0 }}>
                    For press inquiries, please contact:{' '}
                    <a href="mailto:press@originary.xyz" style={{ color: 'var(--accent-brand)' }}>
                      press@originary.xyz
                    </a>
                  </p>
                </div>

                <h2 style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 600,
                  marginTop: 'var(--space-12)',
                  marginBottom: 'var(--space-6)'
                }}>
                  Brand Assets
                </h2>
                <p style={{ marginBottom: 'var(--space-6)' }}>
                  Download logos and brand assets for media use. Please follow our brand guidelines when using Originary materials.
                </p>
                <p>
                  <a href="/brand" style={{ color: 'var(--accent-brand)' }}>
                    View brand guidelines →
                  </a>
                </p>

                <h2 style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 600,
                  marginTop: 'var(--space-12)',
                  marginBottom: 'var(--space-6)'
                }}>
                  Company Descriptions
                </h2>

                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                    Short (tweet-length)
                  </h3>
                  <div style={{
                    background: 'var(--surface-subtle)',
                    border: '1px solid var(--border-default)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-4)',
                    marginBottom: 'var(--space-4)',
                    fontSize: 'var(--text-base)',
                  }}>
                    Originary helps APIs, tools, and MCP servers know what agents did, apply policy, and return verifiable interaction records.
                  </div>

                  <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                    Medium (paragraph)
                  </h3>
                  <div style={{
                    background: 'var(--surface-subtle)',
                    border: '1px solid var(--border-default)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-4)',
                    marginBottom: 'var(--space-4)',
                    fontSize: 'var(--text-base)',
                  }}>
                    Originary is the verification layer for agent-facing systems. Teams publish machine-readable terms, verify agent requests, apply policy, and return verifiable interaction records that can be verified independently, even offline. PEAC is the open standard underneath, licensed Apache-2.0.
                  </div>

                  <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                    Long (full)
                  </h3>
                  <div style={{
                    background: 'var(--surface-subtle)',
                    border: '1px solid var(--border-default)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-4)',
                    marginBottom: 'var(--space-4)',
                    fontSize: 'var(--text-base)',
                  }}>
                    Originary helps APIs, tools, and MCP servers verify agent requests, apply policy, and return verifiable interaction records. When an agent calls your system, Originary evaluates who is calling, what policy applies, and returns a signed record of the decision. These records are portable, offline-verifiable, and built on PEAC, the open standard for verifiable interaction records. The protocol is Apache-2.0 licensed, self-hostable, and designed for multiple independent implementations.
                  </div>
                </div>

                <h2 style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 600,
                  marginTop: 'var(--space-12)',
                  marginBottom: 'var(--space-6)'
                }}>
                  How to Describe Originary
                </h2>
                <div style={{
                  background: 'var(--surface-subtle)',
                  border: '1px solid var(--border-default)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-6)',
                  marginBottom: 'var(--space-8)',
                }}>
                  <p style={{ marginBottom: 'var(--space-4)' }}>
                    Originary is the verification layer for agent-facing systems. PEAC is the open standard underneath.
                  </p>
                  <p style={{ marginBottom: 'var(--space-4)' }}>
                    Do not describe Originary as a payment protocol, an identity system, or an AI framework.
                  </p>
                  <p style={{ margin: 0 }}>
                    Do not describe PEAC as an Originary product. PEAC is an open standard; Originary is one implementation.
                  </p>
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