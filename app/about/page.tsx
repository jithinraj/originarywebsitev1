'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { FACTS } from '@/lib/facts'
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
  Receipt,
  ShieldCheck,
  Fingerprint,
  Target
} from 'lucide-react'

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

const reveal = (visible: boolean, delay = 0): React.CSSProperties => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : 'translateY(28px)',
  transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
})

export default function AboutPage() {
  const [heroReady, setHeroReady] = useState(false)
  useEffect(() => { setHeroReady(true) }, [])

  const mission = useReveal()
  const statsSection = useReveal()
  const domainsSection = useReveal()
  const approachSection = useReveal()
  const productsSection = useReveal()
  const foundationSection = useReveal()
  const companySection = useReveal()

  const domainList = [
    { name: 'Identity', desc: 'Cryptographic proof-of-control for agents and operators.', icon: <Fingerprint size={18} /> },
    { name: 'Purpose', desc: 'Declared intent for each interaction.', icon: <Target size={18} /> },
    { name: 'Consent', desc: 'What is allowed under stated terms.', icon: <FileCheck size={18} /> },
    { name: 'Privacy', desc: 'What is collected, retained, and disclosed.', icon: <Lock size={18} /> },
    { name: 'Safety', desc: 'Defense-in-depth security and safe-by-default design.', icon: <ShieldCheck size={18} /> },
    { name: 'Access', desc: 'Who can read or call what.', icon: <Shield size={18} /> },
    { name: 'Commerce', desc: 'Optional settlement terms and evidence.', icon: <CreditCard size={18} /> },
    { name: 'Attribution', desc: 'How creators and sources are credited.', icon: <Users size={18} /> },
    { name: 'Provenance', desc: 'How outputs trace to inputs and decisions.', icon: <GitBranch size={18} /> },
    { name: 'Compliance', desc: 'How obligations map to verifiable controls.', icon: <Scale size={18} /> },
  ]

  const productList = [
    { name: 'Declare', desc: 'Define interaction terms once in a format that is human-readable and machine-enforceable.', icon: <FileText size={22} /> },
    { name: 'Trace', desc: 'Evidence exports and decision views for audits, disputes, and operations.', icon: <Eye size={22} /> },
    { name: 'Gateway 402', desc: 'Edge enforcement with HTTP 402 challenges and signed record issuance.', icon: <CreditCard size={22} /> },
    { name: 'Verify API', desc: 'Verify signatures and bind outcomes to the policy state at decision time.', icon: <CheckCircle size={22} /> },
    { name: 'Studio', desc: 'Policy review, testing, and evidence workflow tooling.', icon: <Layers size={22} /> },
  ]

  return (
    <>
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>

        {/* ── Hero ── */}
        <section
          style={{
            position: 'relative',
            background: 'var(--surface-elevated)',
            padding: 'clamp(4rem, 12vh, 8rem) 0 clamp(4rem, 10vh, 6rem)',
            overflow: 'hidden',
          }}
        >
          <div
            className="container"
            style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}
          >
            <h1
              style={{
                ...reveal(heroReady, 0),
                fontSize: 'clamp(var(--text-5xl), 8vw, var(--text-8xl))',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
                color: 'var(--text-primary)',
              }}
            >
              About <span className="text-gradient">Originary</span>
            </h1>

            <p
              style={{
                ...reveal(heroReady, 0.1),
                fontSize: 'clamp(var(--text-lg), 2.5vw, var(--text-2xl))',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                maxWidth: '660px',
                margin: '0 auto var(--space-10) auto',
                fontWeight: 400,
              }}
            >
              Middleware, tools, and SDKs that make agent interactions verifiable. Built on PEAC, the open protocol for signed interaction records.
            </p>

            <div
              style={{
                ...reveal(heroReady, 0.2),
                display: 'flex',
                gap: 'var(--space-4)',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link href="/developers" className="btn btn-primary btn-lg">
                Get started
                <ArrowRight size={18} />
              </Link>
              <Link href="/peac" className="btn btn-secondary btn-lg">
                Explore PEAC Protocol
              </Link>
            </div>
          </div>
        </section>

        {/* ── Mission ── */}
        <section style={{ padding: 'var(--space-24) 0 var(--space-16)' }}>
          <div ref={mission.ref} className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p
              style={{
                ...reveal(mission.visible, 0),
                fontSize: 'clamp(var(--text-2xl), 3.5vw, var(--text-4xl))',
                fontWeight: 600,
                lineHeight: 1.35,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                textAlign: 'center',
                marginBottom: 'var(--space-8)',
              }}
            >
              The web was built for humans clicking links.{' '}
              <span style={{ color: 'var(--accent-brand)' }}>Agents need something different.</span>
            </p>

            <p
              style={{
                ...reveal(mission.visible, 0.08),
                fontSize: 'var(--text-lg)',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                textAlign: 'center',
                marginBottom: 'var(--space-4)',
              }}
            >
              Machine-readable terms, predictable enforcement, and a durable way to verify what happened
              without relying on a single vendor&apos;s logs. We make <strong>agent interactions</strong> verifiable
              through <strong>signed interaction records</strong> that bind outcomes to the policy state
              in force at decision time.
            </p>

            <p
              style={{
                ...reveal(mission.visible, 0.12),
                fontSize: 'var(--text-base)',
                color: 'var(--text-tertiary)',
                lineHeight: 1.7,
                textAlign: 'center',
                maxWidth: '680px',
                margin: '0 auto var(--space-12) auto',
              }}
            >
              An interaction record can be verified offline by any party, stored independently
              of the issuing service, and used across audits, disputes, and partner workflows.
            </p>

            <p
              style={{
                ...reveal(mission.visible, 0.15),
                fontSize: 'var(--text-base)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                textAlign: 'center',
                maxWidth: '680px',
                margin: '0 auto var(--space-12) auto',
                fontStyle: 'italic',
              }}
            >
              Agents are crossing organizational boundaries every day: booking, purchasing,
              accessing tools, calling APIs. When software acts on behalf of people across
              trust boundaries, the decisions need to be explicit, verifiable, and portable.
              That is what Originary builds.
            </p>

            <div
              style={{
                ...reveal(mission.visible, 0.18),
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
                gap: 'var(--space-4)',
              }}
            >
              <div
                style={{
                  background: 'var(--glass-card-bg)',
                  backdropFilter: 'var(--glass-blur)',
                  WebkitBackdropFilter: 'var(--glass-blur)',
                  border: '1px solid var(--glass-card-border)',
                  borderRadius: 'var(--radius-2xl)',
                  padding: 'var(--space-6)',
                  borderLeft: '3px solid var(--accent-brand)',
                }}
              >
                <h3
                  style={{
                    fontSize: 'var(--text-xs)',
                    fontWeight: 700,
                    color: 'var(--accent-brand)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  PEAC Protocol
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  The open format underneath: protocol specification, wire format, conformance suite, and reference implementation. Apache-2.0, no CLA.
                </p>
              </div>
              <div
                style={{
                  background: 'var(--glass-card-bg)',
                  backdropFilter: 'var(--glass-blur)',
                  WebkitBackdropFilter: 'var(--glass-blur)',
                  border: '1px solid var(--glass-card-border)',
                  borderRadius: 'var(--radius-2xl)',
                  padding: 'var(--space-6)',
                  borderLeft: '3px solid var(--accent-secondary)',
                }}
              >
                <h3
                  style={{
                    fontSize: 'var(--text-xs)',
                    fontWeight: 700,
                    color: 'var(--accent-secondary)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  Originary Platform
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  The product surface: middleware, tools, and SDKs that help teams author policy, enforce decisions, and verify receipts in production.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section
          style={{
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: 'var(--space-10) 0',
            background: 'var(--surface-subtle)',
          }}
        >
          <div ref={statsSection.ref} className="container stats-grid" style={{ maxWidth: '820px', margin: '0 auto' }}>
            {[
              { value: '10', label: 'Verification Domains' },
              { value: String(FACTS.publishedPackageCount), label: 'npm Packages' },
              { value: FACTS.testsCount.toLocaleString(), label: 'Tests Passing' },
              { value: FACTS.license, label: 'License' },
            ].map((stat, i) => (
              <div key={stat.label} style={{ ...reveal(statsSection.visible, i * 0.06), textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: stat.value.length > 4 ? 'var(--text-xl)' : 'var(--text-3xl)',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    color: 'var(--text-primary)',
                    lineHeight: 1.2,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: 'var(--text-xs)',
                    color: 'var(--text-tertiary)',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    marginTop: 'var(--space-1)',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Verification Domains ── */}
        <section style={{ padding: 'var(--space-24) 0' }}>
          <div ref={domainsSection.ref} className="container" style={{ maxWidth: '960px', margin: '0 auto' }}>
            <div style={{ ...reveal(domainsSection.visible, 0), textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              <p
                style={{
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-brand)',
                  marginBottom: 'var(--space-3)',
                }}
              >
                Scope
              </p>
              <h2
                style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--space-3)',
                }}
              >
                Ten Verification Domains
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--text-secondary)',
                  maxWidth: '560px',
                  margin: '0 auto',
                  lineHeight: 1.6,
                }}
              >
                Every receipt can attest to one or more of these dimensions, ordered from identity establishment through compliance reporting.
              </p>
            </div>

            <div className="domain-grid">
              {domainList.map((d, i) => (
                <div
                  key={d.name}
                  className="domain-card"
                  style={{
                    ...reveal(domainsSection.visible, 0.03 * i + 0.1),
                    background: 'var(--glass-card-bg)',
                    backdropFilter: 'var(--glass-blur)',
                    WebkitBackdropFilter: 'var(--glass-blur)',
                    border: '1px solid var(--glass-card-border)',
                    borderRadius: 'var(--radius-xl)',
                    padding: 'var(--space-4)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-mono)',
                        minWidth: '20px',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{ color: 'var(--accent-brand)' }}>{d.icon}</span>
                    <h3 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                      {d.name}
                    </h3>
                  </div>
                  <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', lineHeight: 1.5, margin: 0, paddingLeft: '20px' }}>
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Approach ── */}
        <section style={{ background: 'var(--surface-subtle)', padding: 'var(--space-24) 0' }}>
          <div ref={approachSection.ref} className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ ...reveal(approachSection.visible, 0), textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <p
                style={{
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-brand)',
                  marginBottom: 'var(--space-3)',
                }}
              >
                How it works
              </p>
              <h2
                style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--space-3)',
                }}
              >
                Evidence Layer, Not Another Platform
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--text-secondary)',
                  maxWidth: '620px',
                  margin: '0 auto',
                  lineHeight: 1.6,
                }}
              >
                PEAC sits between application logic and the compliance surface. It does not replace payment rails,
                identity providers, or AI frameworks: it gives them a shared way to produce and verify interaction evidence.
              </p>
            </div>

            <div
              style={{
                ...reveal(approachSection.visible, 0.08),
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                gap: 'var(--space-4)',
                marginBottom: 'var(--space-20)',
              }}
            >
              {[
                { label: 'Not a payment protocol', detail: 'Settlement adapters (Stripe, x402, card networks) plug in; PEAC captures the evidence.' },
                { label: 'Not an identity system', detail: 'PEAC verifies key control (Ed25519); the identity layer above decides what keys mean.' },
                { label: 'Not an AI framework', detail: 'PEAC works with any agent stack. Receipts travel alongside tool calls, not inside them.' },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: 'var(--glass-card-bg)',
                    backdropFilter: 'var(--glass-blur)',
                    WebkitBackdropFilter: 'var(--glass-blur)',
                    border: '1px solid var(--glass-card-border)',
                    borderRadius: 'var(--radius-xl)',
                    padding: 'var(--space-5)',
                  }}
                >
                  <h3 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>
                    {item.label}
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', lineHeight: 1.6, margin: 0 }}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Adoption path */}
            <div style={{ ...reveal(approachSection.visible, 0.14), textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>
                Typical Adoption Path
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>
                Start small, expand as trust requirements grow.
              </p>
            </div>

            <div className="adoption-grid" style={reveal(approachSection.visible, 0.18)}>
              {[
                { step: '1', title: 'Declare', detail: 'Publish a peac.txt and start issuing signed receipts with the SDK or CLI.' },
                { step: '2', title: 'Enforce + Verify', detail: 'Add middleware or gateway rules. Third parties verify receipts offline.' },
                { step: '3', title: 'Operate', detail: 'Export evidence bundles, run conformance checks, and feed receipts into audits and dispute workflows.' },
              ].map((item, i) => (
                <div key={item.step} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: i === 0 ? 'var(--accent-brand)' : 'var(--glass-card-bg)',
                      border: i === 0 ? 'none' : '2px solid var(--border-default)',
                      color: i === 0 ? 'var(--white)' : 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 700,
                      marginBottom: 'var(--space-4)',
                      boxShadow: i === 0 ? 'var(--glow-brand)' : 'none',
                    }}
                  >
                    {item.step}
                  </div>
                  <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, maxWidth: '260px' }}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who + Products ── */}
        <section style={{ padding: 'var(--space-24) 0' }}>
          <div ref={productsSection.ref} className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ ...reveal(productsSection.visible, 0), textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              <p
                style={{
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-brand)',
                  marginBottom: 'var(--space-3)',
                }}
              >
                Built for
              </p>
              <h2
                style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)',
                }}
              >
                Who It&apos;s For
              </h2>
            </div>

            <div
              className="audience-grid"
              style={{
                ...reveal(productsSection.visible, 0.06),
                marginBottom: 'var(--space-20)',
              }}
            >
              {[
                { role: 'API Providers', detail: 'Publish interaction terms and issue receipts to every caller, human or agent.' },
                { role: 'AI Agent Builders', detail: 'Collect verifiable proof of what your agent did, under which terms, for audit or dispute resolution.' },
                { role: 'Compliance Teams', detail: 'Map regulatory obligations to receipt-backed evidence without building custom logging.' },
                { role: 'Payment Platforms', detail: 'Attach settlement evidence to existing rails through adapter-based integration.' },
              ].map((item) => (
                <div
                  key={item.role}
                  className="audience-card"
                  style={{
                    background: 'var(--glass-card-bg)',
                    backdropFilter: 'var(--glass-blur)',
                    WebkitBackdropFilter: 'var(--glass-blur)',
                    border: '1px solid var(--glass-card-border)',
                    borderRadius: 'var(--radius-xl)',
                    padding: 'var(--space-5)',
                    textAlign: 'center',
                  }}
                >
                  <h3 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--accent-brand)', marginBottom: 'var(--space-2)' }}>
                    {item.role}
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Products */}
            <div style={{ ...reveal(productsSection.visible, 0.12), textAlign: 'center', marginBottom: 'var(--space-8)' }}>
              <h2
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--space-3)',
                }}
              >
                What We Build
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', maxWidth: '540px', margin: '0 auto', lineHeight: 1.6 }}>
                Modular surfaces: adopt one or deploy the full stack.
              </p>
            </div>

            <div
              className="product-grid"
              style={{
                ...reveal(productsSection.visible, 0.18),
                marginBottom: 'var(--space-8)',
              }}
            >
              {productList.map((product) => (
                <div
                  key={product.name}
                  className="product-card"
                  style={{
                    display: 'flex',
                    gap: 'var(--space-4)',
                    alignItems: 'flex-start',
                    background: 'var(--glass-card-bg)',
                    backdropFilter: 'var(--glass-blur)',
                    WebkitBackdropFilter: 'var(--glass-blur)',
                    border: '1px solid var(--glass-card-border)',
                    borderRadius: 'var(--radius-xl)',
                    padding: 'var(--space-5)',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-lg)',
                      background: 'var(--accent-brand-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-brand)',
                      flexShrink: 0,
                    }}
                  >
                    {product.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>
                      {product.name}
                    </h3>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', lineHeight: 1.5, margin: 0 }}>
                      {product.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p
              style={{
                ...reveal(productsSection.visible, 0.22),
                fontSize: 'var(--text-sm)',
                color: 'var(--text-tertiary)',
                lineHeight: 1.6,
                textAlign: 'center',
                maxWidth: '700px',
                margin: '0 auto var(--space-8) auto',
              }}
            >
              Teams typically start with <strong>Declare + the SDK/CLI</strong>, then add <strong>Gateway</strong> and <strong>Verify</strong> when they need enforcement and third-party verifiability. <strong>Trace</strong> and <strong>Studio</strong> follow when audits or scale require structured evidence workflows.
            </p>

            <div style={{ ...reveal(productsSection.visible, 0.25), textAlign: 'center' }}>
              <Link href="/products" className="btn btn-primary">
                View all products
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Open Foundation ── */}
        <section
          style={{
            background: 'linear-gradient(180deg, var(--accent-brand-faint) 0%, var(--surface-subtle) 100%)',
            padding: 'var(--space-24) 0',
          }}
        >
          <div ref={foundationSection.ref} className="container" style={{ maxWidth: '960px', margin: '0 auto' }}>
            <div style={{ ...reveal(foundationSection.visible, 0), textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  background: 'var(--accent-success-subtle)',
                  border: '1px solid var(--accent-success-border)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--space-1) var(--space-4)',
                  marginBottom: 'var(--space-6)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600,
                  color: 'var(--accent-success)',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-success)' }} />
                Open Source
              </div>
              <h2
                style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--space-3)',
                }}
              >
                Built on an Open Foundation
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', maxWidth: '620px', margin: '0 auto', lineHeight: 1.7 }}>
                <strong>PEAC</strong> (Programmable Environment for Agent Coordination) is the open protocol behind our receipts.
                It defines how policies are published and how cryptographically signed receipts provide portable evidence
                of an interaction outcome under declared terms.
              </p>
            </div>

            {/* Open vs Platform */}
            <div
              className="comparison-grid"
              style={{
                ...reveal(foundationSection.visible, 0.08),
                marginBottom: 'var(--space-10)',
              }}
            >
              <div
                style={{
                  background: 'var(--glass-card-bg)',
                  backdropFilter: 'var(--glass-blur)',
                  WebkitBackdropFilter: 'var(--glass-blur)',
                  border: '1px solid var(--glass-card-border)',
                  borderRadius: 'var(--radius-2xl)',
                  padding: 'var(--space-6)',
                  borderTop: '3px solid var(--accent-success)',
                }}
              >
                <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--accent-success)', marginBottom: 'var(--space-4)' }}>
                  PEAC Protocol (Open Format)
                </h3>
                <ul style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 2, paddingLeft: 'var(--space-5)', margin: 0 }}>
                  <li>Protocol spec, wire format, and conformance suite</li>
                  <li>Apache-2.0 licensed, no CLA required</li>
                  <li>Anyone can implement without permission</li>
                  <li>Wire format frozen until v1.0</li>
                  <li>Independent implementations encouraged</li>
                </ul>
              </div>
              <div
                style={{
                  background: 'var(--glass-card-bg)',
                  backdropFilter: 'var(--glass-blur)',
                  WebkitBackdropFilter: 'var(--glass-blur)',
                  border: '1px solid var(--glass-card-border)',
                  borderRadius: 'var(--radius-2xl)',
                  padding: 'var(--space-6)',
                  borderTop: '3px solid var(--accent-brand)',
                }}
              >
                <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--accent-brand)', marginBottom: 'var(--space-4)' }}>
                  Originary Platform (Product Surface)
                </h3>
                <ul style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 2, paddingLeft: 'var(--space-5)', margin: 0 }}>
                  <li>Middleware, tools, and SDKs for production use</li>
                  <li>Managed policy authoring and enforcement</li>
                  <li>Evidence export, audit views, dashboards</li>
                  <li>Gateway for edge enforcement and HTTP 402</li>
                  <li>Support, SLAs, and compliance guidance</li>
                </ul>
              </div>
            </div>

            {/* Trust */}
            <div
              style={{
                ...reveal(foundationSection.visible, 0.15),
                background: 'var(--glass-card-bg)',
                backdropFilter: 'var(--glass-blur)',
                WebkitBackdropFilter: 'var(--glass-blur)',
                border: '1px solid var(--glass-card-border)',
                borderRadius: 'var(--radius-2xl)',
                padding: 'var(--space-6)',
                marginBottom: 'var(--space-10)',
              }}
            >
              <h3
                style={{
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-tertiary)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                Trust and Governance
              </h3>
              <div className="trust-grid">
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  The protocol specification, conformance vectors, and reference implementation are all published under
                  Apache-2.0 on GitHub. There is no contributor license agreement.
                </p>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  Normative changes follow a public decision record process. Every new field, header, or protocol behavior
                  requires spec text, schema updates, and conformance vectors before shipping.
                </p>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  Originary is the primary implementer, not the sole authority. The conformance suite lets any team
                  validate their implementation independently.
                </p>
              </div>
            </div>

            <div style={{ ...reveal(foundationSection.visible, 0.2), display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
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
        </section>

        {/* ── Principles ── */}
        <section style={{ padding: 'var(--space-20) 0' }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
                How We Work
              </h2>
            </div>
            <div className="principles-grid">
              {[
                {
                  name: 'Receipts-first',
                  desc: 'Durable evidence that can be verified independently and used across audits, disputes, and partner workflows.',
                  icon: <Receipt size={24} />,
                },
                {
                  name: 'Protocol-driven',
                  desc: 'Clear specifications, test vectors, and governance so anyone can implement without permission.',
                  icon: <Code size={24} />,
                },
                {
                  name: 'Developer-led',
                  desc: 'Start with a single file (peac.txt) and the SDK/CLI. Adopt hosted services only when you need them.',
                  icon: <Zap size={24} />,
                },
              ].map((p) => (
                <div key={p.name} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'var(--accent-brand-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-brand)',
                      margin: '0 auto var(--space-4) auto',
                    }}
                  >
                    {p.icon}
                  </div>
                  <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>
                    {p.name}
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Company ── */}
        <section style={{ background: 'var(--surface-subtle)', padding: 'var(--space-20) 0' }}>
          <div ref={companySection.ref} className="container" style={{ maxWidth: '620px', margin: '0 auto', textAlign: 'center' }}>
            <div style={reveal(companySection.visible, 0)}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'var(--accent-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--white)',
                  margin: '0 auto var(--space-6) auto',
                  boxShadow: 'var(--glow-brand)',
                }}
              >
                <Building size={28} />
              </div>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-4)' }}>
                Company
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-3)' }}>
                Originary is the steward and primary implementer of PEAC, operated by Poem, Inc.
              </p>
              <p style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
                ORIGINARY<sup style={{ fontSize: '0.6em' }}>TM</sup> is a brand of <strong>Poem, Inc.</strong>
              </p>
              <p
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  maxWidth: '500px',
                  margin: '0 auto var(--space-3) auto',
                }}
              >
                Poem, Inc. builds AI infrastructure software and tools for the agentic web, and maintains
                the Originary products and services that run on top of PEAC Protocol.
              </p>
              <p
                style={{
                  fontSize: 'var(--text-xs)',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  maxWidth: '480px',
                  margin: '0 auto var(--space-8) auto',
                }}
              >
                In the U.S., &ldquo;Originary&rdquo; is used by Poem, Inc. as a brand for its AI infrastructure
                software and tools for the agentic web. Poem, Inc. is not affiliated with Originary Inc.
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
        </section>

        <style jsx>{`
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-6);
          }
          @media (min-width: 640px) {
            .stats-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }
          .domain-grid {
            display: grid;
            gap: var(--space-3);
            grid-template-columns: 1fr;
          }
          @media (min-width: 640px) {
            .domain-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (min-width: 1024px) {
            .domain-grid {
              grid-template-columns: repeat(5, 1fr);
            }
          }
          .domain-card {
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
          }
          .domain-card:hover {
            border-color: var(--border-brand) !important;
            box-shadow: var(--shadow-glow-brand);
          }
          .adoption-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: var(--space-8);
          }
          @media (min-width: 768px) {
            .adoption-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: var(--space-6);
            }
          }
          .audience-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: var(--space-4);
          }
          @media (min-width: 640px) {
            .audience-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (min-width: 900px) {
            .audience-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }
          .audience-card {
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
          }
          .audience-card:hover {
            border-color: var(--border-brand) !important;
            box-shadow: var(--shadow-glow-brand);
          }
          .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
            gap: var(--space-4);
          }
          .product-card {
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
          }
          .product-card:hover {
            border-color: var(--border-brand) !important;
            box-shadow: var(--shadow-glow-brand);
          }
          .comparison-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: var(--space-4);
          }
          @media (min-width: 640px) {
            .comparison-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          .trust-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: var(--space-4);
          }
          @media (min-width: 768px) {
            .trust-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: var(--space-6);
            }
          }
          .principles-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: var(--space-8);
          }
          @media (min-width: 768px) {
            .principles-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: var(--space-6);
            }
          }
        `}</style>
      </main>
      <Footer />
    </>
  )
}
