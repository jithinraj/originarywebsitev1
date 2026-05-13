'use client'

import { useEffect, useState } from 'react'
import { MONO } from './typography'
import { PALETTE, MAX_W, PAGE_PAD } from './palette'
import { Mono, SectionTitle } from './atoms/Mono'
import { Boundary } from './atoms/Boundary'
import { useInView } from './motion/useInView'
import { useEnterClock } from './motion/useEnterClock'
import { useReducedMotion } from './motion/useReducedMotion'
import { clamp01, ease, lerp, tween } from './motion/easing'

export function Problem() {
  return (
    <section
      data-screen-label="02 problem"
      style={{
        maxWidth: MAX_W,
        margin: '0 auto',
        padding: `48px ${PAGE_PAD} 112px ${PAGE_PAD}`,
      }}
    >
      <SectionTitle
        title="Logs stop at the company boundary."
        body="An agent paid for an API call. A gateway routed a request. A tool was approved. A provisioned service changed state. Later a billing, audit, abuse, or procurement question appears. Each side has logs. Nobody has a record both sides can verify."
      />
      <div style={{ marginTop: 48 }}>
        <ProblemAnim />
      </div>
      <div
        style={{
          marginTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          gap: 32,
          flexWrap: 'wrap',
        }}
      >
        <Mono size={12} color={PALETTE.muted}>
          Logs help operators debug.
        </Mono>
        <Mono size={12} color={PALETTE.ink}>
          Records give counterparties neutral proof.
        </Mono>
      </div>
    </section>
  )
}

function ProblemAnim() {
  const { ref, entered } = useInView<HTMLDivElement>({ once: false })
  const reduced = useReducedMotion()
  const tClock = useEnterClock(entered, 6)
  const frameT = tween(tClock, 0.0, 0.5, ease.out)
  const recordFormT = tween(tClock, 1.4, 1.9, ease.out)
  const recordCrossT = tween(tClock, 1.9, 3.4, ease.inOutQuart)
  const time = reduced ? 4.0 : tClock
  const [scale, setScale] = useState(1)

  const W = 760
  const H = 360

  useEffect(() => {
    const el = ref.current
    if (!el || typeof ResizeObserver === 'undefined') return
    const measure = () => {
      const w = el.clientWidth
      if (w > 0) setScale(Math.min(1, w / W))
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [ref])
  const PANEL_W = 300
  const PANEL_H = H - 40
  const leftX = 20
  const rightX = W - PANEL_W - 20
  const boundaryX = W / 2

  const logs = [
    { t: 0.3, label: 'operator log', detail: '14:08:11  POST /v1/search 200' },
    { t: 0.6, label: 'telemetry', detail: 'span 7bc2  latency=412ms' },
    { t: 0.9, label: 'dashboard', detail: 'metric usage.api +1' },
    { t: 1.2, label: 'trace', detail: 'parent.span = a4f1d' },
  ]

  const recordW = 200
  const recordStartX = leftX + 40
  const recordEndX = rightX + 30
  const recordX = lerp(recordStartX, recordEndX, recordCrossT)
  const recordY = H - 110

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: W,
        height: H * scale,
        margin: '0 auto',
        overflow: 'hidden',
        opacity: frameT,
      }}
    >
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: W,
        height: H,
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        background: PALETTE.paper,
        border: `1px solid ${PALETTE.hairline}`,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: leftX,
          top: 16,
          fontFamily: MONO,
          fontSize: 10,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: PALETTE.faint,
        }}
      >
        Company A
      </div>
      <div
        style={{
          position: 'absolute',
          right: 20,
          top: 16,
          fontFamily: MONO,
          fontSize: 10,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: PALETTE.faint,
        }}
      >
        Company B
      </div>

      <div
        style={{
          position: 'absolute',
          left: boundaryX,
          top: 36,
          height: H - 56,
        }}
      >
        <Boundary height={H - 56} />
      </div>

      <div
        style={{
          position: 'absolute',
          left: leftX,
          top: 40,
          width: PANEL_W,
          height: PANEL_H,
          padding: '14px 16px',
        }}
      >
        <Mono
          size={10}
          color={PALETTE.muted}
          style={{ letterSpacing: '0.14em', textTransform: 'uppercase' }}
        >
          local logs
        </Mono>
        <div style={{ marginTop: 10 }}>
          {logs.map((log, i) => {
            const local = clamp01((time - log.t) / 0.4)
            return (
              <div
                key={i}
                style={{
                  opacity: local,
                  transform: `translate(0px, ${(1 - local) * 6}px)`,
                  padding: '5px 0',
                }}
              >
                <Mono size={10} color={PALETTE.faint}>
                  {log.label}
                </Mono>
                <div>
                  <Mono size={11} color={PALETTE.ink}>
                    {log.detail}
                  </Mono>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: boundaryX,
          top: 80,
          transform: 'translate(-50%, 0)',
          opacity: clamp01((time - 2.0) / 0.6) * (recordCrossT > 0.2 ? 0 : 1),
          transition: 'opacity 240ms',
        }}
      >
        <div
          style={{
            fontFamily: MONO,
            fontSize: 9,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: PALETTE.warn,
            background: PALETTE.paper,
            padding: '4px 8px',
            border: `1px solid ${PALETTE.hairline}`,
            whiteSpace: 'nowrap',
          }}
        >
          logs stop here
        </div>
      </div>

      {recordFormT > 0 ? (
        <div
          style={{
            position: 'absolute',
            left: recordX,
            top: recordY,
            width: recordW,
            opacity: recordFormT,
          }}
        >
          <div
            style={{
              background: PALETTE.paper,
              border: `1px solid ${PALETTE.rule}`,
              boxShadow:
                '0 1px 0 rgba(20,17,10,0.04), 0 12px 30px -22px rgba(20,17,10,0.3)',
              padding: '8px 12px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 4,
              }}
            >
              <Mono
                size={10}
                color={PALETTE.muted}
                style={{ letterSpacing: '0.14em', textTransform: 'uppercase' }}
              >
                signed record
              </Mono>
              <Mono size={9} color={PALETTE.accent}>
                portable
              </Mono>
            </div>
            <Mono size={10} color={PALETTE.ink}>
              POST /v1/search · 200
            </Mono>
            <div style={{ marginTop: 2 }}>
              <Mono size={9} color={PALETTE.faint}>
                sig 3045...
              </Mono>
            </div>
          </div>
        </div>
      ) : null}

    </div>
    </div>
  )
}
