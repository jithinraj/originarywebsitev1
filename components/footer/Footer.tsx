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
    color: 'var(--text-secondary)',
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
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
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
      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
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
        background: 'var(--accent-brand)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--white)',
        fontWeight: 600,
        fontSize: 'var(--text-sm)',
        boxShadow: '0 0 20px -5px var(--accent-brand-glow)',
      }}
      aria-hidden="true"
    >
      O
    </div>
  )
}

// ============================================================================
// Layer A: Logo + 5-column Navigation Grid
// ============================================================================

function FooterNavGroup({ group }: { group: FooterGroup }) {
  const titleStyle: React.CSSProperties = {
    fontSize: '10px',
    fontWeight: 600,
    color: 'var(--text-muted)',
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
    <div
      className="footer-layer-a"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '32px',
      }}
    >
      {/* Logo + description */}
      <div
        className="footer-brand-col"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
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
          }}
          aria-label="Originary home"
        >
          <LogoMark />
          <span
            style={{
              color: 'var(--text-primary)',
              fontWeight: 600,
              fontSize: 'var(--text-base)',
              letterSpacing: '-0.01em',
            }}
          >
            Originary
          </span>
        </Link>
        <p
          style={{
            color: 'var(--text-tertiary)',
            fontSize: 'var(--text-sm)',
            maxWidth: '320px',
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          Open standard for verifiable interaction records.
        </p>
        <a
          href="mailto:contact@originary.xyz"
          style={{
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            fontSize: '13px',
            fontFamily: 'var(--font-mono)',
            transition: 'color 0.15s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
        >
          contact@originary.xyz
        </a>
      </div>

      {/* Navigation Grid - 5 balanced columns */}
      <div
        className="footer-nav-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
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
        borderTop: '1px solid var(--border-default)',
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
                  color: 'var(--text-tertiary)',
                  textDecoration: 'none',
                  fontSize: '11px',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-tertiary)')}
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
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    fontSize: '10px',
                    fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
                    transition: 'color 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-tertiary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div style={{ width: '1px', height: '12px', background: 'var(--border-default)' }} aria-hidden="true" />

            {/* Social */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {FOOTER_SOCIAL.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--text-tertiary)',
                    textDecoration: 'none',
                    fontSize: '11px',
                    fontWeight: 500,
                    transition: 'color 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-tertiary)')}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="footer-utility-mobile">
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
// Layer C: Brand Band (compact)
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
      {/* Gradient mesh */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 50% at 20% 100%, var(--accent-brand-muted) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 0%, var(--accent-brand-subtle) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      <div
        className="brand-band-inner"
        style={{
          position: 'relative',
          padding: '32px 32px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: '12px',
                color: 'var(--text-muted)',
              }}
            >
              &copy; 2025 - {currentYear} Originary (Poem, Inc.) &middot; Delaware, USA
            </p>
            <p
              style={{
                margin: 0,
                fontSize: '11px',
                lineHeight: 1.5,
                color: 'var(--text-muted)',
              }}
            >
              In the U.S., &lsquo;Originary&rsquo; is used by Poem, Inc. as a brand for its AI infrastructure software and tools for AI agents. Poem, Inc. is not affiliated with Originary Inc.
            </p>
            <p
              style={{
                margin: 0,
                maxWidth: '100%',
                fontSize: '10px',
                lineHeight: 1.5,
                color: 'var(--text-muted)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
              }}
            >
              PEAC Protocol is an open standard stewarded by Originary and the open-source community.
            </p>
          </div>
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
        background: 'var(--surface-elevated)',
        borderTop: '1px solid var(--border-default)',
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
        <LayerA />
        <LayerB />
        <LayerC />
      </div>

      <style jsx global>{`
        /* Desktop: logo left, grid right */
        @media (min-width: 900px) {
          .footer-layer-a {
            grid-template-columns: 240px 1fr !important;
          }
        }

        /* Desktop: 5 columns */
        @media (min-width: 900px) {
          .footer-nav-grid {
            grid-template-columns: repeat(5, minmax(0, 1fr)) !important;
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

          .footer-layer-a {
            gap: 24px !important;
          }

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
            border-bottom: 1px solid var(--border-default);
            padding: 14px 0;
          }
          .footer-nav-group:first-child {
            border-top: 1px solid var(--border-default);
          }
          .footer-nav-mobile[open] .footer-accordion-icon {
            transform: rotate(45deg);
          }
          .footer-accordion-icon {
            font-size: var(--text-base);
            font-weight: 400;
            transition: transform 0.2s ease;
          }
          .footer-nav-mobile summary::-webkit-details-marker {
            display: none;
          }

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
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.08em;
          }
          .footer-mobile-links {
            display: flex;
            flex-wrap: wrap;
            gap: 8px 16px;
          }
          .footer-mobile-link {
            color: var(--text-secondary);
            text-decoration: none;
            font-size: 13px;
            line-height: 1.4;
          }
          .footer-mobile-link-mono {
            font-family: var(--font-jetbrains-mono), ui-monospace, monospace;
            font-size: 11px;
            color: var(--text-tertiary);
          }

          .brand-band {
            border-radius: 16px !important;
            margin-top: 32px !important;
          }
          .brand-band-inner {
            padding: 24px 20px !important;
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
            padding: 20px 16px !important;
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
            padding: 18px 14px !important;
          }
        }

        @media (max-width: 320px) {
          .brand-band-inner {
            padding: 16px 12px !important;
          }
        }
      `}</style>
    </footer>
  )
}
