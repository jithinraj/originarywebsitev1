'use client'

import { useEffect, useRef, useSyncExternalStore } from 'react'
import { useReducedMotion } from './useReducedMotion'

/**
 * BitField: the site's one texture (DESIGN_SYSTEM.md, "The bit field"). A fine grid of mono 0/1
 * glyphs at a whisper of ink. Sparse drops of light fall down single columns, rewriting each bit they
 * pass, the way rain falls in The Matrix but far quieter; the digits themselves never leave the grid.
 * A few bits flip on their own, and the cursor brightens the bits near it and stirs a few. Anything marked
 * data-field-clear inside the same stage stays clear behind a long feathered edge, so the field only
 * sits in the margins around the content. Still under reduced motion, the pause control
 * (lib/motion.ts) and on small screens; nothing renders without JavaScript.
 */

const GAP = 22 // grid pitch, px
const FONT_PX = 10 // glyph size: decoration, aria-hidden, never read
const FRAME_MS = 33 // about 30 frames a second
const CLEAR_PAD = 14 // px kept clear around marked content
const FEATHER = 120 // px over which the field fades in beyond a clear zone
const TOP_FADE = 48 // px over which the field fades in below the header
const BOTTOM_FADE = 120 // px over which the field fades into the next section
const FLIP_S = 1.4 // a bit's own crossfade
const LENS_R = 150 // cursor reach, px
const RAIN_RATE = 0.012 // new drops per column per second (about six falling at once at 1440 px)
const RAIN_MIN = 70 // px per second, slowest drop
const RAIN_MAX = 120 // px per second, fastest drop
const RAIN_TRAIL = 10 // cells of fading light above a drop's head
const RAIN_LIFT = 1.6 // extra brightness at the head, over the resting alpha
const RAIN_FLIP_S = 0.5 // a bit the head passes flips quickly
const MAX_A = 0.2 // ceiling for any glyph's alpha

/** Smoothstep on 0..1, clamped. */
const smooth = (t: number) => {
  const c = Math.min(1, Math.max(0, t))
  return c * c * (3 - 2 * c)
}

const SMALL = '(max-width: 640px)'
const subscribeSmall = (onChange: () => void) => {
  const mq = window.matchMedia(SMALL)
  mq.addEventListener?.('change', onChange)
  return () => mq.removeEventListener?.('change', onChange)
}
const noSubscribe = () => () => {}

