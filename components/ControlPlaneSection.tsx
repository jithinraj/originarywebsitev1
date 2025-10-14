'use client'

import { useState } from 'react'
import { Shield, Zap, Database, BarChart, Terminal, FileText, Lock, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function ControlPlaneSection() {
  const [activeTab, setActiveTab] = useState<'policies' | 'settlement' | 'verification' | 'analytics'>('policies')

  const tabs: Array<{ id: 'policies' | 'settlement' | 'verification' | 'analytics'; label: string; icon: JSX.Element }> = [
    { id: 'policies', label: 'Policies', icon: <FileText size={18} /> },
    { id: 'settlement', label: 'Settlement', icon: <Zap size={18} /> },
    { id: 'verification', label: 'Verification', icon: <Shield size={18} /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart size={18} /> }
  ]

  const tabContent = {
    policies: {
      title: 'Declare once. Enforce everywhere.',
      description: 'Your policy file becomes the single source of truth for all agent interactions',
      features: [
        'Version control with rollback support',
        'A/B test different pricing models',
        'Granular permissions per agent type',
        'Auto-generate human-readable terms'
      ],
      code: `# peac.txt
version: 1.0
domain: publisher.com

policy:
  access: conditional
  attribution: required
  consent: opt-out
  privacy: standard

pricing:
  model: per-request
  amount: 0.002
  currency: USD
  settlement: x402`
    },
    settlement: {
      title: 'Multiple payment rails. One integration.',
      description: 'Accept payments via x402, Stripe, crypto, or custom billing adapters',
      features: [
        'Automatic retry with fallback providers',
        'Real-time balance tracking',
        'Batch settlement for efficiency',
        'Multi-currency support'
      ],
      code: `{
  "settlement": {
    "primary": "x402",
    "fallback": ["stripe", "usdc"],
    "batch_interval": 3600,
    "min_threshold": 0.10,
    "auto_convert": true
  },
  "receipt": {
    "id": "rcpt_8f2c45aa9d1e",
    "amount": 0.0025,
    "currency": "USD",
    "status": "settled"
  }
}`
    },
    verification: {
      title: 'Every request. Cryptographically proven.',
      description: 'Tamper-evident receipts provide audit trails for compliance and disputes',
      features: [
        'Ed25519 signatures on every receipt',
        'Merkle tree anchoring for bulk verify',
        'IPFS persistence for permanence',
        'Regulatory export in one click'
      ],
      code: `curl -X GET https://verify.originary.xyz/receipt \\
  -H "Receipt-ID: rcpt_8f2c45aa9d1e" \\

{
  "valid": true,
  "signature": "0x94cd...5a9b",
  "timestamp": "2024-03-21T10:42:00Z",
  "merkle_root": "0xf4a2...8c3d",
  "policy_hash": "sha256:7d865e95..."
}`
    },
    analytics: {
      title: 'Real-time insights. Historical proof.',
      description: 'Track agent behavior, revenue streams, and policy effectiveness',
      features: [
        'Live dashboard with drill-downs',
        'Export to BigQuery/Snowflake',
        'Anomaly detection alerts',
        'Revenue attribution reports'
      ],
      code: `{
  "analytics": {
    "period": "2024-03-21",
    "requests": 142857,
    "unique_agents": 89,
    "revenue": 357.14,
    "top_resources": [
      "/api/content/premium",
      "/data/realtime/feed"
    ],
    "compliance_rate": 0.9987
  }
}`
    }
  }

  return (
    <section
      className="control-plane-section"
      style={{
        padding: 'var(--space-24) 0',
        background: 'linear-gradient(180deg, var(--gray-50) 0%, var(--white) 100%)'
      }}
    >
      <div className="container">
        <div
          style={{
            textAlign: 'center',
            marginBottom: 'var(--space-16)'
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
              padding: 'var(--space-2) var(--space-4)',
              marginBottom: 'var(--space-4)',
              fontSize: 'var(--text-sm)',
              fontWeight: 500,
              color: 'var(--brand-primary)'
            }}
          >
            <Terminal size={16} />
            <span>Control Plane</span>
          </div>
          <h2
            style={{
              fontSize: 'var(--text-5xl)',
              fontWeight: 700,
              marginBottom: 'var(--space-6)'
            }}
          >
            One dashboard to rule them all
          </h2>
          <p
            style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--gray-600)',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.7
            }}
          >
            Manage policies, monitor settlements, verify receipts, and analyze performance. Everything you need to operate at scale.
          </p>
        </div>

        <div
          className="control-plane-demo"
          style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          {/* Tab Navigation */}
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-2)',
              marginBottom: 'var(--space-8)',
              borderBottom: '1px solid var(--gray-200)',
              justifyContent: 'center'
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  padding: 'var(--space-3) var(--space-6)',
                  background: 'transparent',
                  border: 'none',
                  color: activeTab === tab.id ? 'var(--brand-primary)' : 'var(--gray-600)',
                  fontSize: 'var(--text-base)',
                  fontWeight: activeTab === tab.id ? 600 : 500,
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all var(--duration-200) var(--ease-out)'
                }}
              >
                {tab.icon}
                {tab.label}
                {activeTab === tab.id && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-1px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'var(--brand-primary)'
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--space-12)',
              alignItems: 'center'
            }}
          >
            {/* Left: Description */}
            <div>
              <h3
                style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-4)'
                }}
              >
                {tabContent[activeTab].title}
              </h3>
              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--gray-600)',
                  marginBottom: 'var(--space-6)',
                  lineHeight: 1.6
                }}
              >
                {tabContent[activeTab].description}
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  marginBottom: 'var(--space-8)'
                }}
              >
                {tabContent[activeTab].features.map((feature, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-3)',
                      marginBottom: 'var(--space-3)'
                    }}
                  >
                    <CheckCircle
                      size={20}
                      style={{
                        color: 'var(--success)',
                        flexShrink: 0
                      }}
                    />
                    <span
                      style={{
                        fontSize: 'var(--text-base)',
                        color: 'var(--gray-700)'
                      }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/demo"
                className="btn btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)'
                }}
              >
                Try interactive demo
                <Lock size={16} />
              </Link>
            </div>

            {/* Right: Code Example */}
            <div
              style={{
                background: 'var(--gray-900)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-6)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Terminal Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  marginBottom: 'var(--space-4)'
                }}
              >
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#ff5f56'
                  }}
                />
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#ffbd2e'
                  }}
                />
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#27c93f'
                  }}
                />
              </div>

              {/* Code Content */}
              <pre
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--gray-100)',
                  lineHeight: 1.6,
                  margin: 0,
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word'
                }}
              >
                {tabContent[activeTab].code}
              </pre>

              {/* Copy Button */}
              <button
                onClick={() => navigator.clipboard.writeText(tabContent[activeTab].code)}
                style={{
                  position: 'absolute',
                  top: 'var(--space-4)',
                  right: 'var(--space-4)',
                  padding: 'var(--space-2) var(--space-3)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--gray-300)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all var(--duration-200) var(--ease-out)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                }}
              >
                Copy
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          style={{
            textAlign: 'center',
            marginTop: 'var(--space-16)',
            padding: 'var(--space-8)',
            background: 'var(--white)',
            borderRadius: 'var(--radius-2xl)',
            border: '1px solid var(--gray-200)'
          }}
        >
          <h3
            style={{
              fontSize: 'var(--text-2xl)',
              fontWeight: 700,
              marginBottom: 'var(--space-4)'
            }}
          >
            Ready to take control?
          </h3>
          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--gray-600)',
              marginBottom: 'var(--space-6)'
            }}
          >
            Deploy your first policy in 5 minutes. No credit card required.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-4)',
              justifyContent: 'center'
            }}
          >
            <Link
              href="/checkout/start"
              className="btn btn-primary btn-lg"
            >
              Start for $1
            </Link>
            <Link
              href="/developers"
              className="btn btn-secondary btn-lg"
            >
              View documentation
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .control-plane-demo > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}