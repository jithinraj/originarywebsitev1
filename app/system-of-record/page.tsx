'use client'

import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'
import { ArrowRight, CheckCircle, FileText, Lock, Activity, Shield, Layers, ExternalLink, ChevronDown, Link as LinkIcon } from 'lucide-react'

// Section definitions for TOC
const SECTIONS = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'built-to-interoperate', label: 'Built to interoperate' },
  { id: 'meaning-in-agent-era', label: 'Meaning in the agent era' },
  { id: 'why-interactions-break', label: 'Why interactions break' },
  { id: 'requirements', label: 'Requirements' },
  { id: 'policy-receipts', label: 'Policy + receipts' },
  { id: 'what-receipt-proves', label: 'What a receipt proves' },
  { id: 'end-to-end-flow', label: 'End-to-end flow' },
  { id: 'why-open', label: 'Why open matters' },
  { id: 'what-originary-builds', label: 'What Originary builds' },
  { id: 'who-this-is-for', label: 'Who this is for' },
  { id: 'what-happens-next', label: 'What happens next' },
  { id: 'get-started', label: 'Get started' },
  { id: 'faq', label: 'FAQ' },
]

// FAQ data for schema
const FAQ_DATA = [
  {
    question: 'What is a system of record for AI agents?',
    answer: 'A system of record for AI agents is verifiable evidence of agent interactions: what was requested, what policy applied, what consent preferences were active, what was paid, what was returned, and what attribution obligations were asserted - all without leaking private identity.'
  },
  {
    question: 'How is PEAC different from logs?',
    answer: 'Logs are unilateral and mutable - one party controls them, their schema varies, and their integrity is hard to prove externally. PEAC receipts are portable and cryptographically verifiable evidence that can be checked by third parties independently.'
  },
  {
    question: 'Does PEAC replace payment rails like x402 or Stripe?',
    answer: 'No. PEAC is designed to sit above payment rails and alongside provenance/preference standards. It standardizes the evidence object that can reference x402, L402, Stripe, or any other payment system.'
  },
  {
    question: 'Can I verify PEAC receipts offline?',
    answer: 'Yes. Receipts are signed JWS (Ed25519) and can be verified offline by any party with access to the issuer public keys via JWKS. No vendor API is required for verification.'
  },
  {
    question: 'Is Originary required to use PEAC?',
    answer: 'No. PEAC is an open protocol. Originary stewards the spec and builds tools and services, but any team can implement and verify PEAC receipts independently. The protocol is Apache-2.0 licensed.'
  },
  {
    question: 'How does PEAC relate to robots.txt?',
    answer: 'robots.txt was built for crawling with binary allow/deny. PEAC extends this for the agent economy: instead of just stop/go, it enables "go, under this policy hash, with this entitlement/payment proof."'
  },
  {
    question: 'What overhead does cryptographic receipt signing add?',
    answer: 'Signed receipts add overhead, so the format is designed to be compact and the signing/verifying path implementable at the edge. PEAC supports optional delayed or batched issuance where appropriate while keeping verification deterministic.'
  },
  {
    question: 'How does PEAC work with AIPREF and C2PA?',
    answer: 'PEAC complements these standards. It can snapshot AIPREF preferences into receipts for auditability, and reference C2PA provenance data. PEAC does not compete with these standards - it provides the evidence binding layer.'
  }
]

