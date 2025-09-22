'use client'

import Link from 'next/link'
import {
  FadeIn,
  SlideIn,
  ScaleIn,
  StaggerChildren,
  StaggerItem,
  AnimatedCounter,
  HoverCard,
  FloatingElement,
  GradientBlob,
  AnimatedButton,
  MagneticCard,
  GlitchText,
  ParticleField,
  MorphingShape,
  icons
} from './AnimatedComponents'

const {
  Check,
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Database,
  Lock,
  TrendingUp,
  Users,
  Code,
  BarChart,
  Sparkles,
  Rocket,
  Award,
  Clock,
  CheckCircle
} = icons

const heroHighlights = [
  'Machine-readable policy orchestration across content, APIs, and data lakes.',
  'Dual-rail settlement via x402, Stripe, stablecoins, or enterprise credits.',
  'Signed receipts that follow every agent request for total accountability.',
]


const valueProps = [
  {
    icon: Database,
    title: 'Unified policy graph',
    copy: 'Publish once, negotiate everywhere. Originary translates PEAC clauses into enforceable controls across agents, APIs, and downstream systems.',
    bullets: ['Autogenerate variants for agents, crawlers, and humans', 'Versioning with full diff history', 'Multi-tenant isolation and overrides'],
  },
  {
    icon: Zap,
    title: 'Composable commerce rails',
    copy: 'Bring your own pricing logic and payment providers. Our gateway brokers credits, fiat, or crypto without refactoring existing endpoints.',
    bullets: ['Meter usage with policy-aware throttles', 'x402, Stripe, and on-chain adapters', 'Dynamic rate cards per policy segment'],
  },
  {
    icon: Shield,
    title: 'Provable trust and analytics',
    copy: 'Every interaction emits a tamper-evident receipt. Stream them into your observability stack or hand to regulators in a click.',
    bullets: ['JSON-LD receipts signed with rotating keys', 'Graph explorer for provenance queries', 'SIEM & data warehouse connectors out of the box'],
  },
]

const productModules = [
  {
    icon: Code,
    name: 'PEAC Core',
    role: 'Policy intelligence',
    description: 'Model your access, consent, attribution, and compensation logic once. PEAC Core negotiates clauses per requester profile and governs propagation.',
    bullets: ['Schema guardrails & linting', 'Sandboxed policy simulations', 'Policy diff approvals for legal & ops'],
    href: '/products/peac',
  },
  {
    icon: CheckCircle,
    name: 'Verify API',
    role: 'Proof engine',
    description: 'Real-time verification and notarisation for receipts. Query lineage, revoke access instantly, and anchor proofs where you need them.',
    bullets: ['JWS + C2PA signatures', 'Selective disclosure tokens', 'Immutable audit timeline'],
    href: '/products/verify',
  },
  {
    icon: TrendingUp,
    name: 'Gateway 402',
    role: 'Commerce orchestration',
    description: 'Drop-in payment gateway that wraps any endpoint in HTTP 402. Charge per request, stream usage events, and reconcile in minutes.',
    bullets: ['Credit pools & prepaid wallets', 'Adaptive pricing by segment', 'Webhook & ledger integrations'],
    href: '/products/gateway-402',
  },
  {
    icon: BarChart,
    name: 'Receipts Graph',
    role: 'Compliance analytics',
    description: 'A live system of record for every licensed use. Search who accessed what, under which clause, and when settlement cleared.',
    bullets: ['Federated search & filtering', 'Automated dispute workflows', 'Exports to legal, finance, and RevOps'],
    href: '/receipts',
  },
]

