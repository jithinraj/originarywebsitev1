'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { SANS } from './typography'
import { PALETTE, MAX_W, PAGE_PAD } from './palette'
import { OriginaryLogoMotion } from '@/components/brand/OriginaryLogoMotion'

const links: Array<{ label: string; href: string }> = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Downloads', href: '/downloads' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'PEAC', href: '/peac' },
  { label: 'Contact', href: '/contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Body scroll lock + Escape key while mobile menu is open.
  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header
      className="home-nav"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: scrolled || open ? 'rgba(244, 241, 234, 0.92)' : 'rgba(244, 241, 234, 0.85)',
        backdropFilter: 'saturate(140%) blur(8px)',
        WebkitBackdropFilter: 'saturate(140%) blur(8px)',
        borderBottom: `1px solid ${PALETTE.hairline}`,
        transition: 'background 200ms ease',
      }}
    >
      <a href="#main-content" className="home-skip-link">
        Skip to content
      </a>
      <div
        className="home-nav-inner"
        style={{
          maxWidth: MAX_W,
          margin: '0 auto',
          padding: `14px ${PAGE_PAD}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <Link
          href="/"
          aria-label="Originary"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: PALETTE.ink,
            flexShrink: 0,
          }}
        >
          <Wordmark />
        </Link>

        <nav
          className="home-nav-links"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 28,
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="home-nav-link"
              style={{
                fontFamily: SANS,
                fontSize: 13,
                color: PALETTE.muted,
                textDecoration: 'none',
                letterSpacing: '-0.005em',
                transition: 'color 160ms ease',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div
          className="home-nav-actions"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            flexShrink: 0,
          }}
        >
          <a
            href="https://github.com/peacprotocol/peac"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="PEAC Protocol on GitHub"
            className="home-nav-github"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 34,
              height: 34,
              color: PALETTE.muted,
              border: `1px solid ${PALETTE.rule}`,
              borderRadius: '50%',
              transition: 'color 160ms ease, border-color 160ms ease',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          <Link
            href="/#demo"
            className="home-nav-cta"
            style={{
              fontFamily: SANS,
              fontSize: 13,
              fontWeight: 500,
              color: PALETTE.ink,
              textDecoration: 'none',
              padding: '8px 14px',
              border: `1px solid ${PALETTE.rule}`,
              transition: 'background 160ms ease, color 160ms ease',
            }}
          >
            Request a demo
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="home-nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open ? 'true' : 'false'}
            aria-controls="home-nav-mobile-menu"
            onClick={() => setOpen((v) => !v)}
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: 34,
              height: 34,
              padding: 0,
              background: 'transparent',
              border: `1px solid ${PALETTE.rule}`,
              cursor: 'pointer',
              color: PALETTE.ink,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              {open ? (
                <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.4" />
              ) : (
                <>
                  <path d="M2 4h10" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M2 10h10" stroke="currentColor" strokeWidth="1.4" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="home-nav-mobile-menu"
          className="home-nav-mobile"
          style={{
            display: 'none',
            borderTop: `1px solid ${PALETTE.hairline}`,
            padding: `12px ${PAGE_PAD} 20px ${PAGE_PAD}`,
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: SANS,
                  fontSize: 15,
                  color: PALETTE.ink,
                  textDecoration: 'none',
                  padding: '10px 0',
                  borderBottom: `1px solid ${PALETTE.hairline}`,
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
            <a
              href="https://github.com/peacprotocol/peac"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: SANS,
                fontSize: 13,
                color: PALETTE.ink,
                textDecoration: 'none',
                padding: '10px 14px',
                border: `1px solid ${PALETTE.rule}`,
              }}
            >
              GitHub
            </a>
            <Link
              href="/#demo"
              onClick={() => setOpen(false)}
              style={{
                flex: 1,
                minHeight: 44,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: SANS,
                fontSize: 13,
                fontWeight: 500,
                color: PALETTE.paper,
                background: PALETTE.ink,
                textDecoration: 'none',
                padding: '10px 14px',
                textAlign: 'center',
                border: `1px solid ${PALETTE.ink}`,
              }}
            >
              Request a demo
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export function Wordmark({
  height = 28,
  replayOnHover = true,
  autoPlay = true,
}: {
  height?: number
  replayOnHover?: boolean
  autoPlay?: boolean
}) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        height,
      }}
    >
      <OriginaryLogoMotion
        ariaLabel="Originary"
        fill={PALETTE.ink}
        replayOnHover={replayOnHover}
        autoPlay={autoPlay}
        className="home-wordmark-svg"
      />
    </span>
  )
}
