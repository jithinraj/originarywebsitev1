'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { copyToClipboard } from '@/lib/clipboard'
import {
  ChevronDown,
  ChevronUp,
  Link as LinkIcon,
  FileText,
  Shield,
  Zap,
  Globe,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  GitBranch,
  Database,
  Lock,
  Layers,
  Target,
  Network
} from 'lucide-react'

const sections = [
  { id: 'decision-traces', title: 'Decision Traces' },
  { id: 'why-systems-fall-short', title: 'Why Systems Fall Short' },
  { id: 'what-is-context-graph', title: 'What is a Context Graph' },
  { id: 'two-systems', title: 'Two Systems of Record' },
  { id: 'market-signals', title: 'Market Signals' },
  { id: 'built-to-interoperate', title: 'Built to Interoperate' },
  { id: 'requirements', title: 'Requirements' },
  { id: 'peac-and-originary', title: 'PEAC and Originary' },
  { id: 'improvements', title: 'What to Add' },
  { id: 'competitive-landscape', title: 'Competitive Landscape' },
  { id: 'gtm', title: 'Go-to-Market' },
  { id: 'productize', title: 'What to Productize' },
  { id: 'faq', title: 'FAQ' }
]

export default function ContextGraphsPage() {
  const [activeSection, setActiveSection] = useState('')
  const [isTocOpen, setIsTocOpen] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  useEffect(() => {
    // Guard against SSR and browsers without IntersectionObserver
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -66%' }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleCopyLink = async (id: string) => {
    // Guard against SSR
    if (typeof window === 'undefined') return

    const url = `${window.location.origin}${window.location.pathname}#${id}`
    const success = await copyToClipboard(url)
    if (success) {
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    }
  }

  // JSON-LD structured data
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Context Graphs and the Open System of Record for AI Agents",
    "description": "Decision traces are the missing infrastructure for agent autonomy. Learn how context graphs emerge, why enterprise systems fall short, and how open policy plus cryptographic receipts create a portable system of record for agent interactions.",
    "url": "https://www.originary.xyz/context-graphs",
    "publisher": {
      "@type": "Organization",
      "name": "Originary",
      "url": "https://www.originary.xyz"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Context Graphs and the Open System of Record for AI Agents",
      "author": {
        "@type": "Organization",
        "name": "Originary"
      }
    }
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a context graph?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A context graph is a queryable structure formed by accumulated decision traces across entities and time, making precedent searchable and enabling safer autonomy."
        }
      },
      {
        "@type": "Question",
        "name": "How is this different from agent tracing tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tracing tools capture internal execution steps. An open system of record focuses on boundary interactions and produces portable, independently verifiable evidence."
        }
      },
      {
        "@type": "Question",
        "name": "How does this relate to HTTP 402 and x402?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "402 patterns standardize 'payment required' challenges. x402 aims to standardize internet-native payments; an open system of record standardizes the evidence object that can reference those payments."
        }
      },
      {
        "@type": "Question",
        "name": "How does this relate to Pay Per Crawl?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pay Per Crawl is an edge enforcement model that uses HTTP 402 and pricing headers for crawler access. A system of record adds portable receipts so the interaction can be verified later across systems."
        }
      },
      {
        "@type": "Question",
        "name": "Is this competing with enterprise Agent Systems of Record?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Enterprise ASOR products centralize agent management within a platform. An open system of record targets cross-vendor, cross-domain interactions and is designed to interoperate."
        }
      },
      {
        "@type": "Question",
        "name": "What must be true for this to become a standard?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Clear profiles, conformance tests, multi-language reference implementations, and adoption at execution-path surfaces (gateways, edges, tool servers)."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <NavigationHeader />

      <main id="main-content" role="main" style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section style={{
          padding: 'var(--space-16) var(--space-6) var(--space-12)',
          background: 'linear-gradient(180deg, #fafafa 0%, #ffffff 100%)'
        }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{
              display: 'inline-flex',
              background: 'var(--accent-brand-subtle)',
              border: '1px solid var(--accent-brand-muted)',
              borderRadius: 'var(--radius-full)',
              padding: 'var(--space-2) var(--space-6)',
              color: 'var(--accent-brand)',
              fontSize: 'var(--text-xs)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: 'var(--space-6)'
            }}>
              Context Graphs | Originary
            </div>

            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.1,
              marginBottom: 'var(--space-6)',
              letterSpacing: '-0.02em'
            }}>
              Context Graphs and the Open System of Record for AI Agents
            </h1>

            <p style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: 'var(--space-8)'
            }}>
              AI agents are starting to run real workflows: browsing, fetching data, calling tools, negotiating access, paying for requests, and writing changes back into systems. The hard part is no longer &ldquo;can the agent do the task.&rdquo; The hard part is:
            </p>

            <p className="callout" style={{
              padding: 'var(--space-6)',
              background: 'linear-gradient(135deg, var(--accent-brand-subtle) 0%, var(--accent-secondary-subtle) 100%)',
              border: '1px solid var(--accent-brand-muted)',
              borderRadius: 'var(--radius-xl)',
              fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              textAlign: 'center'
            }}>
              Can we prove what happened, under which rules, and why it was allowed?
            </p>
          </div>
        </section>

        {/* Mobile TOC */}
        <div className="mobile-toc">
          <button
            className="mobile-toc-trigger"
            onClick={() => setIsTocOpen(!isTocOpen)}
            aria-expanded={isTocOpen}
          >
            <span>Contents</span>
            {isTocOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          {isTocOpen && (
            <nav className="mobile-toc-nav" aria-label="Table of contents">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={activeSection === section.id ? 'active' : ''}
                  onClick={() => setIsTocOpen(false)}
                >
                  {section.title}
                </a>
              ))}
            </nav>
          )}
        </div>

        {/* Content Layout */}
        <div className="content-layout">
          {/* Desktop TOC */}
          <aside className="desktop-toc" aria-label="Table of contents">
            <div className="toc-sticky">
              <h3 className="toc-title">On this page</h3>
              <nav>
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`toc-link ${activeSection === section.id ? 'active' : ''}`}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <article className="main-content">
            {/* Introduction */}
            <section className="content-section">
              <p className="lead">
                Foundation Capital recently framed the opportunity clearly: agents do not just need rules. They need access to <strong>decision traces</strong> that show how rules were applied in reality, where exceptions were granted, and which precedents actually govern outcomes. As those traces accumulate, they form a <strong>context graph</strong>: a living record of decisions stitched across entities and time.
              </p>

              <p>This page is about two ideas:</p>

              <ol className="model-list">
                <li><strong>Context graphs</strong> are how agent autonomy compounds inside organizations.</li>
                <li>The internet also needs an <strong>open system of record</strong> at the interaction boundary, so decisions across vendors, CDNs, payment rails, and agent frameworks remain auditable and portable.</li>
              </ol>

              <p className="emphasis">Originary is building and stewarding that open layer.</p>
            </section>

            {/* Decision Traces */}
            <section id="decision-traces" className="content-section">
              <SectionHeader
                id="decision-traces"
                title="The new unit of truth: decision traces"
                onCopy={handleCopyLink}
                copied={copiedId === 'decision-traces'}
              />

              <p>Traditional systems of record store objects: tickets, invoices, accounts, documents.</p>

              <p>In the agent era, the unit of truth is often a <strong>decision</strong>:</p>

              <ul>
                <li>which data was used</li>
                <li>which policy version applied</li>
                <li>which exception path was invoked</li>
                <li>who approved a deviation</li>
                <li>what changed as a result</li>
              </ul>

              <p>Foundation&apos;s key distinction is worth adopting verbatim in spirit:</p>

              <div className="two-col" style={{ marginTop: 'var(--space-6)' }}>
                <div className="model-block">
                  <h4><FileText size={20} /> Rules</h4>
                  <p>Describe what should happen in general.</p>
                </div>
                <div className="model-block">
                  <h4><GitBranch size={20} /> Decision Traces</h4>
                  <p>Capture what happened in this specific case, including exceptions and precedent.</p>
                </div>
              </div>

              <p style={{ marginTop: 'var(--space-6)' }}>
                Agents can follow rules. They get stuck when the real world deviates from rules. Humans resolve those deviations with judgment and organizational memory. Most organizations do not store that memory as a durable artifact.
              </p>
            </section>

            {/* Why Systems Fall Short */}
            <section id="why-systems-fall-short" className="content-section">
              <SectionHeader
                id="why-systems-fall-short"
                title="Why today&apos;s systems of record do not capture agent reality"
                onCopy={handleCopyLink}
                copied={copiedId === 'why-systems-fall-short'}
              />

              <p>Foundation argues that enterprises are missing the layer that actually runs them: exceptions, overrides, escalations, and the cross-system context that lives in conversations and ad hoc approvals.</p>

              <p>That gap shows up everywhere agents touch production:</p>

              <div className="problem-card">
                <h4>Ambiguous policy</h4>
                <p>&ldquo;The policy says X, but we always do Y in these cases.&rdquo;</p>
              </div>

              <div className="problem-card">
                <h4>Exceptions</h4>
                <p>&ldquo;Approve once, but only for this customer and only this quarter.&rdquo;</p>
              </div>

              <div className="problem-card">
                <h4>Precedent</h4>
                <p>&ldquo;We set a special rule last time, reuse it.&rdquo;</p>
              </div>

              <div className="problem-card">
                <h4>Cross-system context</h4>
                <p>The reason is spread across CRM, ticketing, finance, email, and chat.</p>
              </div>

              <p className="callout" style={{ marginTop: 'var(--space-6)' }}>
                This is why &ldquo;governance alone&rdquo; does not solve autonomy. The missing ingredient is a queryable record of how decisions were actually made.
              </p>
            </section>

            {/* What is a Context Graph */}
            <section id="what-is-context-graph" className="content-section">
              <SectionHeader
                id="what-is-context-graph"
                title="What is a context graph"
                onCopy={handleCopyLink}
                copied={copiedId === 'what-is-context-graph'}
              />

              <p>A context graph is not &ldquo;chain-of-thought.&rdquo; It is not an internal model artifact.</p>

              <p className="emphasis">
                It is a <strong>living, queryable record of decision traces</strong>, stitched across entities and time, so precedent becomes searchable and automation becomes safer.
              </p>

              <p>The compounding effect is the important part:</p>

              <ul className="proof-list">
                <li><CheckCircle2 size={18} /> More decisions generate more traces.</li>
                <li><CheckCircle2 size={18} /> More traces create better precedent.</li>
                <li><CheckCircle2 size={18} /> Better precedent lets agents handle more cases safely.</li>
                <li><CheckCircle2 size={18} /> That creates more traces.</li>
              </ul>

              <p className="summary" style={{ marginTop: 'var(--space-6)' }}>
                This is how autonomy scales without turning into chaos.
              </p>
            </section>

            {/* Two Systems */}
            <section id="two-systems" className="content-section">
              <SectionHeader
                id="two-systems"
                title="Two systems of record are emerging, and they are not the same"
                onCopy={handleCopyLink}
                copied={copiedId === 'two-systems'}
              />

              <div className="two-col">
                <div className="model-block">
                  <h4><Database size={20} /> Enterprise Agent Systems of Record</h4>
                  <p style={{ fontWeight: 500, color: 'var(--text-tertiary)', marginBottom: 'var(--space-3)' }}>Closed, internal</p>
                  <p>Workday, for example, markets an &ldquo;Agent System of Record&rdquo; that centralizes visibility and control over agents, including third-party agents, inside the Workday platform.</p>
                  <p>This class of product is about internal management: onboarding agents, roles/permissions, measurement, and orchestration. It is valuable, but it is inherently platform-centric.</p>
                </div>

                <div className="model-block">
                  <h4><Globe size={20} /> Open System of Record at the Interaction Boundary</h4>
                  <p style={{ fontWeight: 500, color: 'var(--text-tertiary)', marginBottom: 'var(--space-3)' }}>Portable, cross-vendor</p>
                  <p>The internet also needs a system of record for agent interactions that occur across organizations:</p>
                  <ul>
                    <li>agent to publisher</li>
                    <li>agent to API</li>
                    <li>agent to tool server</li>
                    <li>agent through a CDN or gateway</li>
                    <li>agent paying via different rails</li>
                  </ul>
                </div>
              </div>

              <p className="callout" style={{ marginTop: 'var(--space-6)' }}>
                This boundary layer is where disputes form and where interoperability matters. It cannot be owned by a single vendor if it is to become durable infrastructure.
              </p>
            </section>

            {/* Market Signals */}
            <section id="market-signals" className="content-section">
              <SectionHeader
                id="market-signals"
                title="The market signals are already visible"
                onCopy={handleCopyLink}
                copied={copiedId === 'market-signals'}
              />

              <p>A few public shifts show the pressure toward policy, payment, and proof on the open web:</p>

              <div className="problem-card">
                <h4>HTTP 402 is re-emerging for agent payments</h4>
                <p>Cloudflare and Coinbase launched the x402 Foundation to drive an open standard for &ldquo;internet-native payments,&rdquo; explicitly to simplify payment requests and responses, and to standardize how 402 challenges are interpreted.</p>
              </div>

              <div className="problem-card">
                <h4>CDNs are moving from blocking to charging</h4>
                <p>Cloudflare&apos;s Pay Per Crawl returns <code>HTTP 402 Payment Required</code> plus pricing headers (for example <code>crawler-price</code>) when paid access is required.</p>
              </div>

              <div className="problem-card">
                <h4>Edge monetization stacks are emerging</h4>
                <p>Fastly and TollBit describe an integration where bots can be detected and redirected to a paywall, then verified and granted access based on tokens or required to pay.</p>
              </div>

              <p className="emphasis" style={{ marginTop: 'var(--space-6)' }}>
                These are important because they establish a shared direction: <strong>policy and payment at the protocol edge</strong>.
              </p>

              <p>What is still missing is an open, portable proof object that makes those interactions auditable across implementations.</p>
            </section>

            {/* Built to Interoperate */}
            <section id="built-to-interoperate" className="content-section">
              <SectionHeader
                id="built-to-interoperate"
                title="Built to interoperate"
                onCopy={handleCopyLink}
                copied={copiedId === 'built-to-interoperate'}
              />

              <p>An open system of record should not try to replace payment rails, CDNs, or internal agent platforms.</p>

              <p className="emphasis">It should define the <strong>evidence object</strong> that can reference them.</p>

              <ul>
                <li><strong>Payment standards like x402</strong> define how value is exchanged over HTTP 402.</li>
                <li><strong>Edge systems like Pay Per Crawl</strong> define enforcement surfaces and pricing headers.</li>
                <li><strong>Provenance and preference standards</strong> can define how origin and consent signals are expressed (where applicable).</li>
              </ul>

              <p className="callout" style={{ marginTop: 'var(--space-6)' }}>
                The missing layer is a neutral format for &ldquo;what happened&rdquo; that can be independently verified later.
              </p>
            </section>

            {/* Requirements */}
            <section id="requirements" className="content-section">
              <SectionHeader
                id="requirements"
                title="What an open system of record must provide"
                onCopy={handleCopyLink}
                copied={copiedId === 'requirements'}
              />

              <p>To become infrastructure, the boundary-layer record must be:</p>

              <div className="requirements-grid">
                <div className="requirement-card">
                  <h4>1. Policy-addressable</h4>
                  <p>You must be able to prove which policy applied. A &ldquo;receipt&rdquo; without a deterministic policy reference becomes a screenshot.</p>
                </div>

                <div className="requirement-card">
                  <h4>2. Payment-aware but rail-neutral</h4>
                  <p>It must support &ldquo;paid&rdquo; flows without hard-binding to one rail. Rails evolve.</p>
                </div>

                <div className="requirement-card">
                  <h4>3. Privacy-preserving by default</h4>
                  <p>A system of record cannot become a tracking system. It should avoid PII and support selective disclosure patterns.</p>
                </div>

                <div className="requirement-card">
                  <h4>4. Portable and independently verifiable</h4>
                  <p>Evidence must be verifiable by parties other than the issuer, without privileged access to internal logs.</p>
                </div>

                <div className="requirement-card">
                  <h4>5. Cheap enough to be default</h4>
                  <p>If evidence is too expensive to emit and verify, it becomes an &ldquo;enterprise feature&rdquo; instead of a baseline.</p>
                </div>
              </div>
            </section>

            {/* PEAC and Originary */}
            <section id="peac-and-originary" className="content-section">
              <SectionHeader
                id="peac-and-originary"
                title="Where PEAC Protocol and Originary fit"
                onCopy={handleCopyLink}
                copied={copiedId === 'peac-and-originary'}
              />

              <p>PEAC Protocol (Programmable Environment for Agent Coordination) targets this boundary layer: policy plus cryptographic receipts for agent interactions.</p>

              <p>The core idea is simple:</p>

              <ul className="proof-list">
                <li><CheckCircle2 size={18} /> Publish machine-readable policy (the &ldquo;rules&rdquo; layer).</li>
                <li><CheckCircle2 size={18} /> Emit cryptographic receipts (the &ldquo;decision trace event&rdquo; layer).</li>
                <li><CheckCircle2 size={18} /> Make verification portable.</li>
              </ul>

              <div className="protocol-callout" style={{ marginTop: 'var(--space-6)' }}>
                <strong>Note:</strong> PEAC Protocol is open. Originary is the company building commercial tools and stewarding the ecosystem.
              </div>

              <p>This directly complements the context graph thesis:</p>

              <div className="two-col" style={{ marginTop: 'var(--space-4)' }}>
                <div className="model-block">
                  <h4><Network size={20} /> Context Graphs</h4>
                  <p>Compound inside organizations via decision traces.</p>
                </div>
                <div className="model-block">
                  <h4><Shield size={20} /> PEAC Receipts</h4>
                  <p>Make cross-org interactions verifiable so those traces can be trusted inputs to context graphs, observability tools, and compliance workflows.</p>
                </div>
              </div>
            </section>

            {/* Improvements */}
            <section id="improvements" className="content-section">
              <SectionHeader
                id="improvements"
                title="What PEAC and Originary should add or improve"
                onCopy={handleCopyLink}
                copied={copiedId === 'improvements'}
              />

              <p>Below is a realistic, prioritized set of improvements that map to the thesis and to market pressures.</p>

              <div className="improvement-list">
                <div className="problem-card">
                  <h4>1. Define a &ldquo;Decision Trace Profile&rdquo; for receipts</h4>
                  <p>Foundation&apos;s framing makes &ldquo;decision traces&rdquo; the atomic unit. PEAC should make this explicit with an optional, standardized profile:</p>
                  <div className="code-block">
                    <div className="code-header">decision-trace-profile.json</div>
                    <pre><code>{`{
  "policy_ref": "hash or version pointer",
  "policy_match": "which rule matched",
  "exception_ref": "opaque reference, not PII",
  "approval_ref": "optional",
  "decision_id": "stable identifier for dedup and linkage"
}`}</code></pre>
                  </div>
                  <p className="requirement-note" style={{ marginTop: 'var(--space-3)' }}>First-order effect: clearer positioning and better enterprise resonance.</p>
                </div>

                <div className="problem-card">
                  <h4>2. Receipt chaining and hop semantics</h4>
                  <p>Context graphs are &ldquo;stitched across entities and time.&rdquo; Make chaining first-class:</p>
                  <ul>
                    <li><code>parent_receipt</code></li>
                    <li><code>hop_id</code></li>
                    <li><code>link_type</code> (fetch, tool_call, transform, cache, delegate)</li>
                  </ul>
                  <p className="requirement-note" style={{ marginTop: 'var(--space-3)' }}>Enables multi-hop workflows to be audited. Standardizes lineage across vendors.</p>
                </div>

                <div className="problem-card">
                  <h4>3. Witness mode (countersignatures)</h4>
                  <p>Where enforcement sits at the edge (CDNs, gateways), you will want optional witness signatures for non-repudiation in high-stakes flows.</p>
                  <p className="requirement-note" style={{ marginTop: 'var(--space-3)' }}>Stronger trust for disputes. Easier enterprise procurement.</p>
                </div>

                <div className="problem-card">
                  <h4>4. Proof-of-possession binding</h4>
                  <p>If receipts can be replayed, the &ldquo;system of record&rdquo; becomes a fraud surface. Add a standardized pattern for binding receipts to a requester key (without identifying the human).</p>
                  <p className="requirement-note" style={{ marginTop: 'var(--space-3)' }}>Improves security credibility. Makes PEAC viable for regulated workloads.</p>
                </div>

                <div className="problem-card">
                  <h4>5. Export schema and &ldquo;context graph bridge&rdquo;</h4>
                  <p>Ship a reference export format: JSONL event stream that can be imported into warehouses and graph stores.</p>
                  <p className="requirement-note" style={{ marginTop: 'var(--space-3)' }}>Enterprises already store context in platforms; you win by being the best evidence feed.</p>
                </div>

                <div className="problem-card">
                  <h4>6. Conformance tests and compatibility matrix</h4>
                  <p>Standards win when &ldquo;it works everywhere.&rdquo; Ship:</p>
                  <ul>
                    <li>Canonicalization rules</li>
                    <li>Golden vectors</li>
                    <li>Conformance suite</li>
                    <li>Compatibility matrix across SDKs and server profiles</li>
                  </ul>
                  <p className="requirement-note" style={{ marginTop: 'var(--space-3)' }}>Accelerates ecosystem contributions. Reduces fragmentation risk.</p>
                </div>
              </div>
            </section>

            {/* Competitive Landscape */}
            <section id="competitive-landscape" className="content-section">
              <SectionHeader
                id="competitive-landscape"
                title="Competitive landscape"
                onCopy={handleCopyLink}
                copied={copiedId === 'competitive-landscape'}
              />

              <p>How to position without bluffing:</p>

              <div className="landscape-grid">
                <div className="problem-card">
                  <h4>Workday and enterprise &ldquo;Agent System of Record&rdquo; platforms</h4>
                  <p>Workday&apos;s positioning is centralized management, visibility, and control for agents, including third-party registration via an &ldquo;Agent Gateway.&rdquo;</p>
                  <p className="summary" style={{ marginTop: 'var(--space-3)' }}>Position: Workday is the system of record <em>inside Workday</em>. PEAC is the system of record <em>across the open web</em> and across vendors. Integrate, do not compete head-on.</p>
                </div>

                <div className="problem-card">
                  <h4>Payment standards and foundations (x402)</h4>
                  <p>x402 is explicitly positioned as an open standard for internet-native payments and agentic payments at scale.</p>
                  <p className="summary" style={{ marginTop: 'var(--space-3)' }}>Position: x402 is a payment rail standard. PEAC is a policy and evidence standard that can reference x402 and other rails.</p>
                </div>

                <div className="problem-card">
                  <h4>CDNs and edge enforcement (Cloudflare Pay Per Crawl)</h4>
                  <p>Pay Per Crawl uses HTTP 402 and pricing headers for crawler access, and Cloudflare provides enforcement infrastructure.</p>
                  <p className="summary" style={{ marginTop: 'var(--space-3)' }}>Position: Cloudflare is an enforcement surface and merchant stack. PEAC is the portable receipt format that can be emitted at the edge and verified elsewhere.</p>
                </div>

                <div className="problem-card">
                  <h4>Marketplaces and monetization platforms (TollBit, etc.)</h4>
                  <p>Fastly and TollBit describe a stack of detection, redirection to paywall, verification, analytics, and monetization.</p>
                  <p className="summary" style={{ marginTop: 'var(--space-3)' }}>Position: They monetize and manage bot access as a service. PEAC standardizes the evidence object marketplaces can reconcile against.</p>
                </div>

                <div className="problem-card">
                  <h4>Observability and tracing (LangSmith, Arize)</h4>
                  <p>These tools provide visibility and tracing into agent behavior.</p>
                  <p className="summary" style={{ marginTop: 'var(--space-3)' }}>Position: They trace internal execution. PEAC receipts cover boundary interactions and provide verifiable evidence that can be attached to traces.</p>
                </div>
              </div>
            </section>

            {/* GTM */}
            <section id="gtm" className="content-section">
              <SectionHeader
                id="gtm"
                title="GTM: how to actually win this space"
                onCopy={handleCopyLink}
                copied={copiedId === 'gtm'}
              />

              <p>The constraint is structural: you must sit in, or adjacent to, the execution path.</p>

              <p>Foundation explicitly notes that systems-of-agents startups have advantage because they sit in the execution path and can persist decision traces at decision time.</p>

              <p className="emphasis">So the GTM should be execution-path-first:</p>

              <div className="build-grid">
                <div className="build-card">
                  <div className="build-icon"><Target size={24} /></div>
                  <h4>Phase 1: Win the boundary events</h4>
                  <ul>
                    <li>&ldquo;Receipt-first&rdquo; integration kits for API servers and gateways</li>
                    <li>Clear story for HTTP 402 flows and price challenges</li>
                  </ul>
                  <p className="requirement-note">Goal: make receipts the default evidence object for &ldquo;paid or policy-bound&rdquo; access.</p>
                </div>

                <div className="build-card">
                  <div className="build-icon"><Layers size={24} /></div>
                  <h4>Phase 2: Win the edge</h4>
                  <ul>
                    <li>CDN/edge worker profiles so receipts can be emitted where enforcement lives</li>
                    <li>Optional witness mode for edge countersignatures</li>
                  </ul>
                  <p className="requirement-note">Goal: become the neutral receipt format that multiple edge stacks can produce.</p>
                </div>

                <div className="build-card">
                  <div className="build-icon"><Network size={24} /></div>
                  <h4>Phase 3: Become the evidence feed</h4>
                  <ul>
                    <li>Export schema and graph bridge</li>
                    <li>Partnerships with observability and orchestration providers</li>
                  </ul>
                  <p className="requirement-note">Goal: PEAC becomes the trusted input layer for context graphs.</p>
                </div>
              </div>
            </section>

            {/* Productize */}
            <section id="productize" className="content-section">
              <SectionHeader
                id="productize"
                title="What Originary should productize"
                onCopy={handleCopyLink}
                copied={copiedId === 'productize'}
              />

              <p>Without centralizing the protocol:</p>

              <div className="audience-grid">
                <div className="audience-card">
                  <h4>Hosted Verification</h4>
                  <p>Turn receipts into a &ldquo;verify endpoint&rdquo; teams can rely on.</p>
                </div>

                <div className="audience-card">
                  <h4>Receipt Ledger</h4>
                  <p>Append-only storage + export.</p>
                </div>

                <div className="audience-card">
                  <h4>Evidence Bundles</h4>
                  <p>Audit-ready packaging for disputes and compliance workflows.</p>
                </div>

                <div className="audience-card">
                  <h4>Context Graph Bridge</h4>
                  <p>JSONL export for warehouses and graph stores.</p>
                </div>
              </div>

              <p className="callout" style={{ marginTop: 'var(--space-6)' }}>
                This preserves the open protocol while giving Originary a credible commercial wedge.
              </p>
            </section>

            {/* FAQ */}
            <section id="faq" className="content-section">
              <SectionHeader
                id="faq"
                title="Frequently Asked Questions"
                onCopy={handleCopyLink}
                copied={copiedId === 'faq'}
              />

              <div className="faq-list">
                <div className="faq-item">
                  <h4>What is a context graph?</h4>
                  <p>A context graph is a queryable structure formed by accumulated decision traces across entities and time, making precedent searchable and enabling safer autonomy.</p>
                </div>

                <div className="faq-item">
                  <h4>How is this different from agent tracing tools?</h4>
                  <p>Tracing tools capture internal execution steps. An open system of record focuses on boundary interactions and produces portable, independently verifiable evidence.</p>
                </div>

                <div className="faq-item">
                  <h4>How does this relate to HTTP 402 and x402?</h4>
                  <p>402 patterns standardize &ldquo;payment required&rdquo; challenges. x402 aims to standardize internet-native payments; an open system of record standardizes the evidence object that can reference those payments.</p>
                </div>

                <div className="faq-item">
                  <h4>How does this relate to Pay Per Crawl?</h4>
                  <p>Pay Per Crawl is an edge enforcement model that uses HTTP 402 and pricing headers for crawler access. A system of record adds portable receipts so the interaction can be verified later across systems.</p>
                </div>

                <div className="faq-item">
                  <h4>Is this competing with enterprise &ldquo;Agent Systems of Record&rdquo;?</h4>
                  <p>Enterprise ASOR products centralize agent management within a platform. An open system of record targets cross-vendor, cross-domain interactions and is designed to interoperate.</p>
                </div>

                <div className="faq-item">
                  <h4>What must be true for this to become a standard?</h4>
                  <p>Clear profiles, conformance tests, multi-language reference implementations, and adoption at execution-path surfaces (gateways, edges, tool servers).</p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="content-section" style={{ borderBottom: 'none' }}>
              <p className="cta-statement">
                Start building with receipts today.
              </p>

              <div className="cta-buttons">
                <Link href="/peac" className="btn btn-primary">
                  <span>Explore PEAC Protocol</span>
                  <ArrowRight size={18} />
                </Link>
                <Link href="/system-of-record" className="btn btn-secondary">
                  <span>System of Record</span>
                  <ArrowRight size={18} />
                </Link>
                <Link href="/demo" className="btn btn-secondary">
                  <span>See Demo</span>
                  <Zap size={18} />
                </Link>
                <a
                  href="https://github.com/peacprotocol/peac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <span>GitHub</span>
                  <ExternalLink size={18} />
                </a>
              </div>

              {/* References */}
              <div style={{ marginTop: 'var(--space-16)', paddingTop: 'var(--space-8)', borderTop: '1px solid var(--border-default)' }}>
                <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-tertiary)', marginBottom: 'var(--space-4)' }}>References</h4>
                <ul style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', lineHeight: 1.8 }}>
                  <li><a href="https://foundationcapital.com/context-graphs-ais-trillion-dollar-opportunity/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-brand)' }}>Foundation Capital: Context Graphs - AI&apos;s Trillion-Dollar Opportunity</a></li>
                  <li><a href="https://www.workday.com/en-us/artificial-intelligence/agent-system-of-record.html" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-brand)' }}>Workday Agent System of Record</a></li>
                  <li><a href="https://www.cloudflare.com/en-in/press/press-releases/2025/cloudflare-and-coinbase-will-launch-x402-foundation/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-brand)' }}>Cloudflare and Coinbase x402 Foundation</a></li>
                  <li><a href="https://blog.cloudflare.com/introducing-pay-per-crawl/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-brand)' }}>Cloudflare: Introducing Pay Per Crawl</a></li>
                  <li><a href="https://www.fastly.com/blog/how-to-control-and-monetize-ai-bot-traffic-using-fastly-and-tollbit" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-brand)' }}>Fastly and TollBit Integration</a></li>
                  <li><a href="https://www.x402.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-brand)' }}>x402 - Internet-Native Payments Standard</a></li>
                  <li><a href="https://www.langchain.com/langsmith/observability" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-brand)' }}>LangSmith Observability</a></li>
                </ul>
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
          padding: var(--space-2) var(--space-3);
          font-size: var(--text-sm);
          color: var(--text-tertiary);
          text-decoration: none;
          border-left: 2px solid var(--border-default);
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
          min-height: 48px;
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
          min-height: 44px;
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
          scroll-margin-top: 100px;
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

        .cta-statement {
          font-size: clamp(1.25rem, 4vw, 1.5rem);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--space-8);
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

        /* Requirements grid */
        .requirements-grid {
          display: grid;
          gap: var(--space-4);
        }

        /* Improvement list */
        .improvement-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          margin: var(--space-6) 0;
        }

        /* Landscape grid */
        .landscape-grid {
          display: flex;
          flex-direction: column;
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
          margin: var(--space-6) 0;
        }

        .proof-list li {
          display: flex;
          align-items: flex-start;
          gap: var(--space-3);
          padding: var(--space-3) 0;
          font-size: clamp(0.9375rem, 2vw, 1rem);
          color: var(--text-secondary);
        }

        .proof-list :global(svg) {
          color: var(--accent-secondary);
          flex-shrink: 0;
          margin-top: 2px;
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
          margin-bottom: var(--space-3);
        }

        /* Audience grid */
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

        /* CTA buttons */
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
          min-height: 48px;
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

        /* FAQ */
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
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
      <h2 style={{
        fontSize: 'clamp(1.5rem, 4vw, 1.875rem)',
        fontWeight: 700,
        color: 'var(--text-primary)',
        letterSpacing: '-0.02em',
        margin: 0
      }}>
        {title}
      </h2>
      <button
        onClick={() => onCopy(id)}
        className="anchor-btn"
        aria-label={copied ? 'Link copied' : 'Copy link to section'}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 'var(--space-2)',
          color: copied ? 'var(--accent-secondary)' : 'var(--text-muted)',
          opacity: 0.6,
          transition: 'all 0.15s ease'
        }}
      >
        <LinkIcon size={18} />
      </button>
      <style jsx>{`
        .anchor-btn:hover {
          opacity: 1;
          color: var(--accent-brand);
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
