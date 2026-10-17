'use client'

import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { FlowPanel, type FlowBeat } from '../specimens/FlowPanel'

export type Surface = {
  id: string
  title: string
  thesis: string
  intro: ReactNode
  binds: string[]
  carrier: string
  actors: string[]
  flow: FlowBeat[]
  fails: Array<{ title: string; body: string }>
}

/**
 * One specimen, six surfaces: the same record grammar shown per surface as
 * tabs. The URL hash (#s-api, #s-mcp, ...) selects a tab, so deep links keep
 * working, and switching tabs updates the hash without scrolling.
 */
export function SurfaceTabs({ surfaces }: { surfaces: Surface[] }) {
  const [active, setActive] = useState(0)
  const tabs = useRef<Array<HTMLButtonElement | null>>([])
  const uid = useId()

  useEffect(() => {
    const fromHash = () => {
      const i = surfaces.findIndex((s) => `#${s.id}` === window.location.hash)
      if (i >= 0) setActive(i)
    }
    fromHash()
    window.addEventListener('hashchange', fromHash)
    return () => window.removeEventListener('hashchange', fromHash)
  }, [surfaces])

  const select = (i: number, focus = false) => {
    setActive(i)
    history.replaceState(null, '', `#${surfaces[i].id}`)
    if (focus) tabs.current[i]?.focus()
  }

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const n = surfaces.length
    const next =
      e.key === 'ArrowRight' || e.key === 'ArrowDown'
        ? (i + 1) % n
        : e.key === 'ArrowLeft' || e.key === 'ArrowUp'
          ? (i - 1 + n) % n
          : e.key === 'Home'
            ? 0
            : e.key === 'End'
              ? n - 1
              : -1
    if (next < 0) return
    e.preventDefault()
    select(next, true)
  }

  const s = surfaces[active]
  return (
    <div className="hw-tabs">
      {/* Anchors for every surface, so #s-... links resolve even before hydration. */}
      {surfaces.map((x) => (
        <span key={x.id} id={x.id} className="hw-anchor" aria-hidden />
      ))}
      <div className="hw-tablist" role="tablist" aria-label="Surfaces">
        {surfaces.map((x, i) => (
          <button
            key={x.id}
            ref={(el) => {
              tabs.current[i] = el
            }}
            type="button"
            role="tab"
            id={`${uid}-t${i}`}
            aria-selected={i === active}
            aria-controls={`${uid}-p`}
            tabIndex={i === active ? 0 : -1}
            className="hw-tab"
            onClick={() => select(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {x.title}
          </button>
        ))}
      </div>

      <div className="hw-panel" role="tabpanel" id={`${uid}-p`} aria-labelledby={`${uid}-t${active}`} key={s.id}>
        <div className="hw-panel-text">
          <h3 className="hw-title">{s.title}</h3>
          <p className="hw-thesis">{s.thesis}</p>
          <div className="hw-intro">{s.intro}</div>
          <p className="hw-label">The record binds</p>
          <ul className="hw-binds" role="list">
            {s.binds.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p className="hw-carrier">{s.carrier}</p>
        </div>
        <div className="hw-panel-flow">
          <FlowPanel
            actors={s.actors}
            beats={s.flow}
            label={`Sequence diagram for ${s.title}: ${s.flow.map((b) => b.label).join('; ')}.`}
          />
        </div>
      </div>

      <ul className="hw-fails" role="list" aria-label={`Questions a ${s.title.toLowerCase()} record answers`}>
        {s.fails.map((f) => (
          <li key={f.title}>
            <p className="hw-fail-t">{f.title}</p>
            <p className="hw-fail-b">{f.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
