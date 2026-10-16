import { PALETTE, MAX_W, PAGE_PAD } from './palette'
import { Mono } from './atoms/Mono'

export function Divider({ eyebrow, rule = true }: { eyebrow?: string; rule?: boolean }) {
  return (
    <div
      style={{
        maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`,
        margin: '0 auto',
        padding: `0 ${PAGE_PAD}`,
      }}
    >
      <div
        style={{
          borderTop: rule ? `1px solid ${PALETTE.hairline}` : 'none',
          padding: '24px 0 0 0',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        {eyebrow ? (
          <Mono
            size={11}
            color="var(--muted)"
            style={{ letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase' }}
          >
            {eyebrow}
          </Mono>
        ) : null}
      </div>
    </div>
  )
}
