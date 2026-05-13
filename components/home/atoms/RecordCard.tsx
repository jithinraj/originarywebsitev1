import type { CSSProperties } from 'react'
import { MONO } from '../typography'
import { PALETTE } from '../palette'
import { clamp01, digest, ease } from '../motion/easing'

type Row = { k: string; v: string }

export function RecordCard({
  width = 320,
  reveal = 1,
  signed = false,
  id = 'b2c1a4e8',
  fields,
  style = {},
}: {
  width?: number | string
  reveal?: number
  signed?: boolean
  id?: string
  fields?: Row[]
  style?: CSSProperties
}) {
  const defaultFields: Row[] = [
    { k: 'issuer', v: 'api.vendor.com' },
    { k: 'action', v: 'POST /v1/search' },
    { k: 'policy', v: 'terms:v3 · ' + digest('p', 6) },
    { k: 'result', v: '200 · ' + digest('r', 6) },
    { k: 'time', v: '2026-05-12T14:08:11Z' },
    { k: 'signature', v: '3045' + digest('s', 8) + '...' },
  ]
  const rows = fields || defaultFields
  const n = rows.length

  return (
    <div
      style={{
        width,
        background: PALETTE.paper,
        border: `1px solid ${signed ? PALETTE.rule : PALETTE.hairline}`,
        boxShadow: signed
          ? '0 1px 0 rgba(20,17,10,0.04), 0 12px 30px -18px rgba(20,17,10,0.25)'
          : 'none',
        transition: 'box-shadow 320ms ease, border-color 320ms ease',
        ...style,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 16px',
          borderBottom: `1px solid ${PALETTE.hairline}`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span
            style={{
              fontFamily:
                'var(--font-plex-sans), "IBM Plex Sans", system-ui, sans-serif',
              fontSize: 11,
              color: PALETTE.muted,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontWeight: 500,
            }}
          >
            Record
          </span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 11,
              color: PALETTE.faint,
            }}
          >
            · {id}
          </span>
        </div>
        <div
          style={{
            fontFamily: MONO,
            fontSize: 10,
            color: signed ? PALETTE.accent : PALETTE.faint,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            opacity: signed ? 1 : 0.6,
            transition: 'opacity 240ms',
          }}
        >
          {signed ? 'signed' : 'draft'}
        </div>
      </div>

      <div style={{ padding: '6px 0' }}>
        {rows.map((row, i) => {
          const slice = 1 / n
          const start = i * slice
          const local = clamp01((reveal - start) / slice)
          const op = ease.out(local)
          return (
            <div
              key={row.k}
              style={{
                display: 'grid',
                gridTemplateColumns: '92px 1fr',
                alignItems: 'baseline',
                padding: '7px 16px',
                opacity: op,
                transform: `translateY(${(1 - op) * 4}px)`,
                transition: 'opacity 200ms linear',
              }}
            >
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 11,
                  color: PALETTE.muted,
                  letterSpacing: '0.02em',
                }}
              >
                {row.k}
              </div>
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 12,
                  color: PALETTE.ink,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {row.v}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
