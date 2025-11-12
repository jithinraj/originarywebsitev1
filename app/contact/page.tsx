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
                  color: 'var(--gray-900)'
                }}
              >
                Get in touch
              </h1>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--gray-600)' }}>
                Questions about products, partnerships, or technical support
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
                <Mail size={32} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  Email
                </h3>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--brand-primary)', fontWeight: 600 }}>
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
                <Phone size={32} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                  Phone
                </h3>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--brand-primary)', fontWeight: 600 }}>
                  +1 415-707-0402
                </p>
              </a>
            </div>

            <div className="card" style={{ marginBottom: 'var(--space-12)', textAlign: 'left' }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-6)', color: 'var(--gray-900)' }}>
                How we can help
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--gray-900)', marginBottom: 'var(--space-1)' }}>
                    General inquiries
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                    Questions about Originary, PEAC Protocol, or getting started
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--gray-900)', marginBottom: 'var(--space-1)' }}>
                    Sales and partnerships
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                    Enterprise pricing, custom deployments, and strategic partnerships
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--gray-900)', marginBottom: 'var(--space-1)' }}>
                    Technical support
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                    Implementation help, integration questions, and troubleshooting
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--gray-900)', marginBottom: 'var(--space-1)' }}>
                    Legal and compliance
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                    Privacy inquiries, trademark questions, and compliance matters
                  </p>
                </div>
              </div>
            </div>

            <div className="card" style={{ textAlign: 'center', background: 'var(--gray-50)' }}>
              <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-6)', color: 'var(--gray-900)' }}>
                Connect with us
              </h2>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="https://github.com/originaryx"
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
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', marginBottom: 'var(--space-4)' }}>
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
