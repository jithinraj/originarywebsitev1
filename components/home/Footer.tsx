import Link from 'next/link'
import { SANS } from './typography'
import { PALETTE, MAX_W, PAGE_PAD } from './palette'
import { Mono } from './atoms/Mono'
import { Wordmark } from './Nav'
import { MarkGlyph, type MarkName } from './glyphs/MarkGlyphs'

const columns: Array<{
  h: string
  items: Array<{ label: string; href: string; external?: boolean; mark?: MarkName; emphasis?: boolean }>
}> = [
  {
    h: 'Product',
    items: [
      { label: 'Verification Pilot', href: '/product' },
      { label: 'Evidence case', href: '/evidence-case' },
      { label: 'Verify a Record', href: '/verify' },
      { label: 'Plans and pilot', href: '/pricing' },
      { label: 'Start a pilot', href: '/contact', emphasis: true },
    ],
  },
  {
    h: 'Use cases',
    items: [
      { label: 'Paid MCP and APIs', href: '/mcp', mark: 'link' },
      { label: 'Gateway decisions', href: '/ai-gateway', mark: 'valve' },
      { label: 'Paid APIs and agent commerce', href: '/agentic-commerce', mark: 'coin' },
      { label: 'Audit and incident handoff', href: '/audit-incident-handoff', mark: 'sealCheck' },
      { label: 'AI compliance evidence', href: '/ai-compliance', mark: 'scales' },
      { label: 'Provisioning', href: '/provisioning-records', mark: 'pipeline' },
      { label: 'Record Gallery', href: '/records', mark: 'ledger' },
    ],
  },
  {
    h: 'Developers',
    items: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'PEAC Protocol Downloads', href: '/downloads' },
      { label: 'PEAC Protocol', href: '/peac' },
      { label: 'Blog', href: '/blog' },
      { label: 'GitHub', href: 'https://github.com/peacprotocol/peac', external: true },
    ],
  },
  {
    h: 'Company',
    items: [
      { label: 'About Originary', href: '/about' },
      { label: 'Press Kit', href: '/press' },
      { label: 'Trust Center', href: '/trust' },
      { label: 'Security', href: '/security' },
      { label: 'Contact Originary', href: '/contact' },
    ],
  },
]

const legalLinks: Array<{ label: string; href: string }> = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Imprint', href: '/legal/imprint' },
  { label: 'Trademark', href: '/trademark' },
]

const linkStyle = {
  fontFamily: SANS,
  fontSize: 13,
  color: PALETTE.muted,
  textDecoration: 'none',
}

export function HomeFooter() {
  return (
    <footer
      style={{
        borderTop: `1px solid ${PALETTE.hairline}`,
        marginTop: 0,
        padding: `clamp(48px, 7vh, 72px) ${PAGE_PAD} 32px ${PAGE_PAD}`,
        background: PALETTE.bg,
      }}
    >
      <div
        style={{
          maxWidth: MAX_W,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.4fr) repeat(4, minmax(0, 1fr))',
          gap: 48,
          alignItems: 'start',
        }}
        className="home-footer-top"
      >
        <div style={{ minWidth: 0 }}>
          <Link href="/" aria-label="Originary home" style={{ display: 'inline-flex', color: 'inherit' }}>
            <Wordmark forceOpen />
          </Link>
          <p
            style={{
              margin: '14px 0 0 0',
              maxWidth: 400,
              fontFamily: SANS,
              fontSize: 13,
              lineHeight: 1.6,
              color: PALETTE.muted,
              textWrap: 'pretty',
            }}
          >
            Originary develops software for issuing, verifying, and packaging
            signed interaction records across organizational boundaries.
          </p>
          <p
            style={{
              margin: '16px 0 0 0',
              maxWidth: 400,
              fontFamily: SANS,
              fontSize: 12.5,
              lineHeight: 1.6,
              color: PALETTE.faint,
              textWrap: 'pretty',
            }}
          >
            Originary&trade; is Poem, Inc.&rsquo;s software and developer-tools
            brand. PEAC Protocol is open-source software published and maintained
            by Originary.
          </p>
        </div>
        <div
          className="home-footer-cols"
          style={{
            display: 'contents',
          }}
        >
          {columns.map((col) => (
            <div key={col.h}>
              <Mono
                size={11}
                color={PALETTE.faint}
                style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}
              >
                {col.h}
              </Mono>
              <ul style={{ listStyle: 'none', padding: 0, margin: '18px 0 0 0' }}>
                {col.items.map((it) => (
                  <li key={it.label} style={{ marginBottom: 10 }}>
                    {it.external ? (
                      <a
                        href={it.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="home-footer-link home-arrow-link"
                        style={linkStyle}
                      >
                        {it.label}
                      </a>
                    ) : (
                      <Link
                        href={it.href}
                        className="home-footer-link"
                        style={it.emphasis ? { ...linkStyle, color: PALETTE.ink, fontWeight: 500 } : linkStyle}
                      >
                        {it.mark ? (
                          <span className="home-footer-linkmark" aria-hidden>
                            <MarkGlyph name={it.mark} size={13} />
                          </span>
                        ) : null}
                        {it.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row: copyright left, social right */}
      <div
        style={{
          maxWidth: MAX_W,
          margin: '52px auto 0 auto',
          paddingTop: 24,
          borderTop: `1px solid ${PALETTE.hairline}`,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 18,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        className="home-footer-bottom"
        data-nosnippet
      >
        <Mono size={11} color={PALETTE.muted} style={{ letterSpacing: '0.02em', minWidth: 0 }}>
          © 2025-2026 Poem, Inc. · Originary™ is a trademark of Poem, Inc.
        </Mono>
        <div style={{ display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
          {legalLinks.map((l) => (
            <Link key={l.href} href={l.href} className="home-footer-link" style={{ ...linkStyle, fontSize: 12 }}>
              {l.label}
            </Link>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <a
            href="https://github.com/peacprotocol/peac"
            target="_blank"
            rel="noopener noreferrer"
            className="home-footer-icon"
            aria-label="PEAC Protocol on GitHub"
            title="GitHub"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
              <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38v-1.34c-2.22.48-2.69-1.07-2.69-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.05-.49.05-.49.81.06 1.23.83 1.23.83.72 1.22 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82a7.66 7.66 0 014 0c1.53-1.03 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.74.54 1.48v2.19c0 .21.15.46.55.38A8 8 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <a
            href="https://x.com/originaryx"
            target="_blank"
            rel="noopener noreferrer"
            className="home-footer-icon"
            aria-label="Originary on X"
            title="X"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>

      <div
        style={{
          maxWidth: MAX_W,
          margin: '14px auto 0 auto',
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: SANS,
            fontSize: 11.5,
            lineHeight: 1.55,
            color: PALETTE.faint,
          }}
        >
          Examples are interoperability surfaces, not partnership claims. All
          product names, logos, brands, and copyrights are property of their
          respective owners.
        </p>
      </div>
    </footer>
  )
}
