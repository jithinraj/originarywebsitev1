import Link from 'next/link'
import { MAX_W, PAGE_PAD } from './palette'
import { SectionTitle } from './atoms/Mono'
import { MarkGlyph, type MarkName } from './glyphs/MarkGlyphs'

/**
 * Four concrete jobs a visitor might have today, each landing on the page
 * that actually does that job. A row of lighter-weight links below covers
 * the remaining principal paths without competing with the cards.
 */
const CARDS: Array<{ title: string; mark: MarkName; body: string; cta: string; href: string }> = [
  {
    title: 'Verify a record',
    mark: 'sealCheck',
    body: 'Check a signed record locally.',
    cta: 'Open verifier',
    href: '/verify',
  },
  {
    title: 'Add records to MCP',
    mark: 'link',
    body: 'Create signed records for important tool calls.',
    cta: 'MCP quickstart',
    href: '/mcp',
  },
  {
    title: 'Add records to an API',
    mark: 'braces',
    body: 'Issue records alongside API interactions.',
    cta: 'API quickstart',
    href: '/how-it-works',
  },
  {
    title: 'Record gateway decisions',
    mark: 'valve',
    body: 'Record allow, deny, redaction and review decisions.',
    cta: 'Gateway guide',
    href: '/ai-gateway',
  },
]

const LINKS: Array<{ label: string; href: string }> = [
  { label: 'Browse all records', href: '/records' },
  { label: 'Agent payments', href: '/agentic-commerce' },
  { label: 'PEAC docs', href: '/peac' },
  { label: 'GitHub', href: 'https://github.com/peacprotocol/peac' },
]

export function StartHere() {
  return (
    <section
      id="start-here"
      style={{
        maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`,
        margin: '0 auto',
        padding: `40px ${PAGE_PAD} 64px ${PAGE_PAD}`,
      }}
    >
      <SectionTitle title="Start here" body="Choose what you want to do." />
      <ul className="sth-grid" style={{ marginTop: 44 }} role="list">
        {CARDS.map((c) => (
          <li key={c.title}>
            <Link href={c.href} className="sth-card">
              <span className="sth-mark" aria-hidden>
                <MarkGlyph name={c.mark} size={20} />
              </span>
              <p className="sth-title">{c.title}</p>
              <p className="sth-body">{c.body}</p>
              <span className="sth-cta home-arrow-link">
                {c.cta}
                <Arrow />
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="sth-links">
        {LINKS.map((l) => {
          const external = l.href.startsWith('http')
          return (
            <Link
              key={l.href}
              href={l.href}
              className="sth-textlink"
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
            >
              {l.label}
            </Link>
          )
        })}
      </div>
    </section>
  )
}

function Arrow() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M1 5h8M5.5 1.5L9 5l-3.5 3.5" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}
