'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  FadeIn,
  SlideIn,
  ScaleIn,
  StaggerChildren,
  StaggerItem,
  AnimatedCounter,
  HoverCard,
  AnimatedButton,
  icons
} from './AnimatedComponents'
import RazorpayButton from './RazorpayButton'

const {
  Check,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Globe,
  Users,
  Clock,
  CheckCircle,
  DollarSign,
  BarChart,
  Award,
  Sparkles
} = icons

const pricingTiers = [
  {
    name: 'Developer',
    badge: 'STARTER',
    price: { amount: 1, period: 'to get started' },
    description: 'Perfect for prototyping and small projects',
    features: [
      '1,000 API calls/month',
      '100 receipt verifications/month',
      'Basic Gateway (402) access',
      'Community support',
      'Full documentation access',
      'SDK & developer tools',
      'Basic monitoring dashboard'
    ],
    cta: 'Get Started',
    popular: false,
    icon: Sparkles
  },
  {
    name: 'Professional',
    badge: 'PROFESSIONAL',
    price: { amount: 1, period: 'to get started' },
    description: 'For production applications and growing teams',
    features: [
      'Everything in Developer, plus:',
      '100,000 API calls/month',
      '10,000 receipt verifications/month',
      'Advanced Gateway features',
      'Priority support',
      'Studio access (5 seats included)',
      'Custom adapter configurations',
      'Advanced analytics & reporting',
      'Service Level Agreement',
      'Webhook integrations'
    ],
    cta: 'Start Professional',
    popular: true,
    icon: Zap
  },
  {
    name: 'Enterprise',
    badge: 'ENTERPRISE',
    price: { amount: 'Custom', period: 'pricing' },
    description: 'For large-scale deployments with custom requirements',
    features: [
      'Everything in Professional, plus:',
      'High-volume API access',
      'Bulk receipt verifications',
      'Multi-region deployments',
      'On-premises & hybrid cloud options',
      '24/7 dedicated support team',
      'Multiple Studio seats',
      'Custom protocol integrations',
      'Advanced security & compliance',
      'Custom Service Level Agreement',
      'Dedicated customer success manager',
      'Professional services & training'
    ],
    cta: 'Contact Sales',
    popular: false,
    icon: Award
  }
]

const comparisonFeatures = [
  { name: 'API Calls per month', developer: '1,000', professional: '100,000', enterprise: 'Custom quota' },
  { name: 'Receipt Verifications', developer: '100', professional: '10,000', enterprise: 'Custom quota' },
  { name: 'Studio Seats', developer: '-', professional: '5', enterprise: 'Custom' },
  { name: 'Support Response Time', developer: 'Community', professional: 'Priority support', enterprise: 'Dedicated team' },
  { name: 'Service Level Agreement', developer: '-', professional: 'Available', enterprise: 'Custom SLA' },
  { name: 'Custom Integrations', developer: '-', professional: 'Limited', enterprise: 'Full' },
  { name: 'On-premises Deployment', developer: '-', professional: '-', enterprise: '✓' }
]

const enterpriseFeatures = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'End-to-end encryption, role-based access controls, and comprehensive audit trails for enterprise-grade security.',
    metrics: ['Bank-Grade Security', '256-bit Encryption']
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'White-glove support from protocol engineers, solution architects, and customer success managers.',
    metrics: ['Priority Response', '24/7 Availability']
  },
  {
    icon: BarChart,
    title: 'Performance Monitoring',
    description: 'Service level agreements with automatic failover, edge deployment, and performance monitoring.',
    metrics: ['High availability', 'Low latency']
  },
  {
    icon: Globe,
    title: 'Future-Proof Platform',
    description: 'Automatic protocol updates, backwards compatibility, and integration with agent standards.',
    metrics: ['Zero Downtime Updates', 'Full Compatibility']
  }
]

