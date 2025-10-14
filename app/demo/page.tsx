'use client'

import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { useState, useEffect, useRef, useMemo } from 'react'
import { Play, Pause, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react'

export default function DemoPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [copied, setCopied] = useState(false)
  const [verifying, setVerifying] = useState(false)
  const [verifyResult, setVerifyResult] = useState<'success' | 'error' | null>(null)
  const [expandedTrace, setExpandedTrace] = useState<number | null>(null)
  const [expandedArtifacts, setExpandedArtifacts] = useState(false)
  const [stepTiming, setStepTiming] = useState<number[]>([])

  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const stepStartTime = useRef<number>(Date.now())

  const STEPS = useMemo(() => [
    {
      id: 'discover',
      title: 'Discover policy',
      description: 'Agent fetches policy file from .well-known/peac.txt',
      trace: {
        request: `GET /.well-known/peac.txt HTTP/1.1
Host: yoursite.com
User-Agent: OriginaryBot/1.0`,
        response: `HTTP/1.1 200 OK
Content-Type: text/plain

preferences: https://yoursite.com/.well-known/aipref.json
access_control: http-402
payments: x402, stripe
provenance: c2pa
receipts: required
verify: https://api.originary.xyz/verify
public_keys:
  kid=2025-09-key1; alg=Ed25519; key=...`
      }
    },
    {
      id: 'request',
      title: 'Request access',
      description: 'Agent requests resource with policy compliance',
      trace: {
        request: `GET /api/content HTTP/1.1
Host: yoursite.com
Authorization: Bearer agent_token_xyz
Accept: application/json`,
        response: `HTTP/1.1 402 Payment Required
WWW-Authenticate: x402 gateway="https://pay.originary.xyz"
Content-Type: application/json

{"amount": 0.05, "currency": "USD"}`
      }
    },
    {
      id: 'payment',
      title: 'Payment (if required)',
      description: 'Originary Gateway (402) processes payment',
      trace: {
        request: `POST https://pay.originary.xyz/charge HTTP/1.1
Content-Type: application/json

{"amount": 0.05, "currency": "USD", "resource": "/api/content"}`,
        response: `HTTP/1.1 200 OK
Content-Type: application/json

{"payment_id": "pay_orig_2025_xyz123", "status": "confirmed"}`
      }
    },
    {
      id: 'receipt',
      title: 'Get receipt',
      description: 'Access granted with signed receipt',
      trace: {
        request: `GET /api/content HTTP/1.1
Host: yoursite.com
Authorization: Bearer agent_token_xyz
X-Payment-ID: pay_orig_2025_xyz123`,
        response: `HTTP/1.1 200 OK
Content-Type: application/json
PEAC-Receipt: eyJhbGciOiJFZERTQSIsImtpZCI6Im9yaWdpbmFyeS1lZDI1NTE5LTIwMjUifQ.eyJwZWFjIjoiMS4wIiwicmVjZWlwdF9pZCI6InVybjpvcmlnaW5hcnk6cmVjZWlwdDowMUhWN0YyWjBRWDBLNkQzTjZXOCIsImlzc3VlZF9hdCI6IjIwMjUtMTAtMDZUMDg6MTU6MDBaIiwiaXNzdWVyIjp7Im5hbWUiOiJPcmlnaW5hcnkiLCJkb21haW4iOiJvcmlnaW5hcnkueHl6Iiwia2lkIjoib3JpZ2luYXJ5LWVkMjU1MTktMjAyNSIsImFsZyI6IkVkRFNBIn0sInJlc291cmNlIjp7InVybCI6Imh0dHBzOi8veW91cnNpdGUuY29tL2FwaS9jb250ZW50IiwiZmluZ2VycHJpbnQiOnsic2hhMjU2IjoiYTRmMy4uLjJlOTEifX0sImFjdGlvbiI6eyJ0eXBlIjoiYXBpX2FjY2VzcyIsInBvbGljeV9ldmFsdWF0aW9uIjp7InJlc3VsdCI6IkFMTE9XIiwiZXhwbGFuYXRpb24iOiJQYXltZW50IGNvbmZpcm1lZCB2aWEgT3JpZ2luYXJ5IEdhdGV3YXkgKDQwMikifX0sImFpcHJlZl9zbmFwc2hvdCI6eyJ1cmwiOiJodHRwczovL3lvdXJzaXRlLmNvbS8ud2VsbC1rbm93bi9haXByZWYuanNvbiIsImV0YWciOiJXL1wiYWlwcmVmLTdkM2FcIiIsIm1hbmFnZWRfYnkiOiJPcmlnaW5hcnkifSwic2V0dGxlbWVudCI6eyJnYXRld2F5IjoiT3JpZ2luYXJ5IEdhdGV3YXkgKDQwMikiLCJub3JtYWxpemVkIjoiaHR0cC00MDIiLCJwYXltZW50X2lkIjoicGF5X29yaWdfMjAyNV94eXoxMjMiLCJhbW91bnQiOnsidmFsdWUiOjAuMDUsImN1cnJlbmN5IjoiVVNEIn19LCJ2ZXJpZnkiOnsidXJsIjoiaHR0cHM6Ly9hcGkub3JpZ2luYXJ5Lnh5ei92ZXJpZnkiLCJwcm92aWRlciI6Ik9yaWdpbmFyeSBWZXJpZnkgQVBJIiwicHVia2V5cyI6W3sia2lkIjoib3JpZ2luYXJ5LWVkMjU1MTktMjAyNSIsImFsZyI6IkVkRFNBIn1dfX0.signature_here

{"data": "...content..."}`
      }
    },
    {
      id: 'verify',
      title: 'Verify receipt',
      description: 'Independent verification of signature and integrity',
      trace: {
        request: `POST https://api.originary.xyz/verify HTTP/1.1
Content-Type: application/json

{"receipt": "eyJhbGciOiJFZERTQSIsImtpZCI6Im9yaWdpbmFyeS1lZDI1NTE5LTIwMjUifQ..."}`,
        response: `HTTP/1.1 200 OK
Content-Type: application/json

{
  "valid": true,
  "verified_at": "2025-10-06T08:15:01Z",
  "signature_valid": true,
  "policy_match": true,
  "issuer": "originary.xyz"
}`
      }
    }
  ], [])

  const SAMPLE_JWS = `eyJhbGciOiJFZERTQSIsImtpZCI6Im9yaWdpbmFyeS1lZDI1NTE5LTIwMjUifQ.eyJwZWFjIjoiMS4wIiwicmVjZWlwdF9pZCI6InVybjpvcmlnaW5hcnk6cmVjZWlwdDowMUhWN0YyWjBRWDBLNkQzTjZXOCIsImlzc3VlZF9hdCI6IjIwMjUtMTAtMDZUMDg6MTU6MDBaIiwiaXNzdWVyIjp7Im5hbWUiOiJPcmlnaW5hcnkiLCJkb21haW4iOiJvcmlnaW5hcnkueHl6Iiwia2lkIjoib3JpZ2luYXJ5LWVkMjU1MTktMjAyNSIsImFsZyI6IkVkRFNBIn0sInJlc291cmNlIjp7InVybCI6Imh0dHBzOi8veW91cnNpdGUuY29tL2FwaS9jb250ZW50IiwiZmluZ2VycHJpbnQiOnsic2hhMjU2IjoiYTRmMy4uLjJlOTEifX0sImFjdGlvbiI6eyJ0eXBlIjoiYXBpX2FjY2VzcyIsInBvbGljeV9ldmFsdWF0aW9uIjp7InJlc3VsdCI6IkFMTE9XIiwiZXhwbGFuYXRpb24iOiJQYXltZW50IGNvbmZpcm1lZCB2aWEgT3JpZ2luYXJ5IEdhdGV3YXkgKDQwMikifX0sImFpcHJlZl9zbmFwc2hvdCI6eyJ1cmwiOiJodHRwczovL3lvdXJzaXRlLmNvbS8ud2VsbC1rbm93bi9haXByZWYuanNvbiIsImV0YWciOiJXL1wiYWlwcmVmLTdkM2FcIiIsIm1hbmFnZWRfYnkiOiJPcmlnaW5hcnkifSwic2V0dGxlbWVudCI6eyJnYXRld2F5IjoiT3JpZ2luYXJ5IEdhdGV3YXkgKDQwMikiLCJub3JtYWxpemVkIjoiaHR0cC00MDIiLCJwYXltZW50X2lkIjoicGF5X29yaWdfMjAyNV94eXoxMjMiLCJhbW91bnQiOnsidmFsdWUiOjAuMDUsImN1cnJlbmN5IjoiVVNEIn19LCJ2ZXJpZnkiOnsidXJsIjoiaHR0cHM6Ly9hcGkub3JpZ2luYXJ5Lnh5ei92ZXJpZnkiLCJwcm92aWRlciI6Ik9yaWdpbmFyeSBWZXJpZnkgQVBJIiwicHVia2V5cyI6W3sia2lkIjoib3JpZ2luYXJ5LWVkMjU1MTktMjAyNSIsImFsZyI6IkVkRFNBIn1dfX0.signature_placeholder`

  // Auto-advance functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    timerRef.current = setInterval(() => {
      setCurrentStep(prev => {
        const next = (prev + 1) % STEPS.length
        // Record timing
        const elapsed = Date.now() - stepStartTime.current
        setStepTiming(timings => [...timings, elapsed])
        stepStartTime.current = Date.now()
        return next
      })
    }, 2000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isAutoPlaying, STEPS.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentStep(prev => (prev - 1 + STEPS.length) % STEPS.length)
        setIsAutoPlaying(false)
      } else if (e.key === 'ArrowRight') {
        setCurrentStep(prev => (prev + 1) % STEPS.length)
        setIsAutoPlaying(false)
      } else if (e.key === 'r' || e.key === 'R') {
        setCurrentStep(0)
        setStepTiming([])
        stepStartTime.current = Date.now()
      }
    }

    window.addEventListener('keydown', handleKeyboard)
    return () => window.removeEventListener('keydown', handleKeyboard)
  }, [STEPS.length])

  // Accessibility: announce step changes
  useEffect(() => {
    const announcement = `Step ${currentStep + 1}: ${STEPS[currentStep].title}`
    const liveRegion = document.getElementById('step-announcement')
    if (liveRegion) {
      liveRegion.textContent = announcement
    }
  }, [currentStep, STEPS])

  const copyReceipt = async () => {
    try {
      await navigator.clipboard.writeText(SAMPLE_JWS)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const verifyNow = async () => {
    setVerifying(true)
    setVerifyResult(null)

    // Simulate verification (in production, this would call the actual verify endpoint)
    setTimeout(() => {
      setVerifying(false)
      setVerifyResult('success')
      setTimeout(() => setVerifyResult(null), 5000)
    }, 1500)
  }

  const avgTiming = stepTiming.length > 0
    ? Math.round(stepTiming.reduce((a, b) => a + b, 0) / stepTiming.length)
    : null

  return (
    <div className="wrap">
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }} id="main-content" role="main">
        {/* Accessibility: Live region for step announcements */}
        <div
          id="step-announcement"
          className="sr-only"
          aria-live="polite"
          aria-atomic="true"
        />

        <section className="section" style={{ background: 'var(--white)', paddingTop: 'var(--space-24)' }}>
          <div className="container">
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)', maxWidth: '900px', margin: '0 auto var(--space-16) auto' }}>
              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)'
              }}>
                Originary demo: <span className="text-gradient">verifiable receipts</span>
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.6,
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-2)'
              }}>
                See a complete receipt flow: policy → access/payment → receipt → verify.
              </p>

              <p style={{
                fontSize: 'var(--text-base)',
                lineHeight: 1.6,
                color: 'var(--gray-500)'
              }}>
                This demo walks through policy discovery, conditional payment, a signed receipt, and independent verification.
              </p>
            </div>

            {/* Flow visualization */}
            <div className="card" style={{
              marginBottom: 'var(--space-12)',
              padding: 'var(--space-8)',
              background: 'var(--white)',
              border: '1px solid var(--gray-200)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-8)' }}>
                <div>
                  <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>Flow</h2>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>
                    Use ← → keys or click steps to navigate
                  </p>
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
                  {avgTiming && (
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-500)', marginRight: 'var(--space-2)' }}>
                      Demo timing (this browser): {avgTiming}ms
                    </div>
                  )}
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="btn btn-secondary"
                    style={{ fontSize: 'var(--text-sm)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}
                    aria-label={isAutoPlaying ? 'Pause auto-play' : 'Start auto-play'}
                  >
                    {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
                    {isAutoPlaying ? 'Pause' : 'Play'}
                  </button>
                </div>
              </div>

              {/* Steps */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {STEPS.map((step, index) => {
                  const isActive = index === currentStep
                  return (
                    <div key={step.id}>
                      <button
                        onClick={() => {
                          setCurrentStep(index)
                          setIsAutoPlaying(false)
                        }}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: 'var(--space-4)',
                          borderRadius: 'var(--radius-xl)',
                          border: isActive ? '2px solid var(--brand-primary)' : '1px solid var(--gray-200)',
                          background: isActive ? 'rgba(99, 91, 255, 0.05)' : 'var(--gray-50)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          opacity: isActive ? 1 : 0.7
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) e.currentTarget.style.opacity = '1'
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) e.currentTarget.style.opacity = '0.7'
                        }}
                        aria-current={isActive ? 'step' : undefined}
                      >
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                          <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
                              <span style={{
                                fontSize: 'var(--text-xs)',
                                fontWeight: 700,
                                color: isActive ? 'var(--white)' : 'var(--gray-500)',
                                background: isActive ? 'var(--brand-primary)' : 'var(--gray-300)',
                                width: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}>
                                {index + 1}
                              </span>
                              <h3 style={{
                                fontSize: 'var(--text-lg)',
                                fontWeight: 700,
                                color: isActive ? 'var(--brand-primary)' : 'var(--gray-900)'
                              }}>
                                {step.title}
                              </h3>
                            </div>
                            <p style={{
                              fontSize: 'var(--text-sm)',
                              color: 'var(--gray-600)',
                              marginLeft: '32px'
                            }}>
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </button>

                      {/* HTTP Trace (collapsible) */}
                      {isActive && (
                        <div style={{ marginTop: 'var(--space-3)', marginLeft: 'var(--space-4)' }}>
                          <button
                            onClick={() => setExpandedTrace(expandedTrace === index ? null : index)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 'var(--space-2)',
                              fontSize: 'var(--text-sm)',
                              color: 'var(--gray-600)',
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer',
                              padding: 'var(--space-2) 0',
                              fontWeight: 600
                            }}
                          >
                            {expandedTrace === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            HTTP trace
                          </button>

                          {expandedTrace === index && (
                            <div style={{ marginTop: 'var(--space-2)' }}>
                              <div style={{ marginBottom: 'var(--space-3)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
                                  <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--gray-500)', textTransform: 'uppercase' }}>Request</span>
                                  <button
                                    onClick={() => navigator.clipboard.writeText(step.trace.request)}
                                    className="btn btn-ghost"
                                    style={{ fontSize: 'var(--text-xs)', padding: 'var(--space-1) var(--space-2)' }}
                                  >
                                    Copy curl
                                  </button>
                                </div>
                                <pre style={{
                                  fontFamily: 'var(--font-mono)',
                                  fontSize: 'var(--text-xs)',
                                  background: 'var(--gray-900)',
                                  color: 'var(--gray-100)',
                                  padding: 'var(--space-3)',
                                  borderRadius: 'var(--radius-lg)',
                                  overflow: 'auto',
                                  lineHeight: 1.5
                                }}>
                                  {step.trace.request}
                                </pre>
                              </div>

                              <div>
                                <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--gray-500)', textTransform: 'uppercase', marginBottom: 'var(--space-2)', display: 'block' }}>Response</span>
                                <pre style={{
                                  fontFamily: 'var(--font-mono)',
                                  fontSize: 'var(--text-xs)',
                                  background: 'var(--gray-900)',
                                  color: 'var(--gray-100)',
                                  padding: 'var(--space-3)',
                                  borderRadius: 'var(--radius-lg)',
                                  overflow: 'auto',
                                  lineHeight: 1.5
                                }}>
                                  {step.trace.response}
                                </pre>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Two-column layout */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
              gap: 'var(--space-8)',
              marginBottom: 'var(--space-12)'
            }}>
              {/* Policy sample */}
              <div className="card" style={{
                padding: 'var(--space-6)',
                background: 'var(--white)',
                border: '1px solid var(--gray-200)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
              }}>
                <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>
                  Policy sample
                </h2>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', marginBottom: 'var(--space-4)' }}>
                  Canonical policy format served via <code style={{ fontFamily: 'var(--font-mono)', background: 'var(--gray-100)', padding: '2px 4px', borderRadius: 'var(--radius-sm)' }}>/.well-known/peac.txt</code>
                </p>

                <pre style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-sm)',
                  background: 'var(--gray-50)',
                  padding: 'var(--space-4)',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'auto',
                  lineHeight: 1.6,
                  border: '1px solid var(--gray-200)'
                }}>
{`preferences: https://originary.xyz/.well-known/aipref.json
access_control: http-402
payments: x402, stripe
provenance: c2pa
receipts: required
verify: https://api.originary.xyz/verify
public_keys:
  kid=2025-09-key1; alg=Ed25519; key=...   # base64url`}
                </pre>

                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-500)', marginTop: 'var(--space-3)' }}>
                  Header used in responses: <code style={{ fontFamily: 'var(--font-mono)', background: 'var(--gray-100)', padding: '2px 4px', borderRadius: 'var(--radius-sm)' }}>PEAC-Receipt</code>
                </p>

                <button
                  onClick={() => setExpandedArtifacts(!expandedArtifacts)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--gray-600)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 'var(--space-3) 0',
                    fontWeight: 600,
                    marginTop: 'var(--space-4)'
                  }}
                >
                  {expandedArtifacts ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  More artifacts...
                </button>

                {expandedArtifacts && (
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 'var(--space-2)',
                    marginTop: 'var(--space-2)'
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
                          color: 'var(--gray-700)',
                          fontFamily: 'var(--font-mono)'
                        }}
                      >
                        {file}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Receipt */}
              <div className="card" style={{
                padding: 'var(--space-6)',
                background: 'var(--white)',
                border: '1px solid var(--gray-200)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
              }}>
                <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>
                  Receipt
                </h2>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)', marginBottom: 'var(--space-1)' }}>
                  A receipt is a signed record of the interaction that can be verified by anyone with your public keys.
                </p>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)', marginBottom: 'var(--space-4)' }}>
                  Verification checks signature, headers, and integrity against your published policy.
                </p>

                <div style={{
                  background: 'var(--gray-50)',
                  border: '1px solid var(--gray-200)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-4)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--gray-500)', textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>
                    Signed JWS
                  </div>
                  <pre style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--gray-700)',
                    overflow: 'auto',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-all',
                    lineHeight: 1.5,
                    margin: 0
                  }}>
                    {SAMPLE_JWS.substring(0, 200)}...
                  </pre>
                </div>

                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                  <button
                    onClick={copyReceipt}
                    className="btn btn-secondary"
                    style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)' }}
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied ? 'Copied!' : 'Copy receipt'}
                  </button>
                  <button
                    onClick={verifyNow}
                    className="btn btn-primary"
                    style={{ flex: 1 }}
                    disabled={verifying}
                  >
                    {verifying ? 'Verifying...' : 'Verify now'}
                  </button>
                </div>

                {verifyResult && (
                  <div style={{
                    marginTop: 'var(--space-4)',
                    padding: 'var(--space-3)',
                    background: verifyResult === 'success' ? 'rgba(0, 217, 36, 0.1)' : 'rgba(255, 71, 87, 0.1)',
                    border: `1px solid ${verifyResult === 'success' ? 'var(--success)' : 'var(--error)'}`,
                    borderRadius: 'var(--radius-lg)',
                    fontSize: 'var(--text-sm)',
                    color: verifyResult === 'success' ? 'var(--success)' : 'var(--error)',
                    fontWeight: 600
                  }}>
                    {verifyResult === 'success' ? '✓ Receipt verified successfully' : '✗ Verification failed'}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
