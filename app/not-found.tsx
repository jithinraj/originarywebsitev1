import Link from 'next/link'
import type { CSSProperties } from 'react'
import { Nav, HomeFooter, PALETTE, PAGE_PAD, SANS, MONO } from '@/components/home'
import { WordmarkStream } from '@/components/home/motion/WordmarkStream'

const btnBase: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '12px 22px',
  borderRadius: '8px',
  fontFamily: SANS,
  fontSize: '15px',
  fontWeight: 500,
  textDecoration: 'none',
}

const primaryBtn: CSSProperties = {
  ...btnBase,
  background: PALETTE.ink,
  color: PALETTE.paper,
  border: `1px solid ${PALETTE.ink}`,
}

const secondaryBtn: CSSProperties = {
  ...btnBase,
  background: 'transparent',
  color: PALETTE.ink,
  border: `1px solid ${PALETTE.rule}`,
}

export default function NotFound() {
  return (
    <div
      style={{
        background: PALETTE.bg,
        color: PALETTE.ink,
        fontFamily: SANS,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Nav />
      <main
        id="main-content"
        role="main"
        style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: PAGE_PAD }}
      >
        <div style={{ maxWidth: '640px', textAlign: 'center', padding: '96px 0' }}>
          <div
            style={{
              fontFamily: MONO,
              fontSize: '13px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: PALETTE.faint,
              marginBottom: '20px',
            }}
          >
            404
          </div>
          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: 0,
              color: PALETTE.ink,
            }}
          >
            This page is not here.
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.6, color: PALETTE.muted, marginTop: '18px', marginBottom: '36px' }}>
            The record may have moved, or the link may be outdated.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" style={primaryBtn}>
              Go home
            </Link>
            <Link href="/peac" style={secondaryBtn}>
              View PEAC
            </Link>
            <Link href="/downloads" style={secondaryBtn}>
              Downloads
            </Link>
            <Link href="/contact" style={secondaryBtn}>
              Contact
            </Link>
          </div>
        </div>
      </main>
      <HomeFooter />
      <WordmarkStream />
    </div>
  )
}
