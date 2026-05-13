import Link from 'next/link'
import { SANS } from './typography'
import { PALETTE, MAX_W, PAGE_PAD } from './palette'
import { Mono } from './atoms/Mono'
import { Wordmark } from './Nav'

const columns: Array<{ h: string; items: Array<{ label: string; href: string; external?: boolean }> }> = [
  {
    h: 'Originary',
    items: [
      { label: 'How it works', href: '/#how-it-works' },
      { label: 'Use cases', href: '/#use-cases' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    h: 'Resources',
    items: [
      { label: 'Downloads', href: '/downloads' },
      { label: 'PEAC Protocol', href: '/peac' },
      { label: 'GitHub', href: 'https://github.com/peacprotocol/peac', external: true },
    ],
  },
  {
    h: 'Company',
    items: [
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
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
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(120px, auto))',
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
