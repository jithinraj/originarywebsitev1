'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from './useReducedMotion'
import { OriginaryWordmark } from '../../brand/OriginaryWordmark'
import { WORDMARK_INK_PATHS } from '../../brand/wordmark-geometry'

/**
 * AsciiWordmark: the closing signature drawn in characters. The master
 * wordmark geometry (never retyped) is sampled into a character grid; each
 * filled cell is a particle with a home position. Outline cells pick | / \ _ -
 * from the shape's direction; the strokes are shaded as tubes through a
 * density ramp by a light that drifts and follows the cursor; the name
 * "originary" travels through the letters inside a slow light sweep; and:
 *   - on first view the characters fly in and assemble,
 *   - the cursor pushes them aside (they glitch while displaced) and they
 *     glide home,
 *   - a click or tap blasts the word apart from that point; it reassembles.
 * Ink only, following the theme. Reduced motion shows the assembled word,
 * still; without JS the master SVG shows instead.
 */

const VB_W = 3928
const VB_H = 914
const STREAM = 'originary'
// Fill ramp, sparse to dense. On white, dense reads dark; on ink, dense reads bright.
const FILL = ':-=+*#%@'
const GLITCH = '#%&*+=?/<>{}[]01'
const PAD_Y = 0.22 // extra band height above and below the word, as a share of word height

type P = {
  hx: number
  hy: number
  x: number
  y: number
  vx: number
  vy: number
  cov: number
  i: number
  j: number
  /** Seconds after first view before this character starts home (a left-to-right wave). */
  delay: number
  /** Edge cells: a fixed glyph that follows the outline (| / \\ _ -). */
  edge: string
  /** Fill cells: outward normal of the stroke and how far in from the edge (0 edge, 1 core). */
  nx: number
  ny: number
  core: number
}

const hash = (i: number, j: number) => {
  const s = Math.sin(i * 12.9898 + j * 78.233) * 43758.5453
  return s - Math.floor(s)
}

