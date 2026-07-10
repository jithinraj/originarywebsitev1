import type { CSSProperties, ReactNode } from 'react'
import { MONO } from '../typography'
import { PALETTE } from '../palette'

type Props = {
  children: ReactNode
  size?: number
  color?: string
  style?: CSSProperties
  className?: string
}

export function Mono({
  children,
  size = 12,
  color = PALETTE.muted,
  style = {},
  className,
}: Props) {
  return (
    <span
      className={className}
      style={{
        fontFamily: MONO,
        fontSize: size,
        color,
        letterSpacing: '0.02em',
        ...style,
      }}
    >
      {children}
    </span>
  )
}

export function Eyebrow({
  children,
  color = '#5a5346',
}: {
  children: ReactNode
  color?: string
}) {
  return (
    <div
      style={{
        fontFamily: MONO,
        fontSize: 11.5,
        color,
        letterSpacing: '0.11em',
        textTransform: 'uppercase',
      }}
    >
      {children}
    </div>
  )
}

export function SectionTitle({
  eyebrow,
  title,
  body,
  align = 'left',
}: {
  eyebrow?: string
  title: string
  body?: string
  align?: 'left' | 'center'
}) {
  return (
    <div
      style={{
        maxWidth: 760,
        textAlign: align,
        marginLeft: align === 'center' ? 'auto' : 0,
        marginRight: align === 'center' ? 'auto' : 0,
      }}
    >
      {eyebrow ? (
        <div style={{ marginBottom: 16 }}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      ) : null}
      <h2
        style={{
          fontFamily: 'var(--font-plex-sans), "IBM Plex Sans", system-ui, sans-serif',
          fontSize: 40,
          lineHeight: 1.12,
          letterSpacing: '-0.02em',
          fontWeight: 500,
          color: PALETTE.ink,
          margin: 0,
          textWrap: 'pretty',
        }}
      >
        {title}
      </h2>
      {body ? (
        <p
          style={{
            fontFamily: 'var(--font-plex-sans), "IBM Plex Sans", system-ui, sans-serif',
            fontSize: 18,
            lineHeight: 1.55,
            color: '#3a352b',
            marginTop: 18,
            maxWidth: 640,
            marginLeft: align === 'center' ? 'auto' : 0,
            marginRight: align === 'center' ? 'auto' : 0,
            textWrap: 'pretty',
          }}
        >
          {body}
        </p>
      ) : null}
    </div>
  )
}
