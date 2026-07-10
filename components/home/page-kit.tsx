import Link from 'next/link'
import type { CSSProperties, ReactNode } from 'react'
import './home.css'
import './cinema.css'
import { PALETTE, MAX_W, PAGE_PAD } from './palette'
import { SANS, MONO } from './typography'
import { Nav } from './Nav'
import { MarkGlyph, type MarkName } from './glyphs/MarkGlyphs'
import { ShaderField } from './motion/ShaderField'
import { WordmarkStream } from './motion/WordmarkStream'
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
      <WordmarkStream />
      <HomeFooter />
    </div>
  )
}

/**
 * PageHero: page top section. With `aside`/`display` it renders as a paper
 * plate with a display headline and a page artifact; `strip` adds a mono
 * metadata row under the band.
 */
export function PageHero({
  eyebrow,
  title,
  byline,
  sub,
  align = 'left',
  aside,
  strip,
  display = false,
  children,
}: {
  eyebrow?: string
  title: string
  byline?: string
  sub?: string
  align?: 'left' | 'center'
  aside?: ReactNode
  strip?: string[]
  display?: boolean
  children?: ReactNode
}) {
  const plate = Boolean(aside) || display
  return (
    <>
    <section
      className="home-section cin-stage"
      style={{
        padding: `clamp(44px, 7vh, 84px) ${PAGE_PAD} ${plate ? 'clamp(40px, 6vh, 64px)' : '24px'} ${PAGE_PAD}`,
        background: plate ? PALETTE.paper : undefined,
        borderBottom: plate && !strip ? `1px solid ${PALETTE.hairline}` : undefined,
      }}
    >
      {display ? <ShaderField className="cin-stream" /> : null}
      <div style={{ maxWidth: MAX_W, margin: '0 auto', position: 'relative', zIndex: 1 }}>
      <div className={aside ? 'pk-hero-grid' : undefined}>
      <div
        style={{
          maxWidth: aside ? undefined : 720,
          marginLeft: align === 'center' ? 'auto' : 0,
          marginRight: align === 'center' ? 'auto' : 0,
          textAlign: align,
          minWidth: 0,
        }}
      >
        {eyebrow ? (
          <Mono
            size={11}
            color={PALETTE.muted}
            className="cin-rise"
            style={{ letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block' }}
          >
            {eyebrow}
          </Mono>
        ) : null}
        <h1
          className="cin-rise"
          style={{
            ['--cin-i' as string]: 1,
            fontFamily: sans,
            fontSize: display ? 'clamp(42px, 5.4vw, 76px)' : 'clamp(32px, 4vw, 44px)',
            lineHeight: display ? 1.04 : 1.08,
            fontWeight: 500,
            letterSpacing: display ? '-0.033em' : '-0.025em',
            margin: eyebrow ? '16px 0 0 0' : '0',
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
            className="cin-rise"
            style={{
              ['--cin-i' as string]: 2,
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
        {children ? <div className="cin-rise" style={{ ['--cin-i' as string]: 3, marginTop: 22 }}>{children}</div> : null}
      </div>
      {aside ? <div className="pk-hero-aside">{aside}</div> : null}
      </div>
      </div>
    </section>
    {strip && strip.length ? (
      <div
        style={{
          borderTop: `1px solid ${PALETTE.hairline}`,
          borderBottom: `1px solid ${PALETTE.hairline}`,
          background: PALETTE.bg,
          padding: `12px ${PAGE_PAD}`,
        }}
      >
        <div
          className="pk-hero-strip"
          style={{
            maxWidth: MAX_W,
            margin: '0 auto',
          }}
        >
          {strip.map((item, i) => (
            <span key={item} style={{ display: 'inline-flex', alignItems: 'center' }}>
              {i > 0 ? (
                <span
                  aria-hidden
                  style={{
                    display: 'inline-block',
                    width: 3,
                    height: 3,
                    background: PALETTE.rule,
                    margin: '0 clamp(10px, 1.6vw, 22px)',
                    flexShrink: 0,
                  }}
                />
              ) : null}
              <Mono
                size={10.5}
                color={PALETTE.muted}
                style={{ letterSpacing: '0.18em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}
              >
                {item}
              </Mono>
            </span>
          ))}
        </div>
      </div>
    ) : null}
    </>
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
        overflow: 'clip',
      }}
    >
      <div style={{ maxWidth: MAX_W, margin: '0 auto', position: 'relative' }}>{children}</div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = 'left',
  index,
  mark,
}: {
  eyebrow?: string
  title: string
  sub?: string
  align?: 'left' | 'center'
  /** Mono index rendered before the eyebrow. */
  index?: string
  /** Optional mark glyph rendered beside the index numeral. */
  mark?: MarkName
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
          {index ? (
            <span aria-hidden style={{ color: PALETTE.accent, marginRight: 10 }}>
              {index}
            </span>
          ) : null}
          {mark ? (
            <span
              aria-hidden
              style={{ display: 'inline-flex', verticalAlign: '-3px', marginRight: 9, color: '#8a8172' }}
            >
              <MarkGlyph name={mark} size={14} />
            </span>
          ) : null}
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
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="home-arrow-link"
        style={styles}
      >
        {children}
        {arrow}
      </a>
    )
  }
  return (
    <Link href={href} className="home-arrow-link" style={styles}>
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
