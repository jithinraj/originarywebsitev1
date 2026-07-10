import { PALETTE, MAX_W, PAGE_PAD } from './palette'
import { Mono } from './atoms/Mono'

export function Divider({ eyebrow }: { eyebrow: string }) {
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
          borderTop: `1px solid ${PALETTE.hairline}`,
          padding: '24px 0 0 0',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <Mono
          size={11.5}
          color="#7a7263"
          style={{ letterSpacing: '0.12em', textTransform: 'uppercase' }}
        >
          {eyebrow}
        </Mono>
      </div>
    </div>
  )
}