export function BitField({
  className,
  tone = 'ink',
  focus = 'center',
  strength = 1,
}: {
  className?: string
  /** 'paper' draws light glyphs for panels that stay dark. */
  tone?: 'ink' | 'paper'
  /** Fallback when the stage marks no clear zones: where the copy usually sits. */
  focus?: 'center' | 'left'
  /** Alpha multiplier (1 = default). */
  strength?: number
}) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLCanvasElement | null>(null)
  // Server render and first client render agree on the placeholder; then the field starts.
  const hydrated = useSyncExternalStore(noSubscribe, () => true, () => false)
  const small = useSyncExternalStore(subscribeSmall, () => window.matchMedia(SMALL).matches, () => false)
  const mode = !hydrated ? 'boot' : reduced || small ? 'still' : 'live'

  useEffect(() => {
    if (mode === 'boot') return
    const canvas = ref.current
    const parent = canvas?.parentElement
    const ctx = canvas?.getContext('2d')
    if (!canvas || !parent || !ctx) return
    const live = mode === 'live'

    const cssVar = (name: string) =>
      getComputedStyle(document.documentElement).getPropertyValue(name).trim() || 'currentColor'

    let w = 0
    let h = 0
    let dpr = 1
    let cols = 0
    let rows = 0
    let bits = new Uint8Array(0)
    let from = new Uint8Array(0) // the bit a running flip started from
    let flipT = new Float32Array(0) // seconds into a flip; below zero when settled
    let flipLen = new Float32Array(0) // length of the running flip, s
    let dropY = new Float32Array(0) // per column: a drop's head, px; NaN while the column is dry
    let dropV = new Float32Array(0) // per column: that drop's speed, px per second
    let wet = new Uint8Array(0) // per column: 1 when any of its cells can show, so rain is never wasted
    let restA = new Float32Array(0) // resting alpha per cell, clear zones and edges applied
    let visible = new Uint32Array(0) // cells with any alpha at all
    let sprites: HTMLCanvasElement[] = []
    let base = 0
    let raf = 0
    let running = false
    let last = 0
    const cursor = { x: -1e4, y: -1e4 }

    const sprite = (glyph: string, color: string) => {
      const s = document.createElement('canvas')
      const size = Math.ceil(FONT_PX * 1.4 * dpr)
      s.width = size
      s.height = size
      const c = s.getContext('2d')
      if (!c) return s
      c.scale(dpr, dpr)
      c.font = `500 ${FONT_PX}px "IBM Plex Mono", ui-monospace, monospace`
      c.textAlign = 'center'
      c.textBaseline = 'middle'
      c.fillStyle = color
      c.fillText(glyph, size / dpr / 2, size / dpr / 2)
      return s
    }

    // Glyph colour and resting alpha come from the theme, so a theme switch repaints the field.
    const paint = () => {
      const dark = document.documentElement.getAttribute('data-theme') === 'dark'
      sprites = ['0', '1'].map((g) => sprite(g, tone === 'paper' ? cssVar('--on-dark') : cssVar('--ink')))
      base = (tone === 'paper' ? 0.085 : 0.06) * strength * (tone === 'ink' && dark ? 1.25 : 1)
    }

    const cellX = (i: number) => (i % cols) * GAP + GAP / 2
    const cellY = (i: number) => ((i / cols) | 0) * GAP + 10

    const measure = () => {
      const pr = parent.getBoundingClientRect()
      const zones = Array.from(parent.querySelectorAll<HTMLElement>('[data-field-clear]'))
        .map((el) => el.getBoundingClientRect())
        .filter((r) => r.width > 0 && r.height > 0)
        .map((r) => ({
          l: r.left - pr.left - CLEAR_PAD,
          t: r.top - pr.top - CLEAR_PAD,
          r: r.right - pr.left + CLEAR_PAD,
          b: r.bottom - pr.top + CLEAR_PAD,
        }))
      const n = cols * rows
      const list: number[] = []
      restA = new Float32Array(n)
      for (let i = 0; i < n; i++) {
        const x = cellX(i)
        const y = cellY(i)
        let k = 1
        if (zones.length) {
          for (const z of zones) {
            const d = Math.hypot(Math.max(z.l - x, 0, x - z.r), Math.max(z.t - y, 0, y - z.b))
            const s = Math.min(1, d / FEATHER)
            k = Math.min(k, s * s * (3 - 2 * s))
            if (k === 0) break
          }
        } else {
          // No marked content: thin an ellipse around where the copy usually sits.
          const ex = (x - (focus === 'left' ? w * 0.3 : w * 0.5)) / Math.max(w * 0.3, 260)
          const ey = (y - (focus === 'left' ? h * 0.44 : h * 0.36)) / Math.max(h * 0.36, 180)
          const t = Math.min(Math.max((Math.hypot(ex, ey) - 0.95) / 0.5, 0), 1)
          k = t * t
        }
        // Densest at the far sides, easing out toward the centre line, so the field frames the stage;
        // short fades under the header and into the next section.
        const side = smooth((Math.abs(x - w / 2) / (w / 2) - 0.3) / 0.55)
        const edges = Math.min(1, y / TOP_FADE) * Math.min(1, Math.max(0, (h - y) / BOTTOM_FADE))
        const a = base * k * side * edges
        restA[i] = a
        if (a > 0.003) list.push(i)
      }
      visible = Uint32Array.from(list)
      wet = new Uint8Array(cols)
      for (const i of list) wet[i % cols] = 1
    }

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = parent.clientWidth
      h = parent.clientHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cols = Math.ceil(w / GAP) + 1
      rows = Math.ceil(h / GAP) + 1
      const n = cols * rows
      bits = new Uint8Array(n)
      from = new Uint8Array(n)
      flipT = new Float32Array(n).fill(-1)
      flipLen = new Float32Array(n).fill(FLIP_S)
      dropY = new Float32Array(cols).fill(NaN)
      dropV = new Float32Array(cols)
      for (let i = 0; i < n; i++) {
        // Seeded per cell, so the field looks the same after a resize.
        const s = Math.sin((i % cols) * 127.1 + ((i / cols) | 0) * 311.7) * 43758.5453
        bits[i] = s - Math.floor(s) > 0.5 ? 1 : 0
      }
      paint()
      measure()
    }

    const draw = (dt: number) => {
      ctx.clearRect(0, 0, w, h)
      const size = FONT_PX * 1.4
      const half = size / 2
      if (live) {
        // Rain: a dry column starts a drop now and then; a falling drop rewrites each bit its head passes.
        for (let c = 0; c < cols; c++) {
          if (!wet[c]) continue
          if (Number.isNaN(dropY[c])) {
            if (Math.random() < dt * RAIN_RATE) {
              dropY[c] = -GAP
              dropV[c] = RAIN_MIN + Math.random() * (RAIN_MAX - RAIN_MIN)
            }
            continue
          }
          const prev = dropY[c]
          const next = prev + dropV[c] * dt
          dropY[c] = next
          for (let r = Math.max(0, Math.floor((prev - 10) / GAP) + 1); r < rows && r * GAP + 10 <= next; r++) {
            const i = r * cols + c
            if (flipT[i] < 0 && restA[i] > 0.003) {
              from[i] = bits[i]
              bits[i] ^= 1
              flipT[i] = 0
              flipLen[i] = RAIN_FLIP_S
            }
          }
          if (next - RAIN_TRAIL * GAP > h) dropY[c] = NaN
        }
      }
      for (let j = 0; j < visible.length; j++) {
        const i = visible[j]
        const x = cellX(i)
        const y = cellY(i)
        let lift = 1
        let mix = 1
        if (live) {
          // Light above a drop's head: brightest at the head, fading up its trail.
          const head = dropY[i % cols]
          if (!Number.isNaN(head)) {
            const d = (head - y) / GAP
            if (d >= 0 && d < RAIN_TRAIL) lift += RAIN_LIFT * (1 - d / RAIN_TRAIL) ** 2
          }
          const dx = x - cursor.x
          const dy = y - cursor.y
          const d2 = dx * dx + dy * dy
          const lens = d2 < LENS_R * LENS_R ? (1 - Math.sqrt(d2) / LENS_R) ** 2 : 0
          // Bits flip rarely on their own and a little more near the cursor.
          lift += 1.2 * lens
          if (flipT[i] < 0 && Math.random() < dt * (0.004 + 0.3 * lens)) {
            from[i] = bits[i]
            bits[i] ^= 1
            flipT[i] = 0
            flipLen[i] = FLIP_S
          }
          if (flipT[i] >= 0) {
            flipT[i] += dt
            const e = Math.min(1, flipT[i] / flipLen[i])
            mix = e * e * (3 - 2 * e)
            lift += 0.35 * Math.sin(Math.PI * e)
            if (e >= 1) flipT[i] = -1
          }
        }
        const a = Math.min(MAX_A, restA[i] * lift)
        if (mix < 1) {
          ctx.globalAlpha = a * (1 - mix)
          ctx.drawImage(sprites[from[i]], x - half, y - half, size, size)
        }
        ctx.globalAlpha = a * mix
        ctx.drawImage(sprites[bits[i]], x - half, y - half, size, size)
      }
      ctx.globalAlpha = 1
    }

    const frame = (t: number) => {
      raf = 0
      if (!running) return
      if (t - last >= FRAME_MS) {
        const dt = last ? Math.min(0.1, (t - last) / 1000) : 0
        last = t
        draw(dt)
      }
      raf = requestAnimationFrame(frame)
    }
    const start = () => {
      if (running || !live) return
      running = true
      last = 0
      if (!raf) raf = requestAnimationFrame(frame)
    }
    const stop = () => {
      running = false
      if (raf) cancelAnimationFrame(raf)
      raf = 0
    }

    build()
    draw(0)

    const ro = new ResizeObserver(() => {
      if (parent.clientWidth !== w || parent.clientHeight !== h) build()
      else measure()
      if (!running) draw(0)
    })
    ro.observe(parent)
    parent.querySelectorAll('[data-field-clear]').forEach((el) => ro.observe(el))
    const themeObserver = new MutationObserver(() => {
      paint()
      measure()
      if (!running) draw(0)
    })
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    let io: IntersectionObserver | null = null
    const onVisibility = () => (document.hidden ? stop() : start())
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      const r = parent.getBoundingClientRect()
      cursor.x = e.clientX - r.left
      cursor.y = e.clientY - r.top
    }
    const onLeave = () => {
      cursor.x = -1e4
      cursor.y = -1e4
    }
    if (live) {
      io = new IntersectionObserver((entries) => entries.forEach((e) => (e.isIntersecting ? start() : stop())), {
        threshold: 0.05,
      })
      io.observe(parent)
      document.addEventListener('visibilitychange', onVisibility)
      parent.addEventListener('pointermove', onMove, { passive: true })
      parent.addEventListener('pointerleave', onLeave, { passive: true })
    }

    return () => {
      stop()
      ro.disconnect()
      themeObserver.disconnect()
      io?.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      parent.removeEventListener('pointermove', onMove)
      parent.removeEventListener('pointerleave', onLeave)
    }
  }, [mode, tone, focus, strength])

  if (mode === 'boot') {
    return <div className={`cin-dotgrid${tone === 'paper' ? ' cin-dotgrid-ink' : ''}`} aria-hidden />
  }
  return <canvas ref={ref} className={className} aria-hidden style={{ width: '100%', height: '100%' }} />
}
