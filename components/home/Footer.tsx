import Link from 'next/link'
import { SANS } from './typography'
import { PALETTE, MAX_W, PAGE_PAD } from './palette'
import { Mono } from './atoms/Mono'
import { Wordmark } from './Nav'

const columns: Array<{ h: string; items: Array<{ label: string; href: string; external?: boolean }> }> = [
  {
    h: 'Originary',
    items: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'PEAC', href: '/peac' },
      { label: 'Downloads', href: '/downloads' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    h: 'Trust',
    items: [
      { label: 'Trust', href: '/trust' },
      { label: 'Security', href: '/security' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Imprint', href: '/legal/imprint' },
    ],
  },
  {
    h: 'Resources',
    items: [
      { label: 'Blog', href: '/blog' },
      { label: 'Learn', href: '/learn' },
    ],
  },
  {
    h: 'External',
    items: [
      { label: 'GitHub', href: 'https://github.com/peacprotocol/peac', external: true },
      { label: 'X', href: 'https://x.com/originaryx', external: true },
    ],
  },
]

export function HomeFooter() {
  return (
    <footer
      style={{
        borderTop: `1px solid ${PALETTE.hairline}`,
        marginTop: 0,
        padding: `40px ${PAGE_PAD}`,
        background: PALETTE.bg,
      }}
    >
      <div
        style={{
          maxWidth: MAX_W,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 48,
          flexWrap: 'wrap',
        }}
      >
        <div>
          <Wordmark />
          <p
            style={{
              margin: '14px 0 0 0',
              maxWidth: 460,
              fontFamily: SANS,
              fontSize: 13,
              lineHeight: 1.6,
              color: PALETTE.muted,
              textWrap: 'pretty',
            }}
          >
            Originary helps teams issue, inspect, and verify signed records for
            APIs, MCP tools, agent actions, gateway events, provisioning
            workflows, and agent-commerce flows, without exposing private logs
            or credentials.
          </p>
        </div>
        <div
          className="home-footer-cols"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(120px, auto))',
            gap: 48,
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
              <ul style={{ listStyle: 'none', padding: 0, margin: '14px 0 0 0' }}>
                {col.items.map((it) => (
                  <li key={it.label} style={{ marginBottom: 8 }}>
                    {it.external ? (
                      <a
                        href={it.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="home-footer-link"
                        style={{
                          fontFamily: SANS,
                          fontSize: 13,
                          color: PALETTE.muted,
                          textDecoration: 'none',
                        }}
                      >
                        {it.label}
                      </a>
                    ) : (
                      <Link
                        href={it.href}
                        className="home-footer-link"
                        style={{
                          fontFamily: SANS,
                          fontSize: 13,
                          color: PALETTE.muted,
                          textDecoration: 'none',
                        }}
                      >
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
      <div
        style={{
          maxWidth: MAX_W,
          margin: '40px auto 0 auto',
          paddingTop: 24,
          borderTop: `1px solid ${PALETTE.hairline}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        <Mono size={11} color={PALETTE.muted} style={{ letterSpacing: '0.02em' }}>
          © 2025-2026 Originary, a brand of Poem, Inc. All rights reserved except where otherwise licensed.
        </Mono>
        <p
          style={{
            margin: 0,
            maxWidth: 760,
            fontFamily: SANS,
            fontSize: 13,
            lineHeight: 1.65,
            color: PALETTE.muted,
            textWrap: 'pretty',
          }}
        >
          Originary publishes and maintains PEAC Protocol, open-source software
          for portable, verifiable interaction records.
        </p>
        <Mono size={11} color={PALETTE.faint} style={{ marginTop: 4 }}>
          portable · verifiable · independent
        </Mono>
      </div>
    </footer>
  )
}
