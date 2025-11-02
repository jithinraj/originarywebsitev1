'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [analyticsConsent, setAnalyticsConsent] = useState<boolean | null>(null)

  useEffect(() => {
    // Check existing consent on mount
    const consent = localStorage.getItem('analytics-consent')
    setAnalyticsConsent(consent === 'true')
  }, [])

  const togglePrivacyChoices = () => {
    const newConsent = !analyticsConsent
    setAnalyticsConsent(newConsent)
    localStorage.setItem('analytics-consent', String(newConsent))

    // Reload to apply changes
    if (typeof window !== 'undefined') {
      window.location.reload()
    }
  }

  return (
    <footer
      style={{
        background: 'var(--gray-50)',
        borderTop: '1px solid var(--gray-200)',
        marginTop: 'var(--space-32)',
        padding: 'var(--space-24) 0'
      }}
      role="contentinfo"
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--space-12)',
            marginBottom: 'var(--space-16)'
          }}
        >
          <div style={{ maxWidth: '350px' }}>
            <Link
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                textDecoration: 'none',
                color: 'var(--gray-900)',
                fontWeight: 700,
                fontSize: 'var(--text-xl)',
                letterSpacing: '-0.02em',
                marginBottom: 'var(--space-4)'
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--gradient-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 'var(--text-sm)'
                }}
              >
                O
              </div>
              <span>Originary</span>
            </Link>
            <p
              style={{
                color: 'var(--gray-600)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-6)',
                fontSize: 'var(--text-base)'
              }}
            >
              Receipts for the Agentic Web.
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)',
                alignItems: 'flex-start'
              }}
            >
              <SocialLink
                href="https://peacprotocol.substack.com/p/building-next-web-together-standards-fair-ai-access"
                label="Read our blog"
              >
                Blog
              </SocialLink>
              <Link
                href="/ai"
                style={{
                  color: 'var(--gray-600)',
                  textDecoration: 'none',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 500,
                  transition: 'color var(--duration-200) var(--ease-out)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--brand-primary)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--gray-600)'
                }}
              >
                Originary & AI
              </Link>
              <Link
                href="/receipts"
                style={{
                  color: 'var(--gray-600)',
                  textDecoration: 'none',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 500,
                  transition: 'color var(--duration-200) var(--ease-out)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--brand-primary)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--gray-600)'
                }}
              >
                Receipts
              </Link>
              <Link
                href="/demo"
                style={{
                  color: 'var(--gray-600)',
                  textDecoration: 'none',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 500,
                  transition: 'color var(--duration-200) var(--ease-out)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--brand-primary)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--gray-600)'
                }}
              >
                Interactive Demo
              </Link>
            </div>
          </div>

          <FooterSection
            title="Products"
            links={[
              { href: '/products/peac', label: 'PEAC Core' },
              { href: '/products/verify', label: 'Verify API' },
              { href: '/products/gateway-402', label: 'Gateway 402' },
              { href: '/products/studio', label: 'Studio' },
              { href: '/products/adapters', label: 'Adapters' }
            ]}
          />

          <FooterSection
            title="Solutions"
            links={[
              { href: '/originary-for-ai/', label: 'Originary for AI' },
              { href: '/solutions/enterprises', label: 'Enterprises' },
              { href: '/solutions/ai-builders', label: 'AI Builders' },
              { href: '/solutions/publishers', label: 'Publishers' },
              { href: '/solutions/api-providers', label: 'API Providers' },
              { href: '/downloads', label: 'Downloads' }
            ]}
          />

          <FooterSection
            title="Standards"
            links={[
              { href: 'https://peacprotocol.org/', label: 'PEAC Protocol' },
              { href: '/docs/standards/x402', label: 'HTTP 402' },
              { href: '/docs/standards/a2a', label: 'Agent-to-Agent' },
              { href: '/docs/standards/mcp', label: 'Model Context Protocol' },
              { href: '/docs/standards/acp', label: 'Agentic Commerce' },
              { href: '/docs/standards/aipref', label: 'AI Preferences' }
            ]}
          />

          <FooterSection
            title="Company"
            links={[
              { href: '/company/about', label: 'About' },
              { href: '/company/contact', label: 'Contact' }
            ]}
          />
        </div>

        {/* Bottom Section */}
        <div
          style={{
            paddingTop: 'var(--space-12)',
            marginTop: 'var(--space-12)',
            borderTop: '1px solid var(--gray-200)'
          }}
        >
          {/* Main Bottom Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--space-8)',
              marginBottom: 'var(--space-8)'
            }}
          >
            {/* Company Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <span
                style={{
                  color: 'var(--gray-900)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600
                }}
              >
                Poem, Inc.
              </span>
              <span style={{ color: 'var(--gray-500)', fontSize: 'var(--text-xs)', lineHeight: 1.6 }}>
                Dover, Delaware
              </span>
              <span style={{ color: 'var(--gray-500)', fontSize: 'var(--text-xs)', lineHeight: 1.6 }}>
                United States
              </span>
            </div>

            {/* Contact */}
            <address style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', fontStyle: 'normal' }}>
              <span
                style={{
                  color: 'var(--gray-900)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600,
                  display: 'block',
                  marginBottom: 'var(--space-2)'
                }}
              >
                Contact
              </span>
              <a
                href="mailto:contact@originary.xyz"
                style={{
                  color: 'var(--gray-600)',
                  fontSize: 'var(--text-xs)',
                  textDecoration: 'none',
                  display: 'block',
                  marginBottom: 'var(--space-1)',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--gray-600)'}
              >
                contact@originary.xyz
              </a>
              <a
                href="tel:+14157070402"
                style={{
                  color: 'var(--gray-600)',
                  fontSize: 'var(--text-xs)',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--gray-600)'}
              >
                +1 415 707 0402
              </a>
            </address>

            {/* Technical */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <span
                style={{
                  color: 'var(--gray-900)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600
                }}
              >
                Technical
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <FooterLink href="/robots.txt" label="View robots.txt file">
                  robots.txt
                </FooterLink>
                <FooterLink href="/.well-known/peac.txt" label="View PEAC policy file">
                  peac.txt
                </FooterLink>
                <FooterLink href="/.well-known/aipref.json" label="View AI preferences file">
                  aipref.json
                </FooterLink>
                <FooterLink href="/.well-known/security.txt" label="View security.txt file">
                  security.txt
                </FooterLink>
              </div>
            </div>

            {/* Legal */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <span
                style={{
                  color: 'var(--gray-900)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600
                }}
              >
                Legal
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <FooterLink href="/terms" label="Terms of Service">
                  Terms
                </FooterLink>
                <FooterLink href="/privacy" label="Privacy Policy">
                  Privacy
                </FooterLink>
                <FooterLink href="/trademark" label="Trademark">
                  Trademark
                </FooterLink>
                <FooterLink href="/security" label="Security">
                  Security
                </FooterLink>
                <FooterLink href="/copyright" label="Copyright">
                  Copyright
                </FooterLink>
              </div>
            </div>

            {/* Resources */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <span
                style={{
                  color: 'var(--gray-900)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600
                }}
              >
                Resources
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <FooterLink href="/sitemap.xml" label="View XML sitemap">
                  sitemap.xml
                </FooterLink>
                <FooterLink href="/humans.txt" label="View humans.txt file">
                  humans.txt
                </FooterLink>
                <button
                  onClick={togglePrivacyChoices}
                  style={{
                    color: 'var(--gray-600)',
                    fontSize: 'var(--text-xs)',
                    textDecoration: 'none',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'color 0.2s ease',
                    fontWeight: 400
                  }}
                  aria-label="Toggle analytics consent"
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--gray-600)'}
                >
                  Privacy choices
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: 'var(--space-6)',
              borderTop: '1px solid var(--gray-100)',
              flexWrap: 'wrap',
              gap: 'var(--space-4)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
              <span
                style={{
                  color: 'var(--gray-500)',
                  fontSize: 'var(--text-xs)'
                }}
                role="contentinfo"
              >
                © 2025 Poem, Inc.
              </span>
              <span style={{ color: 'var(--gray-400)', fontSize: 'var(--text-xs)' }}>•</span>
              <span style={{ color: 'var(--gray-500)', fontSize: 'var(--text-xs)' }}>
                Originary™ is a trademark of Poem, Inc.
              </span>
            </div>
            <a
              href="https://peacprotocol.org"
              target="_blank"
              rel="noopener"
              style={{
                color: 'var(--gray-500)',
                fontSize: 'var(--text-xs)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--gray-500)'}
            >
              Built on PEAC Protocol
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterSection({
  title,
  links
}: {
  title: string;
  links: Array<{ href: string; label: string }>;
}) {
  return (
    <div>
      <h4
        style={{
          fontSize: 'var(--text-sm)',
          fontWeight: 600,
          color: 'var(--gray-900)',
          marginBottom: 'var(--space-4)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}
      >
        {title}
      </h4>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)'
        }}
        role="list"
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              style={{
                color: 'var(--gray-600)',
                textDecoration: 'none',
                fontSize: 'var(--text-sm)',
                transition: 'color var(--duration-200) var(--ease-out)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--gray-900)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--gray-600)'
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SocialLink({
  href,
  label,
  children
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        color: 'var(--gray-600)',
        textDecoration: 'none',
        fontSize: 'var(--text-sm)',
        fontWeight: 500,
        transition: 'color var(--duration-200) var(--ease-out)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'var(--brand-primary)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'var(--gray-600)'
      }}
    >
      {children}
    </a>
  )
}

function FooterLink({
  href,
  label,
  children
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      style={{
        color: 'var(--gray-500)',
        textDecoration: 'none',
        fontSize: 'var(--text-xs)',
        transition: 'color var(--duration-200) var(--ease-out)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'var(--gray-700)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'var(--gray-500)'
      }}
    >
      {children}
    </a>
  )
}