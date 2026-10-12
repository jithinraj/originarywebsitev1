import type { ReactNode } from 'react'
import { PALETTE, MONO, SANS } from '@/components/home'

/**
 * Small SVG vocabulary shared by the evidence-series figures. Role colors:
 * ink for structure, ink for flow and action, sage for a supported or
 * verified statement, amber for a gap, an unknown, or an overreach. Marks
 * opt into the FigureFrame draw/fade animation through `step`.
 */

export const INK = PALETTE.ink
export const SLATE = PALETTE.ink
export const SAGE = PALETTE.success
export const AMBER = PALETTE.warn
export const FAINT = PALETTE.faint
export const MUTED = PALETTE.muted
export const HAIR = PALETTE.hairline
export const SAGE_WASH = 'var(--success-bg)'
export const SLATE_WASH = 'var(--code-bg)'
export const AMBER_WASH = 'var(--warn-bg)'

export const svgStyle = (minWidth = 560) => ({
  minWidth,
  width: '100%',
  height: 'auto',
  display: 'block' as const,
})

const stepClass = (kind: 'draw' | 'fade', step?: number) =>
  step ? `fig-${kind} fig-step-${Math.max(1, Math.min(step, 6))}` : undefined

type TextProps = {
  x: number
  y: number
  children: ReactNode
  size?: number
  anchor?: 'start' | 'middle' | 'end'
  sans?: boolean
  color?: string
  weight?: number
  step?: number
}

/** Mono uppercase label by default; `sans` for sentence text. */
export function T({ x, y, children, size, anchor = 'middle', sans, color, weight, step }: TextProps) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fontFamily={sans ? SANS : MONO}
      fontSize={size ?? (sans ? 12 : 10)}
      letterSpacing={sans ? undefined : '0.08em'}
      fill={color ?? (sans ? MUTED : INK)}
      fontWeight={weight}
      className={stepClass('fade', step)}
    >
      {children}
    </text>
  )
}

export function Box({
  x,
  y,
  w,
  h,
  stroke = INK,
  fill = PALETTE.paper,
  dashed,
  step,
}: {
  x: number
  y: number
  w: number
  h: number
  stroke?: string
  fill?: string
  dashed?: boolean
  step?: number
}) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      fill={fill}
      stroke={stroke}
      strokeWidth="1.25"
      strokeDasharray={dashed ? '4 3' : undefined}
      className={stepClass('fade', step)}
    />
  )
}

/** Straight connector with a chevron head at (x2, y2). Horizontal or vertical. */
export function Arrow({
  x1,
  y1,
  x2,
  y2,
  color = SLATE,
  dashed,
  step,
  head = true,
}: {
  x1: number
  y1: number
  x2: number
  y2: number
  color?: string
  dashed?: boolean
  step?: number
  head?: boolean
}) {
  const horizontal = Math.abs(x2 - x1) >= Math.abs(y2 - y1)
  const dir = horizontal ? Math.sign(x2 - x1) || 1 : Math.sign(y2 - y1) || 1
  const chevron = horizontal
    ? `M ${x2 - dir * 6} ${y2 - 5} L ${x2} ${y2} L ${x2 - dir * 6} ${y2 + 5}`
    : `M ${x2 - 5} ${y2 - dir * 6} L ${x2} ${y2} L ${x2 + 5} ${y2 - dir * 6}`
  return (
    <g>
      <path
        d={`M ${x1} ${y1} L ${x2} ${y2}`}
        stroke={color}
        strokeWidth="1.25"
        strokeDasharray={dashed ? '4 3' : undefined}
        pathLength={dashed ? undefined : 1}
        className={dashed ? stepClass('fade', step) : stepClass('draw', step)}
      />
      {head ? (
        <path
          d={chevron}
          stroke={color}
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className={stepClass('fade', step)}
        />
      ) : null}
    </g>
  )
}

export function Tick({ x, y, color = SAGE, step }: { x: number; y: number; color?: string; step?: number }) {
  return (
    <path
      d={`M ${x - 4} ${y} L ${x - 1} ${y + 3} L ${x + 5} ${y - 4}`}
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      className={stepClass('fade', step)}
    />
  )
}

export function Cross({ x, y, color = AMBER, step }: { x: number; y: number; color?: string; step?: number }) {
  return (
    <path
      d={`M ${x - 4} ${y - 4} L ${x + 4} ${y + 4} M ${x + 4} ${y - 4} L ${x - 4} ${y + 4}`}
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      className={stepClass('fade', step)}
    />
  )
}

/** Small key glyph marking the signer of a record. */
export function Key({ x, y, color = INK, step }: { x: number; y: number; color?: string; step?: number }) {
  return (
    <g stroke={color} strokeWidth="1.25" fill="none" strokeLinecap="round" className={stepClass('fade', step)}>
      <circle cx={x} cy={y} r={4} />
      <path d={`M ${x + 4} ${y} H ${x + 13} M ${x + 10} ${y} V ${y + 4} M ${x + 13} ${y} V ${y + 3}`} />
    </g>
  )
}

/** Horizontal bracket spanning x1..x2 with a label above (or below when `below`). */
export function Bracket({
  x1,
  x2,
  y,
  label,
  color,
  below,
  dashed,
  step,
}: {
  x1: number
  x2: number
  y: number
  label: string
  color: string
  below?: boolean
  dashed?: boolean
  step?: number
}) {
  const tick = below ? -6 : 6
  return (
    <g className={stepClass('fade', step)}>
      <path
        d={`M ${x1} ${y + tick} V ${y} H ${x2} V ${y + tick}`}
        stroke={color}
        strokeWidth="1.25"
        strokeDasharray={dashed ? '4 3' : undefined}
        fill="none"
      />
      <text
        x={(x1 + x2) / 2}
        y={below ? y + 15 : y - 7}
        textAnchor="middle"
        fontFamily={MONO}
        fontSize="10"
        letterSpacing="0.08em"
        fill={color}
      >
        {label}
      </text>
    </g>
  )
}
