import { PALETTE } from '../palette'
import { clamp01, lerp } from '../motion/easing'

export function StepActionGlyph({ progress = 1 }: { progress?: number }) {
  const fill = clamp01(progress * 1.2)
  return (
    <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
      <rect x="0.5" y="20.5" width="80" height="40" stroke={PALETTE.hairline} />
      <line
        x1="10"
        y1="34"
        x2="50"
        y2="34"
        stroke={PALETTE.faint}
        strokeWidth="1"
        strokeDasharray="2 3"
        strokeDashoffset={(1 - fill) * 40}
      />
      <line
        x1="10"
        y1="46"
        x2="60"
        y2="46"
        stroke={PALETTE.ink}
        strokeWidth="1.25"
        strokeDasharray="50"
        strokeDashoffset={(1 - fill) * 50}
      />
      <circle
        cx={80 + fill * 30}
        cy="40"
        r="3"
        fill={PALETTE.accent}
        opacity={fill > 0.3 ? 1 : 0}
      />
    </svg>
  )
}

export function StepRecordGlyph({ progress = 1 }: { progress?: number }) {
  const lines = [0, 1, 2, 3, 4]
  return (
    <svg width="100" height="92" viewBox="0 0 100 92" fill="none">
      <rect x="0.5" y="0.5" width="99" height="91" stroke={PALETTE.rule} fill={PALETTE.paper} />
      <line x1="0" y1="16" x2="100" y2="16" stroke={PALETTE.hairline} />
      {lines.map((i) => {
        const local = clamp01((progress - i * 0.12) / 0.4)
        return (
          <rect
            key={i}
            x="10"
            y={26 + i * 11}
            width={(40 + (i % 2) * 30) * local}
            height="2"
            fill={PALETTE.ink}
          />
        )
      })}
      <rect
        x="74"
        y="4"
        width="22"
        height="8"
        fill={PALETTE.ink}
        opacity={progress > 0.7 ? 1 : 0}
      />
    </svg>
  )
}

export function StepVerifyGlyph({ progress = 1 }: { progress?: number }) {
  const checks = [0, 1, 2]
  return (
    <svg width="110" height="92" viewBox="0 0 110 92" fill="none">
      <rect x="0.5" y="0.5" width="109" height="91" stroke={PALETTE.hairline} />
      {checks.map((i) => {
        const local = clamp01((progress - 0.2 - i * 0.2) / 0.3)
        const dash = 14 * local
        return (
          <g key={i}>
            <line
              x1="12"
              y1={26 + i * 22}
              x2="46"
              y2={26 + i * 22}
              stroke={PALETTE.hairline}
            />
            <path
              d={`M58 ${26 + i * 22} l4 5 l10 -10`}
              stroke={PALETTE.success}
              strokeWidth="1.75"
              strokeDasharray={`${dash} 14`}
              fill="none"
            />
          </g>
        )
      })}
    </svg>
  )
}

export function StepBundleGlyph({ progress = 1 }: { progress?: number }) {
  const collapse = clamp01(progress * 1.2)
  return (
    <svg width="120" height="92" viewBox="0 0 120 92" fill="none">
      {[0, 1, 2].map((i) => {
        const oy = lerp(i * 10, 6, collapse)
        const ox = lerp(i * 14, 0, collapse)
        return (
          <rect
            key={i}
            x={10 + ox}
            y={10 + oy}
            width="60"
            height="22"
            fill={PALETTE.paper}
            stroke={PALETTE.hairline}
          />
        )
      })}
      <rect
        x="78"
        y={lerp(40, 16, collapse)}
        width="32"
        height="62"
        fill={PALETTE.paper}
        stroke={PALETTE.rule}
        opacity={collapse > 0.6 ? 1 : 0}
      />
      <text
        x="82"
        y={lerp(58, 36, collapse)}
        fontFamily='"IBM Plex Mono", monospace'
        fontSize="8"
        fill={PALETTE.muted}
        opacity={collapse > 0.7 ? 1 : 0}
      >
        bundle
      </text>
    </svg>
  )
}
