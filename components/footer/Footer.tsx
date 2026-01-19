'use client'

import Link from 'next/link'
import {
  FOOTER_NAV_GROUPS,
  FOOTER_LEGAL,
  FOOTER_MACHINE_READABLE,
  FOOTER_SOCIAL,
  type FooterGroup,
} from './footer.links'

// ============================================================================
// Shared Components
// ============================================================================

function FooterNavLink({
  href,
  children,
  external,
}: {
  href: string
  children: React.ReactNode
  external?: boolean
}) {
  const baseStyle: React.CSSProperties = {
    color: 'var(--gray-600)',
    textDecoration: 'none',
    fontSize: 'var(--text-sm)',
    lineHeight: '1.4',
    transition: 'color var(--duration-150) ease',
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={baseStyle}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gray-900)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray-600)')}
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      href={href}
      prefetch={false}
      style={baseStyle}
      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gray-900)')}
      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray-600)')}
    >
      {children}
    </Link>
  )
}

function LogoMark() {
  return (
    <div
      style={{
        width: '28px',
        height: '28px',
        borderRadius: 'var(--radius-lg)',
        background: 'var(--gray-950)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--white)',
        fontWeight: 600,
        fontSize: 'var(--text-sm)',
      }}
      aria-hidden="true"
    >
      O
    </div>
  )
}

function PrimaryCta({
  href,
  children,
  variant = 'solid',
}: {
  href: string
  children: React.ReactNode
  variant?: 'solid' | 'ghost'
}) {
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'var(--radius-md)',
    padding: 'var(--space-2) var(--space-3)',
    fontSize: 'var(--text-sm)',
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'all var(--duration-200) ease',
  }

  const variantStyle: React.CSSProperties =
    variant === 'solid'
      ? {
          background: 'var(--gray-900)',
          color: 'white',
          border: 'none',
        }
      : {
          background: 'transparent',
          color: 'var(--gray-900)',
          border: '1px solid var(--gray-200)',
        }

  return (
    <Link
      href={href}
      prefetch={false}
      style={{ ...baseStyle, ...variantStyle }}
      onMouseEnter={(e) => {
        if (variant === 'solid') {
          e.currentTarget.style.background = 'var(--gray-800)'
        } else {
          e.currentTarget.style.background = 'var(--gray-50)'
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'solid') {
          e.currentTarget.style.background = 'var(--gray-900)'
        } else {
          e.currentTarget.style.background = 'transparent'
        }
      }}
    >
      {children}
    </Link>
  )
}

// ============================================================================
// Layer A: Footer Hero + Navigation Grid
// ============================================================================

function FooterNavGroup({ group }: { group: FooterGroup }) {
  const titleStyle: React.CSSProperties = {
    fontSize: '10px',
    fontWeight: 600,
    color: 'var(--gray-500)',
    marginBottom: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  }

  const listContent = (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {group.links.map((link) => (
        <li key={link.href} style={{ marginBottom: '8px' }}>
          <FooterNavLink href={link.href} external={link.external}>
            {link.label}
          </FooterNavLink>
        </li>
      ))}
    </ul>
  )

  return (
    <nav className={`footer-nav-group footer-nav-${group.id}`} aria-label={`${group.title} links`}>
      {/* Desktop: static display */}
      <div className="footer-nav-desktop">
        <span style={titleStyle}>{group.title}</span>
        {listContent}
      </div>
      {/* Mobile: collapsible accordion */}
      <details className="footer-nav-mobile">
        <summary
          style={{
            ...titleStyle,
            marginBottom: 0,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            listStyle: 'none',
          }}
        >
          {group.title}
          <span className="footer-accordion-icon" aria-hidden="true">+</span>
        </summary>
        <div style={{ paddingTop: '12px' }}>{listContent}</div>
      </details>
    </nav>
  )
}

function LayerA() {
  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          paddingBottom: '32px',
          marginBottom: '32px',
          borderBottom: '1px solid var(--gray-200)',
        }}
      >
        <Link
          href="/"
          prefetch={false}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            marginBottom: '10px',
          }}
          aria-label="Originary home"
        >
          <LogoMark />
          <span
            style={{
              color: 'var(--gray-900)',
              fontWeight: 600,
              fontSize: '16px',
              letterSpacing: '-0.01em',
            }}
          >
            Originary
          </span>
        </Link>
        <p
          style={{
            color: 'var(--gray-500)',
            fontSize: '14px',
            maxWidth: '400px',
            lineHeight: 1.5,
            marginBottom: '16px',
          }}
        >
          Open infrastructure, tools, and systems for the agentic web.
        </p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <PrimaryCta href="/demo">View demo</PrimaryCta>
          <PrimaryCta href="/peac" variant="ghost">
            Read the spec
          </PrimaryCta>
        </div>
      </div>

      {/* Navigation Grid - 8 balanced columns */}
      <div
        className="footer-nav-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(8, minmax(0, 1fr))',
          gap: '20px',
          alignItems: 'start',
        }}
        role="navigation"
        aria-label="Footer navigation"
      >
        {FOOTER_NAV_GROUPS.map((group) => (
          <FooterNavGroup key={group.id} group={group} />
        ))}
      </div>
    </div>
  )
}

