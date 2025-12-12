'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Shield, FileCode, Globe, Activity, Zap, Lock } from 'lucide-react'

export default function BentoFeatures() {
  return (
    <section
      className="section"
      style={{
        background: 'var(--gray-50)',
        paddingTop: 'var(--space-20)',
        paddingBottom: 'var(--space-20)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: 'var(--space-12)'
          }}
        >
          <span className="badge-status" style={{ marginBottom: 'var(--space-4)' }}>
            FEATURES
          </span>
          <h2
            className="tracking-tight"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              marginBottom: 'var(--space-4)',
              color: 'var(--gray-900)'
            }}
          >
            Policy, payments, and proof in one platform
          </h2>
          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--gray-600)',
              maxWidth: '700px',
              margin: '0 auto'
            }}
          >
            Declare terms, gate access, and verify every AI interaction with signed receipts.
          </p>
        </div>

        {/* Bento Grid - Main Cards */}
        <div className="bento-grid">
          {/* Large Card - Trace Analytics */}
          <BentoCard
            className="bento-large"
            title="Real-time Bot Analytics"
            description="See every AI crawler, agent, and bot hitting your endpoints. Filter by type, block bad actors, and analyze traffic patterns."
            icon={<Activity size={24} />}
            href="/trace"
            linkText="Explore Trace"
          >
            <TrafficGraph />
          </BentoCard>

          {/* Medium Card - Declare */}
          <BentoCard
            className="bento-medium"
            title="Policy as Code"
            description="Define your AI policy once. Export to AIPREF, peac.txt, and robots.txt automatically."
            icon={<FileCode size={24} />}
            href="/declare"
            linkText="Try Declare"
          >
            <CodePreview />
          </BentoCard>
        </div>

        {/* Small Cards Row - 4 in a row */}
        <div className="bento-small-row">
          {/* Small Card - Global */}
          <BentoCard
            className="bento-small"
            title="Global Network"
            description="Edge-deployed verification across 300+ locations."
            icon={<Globe size={24} />}
            href="/cloud"
            linkText="View coverage"
          >
            <GlobalMap />
          </BentoCard>

          {/* Small Card - Payments */}
          <BentoCard
            className="bento-small"
            title="HTTP 402 Payments"
            description="HTTP 402 payments for machine payable APIs with x402 today and i402 on the roadmap."
            icon={<Zap size={24} />}
            href="/integrations/x402"
            linkText="Learn more"
          >
            <PaymentFlow />
          </BentoCard>

          {/* Small Card - Security */}
          <BentoCard
            className="bento-small"
            title="Cryptographic Receipts"
            description="Ed25519 signed proofs for every transaction."
            icon={<Lock size={24} />}
            href="/receipts"
            linkText="View docs"
          >
            <SecurityBadge />
          </BentoCard>

          {/* Small Card - Shield */}
          <BentoCard
            className="bento-small"
            title="Evidence-Ready"
            description="Built-in audit trails and policy hooks so you can prove what happened."
            icon={<Shield size={24} />}
            href="/trust"
            linkText="Trust center"
          >
            <ComplianceBadge />
          </BentoCard>
        </div>
      </div>
    </section>
  )
}

