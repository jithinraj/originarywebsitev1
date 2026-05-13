import { MONO } from '../typography'
import { PALETTE } from '../palette'

export function Boundary({
  height = 320,
  label = 'company boundary',
}: {
  height?: number
  label?: string
}) {
  return (
    <div
      style={{
        position: 'relative',
        width: 1,
        height,
        background: `repeating-linear-gradient(to bottom, ${PALETTE.rule} 0 4px, transparent 4px 10px)`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: -12,
          transform: 'translate(-50%, -100%)',
          fontFamily: MONO,
          fontSize: 10,
          color: PALETTE.faint,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </div>
    </div>
  )
}
