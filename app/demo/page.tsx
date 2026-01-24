'use client'

import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { Check, Copy, Play, Pause, SkipForward, RotateCcw, ChevronLeft, ChevronRight, Download, ExternalLink } from 'lucide-react'

const PEAC_TXT_CONTENT = `# PEAC Policy Document
version: peac-policy/0.1
usage: conditional
purposes: [inference, ai_input]
receipts: required
attribution: required
rate_limit: 1000/hour
payment_methods: [x402, stripe]
payment_endpoint: https://www.originary.xyz/api/pay
negotiate: https://www.originary.xyz/api/negotiate
contact: contact@originary.xyz`

const HTTP_EXCHANGES = [
  {
    title: 'Step 1: Discovery',
    request: `GET /.well-known/peac.txt HTTP/1.1
Host: originary.xyz`,
    response: `HTTP/1.1 200 OK
Content-Type: text/plain

${PEAC_TXT_CONTENT}`
  },
  {
    title: 'Step 2: 402 Challenge',
    request: `GET /demo/paid-resource HTTP/1.1
Host: originary.xyz
User-Agent: ExampleAgent/1.0`,
    response: `HTTP/1.1 402 Payment Required
Content-Type: application/problem+json
PAYMENT-REQUIRED: <base64url payment requirements>

{
  "type": "https://peacprotocol.org/problems/payment-required",
  "title": "Payment required",
  "status": 402
}`
  },
  {
    title: 'Step 3: Paid Retry + Receipt',
    request: `GET /demo/paid-resource HTTP/1.1
Host: originary.xyz
User-Agent: ExampleAgent/1.0
PAYMENT-SIGNATURE: <signed payment payload>`,
    response: `HTTP/1.1 200 OK
Content-Type: application/json
PEAC-Receipt: eyJhbGciOiJFZERTQSIsInR5cCI6...

{"status":"success","data":{...}}`
  }
]

const TRACE_STEPS = [
  { key: 'request', title: 'Agent request', desc: 'Autonomous agent needs your API or content' },
  { key: 'discover', title: 'Policy discovery', desc: 'Agent fetches peac.txt and learns discovery URLs' },
  { key: 'prefs', title: 'Preferences check', desc: 'Agent fetches aipref.json (or uses cached snapshot)' },
  { key: 'evaluate', title: 'Policy evaluation', desc: 'Server decides: allow, deny, or require payment (402)' },
  { key: 'challenge', title: '402 challenge', desc: 'Server returns 402 with PAYMENT-REQUIRED instructions' },
  { key: 'payment', title: 'Payment adapter', desc: 'Client retries using a supported adapter (x402)' },
  { key: 'access', title: 'Resource access', desc: 'Server returns resource when requirements are satisfied' },
  { key: 'receipt', title: 'PEAC-Receipt', desc: 'Server attaches signed PEAC-Receipt (JWS) to response' },
]

const DECODED_RECEIPT = {
  typ: 'peac-receipt/0.1',
  iss: 'https://www.originary.xyz',
  sub: 'https://www.originary.xyz/demo/paid-resource',
  iat: 1734084000,
  policy_hash: 'sha256-9f3c8a2b1d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a',
  aipref: {
    url: '/.well-known/aipref.json',
    retrieved_at: 1734084000,
    hash: 'sha256-a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2'
  },
  payment: {
    rail: 'x402',
    currency: 'USD',
    amount: 5,
    idempotency_key: 'idem_7f92ab31c4d5e6f7',
    evidence: {
      reference: 'x402_pay_2025_abc123'
    }
  }
}

const DISPUTE_PACKET_PREVIEW = `{"ts":"2026-01-02T12:00:00Z","request_hash":"sha256-...","policy_hash":"sha256-...","aipref_hash":"sha256-...","receipt_jws":"eyJhbGci...","payment_reference":"x402_pay_..."}
{"ts":"2026-01-02T12:01:00Z","request_hash":"sha256-...","policy_hash":"sha256-...","aipref_hash":"sha256-...","receipt_jws":"eyJhbGci...","payment_reference":"x402_pay_..."}
{"ts":"2026-01-02T12:02:00Z","request_hash":"sha256-...","policy_hash":"sha256-...","aipref_hash":"sha256-...","receipt_jws":"eyJhbGci...","payment_reference":"x402_pay_..."}`

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reducedMotion
}

