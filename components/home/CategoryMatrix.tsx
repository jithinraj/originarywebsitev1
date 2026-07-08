'use client'

import Link from 'next/link'
import { MAX_W, PAGE_PAD, PALETTE } from './palette'
import { Mono, SectionTitle } from './atoms/Mono'

type Category = {
  title: string
  href: string
  examples: string[]
}

const CATEGORIES: Category[] = [
  { title: 'API call records',           href: '/records#api',          examples: ['Stripe', 'Cloudflare', 'Vercel'] },
  { title: 'MCP tool run records',       href: '/mcp',                  examples: ['MCP', 'Smithery', 'Internal MCP servers'] },
  { title: 'Agent action records',       href: '/records#agent',        examples: ['OpenAI', 'Anthropic', 'LangChain'] },
  { title: 'Gateway decision records',   href: '/ai-gateway',           examples: ['Cloudflare', 'Portkey', 'Kong'] },
  { title: 'Payment event records',      href: '/agentic-commerce',     examples: ['x402', 'Stripe', 'AP2 / MPP'] },
  { title: 'Provisioning event records', href: '/provisioning-records', examples: ['Vercel', 'GitHub Actions', 'Terraform'] },
]

export function CategoryMatrix() {
  return (
    <section
      aria-labelledby="category-matrix-heading"
      style={{
        maxWidth: MAX_W,
        margin: '0 auto',
        padding: `40px ${PAGE_PAD} 88px ${PAGE_PAD}`,
      }}
    >
      <SectionTitle
        title="Common places Originary records fit."
        body="Examples are interoperability surfaces, not partnership claims. Use the same signed-record format wherever another party needs to verify what happened."
      />
      <ul
        className="home-category-grid"
        role="list"
        style={{
          marginTop: 44,
          padding: 0,
          listStyle: 'none',
        }}
      >
        {CATEGORIES.map((cat) => (
          <li key={cat.title} className="home-category-card">
            <Link
              href={cat.href}
              className="home-arrow-link"
              style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
            >
              <div className="home-category-card-head">
                <Mono size={11} color="#7a7263" style={{ letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  {String(CATEGORIES.indexOf(cat) + 1).padStart(2, '0')}
                </Mono>
                <h3 className="home-category-card-title">
                  {cat.title}
                  <span aria-hidden style={{ marginLeft: 8, color: PALETTE.faint, fontSize: 13 }}>&rarr;</span>
                </h3>
              </div>
              <ul className="home-category-card-chips" role="list">
                {cat.examples.map((ex) => (
                  <li key={ex} className="home-category-card-chip">
                    {ex}
                  </li>
                ))}
              </ul>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
