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
  const stackProg = clamp01(progress * 1.4)
  const arrowProg = clamp01((progress - 0.4) * 2.2)
  const bundleProg = clamp01((progress - 0.5) * 2.2)
  const sealProg = clamp01((progress - 0.78) * 4)

  return (
    <svg width="120" height="92" viewBox="0 0 120 92" fill="none">
      {/* LEFT: stacked records collapsing into the stack */}
      {[2, 1, 0].map((i) => {
        const ox = lerp(i * 4, i * 1.5, stackProg)
        const oy = lerp(i * 7, i * 2.5, stackProg)
        const op = 0.5 + (2 - i) * 0.25
        return (
          <g key={i} opacity={op * stackProg}>
            <rect
              x={4 + ox}
              y={20 + oy}
              width="44"
              height="22"
              fill={PALETTE.paper}
              stroke={PALETTE.hairline}
              strokeWidth="1"
            />
            <line
              x1={9 + ox}
              y1={27 + oy}
              x2={40 + ox}
              y2={27 + oy}
              stroke={PALETTE.hairline}
              strokeWidth="1"
            />
            <line
              x1={9 + ox}
              y1={33 + oy}
              x2={33 + ox}
              y2={33 + oy}
              stroke={PALETTE.hairline}
              strokeWidth="1"
            />
          </g>
        )
      })}

      {/* MIDDLE: export arrow */}
      <g opacity={arrowProg}>
        <line
          x1="56"
          y1="46"
          x2={56 + 12 * arrowProg}
          y2="46"
          stroke={PALETTE.rule}
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M65 43 L69 46 L65 49"
          stroke={PALETTE.rule}
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={arrowProg > 0.65 ? 1 : 0}
        />
      </g>

      {/* RIGHT: sealed bundle */}
      <g
        opacity={bundleProg}
        transform={`translate(${lerp(82, 76, bundleProg)} ${lerp(28, 18, bundleProg)})`}
      >
        {/* Outer envelope */}
        <rect
          x="0"
          y="0"
          width="40"
          height="58"
          fill={PALETTE.paper}
          stroke={PALETTE.rule}
          strokeWidth="1"
        />
        {/* Top tab to suggest envelope */}
        <path
          d="M0 0 L20 10 L40 0"
          stroke={PALETTE.hairline}
          strokeWidth="1"
          fill="none"
        />
        {/* Content lines inside bundle */}
        <line x1="6" y1="22" x2="34" y2="22" stroke={PALETTE.hairline} strokeWidth="1" />
        <line x1="6" y1="28" x2="30" y2="28" stroke={PALETTE.hairline} strokeWidth="1" />
        <line x1="6" y1="34" x2="34" y2="34" stroke={PALETTE.hairline} strokeWidth="1" />
        <line x1="6" y1="40" x2="26" y2="40" stroke={PALETTE.hairline} strokeWidth="1" />
        {/* Seal (signed bundle) at bottom-right */}
        <g opacity={sealProg}>
          <circle
            cx="31"
            cy="50"
            r="5"
            fill={PALETTE.paper}
            stroke={PALETTE.success}
            strokeWidth="1.2"
          />
          <path
            d="M28.6 50 L30.4 51.8 L33.4 48.6"
            stroke={PALETTE.success}
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  )
}
