import Link from 'next/link'
import type { CSSProperties, ReactNode } from 'react'
import { PALETTE, MAX_W, PAGE_PAD } from './palette'
import { SANS, MONO } from './typography'
import { Nav } from './Nav'
import { HomeFooter } from './Footer'
import { Mono } from './atoms/Mono'

const sans = SANS
const mono = MONO

/**
 * PageShell wraps any non-home page in the homepage design system: paper
 * background, IBM Plex, the homepage Nav with wordmark + GitHub icon, and the
 * homepage Footer. Use as the outermost element of every routed page.
 */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        background: PALETTE.bg,
        color: PALETTE.ink,
        fontFamily: sans,
        minHeight: '100vh',
      }}
    >
      <Nav />
      <main id="main-content" role="main">
        {children}
      </main>
      <HomeFooter />
    </div>
  )
}

/**
 * PageHero is the top section of every non-home page: small eyebrow, large
 * sans heading, optional ink-coloured subhead, optional CTA row.
 */
export function PageHero({
  eyebrow,
  title,
  byline,
  sub,
  align = 'left',
  children,
}: {
  eyebrow?: string
  title: string
  byline?: string
  sub?: string
  align?: 'left' | 'center'
  children?: ReactNode
}) {
  return (
    <section
      className="home-section"
      style={{
        maxWidth: MAX_W,
        margin: '0 auto',
        padding: `clamp(40px, 6vh, 72px) ${PAGE_PAD} 24px ${PAGE_PAD}`,
      }}
    >
      <div
        style={{
          maxWidth: 720,
          marginLeft: align === 'center' ? 'auto' : 0,
          marginRight: align === 'center' ? 'auto' : 0,
          textAlign: align,
        }}
      >
        {eyebrow ? (
          <Mono
            size={11}
            color={PALETTE.muted}
            style={{ letterSpacing: '0.18em', textTransform: 'uppercase' }}
          >
            {eyebrow}
          </Mono>
        ) : null}
        <h1
          style={{
            fontFamily: sans,
            fontSize: 'clamp(32px, 4vw, 44px)',
            lineHeight: 1.08,
            fontWeight: 500,
            letterSpacing: '-0.025em',
            margin: eyebrow ? '14px 0 0 0' : '0',
            color: PALETTE.ink,
            textWrap: 'balance',
          }}
        >
          {title}
        </h1>
        {byline ? (
          <div
            style={{
              fontFamily: sans,
              fontSize: 'clamp(18px, 1.8vw, 22px)',
              lineHeight: 1.25,
              fontWeight: 400,
              letterSpacing: '-0.01em',
              color: PALETTE.muted,
              margin: '8px 0 0 0',
            }}
          >
            {byline}
          </div>
        ) : null}
        {sub ? (
          <p
            style={{
              fontFamily: sans,
              fontSize: 17,
              lineHeight: 1.6,
              color: PALETTE.muted,
              margin: '16px 0 0 0',
              maxWidth: 600,
              marginLeft: align === 'center' ? 'auto' : 0,
              marginRight: align === 'center' ? 'auto' : 0,
              textWrap: 'pretty',
            }}
          >
            {sub}
          </p>
        ) : null}
        {children ? <div style={{ marginTop: 22 }}>{children}</div> : null}
      </div>
    </section>
  )
}

/**
 * PageSection is a layout wrapper for content sections between the hero and
 * the footer. Inherits maxWidth, horizontal padding, and the home-section
 * entrance animation.
 */
export function PageSection({
  children,
  paddingTop = 0,
  paddingBottom = 80,
  background,
  className = '',
}: {
  children: ReactNode
  paddingTop?: number
  paddingBottom?: number
  background?: string
  className?: string
}) {
  return (
    <section
      className={`home-section ${className}`.trim()}
      style={{
        background,
        padding: `${paddingTop}px ${PAGE_PAD} ${paddingBottom}px ${PAGE_PAD}`,
      }}
    >
      <div style={{ maxWidth: MAX_W, margin: '0 auto' }}>{children}</div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = 'left',
}: {
  eyebrow?: string
  title: string
  sub?: string
  align?: 'left' | 'center'
}) {
  return (
    <div
      style={{
        maxWidth: 760,
        marginLeft: align === 'center' ? 'auto' : 0,
        marginRight: align === 'center' ? 'auto' : 0,
        textAlign: align,
        marginBottom: 32,
      }}
    >
      {eyebrow ? (
        <Mono
          size={11}
          color={PALETTE.faint}
          style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}
        >
          {eyebrow}
        </Mono>
      ) : null}
      <h2
        style={{
          fontFamily: sans,
          fontSize: 32,
          lineHeight: 1.12,
          letterSpacing: '-0.02em',
          fontWeight: 500,
          color: PALETTE.ink,
          margin: eyebrow ? '12px 0 0 0' : 0,
          textWrap: 'pretty',
        }}
      >
        {title}
      </h2>
      {sub ? (
        <p
          style={{
            fontFamily: sans,
            fontSize: 16,
            lineHeight: 1.6,
            color: PALETTE.muted,
            margin: '14px 0 0 0',
            maxWidth: 620,
            marginLeft: align === 'center' ? 'auto' : 0,
            marginRight: align === 'center' ? 'auto' : 0,
            textWrap: 'pretty',
          }}
        >
          {sub}
        </p>
      ) : null}
    </div>
  )
}

