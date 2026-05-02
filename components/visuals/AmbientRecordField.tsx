import type { CSSProperties } from 'react'

import { ambientSignalDots, ambientSignalPaths, ambientSpecks } from './ambient-record-field-paths'
import { ambientRecordFieldTokens } from './ambient-record-field-tokens'

export function AmbientRecordField() {
  return (
    <div
      className="ambient-record-field"
      style={{
        '--ambient-field-drift': ambientRecordFieldTokens.timing.fieldDrift,
        '--ambient-field-drift-slow': ambientRecordFieldTokens.timing.fieldDriftSlow,
        '--ambient-signal-drift': ambientRecordFieldTokens.timing.signalDrift,
        '--ambient-signal-trace': ambientRecordFieldTokens.timing.signalTrace,
      } as CSSProperties}
      aria-hidden="true"
    >
      <div className="ambient-record-field-base" />
      <div className="ambient-record-field-wash ambient-record-field-wash-blue" />
      <div className="ambient-record-field-wash ambient-record-field-wash-mint" />
      <div className="ambient-record-field-wash ambient-record-field-wash-lavender" />

      <svg
        className="ambient-record-field-svg"
        viewBox="0 0 1440 760"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="presentation"
      >
        <defs>
          <linearGradient id="ambient-record-signal" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor={ambientRecordFieldTokens.colors.signalLine} stopOpacity="0" />
            <stop offset="46%" stopColor={ambientRecordFieldTokens.colors.signalLineStrong} stopOpacity="0.72" />
            <stop offset="100%" stopColor={ambientRecordFieldTokens.colors.signalLine} stopOpacity="0" />
          </linearGradient>
          <filter id="ambient-record-soften" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="0.45" />
          </filter>
          <pattern id="ambient-record-grain" width="72" height="72" patternUnits="userSpaceOnUse">
            <circle cx="9" cy="13" r="0.55" fill={ambientRecordFieldTokens.colors.grain} />
            <circle cx="45" cy="28" r="0.45" fill={ambientRecordFieldTokens.colors.grain} />
            <circle cx="26" cy="58" r="0.35" fill={ambientRecordFieldTokens.colors.grain} />
          </pattern>
        </defs>

        <g className="ambient-record-field-signals">
          {ambientSignalPaths.map((path) => (
            <g key={path.id}>
              <path
                id={`ambient-record-${path.id}`}
                className="ambient-record-signal-path-base"
                d={path.d}
                stroke={ambientRecordFieldTokens.colors.signalLine}
                strokeWidth="1"
                strokeLinecap="round"
                fill="none"
                opacity={path.opacity}
                filter="url(#ambient-record-soften)"
              />
              <path
                className="ambient-record-signal-path"
                d={path.d}
                stroke="url(#ambient-record-signal)"
                strokeWidth="1.2"
                strokeLinecap="round"
                fill="none"
                opacity={path.opacity}
                filter="url(#ambient-record-soften)"
              />
            </g>
          ))}
        </g>

        <g className="ambient-record-field-points">
          {ambientSignalDots.map((dot) => (
            <circle key={`${dot.pathId}-${dot.delay}`} r={dot.radius} fill={ambientRecordFieldTokens.colors.signalDot} opacity="0.38">
              <animateMotion
                dur={dot.duration}
                begin={dot.delay}
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0;1"
                keySplines="0.45 0 0.55 1"
              >
                <mpath href={`#ambient-record-${dot.pathId}`} />
              </animateMotion>
            </circle>
          ))}

          {ambientSpecks.map((speck) => (
            <circle
              key={`${speck.cx}-${speck.cy}`}
              cx={speck.cx}
              cy={speck.cy}
              r={speck.r}
              fill={ambientRecordFieldTokens.colors.signalDot}
              opacity={speck.opacity}
            />
          ))}
        </g>

        <rect width="1440" height="760" fill="url(#ambient-record-grain)" opacity="0.025" />
      </svg>

      <div className="ambient-record-field-veil" />
    </div>
  )
}