const testimonials = [
  {
    quote: 'Originary gave us a single compliance plane across data APIs, partner agents, and internal copilots. Legal reviews dropped from weeks to hours.',
    name: 'Leah Ortiz',
    role: 'Chief Product Officer, Meridian Data Cooperative',
  },
  {
    quote: 'The receipts graph is the missing ledger for the agentic economy. Our auditors can replay every interaction without involving engineering.',
    name: 'Arjun Mehta',
    role: 'VP Trust & Safety, Helix Media Group',
  },
]

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero home-hero">
        <ParticleField count={30} />
        <GradientBlob color1="#2563EB" color2="#7C3AED" size="800px" className="-top-60 -right-60" />
        <GradientBlob color1="#10B981" color2="#3B82F6" size="600px" className="-bottom-40 -left-40" />
        <div className="container hero-grid">
          <SlideIn direction="left" className="hero-copy">
            <FadeIn delay={0.1}>
              <span className="kicker">
                <Sparkles className="inline w-4 h-4 mr-1" />
                PEAC Orchestration Platform
              </span>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="display">
                <GlitchText text="Proof-first infrastructure" /> for autonomous commerce
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="sub">
                Publish <code>peac.txt</code> to declare access, consent, attribution, privacy, and pricing. Agents settle via x402—or Stripe/credits/fiat/stablecoin/on-chain via adapters—and present a Receipt to prove compliance on every request.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="actions hero-actions">
                <AnimatedButton variant="primary">
                  <Link href="/company/contact" className="flex items-center gap-2">
                    Request a demo
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </AnimatedButton>
                <AnimatedButton variant="secondary">
                  <Link href="/developers" className="flex items-center gap-2">
                    Explore developer docs
                  </Link>
                </AnimatedButton>
              </div>
            </FadeIn>

            <StaggerChildren className="hero-highlights" staggerDelay={0.1}>
              {heroHighlights.map((item) => (
                <StaggerItem key={item}>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                </StaggerItem>
              ))}
            </StaggerChildren>

          </SlideIn>

          <SlideIn direction="right" className="hero-showcase">
            <FloatingElement duration={4}>
              <div className="hero-card receipt-card">
                <div className="receipt-card__header">
                  <span className="badge">Live receipt</span>
                  <span className="receipt-id">#8f2c-45aa</span>
                </div>
                <div className="receipt-row">
                  <span>Resource</span>
                  <code>/api/content/atlantic/17</code>
                </div>
                <div className="receipt-row">
                  <span>Requester</span>
                  <span>atlas-agent/2.3.1</span>
                </div>
                <div className="receipt-row">
                  <span>Clause</span>
                  <span>peac:v1.6 - attribution + commercial tier</span>
                </div>
                <div className="receipt-row">
                  <span>Settlement</span>
                  <span>$0.0025 via x402 (primary)</span>
                </div>
                <div className="receipt-row">
                  <span>Status</span>
                  <span className="status success">
                    <CheckCircle className="w-4 h-4" />
                    Receipt Ready
                  </span>
                </div>
                <div className="receipt-footer">
                  <span>Signature</span>
                  <code>0x94cd…5a9b</code>
                </div>
              </div>
            </FloatingElement>

            <FloatingElement duration={5} className="mt-4">
              <div className="hero-card policy-card">
                <div className="policy-card__header">
                  <span className="badge">Policy diff</span>
                  <span className="policy-env">Production</span>
                </div>
                <pre>
{`- training: disallowed
+ training: metered ($0.015 / 100 req)
  attribution: "© 2025 Meridian Data Co."
  fallback: x402 -> stablecoin`}
                </pre>
                <p className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  Approved by Legal • Rollout in 12 minutes
                </p>
              </div>
            </FloatingElement>
          </SlideIn>
        </div>
      </section>

      {/* Logo Strip */}
      <section className="logo-strip" aria-label="Works with">
        <div className="container">
          <FadeIn>
            <span className="logo-strip__label">Works with</span>
          </FadeIn>
          <StaggerChildren className="logo-strip__grid" staggerDelay={0.05}>
            {['MCP', 'A2A', 'x402', 'Stripe', 'Circle', 'Cloudflare', 'Vercel'].map((marker) => (
              <StaggerItem key={marker}>
                <HoverCard className="logo-pill">{marker}</HoverCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="section value-section">
        <div className="container">
          <FadeIn className="section-header">
            <h2>Operate every policy, payment, and proof from one fabric</h2>
            <p className="lead">Stripe-level craft for the agentic economy. Originary gives legal, product, and engineering a common system to control access and revenue without slowing teams down.</p>
          </FadeIn>

          <StaggerChildren className="value-grid" staggerDelay={0.1}>
            {valueProps.map((prop) => {
              const IconComponent = prop.icon
              return (
                <StaggerItem key={prop.title}>
                  <MagneticCard className="value-card">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h3>{prop.title}</h3>
                    </div>
                    <p>{prop.copy}</p>
                    <ul>
                      {prop.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </MagneticCard>
                </StaggerItem>
              )
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Product Modules */}
      <section className="section module-section">
        <div className="container">
          <FadeIn className="section-lead">
            <div>
              <h2>Composable products that ship together</h2>
              <p className="lead">Deploy the entire Originary stack or start with the module you need. Every product shares identity, policy, and observability primitives.</p>
            </div>
            <AnimatedButton variant="secondary">
              <Link href="/products" className="flex items-center gap-2">
                View full product suite
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedButton>
          </FadeIn>

          <StaggerChildren className="bento-grid" staggerDelay={0.1}>
            {productModules.map((module) => {
              const IconComponent = module.icon
              return (
                <StaggerItem key={module.name}>
                  <MagneticCard className="bento-card">
                    <header>
                      <span className="badge badge--outlined">{module.role}</span>
                      <div className="flex items-center gap-3 mt-2">
                        <IconComponent className="w-6 h-6 text-primary" />
                        <h3>{module.name}</h3>
                      </div>
                    </header>
                    <p>{module.description}</p>
                    <ul>
                      {module.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={module.href} className="card-link flex items-center gap-1">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </MagneticCard>
                </StaggerItem>
              )
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonial-section" aria-label="Customer testimonials">
        <div className="container testimonial-grid">
          {testimonials.map((item, index) => (
            <ScaleIn key={item.name} delay={index * 0.1}>
              <div className="testimonial-card">
                <p>&ldquo;{item.quote}&rdquo;</p>
                <footer>
                  <span className="testimonial-name">{item.name}</span>
                  <span className="testimonial-role">{item.role}</span>
                </footer>
              </div>
            </ScaleIn>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="section final-cta">
        <div className="container final-cta__inner">
          <FadeIn>
            <div>
              <span className="badge badge--outlined">
                <Rocket className="inline w-4 h-4 mr-1" />
                Launch in weeks, not quarters
              </span>
              <h2>Ready to clear receipts for every intelligent agent?</h2>
              <p className="lead">Partner with Originary to move from policy PDFs to provable commerce. Our solution engineers migrate your inventory, wire up payments, and hand legal a live control room.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="final-cta__actions">
              <AnimatedButton variant="primary">
                <Link href="/company/contact" className="flex items-center gap-2">
                  Book an enterprise review
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimatedButton>
              <AnimatedButton variant="secondary">
                <Link href="/pricing" className="flex items-center gap-2">
                  See pricing & limits
                </Link>
              </AnimatedButton>
              <Link href="/products/verify" className="cta-link flex items-center gap-1">
                Inspect a live receipt <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}