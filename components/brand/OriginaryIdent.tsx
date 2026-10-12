'use client'

/**
 * Originary ident · wordmark v17 · 12 Oct 2026.
 * Port of motion/ident-video-v17.js from the v17 brand kit; geometry and
 * timing are unchanged. Do not retime, reorder or recolour.
 *
 * ⊙ → o1 → 1o → originary. A dot in the o becomes a stem, the two trade
 * places, and the word builds around them. Each i grows its dot from its own
 * stem, so nothing appears from nowhere. It ends on the v17 master.
 *
 * 5.0 s, played once. Scenes 0.8 · 0.9 · 0.8 · 1.3 · 1.2 s. Calm easing, no
 * bounce or overshoot. Ink on white or white on ink using the reverse
 * outlines, never in colour. Use it to open or close; never as a loader or a
 * looping decoration. With reduced motion on, it shows the final frame.
 */

import { useEffect, useRef, useState, type CSSProperties, type ReactElement } from 'react'

type Glyph =
  | { k: number; ch: 'i'; x: number; stem: [string, string]; dot: [string, string] }
  | { k: number; ch: Exclude<string, 'i'>; x: number; d: [string, string] }

// Geometry generated from originary-wordmark-v17/src (x-height 500, baseline 0, y down).
// Index 0 is the ink outline, index 1 the reverse outline (1.5 units lighter per edge).
const GL: Glyph[] = [
  { k: 0, ch: 'o', x: 0, d: ['M520 -250C520 -94 416 10 260 10C104 10 0 -94 0 -250C0 -406 104 -510 260 -510C416 -510 520 -406 520 -250ZM430 -250C430 -362.2 363.7 -434 260 -434C156.3 -434 90 -362.2 90 -250C90 -137.8 156.3 -66 260 -66C363.7 -66 430 -137.8 430 -250Z', 'M518.5 -250C518.5 -94 416 8.5 260 8.5C104 8.5 1.5 -94 1.5 -250C1.5 -406 104 -508.5 260 -508.5C416 -508.5 518.5 -406 518.5 -250ZM431.5 -250C431.5 -362.2 363.7 -435.5 260 -435.5C156.3 -435.5 88.5 -362.2 88.5 -250C88.5 -137.8 156.3 -64.5 260 -64.5C363.7 -64.5 431.5 -137.8 431.5 -250Z'] },
  { k: 1, ch: 'r', x: 588, d: ['M0 0V-500H88V-431.1C124.5 -481.2 177.8 -510 240.1 -510C279.3 -510 314.3 -499.4 343.8 -479.8L296.6 -408.7C276.1 -425.1 250.9 -434 222.1 -434C140.3 -434 88 -378.6 88 -292V0Z', 'M1.5 -1.5V-498.5H86.5V-426.5C125.7 -480.3 177.8 -508.5 240.1 -508.5C279.3 -508.5 313.5 -498.1 341.7 -479.3L296.2 -410.9C277 -426.3 250.9 -435.5 222.1 -435.5C140.3 -435.5 86.5 -378.6 86.5 -292V-1.5Z'] },
  { k: 2, ch: 'i', x: 983.3, stem: ['M0 0V-500H88V0Z', 'M1.5 -1.5V-498.5H86.5V-1.5Z'], dot: ['M95.5 -639.5C95.5 -608.6 74.9 -588 44 -588C13.1 -588 -7.5 -608.6 -7.5 -639.5C-7.5 -670.4 13.1 -691 44 -691C74.9 -691 95.5 -670.4 95.5 -639.5Z', 'M94 -639.5C94 -608.6 74.9 -589.5 44 -589.5C13.1 -589.5 -6 -608.6 -6 -639.5C-6 -670.4 13.1 -689.5 44 -689.5C74.9 -689.5 94 -670.4 94 -639.5Z'] },
  { k: 3, ch: 'g', x: 1140.8, d: ['M424 -500H512V-69C512 87 409.6 191 256 191C166.9 191 95 156 50.4 96.2L118.4 45.4C147.2 89.6 195.1 115 256 115C358.5 115 424 43.2 424 -69C382.5 -24.8 317.3 10 237 10C94.8 10 0 -94 0 -250C0 -406 94.8 -510 237 -510C317.3 -510 382.5 -475.2 424 -417.7ZM424 -250C424 -375.1 358.9 -434 257 -434C155.1 -434 90 -362.2 90 -250C90 -137.8 155.1 -66 257 -66C358.9 -66 424 -124.9 424 -250Z', 'M425.5 -498.5H510.5V-69C510.5 87 409.6 189.5 256 189.5C166.9 189.5 96.2 155.1 52.5 96.5L118 47.6C145.9 90.4 195.1 116.5 256 116.5C358.5 116.5 425.5 43.2 425.5 -72.8C381.4 -25.8 317.3 8.5 237 8.5C94.8 8.5 1.5 -94 1.5 -250C1.5 -406 94.8 -508.5 237 -508.5C317.3 -508.5 381.2 -474.3 425.5 -413.1ZM425.5 -250C425.5 -375.1 358.9 -435.5 257 -435.5C155.1 -435.5 88.5 -362.2 88.5 -250C88.5 -137.8 155.1 -64.5 257 -64.5C358.9 -64.5 425.5 -124.9 425.5 -250Z'] },
  { k: 4, ch: 'i', x: 1754.9, stem: ['M0 0V-500H88V0Z', 'M1.5 -1.5V-498.5H86.5V-1.5Z'], dot: ['M95.5 -639.5C95.5 -608.6 74.9 -588 44 -588C13.1 -588 -7.5 -608.6 -7.5 -639.5C-7.5 -670.4 13.1 -691 44 -691C74.9 -691 95.5 -670.4 95.5 -639.5Z', 'M94 -639.5C94 -608.6 74.9 -589.5 44 -589.5C13.1 -589.5 -6 -608.6 -6 -639.5C-6 -670.4 13.1 -689.5 44 -689.5C74.9 -689.5 94 -670.4 94 -639.5Z'] },
  { k: 5, ch: 'n', x: 1945.4, d: ['M0 0V-500H88V-431.1C124.5 -481.2 177.8 -510 240.1 -510C362.6 -510 444.2 -406 444.2 -250V0H356.2V-250C356.2 -362.2 303.9 -434 222.1 -434C140.3 -434 88 -378.6 88 -292V0Z', 'M1.5 -1.5V-498.5H86.5V-426.5C125.7 -480.3 177.8 -508.5 240.1 -508.5C362.6 -508.5 442.7 -406 442.7 -250V-1.5H357.7V-250C357.7 -362.2 303.9 -435.5 222.1 -435.5C140.3 -435.5 86.5 -378.6 86.5 -292V-1.5Z'] },
  { k: 6, ch: 'a', x: 2455.6, d: ['M424 -500H512V0H424V-82.3C382.5 -24.8 317.3 10 237 10C94.8 10 0 -94 0 -250C0 -406 94.8 -510 237 -510C317.3 -510 382.5 -475.2 424 -417.7ZM424 -250C424 -375.1 358.9 -434 257 -434C155.1 -434 90 -362.2 90 -250C90 -137.8 155.1 -66 257 -66C358.9 -66 424 -124.9 424 -250Z', 'M425.5 -498.5H510.5V-1.5H425.5V-86.9C381.2 -25.7 317.3 8.5 237 8.5C94.8 8.5 1.5 -94 1.5 -250C1.5 -406 94.8 -508.5 237 -508.5C317.3 -508.5 381.2 -474.3 425.5 -413.1ZM425.5 -250C425.5 -375.1 358.9 -435.5 257 -435.5C155.1 -435.5 88.5 -362.2 88.5 -250C88.5 -137.8 155.1 -64.5 257 -64.5C358.9 -64.5 425.5 -124.9 425.5 -250Z'] },
  { k: 7, ch: 'r', x: 3070, d: ['M0 0V-500H88V-431.1C124.5 -481.2 177.8 -510 240.1 -510C279.3 -510 314.3 -499.4 343.8 -479.8L296.6 -408.7C276.1 -425.1 250.9 -434 222.1 -434C140.3 -434 88 -378.6 88 -292V0Z', 'M1.5 -1.5V-498.5H86.5V-426.5C125.7 -480.3 177.8 -508.5 240.1 -508.5C279.3 -508.5 313.5 -498.1 341.7 -479.3L296.2 -410.9C277 -426.3 250.9 -435.5 222.1 -435.5C140.3 -435.5 86.5 -378.6 86.5 -292V-1.5Z'] },
  { k: 8, ch: 'y', x: 3443.9, d: ['M0 -500H78.4L221.6 -102.8L364.8 -500H452L206.5 181H119.3L182.4 6Z', 'M2.1 -498.5H77.4L221.6 -98.4L365.9 -498.5H449.9L205.4 179.5H121.5L184 6Z'] },
]

