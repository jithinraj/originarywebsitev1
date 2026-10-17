'use client'

import { useEffect, useState } from 'react'

/**
 * Constellation: the abstract /about hero. A loose field of points, faintly
 * meshed; arcs travel between distant points and each point an arc reaches
 * lights up and stays lit. No labels: every action, anywhere, leaving a mark.
 *
 * The layout is seeded, so server and client render the same points. Motion is
 * SMIL, mounted only when the reader allows motion; otherwise the finished
 * state is drawn. Styles: app/about/about.css under "Constellation".
 */
type Pt = [number, number]
type Layout = { w: number; h: number; cols: number; nodes: Pt[]; mesh: string; arcs: Array<{ d: string; to: number }>; step: number }

function rng(seed: number) {
  let s = seed
  return () => {
    s = (s + 0x6d2b79f5) | 0
    let t = Math.imul(s ^ (s >>> 15), 1 | s)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function build(w: number, h: number, cols: number, rows: number, count: number, seed: number, step: number): Layout {
  const r = rng(seed)
  const cw = w / cols
  const ch = h / rows
  const nodes: Pt[] = []
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      nodes.push([Math.round((x + 0.5) * cw + (r() - 0.5) * cw * 0.62), Math.round((y + 0.5) * ch + (r() - 0.5) * ch * 0.62)])
    }
  }
  // A faint mesh: each point joined to its right and lower neighbour.
  const seg: string[] = []
  nodes.forEach(([x, y], i) => {
    if (i % cols < cols - 1) seg.push(`M${x} ${y}L${nodes[i + 1][0]} ${nodes[i + 1][1]}`)
    if (i + cols < nodes.length) seg.push(`M${x} ${y}L${nodes[i + cols][0]} ${nodes[i + cols][1]}`)
  })
  // Long arcs between points at least a third of the field apart, each to a new point.
  const arcs: Array<{ d: string; to: number }> = []
  const used = new Set<number>()
  const minDx = Math.max(2, Math.floor(cols / 3))
  for (let guard = 0; arcs.length < count && guard < 5000; guard++) {
    const a = Math.floor(r() * nodes.length)
    const b = Math.floor(r() * nodes.length)
    if (a === b || used.has(b) || Math.abs((a % cols) - (b % cols)) < minDx) continue
    used.add(b)
    const [ax, ay] = nodes[a]
    const [bx, by] = nodes[b]
    const lift = Math.min(h * 0.42, Math.abs(bx - ax) * 0.24) * (arcs.length % 2 ? -1 : 1)
    arcs.push({ d: `M${ax} ${ay}Q${Math.round((ax + bx) / 2)} ${Math.round((ay + by) / 2 - lift)} ${bx} ${by}`, to: b })
  }
  return { w, h, cols, nodes, mesh: seg.join(''), arcs, step }
}

const DESK = build(1200, 340, 12, 4, 18, 7, 0.95)
const MOB = build(360, 300, 5, 5, 12, 11, 1.05)

function Field({ L, mode, lit, className }: { L: Layout; mode: 'idle' | 'motion' | 'still'; lit: boolean; className: string }) {
  const cycle = L.arcs.length * L.step
  const hitAt = new Map<number, number>()
  L.arcs.forEach((a, k) => hitAt.set(a.to, k))
  const draw = 0.06 // share of the cycle an arc takes to travel
  return (
    <svg className={className} viewBox={`0 0 ${L.w} ${L.h}`} aria-hidden>
      <path className="cf-mesh" d={L.mesh} />
      {mode === 'still' ? L.arcs.slice(0, 7).map((a) => <path key={a.d} className="cf-arc-still" d={a.d} />) : null}
      {mode === 'motion'
        ? L.arcs.map((a, k) => {
            const begin = `${0.9 + k * L.step}s`
            const dur = `${cycle}s`
            const [bx, by] = L.nodes[a.to]
            return (
              <g key={a.d}>
                <path className="cf-arc" d={a.d} pathLength={1} strokeDasharray="1" strokeDashoffset="1" opacity="0">
                  <animate attributeName="stroke-dashoffset" values="1;0;0" keyTimes={`0;${draw};1`} dur={dur} begin={begin} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;1;1;0;0" keyTimes={`0;0.004;${draw + 0.03};${draw + 0.13};1`} dur={dur} begin={begin} repeatCount="indefinite" />
                </path>
                <circle className="cf-ring" cx={bx} cy={by} r="3" opacity="0">
                  <animate attributeName="r" values="3;3;20;20" keyTimes={`0;${draw};${draw + 0.08};1`} dur={dur} begin={begin} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;0;0.8;0;0" keyTimes={`0;${draw - 0.002};${draw};${draw + 0.08};1`} dur={dur} begin={begin} repeatCount="indefinite" />
                </circle>
              </g>
            )
          })
        : null}
      {L.nodes.map(([x, y], i) => {
        const k = hitAt.get(i)
        const target = k !== undefined
        return (
          <circle key={i} className="cf-node" cx={x} cy={y} r={target ? 2.8 : 2} opacity={lit || (mode === 'still' && target) ? 1 : 0.32}>
            {mode === 'motion' && target && !lit ? (
              <animate attributeName="opacity" from="0.32" to="1" begin={`${0.9 + k * L.step + draw * cycle}s`} dur="0.6s" fill="freeze" />
            ) : null}
          </circle>
        )
      })}
    </svg>
  )
}

/** `lit`: the finished field, every point reached; the closing bookend to the hero. */
export function Constellation({ lit = false }: { lit?: boolean }) {
  const [mode, setMode] = useState<'idle' | 'motion' | 'still'>('idle')
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const t = window.setTimeout(() => setMode(reduce ? 'still' : 'motion'), 0)
    return () => window.clearTimeout(t)
  }, [])
  return (
    <div className="cf">
      <Field L={DESK} mode={mode} lit={lit} className="cf-svg cf-d" />
      <Field L={MOB} mode={mode} lit={lit} className="cf-svg cf-m" />
    </div>
  )
}
