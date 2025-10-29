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
            </div>
          </div>

          <FooterSection
            title="Product"
            links={[
              { href: '/products/peac', label: 'PEAC Core' },
              { href: '/products/verify', label: 'Verify API' },
              { href: '/products/gateway-402', label: 'Gateway 402' },
              { href: '/products/studio', label: 'Studio' },
              { href: '/products/adapters', label: 'Adapters' },
              { href: '/receipts', label: 'Receipts' },
              { href: '/demo', label: 'Interactive Demo' }
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
            title="Company"
            links={[
              { href: '/company/about', label: 'About' },
              { href: '/company/contact', label: 'Contact' },
              { href: '/terms', label: 'Terms' },
              { href: '/privacy', label: 'Privacy' },
              { href: '/refund', label: 'Refund Policy' },
              { href: '/shipping', label: 'Shipping & Delivery' },
              { href: '/trademark', label: 'Trademark' },
              { href: '/security', label: 'Security' },
              { href: '/copyright', label: 'Copyright' }
            ]}
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 'var(--space-8)',
            marginTop: 'var(--space-8)',
            borderTop: '1px solid var(--gray-200)',
            flexWrap: 'wrap',
            gap: 'var(--space-4)'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
            <span
              style={{
                color: 'var(--gray-500)',
                fontSize: 'var(--text-sm)'
              }}
              role="contentinfo"
            >
              © 2025 Poem, Inc. All rights reserved.
            </span>
            <small style={{ color: 'var(--gray-500)', fontSize: 'var(--text-xs)', opacity: 0.7 }}>
              Operated by Poem, Inc.
            </small>
            <small style={{ color: 'var(--gray-500)', fontSize: 'var(--text-xs)', opacity: 0.7 }}>
              Mailing address: 1111B S Governors Ave, STE 40987, Dover, DE 19904, USA
            </small>
            <small style={{ color: 'var(--gray-500)', fontSize: 'var(--text-xs)', opacity: 0.7 }}>
              Phone: <a href="tel:+14157070402" style={{ color: 'inherit', textDecoration: 'underline' }}>+1 415 707 0402</a>
            </small>
            <small style={{ color: 'var(--gray-500)', fontSize: 'var(--text-xs)', opacity: 0.7 }}>
              Email: <a href="mailto:contact@originary.xyz" style={{ color: 'inherit', textDecoration: 'underline' }}>contact@originary.xyz</a>
            </small>
            <small style={{ color: 'var(--gray-500)', fontSize: 'var(--text-xs)', opacity: 0.7, marginTop: 'var(--space-1)' }}>
              Originary™ is a trademark of Poem, Inc.
            </small>
            <small style={{ color: 'var(--gray-500)', fontSize: 'var(--text-xs)', opacity: 0.7 }}>
              Powered by an <a
                href="https://peacprotocol.org"
                target="_blank"
                rel="noopener"
                style={{
                  color: 'inherit',
                  textDecoration: 'underline'
                }}
              >
                open protocol at peacprotocol.org
              </a>
            </small>
            <button
              onClick={togglePrivacyChoices}
              style={{
                color: 'var(--gray-600)',
                fontSize: 'var(--text-xs)',
                textDecoration: 'underline',
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                marginTop: 'var(--space-2)'
              }}
              aria-label="Toggle analytics consent"
            >
              Privacy choices {analyticsConsent === null ? '' : analyticsConsent ? '(Analytics enabled)' : '(Analytics disabled)'}
            </button>
          </div>
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-6)',
              flexWrap: 'wrap'
            }}
          >
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
            <FooterLink href="/sitemap.xml" label="View XML sitemap">
              sitemap.xml
            </FooterLink>
            <FooterLink href="/humans.txt" label="View humans.txt file">
              humans.txt
            </FooterLink>
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