const S = 88, H = 500, DOT = 103, WO = 520, WORD = 3895.9, INS = 1.5
const DOT_TOP = 691, DOT_BOT = 588
const X_I1 = GL[2].x, X_I2 = GL[4].x, X_01 = GL[1].x, X_10 = 157.5
const CAM_O = WO / 2, CAM_01 = (X_01 + S) / 2, CAM_10 = (X_10 + WO) / 2, CAM_W = WORD / 2
const K = 1240 / WORD, KS = K * 1.7

type SceneName = 'Origin' | 'Formation' | 'Exchange' | 'Reveal' | 'Hold'
const SCENES: { name: SceneName; dur: number }[] = [
  { name: 'Origin', dur: 0.8 },
  { name: 'Formation', dur: 0.9 },
  { name: 'Exchange', dur: 0.8 },
  { name: 'Reveal', dur: 1.3 },
  { name: 'Hold', dur: 1.2 },
]
export const IDENT_TOTAL = SCENES.reduce((s, x) => s + x.dur, 0)
const CASC = [1, 3, 4, 5, 6, 7, 8]

const c01 = (t: number) => Math.max(0, Math.min(1, t))
const lerp = (a: number, b: number, t: number) => a + (b - a) * t

function bez(x1: number, y1: number, x2: number, y2: number) {
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx
  const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by
  const X = (t: number) => ((ax * t + bx) * t + cx) * t
  const Y = (t: number) => ((ay * t + by) * t + cy) * t
  const dX = (t: number) => (3 * ax * t + 2 * bx) * t + cx
  return (x: number) => {
    x = c01(x)
    let t = x
    for (let i = 0; i < 8; i++) {
      const d = dX(t)
      if (Math.abs(d) < 1e-6) break
      t -= (X(t) - x) / d
    }
    return Y(c01(t))
  }
}
const MOVE = bez(0.65, 0, 0.35, 1) // objects travelling between rests
const CAM = bez(0.6, 0, 0.15, 1) // camera: slow start, long settle
const OUT = bez(0.16, 1, 0.3, 1) // arrivals: quick, then a soft settle, never past the mark

