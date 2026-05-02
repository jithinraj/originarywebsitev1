export const ambientSignalPaths = [
  {
    id: 'upper-right-continuity',
    d: 'M710 228 C880 170 1018 176 1162 242 S1360 310 1518 218',
    opacity: 0.72,
  },
  {
    id: 'lower-right-continuity',
    d: 'M610 560 C814 496 958 522 1120 584 S1348 684 1524 592',
    opacity: 0.62,
  },
  {
    id: 'right-edge-signal',
    d: 'M1034 112 C1160 226 1196 358 1152 488 S1098 660 1244 748',
    opacity: 0.54,
  },
] as const

export const ambientSignalDots = [
  { pathId: 'upper-right-continuity', duration: '34s', delay: '-12s', radius: 2.5 },
  { pathId: 'lower-right-continuity', duration: '44s', delay: '-25s', radius: 2.1 },
  { pathId: 'right-edge-signal', duration: '40s', delay: '-19s', radius: 2 },
] as const

export const ambientSpecks = [
  { cx: 1036, cy: 146, r: 0.9, opacity: 0.16 },
  { cx: 1184, cy: 204, r: 0.7, opacity: 0.13 },
  { cx: 1308, cy: 318, r: 0.8, opacity: 0.11 },
  { cx: 978, cy: 458, r: 0.7, opacity: 0.12 },
  { cx: 1222, cy: 538, r: 0.9, opacity: 0.14 },
  { cx: 1370, cy: 606, r: 0.65, opacity: 0.1 },
] as const
