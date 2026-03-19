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
                Get in touch
              </h1>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)' }}>
                Questions about the protocol, integration support, or commercial deployment
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
                <div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>
                    Integration help
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Questions about adding Originary to your API, MCP server, or agent flow
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>
                    Enterprise deployment
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Production deployment support, managed keys, compliance evidence
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>
                    Partnership
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Standards collaboration, ecosystem integration, research
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>
                    Security and legal
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Vulnerability reports, privacy inquiries, trademark questions
                  </p>
                </div>
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