export function Card({
  children,
  padding = 28,
  emphasis,
  style = {},
}: {
  children: ReactNode
  padding?: number
  emphasis?: boolean
  style?: CSSProperties
}) {
  return (
    <div
      className="home-card"
      style={{
        background: PALETTE.paper,
        border: `1px solid ${emphasis ? PALETTE.rule : PALETTE.hairline}`,
        padding,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export function BulletList({
  items,
  columns = 1,
}: {
  items: ReactNode[]
  columns?: 1 | 2 | 3
}) {
  return (
    <ul
      style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: '10px 24px',
      }}
    >
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
            fontFamily: sans,
            fontSize: 14,
            color: PALETTE.ink,
            lineHeight: 1.6,
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: 4,
              height: 4,
              marginTop: 8,
              background: PALETTE.ink,
              flexShrink: 0,
            }}
          />
          {item}
        </li>
      ))}
    </ul>
  )
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        fontFamily: sans,
        fontSize: 12,
        color: PALETTE.muted,
        padding: '4px 10px',
        background: PALETTE.paper,
        border: `1px solid ${PALETTE.hairline}`,
        display: 'inline-flex',
        alignItems: 'center',
      }}
    >
      {children}
    </span>
  )
}

export function Button({
  href,
  primary,
  external,
  children,
}: {
  href: string
  primary?: boolean
  external?: boolean
  children: ReactNode
}) {
  const styles: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    padding: '12px 18px',
    fontFamily: sans,
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: '-0.005em',
    textDecoration: 'none',
    color: primary ? PALETTE.paper : PALETTE.ink,
    background: primary ? PALETTE.ink : 'transparent',
    border: `1px solid ${primary ? PALETTE.ink : PALETTE.rule}`,
  }
  const arrow = (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path
        d="M1 5h8M5.5 1.5L9 5l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  )
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={styles}>
        {children}
        {arrow}
      </a>
    )
  }
  return (
    <Link href={href} style={styles}>
      {children}
      {arrow}
    </Link>
  )
}

/**
 * LegalDoc renders long-form legal text in a calm column with the homepage
 * paper background and IBM Plex typography. Wraps a single H1 + body content.
 */