export function AsciiWordmark() {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = ref.current
    const box = canvas?.parentElement
    const ctx = canvas?.getContext('2d')
    if (!canvas || !box || !ctx) return
    const rm = reduced || window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let w = 0
    let h = 0
    let dpr = 1
    let cw = 6
    let ch = 10
    let font = 9
    let parts: P[] = []
    let raf = 0
    let running = false
    let assembled = rm
    let t0 = performance.now()
    const mouse = { x: -9999, y: -9999, on: false }
    let ink = ''
    let dark = false
    // Light direction (screen plane), eased toward the cursor or an idle drift.
    const light = { x: -0.7, y: -0.7 }
    const sprites = new Map<string, HTMLCanvasElement>()

    const readInk = () => {
      ink = getComputedStyle(document.documentElement).getPropertyValue('--ink').trim()
      dark = document.documentElement.getAttribute('data-theme') === 'dark'
      sprites.clear()
    }
    const sprite = (c: string) => {
      let s = sprites.get(c)
      if (s) return s
      s = document.createElement('canvas')
      s.width = Math.ceil(cw * 2 * dpr)
      s.height = Math.ceil(ch * dpr)
      const g = s.getContext('2d')
      if (g) {
        g.scale(dpr, dpr)
        g.font = `500 ${font}px "IBM Plex Mono", ui-monospace, monospace`
        g.textAlign = 'center'
        g.textBaseline = 'middle'
        g.fillStyle = ink
        g.fillText(c, cw, ch / 2 + 0.5)
      }
      sprites.set(c, s)
      return s
    }

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = box.clientWidth
      // Cell size scales with the band so the letters keep their detail at every width.
      cw = Math.max(2.8, Math.min(7, w / 230))
      ch = cw * 1.7
      font = cw * 1.5
      const wordH = (w * VB_H) / VB_W
      h = Math.round(wordH * (1 + PAD_Y * 2))
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      readInk()

      // Rasterise the master paths into a supersampled mask, then read coverage per cell.
      const cols = Math.floor(w / cw)
      const rows = Math.ceil(wordH / ch)
      const SS = 4
      const mask = document.createElement('canvas')
      mask.width = cols * SS
      mask.height = rows * SS
      const m = mask.getContext('2d', { willReadFrequently: true })
      if (!m) return
      const sx = mask.width / VB_W
      const sy = mask.height / VB_H
      m.setTransform(sx, 0, 0, sy, 0, 0)
      m.fillStyle = 'black'
      for (const d of WORDMARK_INK_PATHS) m.fill(new Path2D(d))
      const data = m.getImageData(0, 0, mask.width, mask.height).data
      const top = h * (PAD_Y / (1 + PAD_Y * 2))
      const left = (w - cols * cw) / 2
      const N = cols * rows
      const cov = new Float32Array(N)
      for (let j = 0; j < rows; j += 1) {
        for (let i = 0; i < cols; i += 1) {
          let sum = 0
          for (let y = 0; y < SS; y += 1) {
            for (let x = 0; x < SS; x += 1) {
              sum += data[((j * SS + y) * mask.width + (i * SS + x)) * 4 + 3]
            }
          }
          cov[j * cols + i] = sum / (SS * SS * 255)
        }
      }
      const at = (g: Float32Array, i: number, j: number) =>
        i < 0 || j < 0 || i >= cols || j >= rows ? 0 : g[j * cols + i]

      // Distance from the outline, in cell widths (chamfer, two passes; cells are 1.7x taller).
      const AY = ch / cw
      const AD = Math.hypot(1, AY)
      const dist = new Float32Array(N)
      for (let k = 0; k < N; k += 1) dist[k] = cov[k] >= 0.5 ? 1e6 : 0
      const relax = (i: number, j: number, di: number, dj: number, c: number) => {
        const k = j * cols + i
        if (dist[k] === 0) return
        const ni = i + di
        const nj = j + dj
        const nd = ni < 0 || nj < 0 || ni >= cols || nj >= rows ? 0 : dist[nj * cols + ni]
        if (nd + c < dist[k]) dist[k] = nd + c
      }
      for (let j = 0; j < rows; j += 1) {
        for (let i = 0; i < cols; i += 1) {
          relax(i, j, -1, 0, 1)
          relax(i, j, 0, -1, AY)
          relax(i, j, -1, -1, AD)
          relax(i, j, 1, -1, AD)
        }
      }
      for (let j = rows - 1; j >= 0; j -= 1) {
        for (let i = cols - 1; i >= 0; i -= 1) {
          relax(i, j, 1, 0, 1)
          relax(i, j, 0, 1, AY)
          relax(i, j, 1, 1, AD)
          relax(i, j, -1, 1, AD)
        }
      }

      const next: P[] = []
      for (let j = 0; j < rows; j += 1) {
        for (let i = 0; i < cols; i += 1) {
          const c = cov[j * cols + i]
          if (c < 0.12) continue
          const hx = left + i * cw + cw / 2
          const hy = top + j * ch + ch / 2
          let edge = ''
          let nx = 0
          let ny = 0
          let core = 0
          if (c < 0.5) {
            // Outline glyph from the coverage gradient (it points into the shape).
            const gx = at(cov, i + 1, j) - at(cov, i - 1, j)
            const gy = (at(cov, i, j + 1) - at(cov, i, j - 1)) / AY
            const ang = Math.atan2(Math.abs(gy), Math.abs(gx))
            if (ang < Math.PI / 8) edge = '|'
            else if (ang > (3 * Math.PI) / 8) edge = gy > 0 ? '_' : '-'
            else edge = gx * gy > 0 ? '/' : '\\'
          } else {
            const gx = (at(dist, i + 1, j) - at(dist, i - 1, j)) / 2
            const gy = (at(dist, i, j + 1) - at(dist, i, j - 1)) / (2 * AY)
            const gl = Math.hypot(gx, gy) || 1
            nx = -gx / gl
            ny = -gy / gl
            core = Math.min(1, dist[j * cols + i] / 2.6)
          }
          // Start scattered (assembly) unless reduced motion or already assembled.
          const a = hash(i, j) * Math.PI * 2
          const r = (0.35 + hash(j, i) * 0.9) * w * 0.5
          const start = assembled ? { x: hx, y: hy } : { x: w / 2 + Math.cos(a) * r, y: h / 2 + Math.sin(a) * r * 0.35 }
          next.push({
            hx,
            hy,
            x: start.x,
            y: start.y,
            vx: 0,
            vy: 0,
            cov: c,
            i,
            j,
            delay: (hx / w) * 1.1 + hash(i * 7, j * 3) * 0.35,
            edge,
            nx,
            ny,
            core,
          })
        }
      }
      parts = next
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h)
      // Light: follows the cursor while it is over the word, otherwise drifts slowly.
      let tx: number
      let ty: number
      if (mouse.on) {
        tx = mouse.x - w / 2
        ty = (mouse.y - h / 2) * 2.2
      } else {
        const a = -2.35 + (rm ? 0 : 0.55 * Math.sin(t * 0.22))
        tx = Math.cos(a)
        ty = Math.sin(a)
      }
      const tl = Math.hypot(tx, ty) || 1
      light.x += (tx / tl - light.x) * (rm ? 1 : 0.08)
      light.y += (ty / tl - light.y) * (rm ? 1 : 0.08)
      const ll = Math.hypot(light.x, light.y) || 1
      const lx = (light.x / ll) * 0.78
      const ly = (light.y / ll) * 0.78
      const lz = 0.62

      // The name travels through the letters inside a slow light sweep.
      const sweep = rm ? -1 : ((t * 0.16) % 1.7) * w * 1.3 - w * 0.3
      const band = w * 0.09

      for (const p of parts) {
        const disp = Math.hypot(p.x - p.hx, p.y - p.hy)
        const inBand = sweep > 0 ? Math.max(0, 1 - Math.abs(p.hx - sweep) / band) : 0
        let c: string
        let a: number
        if (disp > 6) {
          c = GLITCH[Math.floor(hash(p.i + Math.floor(t * 12), p.j) * GLITCH.length)]
          a = Math.max(0.35, 0.85 - disp / 700)
        } else if (p.edge) {
          c = p.edge
          a = 0.62 + inBand * 0.3
        } else if (inBand > 0 && hash(p.i * 5, p.j * 3) < inBand * inBand * 1.15) {
          // Dithered: the name fades in and out of the surface instead of a hard stripe.
          c = STREAM[(p.i + p.j * 2) % STREAM.length]
          a = 0.75 + inBand * 0.25
        } else {
          // A tube: the surface normal tips from the outline (sideways) to the core (facing out).
          const s = 1 - p.core
          const nz = Math.sqrt(Math.max(0, 1 - s * s))
          const shade = Math.max(0, Math.min(1, p.nx * s * lx + p.ny * s * ly + nz * lz))
          // On white, light reads as sparse; on ink, light reads as dense.
          const v = dark ? shade : 1 - shade
          c = FILL[Math.min(FILL.length - 1, Math.floor(v * FILL.length))]
          a = 0.55 + v * 0.45
        }
        ctx.globalAlpha = a
        ctx.drawImage(sprite(c), p.x - cw, p.y - ch / 2, cw * 2, ch)
      }
      ctx.globalAlpha = 1
    }

    // Critically damped return home (calm, no overshoot); the cursor pushes.
    const step = (dt: number, t: number) => {
      const k = assembled ? 38 : 16
      const damp = 2 * Math.sqrt(k)
      const R = Math.max(70, w * 0.05)
      for (const p of parts) {
        if (!assembled && t < p.delay) {
          // Waiting its turn: a slow drift in the cloud.
          p.x += Math.sin(t * 2 + p.i) * 0.3
          p.y += Math.cos(t * 1.7 + p.j) * 0.3
          continue
        }
        let ax = (p.hx - p.x) * k - p.vx * damp
        let ay = (p.hy - p.y) * k - p.vy * damp
        if (mouse.on) {
          const mx = p.x - mouse.x
          const my = p.y - mouse.y
          const d2 = mx * mx + my * my
          if (d2 < R * R && d2 > 0.01) {
            const d = Math.sqrt(d2)
            const f = (1 - d / R) * 5200
            ax += (mx / d) * f
            ay += (my / d) * f
          }
        }
        p.vx += ax * dt
        p.vy += ay * dt
        p.x += p.vx * dt
        p.y += p.vy * dt
      }
    }

    let last = 0
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame)
      const dt = Math.min(0.033, (now - (last || now)) / 1000)
      last = now
      const t = (now - t0) / 1000
      if (!assembled && t > 2.6) assembled = true
      step(dt, t)
      draw(t)
    }
    const start = () => {
      if (running || rm) return
      running = true
      last = 0
      raf = requestAnimationFrame(frame)
    }
    const stop = () => {
      running = false
      cancelAnimationFrame(raf)
    }

    build()
    // The canvas is live: let the master SVG fallback step aside.
    box.setAttribute('data-ready', '')
    if (rm) draw(0)

    // Assemble on first view, not on page load.
    let seen = false
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          if (!seen) {
            seen = true
            t0 = performance.now()
          }
          start()
        } else stop()
      },
      { threshold: 0.2 },
    )
    io.observe(canvas)
    const onVis = () => (document.hidden ? stop() : seen && start())
    document.addEventListener('visibilitychange', onVis)

    let builtW = box.clientWidth
    const ro = new ResizeObserver(() => {
      // Only a real width change rebuilds (the first callback fires on observe).
      if (box.clientWidth === builtW) return
      builtW = box.clientWidth
      const wasAssembled = assembled
      assembled = true
      build()
      assembled = wasAssembled
      if (rm) draw(0)
    })
    ro.observe(box)
    const theme = new MutationObserver(() => {
      readInk()
      if (rm) draw(0)
    })
    theme.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    const pos = (ev: PointerEvent) => {
      const b = canvas.getBoundingClientRect()
      return { x: ev.clientX - b.left, y: ev.clientY - b.top }
    }
    const onMove = (ev: PointerEvent) => {
      const q = pos(ev)
      mouse.x = q.x
      mouse.y = q.y
      mouse.on = true
    }
    const onLeave = () => {
      mouse.on = false
    }
    const onDown = (ev: PointerEvent) => {
      const q = pos(ev)
      for (const p of parts) {
        const dx = p.x - q.x
        const dy = p.y - q.y
        const d = Math.hypot(dx, dy) || 1
        const f = (2600 + hash(p.i, p.j) * 2400) * Math.max(0.25, 1 - d / (w * 0.6))
        p.vx += (dx / d) * f
        p.vy += (dy / d) * f * 0.6 - hash(p.j, p.i) * 400
      }
    }
    if (!rm) {
      canvas.addEventListener('pointermove', onMove)
      canvas.addEventListener('pointerleave', onLeave)
      canvas.addEventListener('pointerdown', onDown)
    }
    document.fonts?.ready.then(() => {
      sprites.clear()
      if (rm) draw(0)
    })

    return () => {
      stop()
      io.disconnect()
      ro.disconnect()
      theme.disconnect()
      document.removeEventListener('visibilitychange', onVis)
      canvas.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerleave', onLeave)
      canvas.removeEventListener('pointerdown', onDown)
    }
  }, [reduced])

  return (
    <div className="awm" role="img" aria-label="Originary">
      <canvas ref={ref} className="awm-canvas" aria-hidden />
      <div className="awm-fallback" aria-hidden>
        <OriginaryWordmark width="100%" decorative />
      </div>
    </div>
  )
}