function useCopyToClipboard() {
  const [copied, setCopied] = useState(false)
  const copy = useCallback((text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [])
  return { copied, copy }
}


// SVG Circular Flowchart with animations
function CircularFlowchart({
  activeStep,
  onStepClick,
  isPlaying,
  onPlayPause,
  onRestart,
  onPrev,
  onNext
}: {
  activeStep: number
  onStepClick: (idx: number) => void
  isPlaying: boolean
  onPlayPause: () => void
  onRestart: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const reducedMotion = useReducedMotion()
  const steps = TRACE_STEPS
  const nodeCount = steps.length
  const cx = 200, cy = 200, r = 140

  // Calculate node positions
  const nodes = useMemo(() => {
    return steps.map((step, i) => {
      const angle = (-90 + (360 / nodeCount) * i) * (Math.PI / 180)
      return {
        ...step,
        x: cx + r * Math.cos(angle),
        y: cy + r * Math.sin(angle),
        angle
      }
    })
  }, [nodeCount])

  // Generate edge paths
  const edges = useMemo(() => {
    return nodes.map((node, i) => {
      const next = nodes[(i + 1) % nodeCount]
      const midX = (node.x + next.x) / 2
      const midY = (node.y + next.y) / 2
      const dx = next.x - node.x
      const dy = next.y - node.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      const cpX = midX + (cx - midX) * 0.3
      const cpY = midY + (cy - midY) * 0.3
      return {
        path: `M ${node.x} ${node.y} Q ${cpX} ${cpY} ${next.x} ${next.y}`,
        length: dist * 1.2
      }
    })
  }, [nodes, nodeCount])

  return (
    <div className="flowchart-container">
      <svg viewBox="0 0 400 400" className="flowchart-svg">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent-brand)" />
            <stop offset="100%" stopColor="var(--accent-secondary)" />
          </linearGradient>
        </defs>

        {/* Background circle */}
        <circle cx={cx} cy={cy} r={r + 20} fill="none" stroke="var(--border-default)" strokeWidth="1" strokeDasharray="4 4" />

        {/* Edge paths */}
        {edges.map((edge, i) => {
          const isActive = i === activeStep
          const isPast = i < activeStep
          return (
            <g key={`edge-${i}`}>
              <path d={edge.path} fill="none" stroke="var(--border-default)" strokeWidth="2" />
              {(isActive || isPast) && (
                <path
                  d={edge.path}
                  fill="none"
                  stroke="url(#edgeGradient)"
                  strokeWidth="2.5"
                  filter={isActive ? "url(#glow)" : undefined}
                  className={`edge-path ${isActive && !reducedMotion ? 'edge-active' : ''}`}
                  style={{
                    strokeDasharray: edge.length,
                    strokeDashoffset: isActive && !reducedMotion ? edge.length : 0,
                    '--edge-length': `${edge.length}px`
                  } as React.CSSProperties}
                />
              )}
            </g>
          )
        })}

        {/* Nodes */}
        {nodes.map((node, i) => {
          const isActive = i === activeStep
          const isPast = i < activeStep
          return (
            <g key={node.key} className="node-group" onClick={() => onStepClick(i)} style={{ cursor: 'pointer' }}>
              {/* Node circle */}
              <circle
                cx={node.x}
                cy={node.y}
                r="16"
                fill={isActive ? 'var(--accent-brand)' : isPast ? 'var(--accent-secondary)' : 'var(--surface-card)'}
                stroke={isActive ? 'var(--accent-brand)' : isPast ? 'var(--accent-secondary)' : 'var(--border-default)'}
                strokeWidth="2"
                className="node-circle"
                filter={isActive ? "url(#glow)" : undefined}
              />
              {/* Node number */}
              <text
                x={node.x}
                y={node.y}
                textAnchor="middle"
                dominantBaseline="central"
                fill={isActive || isPast ? 'white' : 'var(--text-tertiary)'}
                fontSize="11"
                fontWeight="600"
                style={{ pointerEvents: 'none', fontFamily: 'var(--font-mono)' }}
              >
                {i + 1}
              </text>
            </g>
          )
        })}
      </svg>

      {/* Center info card */}
      <div className="center-card">
        <div className="step-badge">{activeStep + 1} / {steps.length}</div>
        <h4 className="step-title">{steps[activeStep].title}</h4>
        <p className="step-desc">{steps[activeStep].desc}</p>

        {/* Controls */}
        <div className="controls">
          <button type="button" onClick={onPrev} className="ctrl-btn" aria-label="Previous step">
            <ChevronLeft size={16} />
          </button>
          <button type="button" onClick={onPlayPause} className="ctrl-btn ctrl-primary" aria-label={isPlaying ? 'Pause' : 'Play'}>
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <button type="button" onClick={onNext} className="ctrl-btn" aria-label="Next step">
            <ChevronRight size={16} />
          </button>
          <button type="button" onClick={onRestart} className="ctrl-btn" aria-label="Restart">
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .flowchart-container {
          position: relative;
          width: 100%;
          max-width: 420px;
          margin: 0 auto;
          aspect-ratio: 1;
        }
        .flowchart-svg {
          width: 100%;
          height: 100%;
        }
        .node-circle {
          transition: all 0.2s ease;
        }
        .node-group:hover .node-circle {
          filter: url(#glow);
        }
        .edge-path {
          transition: stroke-dashoffset 0.9s ease-out;
        }
        .edge-active {
          animation: edgeReveal 0.9s ease-out forwards;
        }
        @keyframes edgeReveal {
          from { stroke-dashoffset: var(--edge-length); }
          to { stroke-dashoffset: 0; }
        }
        .center-card {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: clamp(140px, 45%, 180px);
          padding: var(--space-3);
          background: var(--surface-elevated);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          text-align: center;
        }
        .step-badge {
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--text-tertiary);
          margin-bottom: var(--space-1);
          letter-spacing: 0.05em;
        }
        .step-title {
          font-size: clamp(11px, 2.5vw, 14px);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--space-1);
          line-height: 1.2;
        }
        .step-desc {
          font-size: clamp(9px, 2vw, 11px);
          color: var(--text-secondary);
          line-height: 1.3;
          margin-bottom: var(--space-2);
        }
        .controls {
          display: flex;
          justify-content: center;
          gap: var(--space-1);
        }
        .ctrl-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border: 1px solid var(--border-default);
          border-radius: var(--radius-md);
          background: var(--surface-elevated);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.12s ease;
        }
        .ctrl-btn:hover {
          background: var(--surface-subtle);
          border-color: var(--border-default);
          color: var(--text-primary);
        }
        .ctrl-btn:active {
          transform: scale(0.96);
        }
        .ctrl-primary {
          background: var(--accent-brand);
          border-color: var(--accent-brand);
          color: white;
        }
        .ctrl-primary:hover {
          background: var(--accent-brand);
          opacity: 0.9;
          border-color: var(--accent-brand);
          color: white;
        }
        @media (prefers-reduced-motion: reduce) {
          .edge-path, .node-circle {
            animation: none !important;
            transition: none !important;
          }
          .edge-active {
            stroke-dashoffset: 0 !important;
          }
        }
        @media (max-width: 480px) {
          .flowchart-container {
            max-width: 320px;
          }
          .center-card {
            width: 120px;
            padding: var(--space-2);
          }
          .ctrl-btn {
            width: 24px;
            height: 24px;
          }
        }
      `}</style>
    </div>
  )
}

// Code block with line-by-line reveal - fixed to not restart on every render
function AnimatedCodeBlock({
  code,
  reveal = false,
  revealSpeed = 100,
  label,
  codeKey
}: {
  code: string
  reveal?: boolean
  revealSpeed?: number
  label?: string
  codeKey?: string
}) {
  const reducedMotion = useReducedMotion()
  const { copied, copy } = useCopyToClipboard()
  const lines = useMemo(() => code.split('\n'), [code])
  const [visibleLines, setVisibleLines] = useState(lines.length)
  const animationRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (animationRef.current) {
      clearInterval(animationRef.current)
    }

    if (reducedMotion || !reveal) {
      setVisibleLines(lines.length)
      return
    }

    setVisibleLines(0)
    let i = 0
    animationRef.current = setInterval(() => {
      i++
      setVisibleLines(i)
      if (i >= lines.length) {
        if (animationRef.current) clearInterval(animationRef.current)
      }
    }, revealSpeed)

    return () => {
      if (animationRef.current) clearInterval(animationRef.current)
    }
  }, [codeKey, lines.length, reveal, revealSpeed, reducedMotion])

  // Simple syntax highlighting
  const highlightLine = (line: string, idx: number) => {
    if (/^(GET|POST|PUT|DELETE|PATCH|HTTP\/\d)/i.test(line)) {
      return <span key={idx} className="hl-method">{line}</span>
    }
    if (/^[A-Za-z-]+:/.test(line)) {
      const colonIdx = line.indexOf(':')
      return (
        <span key={idx}>
          <span className="hl-key">{line.slice(0, colonIdx + 1)}</span>
          {line.slice(colonIdx + 1)}
        </span>
      )
    }
    if (line.includes('"') && line.includes(':')) {
      const parts = line.split(/(".*?":)/g)
      return (
        <span key={idx}>
          {parts.map((part, j) =>
            /".*?":/.test(part) ? <span key={j} className="hl-key">{part}</span> : part
          )}
        </span>
      )
    }
    return line
  }

  return (
    <div className="code-block">
      {label && <div className="code-label">{label}</div>}
      <div className="code-header">
        <div className="code-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <button type="button" className="copy-btn" onClick={() => copy(code)} aria-label="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <pre className="code-body">
        <code>
          {lines.slice(0, visibleLines).map((line, i) => (
            <div key={i} className="code-line">
              {highlightLine(line, i)}
            </div>
          ))}
          {visibleLines < lines.length && !reducedMotion && (
            <span className="cursor">|</span>
          )}
        </code>
      </pre>
      <style jsx>{`
        .code-block {
          background: #0d0d0d;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: var(--radius-xl);
          overflow: hidden;
        }
        .code-label {
          padding: var(--space-2) var(--space-4);
          background: var(--accent-brand-muted);
          border-bottom: 1px solid rgba(255,255,255,0.1);
          font-size: 10px;
          font-weight: 700;
          color: var(--accent-brand);
          font-family: var(--font-mono);
          letter-spacing: 0.08em;
        }
        .code-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--space-2) var(--space-3);
          background: rgba(255,255,255,0.03);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .code-dots {
          display: flex;
          gap: 5px;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .dot-red { background: #ff5f56; }
        .dot-yellow { background: #ffbd2e; }
        .dot-green { background: #27c93f; }
        .copy-btn {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 3px 8px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          font-size: 10px;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .copy-btn:hover {
          background: rgba(255,255,255,0.1);
          color: white;
        }
        .copy-btn:active {
          transform: scale(0.96);
        }
        .code-body {
          padding: var(--space-3);
          margin: 0;
          overflow-x: auto;
          font-family: var(--font-mono);
          font-size: 11px;
          line-height: 1.5;
          color: #e4e4e7;
          min-height: 60px;
        }
        .code-line {
          min-height: 1.5em;
          white-space: pre;
        }
        .code-body :global(.hl-method) {
          color: #4ade80;
          font-weight: 600;
        }
        .code-body :global(.hl-key) {
          color: #a78bfa;
        }
        .cursor {
          animation: blink 1s step-end infinite;
          color: var(--accent-brand);
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .cursor { animation: none; opacity: 1; }
        }
        @media (max-width: 480px) {
          .code-body {
            font-size: 10px;
            padding: var(--space-2);
          }
        }
      `}</style>
    </div>
  )
}

// Receipt typewriter with syntax highlighting
function ReceiptTypewriter({
  isActive
}: {
  isActive: boolean
}) {
  const reducedMotion = useReducedMotion()
  const [text, setText] = useState('')
  const [isVerified, setIsVerified] = useState(false)
  const fullText = JSON.stringify(DECODED_RECEIPT, null, 2)
  const charSpeed = 25
  const intervalMs = 1000 / charSpeed
  const animationRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (animationRef.current) {
      clearInterval(animationRef.current)
    }

    if (!isActive) {
      setText('')
      setIsVerified(false)
      return
    }

    if (reducedMotion) {
      setText(fullText)
      setTimeout(() => setIsVerified(true), 300)
      return
    }

    let i = 0
    animationRef.current = setInterval(() => {
      i++
      setText(fullText.slice(0, i))
      if (i >= fullText.length) {
        if (animationRef.current) clearInterval(animationRef.current)
        setTimeout(() => setIsVerified(true), 200)
      }
    }, intervalMs)

    return () => {
      if (animationRef.current) clearInterval(animationRef.current)
    }
  }, [isActive, fullText, intervalMs, reducedMotion])

  // Syntax highlight JSON
  const highlightJSON = (json: string) => {
    return json
      .replace(/"([^"]+)":/g, '<span class="json-key">"$1"</span>:')
      .replace(/: "([^"]+)"/g, ': <span class="json-string">"$1"</span>')
      .replace(/: (\d+)/g, ': <span class="json-number">$1</span>')
  }

  return (
    <div className="receipt-typewriter">
      <div className="receipt-header">
        <span className="receipt-label">DECODED RECEIPT PAYLOAD (v0.10.0)</span>
        {isVerified && (
          <span className="verified-badge">
            <Check size={12} />
            Signature Verified
          </span>
        )}
      </div>
      <pre className="receipt-body">
        <code dangerouslySetInnerHTML={{ __html: highlightJSON(text) }} />
        {text.length < fullText.length && !reducedMotion && (
          <span className="cursor">|</span>
        )}
      </pre>
      <p className="receipt-note">
        This shows why PEAC is proof: the receipt binds the request to a specific policy snapshot and payment evidence.
      </p>
      <style jsx>{`
        .receipt-typewriter {
          background: #0d0d0d;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: var(--radius-xl);
          overflow: hidden;
        }
        .receipt-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: var(--space-2);
          padding: var(--space-3) var(--space-4);
          background: rgba(255,255,255,0.03);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .receipt-label {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-tertiary);
          letter-spacing: 0.05em;
        }
        .verified-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          background: var(--accent-secondary-muted);
          border: 1px solid rgba(0, 212, 170, 0.4);
          border-radius: var(--radius-full);
          font-size: 11px;
          font-weight: 600;
          color: var(--accent-secondary);
          animation: verifyPop 0.3s ease;
        }
        @keyframes verifyPop {
          0% { transform: scale(0.9); opacity: 0; }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }
        .receipt-body {
          padding: var(--space-4);
          margin: 0;
          max-height: 350px;
          overflow: auto;
          font-family: var(--font-mono);
          font-size: 11px;
          line-height: 1.5;
          color: #e4e4e7;
        }
        .receipt-body :global(.json-key) {
          color: #a78bfa;
        }
        .receipt-body :global(.json-string) {
          color: #4ade80;
        }
        .receipt-body :global(.json-number) {
          color: #fbbf24;
        }
        .cursor {
          animation: blink 1s step-end infinite;
          color: var(--accent-brand);
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        .receipt-note {
          padding: var(--space-3) var(--space-4);
          margin: 0;
          background: var(--accent-brand-subtle);
          border-top: 1px solid rgba(255,255,255,0.06);
          font-size: 12px;
          color: var(--text-muted);
        }
        @media (prefers-reduced-motion: reduce) {
          .cursor { animation: none; }
          .verified-badge { animation: none; }
        }
        @media (max-width: 480px) {
          .receipt-body {
            font-size: 10px;
            padding: var(--space-3);
          }
          .receipt-header {
            padding: var(--space-2) var(--space-3);
          }
        }
      `}</style>
    </div>
  )
}

// Timeline with traveling packet
function AnimatedTimeline({
  activeStep,
  onStepClick
}: {
  activeStep: number
  onStepClick: (idx: number) => void
}) {
  const reducedMotion = useReducedMotion()
  const steps = TRACE_STEPS

  return (
    <div className="timeline">
      {/* Progress line */}
      <div className="timeline-track">
        <div
          className="timeline-progress"
          style={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
        />
        {!reducedMotion && (
          <div
            className="timeline-packet"
            style={{ top: `${(activeStep / (steps.length - 1)) * 100}%` }}
          />
        )}
      </div>

      {/* Steps */}
      <div className="timeline-steps">
        {steps.map((step, i) => {
          const isActive = i === activeStep
          const isPast = i < activeStep
          return (
            <div
              key={step.key}
              className={`timeline-step ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}
              onClick={() => onStepClick(i)}
            >
              <div className="step-dot">
                {isPast && <Check size={10} />}
              </div>
              <div className="step-content">
                <div className="step-number">Step {i + 1}</div>
                <div className="step-title">{step.title}</div>
                <div className="step-desc">{step.desc}</div>
              </div>
            </div>
          )
        })}
      </div>

      <style jsx>{`
        .timeline {
          position: relative;
          padding-left: 28px;
        }
        .timeline-track {
          position: absolute;
          left: 7px;
          top: 16px;
          bottom: 16px;
          width: 2px;
          background: var(--surface-subtle);
          border-radius: 1px;
        }
        .timeline-progress {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(180deg, var(--accent-brand), var(--accent-secondary));
          border-radius: 1px;
          transition: height 0.4s ease-out;
        }
        .timeline-packet {
          position: absolute;
          left: 50%;
          width: 8px;
          height: 8px;
          margin-left: -4px;
          margin-top: -4px;
          background: var(--accent-brand);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-brand);
          transition: top 0.4s ease-out;
        }
        .timeline-steps {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }
        .timeline-step {
          position: relative;
          display: flex;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-3);
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .timeline-step:hover {
          background: var(--surface-subtle);
        }
        .timeline-step.active {
          background: var(--accent-brand-subtle);
          border: 1px solid var(--accent-brand-muted);
          margin: -1px;
        }
        .timeline-step.past {
          opacity: 0.65;
        }
        .step-dot {
          position: absolute;
          left: -22px;
          top: 12px;
          width: 16px;
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--surface-elevated);
          border: 2px solid var(--border-default);
          border-radius: 50%;
          transition: all 0.2s ease;
          z-index: 1;
        }
        .timeline-step.active .step-dot {
          background: var(--accent-brand);
          border-color: var(--accent-brand);
          color: white;
          transform: scale(1.15);
        }
        .timeline-step.past .step-dot {
          background: var(--accent-secondary);
          border-color: var(--accent-secondary);
          color: white;
        }
        .step-content {
          flex: 1;
          min-width: 0;
        }
        .step-number {
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--text-muted);
          margin-bottom: 1px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .step-title {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1px;
        }
        .timeline-step.active .step-title {
          color: var(--accent-brand);
        }
        .step-desc {
          font-size: 11px;
          color: var(--text-secondary);
          line-height: 1.35;
        }
        @media (prefers-reduced-motion: reduce) {
          .timeline-step, .timeline-progress, .timeline-packet {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  )
}

export default function DemoPage() {
  const reducedMotion = useReducedMotion()

  // Flowchart state
  const [flowStep, setFlowStep] = useState(0)
  const [isFlowPlaying, setIsFlowPlaying] = useState(true)
  const flowTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Timeline state
  const [timelineStep, setTimelineStep] = useState(0)
  const [isTimelinePlaying, setIsTimelinePlaying] = useState(true)
  const timelineTimerRef = useRef<NodeJS.Timeout | null>(null)

  // HTTP exchange state
  const [exchangeIdx, setExchangeIdx] = useState(0)

  // Receipt state
  const [showReceipt, setShowReceipt] = useState(false)

  // Copy states
  const { copied: peacCopied, copy: copyPeac } = useCopyToClipboard()
  const { copied: disputeCopied, copy: copyDispute } = useCopyToClipboard()

  // Flowchart auto-advance
  useEffect(() => {
    if (!isFlowPlaying) return
    flowTimerRef.current = setInterval(() => {
      setFlowStep(prev => (prev + 1) % TRACE_STEPS.length)
    }, reducedMotion ? 1600 : 1200)
    return () => { if (flowTimerRef.current) clearInterval(flowTimerRef.current) }
  }, [isFlowPlaying, reducedMotion])

  // Timeline auto-advance
  useEffect(() => {
    if (!isTimelinePlaying) return
    timelineTimerRef.current = setInterval(() => {
      setTimelineStep(prev => {
        const next = (prev + 1) % TRACE_STEPS.length
        if (next === TRACE_STEPS.length - 1) setShowReceipt(true)
        else if (next === 0) setShowReceipt(false)
        return next
      })
    }, reducedMotion ? 1800 : 1600)
    return () => { if (timelineTimerRef.current) clearInterval(timelineTimerRef.current) }
  }, [isTimelinePlaying, reducedMotion])

  const handleFlowStepClick = (idx: number) => {
    setFlowStep(idx)
    setIsFlowPlaying(false)
  }

  const handleTimelineStepClick = (idx: number) => {
    setTimelineStep(idx)
    setIsTimelinePlaying(false)
    setShowReceipt(idx === TRACE_STEPS.length - 1)
  }

  return (
    <div className="wrap">
      <NavigationHeader />
      <main id="main-content" className="demo-main">
        {/* Hero Section */}
        <section className="demo-section">
          <div className="container">
            <div className="hero-content">
              {/* Badge */}
              <div className="hero-badge">
                <span>PROTOCOL TRACE</span>
                <div className="badge-pulse" />
              </div>

              <h1 className="hero-title">
                PEAC transaction trace
              </h1>

              <p className="hero-desc">
                This page shows a PEAC transaction trace end to end. An agent discovers site policy
                (<code>peac.txt</code> + <code>aipref.json</code>),
                receives an HTTP 402 challenge when payment is required, retries using a supported payment adapter,
                and receives a signed PEAC-Receipt that anyone can verify offline.
              </p>

              <p className="hero-note">
                Originary provides optional hosted components (Gateway 402, Verify API), but the core receipt and verification flow is protocol-native and portable.
              </p>
            </div>

            {/* Animated Circular Flowchart */}
            <div className="card demo-card">
              <div className="section-header">
                <h2>PEAC transaction trace</h2>
                <p>Click any step to explore. HTTP 402 + PEAC-Receipt flow.</p>
              </div>
              <CircularFlowchart
                activeStep={flowStep}
                onStepClick={handleFlowStepClick}
                isPlaying={isFlowPlaying}
                onPlayPause={() => setIsFlowPlaying(!isFlowPlaying)}
                onRestart={() => { setFlowStep(0); setIsFlowPlaying(true) }}
                onPrev={() => { setFlowStep(prev => (prev - 1 + TRACE_STEPS.length) % TRACE_STEPS.length); setIsFlowPlaying(false) }}
                onNext={() => { setFlowStep(prev => (prev + 1) % TRACE_STEPS.length); setIsFlowPlaying(false) }}
              />
            </div>

            {/* HTTP Exchange Panel */}
            <div className="card demo-card">
              <div className="section-header">
                <h2>HTTP exchange sequence</h2>
                <p>Real protocol headers. <code>PEAC-Receipt</code> is the canonical header (no X- prefix).</p>
              </div>

              {/* Exchange tabs */}
              <div className="exchange-tabs">
                {HTTP_EXCHANGES.map((ex, i) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => setExchangeIdx(i)}
                    className={`exchange-tab ${i === exchangeIdx ? 'active' : ''}`}
                  >
                    {ex.title}
                  </button>
                ))}
              </div>

              <div className="exchange-grid">
                <AnimatedCodeBlock
                  code={HTTP_EXCHANGES[exchangeIdx].request}
                  label="REQUEST"
                  reveal={true}
                  revealSpeed={60}
                  codeKey={`req-${exchangeIdx}`}
                />
                <AnimatedCodeBlock
                  code={HTTP_EXCHANGES[exchangeIdx].response}
                  label="RESPONSE"
                  reveal={true}
                  revealSpeed={40}
                  codeKey={`res-${exchangeIdx}`}
                />
              </div>
            </div>

            {/* Two-column: Policy file + Timeline */}
            <div className="two-col-grid">
              {/* Left: Live peac.txt */}
              <div className="card">
                <div className="card-header">
                  <h3>Live from origin</h3>
                  <span className="tag">/.well-known/peac.txt</span>
                </div>

                <div className="code-preview">
                  <button
                    type="button"
                    onClick={() => copyPeac(PEAC_TXT_CONTENT)}
                    className="copy-mini"
                    aria-label="Copy"
                  >
                    {peacCopied ? <Check size={12} /> : <Copy size={12} />}
                  </button>
                  <pre>{PEAC_TXT_CONTENT}</pre>
                </div>

                <div className="info-box">
                  <strong>Rail-neutral:</strong> PEAC supports multiple payment adapters via <code>payment_methods</code>.
                  Receipts are verified offline via <code>/.well-known/jwks.json</code>.
                </div>
              </div>

              {/* Right: Animated Timeline */}
              <div className="card">
                <div className="card-header">
                  <h3>Transaction flow</h3>
                  <div className="header-actions">
                    <button
                      type="button"
                      onClick={() => setIsTimelinePlaying(!isTimelinePlaying)}
                      className="action-btn"
                    >
                      {isTimelinePlaying ? <Pause size={12} /> : <Play size={12} />}
                      {isTimelinePlaying ? 'Pause' : 'Play'}
                    </button>
                    <button
                      type="button"
                      onClick={() => { setTimelineStep(TRACE_STEPS.length - 1); setShowReceipt(true); setIsTimelinePlaying(false) }}
                      className="action-btn"
                    >
                      <SkipForward size={12} />
                      Skip
                    </button>
                  </div>
                </div>
                <AnimatedTimeline activeStep={timelineStep} onStepClick={handleTimelineStepClick} />
              </div>
            </div>

            {/* Decoded Receipt */}
            <div className="card demo-card">
              <div className="section-header">
                <h2>Receipt anatomy (v0.10.0)</h2>
                <p>Decoded payload showing aipref snapshot, payment evidence, and policy hash binding.</p>
              </div>
              <ReceiptTypewriter isActive={showReceipt || timelineStep >= 6} />
            </div>

            {/* Verification Section */}
            <div className="card demo-card">
              <div className="section-header">
                <h2>Receipt verification</h2>
                <p>Offline via JWKS is default. Verify API is optional convenience.</p>
              </div>

              <div className="verify-grid">
                {/* Offline verification */}
                <div>
                  <h3 className="verify-title">
                    <span className="tag-default">DEFAULT</span>
                    Offline verification (JWKS)
                  </h3>
                  <AnimatedCodeBlock
                    code={`# Any PEAC verifier can validate offline
peac verify "<PEAC-Receipt JWS>" \\
  --jwks https://www.originary.xyz/.well-known/jwks.json \\
  --subject https://www.originary.xyz/demo/paid-resource

# Output:
{
  "valid": true,
  "signature_verified": true,
  "policy_hash_match": true,
  "aipref_hash_match": true
}`}
                  />
                </div>

                {/* API verification */}
                <div>
                  <h3 className="verify-title">
                    <span className="tag-optional">OPTIONAL</span>
                    Verify API (hosted helper)
                  </h3>
                  <AnimatedCodeBlock
                    code={`POST https://api.originary.xyz/verify
Content-Type: application/json

{"receipt": "eyJhbGciOiJFZERTQSI..."}

# Response:
{
  "valid": true,
  "issued_at": "2026-01-02T12:00:00Z",
  "issuer": {
    "domain": "originary.xyz",
    "kid": "2026-01-02"
  },
  "signature_verified": true,
  "policy_hash_match": true,
  "aipref_hash_match": true
}`}
                  />
                </div>
              </div>

              <div className="proof-box">
                <strong>✓ Cryptographic proof:</strong> Each PEAC-Receipt is signed (Ed25519) and can be verified offline using the issuer JWKS. A hosted Verify API is optional convenience.
              </div>
            </div>

            {/* Compatibility Section */}
            <div className="card demo-card">
              <div className="section-header">
                <h2>Compatibility with existing signals</h2>
                <p>PEAC works alongside existing policy and licensing standards.</p>
              </div>

              <div className="compat-grid">
                {[
                  {
                    title: 'AIPREF',
                    desc: 'Machine-readable AI preferences (IETF WG). This demo snapshots aipref.json into the receipt for auditability.',
                    link: 'https://datatracker.ietf.org/doc/charter-ietf-aipref/'
                  },
                  {
                    title: 'Content Signals',
                    desc: 'Cloudflare robots.txt extensions (ai-input, ai-train). Can be ingested as additional inputs to policy snapshots.',
                    link: 'https://blog.cloudflare.com/content-signals-policy/'
                  },
                  {
                    title: 'RSL',
                    desc: 'Really Simple Licensing for machine-readable terms. PEAC receipts can bind requests to RSL terms for auditability.',
                    link: 'https://rslstandard.org/'
                  }
                ].map(item => (
                  <div key={item.title} className="compat-card">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      Learn more <ExternalLink size={12} />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Audit Section */}
            <div className="card demo-card">
              <div className="section-header">
                <h2>Audit-ready exports (v0.10.0)</h2>
                <p>Dispute packet format for compliance and audit trails.</p>
              </div>

              <div className="code-preview audit-preview">
                <button
                  type="button"
                  onClick={() => copyDispute(DISPUTE_PACKET_PREVIEW)}
                  className="copy-mini"
                  aria-label="Copy"
                >
                  {disputeCopied ? <Check size={12} /> : <Copy size={12} />}
                </button>
                <pre>{DISPUTE_PACKET_PREVIEW}</pre>
              </div>

              <div className="audit-footer">
                <div className="audit-contents">
                  <strong>Contents:</strong> request digest, policy snapshot + hash, aipref snapshot + hash, receipt JWS, payment evidence reference
                </div>
                <a href="/demo/dispute-packet.sample.jsonl" download className="download-btn">
                  <Download size={14} />
                  Download sample packet
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .demo-main {
          padding-top: 80px;
          position: relative;
          overflow: hidden;
        }
        .demo-section {
          background: var(--surface-elevated);
          padding: var(--space-16) 0 var(--space-24);
          position: relative;
          z-index: 1;
        }
        .hero-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto var(--space-12);
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          background: var(--accent-secondary-subtle);
          border: 1px solid var(--accent-secondary-muted);
          border-radius: var(--radius-full);
          padding: var(--space-1) var(--space-4);
          margin-bottom: var(--space-4);
          font-size: 12px;
          font-weight: 600;
          color: var(--accent-secondary);
        }
        .badge-pulse {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-secondary);
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.9); }
        }
        .hero-title {
          font-size: clamp(28px, 5vw, 48px);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: var(--space-4);
          color: var(--text-primary);
        }
        .hero-desc {
          font-size: clamp(14px, 2.5vw, 18px);
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: var(--space-3);
        }
        .hero-desc code {
          background: var(--surface-card);
          padding: 2px 6px;
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.9em;
        }
        .hero-note {
          font-size: 13px;
          color: var(--text-tertiary);
          font-style: italic;
        }
        .demo-card {
          margin-bottom: var(--space-8);
          padding: var(--space-6);
        }
        .section-header {
          text-align: center;
          margin-bottom: var(--space-6);
        }
        .section-header h2 {
          font-size: clamp(18px, 3vw, 24px);
          font-weight: 600;
          margin-bottom: var(--space-1);
        }
        .section-header p {
          font-size: 13px;
          color: var(--text-secondary);
        }
        .section-header code {
          font-family: var(--font-mono);
          font-size: 0.95em;
          background: var(--surface-card);
          padding: 1px 4px;
          border-radius: var(--radius-sm);
        }
        .exchange-tabs {
          display: flex;
          gap: var(--space-2);
          margin-bottom: var(--space-4);
          flex-wrap: wrap;
        }
        .exchange-tab {
          padding: var(--space-2) var(--space-3);
          background: var(--surface-card);
          color: var(--text-secondary);
          border: none;
          border-radius: var(--radius-md);
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .exchange-tab:hover {
          background: var(--surface-subtle);
        }
        .exchange-tab.active {
          background: var(--accent-brand);
          color: white;
        }
        .exchange-tab:active {
          transform: scale(0.97);
        }
        .exchange-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-4);
        }
        @media (min-width: 768px) {
          .exchange-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .two-col-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-6);
          margin-bottom: var(--space-8);
        }
        @media (min-width: 768px) {
          .two-col-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--space-4);
          flex-wrap: wrap;
          gap: var(--space-2);
        }
        .card-header h3 {
          font-size: 16px;
          font-weight: 600;
        }
        .tag {
          padding: 3px 8px;
          background: var(--accent-secondary-subtle);
          border: 1px solid var(--accent-secondary-muted);
          border-radius: var(--radius-full);
          font-size: 10px;
          font-family: var(--font-mono);
          color: var(--accent-secondary);
        }
        .code-preview {
          background: #0d0d0d;
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          margin-bottom: var(--space-4);
          position: relative;
          overflow-x: auto;
        }
        .code-preview pre {
          margin: 0;
          font-family: var(--font-mono);
          font-size: 11px;
          line-height: 1.5;
          color: #e4e4e7;
          white-space: pre-wrap;
          word-break: break-word;
        }
        .copy-mini {
          position: absolute;
          top: var(--space-2);
          right: var(--space-2);
          display: flex;
          align-items: center;
          padding: 4px 6px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .copy-mini:hover {
          background: rgba(255,255,255,0.1);
          color: white;
        }
        .info-box {
          padding: var(--space-3);
          background: var(--surface-subtle);
          border-radius: var(--radius-lg);
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .info-box code {
          font-family: var(--font-mono);
          margin: 0 3px;
          background: var(--surface-subtle);
          padding: 1px 4px;
          border-radius: var(--radius-sm);
        }
        .header-actions {
          display: flex;
          gap: var(--space-2);
        }
        .action-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          background: var(--surface-card);
          border: none;
          border-radius: var(--radius-md);
          font-size: 11px;
          cursor: pointer;
          transition: all 0.12s ease;
        }
        .action-btn:hover {
          background: var(--surface-subtle);
        }
        .action-btn:active {
          transform: scale(0.96);
        }
        .verify-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-6);
        }
        @media (min-width: 768px) {
          .verify-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .verify-title {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: var(--space-3);
          display: flex;
          align-items: center;
          gap: var(--space-2);
          flex-wrap: wrap;
        }
        .tag-default {
          padding: 2px 6px;
          background: var(--accent-secondary-muted);
          border-radius: var(--radius-full);
          font-size: 9px;
          font-weight: 700;
          color: var(--accent-secondary);
        }
        .tag-optional {
          padding: 2px 6px;
          background: var(--surface-card);
          border-radius: var(--radius-full);
          font-size: 9px;
          font-weight: 700;
          color: var(--text-secondary);
        }
        .proof-box {
          margin-top: var(--space-6);
          padding: var(--space-4);
          background: var(--accent-secondary-faint);
          border: 1px solid var(--accent-secondary-muted);
          border-radius: var(--radius-lg);
          font-size: 13px;
          color: var(--text-secondary);
        }
        .proof-box strong {
          color: var(--accent-secondary);
        }
        .compat-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-4);
        }
        @media (min-width: 640px) {
          .compat-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .compat-card {
          padding: var(--space-4);
          background: var(--surface-subtle);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-default);
          transition: all 0.14s ease;
        }
        .compat-card:hover {
          border-color: var(--border-default);
          box-shadow: var(--shadow-sm);
        }
        .compat-card h4 {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: var(--space-2);
          color: var(--text-primary);
        }
        .compat-card p {
          font-size: 12px;
          color: var(--text-secondary);
          margin-bottom: var(--space-3);
          line-height: 1.45;
        }
        .compat-card a {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          font-weight: 500;
          color: var(--accent-brand);
          text-decoration: none;
        }
        .compat-card a:hover {
          text-decoration: underline;
        }
        .audit-preview {
          margin-bottom: var(--space-4);
        }
        .audit-preview pre {
          font-size: 10px;
        }
        .audit-footer {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-3);
          align-items: center;
          justify-content: space-between;
        }
        .audit-contents {
          font-size: 12px;
          color: var(--text-secondary);
        }
        .download-btn {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-4);
          background: var(--accent-brand);
          color: white;
          border-radius: var(--radius-lg);
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.15s ease;
        }
        .download-btn:hover {
          opacity: 0.9;
        }
        .download-btn:active {
          transform: scale(0.97);
        }
        @media (prefers-reduced-motion: reduce) {
          .badge-pulse {
            animation: none;
          }
        }
        @media (max-width: 480px) {
          .demo-section {
            padding: var(--space-8) 0 var(--space-16);
          }
          .demo-card {
            padding: var(--space-4);
            margin-bottom: var(--space-6);
          }
          .exchange-tab {
            font-size: 11px;
            padding: var(--space-1) var(--space-2);
          }
        }
      `}</style>
    </div>
  )
}