export function LegalDoc({
  title,
  effective,
  eyebrow = 'legal',
  children,
}: {
  title: string
  effective?: string
  eyebrow?: string | null
  children: ReactNode
}) {
  return (
    <section
      className="home-section"
      style={{
        maxWidth: MAX_W,
        margin: '0 auto',
        padding: `clamp(48px, 8vh, 96px) ${PAGE_PAD} 96px ${PAGE_PAD}`,
      }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        {eyebrow ? (
          <Mono
            size={11}
            color={PALETTE.muted}
            style={{ letterSpacing: '0.18em', textTransform: 'uppercase' }}
          >
            {eyebrow}
          </Mono>
        ) : null}
        <h1
          style={{
            fontFamily: sans,
            fontSize: 'clamp(32px, 4.4vw, 44px)',
            lineHeight: 1.1,
            fontWeight: 500,
            letterSpacing: '-0.025em',
            margin: '14px 0 0 0',
            color: PALETTE.ink,
            textWrap: 'balance',
          }}
        >
          {title}
        </h1>
        {effective ? (
          <p
            style={{
              fontFamily: mono,
              fontSize: 12,
              color: PALETTE.faint,
              margin: '14px 0 0 0',
            }}
          >
            {effective}
          </p>
        ) : null}
        <div
          className="home-card legal-doc-body"
          style={{
            marginTop: 32,
            padding: 36,
            background: PALETTE.paper,
            border: `1px solid ${PALETTE.hairline}`,
          }}
        >
          {children}
        </div>
      </div>
    </section>
  )
}

/**
 * ArticleDoc renders long-form blog or guide articles in the homepage design
 * system. Breadcrumb, category eyebrow, headline, sub-headline, byline, and a
 * prose card. Reuses `.legal-doc-body` typography for readable long-form copy.
 */
export function ArticleDoc({
  category,
  title,
  sub,
  author,
  date,
  readTime,
  parent,
  children,
}: {
  category: string
  title: string
  sub?: ReactNode
  author?: string
  date?: string
  readTime?: string
  parent: { label: string; href: string }
  children: ReactNode
}) {
  return (
    <article
      className="home-section"
      style={{
        maxWidth: MAX_W,
        margin: '0 auto',
        padding: `clamp(40px, 6vh, 72px) ${PAGE_PAD} 96px ${PAGE_PAD}`,
      }}
    >
      <div style={{ maxWidth: 780, margin: '0 auto' }}>
        <nav
          aria-label="Breadcrumb"
          style={{
            fontFamily: mono,
            fontSize: 11,
            letterSpacing: '0.08em',
            color: PALETTE.faint,
            marginBottom: 32,
            textTransform: 'uppercase',
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
          }}
        >
          <Link href="/" style={{ color: PALETTE.faint, textDecoration: 'none' }}>
            Home
          </Link>
          <span>/</span>
          <Link href={parent.href} style={{ color: PALETTE.faint, textDecoration: 'none' }}>
            {parent.label}
          </Link>
        </nav>
        <Mono
          size={11}
          color={PALETTE.muted}
          style={{ letterSpacing: '0.18em', textTransform: 'uppercase' }}
        >
          {category}
        </Mono>
        <h1
          style={{
            fontFamily: sans,
            fontSize: 'clamp(32px, 4.4vw, 48px)',
            lineHeight: 1.1,
            fontWeight: 500,
            letterSpacing: '-0.025em',
            margin: '14px 0 0 0',
            color: PALETTE.ink,
            textWrap: 'balance',
          }}
        >
          {title}
        </h1>
        {sub ? (
          <div
            style={{
              fontFamily: sans,
              fontSize: 18,
              lineHeight: 1.55,
              color: PALETTE.muted,
              margin: '22px 0 0 0',
              textWrap: 'pretty',
            }}
          >
            {sub}
          </div>
        ) : null}
        {/* date is intentionally not rendered in article meta */}
        {void date}
        {author || readTime ? (
          <div
            style={{
              marginTop: 24,
              paddingTop: 18,
              borderTop: `1px solid ${PALETTE.hairline}`,
              display: 'flex',
              gap: 18,
              flexWrap: 'wrap',
              fontFamily: mono,
              fontSize: 11,
              letterSpacing: '0.06em',
              color: PALETTE.faint,
              textTransform: 'uppercase',
            }}
          >
            {author ? <span>{author}</span> : null}
            {readTime ? <span>{readTime}</span> : null}
          </div>
        ) : null}
        <div
          className="home-card legal-doc-body"
          style={{
            marginTop: 32,
            padding: 36,
            background: PALETTE.paper,
            border: `1px solid ${PALETTE.hairline}`,
          }}
        >
          {children}
        </div>
      </div>
    </article>
  )
}

/**
 * ArticleRelated renders a small list of related links at the bottom of an
 * article. Same column width and typography as ArticleDoc.
 */
export function ArticleRelated({
  links,
}: {
  links: Array<{ label: string; href: string; external?: boolean }>
}) {
  if (!links.length) return null
  return (
    <section
      className="home-section"
      style={{
        maxWidth: MAX_W,
        margin: '0 auto',
        padding: `0 ${PAGE_PAD} 96px ${PAGE_PAD}`,
      }}
    >
      <div style={{ maxWidth: 780, margin: '0 auto' }}>
        <Mono
          size={11}
          color={PALETTE.faint}
          style={{ letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 18, display: 'block' }}
        >
          related
        </Mono>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {links.map((l) =>
            l.external ? (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: sans,
                    fontSize: 15,
                    color: PALETTE.ink,
                    textDecoration: 'underline',
                    textDecorationColor: 'rgba(20, 17, 10, 0.30)',
                    textUnderlineOffset: 3,
                  }}
                >
                  {l.label}
                </a>
              </li>
            ) : (
              <li key={l.href}>
                <Link
                  href={l.href}
                  style={{
                    fontFamily: sans,
                    fontSize: 15,
                    color: PALETTE.ink,
                    textDecoration: 'underline',
                    textDecorationColor: 'rgba(20, 17, 10, 0.30)',
                    textUnderlineOffset: 3,
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  )
}