interface Pill { cx: number; cy: number; w: number; h: number; r: number }
interface Frame {
  cam: number
  k: number
  alpha?: number
  ox?: number
  stem?: number
  morph?: Pill
  letters?: { op: number; dx: number }[]
  tips?: (Pill | null)[]
  full?: boolean
}

function tip(x: number, s1: number, s2: number): Pill | null {
  if (s1 <= 0) return null
  const top = lerp(-H + 20, -DOT_TOP, OUT(s1)), bot = lerp(-H + 20, -DOT_BOT, MOVE(s2))
  const w = lerp(S, DOT, MOVE(s2)), h = bot - top
  return { cx: x + S / 2, cy: (top + bot) / 2, w, h, r: Math.min(w / 2, h / 2, lerp(0, DOT / 2, OUT(s2))) }
}

function frameAt(name: SceneName, p: number): Frame {
  if (name === 'Origin') return { cam: CAM_O, k: KS, alpha: OUT(p / 0.35), ox: 0, morph: { cx: WO / 2, cy: -H / 2, w: DOT, h: DOT, r: DOT / 2 } }
  if (name === 'Formation') {
    const m = MOVE(p / 0.6), sh = MOVE((p - 0.08) / 0.52)
    return { cam: lerp(CAM_O, CAM_01, MOVE(p / 0.6)), k: KS, ox: 0, morph: { cx: lerp(WO / 2, X_01 + S / 2, m), cy: -H / 2, w: lerp(DOT, S, sh), h: lerp(DOT, H, sh), r: lerp(DOT / 2, 0, sh) } }
  }
  if (name === 'Exchange') {
    const e = MOVE(p / 0.6)
    return { cam: lerp(CAM_01, CAM_10, e), k: KS, ox: lerp(0, X_10, e), stem: lerp(X_01, 0, e) }
  }
  if (name === 'Reveal') {
    const e1 = MOVE(p / 0.42), v = CAM((p - 0.04) / 0.72)
    return {
      cam: lerp(CAM_10, CAM_W, v),
      k: Math.exp(lerp(Math.log(KS), Math.log(K), v)),
      ox: lerp(X_10, 0, e1),
      stem: lerp(0, X_I1, e1),
      letters: CASC.map((_, k) => { const lp = OUT((p - (0.3 + 0.055 * k)) / 0.32); return { op: c01(lp * 1.15), dx: -60 * (1 - lp) } }),
      tips: [tip(X_I1, c01((p - 0.44) / 0.12), c01((p - 0.54) / 0.16)), tip(X_I2, c01((p - 0.66) / 0.12), c01((p - 0.76) / 0.16))],
    }
  }
  return { cam: CAM_W, k: K, full: true }
}