const usagePricing = [
  {
    icon: DollarSign,
    title: 'API Calls',
    price: '$0.001',
    description: 'per additional call',
    details: ['Volume discounts available', 'No minimum commitments']
  },
  {
    icon: CheckCircle,
    title: 'Receipt Verifications',
    price: '$0.01',
    description: 'per additional verification',
    details: ['Sub-10ms processing', 'Cryptographically secure']
  },
  {
    icon: Users,
    title: 'Studio Seats',
    price: '$25',
    description: 'per additional seat/month',
    details: ['Full dashboard access', 'Role-based permissions']
  },
  {
    icon: Globe,
    title: 'Custom Adapters',
    price: 'Custom',
    description: 'pricing available',
    details: ['Bespoke integrations', 'Professional services']
  }
]

const faqItems = [
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Yes, you can change your plan at any time. Changes take effect at your next billing cycle, and we\'ll prorate any differences.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, debit cards, UPI, net banking, and digital wallets via Razorpay. Enterprise customers can also use wire transfers and purchase orders. Annual plans receive a 20% discount.'
  },
  {
    question: 'Is there a setup fee or long-term contract?',
    answer: 'No setup fees for any plan. Professional plans are month-to-month with no long-term contracts. Enterprise plans offer flexible terms.'
  },
  {
    question: 'How does the 14-day trial work?',
    answer: 'Start with full Professional features immediately. No credit card required until trial ends. Easily upgrade, downgrade, or cancel anytime.'
  },
  {
    question: 'What\'s included in enterprise support?',
    answer: '24/7 dedicated support team, priority response, dedicated customer success manager, professional services, and training programs.'
  },
  {
    question: 'Can I deploy on-premises?',
    answer: 'Yes, Enterprise plans include on-premises, private cloud, and hybrid deployment options with the same features and support.'
  },
  {
    question: 'How do volume discounts work?',
    answer: 'Enterprise customers receive custom pricing based on volume commitments. Contact our sales team for a personalized quote.'
  },
  {
    question: 'What about compliance and security?',
    answer: 'All plans include data encryption and audit trails. Enterprise plans add advanced security features and custom compliance support.'
  }
]

