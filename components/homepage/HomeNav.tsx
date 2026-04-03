'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { label: 'Developers', href: '/developers' },
  { label: 'Learn', href: '/learn' },
  { label: 'Pricing', href: '/pricing' },
]

export function HomeNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-2xl shadow-[0_1px_0_rgba(0,0,0,0.04)]'
          : 'bg-transparent'
      }`}
      style={scrolled ? { background: 'rgba(247,249,252,0.8)' } : undefined}
    >
      <nav className="hp-container">
        <div className="flex items-center justify-between h-[4.25rem]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div
              className="w-[1.625rem] h-[1.625rem] rounded-[0.4375rem] flex items-center justify-center"
              style={{ background: 'var(--color-fg)' }}
            >
              <svg width="12" height="13" viewBox="67 -24 1011 1104" fill="none">
                <g transform="translate(0,1056) scale(1,-1)">
                  <path d="M573 -24C875 -24 1078 201 1078 526C1078 853 875 1080 573 1080C271 1080 67 853 67 526C67 201 271 -24 573 -24ZM573 158C392 158 281 301 281 526C281 753 393 898 573 898C753 898 865 753 865 526C865 302 754 158 573 158Z" fill="var(--color-fg-inverse)" />
                </g>
              </svg>
            </div>
            <span
              className="text-[0.9375rem] font-medium tracking-[-0.025em]"
              style={{ color: 'var(--color-fg)' }}
            >
              originary
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hp-link text-[0.8125rem]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop actions - GitHub + CTA aligned */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="https://github.com/peacprotocol/peac"
              className="hp-link-muted flex items-center justify-center w-[2.125rem] h-[2.125rem] rounded-full"
              style={{ border: '1px solid var(--color-border)' }}
              aria-label="GitHub"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </Link>
            <Link href="/developers" className="hp-nav-cta">
              Start here
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 -mr-2 rounded-lg transition-colors hover:bg-[rgba(243,242,238,0.8)]"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <div className="w-[18px] h-[14px] flex flex-col justify-between">
              <span
                className={`block h-[1.5px] rounded-full transition-all duration-300 origin-center ${
                  open ? 'rotate-45 translate-y-[6.25px]' : ''
                }`}
                style={{ background: 'var(--color-fg)' }}
              />
              <span
                className={`block h-[1.5px] rounded-full transition-all duration-300 ${
                  open ? 'opacity-0 scale-x-0' : ''
                }`}
                style={{ background: 'var(--color-fg)' }}
              />
              <span
                className={`block h-[1.5px] rounded-full transition-all duration-300 origin-center ${
                  open ? '-rotate-45 -translate-y-[6.25px]' : ''
                }`}
                style={{ background: 'var(--color-fg)' }}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? 'max-h-[500px] pb-8' : 'max-h-0'
          }`}
        >
          <div
            className="flex flex-col gap-0.5 pt-4"
            style={{ borderTop: '1px solid var(--color-border)' }}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hp-link py-3 px-3 -mx-3 rounded-xl text-[0.9375rem] hover:bg-[rgba(243,242,238,0.6)]"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-5 mt-3" style={{ borderTop: '1px solid var(--color-border)' }}>
              <Link href="/developers" className="hp-btn-primary w-full text-center">
                Start here
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
