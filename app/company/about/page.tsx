import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About : Originary',
  description: 'Originary provides orchestration infrastructure for the agentic web, enabling autonomous agents to discover policies, negotiate terms, and complete transactions safely.',
  keywords: 'about Originary, agentic web, orchestration infrastructure, autonomous agents, PEAC protocol',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'About : Originary',
    description: 'Originary provides orchestration infrastructure for the agentic web, enabling autonomous agents to discover policies, negotiate terms, and complete transactions safely.',
    url: 'https://originary.xyz/company/about',
    images: ['https://originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About : Originary',
    description: 'Originary provides orchestration infrastructure for the agentic web, enabling autonomous agents to discover policies, negotiate terms, and complete transactions safely.',
    images: ['https://originary.xyz/og.jpg'],
    site: '@originary',
    creator: '@originary',
  },
  robots: 'index,follow',
  alternates: {
    canonical: 'https://originary.xyz/company/about',
  },
}

export default function About() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        <section className="section" style={{ background: 'var(--white)', paddingTop: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                background: 'rgba(99, 91, 255, 0.1)',
                border: '1px solid rgba(99, 91, 255, 0.2)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-6)',
                marginBottom: 'var(--space-6)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--brand-primary)'
              }}>
                <span>ABOUT ORIGINARY</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)'
              }}>
                Receipts for the <span className="text-gradient">agentic web</span>
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.7,
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-8)',
                maxWidth: '900px',
                margin: '0 auto var(--space-8) auto'
              }}>
                We believe the future belongs to autonomous agents that can safely discover, negotiate, and transact with digital resources. Originary provides the infrastructure to make this vision reality.
              </p>
            </div>

            <div style={{ marginBottom: 'var(--space-20)' }}>
              <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>Our mission</h2>
              <div className="card" style={{ textAlign: 'center', padding: 'var(--space-12)' }}>
                <p style={{
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.7,
                  color: 'var(--gray-600)',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}>
                  To enable a world where autonomous agents can safely and efficiently coordinate with digital resources, creating new economic opportunities while respecting creator preferences and maintaining compliance.
                </p>
              </div>
            </div>

            <div style={{ marginBottom: 'var(--space-20)' }}>
              <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>What we do</h2>
              <div className="grid grid-2" style={{ gap: 'var(--space-8)' }}>
                <div className="card">
                  <h3 style={{ marginBottom: 'var(--space-4)' }}>PEAC Protocol</h3>
                  <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
                    We developed the open PEAC protocol for standardized agent–resource interaction with signed receipts.
                  </p>
                </div>
                <div className="card">
                  <h3 style={{ marginBottom: 'var(--space-4)' }}>Enterprise Infrastructure</h3>
                  <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
                    We provide production-ready tools and services for enterprises deploying agentic systems at scale.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: 'var(--space-20)' }}>
              <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>Our values</h2>
              <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
                <div className="card">
                  <h3 style={{ marginBottom: 'var(--space-4)' }}>Open Standards</h3>
                  <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
                    We believe in open protocols that benefit the entire ecosystem, not just our company.
                  </p>
                </div>
                <div className="card">
                  <h3 style={{ marginBottom: 'var(--space-4)' }}>Creator Respect</h3>
                  <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
                    Digital creators should have control over how their content is accessed and used by agents.
                  </p>
                </div>
                <div className="card">
                  <h3 style={{ marginBottom: 'var(--space-4)' }}>Enterprise Ready</h3>
                  <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
                    Our solutions are designed for security, compliance, and reliability at scale.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="card" style={{
              textAlign: 'center',
              background: 'var(--gradient-brand)',
              color: 'white'
            }}>
              <h2 style={{ marginBottom: 'var(--space-6)', color: 'white' }}>Join us</h2>
              <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)', opacity: 0.9 }}>
                We&apos;re building the future of agentic coordination. Interested in joining our mission?
              </p>
              <div style={{
                display: 'flex',
                gap: 'var(--space-4)',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <Link
                  href="/company/contact"
                  className="btn btn-lg"
                  style={{
                    background: 'var(--white)',
                    color: 'var(--brand-primary)',
                    border: 'none'
                  }}
                >
                  <span>Get in touch</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
