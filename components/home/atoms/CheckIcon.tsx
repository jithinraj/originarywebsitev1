import { PALETTE } from '../palette'

export function CheckIcon({
  size = 14,
  color = PALETTE.success,
  progress = 1,
}: {
  size?: number
  color?: string
  progress?: number
}) {
  const len = 22
  const dash = len * progress
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path
        d="M2.5 7.5 L6 11 L12 3.5"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeDasharray={`${dash} ${len}`}
      />
    </svg>
  )
}