export default function SystemOfRecordPage() {
  const [activeSection, setActiveSection] = useState('introduction')
  const [isTocOpen, setIsTocOpen] = useState(false)
  const [copiedAnchor, setCopiedAnchor] = useState<string | null>(null)

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = SECTIONS.map(s => ({
        id: s.id,
        el: document.getElementById(s.id)
      })).filter(s => s.el)

      const scrollPosition = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.el && section.el.offsetTop <= scrollPosition) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const copyAnchorLink = (id: string) => {
    const url = `${window.location.origin}/system-of-record#${id}`
    navigator.clipboard.writeText(url)
    setCopiedAnchor(id)
    setTimeout(() => setCopiedAnchor(null), 2000)
  }

  // JSON-LD schemas
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Open System of Record for AI Agents",
    "description": "Policy + receipts as verifiable evidence for agent interactions. PEAC Protocol creates portable, verifiable records of what was accessed, under what terms, and how it was paid.",
    "url": "https://www.originary.xyz/system-of-record",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Originary",
      "url": "https://www.originary.xyz"
    },
    "about": {
      "@type": "Thing",
      "name": "PEAC Protocol",
      "description": "Open protocol for policy, payments, and receipts in the agentic web"
    },
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "PEAC Protocol",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Any"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <NavigationHeader />
      <main id="main-content" role="main" style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section className="section" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-16)', background: 'linear-gradient(180deg, var(--surface-subtle) 0%, var(--surface-elevated) 100%)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  background: 'var(--accent-brand-subtle)',
                  border: '1px solid var(--accent-brand-muted)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--space-2) var(--space-6)',
                  marginBottom: 'var(--space-6)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600,
                  color: 'var(--accent-brand)'
                }}
              >
                SoR for Agents | Originary
              </div>

              <h1
                style={{
                  fontSize: 'clamp(var(--text-3xl), 5vw, var(--text-5xl))',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  marginBottom: 'var(--space-6)',
                  color: 'var(--text-primary)'
                }}
              >
                Open System of Record for AI Agents
              </h1>

              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-8)'
                }}
              >
                Policy + receipts as verifiable evidence for agent interactions.
              </p>

              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/demo" className="btn btn-primary btn-lg" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  View demo
                  <ArrowRight size={18} />
                </Link>
                <Link href="/peac" className="btn btn-secondary btn-lg">
                  Read the spec
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile TOC Accordion */}
        <div className="mobile-toc">
          <button
            type="button"
            onClick={() => setIsTocOpen(!isTocOpen)}
            className="mobile-toc-trigger"
            aria-expanded={isTocOpen}
          >
            <span>On this page</span>
            <ChevronDown size={18} style={{ transform: isTocOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
          </button>
          {isTocOpen && (
            <nav className="mobile-toc-nav" aria-label="Table of contents">
              {SECTIONS.map(section => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setIsTocOpen(false)}
                  className={activeSection === section.id ? 'active' : ''}
                >
                  {section.label}
                </a>
              ))}
            </nav>
          )}
        </div>

        {/* Main Content with Desktop Sidebar TOC */}
        <div className="content-layout">
          {/* Desktop Sticky TOC */}
          <aside className="desktop-toc" aria-label="Table of contents">
            <div className="toc-sticky">
              <h4 className="toc-title">On this page</h4>
              <nav>
                {SECTIONS.map(section => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`toc-link ${activeSection === section.id ? 'active' : ''}`}
                  >
                    {section.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <article className="main-content">
            {/* Introduction */}
            <section id="introduction" className="content-section">
              <SectionHeader id="introduction" title="Introduction" onCopy={copyAnchorLink} copied={copiedAnchor === 'introduction'} />

              <p className="lead">
                AI agents are becoming a new class of &ldquo;user&rdquo; on the internet. They browse, negotiate, pay, retrieve, transform, and act. They do it fast, at scale, and increasingly without a human watching each step.
              </p>

              <p>That is not just a product shift. It is an infrastructure shift.</p>

              <p>In the agent era, the core question stops being &ldquo;Can the agent do the action?&rdquo; and becomes:</p>

              <ul className="question-list">
                <li><strong>Should it have been allowed to do the action?</strong></li>
                <li><strong>Under what terms did it do the action?</strong></li>
                <li><strong>Who (or what) authorized it?</strong></li>
                <li><strong>Was it paid for?</strong></li>
                <li><strong>Can we prove it later without trusting a single vendor?</strong></li>
              </ul>

              <p>
                If we cannot answer those questions with durable evidence, the agent web either centralizes behind gatekeepers or collapses into disputes, fraud, and regulatory dead-ends.
              </p>

              <p className="callout">
                What we need is an <strong>open system of record</strong> for agent interactions. Originary exists to build and steward that layer.
              </p>
            </section>

            {/* Built to interoperate - Edit A */}
            <section id="built-to-interoperate" className="content-section">
              <SectionHeader id="built-to-interoperate" title="Built to interoperate" onCopy={copyAnchorLink} copied={copiedAnchor === 'built-to-interoperate'} />

              <p>
                PEAC Protocol (Programmable Environment for Agent Coordination) is designed to sit above payment rails and alongside provenance and preference standards. It does not compete with x402/L402 or any single vendor&apos;s stack; it standardizes the evidence object that can reference those systems.
              </p>

              <p>
                PEAC complements payment rails like HTTP 402 patterns and x402/L402, and works alongside standards like C2PA for provenance and AIPREF for AI preferences. The protocol provides the binding layer that creates verifiable proof across these systems.
              </p>
            </section>

            {/* System of record changes meaning */}
            <section id="meaning-in-agent-era" className="content-section">
              <SectionHeader id="meaning-in-agent-era" title="&ldquo;System of record&rdquo; changes meaning in the agent era" onCopy={copyAnchorLink} copied={copiedAnchor === 'meaning-in-agent-era'} />

              <p>
                In classic enterprise software, a system of record is where &ldquo;truth&rdquo; lives: customer data, transactions, inventories, ledgers.
              </p>

              <p>In the agent era, the unit of truth is different.</p>

              <p>
                It is not &ldquo;a row in a database.&rdquo; It is <strong>a verifiable interaction</strong>:
              </p>

              <ul>
                <li>what was requested</li>
                <li>what policy applied</li>
                <li>what consent preferences were active</li>
                <li>what was paid (if anything), via which rail</li>
                <li>what was returned</li>
                <li>what attribution/provenance obligations were asserted</li>
                <li>what identities were involved (without leaking private identity)</li>
              </ul>

              <p>
                This is a system of record for <strong>decisions and actions</strong>, not just data.
              </p>

              <p>And it must be interoperable across:</p>

              <ul>
                <li>different agent frameworks</li>
                <li>different payment rails (HTTP 402, x402/L402, Stripe-like flows, etc.)</li>
                <li>different network surfaces (origin, CDN, gateway, edge workers)</li>
                <li>different storage backends (centralized logs, SIEMs, data lakes, internal ledgers)</li>
              </ul>

              <p className="emphasis">
                If it only works in one vendor&apos;s stack, it is not a system of record. It is a product feature.
              </p>
            </section>

            {/* Why agent interactions break today */}
            <section id="why-interactions-break" className="content-section">
              <SectionHeader id="why-interactions-break" title="Why agent interactions break today" onCopy={copyAnchorLink} copied={copiedAnchor === 'why-interactions-break'} />

              <p>
                The current internet was not designed for autonomous clients operating at machine speed. We built strong primitives for transport (HTTP), identity (TLS), and content addressing (URLs). But agent interactions introduce missing primitives:
              </p>

              {/* Edit B - robots.txt comparison */}
              <div className="problem-card">
                <h4>1. Policy is not machine-enforceable by default</h4>
                <p>
                  <code>robots.txt</code> was built for crawling. It is a binary allow/deny mechanism, not an economic and consent policy layer. Agents need &ldquo;allow, but under these terms.&rdquo;
                </p>
                <p className="problem-note">
                  Robots.txt says &ldquo;stop/go.&rdquo; A system of record needs &ldquo;go, under this policy hash, with this entitlement/payment proof.&rdquo;
                </p>
              </div>

              <div className="problem-card">
                <h4>2. Payment evidence is not naturally tied to access</h4>
                <p>
                  Even when something is paid for, the proof is often separated from the request and the response. That separation creates disputes.
                </p>
              </div>

              {/* Edit C - Logs rewrite */}
              <div className="problem-card">
                <h4>3. Audit trails are internal and non-portable</h4>
                <p>
                  Logs help internally, but they are unilateral evidence: one party controls them, their schema varies, and their integrity is hard to prove externally. Receipts create portable, cryptographically verifiable evidence that can be checked by third parties.
                </p>
              </div>

              <div className="problem-card">
                <h4>4. Consent and preferences are not snapshotted</h4>
                <p>
                  Agents act under user and enterprise constraints (privacy, retention, purpose limitations, jurisdictional requirements). Without a snapshot, you cannot prove what was agreed to at the time of access.
                </p>
              </div>

              <div className="problem-card">
                <h4>5. Provenance and attribution are ad hoc</h4>
                <p>
                  Even when everyone wants &ldquo;responsible AI,&rdquo; the web lacks standard evidence objects linking content access to downstream usage and attribution.
                </p>
              </div>

              <p className="summary">
                In short: agents are arriving with no shared proof layer.
              </p>
            </section>

            {/* Requirements */}
            <section id="requirements" className="content-section">
              <SectionHeader id="requirements" title="The requirements for a real system of record" onCopy={copyAnchorLink} copied={copiedAnchor === 'requirements'} />

              <p>
                A credible system of record for AI agents must meet requirements that are easy to say and hard to ship.
              </p>

              <div className="requirements-grid">
                <div className="requirement-card">
                  <h4>It must be open</h4>
                  <p>
                    If one company controls the format or the verifier, the market will fragment and the incentives will bend toward lock-in. Openness is what lets receipts remain meaningful across vendors.
                  </p>
                </div>

                <div className="requirement-card">
                  <h4>It must be verifiable</h4>
                  <p>
                    Evidence cannot rely on &ldquo;trust us.&rdquo; It has to be cryptographically verifiable later, by third parties, without shared secrets.
                  </p>
                </div>

                <div className="requirement-card">
                  <h4>It must be privacy-preserving</h4>
                  <p>
                    A system of record cannot become a surveillance layer. It should support selective disclosure and avoid embedding PII in proofs by default.
                  </p>
                </div>

                <div className="requirement-card">
                  <h4>It must be neutral across rails and stacks</h4>
                  <p>
                    Agents will pay with different mechanisms. Providers will enforce at different layers. A system of record should unify evidence across these realities.
                  </p>
                </div>

                {/* Edit D - Performance acknowledgment */}
                <div className="requirement-card">
                  <h4>It must be cheap enough to be default</h4>
                  <p>
                    If proof adds massive latency or cost, it will only be used in high-stakes flows. The winning layer is the one that becomes routine.
                  </p>
                  <p className="requirement-note">
                    Signed receipts add overhead, so the format must be compact and the signing/verifying path must be implementable at the edge. PEAC is designed so implementations can optimize issuance (including optional delayed or batched issuance where appropriate) while keeping verification deterministic.
                  </p>
                </div>
              </div>
            </section>

            {/* The model: policy + receipts */}
            <section id="policy-receipts" className="content-section">
              <SectionHeader id="policy-receipts" title="The model: policy + receipts" onCopy={copyAnchorLink} copied={copiedAnchor === 'policy-receipts'} />

              <p>
                The simplest way to make the web auditable is to standardize two things:
              </p>

              <ol className="model-list">
                <li><strong>A discoverable policy file</strong> that tells agents what is allowed and under what terms.</li>
                <li><strong>A signed receipt</strong> returned with responses that proves what happened.</li>
              </ol>

              <p>
                That is the heart of the <strong>PEAC Protocol (Programmable Environment for Agent Coordination)</strong>, stewarded by Originary.
              </p>

              <div className="two-col">
                <div className="model-block">
                  <h4><FileText size={20} /> Policy: <code>peac.txt</code></h4>
                  <p>
                    A site or API publishes a machine-readable policy at a well-known path (commonly <code>/.well-known/peac.txt</code>). The policy can express:
                  </p>
                  <ul>
                    <li>access rules</li>
                    <li>pricing and entitlements</li>
                    <li>rate limits</li>
                    <li>consent requirements</li>
                    <li>attribution/provenance expectations</li>
                    <li>negotiation or enterprise overrides</li>
                  </ul>
                  <p>This shifts &ldquo;terms&rdquo; from PDFs into a format that agents can actually follow.</p>

                  {/* Code snippet */}
                  <div className="code-block">
                    <div className="code-header">
                      <span>peac.txt</span>
                    </div>
                    <pre><code>{`preferences: /.well-known/aipref.json
access_control: http-402
payments: [x402, stripe]
receipts: required
verify: /.well-known/jwks.json`}</code></pre>
                  </div>
                </div>

                <div className="model-block">
                  <h4><Shield size={20} /> Receipts: <code>PEAC-Receipt</code></h4>
                  <p>
                    When an agent makes a request, the server can return a receipt (typically via a header such as <code>PEAC-Receipt</code>) that contains a signed evidence object.
                  </p>
                  <p>At minimum, a receipt is:</p>
                  <ul>
                    <li>tied to the request and response</li>
                    <li>bound to the effective policy (usually via a policy hash)</li>
                    <li>signed by the issuer so it can be verified later</li>
                  </ul>
                  <p>
                    Think of it as the missing primitive for the agent web: a portable, verifiable &ldquo;event record&rdquo; for access.
                  </p>

                  {/* Code snippet */}
                  <div className="code-block">
                    <div className="code-header">
                      <span>Response Header</span>
                    </div>
                    <pre><code>{`HTTP/1.1 200 OK
PEAC-Receipt: eyJhbGciOiJFZERTQSIsInR5cCI6...
Content-Type: application/json`}</code></pre>
                  </div>
                </div>
              </div>
            </section>

            {/* What does a receipt prove */}
            <section id="what-receipt-proves" className="content-section">
              <SectionHeader id="what-receipt-proves" title="What does a receipt actually prove?" onCopy={copyAnchorLink} copied={copiedAnchor === 'what-receipt-proves'} />

              <p>
                A well-designed receipt should let a verifier prove statements like:
              </p>

              <ul className="proof-list">
                <li><CheckCircle size={16} /> This response was issued by this service at this time.</li>
                <li><CheckCircle size={16} /> This request matched policy version X (or policy hash X).</li>
                <li><CheckCircle size={16} /> This access was allowed under the declared terms.</li>
                <li><CheckCircle size={16} /> If payment was required, payment evidence exists and is referenced.</li>
                <li><CheckCircle size={16} /> The response returned was associated with those terms.</li>
                <li><CheckCircle size={16} /> Optional: an attribution/provenance pointer was asserted.</li>
              </ul>

              <p>
                It does <strong>not</strong> need to reveal user identity. It can prove correctness without becoming a tracking vector.
              </p>

              <p className="emphasis">
                This matters because the future is not &ldquo;agents doing things,&rdquo; it is &ldquo;agents doing things <strong>and everyone being able to prove what happened</strong>.&rdquo;
              </p>

              <p>That is what makes commerce, compliance, and trust possible at scale.</p>
            </section>

            {/* End-to-end flow with SVG diagram */}
            <section id="end-to-end-flow" className="content-section">
              <SectionHeader id="end-to-end-flow" title="A simple end-to-end flow" onCopy={copyAnchorLink} copied={copiedAnchor === 'end-to-end-flow'} />

              <p>
                Here is the basic lifecycle that an open system of record enables:
              </p>

              {/* Static SVG Flow Diagram */}
              <div className="flow-diagram">
                <svg viewBox="0 0 800 140" className="flow-svg" aria-label="PEAC transaction flow diagram">
                  <defs>
                    <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#635bff" />
                      <stop offset="100%" stopColor="#00d4aa" />
                    </linearGradient>
                  </defs>

                  {/* Flow line */}
                  <line x1="70" y1="70" x2="730" y2="70" stroke="url(#flowGradient)" strokeWidth="2" strokeDasharray="4 2" />

                  {/* Step 1 */}
                  <circle cx="70" cy="70" r="24" fill="#635bff" />
                  <text x="70" y="75" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">1</text>
                  <text x="70" y="110" textAnchor="middle" fill="#525252" fontSize="11">Request</text>

                  {/* Step 2 */}
                  <circle cx="180" cy="70" r="24" fill="#635bff" />
                  <text x="180" y="75" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">2</text>
                  <text x="180" y="110" textAnchor="middle" fill="#525252" fontSize="11">Policy</text>

                  {/* Step 3 */}
                  <circle cx="290" cy="70" r="24" fill="#635bff" />
                  <text x="290" y="75" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">3</text>
                  <text x="290" y="110" textAnchor="middle" fill="#525252" fontSize="11">Challenge</text>

                  {/* Step 4 */}
                  <circle cx="400" cy="70" r="24" fill="#635bff" />
                  <text x="400" y="75" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">4</text>
                  <text x="400" y="110" textAnchor="middle" fill="#525252" fontSize="11">Satisfy</text>

                  {/* Step 5 */}
                  <circle cx="510" cy="70" r="24" fill="#635bff" />
                  <text x="510" y="75" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">5</text>
                  <text x="510" y="110" textAnchor="middle" fill="#525252" fontSize="11">Response</text>

                  {/* Step 6 */}
                  <circle cx="620" cy="70" r="24" fill="#00d4aa" />
                  <text x="620" y="75" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">6</text>
                  <text x="620" y="110" textAnchor="middle" fill="#525252" fontSize="11">Receipt</text>

                  {/* Step 7 - Verify */}
                  <circle cx="730" cy="70" r="24" fill="#00d4aa" />
                  <text x="730" y="75" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">✓</text>
                  <text x="730" y="110" textAnchor="middle" fill="#525252" fontSize="11">Verify</text>
                </svg>
              </div>

              <ol className="flow-steps">
                <li><strong>Agent requests a resource.</strong></li>
                <li><strong>Server resolves <code>peac.txt</code></strong> and determines the effective terms.</li>
                <li><strong>If payment/authorization is required,</strong> the server challenges (often via HTTP 402 patterns).</li>
                <li><strong>Agent satisfies the requirement.</strong></li>
                <li><strong>Server returns the response</strong> plus a cryptographic receipt.</li>
                <li><strong>Any verifier</strong> (enterprise, auditor, marketplace, dispute resolver, internal compliance team) can validate the receipt later.</li>
              </ol>

              <p className="emphasis">
                The important shift is step (5): proof is emitted <strong>at the time of interaction</strong>, not reconstructed later from logs.
              </p>
            </section>

            {/* Why "open" is non-negotiable */}
            <section id="why-open" className="content-section">
              <SectionHeader id="why-open" title="Why &ldquo;open&rdquo; is non-negotiable" onCopy={copyAnchorLink} copied={copiedAnchor === 'why-open'} />

              <p>
                Closed systems of record exist today: proprietary logs, proprietary billing dashboards, proprietary bot management platforms.
              </p>

              <p>They work until they don&apos;t.</p>

              <p>In the agent era, three things make openness mandatory:</p>

              <div className="open-reasons">
                <div className="reason-card">
                  <h4>Portability</h4>
                  <p>
                    Evidence must survive vendor changes. If a company switches CDNs, gateways, agent frameworks, or payment rails, the proofs must remain meaningful.
                  </p>
                </div>

                <div className="reason-card">
                  <h4>Multiparty verification</h4>
                  <p>
                    A single vendor cannot be the only verifier when disputes involve multiple parties. Systems of record are valuable precisely because verification is independent.
                  </p>
                </div>

                <div className="reason-card">
                  <h4>Ecosystem scale</h4>
                  <p>
                    Agents will interact with millions of endpoints. The only way this scales is with shared formats and shared verification rules.
                  </p>
                </div>
              </div>

              <p className="callout">
                If the record layer is proprietary, the internet fragments into walled gardens. That is not the future we want, and it is not the future that wins long-term.
              </p>
            </section>

            {/* What Originary is building */}
            <section id="what-originary-builds" className="content-section">
              <SectionHeader id="what-originary-builds" title="What Originary is building" onCopy={copyAnchorLink} copied={copiedAnchor === 'what-originary-builds'} />

              {/* Edit E - Protocol vs company separation */}
              <p className="protocol-callout">
                <strong>PEAC is an open protocol.</strong> Originary stewards the spec and builds tools and services, but any team can implement and verify PEAC receipts independently.
              </p>

              <p>
                Originary builds and stewards the open standard layer, and also ships production-grade tooling so teams can adopt it without reinventing crypto and policy enforcement.
              </p>

              <div className="build-grid">
                <div className="build-card">
                  <div className="build-icon">
                    <FileText size={24} />
                  </div>
                  <h4>1. PEAC Protocol: the open spec</h4>
                  <ul>
                    <li>policy discovery conventions</li>
                    <li>policy hashing and determinism</li>
                    <li>receipt formats and signing rules</li>
                    <li>verification rules</li>
                    <li>integration profiles across rails and transports</li>
                  </ul>
                </div>

                <div className="build-card">
                  <div className="build-icon">
                    <Layers size={24} />
                  </div>
                  <h4>2. Developer tooling</h4>
                  <ul>
                    <li>SDKs to issue and verify receipts</li>
                    <li>middleware for APIs and gateways</li>
                    <li>adapters for edge environments</li>
                    <li>conformance tooling for interoperability</li>
                  </ul>
                </div>

                <div className="build-card">
                  <div className="build-icon">
                    <Activity size={24} />
                  </div>
                  <h4>3. Verification and record services (optional)</h4>
                  <p>
                    Open protocols win when they are easy to adopt. Not everyone wants to run verifiers, key infrastructure, and receipt storage on day one.
                  </p>
                  <ul>
                    <li>receipt verification endpoints</li>
                    <li>receipt storage and export</li>
                    <li>audit-ready evidence bundles for enterprise workflows</li>
                  </ul>
                </div>
              </div>

              <p className="emphasis">
                The protocol stays open. Teams choose whether they want to self-host, use Originary, or use any other provider.
              </p>

              <p>That is what &ldquo;open system of record&rdquo; means in practice.</p>
            </section>

            {/* Who this is for */}
            <section id="who-this-is-for" className="content-section">
              <SectionHeader id="who-this-is-for" title="Who this is for" onCopy={copyAnchorLink} copied={copiedAnchor === 'who-this-is-for'} />

              <p>
                This layer is not just for &ldquo;AI companies.&rdquo; It is for anyone who will be interacted with by agents.
              </p>

              <div className="audience-grid">
                <div className="audience-card">
                  <h4>Publishers and content platforms</h4>
                  <ul>
                    <li>prove what was accessed and under what terms</li>
                    <li>support paid access without losing portability</li>
                    <li>enforce attribution/provenance expectations</li>
                  </ul>
                </div>

                <div className="audience-card">
                  <h4>API providers and SaaS platforms</h4>
                  <ul>
                    <li>make agent access auditable</li>
                    <li>bind entitlements and payment to responses</li>
                    <li>reduce disputes and fraud</li>
                  </ul>
                </div>

                <div className="audience-card">
                  <h4>Enterprises deploying agents</h4>
                  <ul>
                    <li>enforce preference and compliance constraints</li>
                    <li>audit agent actions across vendors</li>
                    <li>produce evidence without relying on internal logs alone</li>
                  </ul>
                </div>

                <div className="audience-card">
                  <h4>CDNs and edge networks</h4>
                  <ul>
                    <li>emit verifiable receipts at the enforcement layer</li>
                    <li>standardize proofs across customer sites and services</li>
                  </ul>
                </div>
              </div>

              <p className="callout">
                If you are building for the agent economy, you will need a proof layer. The question is whether it is proprietary and fragile, or open and durable.
              </p>
            </section>

            {/* What we believe will happen next */}
            <section id="what-happens-next" className="content-section">
              <SectionHeader id="what-happens-next" title="What we believe will happen next" onCopy={copyAnchorLink} copied={copiedAnchor === 'what-happens-next'} />

              <p>The agent era will force a new baseline:</p>

              {/* Edit G - Softer TLS claim */}
              <ul className="future-list">
                <li><strong>Receipts can become a default expectation</strong> for high-trust agent interactions, similar to how TLS became baseline for secure transport.</li>
                <li><strong>Policy will be machine-readable</strong>, not buried in documents.</li>
                <li><strong>Verification will be a standard enterprise requirement</strong>, not a niche security feature.</li>
                <li><strong>Disputes will be resolved with evidence objects</strong>, not screenshots and vendor dashboards.</li>
              </ul>

              <p className="emphasis">
                The system of record for AI agents will not be the company with the most traffic. It will be the layer that makes interactions <em>provable</em> across everyone&apos;s traffic.
              </p>

              <p>That is the layer Originary is building.</p>
            </section>

            {/* Get started */}
            <section id="get-started" className="content-section">
              <SectionHeader id="get-started" title="Get started" onCopy={copyAnchorLink} copied={copiedAnchor === 'get-started'} />

              <p>
                If you operate an endpoint that agents will touch, you can begin now:
              </p>

              <ol className="start-steps">
                <li>
                  <strong>Publish a policy file</strong> (<code>peac.txt</code>) that expresses access terms in a machine-readable way.
                </li>
                <li>
                  <strong>Start returning signed receipts</strong> (<code>PEAC-Receipt</code>) for agent interactions.
                </li>
                <li>
                  <strong>Verify receipts inside your own systems</strong>, and export them to the places you already trust (SIEM, warehouse, compliance pipelines).
                </li>
              </ol>

              <p>
                Originary can help you adopt the open standard quickly, whether you self-host or use managed verification.
              </p>

              <p className="final-statement">
                The agent web is arriving. We should build it so it can be trusted.
              </p>

              <p className="cta-statement">
                <strong>Originary is building the open system of record for AI agents.</strong>
              </p>

              <div className="cta-buttons">
                <Link href="/demo" className="btn btn-primary btn-lg">
                  View demo
                  <ArrowRight size={18} />
                </Link>
                <Link href="/developers" className="btn btn-secondary btn-lg">
                  Developer docs
                </Link>
                <Link href="/peac" className="btn btn-ghost btn-lg">
                  Read the spec
                </Link>
                <Link href="/contact" className="btn btn-ghost btn-lg">
                  Contact us
                </Link>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section">
              <SectionHeader id="faq" title="Frequently asked questions" onCopy={copyAnchorLink} copied={copiedAnchor === 'faq'} />

              <div className="faq-list">
                {FAQ_DATA.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <h4>{faq.question}</h4>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </article>
        </div>
      </main>
      <Footer />

      <style jsx>{`
        .content-layout {
          display: flex;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 clamp(var(--space-4), 4vw, var(--space-6));
          gap: var(--space-12);
        }

        /* Desktop TOC */
        .desktop-toc {
          display: none;
          width: 240px;
          flex-shrink: 0;
        }

        @media (min-width: 1100px) {
          .desktop-toc {
            display: block;
          }
        }

        .toc-sticky {
          position: sticky;
          top: 100px;
          padding: var(--space-6) 0;
          max-height: calc(100vh - 120px);
          overflow-y: auto;
        }

        .toc-title {
          font-size: var(--text-xs);
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: var(--space-4);
        }

        .toc-link {
          display: block;
          padding: var(--space-2) 0;
          font-size: var(--text-sm);
          color: var(--text-tertiary);
          text-decoration: none;
          border-left: 2px solid transparent;
          padding-left: var(--space-3);
          margin-left: -2px;
          transition: all 0.15s ease;
        }

        .toc-link:hover {
          color: var(--text-secondary);
        }

        .toc-link:focus {
          outline: 2px solid var(--accent-brand);
          outline-offset: 2px;
          border-radius: var(--radius-sm);
        }

        .toc-link.active {
          color: var(--accent-brand);
          border-left-color: var(--accent-brand);
          font-weight: 500;
        }

        /* Mobile TOC */
        .mobile-toc {
          display: block;
          padding: 0 clamp(var(--space-4), 4vw, var(--space-6));
          margin-bottom: var(--space-6);
        }

        @media (min-width: 1100px) {
          .mobile-toc {
            display: none;
          }
        }

        .mobile-toc-trigger {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: var(--space-4);
          background: var(--surface-subtle);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-lg);
          font-size: var(--text-sm);
          font-weight: 500;
          color: var(--text-secondary);
          cursor: pointer;
          min-height: 48px; /* Touch target */
          transition: background 0.15s ease;
        }

        .mobile-toc-trigger:hover {
          background: var(--surface-card);
        }

        .mobile-toc-trigger:focus {
          outline: 2px solid var(--accent-brand);
          outline-offset: 2px;
        }

        .mobile-toc-nav {
          display: flex;
          flex-direction: column;
          padding: var(--space-3);
          background: var(--surface-subtle);
          border: 1px solid var(--border-default);
          border-top: none;
          border-radius: 0 0 var(--radius-lg) var(--radius-lg);
          max-height: 60vh;
          overflow-y: auto;
        }

        .mobile-toc-nav a {
          padding: var(--space-3) var(--space-3);
          font-size: var(--text-sm);
          color: var(--text-secondary);
          text-decoration: none;
          border-radius: var(--radius-md);
          min-height: 44px; /* Touch target */
          display: flex;
          align-items: center;
        }

        .mobile-toc-nav a:hover,
        .mobile-toc-nav a.active {
          background: var(--surface-elevated);
          color: var(--accent-brand);
        }

        .mobile-toc-nav a:focus {
          outline: 2px solid var(--accent-brand);
          outline-offset: -2px;
        }

        /* Main content */
        .main-content {
          flex: 1;
          min-width: 0;
          max-width: 800px;
          padding-bottom: var(--space-24);
        }

        .content-section {
          padding: clamp(var(--space-8), 5vw, var(--space-12)) 0;
          border-bottom: 1px solid var(--border-subtle);
          scroll-margin-top: 100px; /* For anchor links */
        }

        .content-section:last-child {
          border-bottom: none;
        }

        /* Typography - Fluid scaling */
        .lead {
          font-size: clamp(1.125rem, 2.5vw, 1.25rem);
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: var(--space-6);
        }

        .main-content p {
          font-size: clamp(0.9375rem, 2vw, 1rem);
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: var(--space-4);
        }

        .main-content ul,
        .main-content ol {
          margin-bottom: var(--space-4);
          padding-left: clamp(var(--space-4), 4vw, var(--space-6));
        }

        .main-content li {
          font-size: clamp(0.9375rem, 2vw, 1rem);
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: var(--space-2);
        }

        .main-content code {
          background: var(--surface-card);
          padding: 2px 6px;
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.875em;
          word-break: break-word;
        }

        .emphasis {
          font-size: clamp(1rem, 2.5vw, 1.125rem);
          color: var(--text-secondary);
          font-weight: 500;
        }

        .callout {
          padding: clamp(var(--space-4), 4vw, var(--space-6));
          background: linear-gradient(135deg, var(--accent-brand-subtle) 0%, var(--accent-secondary-faint) 100%);
          border: 1px solid var(--accent-brand-muted);
          border-radius: var(--radius-xl);
          font-size: clamp(1rem, 2.5vw, 1.125rem);
          color: var(--text-secondary);
        }

        .protocol-callout {
          padding: var(--space-4) clamp(var(--space-4), 4vw, var(--space-6));
          background: var(--accent-secondary-subtle);
          border: 1px solid var(--accent-secondary-muted);
          border-radius: var(--radius-lg);
          font-size: clamp(0.9375rem, 2vw, 1rem);
          color: var(--text-secondary);
          margin-bottom: var(--space-6);
        }

        .summary {
          font-size: clamp(1rem, 2.5vw, 1.125rem);
          font-weight: 600;
          color: var(--text-primary);
        }

        .final-statement {
          font-size: clamp(1.125rem, 3vw, 1.25rem);
          font-weight: 500;
          color: var(--text-secondary);
        }

        .cta-statement {
          font-size: clamp(1.25rem, 4vw, 1.5rem);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--space-8);
        }

        /* Question list */
        .question-list {
          list-style: none;
          padding: 0;
          margin: var(--space-6) 0;
        }

        .question-list li {
          padding: var(--space-3) clamp(var(--space-3), 3vw, var(--space-4));
          background: var(--surface-subtle);
          border-left: 3px solid var(--accent-brand);
          margin-bottom: var(--space-2);
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
        }

        /* Problem cards */
        .problem-card {
          padding: clamp(var(--space-4), 4vw, var(--space-6));
          background: var(--surface-elevated);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-xl);
          margin-bottom: var(--space-4);
        }

        .problem-card h4 {
          font-size: clamp(1rem, 2.5vw, 1.125rem);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--space-3);
        }

        .problem-card p {
          margin-bottom: var(--space-2);
        }

        .problem-card p:last-child {
          margin-bottom: 0;
        }

        .problem-note {
          font-size: var(--text-sm);
          color: var(--accent-brand);
          font-style: italic;
          padding-top: var(--space-2);
          border-top: 1px solid var(--border-subtle);
          margin-top: var(--space-3);
        }

        /* Requirements grid */
        .requirements-grid {
          display: grid;
          gap: var(--space-4);
        }

        .requirement-card {
          padding: clamp(var(--space-4), 4vw, var(--space-6));
          background: var(--surface-subtle);
          border-radius: var(--radius-xl);
        }

        .requirement-card h4 {
          font-size: clamp(1rem, 2.5vw, 1.125rem);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--space-3);
        }

        .requirement-note {
          font-size: var(--text-sm);
          color: var(--text-tertiary);
          font-style: italic;
          margin-top: var(--space-2);
        }

        /* Model list */
        .model-list {
          margin: var(--space-6) 0;
        }

        .model-list li {
          font-size: clamp(1rem, 2.5vw, 1.125rem);
          margin-bottom: var(--space-3);
        }

        /* Two column layout */
        .two-col {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-6);
          margin: var(--space-8) 0;
        }

        @media (min-width: 768px) {
          .two-col {
            grid-template-columns: 1fr 1fr;
          }
        }

        .model-block {
          padding: clamp(var(--space-4), 4vw, var(--space-6));
          background: var(--surface-elevated);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-xl);
        }

        .model-block h4 {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: clamp(1rem, 2.5vw, 1.125rem);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--space-4);
          flex-wrap: wrap;
        }

        .model-block h4 :global(svg) {
          color: var(--accent-brand);
          flex-shrink: 0;
        }

        /* Code block */
        .code-block {
          background: #0d0d0d;
          border-radius: var(--radius-lg);
          overflow: hidden;
          margin-top: var(--space-4);
        }

        .code-header {
          padding: var(--space-2) var(--space-4);
          background: rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          font-size: var(--text-xs);
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .code-block pre {
          padding: clamp(var(--space-3), 3vw, var(--space-4));
          margin: 0;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .code-block code {
          font-family: var(--font-mono);
          font-size: clamp(10px, 2vw, 12px);
          line-height: 1.5;
          color: #e4e4e7;
          background: transparent;
          padding: 0;
        }

        /* Proof list */
        .proof-list {
          list-style: none;
          padding: 0;
        }

        .proof-list li {
          display: flex;
          align-items: flex-start;
          gap: var(--space-3);
          padding: var(--space-3) 0;
          border-bottom: 1px solid var(--border-subtle);
        }

        .proof-list li:last-child {
          border-bottom: none;
        }

        .proof-list :global(svg) {
          color: var(--accent-secondary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Flow diagram - Responsive */
        .flow-diagram {
          padding: clamp(var(--space-4), 4vw, var(--space-8)) clamp(var(--space-2), 2vw, var(--space-4));
          background: var(--surface-subtle);
          border-radius: var(--radius-xl);
          margin: var(--space-8) 0;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .flow-svg {
          width: 100%;
          min-width: 500px;
          height: auto;
          display: block;
        }

        @media (max-width: 480px) {
          .flow-svg {
            min-width: 450px;
          }
        }

        .flow-steps {
          margin-top: var(--space-6);
        }

        .flow-steps li {
          padding: var(--space-2) 0;
        }

        /* Open reasons - Responsive grid */
        .open-reasons {
          display: grid;
          gap: var(--space-4);
          margin: var(--space-8) 0;
        }

        @media (min-width: 640px) {
          .open-reasons {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .reason-card {
          padding: clamp(var(--space-4), 4vw, var(--space-6));
          background: var(--surface-elevated);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-xl);
        }

        .reason-card h4 {
          font-size: clamp(1rem, 2.5vw, 1.125rem);
          font-weight: 600;
          color: var(--accent-brand);
          margin-bottom: var(--space-2);
        }

        /* Build grid */
        .build-grid {
          display: grid;
          gap: var(--space-6);
          margin: var(--space-8) 0;
        }

        @media (min-width: 768px) {
          .build-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .build-card {
          padding: clamp(var(--space-4), 4vw, var(--space-6));
          background: var(--surface-subtle);
          border-radius: var(--radius-xl);
        }

        .build-icon {
          width: clamp(40px, 8vw, 48px);
          height: clamp(40px, 8vw, 48px);
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-brand-subtle);
          border-radius: var(--radius-lg);
          margin-bottom: var(--space-4);
          color: var(--accent-brand);
        }

        .build-card h4 {
          font-size: clamp(1rem, 2.5vw, 1.125rem);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--space-3);
        }

        .build-card ul {
          margin-bottom: 0;
        }

        /* Audience grid - Responsive */
        .audience-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-4);
          margin: var(--space-8) 0;
        }

        @media (min-width: 480px) {
          .audience-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 768px) {
          .audience-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .audience-card {
          padding: clamp(var(--space-4), 4vw, var(--space-6));
          background: var(--surface-elevated);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-xl);
        }

        .audience-card h4 {
          font-size: clamp(0.9375rem, 2vw, 1rem);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--space-3);
        }

        .audience-card ul {
          margin-bottom: 0;
        }

        .audience-card li {
          font-size: var(--text-sm);
        }

        /* Future list */
        .future-list {
          list-style: none;
          padding: 0;
          margin: var(--space-6) 0;
        }

        .future-list li {
          padding: clamp(var(--space-3), 3vw, var(--space-4));
          background: var(--surface-subtle);
          border-radius: var(--radius-lg);
          margin-bottom: var(--space-3);
        }

        /* Start steps */
        .start-steps li {
          padding: clamp(var(--space-3), 3vw, var(--space-4));
          margin-bottom: var(--space-3);
          background: var(--surface-subtle);
          border-radius: var(--radius-lg);
        }

        /* CTA buttons - Responsive */
        .cta-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-3);
          margin-top: var(--space-8);
        }

        .cta-buttons .btn {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          min-height: 48px; /* Touch target */
        }

        @media (max-width: 480px) {
          .cta-buttons {
            flex-direction: column;
          }
          .cta-buttons .btn {
            width: 100%;
            justify-content: center;
          }
        }

        /* FAQ - Responsive */
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .faq-item {
          padding: clamp(var(--space-4), 4vw, var(--space-6));
          background: var(--surface-subtle);
          border-radius: var(--radius-xl);
        }

        .faq-item h4 {
          font-size: clamp(0.9375rem, 2vw, 1rem);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--space-3);
        }

        .faq-item p {
          font-size: var(--text-sm);
          margin-bottom: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .toc-link,
          .mobile-toc-trigger,
          .mobile-toc-nav a {
            transition: none;
          }
        }

        @media (prefers-contrast: high) {
          .callout,
          .protocol-callout,
          .problem-card,
          .requirement-card,
          .model-block,
          .reason-card,
          .build-card,
          .audience-card,
          .faq-item {
            border-width: 2px;
          }

          .toc-link.active {
            border-left-width: 3px;
          }
        }

        @media print {
          .desktop-toc,
          .mobile-toc,
          .cta-buttons {
            display: none !important;
          }

          .content-section {
            page-break-inside: avoid;
          }

          .main-content {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  )
}

// Section header component with anchor link
function SectionHeader({ id, title, onCopy, copied }: { id: string; title: string; onCopy: (id: string) => void; copied: boolean }) {
  return (
    <div className="section-header-wrapper">
      <h2 id={id} dangerouslySetInnerHTML={{ __html: title }} />
      <button
        type="button"
        onClick={() => onCopy(id)}
        className="anchor-btn"
        aria-label={copied ? 'Link copied' : 'Copy link to section'}
        title={copied ? 'Copied!' : 'Copy link'}
      >
        {copied ? <CheckCircle size={16} /> : <LinkIcon size={16} />}
      </button>
      <style jsx>{`
        .section-header-wrapper {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          margin-bottom: var(--space-6);
        }

        h2 {
          font-size: clamp(var(--text-2xl), 4vw, var(--text-3xl));
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }

        .anchor-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: var(--surface-card);
          border: none;
          border-radius: var(--radius-md);
          color: var(--text-muted);
          cursor: pointer;
          opacity: 0;
          transition: all 0.15s ease;
        }

        .section-header-wrapper:hover .anchor-btn {
          opacity: 1;
        }

        .anchor-btn:hover {
          background: var(--surface-subtle);
          color: var(--text-secondary);
        }

        .anchor-btn:focus {
          opacity: 1;
          outline: 2px solid var(--accent-brand);
          outline-offset: 2px;
        }
      `}</style>
    </div>
  )
}