function BentoCard({
  className = '',
  title,
  description,
  icon,
  href,
  linkText,
  children
}: {
  className?: string
  title: string
  description: string
  icon: React.ReactNode
  href: string
  linkText: string
  children?: React.ReactNode
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={href}
      className={`bento-item ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        cursor: 'pointer'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Visual Content */}
      {children && (
        <div
          className="bento-content"
          style={{
            flex: 1,
            marginBottom: 'var(--space-4)',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            background: 'var(--gray-100)',
            minHeight: className.includes('large') ? '240px' : className.includes('medium') ? '180px' : '100px'
          }}
        >
          {children}
        </div>
      )}

      {/* Text Content */}
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            marginBottom: 'var(--space-2)',
            color: 'var(--brand-primary)'
          }}
        >
          {icon}
          <h3
            style={{
              fontSize: 'var(--text-lg)',
              fontWeight: 600,
              color: 'var(--gray-900)'
            }}
          >
            {title}
          </h3>
        </div>

        <p
          style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--gray-600)',
            lineHeight: 1.6,
            marginBottom: 'var(--space-3)'
          }}
        >
          {description}
        </p>

        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: 'var(--text-sm)',
            fontWeight: 600,
            color: 'var(--brand-primary)',
            transition: 'gap 0.2s ease'
          }}
        >
          {linkText}
          <ArrowRight
            size={14}
            style={{
              transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
              transition: 'transform 0.2s ease'
            }}
          />
        </span>
      </div>
    </Link>
  )
}

// Mini visualizations for bento cards
function TrafficGraph() {
  const [data, setData] = useState<number[]>([])

  useEffect(() => {
    // Generate initial data
    const initial = Array.from({ length: 24 }, () => Math.random() * 80 + 20)
    setData(initial)

    // Animate data
    const interval = setInterval(() => {
      setData(prev => {
        const newData = [...prev.slice(1), Math.random() * 80 + 20]
        return newData
      })
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        padding: 'var(--space-4)',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 'var(--space-3)'
        }}
      >
        <span className="label-mono">Live traffic - example</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span className="pulse-dot" />
          <span style={{ fontSize: '11px', color: 'var(--success)', fontWeight: 500 }}>
            2.4k req/s
          </span>
        </div>
      </div>

      {/* Graph */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'flex-end',
          gap: '2px'
        }}
      >
        {data.map((value, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: `${value}%`,
              background: i === data.length - 1
                ? 'var(--brand-primary)'
                : 'var(--gray-300)',
              borderRadius: '2px 2px 0 0',
              transition: 'height 0.3s ease'
            }}
          />
        ))}
      </div>

      {/* Blocked indicator */}
      <div
        style={{
          marginTop: 'var(--space-3)',
          padding: 'var(--space-2)',
          background: 'rgba(255, 71, 87, 0.1)',
          borderRadius: 'var(--radius-md)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-2)'
        }}
      >
        <div
          style={{
            width: '6px',
            height: '6px',
            background: 'var(--error)',
            borderRadius: '50%'
          }}
        />
        <span style={{ fontSize: '11px', color: 'var(--error)' }}>
          142 bots blocked today
        </span>
      </div>
    </div>
  )
}

function CodePreview() {
  return (
    <div className="code-block-luxury" style={{ height: '100%', borderRadius: 0 }}>
      <div className="code-block-header">
        <div className="code-block-dots">
          <span className="code-block-dot code-block-dot-red" />
          <span className="code-block-dot code-block-dot-yellow" />
          <span className="code-block-dot code-block-dot-green" />
        </div>
        <span className="code-block-filename">peac.txt</span>
      </div>
      <div className="code-block-body" style={{ fontSize: '11px' }}>
        <pre style={{ margin: 0 }}>
          <code>
{`# AI Agent Policy
User-agent: GPT-*
Allow: /api/public
Disallow: /api/admin
Price: $0.001/request

User-agent: Claude-*
Allow: /
Rate-limit: 100/min`}
          </code>
        </pre>
      </div>
    </div>
  )
}

function GlobalMap() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, var(--gray-100) 0%, var(--gray-200) 100%)'
      }}
    >
      {/* Simplified world map dots */}
      {[
        { x: 20, y: 30 }, { x: 25, y: 35 },
        { x: 50, y: 25 }, { x: 55, y: 30 },
        { x: 75, y: 35 }, { x: 80, y: 40 },
        { x: 35, y: 60 }, { x: 85, y: 55 }
      ].map((pos, i) => (
        <div
          key={i}
          className="pulse-live"
          style={{
            position: 'absolute',
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            width: '8px',
            height: '8px',
            background: 'var(--brand-primary)',
            borderRadius: '50%',
            animationDelay: `${i * 0.2}s`
          }}
        />
      ))}
      <div
        style={{
          position: 'absolute',
          bottom: 'var(--space-2)',
          left: 'var(--space-2)',
          fontSize: '10px',
          color: 'var(--gray-500)'
        }}
      >
        300+ edge locations
      </div>
    </div>
  )
}

function PaymentFlow() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-4)'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-2)'
        }}
      >
        <div
          style={{
            padding: 'var(--space-2)',
            background: 'var(--white)',
            borderRadius: 'var(--radius-md)',
            fontSize: '12px',
            fontWeight: 600
          }}
        >
          402
        </div>
        <ArrowRight size={16} style={{ color: 'var(--gray-400)' }} />
        <div
          style={{
            padding: 'var(--space-2)',
            background: 'var(--success)',
            color: 'white',
            borderRadius: 'var(--radius-md)',
            fontSize: '12px',
            fontWeight: 600
          }}
        >
          200
        </div>
      </div>
    </div>
  )
}

function SecurityBadge() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-4)'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-2)'
        }}
      >
        <Lock size={24} style={{ color: 'var(--brand-primary)' }} />
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: 'var(--gray-500)'
          }}
        >
          Ed25519
        </span>
      </div>
    </div>
  )
}

function ComplianceBadge() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-4)'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-2)'
        }}
      >
        <Shield size={24} style={{ color: 'var(--success)' }} />
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: 'var(--gray-500)'
          }}
        >
          Audit trails
        </span>
      </div>
    </div>
  )
}