function at(t: number): Frame {
  let acc = 0
  for (let i = 0; i < SCENES.length; i++) {
    const d = SCENES[i].dur
    if (t < acc + d || i === SCENES.length - 1) return frameAt(SCENES[i].name, c01((t - acc) / d))
    acc += d
  }
  return frameAt('Hold', 1)
}

function pill(s: Pill, rev: boolean) {
  let { w, h, r } = s
  const { cx, cy } = s
  if (rev) { w -= 2 * INS; h -= 2 * INS; r = Math.max(0, r - INS) }
  const a = w / 2, b = h / 2, q = 0.6 * r, f = (n: number) => Math.round(n * 10) / 10
  return 'M' + f(cx + a) + ' ' + f(cy + b - r) + 'L' + f(cx + a) + ' ' + f(cy - b + r) + 'C' + f(cx + a) + ' ' + f(cy - b + r - q) + ' ' + f(cx + a - r + q) + ' ' + f(cy - b) + ' ' + f(cx + a - r) + ' ' + f(cy - b) +
    'L' + f(cx - a + r) + ' ' + f(cy - b) + 'C' + f(cx - a + r - q) + ' ' + f(cy - b) + ' ' + f(cx - a) + ' ' + f(cy - b + r - q) + ' ' + f(cx - a) + ' ' + f(cy - b + r) +
    'L' + f(cx - a) + ' ' + f(cy + b - r) + 'C' + f(cx - a) + ' ' + f(cy + b - r + q) + ' ' + f(cx - a + r - q) + ' ' + f(cy + b) + ' ' + f(cx - a + r) + ' ' + f(cy + b) +
    'L' + f(cx + a - r) + ' ' + f(cy + b) + 'C' + f(cx + a - r + q) + ' ' + f(cy + b) + ' ' + f(cx + a) + ' ' + f(cy + b - r + q) + ' ' + f(cx + a) + ' ' + f(cy + b - r) + 'Z'
}

/** Glyph paths for one frame, in either the ink (v=0) or reverse (v=1) outline. */
function glyphs(f: Frame, rev: boolean): ReactElement[] {
  const v = rev ? 1 : 0
  const kids: ReactElement[] = []
  const g = (key: string, x: number, d: string) => <path key={key} d={d} transform={`translate(${x} 0)`} />
  if (f.full) {
    GL.forEach((q) => {
      if (q.ch === 'i' && 'stem' in q) { kids.push(g('s' + q.k, q.x, q.stem[v])); kids.push(g('d' + q.k, q.x, q.dot[v])) }
      else if ('d' in q) kids.push(g('g' + q.k, q.x, q.d[v]))
    })
    return kids
  }
  const o = GL[0] as Extract<Glyph, { d: [string, string] }>
  const i1 = GL[2] as Extract<Glyph, { stem: [string, string] }>
  kids.push(g('o', f.ox ?? 0, o.d[v]))
  if (f.morph) kids.push(<path key="m" d={pill(f.morph, rev)} />)
  const t1 = f.tips?.[0], t2 = f.tips?.[1]
  if (f.stem != null) {
    kids.push(
      <g key="i1">
        {g('st', f.stem, i1.stem[v])}
        {t1 ? <path d={pill(t1, rev)} /> : null}
      </g>,
    )
  }
  ;(f.letters ?? []).forEach((s, k) => {
    if (s.op <= 0) return
    const q = GL[CASC[k]]
    const d = 'stem' in q ? q.stem[v] : q.d[v]
    kids.push(
      <g key={'l' + k} opacity={s.op} transform={`translate(${s.dx} 0)`}>
        {g('p', q.x, d)}
        {q.k === 4 && t2 ? <path d={pill(t2, rev)} /> : null}
      </g>,
    )
  })
  return kids
}

