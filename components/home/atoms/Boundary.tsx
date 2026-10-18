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
        width: 0,
        height,
        borderLeft: `1px dashed ${PALETTE.faint}`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: -12,
          transform: 'translate(-50%, -100%)',
          fontFamily: MONO,
          fontSize: 12,
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