export default function PricingPage() {
  const [apiCalls, setApiCalls] = useState(100000)
  const [currentCost, setCurrentCost] = useState(0.005)

  const calculateSavings = () => {
    const currentMonthly = apiCalls * currentCost
    const originaryMonthly = 199 // Base cost assumption
    const savings = currentMonthly - originaryMonthly
    return { currentMonthly, originaryMonthly, savings }
  }

  const { currentMonthly, originaryMonthly, savings } = calculateSavings()

  return (
    <main>
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="container">
          <FadeIn className="hero-content text-center">
            <div className="pricing-badge mb-6">
              <span className="badge">
                <Award className="inline w-4 h-4 mr-1" />
                ENTERPRISE PRICING
              </span>
              <div className="trust-indicators mt-4">
                <div className="indicator">
                  <Shield className="indicator-icon" />
                  <span className="indicator-text">Enterprise Security</span>
                </div>
                <div className="indicator">
                  <BarChart className="indicator-icon" />
                  <span className="indicator-text">Enterprise SLA</span>
                </div>
              </div>
            </div>

            <span className="kicker">PRICING</span>
            <h1 className="display">Scale with confidence</h1>
            <p className="sub max-w-4xl mx-auto">
              Clear pricing for PEAC protocol implementation and receipt verification.
              Simple tiers with transparent costs and dedicated support.
            </p>

            <div className="hero-metrics grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="metric text-center">
                <span className="metric-value text-4xl font-bold text-gray-900">
                  <AnimatedCounter value={50} suffix="M+" />
                </span>
                <span className="metric-label block text-gray-600 mt-2">Customer transactions processed</span>
              </div>
              <div className="metric text-center">
                <span className="metric-value text-4xl font-bold text-gray-900">
                  <AnimatedCounter value={500} suffix="+" />
                </span>
                <span className="metric-label block text-gray-600 mt-2">Enterprise customers</span>
              </div>
              <div className="metric text-center">
                <span className="metric-value text-4xl font-bold text-gray-900">
                  <AnimatedCounter value={99.9} suffix="%" />
                </span>
                <span className="metric-label block text-gray-600 mt-2">Customer satisfaction</span>
              </div>
            </div>

            {/* ROI Calculator */}
            <ScaleIn delay={0.5} className="pricing-calculator max-w-2xl mx-auto mt-12">
              <div className="calculator-title text-xl font-semibold mb-6">ROI Calculator</div>
              <div className="calculator-inputs space-y-6">
                <div className="input-group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Monthly API calls</label>
                  <input
                    type="number"
                    value={apiCalls}
                    onChange={(e) => setApiCalls(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    min="0"
                  />
                </div>
                <div className="input-group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current cost per call</label>
                  <input
                    type="number"
                    value={currentCost}
                    onChange={(e) => setCurrentCost(Number(e.target.value))}
                    step="0.001"
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="calculator-results space-y-4">
                  <div className="result flex justify-between items-center py-2">
                    <span className="result-label text-gray-600">Current monthly cost:</span>
                    <span className="result-value text-xl font-bold text-gray-900">${currentMonthly.toFixed(2)}</span>
                  </div>
                  <div className="result flex justify-between items-center py-2">
                    <span className="result-label text-gray-600">Originary monthly cost:</span>
                    <span className="result-value text-xl font-bold text-gray-900">${originaryMonthly}</span>
                  </div>
                  <div className="result savings flex justify-between items-center py-2 border-t border-gray-200 pt-4">
                    <span className="result-label text-gray-600">Monthly savings:</span>
                    <span className="result-value text-2xl font-bold text-green-600">${savings.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </ScaleIn>
          </FadeIn>
        </div>
      </section>

      <section className="section pricing-section">
        <div className="container">
          <FadeIn className="pricing-header text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Plans that scale with your growth</h2>
            <p className="text-xl text-gray-600 mb-8">From startup to enterprise, we have the right plan for your agentic infrastructure needs</p>
            <div className="pricing-banner">
              <p>
                <strong>🚀 Simple Getting Started:</strong> Pay just $1 to get immediate access to any plan.
                Our team will personally help you integrate, go live, and purchase additional credits as needed.
                No complex pricing tiers – just pay for what you use.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="pricing-grid" staggerDelay={0.1}>
            {pricingTiers.map((tier, index) => {
              const IconComponent = tier.icon
              return (
                <StaggerItem key={tier.name}>
                  <HoverCard className={`pricing-card ${tier.popular ? 'featured' : ''}`}>
                    {tier.popular && (
                      <div className="popular-ribbon">Most Popular</div>
                    )}

                    <div className="card-header">
                      <div className={`tier-badge ${tier.badge.toLowerCase()}`}>
                        {tier.badge}
                      </div>
                      <div className="flex items-center gap-3 mt-4">
                        <IconComponent className="w-8 h-8 text-primary" />
                        <h3 className="text-2xl font-bold">{tier.name}</h3>
                      </div>
                      <div className="price-container">
                        <div className="price">
                          {typeof tier.price.amount === 'number' && (
                            <span className="currency">$</span>
                          )}
                          <span className="amount">{tier.price.amount}</span>
                          <span className="period">{tier.price.period}</span>
                        </div>
                        <div className="price-note">
                          {tier.name === 'Enterprise' ? 'Volume discounts available' : 'Scale with usage-based pricing'}
                        </div>
                      </div>
                      <p className="tier-desc">{tier.description}</p>
                    </div>

                    <div className="features-section">
                      <h4>{tier.name === 'Developer' ? 'Included features' : `Everything in ${tier.name === 'Professional' ? 'Developer' : 'Professional'}, plus:`}</h4>
                      <ul className="feature-list">
                        {tier.features.map((feature) => (
                          <li key={feature}>
                            <CheckCircle className="feature-icon w-5 h-5" />
                            <span className="feature-text">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="card-action">
                      {tier.name === 'Enterprise' ? (
                        <AnimatedButton variant="secondary" className="w-full">
                          Contact Sales
                        </AnimatedButton>
                      ) : (
                        <RazorpayButton />
                      )}
                      <div className="action-note">
                        {tier.name === 'Enterprise'
                          ? 'Talk to our enterprise team'
                          : (
                            <>
                              <strong>$1 starter fee</strong> gets you immediate access.<br />
                              Contact our team for additional credits & integration support.
                            </>
                          )
                        }
                      </div>
                    </div>
                  </HoverCard>
                </StaggerItem>
              )
            })}
          </StaggerChildren>

          {/* Feature Comparison Table */}
          <FadeIn className="feature-comparison" delay={0.3}>
            <h3>Detailed feature comparison</h3>
            <div className="comparison-table">
              <div className="table-header">
                <div className="feature-column">Features</div>
                <div className="plan-column">Developer</div>
                <div className="plan-column">Professional</div>
                <div className="plan-column">Enterprise</div>
              </div>
              <div className="table-body">
                {comparisonFeatures.map((feature) => (
                  <div key={feature.name} className="table-row">
                    <div className="feature-name">{feature.name}</div>
                    <div className="feature-value">{feature.developer}</div>
                    <div className="feature-value">{feature.professional}</div>
                    <div className="feature-value">{feature.enterprise}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Enterprise Benefits Section */}
          <FadeIn className="enterprise-benefits">
            <h2 className="text-4xl font-bold text-center mb-12">Why enterprises choose Originary</h2>
            <StaggerChildren className="benefits-grid" staggerDelay={0.1}>
              {enterpriseFeatures.map((benefit) => {
                const IconComponent = benefit.icon
                return (
                  <StaggerItem key={benefit.title}>
                    <HoverCard className="benefit-card">
                      <IconComponent className="benefit-icon" />
                      <h3>{benefit.title}</h3>
                      <p>{benefit.description}</p>
                      <div className="benefit-metrics">
                        {benefit.metrics.map((metric) => (
                          <span key={metric} className="metric">{metric}</span>
                        ))}
                      </div>
                    </HoverCard>
                  </StaggerItem>
                )
              })}
            </StaggerChildren>
          </FadeIn>

          {/* Comparison Section */}
          <FadeIn className="comparison-section">
            <div style={{ marginTop: '80px', marginBottom: '80px' }}>
            <h2 className="text-4xl font-bold text-center mb-4">How Originary Compares</h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Originary complements your existing infrastructure with verifiable receipts
            </p>

            <div className="comparison-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              marginTop: '48px'
            }}>
              {/* Originary vs DIY */}
              <HoverCard className="comparison-card">
                <div style={{ padding: '32px', background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '16px', color: '#111' }}>
                  Originary vs. DIY Solution
                </h3>
                <div style={{ marginBottom: '16px', color: '#635BFF', fontWeight: 500 }}>
                  Save 6-12 months of development
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <Check size={16} style={{ color: '#10B981', marginRight: '8px', marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                      Pre-built policy engine with PEAC protocol
                    </span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <Check size={16} style={{ color: '#10B981', marginRight: '8px', marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                      Native HTTP 402 payment rails (x402, Stripe)
                    </span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <Check size={16} style={{ color: '#10B981', marginRight: '8px', marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                      Cryptographic receipt generation & verification
                    </span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Check size={16} style={{ color: '#10B981', marginRight: '8px', marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                      Edge-ready with Cloudflare/Vercel integration
                    </span>
                  </li>
                </ul>
                </div>
              </HoverCard>

              {/* Originary vs API Gateways */}
              <HoverCard className="comparison-card">
                <div style={{ padding: '32px', background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '16px', color: '#111' }}>
                  Originary vs. API Gateways
                </h3>
                <div style={{ marginBottom: '16px', color: '#635BFF', fontWeight: 500 }}>
                  Adds verifiable proof layer
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <Check size={16} style={{ color: '#10B981', marginRight: '8px', marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                      Works with Kong, Tyk, Apigee, AWS API Gateway
                    </span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <Check size={16} style={{ color: '#10B981', marginRight: '8px', marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                      Portable receipts that verify outside platform
                    </span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <Check size={16} style={{ color: '#10B981', marginRight: '8px', marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                      Policy discovery via .well-known/peac.txt
                    </span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Check size={16} style={{ color: '#10B981', marginRight: '8px', marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                      Payment settlement proof in receipt
                    </span>
                  </li>
                </ul>
                </div>
              </HoverCard>

              {/* Originary vs Payment Processors */}
              <HoverCard className="comparison-card">
                <div style={{ padding: '32px', background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '16px', color: '#111' }}>
                  Originary vs. Payment-Only
                </h3>
                <div style={{ marginBottom: '16px', color: '#635BFF', fontWeight: 500 }}>
                  More than just billing
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <Check size={16} style={{ color: '#10B981', marginRight: '8px', marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                      Complements Stripe, x402, L402 payments
                    </span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <Check size={16} style={{ color: '#10B981', marginRight: '8px', marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                      Adds policy enforcement before payment
                    </span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <Check size={16} style={{ color: '#10B981', marginRight: '8px', marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                      Cryptographic proof of transaction
                    </span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Check size={16} style={{ color: '#10B981', marginRight: '8px', marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                      Compliance audit trail built-in
                    </span>
                  </li>
                </ul>
                </div>
              </HoverCard>
            </div>

            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <Link href="/docs/receipts" className="btn btn-secondary">
                Learn About PEAC Receipts
                <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </Link>
            </div>
            </div>
          </FadeIn>

          {/* Usage-based pricing details */}
          <FadeIn className="usage-pricing">
            <h2 className="text-4xl font-bold mb-4">Transparent usage-based pricing</h2>
            <p className="text-xl text-gray-600 mb-8">All plans include overage protection. Scale beyond your plan limits with predictable, cost-effective pricing:</p>

            <StaggerChildren className="usage-grid" staggerDelay={0.1}>
              {usagePricing.map((usage) => {
                const IconComponent = usage.icon
                return (
                  <StaggerItem key={usage.title}>
                    <HoverCard className="usage-card">
                      <IconComponent className="usage-icon" />
                      <h4>{usage.title}</h4>
                      <div className="usage-price">{usage.price}</div>
                      <p>{usage.description}</p>
                      <div className="usage-details">
                        {usage.details.map((detail) => (
                          <span key={detail}>{detail}</span>
                        ))}
                      </div>
                    </HoverCard>
                  </StaggerItem>
                )
              })}
            </StaggerChildren>
          </FadeIn>

          {/* FAQ Section */}
          <FadeIn className="faq-section">
            <h2 className="text-4xl font-bold text-center mb-12">Frequently asked questions</h2>
            <StaggerChildren className="faq-grid" staggerDelay={0.05}>
              {faqItems.map((faq) => (
                <StaggerItem key={faq.question}>
                  <div className="faq-item">
                    <h4>{faq.question}</h4>
                    <p>{faq.answer}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </FadeIn>

          {/* Enterprise CTA Section */}
          <ScaleIn className="enterprise-cta" delay={0.2}>
            <div className="cta-content">
              <div className="cta-main">
                <h2>Ready to scale your agentic infrastructure?</h2>
                <p>Get enterprise-grade infrastructure with dedicated performance monitoring, security, and support.</p>
                <div className="cta-stats">
                  <div className="stat">
                    <span className="stat-value">
                      <AnimatedCounter value={10} suffix="B+" />
                    </span>
                    <span className="stat-label">Monthly transactions</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">99.99%</span>
                    <span className="stat-label">Enterprise uptime</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">&lt; 1hr</span>
                    <span className="stat-label">Support response</span>
                  </div>
                </div>
              </div>
              <div className="cta-actions">
                <div className="action-group">
                  <RazorpayButton />
                  <div className="action-note">
                    <strong>$1 gets you started</strong> • Our team will help you integrate & scale
                  </div>
                </div>
                <div className="action-group">
                  <AnimatedButton variant="secondary" className="large">
                    Talk to Sales
                  </AnimatedButton>
                  <div className="action-note">Get custom enterprise pricing</div>
                </div>
              </div>
            </div>

            <div className="cta-contact">
              <h3>Talk to our team</h3>
              <div className="contact-options">
                <div className="contact-option">
                  <span className="contact-icon">📞</span>
                  <div>
                    <h4>Schedule a call</h4>
                    <p>Talk to a solution architect about your needs</p>
                  </div>
                </div>
                <div className="contact-option">
                  <span className="contact-icon">✉️</span>
                  <div>
                    <h4>Email us</h4>
                    <p>Get answers to your questions within 24 hours</p>
                  </div>
                </div>
                <div className="contact-option">
                  <span className="contact-icon">📚</span>
                  <div>
                    <h4>View documentation</h4>
                    <p>Explore our comprehensive developer guides</p>
                  </div>
                </div>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>
    </main>
  )
}