/** 1920 × 1080 stage, or the word's own bounds (the master viewBox, scaled into the stage). */
const FRAME_VIEW_BOX = '0 0 1920 1080'
const BASELINE_Y = 540 + K * (H / 2)
const WORD_VIEW_BOX = `${(960 - (3928 * K) / 2).toFixed(2)} ${(BASELINE_Y - 707 * K).toFixed(2)} ${(3928 * K).toFixed(2)} ${(914 * K).toFixed(2)}`

export type IdentTone = 'auto' | 'ink' | 'reverse'

export interface OriginaryIdentProps {
  /** 'word' crops to the master bounds; 'frame' renders the full 1920 × 1080 stage. */
  crop?: 'word' | 'frame'
  tone?: IdentTone
  /** Optional stage colour for crop="frame": white or ink only. */
  background?: 'white' | 'ink'
  className?: string
  style?: CSSProperties
}

function useOncePlayback(ref: React.RefObject<Element | null>) {
  // Server render and no-JS show the final frame: the master.
  const [t, setT] = useState(IDENT_TOTAL)
  useEffect(() => {
    const el = ref.current
    const still = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (!el || still || typeof IntersectionObserver === 'undefined') return
    let printing = false
    // Arm on the next frame: Origin at alpha 0, so nothing shows until it plays.
    let raf = requestAnimationFrame(() => setT(0))
    const onBefore = () => { printing = true; cancelAnimationFrame(raf); setT(IDENT_TOTAL) }
    window.addEventListener('beforeprint', onBefore)
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        io.disconnect()
        const t0 = performance.now()
        const tick = (now: number) => {
          if (printing) return
          const s = (now - t0) / 1000
          if (s >= IDENT_TOTAL) { setT(IDENT_TOTAL); return }
          setT(s)
          raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.6 },
    )
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf); window.removeEventListener('beforeprint', onBefore) }
  }, [ref])
  return t
}

const INK_FILL = 'var(--grey-950)'
const REVERSE_FILL = 'var(--grey-0)'

export function OriginaryIdent({ crop = 'word', tone = 'auto', background, className, style }: OriginaryIdentProps) {
  const ref = useRef<SVGSVGElement>(null)
  const t = useOncePlayback(ref)
  const f = at(Math.min(t, IDENT_TOTAL))
  const camera = `translate(960 540) scale(${f.k || K}) translate(${-f.cam} ${H / 2})`
  const opacity = f.alpha == null ? 1 : f.alpha
  const layer = (rev: boolean, fill: string, cls?: string) => (
    <g className={cls} style={{ fill }} opacity={opacity} transform={camera}>
      {glyphs(f, rev)}
    </g>
  )
  const stageFill = background === 'ink' ? 'var(--grey-950)' : background === 'white' ? 'var(--grey-0)' : null
  const effectiveTone: IdentTone = background === 'ink' ? 'reverse' : background === 'white' ? 'ink' : tone

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={crop === 'frame' ? FRAME_VIEW_BOX : WORD_VIEW_BOX}
      role="img"
      aria-label="Originary"
      className={className}
      style={{ display: 'block', width: '100%', height: 'auto', overflow: 'visible', ...style }}
    >
      {stageFill && crop === 'frame' ? <rect width={1920} height={1080} style={{ fill: stageFill }} /> : null}
      {effectiveTone === 'ink' && layer(false, INK_FILL)}
      {effectiveTone === 'reverse' && layer(true, REVERSE_FILL)}
      {effectiveTone === 'auto' && (
        <>
          {layer(false, INK_FILL, 'o-wm-ink')}
          {layer(true, REVERSE_FILL, 'o-wm-rev')}
        </>
      )}
    </svg>
  )
}

export default OriginaryIdent
