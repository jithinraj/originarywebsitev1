'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import {
  Shield,
  Users,
  FileCheck,
  CreditCard,
  Scale,
  Lock,
  GitBranch,
  Layers,
  Eye,
  Zap,
  CheckCircle,
  ArrowRight,
  Github,
  Building,
  FileText,
  Code,
  Receipt
} from 'lucide-react'

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const pillars = [
    { name: 'Access', desc: 'Who can read or call what.', icon: <Shield size={18} /> },
    { name: 'Attribution', desc: 'How creators and sources are credited.', icon: <Users size={18} /> },
    { name: 'Consent', desc: 'What is allowed under stated terms.', icon: <FileCheck size={18} /> },
    { name: 'Commerce', desc: 'Optional settlement terms and evidence.', icon: <CreditCard size={18} /> },
    { name: 'Compliance', desc: 'How obligations map to verifiable controls.', icon: <Scale size={18} /> },
    { name: 'Privacy', desc: 'What is collected, retained, and disclosed.', icon: <Lock size={18} /> },
    { name: 'Provenance', desc: 'How outputs trace to inputs and decisions.', icon: <GitBranch size={18} /> },
  ]

  const products = [
    {
      name: 'Declare (Policy Kit)',
      desc: 'Define interaction terms once in a format that is human-readable and machine-enforceable.',
      icon: <FileText size={28} />
    },
    {
      name: 'Trace',
      desc: 'Produce evidence exports and decision views derived from receipts and policy snapshots for audits, disputes, and operations.',
      icon: <Eye size={28} />
    },
    {
      name: 'Gateway 402',
      desc: 'Enforce allow/deny/rate limits and optional HTTP 402 challenges, then issue receipts consistently at the edge or origin.',
      icon: <CreditCard size={28} />
    },
    {
      name: 'Verify API',
      desc: 'Verify receipt signatures and bind outcomes to the policy state in force at decision time. Designed to validate receipts from conformant issuers.',
      icon: <CheckCircle size={28} />
    },
    {
      name: 'Studio',
      desc: 'Collaborative tooling for policy review, testing, and operating evidence workflows.',
      icon: <Layers size={28} />
    },
  ]

  const principles = [
    {
      name: 'Receipts-first',
      desc: 'We treat receipts as portable decision records: durable evidence that can be verified independently and used across audits, disputes, and partner workflows.',
      icon: <Receipt size={24} />
    },
    {
      name: 'Protocol-driven',
      desc: 'PEAC evolves in the open with clear specifications, test vectors, and governance so anyone can implement it without permission.',
      icon: <Code size={24} />
    },
    {
      name: 'Developer-led',
      desc: 'Start with a single file (peac.txt) and the SDK/CLI. Adopt hosted services only when you need operational support.',
      icon: <Zap size={24} />
    },
  ]

  return (
    <>
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section
          className="section"
          style={{
            position: 'relative',
            background: 'var(--gradient-mesh)',
            paddingTop: 'var(--space-24)',
            paddingBottom: 'var(--space-24)',
            overflow: 'hidden'
          }}
        >
          {/* Animated Gradient Orbs */}
          <div
            style={{
              position: 'absolute',
              top: '10%',
              right: '10%',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(99,91,255,0.12) 0%, transparent 70%)',
              animation: 'float 8s ease-in-out infinite',
              pointerEvents: 'none'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '10%',
              left: '5%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,212,170,0.08) 0%, transparent 70%)',
              animation: 'float 6s ease-in-out infinite reverse',
              pointerEvents: 'none'
            }}
          />

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div
              style={{
                textAlign: 'center',
                maxWidth: '900px',
                margin: '0 auto',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  background: 'rgba(99, 91, 255, 0.1)',
                  border: '1px solid rgba(99, 91, 255, 0.2)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--space-2) var(--space-6)',
                  marginBottom: 'var(--space-8)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600,
                  color: 'var(--brand-primary)'
                }}
              >
                <Receipt size={16} />
                Receipts and policy infrastructure for the agentic web
              </div>

              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.7,
                  color: 'var(--gray-600)',
                  marginBottom: 'var(--space-6)',
                  fontWeight: 500
                }}
              >
                Originary builds PEAC, an open standard for publishing interaction terms and issuing portable, verifiable decision records.
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
                About <span className="text-gradient">Originary</span>
              </h1>

              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--gray-600)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-10)'
                }}
              >
                Making the open web work for both humans and agents
              </p>

              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/developers" className="btn btn-primary btn-lg">
                  Get started
                  <ArrowRight size={18} />
                </Link>
                <Link href="/peac" className="btn btn-secondary btn-lg">
                  Explore PEAC Protocol
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2
                style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)',
                  textAlign: 'center'
                }}
              >
                Our Mission
              </h2>
              <div
                className="card"
                style={{
                  background: 'linear-gradient(135deg, rgba(99, 91, 255, 0.03) 0%, rgba(0, 212, 170, 0.03) 100%)',
                  border: '1px solid rgba(99, 91, 255, 0.1)',
                  textAlign: 'left'
                }}
              >
                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--gray-700)', lineHeight: 1.8, marginBottom: 'var(--space-4)' }}>
                  The web was built for humans clicking links. Agents need machine-readable terms, predictable enforcement, and a durable way to verify what happened without relying on a single vendor&apos;s logs.
                </p>
                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--gray-700)', lineHeight: 1.8, marginBottom: 'var(--space-6)' }}>
                  We make <strong>agent interactions</strong> verifiable through <strong>portable decision records</strong>: signed receipts that bind outcomes to the policy state in force at decision time.
                </p>
                <div
                  style={{
                    background: 'var(--gray-50)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-6)',
                    borderLeft: '4px solid var(--brand-primary)'
                  }}
                >
                  <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-700)', lineHeight: 1.7, marginBottom: 'var(--space-3)', fontWeight: 600 }}>
                    We build this on two foundations:
                  </p>
                  <ul style={{ fontSize: 'var(--text-base)', color: 'var(--gray-700)', lineHeight: 1.8, paddingLeft: 'var(--space-6)', margin: 0 }}>
                    <li style={{ marginBottom: 'var(--space-2)' }}>
                      <strong>PEAC Protocol</strong> - the open standard for policy discovery and verifiable receipts (settlement is optional and adapter-based)
                    </li>
                    <li>
                      <strong>Originary Platform</strong> - production components that help teams author policy, enforce decisions, and verify receipts in real systems
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seven Pillars Section - Compact Grid */}
        <section style={{ background: 'var(--gray-50)', padding: 'var(--space-10) 0' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
              <h2 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-1)', color: 'var(--gray-900)' }}>
                The Seven Pillars
              </h2>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', maxWidth: '600px', margin: '0 auto' }}>
                Everything we design is tied together through <strong>decision context</strong>: receipts bind outcomes to the access terms, consent, attribution, and other constraints that were active at decision time.
              </p>
            </div>

            {/* CSS Grid: 4 columns on desktop (4+3 layout), 2 on tablet, 1 on mobile */}
            <div className="pillars-grid">
              {pillars.map((pillar) => (
                <div
                  key={pillar.name}
                  style={{
                    background: 'var(--white)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-3) var(--space-4)',
                    border: '1px solid var(--gray-200)',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: '4px' }}>
                    <span style={{ color: 'var(--brand-primary)' }}>{pillar.icon}</span>
                    <h3 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--gray-900)', margin: 0 }}>
                      {pillar.name}
                    </h3>
                  </div>
                  <p style={{ fontSize: '12px', color: 'var(--gray-500)', lineHeight: 1.5, margin: 0 }}>
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
            <style jsx>{`
              .pillars-grid {
                display: grid;
                gap: 12px;
                grid-template-columns: 1fr;
              }
              @media (min-width: 640px) {
                .pillars-grid {
                  grid-template-columns: repeat(2, 1fr);
                }
              }
              @media (min-width: 1024px) {
                .pillars-grid {
                  grid-template-columns: repeat(4, 1fr);
                }
              }
            `}</style>
          </div>
        </section>

        {/* What We're Building Section */}
        <section className="section" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>
              <h2
                style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-4)',
                  color: 'var(--gray-900)'
                }}
              >
                What We&apos;re Building
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--gray-600)',
                  maxWidth: '700px',
                  margin: '0 auto var(--space-12) auto',
                  lineHeight: 1.7
                }}
              >
                We start with policy and receipts, then add verification, enforcement, and operational exports as deployments grow. Products are modular: adopt one surface or deploy the full stack.
              </p>
            </div>

            <div
              className="grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 'var(--space-6)',
                marginBottom: 'var(--space-8)'
              }}
            >
              {products.map((product) => (
                <div
                  key={product.name}
                  className="card"
                  style={{
                    display: 'flex',
                    gap: 'var(--space-4)',
                    alignItems: 'flex-start',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: 'var(--radius-lg)',
                      background: 'linear-gradient(135deg, rgba(99, 91, 255, 0.1) 0%, rgba(0, 212, 170, 0.1) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--brand-primary)',
                      flexShrink: 0
                    }}
                  >
                    {product.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--gray-900)', marginBottom: 'var(--space-2)' }}>
                      {product.name}
                    </h3>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                      {product.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)', lineHeight: 1.6, textAlign: 'center', maxWidth: '800px', margin: '0 auto var(--space-8) auto' }}>
              Teams typically start with <strong>Declare + the SDK/CLI</strong>, then add <strong>Gateway</strong> and <strong>Verify</strong> when they need enforcement and third-party verifiability. <strong>Trace</strong> and <strong>Studio</strong> follow when audits, disputes, or scale require structured evidence workflows.
            </p>

            <div style={{ textAlign: 'center' }}>
              <Link href="/products" className="btn btn-primary">
                View all products
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* PEAC Protocol Section */}
        <section
          className="section"
          style={{
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.05) 0%, rgba(99, 91, 255, 0.05) 100%)',
            paddingTop: 'var(--space-20)',
            paddingBottom: 'var(--space-20)'
          }}
        >
          <div className="container">
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                    background: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid rgba(34, 197, 94, 0.2)',
                    borderRadius: 'var(--radius-full)',
                    padding: 'var(--space-2) var(--space-6)',
                    marginBottom: 'var(--space-6)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 600,
                    color: 'rgb(34, 197, 94)'
                  }}
                >
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgb(34, 197, 94)' }} />
                  Open Source - Apache-2.0
                </div>
                <h2
                  style={{
                    fontSize: 'var(--text-3xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--gray-900)'
                  }}
                >
                  PEAC Protocol: Open-Source Foundation
                </h2>
              </div>

              <div
                className="card"
                style={{
                  background: 'var(--white)',
                  textAlign: 'left'
                }}
              >
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-700)', lineHeight: 1.8, marginBottom: 'var(--space-4)' }}>
                  <strong>PEAC</strong> (Programmable Environment for Agent Coordination) is the open protocol behind our receipts.
                </p>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-700)', lineHeight: 1.8, marginBottom: 'var(--space-4)' }}>
                  It defines how policies are published (for example at <code style={{ background: 'var(--gray-100)', padding: '2px 8px', borderRadius: '4px', fontSize: 'var(--text-sm)' }}>/.well-known/peac.txt</code>) and how cryptographically signed receipts provide portable evidence of an interaction outcome under declared terms. Settlement can be represented when applicable, but PEAC is rail-neutral by design.
                </p>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-700)', lineHeight: 1.8, marginBottom: 'var(--space-4)' }}>
                  PEAC is Apache-2.0 licensed and stewarded in the open on GitHub by contributors from Originary and the broader community. Multiple independent implementations are expected and encouraged. Originary ships one reference implementation and optional hosted services, but the protocol is not owned by a vendor.
                </p>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)', lineHeight: 1.6, marginBottom: 'var(--space-6)' }}>
                  PEAC is currently at version 0.9.27. Wire formats and verification rules are converging; core concepts (policy discovery and receipt verification) are designed for long-term stability.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                  <Link href="/peac" className="btn btn-primary">
                    Explore PEAC
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="https://github.com/peacprotocol/peac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <Github size={16} />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="section" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <h2
                style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-4)',
                  color: 'var(--gray-900)'
                }}
              >
                How We Work
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--gray-600)',
                  maxWidth: '600px',
                  margin: '0 auto',
                  lineHeight: 1.7
                }}
              >
                Our principles guide everything we build
              </p>
            </div>

            <div
              className="grid grid-3"
              style={{
                gap: 'var(--space-6)',
                maxWidth: '1000px',
                margin: '0 auto'
              }}
            >
              {principles.map((principle) => (
                <div
                  key={principle.name}
                  className="card"
                  style={{
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(99, 91, 255, 0.1) 0%, rgba(0, 212, 170, 0.1) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--brand-primary)',
                      margin: '0 auto var(--space-4) auto'
                    }}
                  >
                    {principle.icon}
                  </div>
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--gray-900)', marginBottom: 'var(--space-3)' }}>
                    {principle.name}
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Section */}
        <section className="section" style={{ background: 'var(--gray-50)', paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: 'var(--radius-xl)',
                    background: 'linear-gradient(135deg, var(--brand-primary) 0%, rgba(99, 91, 255, 0.8) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--white)',
                    margin: '0 auto var(--space-6) auto',
                    boxShadow: '0 8px 32px rgba(99, 91, 255, 0.25)'
                  }}
                >
                  <Building size={32} />
                </div>
                <h2
                  style={{
                    fontSize: 'var(--text-3xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--gray-900)'
                  }}
                >
                  Company
                </h2>
              </div>

              <div
                className="card"
                style={{
                  background: 'var(--white)',
                  textAlign: 'center'
                }}
              >
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                  Originary is the steward and primary implementer of PEAC, operated by Poem, Inc.
                </p>
                <p style={{ fontSize: 'var(--text-xl)', color: 'var(--gray-700)', lineHeight: 1.8, marginBottom: 'var(--space-4)', fontWeight: 600 }}>
                  ORIGINARY<sup style={{ fontSize: '0.6em' }}>TM</sup> is a brand of <strong>Poem, Inc.</strong>
                </p>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: 'var(--space-4)', maxWidth: '600px', margin: '0 auto var(--space-4) auto' }}>
                  Poem, Inc. builds AI infrastructure software and tools for the agentic web, and maintains the Originary products and services that run on top of PEAC Protocol.
                </p>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)', lineHeight: 1.6, marginBottom: 'var(--space-8)', maxWidth: '600px', margin: '0 auto var(--space-8) auto' }}>
                  In the U.S., &ldquo;Originary&rdquo; is used by Poem, Inc. as a brand for its AI infrastructure software and tools for the agentic web. Poem, Inc. is not affiliated with Originary Inc.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/contact" className="btn btn-primary">
                    Contact us
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/legal/imprint" className="btn btn-ghost">
                    View imprint
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
