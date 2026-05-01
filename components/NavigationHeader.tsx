'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { NAV_CTA, NAV_PRIMARY } from '@/lib/site-registry'

const links = NAV_PRIMARY

export default function NavigationHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`hp-home-header fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open ? 'is-scrolled shadow-[0_1px_0_rgba(0,0,0,0.04)]' : ''
      }`}
    >
      <nav className="hp-container">
        <div className="flex min-h-[4.5rem] items-center justify-between lg:min-h-[5rem]">
          <Link href="/" className="flex shrink-0 items-center" aria-label="originary home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/originary-wordmark.svg"
              alt="originary"
              className="block h-[1.5rem] w-auto md:h-[1.6875rem] lg:h-[1.875rem]"
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="hp-link text-[0.875rem]">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://github.com/peacprotocol/peac"
              target="_blank"
              rel="noopener noreferrer"
              className="hp-link-muted flex h-[2.125rem] w-[2.125rem] items-center justify-center rounded-full"
              style={{ border: '1px solid var(--color-border)' }}
              aria-label="GitHub"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            <Link href={NAV_CTA.href} className="hp-nav-cta">
              {NAV_CTA.label}
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl p-2.5 -mr-2 transition-colors lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <div className="flex h-[11px] w-[15px] flex-col justify-between">
              <span
                className={`block h-[1px] origin-center rounded-full transition-all duration-300 ${
                  open ? 'translate-y-[5px] rotate-45' : ''
                }`}
                style={{ background: 'var(--color-fg-muted, #6b7280)' }}
              />
              <span
                className={`block h-[1px] rounded-full transition-all duration-300 ${
                  open ? 'scale-x-0 opacity-0' : ''
                }`}
                style={{ background: 'var(--color-fg-muted, #6b7280)' }}
              />
              <span
                className={`block h-[1px] origin-center rounded-full transition-all duration-300 ${
                  open ? '-translate-y-[5px] -rotate-45' : ''
                }`}
                style={{ background: 'var(--color-fg-muted, #6b7280)' }}
              />
            </div>
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
            open ? 'max-h-[80vh] pb-8' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-0.5 pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hp-link rounded-xl px-3 py-3 -mx-3 text-[0.9375rem] hover:bg-[rgba(243,242,238,0.6)]"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-5" style={{ borderTop: '1px solid var(--color-border)' }}>
              <Link href={NAV_CTA.href} onClick={() => setOpen(false)} className="hp-btn-primary w-full text-center">
                {NAV_CTA.label}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
