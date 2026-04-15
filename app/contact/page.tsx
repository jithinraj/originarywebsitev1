'use client'

import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <NavigationHeader />
      <main style={{ paddingTop: '80px', minHeight: '70vh' }}>
        <section className="section" style={{ paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-24)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h1
                style={{
                  fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-5xl))',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.04em',
                  marginBottom: 'var(--space-4)',
                  color: 'var(--text-primary)'
                }}
              >
                Talk to Originary
              </h1>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)' }}>
                Technical review, enterprise deployment, pilot planning, integration support, or partnership inquiry.
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: 'var(--space-6)', marginBottom: 'var(--space-12)' }}>
              <a
                href="mailto:contact@originary.xyz"
                className="card hover-lift"
                style={{
                  textDecoration: 'none',
                  display: 'block'
                }}
              >
                <Mail size={32} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  Email
                </h3>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--accent-brand)', fontWeight: 600 }}>
                  contact@originary.xyz
                </p>
              </a>

              <a
                href="tel:+14157070402"
                className="card hover-lift"
                style={{
                  textDecoration: 'none',
                  display: 'block'
                }}
              >
                <Phone size={32} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  Phone
                </h3>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--accent-brand)', fontWeight: 600 }}>
                  +1 415-707-0402
                </p>
              </a>
            </div>

            <div className="card" style={{ marginBottom: 'var(--space-12)', textAlign: 'left' }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-6)', color: 'var(--text-primary)' }}>
                How we can help
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {[
                  { title: 'Book a technical review', desc: 'Architecture walkthrough, integration planning, deployment review', mailto: 'contact@originary.xyz?subject=Technical%20Review' },
                  { title: 'Enterprise deployment', desc: 'Managed verification, key management, compliance evidence, pilot scope', mailto: 'contact@originary.xyz?subject=Enterprise%20Deployment' },
                  { title: 'Integration support', desc: 'Adding Originary to your API, MCP server, or agent workflow', mailto: 'contact@originary.xyz?subject=Integration%20Support' },
                  { title: 'Partnership', desc: 'Standards collaboration, ecosystem integration, research', mailto: 'contact@originary.xyz?subject=Partnership' },
                  { title: 'Security and legal', desc: 'Vulnerability reports, privacy inquiries, trademark questions', mailto: 'security@originary.xyz?subject=Security%20Inquiry' },
                ].map((item) => (
                  <a key={item.title} href={`mailto:${item.mailto}`} style={{ textDecoration: 'none', display: 'block', padding: 'var(--space-4)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', transition: 'border-color 0.2s ease' }}>
                    <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--accent-brand)', marginBottom: 'var(--space-1)' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                      {item.desc}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            <div className="card" style={{ textAlign: 'center', background: 'var(--surface-subtle)' }}>
              <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-6)', color: 'var(--text-primary)' }}>
                Connect with us
              </h2>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="https://github.com/peacprotocol/peac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}
                >
                  <Github size={20} />
                  GitHub
                </a>
                <a
                  href="https://x.com/originaryx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}
                >
                  <Twitter size={20} />
                  X / Twitter
                </a>
                <a
                  href="https://www.linkedin.com/company/originary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>

            <div style={{ marginTop: 'var(--space-12)', textAlign: 'center' }}>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
                Looking for something specific?
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/developers" className="btn btn-ghost btn-sm">
                  Documentation
                </Link>
                <Link href="/pricing" className="btn btn-ghost btn-sm">
                  Pricing
                </Link>
                <Link href="/trust" className="btn btn-ghost btn-sm">
                  Trust Center
                </Link>
                <Link href="/legal/imprint" className="btn btn-ghost btn-sm">
                  Legal Info
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
