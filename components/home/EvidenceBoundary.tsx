import { MAX_W, PAGE_PAD, PALETTE } from './palette'
import { SectionTitle } from './atoms/Mono'

const MONO_FONT = 'var(--font-plex-mono), "IBM Plex Mono", ui-monospace, monospace'
const SANS_FONT = 'var(--font-plex-sans), "IBM Plex Sans", system-ui, sans-serif'

const ESTABLISHES = [
  'the supplied key validates the signature;',
  'the protected record bytes were not changed;',
  'disclosed content matches the digests bound by the record;',
  'the record contains the issuer-reported claims shown.',
]

const DOES_NOT_ESTABLISH = [
  'that every relevant event was recorded;',
  "that the issuer's observation was complete or truthful;",
  'that the supplied key was authorised by the claimed issuer;',
  'that delivery occurred;',
  'that a legal or regulatory requirement was satisfied.',
]

function Column({ title, items, tone }: { title: string; items: string[]; tone: 'ok' | 'neutral' }) {
  return (
    <div style={{ borderTop: `2px solid ${tone === 'ok' ? PALETTE.success : PALETTE.hairline}`, paddingTop: 16 }}>
      <div
        style={{
          fontFamily: MONO_FONT,
          fontSize: 10.5,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: tone === 'ok' ? PALETTE.success : PALETTE.faint,
        }}
      >
        {title}
      </div>
      <ul style={{ margin: '14px 0 0', padding: '0 0 0 18px', fontFamily: SANS_FONT, fontSize: 14.5, lineHeight: 1.7, color: PALETTE.muted }}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export function EvidenceBoundary() {
  return (
    <section
      style={{
        maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`,
        margin: '0 auto',
        padding: `40px ${PAGE_PAD} 88px ${PAGE_PAD}`,
      }}
    >
      <SectionTitle title="A valid record can still be insufficient evidence." />
      <div
        style={{
          marginTop: 40,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
          gap: 'clamp(24px, 4vw, 48px)',
        }}
      >
        <Column title="Verification can establish" items={ESTABLISHES} tone="ok" />
        <Column title="Verification does not automatically establish" items={DOES_NOT_ESTABLISH} tone="neutral" />
      </div>
    </section>
  )
}
