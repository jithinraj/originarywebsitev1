'use client'

import { MAX_W, PAGE_PAD, PALETTE } from './palette'
import { Mono, SectionTitle } from './atoms/Mono'

type Category = {
  title: string
  examples: string[]
}

const CATEGORIES: Category[] = [
  { title: 'API calls',            examples: ['Stripe', 'Cloudflare', 'Vercel'] },
  { title: 'MCP tool runs',        examples: ['MCP', 'Smithery', 'Internal MCP servers'] },
  { title: 'Agent actions',        examples: ['OpenAI', 'Anthropic', 'LangChain'] },
  { title: 'Gateway decisions',    examples: ['Cloudflare', 'Portkey', 'Kong'] },
  { title: 'Payment events',       examples: ['x402', 'Stripe', 'AP2 / MPP'] },
  { title: 'Provisioning events',  examples: ['Vercel', 'GitHub Actions', 'Terraform'] },
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
        eyebrow="ecosystem fit"
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
            <div className="home-category-card-head">
              <Mono size={11} color="#7a7263" style={{ letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {String(CATEGORIES.indexOf(cat) + 1).padStart(2, '0')}
              </Mono>
              <h3 className="home-category-card-title">{cat.title}</h3>
            </div>
            <ul className="home-category-card-chips" role="list">
              {cat.examples.map((ex) => (
                <li key={ex} className="home-category-card-chip">
                  {ex}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
