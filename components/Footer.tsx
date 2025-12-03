'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, var(--gray-50) 0%, var(--white) 100%)',
        borderTop: '1px solid var(--gray-100)',
        marginTop: 'var(--space-32)'
      }}
      role="contentinfo"
    >
      {/* Main Footer Content */}
      <div className="container" style={{ padding: 'var(--space-20) var(--space-6)' }}>
        {/* Top Section - Logo and Tagline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: 'var(--space-16)',
            paddingBottom: 'var(--space-12)',
            borderBottom: '1px solid var(--gray-100)'
          }}
        >
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
              textDecoration: 'none',
              marginBottom: 'var(--space-4)'
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: 'var(--radius-xl)',
                background: 'var(--gradient-brand)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: 'var(--text-lg)',
                boxShadow: '0 4px 12px rgba(99, 91, 255, 0.3)'
              }}
            >
              O
            </div>
            <span
              style={{
                color: 'var(--gray-900)',
                fontWeight: 700,
                fontSize: 'var(--text-2xl)',
                letterSpacing: '-0.02em'
              }}
            >
              Originary
            </span>
          </Link>
          <p
            style={{
              color: 'var(--gray-500)',
              fontSize: 'var(--text-base)',
              maxWidth: '400px',
              lineHeight: 1.6
            }}
          >
            Receipts and policy infrastructure for the agentic web.
          </p>
        </div>

        {/* Navigation Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: 'var(--space-8)',
            marginBottom: 'var(--space-16)'
          }}
          className="footer-nav-grid"
        >
          <FooterSection
            title="Products"
            links={[
              { href: '/declare', label: 'Declare (Policy Kit)' },
              { href: '/trace', label: 'Trace' },
              { href: '/products/gateway-402', label: 'Gateway 402' },
              { href: '/products/verify', label: 'Verify API' },
              { href: '/products/studio', label: 'Studio' }
            ]}
          />

          <FooterSection
            title="Integrations"
            links={[
              { href: '/integrations', label: 'All integrations' },
              { href: '/integrations/x402', label: 'HTTP 402' },
              { href: '/integrations/mcp', label: 'MCP' },
              { href: '/integrations/acp', label: 'Agentic Commerce' },
              { href: '/integrations/a2a', label: 'A2A' },
              { href: '/integrations/aipref', label: 'AI Preferences' }
            ]}
          />

          <FooterSection
            title="Developers"
            links={[
              { href: '/developers', label: 'Documentation' },
              { href: '/downloads', label: 'Downloads' },
              { href: '/demo', label: 'Demo' },
              { href: '/peac', label: 'PEAC Protocol' },
              { href: '/receipts', label: 'Receipts' }
            ]}
          />

          <FooterSection
            title="Company"
            links={[
              { href: '/about', label: 'About' },
              { href: '/blog', label: 'Blog' },
              { href: '/contact', label: 'Contact' },
              { href: '/trust', label: 'Trust Center' },
              { href: '/legal/imprint', label: 'Imprint' }
            ]}
          />

          <FooterSection
            title="Open Source"
            links={[
              { href: 'https://github.com/peacprotocol/peac', label: 'PEAC Protocol', external: true },
              { href: 'https://github.com/peacprotocol/peac', label: 'Spec & SDKs', external: true },
              { href: 'https://github.com/peacprotocol/peac/tree/main/examples', label: 'Examples', external: true },
              { href: 'https://github.com/originaryx', label: 'GitHub', external: true }
            ]}
          />

          <FooterSection
            title="Connect"
            links={[
              { href: 'https://x.com/originaryx', label: 'X / Twitter', external: true },
              { href: 'https://www.linkedin.com/company/originary', label: 'LinkedIn', external: true },
              { href: 'https://bsky.app/profile/originary.bsky.social', label: 'Bluesky', external: true },
              { href: 'https://peacprotocol.substack.com', label: 'Substack', external: true }
            ]}
          />
        </div>

        {/* Bottom Bar - Clean & Premium */}
        <div
          style={{
            paddingTop: 'var(--space-10)',
            borderTop: '1px solid var(--gray-100)'
          }}
        >
          {/* Three Column Bottom Layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto 1fr',
              alignItems: 'center',
              gap: 'var(--space-8)',
              marginBottom: 'var(--space-8)'
            }}
            className="footer-bottom-grid"
          >
            {/* Left - Legal Links */}
            <div style={{ display: 'flex', gap: 'var(--space-5)', flexWrap: 'wrap' }}>
              <FooterBottomLink href="/terms">Terms</FooterBottomLink>
              <FooterBottomLink href="/privacy">Privacy</FooterBottomLink>
              <FooterBottomLink href="/security">Security</FooterBottomLink>
              <FooterBottomLink href="/trademark">Trademark</FooterBottomLink>
            </div>

            {/* Center - Status Badge */}
            <Link
              href="/status"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: 'linear-gradient(135deg, rgba(0, 200, 83, 0.06) 0%, rgba(0, 200, 83, 0.02) 100%)',
                border: '1px solid rgba(0, 200, 83, 0.12)',
                borderRadius: 'var(--radius-full)',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 200, 83, 0.1) 0%, rgba(0, 200, 83, 0.04) 100%)'
                e.currentTarget.style.borderColor = 'rgba(0, 200, 83, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 200, 83, 0.06) 0%, rgba(0, 200, 83, 0.02) 100%)'
                e.currentTarget.style.borderColor = 'rgba(0, 200, 83, 0.12)'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  background: '#00c853',
                  borderRadius: '50%',
                  boxShadow: '0 0 8px rgba(0, 200, 83, 0.6)',
                  animation: 'pulse 2s infinite'
                }}
              />
              <span style={{ fontSize: '13px', fontWeight: 500, color: '#00a843' }}>
                All systems operational
              </span>
            </Link>

            {/* Right - Technical Files */}
            <div style={{ display: 'flex', gap: 'var(--space-5)', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <FooterBottomLink href="/robots.txt">robots.txt</FooterBottomLink>
              <FooterBottomLink href="/.well-known/peac.txt">peac.txt</FooterBottomLink>
              <FooterBottomLink href="/.well-known/aipref.json">aipref.json</FooterBottomLink>
              <FooterBottomLink href="/sitemap.xml">sitemap.xml</FooterBottomLink>
            </div>
          </div>

          {/* Copyright Row - Centered */}
          <div
            className="footer-copyright"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--space-3)',
              textAlign: 'center'
            }}
          >
            <span style={{ color: 'var(--gray-400)', fontSize: 'var(--text-sm)', fontWeight: 500 }}>
              © 2025 Poem, Inc.
            </span>
            <p
              className="footer-trademark-notice"
              style={{
                color: 'var(--gray-500)',
                fontSize: 'var(--text-xs)',
                maxWidth: '600px',
                lineHeight: 1.7,
                margin: 0,
                padding: '0 var(--space-4)'
              }}
            >
              In the U.S., &lsquo;Originary&rsquo; is used by Poem, Inc. as a brand for its AI infrastructure software and tools for the agentic web. Poem, Inc. is not affiliated with Originary Inc.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1200px) {
          .footer-nav-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 900px) {
          .footer-nav-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .footer-bottom-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-6) !important;
            text-align: center;
          }
          .footer-bottom-grid > div {
            justify-content: center !important;
          }
        }
        @media (max-width: 480px) {
          .footer-nav-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}

function FooterSection({
  title,
  links
}: {
  title: string
  links: Array<{ href: string; label: string; external?: boolean }>
}) {
  return (
    <div>
      <h4
        style={{
          fontSize: 'var(--text-xs)',
          fontWeight: 600,
          color: 'var(--gray-400)',
          marginBottom: 'var(--space-4)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em'
        }}
      >
        {title}
      </h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {links.map((link, index) => {
          const linkProps = link.external
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {}

          return (
            <li key={`${link.href}-${index}`} style={{ marginBottom: 'var(--space-3)' }}>
              <Link
                href={link.href}
                {...linkProps}
                style={{
                  color: 'var(--gray-600)',
                  textDecoration: 'none',
                  fontSize: 'var(--text-sm)',
                  transition: 'color 0.15s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gray-900)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--gray-600)'}
              >
                {link.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function FooterBottomLink({
  href,
  children
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      style={{
        color: 'var(--gray-400)',
        textDecoration: 'none',
        fontSize: 'var(--text-xs)',
        transition: 'color 0.15s ease'
      }}
      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gray-600)'}
      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--gray-400)'}
    >
      {children}
    </Link>
  )
}