// ============================================================================
// Layer B: Utility Bar
// ============================================================================

function LayerB() {
  return (
    <div
      className="footer-utility-wrapper"
      style={{
        marginTop: '40px',
        paddingTop: '20px',
        borderTop: '1px solid var(--gray-200)',
      }}
    >
      {/* Desktop layout */}
      <div className="footer-utility-desktop">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
          }}
        >
          {/* Legal Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {FOOTER_LEGAL.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                style={{
                  color: 'var(--gray-500)',
                  textDecoration: 'none',
                  fontSize: '11px',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gray-700)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray-500)')}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Machine-readable */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {FOOTER_MACHINE_READABLE.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    color: 'var(--gray-400)',
                    textDecoration: 'none',
                    fontSize: '10px',
                    fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
                    transition: 'color 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gray-600)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray-400)')}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div style={{ width: '1px', height: '12px', background: 'var(--gray-200)' }} aria-hidden="true" />

            {/* Social */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {FOOTER_SOCIAL.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--gray-500)',
                    textDecoration: 'none',
                    fontSize: '11px',
                    fontWeight: 500,
                    transition: 'color 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gray-800)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray-500)')}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile layout - completely separate structure */}
      <div className="footer-utility-mobile">
        {/* Legal section */}
        <div className="footer-mobile-section">
          <span className="footer-mobile-label">Legal</span>
          <div className="footer-mobile-links">
            {FOOTER_LEGAL.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                className="footer-mobile-link"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Machine-readable section */}
        <div className="footer-mobile-section">
          <span className="footer-mobile-label">Files</span>
          <div className="footer-mobile-links">
            {FOOTER_MACHINE_READABLE.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="footer-mobile-link footer-mobile-link-mono"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Social section */}
        <div className="footer-mobile-section">
          <span className="footer-mobile-label">Social</span>
          <div className="footer-mobile-links">
            {FOOTER_SOCIAL.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-mobile-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// Layer C: Brand Band
// ============================================================================

function LayerC() {
  const currentYear = new Date().getFullYear()

  return (
    <div
      className="brand-band"
      style={{
        marginTop: 'var(--space-12)',
        overflow: 'hidden',
        borderRadius: 'var(--radius-2xl)',
        background: 'var(--gray-950)',
        color: 'var(--white)',
        position: 'relative',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Noise texture overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.4,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          pointerEvents: 'none',
          mixBlendMode: 'overlay',
        }}
        aria-hidden="true"
      />

      {/* Gradient mesh */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 50% at 20% 100%, rgba(99, 91, 255, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 0%, rgba(99, 91, 255, 0.08) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      <div
        className="brand-band-inner"
        style={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '40px',
          padding: '48px 40px',
          alignItems: 'end',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* Left: Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Brand wordmark */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: 'var(--gray-950)', fontWeight: 700, fontSize: 'var(--text-sm)' }}>O</span>
            </div>
            <span
              style={{
                fontSize: '18px',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                color: 'white',
              }}
            >
              Originary
            </span>
          </div>

          <p
            className="brand-band-desc"
            style={{
              maxWidth: '100%',
              fontSize: '13px',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.6)',
              marginBottom: '24px',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
            }}
          >
            Verifiable receipts that prove what happened in an agent interaction: what was accessed,
            under which policy, and what evidence exists for payment and compliance.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: '12px',
                color: 'rgba(255, 255, 255, 0.5)',
              }}
            >
              &copy; 2025 - {currentYear} Originary (Poem, Inc.) &middot; Delaware, USA
            </p>
            <p
              style={{
                margin: 0,
                maxWidth: '100%',
                fontSize: '10px',
                lineHeight: 1.5,
                color: 'rgba(255, 255, 255, 0.3)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
              }}
            >
              In the U.S., &lsquo;Originary&rsquo; is used by Poem, Inc. as a brand for its AI
              infrastructure software and tools for the agentic web.
            </p>
          </div>
        </div>

        {/* Right: Large wordmark */}
        <div
          className="brand-wordmark-large"
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          }}
          aria-hidden="true"
        >
          <span
            style={{
              fontSize: 'clamp(64px, 9vw, 88px)',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              lineHeight: 0.9,
              color: 'rgba(255, 255, 255, 0.12)',
              userSelect: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Originary
          </span>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// Main Footer Component
// ============================================================================

export default function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, var(--gray-50) 0%, var(--gray-100) 100%)',
        borderTop: '1px solid var(--gray-200)',
        position: 'relative',
      }}
      role="contentinfo"
    >
      <div
        className="footer-container"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '48px 24px 40px',
        }}
      >
        {/* Layer A: Hero + Navigation Grid */}
        <LayerA />

        {/* Layer B: Utility Bar */}
        <LayerB />

        {/* Layer C: Brand Band */}
        <LayerC />
      </div>

      <style jsx global>{`
        /* Desktop: 8 columns */
        @media (min-width: 1200px) {
          .footer-nav-grid {
            grid-template-columns: repeat(8, minmax(0, 1fr)) !important;
          }
        }

        /* Large desktop: 4 columns */
        @media (max-width: 1199px) and (min-width: 900px) {
          .footer-nav-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
            gap: 28px 20px !important;
          }
        }

        /* Medium screens: 3 columns */
        @media (max-width: 899px) and (min-width: 769px) {
          .footer-nav-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            gap: 24px 16px !important;
          }
        }

        /* Desktop: show static nav, hide accordion */
        .footer-nav-desktop {
          display: block;
        }
        .footer-nav-mobile {
          display: none;
        }

        /* Desktop: show desktop utility, hide mobile utility */
        .footer-utility-desktop {
          display: block;
        }
        .footer-utility-mobile {
          display: none;
        }

        /* Tablet/Mobile breakpoint */
        @media (max-width: 768px) {
          .footer-container {
            padding: 32px 20px 32px !important;
          }

          /* Navigation: accordion mode */
          .footer-nav-desktop {
            display: none !important;
          }
          .footer-nav-mobile {
            display: block !important;
          }
          .footer-nav-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .footer-nav-group {
            border-bottom: 1px solid var(--gray-200);
            padding: 14px 0;
          }
          .footer-nav-group:first-child {
            border-top: 1px solid var(--gray-200);
          }
          .footer-nav-mobile[open] .footer-accordion-icon {
            transform: rotate(45deg);
          }
          .footer-accordion-icon {
            font-size: 16px;
            font-weight: 400;
            transition: transform 0.2s ease;
          }
          .footer-nav-mobile summary::-webkit-details-marker {
            display: none;
          }

          /* Utility bar: mobile layout */
          .footer-utility-desktop {
            display: none !important;
          }
          .footer-utility-mobile {
            display: flex !important;
            flex-direction: column;
            gap: 20px;
          }
          .footer-mobile-section {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }
          .footer-mobile-label {
            font-size: 10px;
            font-weight: 600;
            color: var(--gray-400);
            text-transform: uppercase;
            letter-spacing: 0.08em;
          }
          .footer-mobile-links {
            display: flex;
            flex-wrap: wrap;
            gap: 8px 16px;
          }
          .footer-mobile-link {
            color: var(--gray-600);
            text-decoration: none;
            font-size: 13px;
            line-height: 1.4;
          }
          .footer-mobile-link-mono {
            font-family: var(--font-jetbrains-mono), ui-monospace, monospace;
            font-size: 11px;
            color: var(--gray-500);
          }

          /* Brand band */
          .brand-band {
            border-radius: 16px !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            margin-top: 32px !important;
          }
          .brand-band-inner {
            grid-template-columns: 1fr !important;
            padding: 28px 20px !important;
            gap: 20px !important;
          }
          .brand-wordmark-large {
            display: none !important;
          }
        }

        /* Small mobile */
        @media (max-width: 480px) {
          .footer-container {
            padding: 28px 16px 28px !important;
          }
          .footer-mobile-links {
            gap: 6px 12px;
          }
          .footer-mobile-link {
            font-size: 12px;
          }
          .brand-band {
            border-radius: 12px !important;
            margin-top: 28px !important;
          }
          .brand-band-inner {
            padding: 24px 18px !important;
          }
          .brand-band-desc {
            font-size: 12px !important;
            line-height: 1.5 !important;
          }
        }

        /* Extra small mobile */
        @media (max-width: 380px) {
          .footer-container {
            padding: 24px 14px 24px !important;
          }
          .footer-utility-mobile {
            gap: 16px;
          }
          .footer-mobile-links {
            gap: 4px 10px;
          }
          .footer-mobile-link {
            font-size: 11px;
          }
          .brand-band {
            border-radius: 10px !important;
            margin-top: 24px !important;
          }
          .brand-band-inner {
            padding: 20px 16px !important;
          }
          .brand-band-desc {
            font-size: 11px !important;
          }
        }

        @media (max-width: 320px) {
          .brand-band-inner {
            padding: 16px 12px !important;
          }
          .brand-band-desc {
            font-size: 10px !important;
          }
        }
      `}</style>
    </footer>
  )
}
