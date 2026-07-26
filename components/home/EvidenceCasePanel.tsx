import Link from 'next/link'
import { MAX_W, PAGE_PAD, PALETTE } from './palette'
import { MONO, SANS } from './typography'
import { SectionTitle } from './atoms/Mono'

type Row = { label: string; status: string; tone: 'ok' | 'linked' | 'missing' | 'partial' }

const ROWS: Row[] = [
  { label: 'Authorisation reference', status: 'present', tone: 'ok' },
  { label: 'Gateway decision', status: 'signature verified', tone: 'ok' },
  { label: 'MCP/API invocation', status: 'signature verified', tone: 'ok' },
  { label: 'Payment-provider artifact', status: 'linked', tone: 'linked' },
  { label: 'Delivery observation', status: 'missing', tone: 'missing' },
  { label: 'Verification report', status: 'complete with limitations', tone: 'partial' },
]

const TONE: Record<Row['tone'], string> = {
  ok: '#245f3f',
  linked: '#375873',
  missing: '#9a3b2e',
  partial: '#77592f',
}

export function EvidenceCasePanel() {
  return (
    <section
      style={{
        maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`,
        margin: '0 auto',
        padding: `40px ${PAGE_PAD} 88px ${PAGE_PAD}`,
      }}
    >
      <SectionTitle
        title="One evidence case, with its gaps stated."
        body="Verification separates what the supplied records establish from what is missing, conflicting, or not evaluated. A complete happy path would misrepresent what real evidence looks like."
      />
      <div style={{ marginTop: 40, maxWidth: 660 }}>
        <div style={{ background: PALETTE.paper, border: `1px solid ${PALETTE.rule}` }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              gap: 12,
              flexWrap: 'wrap',
              padding: '16px 20px',
              borderBottom: `1px solid ${PALETTE.hairline}`,
            }}
          >
            <span
              style={{
                fontFamily: MONO,
                fontSize: 12,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: PALETTE.ink,
                fontWeight: 600,
              }}
            >
              Evidence case
            </span>
            <span style={{ fontFamily: SANS, fontSize: 13, color: '#6e6759' }}>
              disputed MCP tool call
            </span>
          </div>
          <dl style={{ margin: 0 }}>
            {ROWS.map((row) => (
              <div
                key={row.label}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  gap: 16,
                  padding: '11px 20px',
                  borderBottom: `1px solid ${PALETTE.hairline}`,
                }}
              >
                <dt style={{ fontFamily: SANS, fontSize: 14, color: PALETTE.ink, margin: 0 }}>
                  {row.label}
                </dt>
                <dd
                  style={{
                    fontFamily: MONO,
                    fontSize: 12.5,
                    margin: 0,
                    textAlign: 'right',
                    whiteSpace: 'nowrap',
                    color: TONE[row.tone],
                  }}
                >
                  {row.status}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <p
          style={{
            fontFamily: MONO,
            fontSize: 11,
            letterSpacing: '0.04em',
            color: '#6e6759',
            margin: '12px 0 0',
          }}
        >
          Illustrative evidence case · no customer or adoption claim
        </p>
        <p style={{ fontFamily: SANS, fontSize: 14, marginTop: 20 }}>
          <Link
            href="/evidence-case"
            className="home-arrow-link"
            style={{ color: PALETTE.ink, display: 'inline-flex', alignItems: 'center', gap: 8 }}
          >
            See what an evidence case contains
          </Link>
        </p>
      </div>
    </section>
  )
}
