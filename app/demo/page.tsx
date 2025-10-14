'use client'

import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { useState, useEffect, useRef, useMemo } from 'react'

export default function DemoPage() {
  // Process flowchart state
  const [procIdx, setProcIdx] = useState(0)
  const [isProcessAutoPlaying, setIsProcessAutoPlaying] = useState(true)

  // Demo timeline state
  const [demoIdx, setDemoIdx] = useState(0)
  const [isDemoAutoPlaying, setIsDemoAutoPlaying] = useState(true)
  const [receiptText, setReceiptText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const procTimerRef = useRef<NodeJS.Timeout | null>(null)
  const demoTimerRef = useRef<NodeJS.Timeout | null>(null)
  const typeTimerRef = useRef<NodeJS.Timeout | null>(null)

  const PROCESS = useMemo(() => [
    { key: 'first', title: 'Agent request', sub: 'Autonomous agent needs your API or content' },
    { key: 'discover', title: 'Policy discovery', sub: 'Agent reads peac.txt via Originary' },
    { key: 'prefs', title: 'Terms evaluation', sub: 'Originary evaluates peac.txt and aipref.json' },
    { key: 'evaluate', title: 'Decision engine', sub: 'Originary determines: allow, deny, or payment required' },
    { key: 'settle', title: 'Payment gateway', sub: 'Originary Gateway (402) handles settlement' },
    { key: 'access', title: 'Resource access', sub: 'Agent accesses your resource with authorization' },
    { key: 'receipt', title: 'PEAC receipt', sub: 'Cryptographically signed proof of transaction' },
    { key: 'verify', title: 'Receipt verification', sub: 'Originary Verify API validates authenticity' }
  ], [])

  const STEPS = useMemo(() => [
    { key: 'discover', title: 'Policy discovery', subtitle: 'Agent fetches peac.txt via Originary' },
    { key: 'prefs', title: 'Terms check', subtitle: 'Originary evaluates peac.txt and aipref.json' },
    { key: 'evaluate', title: 'Policy engine', subtitle: 'Originary decides: allow, deny, or payment' },
    { key: 'settle', title: 'Payment flow', subtitle: 'Originary Gateway (402) processes payment' },
    { key: 'receipt', title: 'Generate proof', subtitle: 'Signed PEAC receipt (JWS)' },
    { key: 'verify', title: 'Verify receipt', subtitle: 'Originary Verify API confirms authenticity' },
  ], [])

  const SAMPLE_RECEIPT = {
    peac: '1.0',
    receipt_id: 'urn:originary:receipt:01HV7F2Z0QX0K6D3N6W8',
    issued_at: '2025-10-06T08:15:00Z',
    issuer: {
      name: 'Originary',
      domain: 'originary.xyz',
      kid: 'originary-ed25519-2025',
      alg: 'EdDSA'
    },
    resource: {
      url: 'https://yoursite.com/api/content',
      fingerprint: { sha256: 'a4f3...2e91' }
    },
    action: {
      type: 'api_access',
      policy_evaluation: {
        result: 'ALLOW',
        explanation: 'Payment confirmed via Originary Gateway (402)'
      },
    },
    aipref_snapshot: {
      url: 'https://yoursite.com/.well-known/aipref.json',
      etag: 'W/"aipref-7d3a"',
      managed_by: 'Originary'
    },
    settlement: {
      gateway: 'Originary Gateway (402)',
      normalized: 'http-402',
      payment_id: 'pay_orig_2025_xyz123',
      amount: { value: 0.05, currency: 'USD' }
    },
    verify: {
      url: 'https://api.originary.xyz/verify',
      provider: 'Originary Verify API',
      pubkeys: [{ kid: 'originary-ed25519-2025', alg: 'EdDSA' }]
    },
  }

  const highlightMap: Record<string, string[]> = {
    prefs: ['prefs'],
    discover: ['access_control'],
    settle: ['access_control', 'payments'],
    receipt: ['provenance', 'receipts'],
    verify: ['receipts', 'public_keys']
  }

  // Typewriter effect
  const typeText = (text: string) => {
    if (typeTimerRef.current) clearInterval(typeTimerRef.current)
    setReceiptText('')
    setIsTyping(true)
    let i = 0
    const step = Math.max(1, Math.floor(text.length / 200))
    typeTimerRef.current = setInterval(() => {
      i += step
      setReceiptText(text.slice(0, i))
      if (i >= text.length) {
        if (typeTimerRef.current) clearInterval(typeTimerRef.current)
        setIsTyping(false)
      }
    }, 8)
  }

  // Process flowchart auto-advance
  useEffect(() => {
    if (!isProcessAutoPlaying) return
    procTimerRef.current = setInterval(() => {
      setProcIdx(prev => (prev + 1) % PROCESS.length)
    }, 1400)
    return () => {
      if (procTimerRef.current) clearInterval(procTimerRef.current)
    }
  }, [isProcessAutoPlaying, PROCESS.length])

  // Demo timeline auto-advance
  useEffect(() => {
    if (!isDemoAutoPlaying) return
    demoTimerRef.current = setInterval(() => {
      setDemoIdx(prev => {
        const next = (prev + 1) % STEPS.length
        return next
      })
    }, 1600)
    return () => {
      if (demoTimerRef.current) clearInterval(demoTimerRef.current)
    }
  }, [isDemoAutoPlaying, STEPS.length])

  // Handle demo step changes
  useEffect(() => {
    const currentStep = STEPS[demoIdx]
    if (currentStep.key === 'receipt') {
      typeText(JSON.stringify(SAMPLE_RECEIPT, null, 2))
    } else if (currentStep.key === 'verify') {
      if (typeTimerRef.current) clearInterval(typeTimerRef.current)
      setReceiptText(JSON.stringify(SAMPLE_RECEIPT, null, 2))
      setIsTyping(false)
    } else {
      setReceiptText('')
    }
  }, [demoIdx])

  // Respect reduced motion
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) {
      setIsProcessAutoPlaying(false)
      setIsDemoAutoPlaying(false)
    }
  }, [])

  const CircularFlowchart = () => {
    const R = 180
    const cx = 210
    const cy = 210

    return (
      <div style={{ position: 'relative', width: '420px', height: '420px', margin: '0 auto' }}>
        {/* Circle border */}
        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: '1px solid var(--gray-200)',
          background: 'radial-gradient(circle at center, var(--gray-50) 0%, var(--white) 70%)',
        }} />

        {/* Nodes */}
        {PROCESS.map((step, i) => {
          const angle = (-90 + (360 / PROCESS.length) * i) * (Math.PI / 180)
          const x = cx + R * Math.cos(angle)
          const y = cy + R * Math.sin(angle)
          const isActive = i === procIdx

          return (
            <div key={step.key}>
              {/* Node dot */}
              <div
                onClick={() => {
                  setProcIdx(i)
                  setIsProcessAutoPlaying(false)
                }}
                style={{
                  position: 'absolute',
                  left: x + 'px',
                  top: y + 'px',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: isActive ? 'var(--brand-secondary)' : 'var(--gray-300)',
                  border: isActive ? '2px solid var(--brand-secondary)' : '1px solid var(--gray-400)',
                  transform: 'translate(-50%, -50%)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: isActive ? '0 0 0 8px rgba(0, 212, 170, 0.15)' : 'none',
                  zIndex: isActive ? 2 : 1
                }}
              />

              {/* Node label */}
              <div style={{
                position: 'absolute',
                left: x + 'px',
                top: y + 'px',
                transform: 'translate(-50%, 24px)',
                width: '140px',
                textAlign: 'center',
                fontSize: 'var(--text-xs)',
                color: isActive ? 'var(--brand-secondary)' : 'var(--gray-600)',
                fontWeight: isActive ? 600 : 400,
                pointerEvents: 'none',
                transition: 'all 0.3s ease'
              }}>
                {step.title}
              </div>
            </div>
          )
        })}

        {/* Center info */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '240px',
          padding: 'var(--space-4)',
          background: 'var(--white)',
          border: '1px solid var(--gray-200)',
          borderRadius: 'var(--radius-2xl)',
          textAlign: 'center',
          boxShadow: 'var(--shadow-md)'
        }}>
          <h4 style={{
            fontSize: 'var(--text-base)',
            fontWeight: 600,
            marginBottom: 'var(--space-2)',
            color: 'var(--gray-900)'
          }}>
            {PROCESS[procIdx].title}
          </h4>
          <p style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--gray-600)',
            marginBottom: 'var(--space-4)'
          }}>
            {PROCESS[procIdx].sub}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-2)' }}>
            <button
              onClick={() => {
                setProcIdx(prev => (prev - 1 + PROCESS.length) % PROCESS.length)
                setIsProcessAutoPlaying(false)
              }}
              className="btn btn-ghost"
              style={{ fontSize: 'var(--text-xs)', padding: 'var(--space-1) var(--space-3)' }}
            >
              Prev
            </button>
            <button
              onClick={() => {
                setProcIdx(prev => (prev + 1) % PROCESS.length)
                setIsProcessAutoPlaying(false)
              }}
              className="btn btn-ghost"
              style={{ fontSize: 'var(--text-xs)', padding: 'var(--space-1) var(--space-3)' }}
            >
              Next
            </button>
            <button
              onClick={() => {
                setProcIdx(0)
                setIsProcessAutoPlaying(true)
              }}
              className="btn btn-secondary"
              style={{ fontSize: 'var(--text-xs)', padding: 'var(--space-1) var(--space-3)' }}
            >
              Restart
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="wrap">
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        <section className="section" style={{ background: 'var(--white)', paddingTop: 'var(--space-24)' }}>
          <div className="container">
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                background: 'rgba(0, 212, 170, 0.1)',
                border: '1px solid rgba(0, 212, 170, 0.2)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-6)',
                marginBottom: 'var(--space-6)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--brand-secondary)'
              }}>
                <span>INTERACTIVE DEMO</span>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--brand-secondary)',
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                }} />
              </div>

              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)'
              }}>
                How <span className="text-gradient">Originary</span> works
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.7,
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-8)',
                maxWidth: '900px',
                margin: '0 auto var(--space-8) auto'
              }}>
                Originary provides enterprise infrastructure for the open PEAC protocol. Watch agents discover your policies via <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-mono)' }}>peac.txt</code> and <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-mono)' }}>aipref.json</code>, complete transactions through Originary Gateway (402), and generate verifiable receipts.
              </p>
            </div>

            {/* Circular Flowchart */}
            <div className="card" style={{
              marginBottom: 'var(--space-12)',
              background: 'var(--white)',
              padding: 'var(--space-8)'
            }}>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
                <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                  PEAC protocol flow via Originary
                </h2>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>
                  From policy discovery to cryptographic proof. Click any step to explore.
                </p>
              </div>
              <CircularFlowchart />
            </div>

            {/* Two-column demo */}
            <div className="grid grid-2" style={{ gap: 'var(--space-8)' }}>
              {/* Left: peac.txt advertises */}
              <div className="card">
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                  PEAC policy file
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', marginBottom: 'var(--space-6)' }}>
                  Your <code style={{ fontFamily: 'var(--font-mono)', background: 'var(--gray-100)', padding: '2px 4px', borderRadius: 'var(--radius-sm)' }}>/.well-known/peac.txt</code> served by Originary
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  {[
                    { key: 'prefs', label: 'preferences', value: 'AIPREF URL' },
                    { key: 'access_control', label: 'access_control', value: 'http-402' },
                    { key: 'payments', label: 'payments', value: '["payment-processor"]' },
                    { key: 'provenance', label: 'provenance', value: 'c2pa' },
                    { key: 'receipts', label: 'receipts', value: 'required, verify' },
                    { key: 'public_keys', label: 'public_keys', value: '[ {kid, alg, key} ]' }
                  ].map(item => {
                    const isActive = highlightMap[STEPS[demoIdx]?.key]?.includes(item.key)
                    return (
                      <div
                        key={item.key}
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '140px 1fr',
                          gap: 'var(--space-3)',
                          padding: 'var(--space-2) var(--space-3)',
                          borderRadius: 'var(--radius-lg)',
                          background: isActive ? 'rgba(0, 212, 170, 0.1)' : 'transparent',
                          border: isActive ? '1px solid rgba(0, 212, 170, 0.3)' : '1px solid transparent',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <code style={{
                          fontSize: 'var(--text-xs)',
                          color: 'var(--gray-500)',
                          fontFamily: 'var(--font-mono)'
                        }}>
                          {item.label}
                        </code>
                        <code style={{
                          fontSize: 'var(--text-xs)',
                          color: 'var(--gray-700)',
                          fontFamily: 'var(--font-mono)'
                        }}>
                          {item.value}
                        </code>
                      </div>
                    )
                  })}
                </div>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 'var(--space-2)',
                  marginTop: 'var(--space-6)'
                }}>
                  {['peac.txt', 'aipref.json', 'security.txt', 'robots.txt', 'ads.txt', 'app-ads.txt', 'humans.txt', 'assetlinks.json', 'llms.txt'].map(file => (
                    <span
                      key={file}
                      style={{
                        padding: 'var(--space-1) var(--space-2)',
                        background: 'var(--gray-100)',
                        border: '1px solid var(--gray-200)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: 'var(--text-xs)',
                        color: 'var(--gray-600)',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      {file}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: live flow */}
              <div className="card">
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                  Live transaction flow
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', marginBottom: 'var(--space-6)' }}>
                  Watch Originary orchestrate a complete agent transaction
                </p>

                {/* Timeline */}
                <div style={{
                  borderLeft: '2px solid var(--gray-200)',
                  paddingLeft: 'var(--space-4)',
                  marginBottom: 'var(--space-6)'
                }}>
                  {STEPS.map((step, i) => {
                    const isActive = i === demoIdx
                    return (
                      <div
                        key={step.key}
                        style={{
                          position: 'relative',
                          padding: 'var(--space-3)',
                          marginBottom: 'var(--space-2)',
                          borderRadius: 'var(--radius-lg)',
                          background: isActive ? 'rgba(99, 91, 255, 0.05)' : 'transparent',
                          border: isActive ? '1px solid rgba(99, 91, 255, 0.2)' : '1px solid transparent',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <div
                          style={{
                            position: 'absolute',
                            left: '-22px',
                            top: '16px',
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            background: isActive ? 'var(--brand-primary)' : 'var(--gray-300)',
                            border: '2px solid var(--white)',
                            transition: 'all 0.3s ease',
                            boxShadow: isActive ? '0 0 0 6px rgba(99, 91, 255, 0.15)' : 'none'
                          }}
                        />
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: 'var(--space-1)'
                        }}>
                          <span style={{
                            fontSize: 'var(--text-sm)',
                            fontWeight: 600,
                            color: isActive ? 'var(--brand-primary)' : 'var(--gray-700)'
                          }}>
                            {i + 1}. {step.title}
                          </span>
                          <code style={{
                            fontSize: 'var(--text-xs)',
                            color: 'var(--gray-500)',
                            fontFamily: 'var(--font-mono)'
                          }}>
                            {step.key}
                          </code>
                        </div>
                        <div style={{
                          fontSize: 'var(--text-xs)',
                          color: 'var(--gray-600)'
                        }}>
                          {step.subtitle}
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Receipt display */}
                <div style={{
                  background: 'var(--gray-50)',
                  border: '1px solid var(--gray-200)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-4)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: 'var(--space-2)',
                    marginBottom: 'var(--space-3)',
                    borderBottom: '1px solid var(--gray-200)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--gray-500)',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    <span>PEAC Receipt (JWS)</span>
                    {STEPS[demoIdx]?.key === 'receipt' && (
                      <span style={{ color: 'var(--brand-secondary)' }}>
                        Signed by Originary
                      </span>
                    )}
                  </div>
                  <pre style={{
                    margin: 0,
                    maxHeight: '280px',
                    overflow: 'auto',
                    background: 'var(--gray-900)',
                    padding: 'var(--space-3)',
                    borderRadius: 'var(--radius-lg)',
                    color: 'var(--gray-100)',
                    fontSize: 'var(--text-xs)',
                    lineHeight: 1.5,
                    fontFamily: 'var(--font-mono)'
                  }}>
                    {receiptText || '// Cryptographically signed PEAC receipts\n// Receipt will appear during the proof generation step'}
                  </pre>
                </div>

                {/* Controls */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 'var(--space-2)'
                }}>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-600)' }}>
                    Step {demoIdx + 1} / {STEPS.length} - Pace ~1600ms
                  </div>
                  <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    <button
                      onClick={() => {
                        setDemoIdx(prev => (prev - 1 + STEPS.length) % STEPS.length)
                        setIsDemoAutoPlaying(false)
                      }}
                      className="btn btn-ghost"
                      style={{ fontSize: 'var(--text-xs)' }}
                    >
                      Prev
                    </button>
                    <button
                      onClick={() => {
                        setDemoIdx(prev => (prev + 1) % STEPS.length)
                        setIsDemoAutoPlaying(false)
                      }}
                      className="btn btn-ghost"
                      style={{ fontSize: 'var(--text-xs)' }}
                    >
                      Next
                    </button>
                    <button
                      onClick={() => {
                        setDemoIdx(0)
                        setIsDemoAutoPlaying(true)
                      }}
                      className="btn btn-secondary"
                      style={{ fontSize: 'var(--text-xs)' }}
                    >
                      Restart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  )
}
