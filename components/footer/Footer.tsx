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
    fontSize: '13px',
    lineHeight: '1.4',
    transition: 'color 0.15s ease',
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
        borderRadius: '7px',
        background: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 600,
        fontSize: '13px',
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
    borderRadius: '6px',
    padding: '8px 14px',
    fontSize: '13px',
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'all 0.2s ease',
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
        <h4 style={titleStyle}>{group.title}</h4>
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
      style={{
        marginTop: '40px',
        paddingTop: '20px',
        borderTop: '1px solid var(--gray-200)',
      }}
    >
      <div
        className="footer-utility-bar"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        {/* Legal Links */}
        <div
          className="footer-legal-links"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          {FOOTER_LEGAL.map((link, index) => (
            <span key={link.href} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Link
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
              {index < FOOTER_LEGAL.length - 1 && (
                <span style={{ color: 'var(--gray-300)', fontSize: '11px' }}>·</span>
              )}
            </span>
          ))}
        </div>

        {/* Right: Machine-Readable + Social */}
        <div
          className="footer-right-links"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          {/* Machine-readable files */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            {FOOTER_MACHINE_READABLE.map((link, index) => (
              <span key={link.href} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <a
                  href={link.href}
                  style={{
                    color: 'var(--gray-400)',
                    textDecoration: 'none',
                    fontSize: '10px',
                    fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
                    letterSpacing: '0',
                    transition: 'color 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gray-600)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray-400)')}
                >
                  {link.label}
                </a>
                {index < FOOTER_MACHINE_READABLE.length - 1 && (
                  <span style={{ color: 'var(--gray-300)', fontSize: '10px' }}>·</span>
                )}
              </span>
            ))}
          </div>

          {/* Vertical separator */}
          <div
            style={{
              width: '1px',
              height: '12px',
              background: 'var(--gray-200)',
            }}
            aria-hidden="true"
          />

          {/* Social Links */}
          <div
            className="footer-social-links"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            {FOOTER_SOCIAL.map((link, index) => (
              <span key={link.href} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <a
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
                {index < FOOTER_SOCIAL.length - 1 && (
                  <span style={{ color: 'var(--gray-300)', fontSize: '11px' }}>·</span>
                )}
              </span>
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
  const year = new Date().getFullYear()

  return (
    <div
      className="brand-band"
      style={{
        marginTop: '48px',
        overflow: 'hidden',
        borderRadius: '20px',
        background: '#0a0a0a',
        color: 'white',
        position: 'relative',
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
                borderRadius: '8px',
                background: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: '#0a0a0a', fontWeight: 700, fontSize: '14px' }}>O</span>
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
              maxWidth: '400px',
              fontSize: '13px',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.6)',
              marginBottom: '24px',
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
              &copy; {year} Originary (Poem, Inc.) &middot; Delaware, USA
            </p>
            <p
              style={{
                margin: 0,
                maxWidth: '400px',
                fontSize: '10px',
                lineHeight: 1.5,
                color: 'rgba(255, 255, 255, 0.3)',
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
        background: 'linear-gradient(180deg, #fafafa 0%, #f5f5f7 100%)',
        borderTop: '1px solid var(--gray-200)',
        position: 'relative',
      }}
      role="contentinfo"
    >
      <div
        className="container"
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

      <style jsx>{`
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

        /* Desktop: show static, hide accordion */
        .footer-nav-desktop {
          display: block;
        }
        .footer-nav-mobile {
          display: none;
        }

        /* Tablet/Mobile: show accordion, hide static */
        @media (max-width: 768px) {
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
          /* Accordion icon rotation */
          .footer-nav-mobile[open] .footer-accordion-icon {
            transform: rotate(45deg);
          }
          .footer-accordion-icon {
            font-size: 16px;
            font-weight: 400;
            transition: transform 0.2s ease;
          }
          /* Hide default marker */
          .footer-nav-mobile summary::-webkit-details-marker {
            display: none;
          }
          .footer-utility-bar {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }
          .footer-right-links {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 10px !important;
          }
          .footer-right-links > div[aria-hidden] {
            display: none !important;
          }
        }

        /* Small mobile: centered layout */
        @media (max-width: 399px) {
          .footer-utility-bar {
            align-items: center !important;
            text-align: center;
          }
          .footer-legal-links {
            justify-content: center !important;
            flex-wrap: wrap !important;
          }
          .footer-right-links {
            align-items: center !important;
          }
          .footer-social-links {
            justify-content: center !important;
          }
        }

        /* Brand band responsive */
        @media (max-width: 768px) {
          .brand-band-inner {
            grid-template-columns: 1fr !important;
            padding: 32px 24px !important;
          }
          .brand-wordmark-large {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          .brand-band-inner {
            padding: 28px 20px !important;
          }
        }

        @media (max-width: 380px) {
          .brand-band-inner {
            padding: 24px 16px !important;
          }
          .brand-band-desc {
            font-size: 12px !important;
          }
        }
      `}</style>
    </footer>
  )
}
