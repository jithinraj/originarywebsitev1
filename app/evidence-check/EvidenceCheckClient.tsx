'use client'

import Link from 'next/link'
import { useState, useEffect, useRef, useCallback } from 'react'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import {
  ArrowRight,
  Shield,
  Terminal,
  CheckCircle,
  Lock,
  Eye,
  ExternalLink,
  Zap,
  FileText,
  AlertTriangle,
  Copy,
  Share2,
  Wrench,
  Globe,
  MessageSquare,
  Search,
  CreditCard,
  Scale,
  ToggleLeft,
  ToggleRight,
  XCircle,
  HelpCircle,
  Code,
  Headphones,
  DollarSign,
  Building,
  Users,
} from 'lucide-react'

/* ─── Scroll reveal ─────────────────────────────────────────────────────── */

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

const reveal = (visible: boolean, delay = 0): React.CSSProperties => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : 'translateY(28px)',
  transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
})

/* ─── Sample inputs for scenarios ───────────────────────────────────────── */

const SCENARIO_INPUTS: Record<string, string> = {
  'My agent called a tool': `2026-03-25T14:32:01.442Z  INFO  mcp-client  tool_call
  tool: "search_documents"
  server: "docs-server.internal:8080"
  args: { query: "quarterly revenue", limit: 10 }
  response_time_ms: 342
  status: "success"
  result_count: 7
  request_id: "req_abc123def456"`,

  'My API returned a result': `HTTP/1.1 200 OK
Content-Type: application/json
X-Request-Id: req_7f8a9b2c
X-Trace-Id: trace_4e5f6a7b8c9d

{
  "status": "success",
  "data": {
    "user_id": "usr_12345",
    "action": "document_access",
    "resource": "/api/v2/reports/q4-2025",
    "timestamp": "2026-03-25T14:32:01Z",
    "permissions": ["read"],
    "response_time_ms": 89
  }
}`,

  'A customer asked what happened': `Customer ticket #4821:
"My agent placed an order yesterday around 3pm for 50 units of SKU-7744
but I never got a confirmation. The dashboard shows the order as 'pending'
but my bank was charged $2,450. Can you confirm what happened and whether
the order actually went through?"`,

  'My team is reviewing an incident': `Incident Summary - INC-2026-0342
Severity: P2
Time: 2026-03-24 15:47 UTC to 2026-03-24 16:12 UTC (25 min)
Impact: Agent "procurement-bot" executed 3 unauthorized purchase orders
  totaling $12,400 against vendor API.
Root cause: Policy cache expired at 15:45, agent continued with stale
  authorization for 2 minutes before rate limiter triggered.
Evidence: CloudWatch logs, API gateway access logs, agent trace spans.
Status: Resolved. Orders reversed manually by ops team.
Action items: Add policy TTL hard-stop, require signed policy binding.`,

  'A payment happened': `{
  "event": "payment_intent.succeeded",
  "id": "evt_3Qx7mN9pR2sT",
  "data": {
    "object": {
      "id": "pi_1abc2def3ghi",
      "amount": 245000,
      "currency": "usd",
      "status": "succeeded",
      "payment_method": "pm_card_visa",
      "created": 1711374721,
      "metadata": {
        "order_id": "ord_98765",
        "agent_id": "agent_procurement_v2"
      }
    }
  },
  "created": 1711374722
}`,

  'I need audit-ready evidence': `We need to demonstrate to our compliance team that:
1. Every agent action in the last 30 days was authorized
2. Payment-related actions had proper policy binding
3. No agent exceeded its declared scope
4. All interactions can be independently verified by a third party

Currently we have: CloudWatch logs, Datadog traces, and Stripe webhooks.
We do not have signed records or portable evidence bundles.`,
}

const EXAMPLE_JWS =
  'eyJhbGciOiJFZERTQSIsInR5cCI6ImludGVyYWN0aW9uLXJlY29yZCtqd3QiLCJraWQiOiJrZXktMDAxIn0.eyJpc3MiOiJodHRwczovL2V4YW1wbGUub3JpZ2luYXJ5Lnh5eiIsInN1YiI6ImFnZW50LXByb2N1cmVtZW50LXYyIiwidHlwZSI6Im9yZy5wZWFjcHJvdG9jb2wvY29tbWVyY2UiLCJraW5kIjoiZXZpZGVuY2UiLCJpYXQiOjE3MTE0NjI0MDAsImV4cCI6MTcxMTU0ODgwMCwicGVhY192ZXJzaW9uIjoiMC4yIn0.c2lnbmF0dXJlLXBsYWNlaG9sZGVyLWZvci1kZW1vLXB1cnBvc2VzLW9ubHk'

/* ─── Analyzer logic ────────────────────────────────────────────────────── */

interface AnalysisResult {
  score: number
  badge: string
  badgeColor: string
  inputType: string
  teamCanSee: string[]
  otherPartyCanVerify: string[]
  whatsaMissing: string[]
  nextStep: string
  originaryAdds: string[]
  reason: string
}

function detectInputType(input: string): string {
  const trimmed = input.trim()
  // JWS: three base64url segments, first starts with eyJ
  if (/^eyJ[A-Za-z0-9_-]+\.eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/.test(trimmed)) {
    return 'jws'
  }
  // JSON
  try {
    const parsed = JSON.parse(trimmed)
    if (typeof parsed === 'object' && parsed !== null) return 'json'
  } catch {
    // not JSON
  }
  // Log lines: timestamps
  if (/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(trimmed)) return 'log'
  // HTTP trace
  if (/HTTP\/\d\.\d|GET |POST |PUT |DELETE |PATCH |X-Trace-Id|X-Request-Id/i.test(trimmed)) return 'trace'
  return 'text'
}

function analyzeInput(input: string): AnalysisResult {
  const inputType = detectInputType(input)

  if (inputType === 'jws') {
    return {
      score: 92,
      badge: 'Strong',
      badgeColor: 'var(--accent-success)',
      inputType: 'Signed record (JWS)',
      teamCanSee: [
        'You already have a signed artifact that captures who acted, what happened, and when.',
      ],
      otherPartyCanVerify: [
        'A verifier can check structure, signature validity, and core claims without relying on your dashboard.',
      ],
      whatsaMissing: [
        'Review whether the record includes the policy context, scope, and any domain-specific fields your counterparties will care about.',
      ],
      nextStep:
        'Open this record in Agent Auditor for full inspection and verification.',
      originaryAdds: [
        'Originary gives teams a consistent way to issue, inspect, export, and operationalize these records across products and workflows',
      ],
      reason:
        'This is close to portable evidence.',
    }
  }

  if (inputType === 'json') {
    const hasTimestamp = /timestamp|created|created_at|iat|exp|time/i.test(input)
    const hasId = /id["']?\s*:/i.test(input)
    const hasStatus = /status|state|event/i.test(input)
    const hasPayment = /amount|currency|payment|charge|invoice/i.test(input)

    const score = 25 + (hasTimestamp ? 10 : 0) + (hasId ? 5 : 0) + (hasStatus ? 5 : 0) + (hasPayment ? 5 : 0)

    return {
      score,
      badge: score >= 45 ? 'Moderate' : 'Weak',
      badgeColor: score >= 45 ? 'var(--accent-warning)' : 'var(--accent-error)',
      inputType: hasPayment ? 'JSON (payment event)' : 'JSON (structured data)',
      teamCanSee: [
        'Your trace or event payload is richer than raw logs.',
        'It helps reconstruct a timeline and explains what the system did.',
      ],
      otherPartyCanVerify: [
        'Some context may be understandable, but the artifact still depends on your systems, your exports, and your interpretation.',
      ],
      whatsaMissing: [
        'Signature integrity',
        'Clear issuer identity',
        'Durable decision evidence',
        'An artifact another party can verify offline',
      ],
      nextStep:
        'Preserve the structure you already have, then add a signed record around the policy decision or transaction boundary.',
      originaryAdds: [
        'Originary turns that internal structure into a signed record tied to the request, policy, and outcome so it can travel beyond your observability stack',
      ],
      reason:
        'You have structure, but not enough proof to travel.',
    }
  }

  if (inputType === 'log') {
    const hasRequestId = /request.id|req_|trace.id|span.id/i.test(input)
    const hasLevel = /INFO|WARN|ERROR|DEBUG|FATAL/i.test(input)
    const hasToolCall = /tool_call|tool.use|function_call/i.test(input)

    return {
      score: 18 + (hasRequestId ? 7 : 0) + (hasLevel ? 3 : 0) + (hasToolCall ? 5 : 0),
      badge: 'Weak',
      badgeColor: 'var(--accent-error)',
      inputType: hasToolCall ? 'Log (agent tool call)' : 'Log (timestamped events)',
      teamCanSee: [
        'Your logs show that something happened inside your system.',
        'They may include timestamps, endpoints, policy outcomes, and internal IDs.',
        'That is useful for debugging and incident response.',
      ],
      otherPartyCanVerify: [
        'Very little independently.',
        'Another team, customer, vendor, auditor, or regulator would still need to trust your dashboard, screenshots, or exports.',
      ],
      whatsaMissing: [
        'Independent verification',
        'Issuer identity',
        'Tamper-evident integrity',
        'Durable policy binding',
        'A record that survives handoff outside your system',
      ],
      nextStep:
        'Keep the logs, but add a signed record at decision time. That gives you something another party can verify without trusting your internal tooling.',
      originaryAdds: [
        'Originary verifies the request before action is taken',
        'Applies explicit policy',
        'Returns a signed, exportable record you can inspect, share, archive, or verify locally later',
      ],
      reason:
        'You have observability, not portable proof.',
    }
  }

  if (inputType === 'trace') {
    return {
      score: 22,
      badge: 'Weak',
      badgeColor: 'var(--accent-error)',
      inputType: 'HTTP trace / API response',
      teamCanSee: [
        'Your trace or event payload is richer than raw logs.',
        'It helps reconstruct a timeline and explains what the system did.',
      ],
      otherPartyCanVerify: [
        'Some context may be understandable, but the artifact still depends on your systems, your exports, and your interpretation.',
      ],
      whatsaMissing: [
        'Signature integrity',
        'Clear issuer identity',
        'Durable decision evidence',
        'An artifact another party can verify offline',
      ],
      nextStep:
        'Preserve the structure you already have, then add a signed record around the policy decision or transaction boundary.',
      originaryAdds: [
        'Originary turns that internal structure into a signed record tied to the request, policy, and outcome so it can travel beyond your observability stack',
      ],
      reason:
        'You have structure, but not enough proof to travel.',
    }
  }

  // Plain text / incident summary
  const hasFinancial = /\$[\d,]+|payment|charge|invoice|order|purchase/i.test(input)
  const hasCompliance = /audit|compliance|regulation|obligation|demonstrate/i.test(input)
  const hasDispute = /dispute|incident|unauthorized|reversed|escalat/i.test(input)

  return {
    score: 8 + (hasFinancial ? 3 : 0) + (hasCompliance ? 2 : 0) + (hasDispute ? 2 : 0),
    badge: 'None',
    badgeColor: 'var(--accent-error)',
    inputType: hasDispute
      ? 'Plain text (incident summary)'
      : hasCompliance
        ? 'Plain text (compliance narrative)'
        : 'Plain text (description)',
    teamCanSee: [
      'Your description gives enough context to identify the operational problem and the likely points of dispute.',
    ],
    otherPartyCanVerify: [
      'Nothing yet. A narrative explains the problem, but it does not prove the sequence, policy, authorization, or outcome.',
    ],
    whatsaMissing: [
      'Artifacts',
      'Integrity',
      'Timestamps tied to a signed record',
      'A portable format someone else can independently verify',
    ],
    nextStep:
      'Map this workflow to the point where a request is evaluated, approved, denied, charged, or completed. That is where a signed record adds the most value.',
    originaryAdds: [
      'Originary captures the decision boundary itself so the explanation can later be backed by something verifiable',
    ],
    reason:
      'The scenario is understandable. The evidence is still incomplete.',
  }
}

/* ─── Worked example data ───────────────────────────────────────────────── */

const WORKED_EXAMPLES = [
  {
    label: 'MCP tool call',
    log: `2026-03-25T14:32:01Z INFO tool_call
  tool: "search_documents"
  server: docs-server.internal
  request_id: req_abc123
  status: success`,
    signed: `{
  "iss": "https://docs-server.example.com",
  "sub": "agent-research-v3",
  "type": "org.peacprotocol/access",
  "kind": "evidence",
  "iat": 1711374721,
  "ext": {
    "access": {
      "resource": "search_documents",
      "action": "tool_call"
    }
  }
}
// Wrapped in compact JWS, signed with Ed25519`,
  },
  {
    label: 'API access',
    log: `GET /api/v2/reports/q4-2025 HTTP/1.1
Host: data-api.internal
X-Request-Id: req_7f8a9b2c
Authorization: Bearer eyJ...

200 OK  89ms  7 results`,
    signed: `{
  "iss": "https://data-api.example.com",
  "sub": "analyst-agent",
  "type": "org.peacprotocol/access",
  "kind": "evidence",
  "iat": 1711374721,
  "ext": {
    "access": {
      "resource": "/api/v2/reports/q4-2025",
      "action": "read"
    }
  }
}
// PEAC-Receipt header returned with API response`,
  },
  {
    label: 'Policy dispute',
    log: `Agent "procurement-bot" placed order ORD-9876
  at 15:47 UTC on 2026-03-24.
  Policy cache showed "authorized" but had expired
  at 15:45 UTC (2 min stale).
  Ops reversed the order manually.`,
    signed: `{
  "iss": "https://gateway.example.com",
  "sub": "procurement-bot",
  "type": "org.peacprotocol/commerce",
  "kind": "evidence",
  "iat": 1711375620,
  "peac": {
    "policy": {
      "uri": "https://gateway.example.com/.well-known/peac.txt",
      "digest": "sha256:a1b2c3..."
    }
  },
  "ext": {
    "commerce": {
      "event": "authorized",
      "amount_minor": "245000",
      "currency": "USD"
    }
  }
}
// Policy digest proves which version was active`,
  },
  {
    label: 'Settlement event',
    log: `Stripe webhook: payment_intent.succeeded
  pi_1abc2def3ghi  $2,450.00 USD
  metadata.order_id: ord_98765
  metadata.agent_id: agent_procurement_v2
  Received at 2026-03-25T14:32:02Z`,
    signed: `{
  "iss": "https://gateway.example.com",
  "sub": "agent_procurement_v2",
  "type": "org.peacprotocol/commerce",
  "kind": "evidence",
  "iat": 1711374722,
  "ext": {
    "commerce": {
      "event": "settled",
      "amount_minor": "245000",
      "currency": "USD",
      "rail": "stripe"
    }
  }
}
// Signed at the point of settlement observation`,
  },
]

/* ─── Role-based view data ──────────────────────────────────────────────── */

const ROLE_VIEWS = [
  {
    role: 'Builder',
    icon: Code,
    question: 'How do I add signed records to my API or agent?',
    points: [
      'Add @peac/protocol to your service',
      'Call issue() at the point of action',
      'Return the signed record in a header or response body',
      'Your consumers can verify offline with the public key',
    ],
  },
  {
    role: 'Operator',
    icon: Terminal,
    question: 'How do I know my agents are acting within policy?',
    points: [
      'Each signed record includes a policy binding digest',
      'Verify the digest matches your declared policy',
      'Detect stale or missing policy bindings automatically',
      'Reconstruct the full decision timeline from signed records',
    ],
  },
  {
    role: 'Security',
    icon: Shield,
    question: 'How do I prove nothing was tampered with?',
    points: [
      'Ed25519 signatures on every signed record',
      'Tamper evidence: any modification invalidates the signature',
      'Issuer identity bound to each record via JWKS discovery',
      'Offline verification: no callback to the issuer required',
    ],
  },
  {
    role: 'Support',
    icon: Headphones,
    question: 'A customer says something went wrong. How do I check?',
    points: [
      'Look up the signed record for the disputed interaction',
      'Verify the signature to confirm authenticity',
      'Show the customer the same record they can verify independently',
      'No "trust us" required: the proof speaks for itself',
    ],
  },
  {
    role: 'Finance',
    icon: DollarSign,
    question: 'How do I reconcile agent-initiated transactions?',
    points: [
      'Commerce extension records amount, currency, and rail',
      'Each transaction record is signed by the issuing gateway',
      'Settlement evidence tied to the specific interaction',
      'Audit trail of every financial action with timestamps',
    ],
  },
  {
    role: 'Legal / Compliance',
    icon: Scale,
    question: 'How do I demonstrate compliance to a regulator?',
    points: [
      'Signed records constitute independently verifiable evidence',
      'Policy binding proves which rules were in effect',
      'Evidence bundles package related records for review',
      'No infrastructure access needed: hand the bundle to the auditor',
    ],
  },
]

/* ─── Hard questions data ───────────────────────────────────────────────── */

const HARD_QUESTIONS = [
  {
    question: 'Was the agent authorized to take this action?',
    detail: 'Logs show what happened. They do not prove what was allowed.',
  },
  {
    question: 'Which policy was in effect at the time?',
    detail: 'If the policy changed between the action and the review, logs cannot tell you which version applied.',
  },
  {
    question: 'Can the other party verify this independently?',
    detail: 'Internal logs require the other party to trust your infrastructure. Signed records do not.',
  },
  {
    question: 'Has this record been modified since it was created?',
    detail: 'Log entries can be edited, deleted, or backdated. A signature detects any change.',
  },
  {
    question: 'Can I hand this to an auditor without giving them system access?',
    detail: 'Logs live in your infrastructure. A signed record is a portable file anyone can verify.',
  },
]

/* ─── Break-the-proof toggle data ───────────────────────────────────────── */

interface TamperToggle {
  label: string
  description: string
  errorMessage: string
}

const TAMPER_TOGGLES: TamperToggle[] = [
  {
    label: 'Wrong issuer',
    description: 'Change the issuer to a different origin',
    errorMessage: 'FAIL: Issuer "https://attacker.example.com" does not match the signing key. The key ID resolves to a different origin.',
  },
  {
    label: 'Modified payload',
    description: 'Alter the amount in the commerce extension',
    errorMessage: 'FAIL: Signature verification failed. The payload has been modified after signing. Ed25519 signature does not match.',
  },
  {
    label: 'Mismatched policy',
    description: 'Swap the policy digest for a different version',
    errorMessage: 'FAIL: Policy binding mismatch. Digest "sha256:9f8e7d..." does not match the expected "sha256:a1b2c3..." for the declared policy URI.',
  },
]

/* ─── Component ─────────────────────────────────────────────────────────── */

export default function EvidenceCheckClient() {
  const [heroReady, setHeroReady] = useState(false)
  useEffect(() => {
    setHeroReady(true)
  }, [])

  // Section refs
  const scenarioSection = useReveal()
  const analyzerSection = useReveal()
  const comparisonSection = useReveal()
  const examplesSection = useReveal()
  const breakSection = useReveal()
  const questionsSection = useReveal()
  const rolesSection = useReveal()
  const gapSection = useReveal()
  const ctaSection = useReveal()
  const distinctionSection = useReveal()

  // Analyzer state
  const [analyzerInput, setAnalyzerInput] = useState('')
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null)
  const [activeTypeHint, setActiveTypeHint] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Worked examples state
  const [activeExample, setActiveExample] = useState(0)

  // Break the proof state
  const [tamperStates, setTamperStates] = useState([false, false, false])

  // Role-based view state
  const [activeRole, setActiveRole] = useState(0)

  const runAnalysis = useCallback(() => {
    if (!analyzerInput.trim()) return
    const result = analyzeInput(analyzerInput)
    setAnalysisResult(result)
  }, [analyzerInput])

  const loadScenario = useCallback((scenario: string) => {
    const input = SCENARIO_INPUTS[scenario]
    if (input) {
      setAnalyzerInput(input)
      setAnalysisResult(null)
      // scroll to analyzer
      document.getElementById('analyzer')?.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => textareaRef.current?.focus(), 400)
    }
  }, [])

  const loadExample = useCallback(() => {
    setAnalyzerInput(EXAMPLE_JWS)
    setAnalysisResult(null)
    document.getElementById('analyzer')?.scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => textareaRef.current?.focus(), 400)
  }, [])

  const handleCopyResult = useCallback(() => {
    if (!analysisResult) return
    const text = `Evidence Check Score: ${analysisResult.score}/100 (${analysisResult.badge})
Input type: ${analysisResult.inputType}

What your team can see:
${analysisResult.teamCanSee.map((s) => `- ${s}`).join('\n')}

What another party can verify:
${analysisResult.otherPartyCanVerify.map((s) => `- ${s}`).join('\n')}

What is missing:
${analysisResult.whatsaMissing.map((s) => `- ${s}`).join('\n')}

Next best step:
${analysisResult.nextStep}

${analysisResult.reason}`
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [analysisResult])

  const toggleTamper = useCallback((index: number) => {
    setTamperStates((prev) => {
      const next = [...prev]
      next[index] = !next[index]
      return next
    })
  }, [])

  const activeTamperCount = tamperStates.filter(Boolean).length

  const typeHints = ['Logs', 'Trace', 'Webhook', 'Signed record', 'Plain English']

  return (
    <>
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        {/* ── Section 1: Hero ──────────────────────────────────────────────── */}
        <section
          className="section pt-24 sm:pt-28 md:pt-36 lg:pt-40 pb-12 sm:pb-16 md:pb-20"
          style={{
            background: 'var(--surface-elevated)',
          }}
        >
          <div className="container px-5 sm:px-8 md:px-12 lg:px-16">
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              {/* Badge */}
              <div
                style={{
                  ...reveal(heroReady, 0),
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  marginBottom: 'var(--space-6)',
                  padding: 'var(--space-2) var(--space-5)',
                  background: 'var(--accent-success-subtle)',
                  border: '1px solid var(--accent-success-border)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                  color: 'var(--accent-success)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--accent-success)',
                    display: 'inline-block',
                    flexShrink: 0,
                  }}
                />
                Evidence Check
              </div>

              {/* H1 */}
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                style={{
                  ...reveal(heroReady, 0.1),
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.04em',
                  marginBottom: 'var(--space-6)',
                  color: 'var(--text-primary)',
                }}
              >
                Can you prove what your agent did?
              </h1>

              {/* Subhead */}
              <p
                className="text-base sm:text-lg md:text-xl"
                style={{
                  ...reveal(heroReady, 0.2),
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  maxWidth: '660px',
                  margin: '0 auto var(--space-6) auto',
                }}
              >
                Paste a log, trace, webhook, receipt, or plain-English incident summary. See what
                your team can see, what another party can verify, what is missing, and how to make it
                portable.
              </p>

              {/* Trust line */}
              <p
                style={{
                  ...reveal(heroReady, 0.25),
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-tertiary)',
                  marginBottom: 'var(--space-8)',
                }}
              >
                No signup. Runs in your browser.
              </p>

              {/* CTAs */}
              <div
                className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
                style={{
                  ...reveal(heroReady, 0.3),
                }}
              >
                <a
                  href="#analyzer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '1rem 2.25rem',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    color: 'var(--color-fg-inverse)',
                    background: 'var(--color-accent)',
                    borderRadius: '62px',
                    border: 'none',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    lineHeight: 1,
                  }}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('analyzer')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <span>Run the check</span>
                  <ArrowRight size={18} />
                </a>
                <button
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '1rem 2.25rem',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    color: 'var(--color-fg)',
                    background: 'transparent',
                    border: '1px solid var(--color-border-strong)',
                    borderRadius: '62px',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    lineHeight: 1,
                    fontFamily: 'inherit',
                  }}
                  onClick={loadExample}
                >
                  <span>Try an example</span>
                  <FileText size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2: Scenario chips ────────────────────────────────────── */}
        <section
          ref={scenarioSection.ref}
          className="section"
          style={{ background: 'var(--surface-subtle)' }}
        >
          <div className="container px-5 sm:px-8 md:px-12 lg:px-16">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              <h2
                className="text-2xl sm:text-3xl"
                style={{
                  ...reveal(scenarioSection.visible, 0),
                  marginBottom: 'var(--space-3)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}
              >
                Start from a real situation
              </h2>
              <p
                style={{
                  ...reveal(scenarioSection.visible, 0.1),
                  fontSize: 'var(--text-lg)',
                  color: 'var(--text-secondary)',
                  maxWidth: '480px',
                  margin: '0 auto',
                }}
              >
                Pick a scenario or paste your own artifact below.
              </p>
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
              style={{
                ...reveal(scenarioSection.visible, 0.15),
                maxWidth: '960px',
                margin: '0 auto',
              }}
            >
              {[
                { label: 'My agent called a tool', icon: Wrench },
                { label: 'My API returned a result', icon: Globe },
                { label: 'A customer asked what happened', icon: MessageSquare },
                { label: 'My team is reviewing an incident', icon: Search },
                { label: 'A payment happened', icon: CreditCard },
                { label: 'I need audit-ready evidence', icon: Scale },
              ].map(({ label, icon: Icon }, i) => (
                <button
                  key={label}
                  onClick={() => loadScenario(label)}
                  style={{
                    ...reveal(scenarioSection.visible, 0.15 + i * 0.05),
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                    padding: 'var(--space-5)',
                    background: 'var(--surface-elevated)',
                    border: '1px solid var(--border-default)',
                    borderRadius: 'var(--radius-xl)',
                    boxShadow: 'var(--shadow-xs)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                    width: '100%',
                    fontFamily: 'inherit',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-hover)'
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-default)'
                    e.currentTarget.style.boxShadow = 'var(--shadow-xs)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 'var(--radius-lg)',
                      background: 'var(--accent-brand-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} style={{ color: 'var(--accent-brand)' }} />
                  </div>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 3: Interactive analyzer ──────────────────────────────── */}
        <section
          id="analyzer"
          ref={analyzerSection.ref}
          className="section"
          style={{
            background: 'var(--surface-elevated)',
            paddingTop: 'var(--space-16)',
            paddingBottom: 'var(--space-16)',
          }}
        >
          <div className="container px-5 sm:px-8 md:px-12 lg:px-16">
            <div style={{ maxWidth: '860px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
                <h2
                  className="text-2xl sm:text-3xl"
                  style={{
                    ...reveal(analyzerSection.visible, 0),
                    marginBottom: 'var(--space-3)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                  }}
                >
                  Paste an artifact. See what you can prove.
                </h2>
                <p
                  style={{
                    ...reveal(analyzerSection.visible, 0.1),
                    fontSize: 'var(--text-lg)',
                    color: 'var(--text-secondary)',
                    maxWidth: '520px',
                    margin: '0 auto',
                  }}
                >
                  Drop in a log snippet, trace, JSON payload, signed record, or describe an incident in plain English. We analyze what is observable inside your system, what can travel across teams and vendors, and what would still be disputed.
                </p>
              </div>

              {/* Type hint chips */}
              <div
                className="flex flex-wrap justify-center gap-2"
                style={{
                  ...reveal(analyzerSection.visible, 0.15),
                  marginBottom: 'var(--space-5)',
                }}
              >
                {typeHints.map((hint) => (
                  <span
                    key={hint}
                    style={{
                      padding: 'var(--space-1) var(--space-3)',
                      background:
                        activeTypeHint === hint
                          ? 'var(--accent-brand-subtle)'
                          : 'var(--surface-subtle)',
                      borderRadius: 'var(--radius-full)',
                      border: `1px solid ${activeTypeHint === hint ? 'var(--accent-brand)' : 'var(--border-default)'}`,
                      fontSize: 'var(--text-xs)',
                      color:
                        activeTypeHint === hint ? 'var(--accent-brand)' : 'var(--text-tertiary)',
                      fontWeight: 500,
                    }}
                  >
                    {hint}
                  </span>
                ))}
              </div>

              {/* Textarea */}
              <div style={{ ...reveal(analyzerSection.visible, 0.2) }}>
                <textarea
                  ref={textareaRef}
                  className="w-full"
                  value={analyzerInput}
                  onChange={(e) => {
                    setAnalyzerInput(e.target.value)
                    setAnalysisResult(null)
                    const type = detectInputType(e.target.value)
                    const hintMap: Record<string, string> = {
                      jws: 'Signed record',
                      json: 'Webhook',
                      log: 'Logs',
                      trace: 'Trace',
                      text: 'Plain English',
                    }
                    setActiveTypeHint(e.target.value.trim() ? (hintMap[type] ?? null) : null)
                  }}
                  placeholder="Paste a log excerpt here. Include timestamps, request IDs, policy decisions, or any relevant events."
                  style={{
                    width: '100%',
                    minHeight: '200px',
                    padding: 'var(--space-5)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-sm)',
                    lineHeight: 1.7,
                    color: 'var(--text-primary)',
                    background: 'var(--surface-subtle)',
                    border: '1px solid var(--border-default)',
                    borderRadius: '16px',
                    resize: 'vertical',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-brand)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-default)'
                  }}
                />
              </div>

              <p
                style={{
                  fontSize: 'var(--text-xs)',
                  color: 'var(--text-muted)',
                  marginTop: 'var(--space-2)',
                  marginBottom: 0,
                  fontStyle: 'italic',
                }}
              >
                Everything stays in your browser. No outbound verification or artifact fetches from this page.
              </p>

              {/* Action row */}
              <div
                className="flex flex-col sm:flex-row items-center justify-between gap-3 flex-wrap"
                style={{
                  marginTop: 'var(--space-4)',
                }}
              >
                <button
                  onClick={runAnalysis}
                  disabled={!analyzerInput.trim()}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '1rem 2.25rem',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    color: 'var(--color-fg-inverse)',
                    background: 'var(--color-accent)',
                    borderRadius: '62px',
                    border: 'none',
                    cursor: analyzerInput.trim() ? 'pointer' : 'not-allowed',
                    textDecoration: 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    lineHeight: 1,
                    fontFamily: 'inherit',
                    opacity: analyzerInput.trim() ? 1 : 0.5,
                  }}
                >
                  <span>Analyze</span>
                  <Zap size={18} />
                </button>
                <button
                  onClick={loadExample}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--accent-brand)',
                    fontSize: 'var(--text-sm)',
                    cursor: 'pointer',
                    fontWeight: 500,
                    fontFamily: 'inherit',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-1)',
                  }}
                >
                  Try an example
                  <ArrowRight size={14} />
                </button>
              </div>

              {/* ── Empty state ────────────────────────────────────────────── */}
              {!analysisResult && !analyzerInput.trim() && (
                <div
                  style={{
                    marginTop: 'var(--space-8)',
                    padding: 'var(--space-8)',
                    background: 'var(--surface-subtle)',
                    border: '1px solid var(--border-default)',
                    borderRadius: 'var(--radius-2xl)',
                    textAlign: 'center',
                  }}
                >
                  <h3
                    style={{
                      fontSize: 'var(--text-lg)',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: 'var(--space-3)',
                    }}
                  >
                    Start with any artifact you already have
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                      maxWidth: '520px',
                      margin: '0 auto',
                    }}
                  >
                    Logs, traces, webhooks, receipts, and even a short incident summary are enough to begin. The point is not perfect input. The point is to see where proof breaks down.
                  </p>
                </div>
              )}

              {/* ── Analysis result ─────────────────────────────────────────── */}
              {analysisResult && (
                <div
                  className="p-4 sm:p-6 md:p-8"
                  style={{
                    marginTop: 'var(--space-8)',
                    background: 'var(--surface-elevated)',
                    border: '1px solid var(--border-default)',
                    borderRadius: '24px',
                    boxShadow: 'var(--shadow-card)',
                    animation: 'fadeInUp 0.5s ease forwards',
                  }}
                >
                  {/* Score header */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-5)',
                      marginBottom: 'var(--space-6)',
                      flexWrap: 'wrap',
                    }}
                  >
                    <div style={{ textAlign: 'center' }}>
                      <div
                        style={{
                          fontSize: 'var(--text-xs)',
                          fontWeight: 700,
                          color: 'var(--text-tertiary)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          marginBottom: 'var(--space-1)',
                        }}
                      >
                        Evidence strength
                      </div>
                      <div
                        className="text-4xl sm:text-5xl md:text-6xl"
                        style={{
                          fontWeight: 700,
                          color: analysisResult.badgeColor,
                          lineHeight: 1,
                        }}
                      >
                        {analysisResult.score}
                      </div>
                      <div
                        style={{
                          fontSize: 'var(--text-xs)',
                          color: 'var(--text-muted)',
                          marginTop: 'var(--space-1)',
                        }}
                      >
                        / 100
                      </div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
                        <span
                          style={{
                            padding: 'var(--space-1) var(--space-3)',
                            borderRadius: 'var(--radius-full)',
                            background: analysisResult.badgeColor,
                            color: '#fff',
                            fontSize: 'var(--text-xs)',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                          }}
                        >
                          {analysisResult.badge}
                        </span>
                        <span
                          style={{
                            fontSize: 'var(--text-xs)',
                            color: 'var(--text-tertiary)',
                            fontFamily: 'var(--font-mono)',
                          }}
                        >
                          {analysisResult.inputType}
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: 'var(--text-sm)',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {analysisResult.reason}
                      </p>
                    </div>
                  </div>

                  {/* 4-column grid */}
                  <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                    style={{
                      marginBottom: 'var(--space-6)',
                    }}
                  >
                    {[
                      {
                        title: 'What your team can see',
                        items: analysisResult.teamCanSee,
                        color: 'var(--accent-brand)',
                        bg: 'var(--accent-brand-subtle)',
                      },
                      {
                        title: 'What another party can verify',
                        items: analysisResult.otherPartyCanVerify,
                        color: 'var(--accent-secondary)',
                        bg: 'var(--accent-secondary-subtle)',
                      },
                      {
                        title: 'What is missing',
                        items: analysisResult.whatsaMissing,
                        color: 'var(--accent-error)',
                        bg: 'var(--accent-error-muted)',
                      },
                      {
                        title: 'Next best step',
                        items: [analysisResult.nextStep],
                        color: 'var(--accent-warning)',
                        bg: 'var(--accent-warning-muted)',
                      },
                    ].map(({ title, items, color, bg }) => (
                      <div
                        key={title}
                        style={{
                          padding: 'var(--space-5)',
                          background: bg,
                          borderRadius: '16px',
                          border: `1px solid ${color}20`,
                        }}
                      >
                        <h4
                          style={{
                            fontSize: 'var(--text-xs)',
                            fontWeight: 700,
                            color,
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            marginBottom: 'var(--space-3)',
                          }}
                        >
                          {title}
                        </h4>
                        <ul
                          style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--space-2)',
                          }}
                        >
                          {items.map((item, idx) => (
                            <li
                              key={idx}
                              style={{
                                fontSize: 'var(--text-xs)',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.5,
                              }}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* What changes with Originary */}
                  <div
                    style={{
                      padding: 'var(--space-5)',
                      background: 'var(--accent-brand-faint)',
                      borderRadius: '16px',
                      border: '1px solid var(--border-brand)',
                      marginBottom: 'var(--space-5)',
                    }}
                  >
                    <h4
                      style={{
                        fontSize: 'var(--text-xs)',
                        fontWeight: 700,
                        color: 'var(--accent-brand)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        marginBottom: 'var(--space-3)',
                      }}
                    >
                      What changes with Originary
                    </h4>
                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-2)',
                      }}
                    >
                      {analysisResult.originaryAdds.map((item, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 'var(--space-2)',
                            fontSize: 'var(--text-sm)',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.5,
                          }}
                        >
                          <CheckCircle
                            size={14}
                            style={{
                              color: 'var(--accent-brand)',
                              flexShrink: 0,
                              marginTop: 2,
                            }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Disclaimer + actions */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: 'var(--space-3)',
                    }}
                  >
                    <p
                      style={{
                        fontSize: 'var(--text-xs)',
                        color: 'var(--text-muted)',
                        margin: 0,
                        fontStyle: 'italic',
                      }}
                    >
                      Heuristic estimate based on what is detectable in your input. Useful for orientation, not as proof by itself.
                    </p>
                    <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                      <button
                        onClick={handleCopyResult}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem',
                          padding: '0.5rem 1rem',
                          fontSize: '0.8125rem',
                          fontWeight: 500,
                          color: 'var(--color-fg)',
                          background: 'transparent',
                          border: '1px solid var(--color-border-strong)',
                          borderRadius: '62px',
                          cursor: 'pointer',
                          textDecoration: 'none',
                          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                          lineHeight: 1,
                          fontFamily: 'inherit',
                        }}
                      >
                        {copied ? <CheckCircle size={14} /> : <Copy size={14} />}
                        {copied ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: 'var(--text-xs)',
                      color: 'var(--text-muted)',
                      marginTop: 'var(--space-4)',
                      marginBottom: 0,
                      textAlign: 'center',
                    }}
                  >
                    Best used as a conversation starter with your engineering, ops, security, or compliance team.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── Section 4: Side-by-side comparison ──────────────────────────── */}
        <section
          ref={comparisonSection.ref}
          className="section"
          style={{ background: 'var(--surface-subtle)' }}
        >
          <div className="container px-5 sm:px-8 md:px-12 lg:px-16">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              <div
                style={{
                  ...reveal(comparisonSection.visible, 0),
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                  color: 'var(--accent-brand)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: 'var(--space-3)',
                }}
              >
                See the difference
              </div>
              <h2
                className="text-2xl sm:text-3xl"
                style={{
                  ...reveal(comparisonSection.visible, 0),
                  marginBottom: 'var(--space-3)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}
              >
                What your logs show vs what others can verify
              </h2>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              style={{
                ...reveal(comparisonSection.visible, 0.15),
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              {/* Local observability */}
              <div
                style={{
                  padding: 'var(--space-8)',
                  background: 'var(--surface-elevated)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--border-default)',
                  boxShadow: 'var(--shadow-xs)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                    marginBottom: 'var(--space-5)',
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 'var(--radius-xl)',
                      background: 'var(--accent-warning-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Eye size={20} style={{ color: 'var(--accent-warning)' }} />
                  </div>
                  <h3
                    style={{
                      fontSize: 'var(--text-lg)',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      margin: 0,
                    }}
                  >
                    Local observability
                  </h3>
                </div>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-3)',
                  }}
                >
                  {[
                    'Logs and traces help your team debug.',
                    'They explain what your systems observed and how they behaved.',
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 'var(--space-2)',
                        fontSize: 'var(--text-sm)',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                      }}
                    >
                      <AlertTriangle
                        size={14}
                        style={{
                          color: 'var(--accent-warning)',
                          flexShrink: 0,
                          marginTop: 3,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <p
                  style={{
                    marginTop: 'var(--space-4)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--text-muted)',
                    fontStyle: 'italic',
                  }}
                >
                  Useful for internal understanding. Weak for cross-party proof.
                </p>
              </div>

              {/* Portable evidence */}
              <div
                style={{
                  padding: 'var(--space-8)',
                  background: 'var(--surface-elevated)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--accent-success-border)',
                  boxShadow: 'var(--shadow-xs)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                    marginBottom: 'var(--space-5)',
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 'var(--radius-xl)',
                      background: 'var(--accent-success-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Shield size={20} style={{ color: 'var(--accent-success)' }} />
                  </div>
                  <h3
                    style={{
                      fontSize: 'var(--text-lg)',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      margin: 0,
                    }}
                  >
                    Portable evidence
                  </h3>
                </div>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-3)',
                  }}
                >
                  {[
                    'A signed record captures the decision boundary in a form another party can verify without trusting your dashboard.',
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 'var(--space-2)',
                        fontSize: 'var(--text-sm)',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                      }}
                    >
                      <CheckCircle
                        size={14}
                        style={{
                          color: 'var(--accent-success)',
                          flexShrink: 0,
                          marginTop: 3,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <p
                  style={{
                    marginTop: 'var(--space-4)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--text-muted)',
                    fontStyle: 'italic',
                  }}
                >
                  Useful for review, disputes, audits, and handoffs.
                </p>
              </div>
            </div>

            <p
              style={{
                textAlign: 'center',
                fontSize: 'var(--text-base)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginTop: 'var(--space-8)',
              }}
            >
              Observability helps you understand. Evidence helps you prove.
            </p>
          </div>
        </section>

        {/* ── Section 5: Worked examples ───────────────────────────────────── */}
        <section
          ref={examplesSection.ref}
          className="section"
          style={{ background: 'var(--surface-elevated)' }}
        >
          <div className="container px-5 sm:px-8 md:px-12 lg:px-16">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              <div
                style={{
                  ...reveal(examplesSection.visible, 0),
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                  color: 'var(--accent-brand)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: 'var(--space-3)',
                }}
              >
                Worked examples
              </div>
              <h2
                className="text-2xl sm:text-3xl"
                style={{
                  ...reveal(examplesSection.visible, 0),
                  marginBottom: 'var(--space-3)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}
              >
                See how evidence strength changes by scenario
              </h2>
              <p
                style={{
                  ...reveal(examplesSection.visible, 0.1),
                  fontSize: 'var(--text-lg)',
                  color: 'var(--text-secondary)',
                  maxWidth: '560px',
                  margin: '0 auto',
                }}
              >
                The same workflow can look very different depending on whether you only have logs or whether you also have a signed record.
              </p>
              <p
                style={{
                  ...reveal(examplesSection.visible, 0.15),
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-tertiary)',
                  marginTop: 'var(--space-3)',
                }}
              >
                Start here if you want to see the difference before pasting your own artifact.
              </p>
            </div>

            {/* Tabs */}
            <div
              className="flex flex-wrap justify-center gap-2"
              style={{
                ...reveal(examplesSection.visible, 0.15),
                marginBottom: 'var(--space-6)',
              }}
            >
              {WORKED_EXAMPLES.map((ex, i) => (
                <button
                  key={ex.label}
                  onClick={() => setActiveExample(i)}
                  style={{
                    padding: 'var(--space-2) var(--space-4)',
                    borderRadius: 'var(--radius-full)',
                    border: `1px solid ${activeExample === i ? 'var(--accent-brand)' : 'var(--border-default)'}`,
                    background:
                      activeExample === i ? 'var(--accent-brand-subtle)' : 'var(--surface-subtle)',
                    color: activeExample === i ? 'var(--accent-brand)' : 'var(--text-secondary)',
                    fontWeight: activeExample === i ? 600 : 400,
                    fontSize: 'var(--text-sm)',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {ex.label}
                </button>
              ))}
            </div>

            {/* Example content */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              style={{
                maxWidth: '960px',
                margin: '0 auto',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 'var(--text-xs)',
                    fontWeight: 700,
                    color: 'var(--accent-warning)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  What most teams have
                </div>
                <pre
                  style={{
                    background: 'var(--code-bg)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-5)',
                    fontSize: 'var(--text-xs)',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--code-color-string)',
                    margin: 0,
                    overflowX: 'auto',
                    lineHeight: 1.7,
                    minHeight: '200px',
                  }}
                >
                  {WORKED_EXAMPLES[activeExample].log}
                </pre>
              </div>
              <div>
                <div
                  style={{
                    fontSize: 'var(--text-xs)',
                    fontWeight: 700,
                    color: 'var(--accent-success)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  What signed records add
                </div>
                <pre
                  style={{
                    background: 'var(--code-bg)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-5)',
                    fontSize: 'var(--text-xs)',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--code-color-key)',
                    margin: 0,
                    overflowX: 'auto',
                    lineHeight: 1.7,
                    minHeight: '200px',
                  }}
                >
                  {WORKED_EXAMPLES[activeExample].signed}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 6: Break the proof ───────────────────────────────────── */}
        <section
          ref={breakSection.ref}
          className="section"
          style={{ background: 'var(--surface-subtle)' }}
        >
          <div className="container px-5 sm:px-8 md:px-12 lg:px-16">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              <div
                style={{
                  ...reveal(breakSection.visible, 0),
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                  color: 'var(--accent-brand)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: 'var(--space-3)',
                }}
              >
                Break the proof
              </div>
              <h2
                className="text-2xl sm:text-3xl"
                style={{
                  ...reveal(breakSection.visible, 0),
                  marginBottom: 'var(--space-3)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}
              >
                Test what breaks trust
              </h2>
              <p
                style={{
                  ...reveal(breakSection.visible, 0.1),
                  fontSize: 'var(--text-lg)',
                  color: 'var(--text-secondary)',
                  maxWidth: '480px',
                  margin: '0 auto',
                }}
              >
                A dashboard can say anything. Evidence has to survive tampering, disputes, and handoffs.
              </p>
            </div>

            <div
              style={{
                ...reveal(breakSection.visible, 0.15),
                maxWidth: '640px',
                margin: '0 auto',
              }}
            >
              {/* Toggles */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-6)',
                }}
              >
                {TAMPER_TOGGLES.map((toggle, i) => (
                  <button
                    key={toggle.label}
                    onClick={() => toggleTamper(i)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-4)',
                      padding: 'var(--space-4) var(--space-5)',
                      background: tamperStates[i]
                        ? 'var(--accent-error-muted)'
                        : 'var(--surface-elevated)',
                      border: `1px solid ${tamperStates[i] ? 'var(--accent-error-border)' : 'var(--border-default)'}`,
                      borderRadius: '16px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontFamily: 'inherit',
                      width: '100%',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {tamperStates[i] ? (
                      <ToggleRight
                        size={24}
                        style={{ color: 'var(--accent-error)', flexShrink: 0 }}
                      />
                    ) : (
                      <ToggleLeft
                        size={24}
                        style={{ color: 'var(--text-muted)', flexShrink: 0 }}
                      />
                    )}
                    <div>
                      <div
                        style={{
                          fontSize: 'var(--text-sm)',
                          fontWeight: 600,
                          color: tamperStates[i]
                            ? 'var(--accent-error)'
                            : 'var(--text-primary)',
                        }}
                      >
                        {toggle.label}
                      </div>
                      <div
                        style={{
                          fontSize: 'var(--text-xs)',
                          color: 'var(--text-tertiary)',
                          marginTop: 2,
                        }}
                      >
                        {toggle.description}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Result */}
              <div
                style={{
                  padding: 'var(--space-5)',
                  background:
                    activeTamperCount > 0 ? 'var(--accent-error-muted)' : 'var(--accent-success-subtle)',
                  border: `1px solid ${activeTamperCount > 0 ? 'var(--accent-error-border)' : 'var(--accent-success-border)'}`,
                  borderRadius: 'var(--radius-xl)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-sm)',
                  transition: 'all 0.3s ease',
                }}
              >
                {activeTamperCount === 0 ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <CheckCircle size={18} style={{ color: 'var(--accent-success)' }} />
                    <span style={{ color: 'var(--accent-success)', fontWeight: 600 }}>
                      PASS: No tampering applied. Sample valid.
                    </span>
                  </div>
                ) : (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'var(--space-3)',
                    }}
                  >
                    {TAMPER_TOGGLES.map(
                      (toggle, i) =>
                        tamperStates[i] && (
                          <div
                            key={toggle.label}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: 'var(--space-2)',
                            }}
                          >
                            <XCircle
                              size={16}
                              style={{
                                color: 'var(--accent-error)',
                                flexShrink: 0,
                                marginTop: 2,
                              }}
                            />
                            <span style={{ color: 'var(--accent-error)', lineHeight: 1.5 }}>
                              {toggle.errorMessage}
                            </span>
                          </div>
                        )
                    )}
                  </div>
                )}
              </div>

              <p
                style={{
                  fontSize: 'var(--text-xs)',
                  color: 'var(--text-muted)',
                  marginTop: 'var(--space-4)',
                  textAlign: 'center',
                  fontStyle: 'italic',
                }}
              >
                Portable evidence should fail loudly when key trust assumptions are broken.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 7: The hard questions ─────────────────────────────────── */}
        <section
          ref={questionsSection.ref}
          className="section"
          style={{ background: 'var(--surface-elevated)' }}
        >
          <div className="container px-5 sm:px-8 md:px-12 lg:px-16">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              <div
                style={{
                  ...reveal(questionsSection.visible, 0),
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                  color: 'var(--accent-brand)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: 'var(--space-3)',
                }}
              >
                The hard questions
              </div>
              <h2
                className="text-2xl sm:text-3xl"
                style={{
                  ...reveal(questionsSection.visible, 0),
                  marginBottom: 'var(--space-3)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}
              >
                What your logs cannot settle
              </h2>
              <p
                style={{
                  ...reveal(questionsSection.visible, 0.1),
                  fontSize: 'var(--text-lg)',
                  color: 'var(--text-secondary)',
                  maxWidth: '520px',
                  margin: '0 auto',
                }}
              >
                These are the questions that turn internal traces into cross-team arguments.
              </p>
            </div>

            <div
              style={{
                ...reveal(questionsSection.visible, 0.15),
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-4)',
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              {HARD_QUESTIONS.map((q, i) => (
                <div
                  key={q.question}
                  className="px-4 py-4 sm:px-6 sm:py-5"
                  style={{
                    ...reveal(questionsSection.visible, 0.15 + i * 0.05),
                    background: 'var(--surface-elevated)',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid var(--border-default)',
                    boxShadow: 'var(--shadow-xs)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 'var(--space-3)',
                    }}
                  >
                    <HelpCircle
                      size={20}
                      style={{
                        color: 'var(--accent-brand)',
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    />
                    <div>
                      <h3
                        style={{
                          fontSize: 'var(--text-base)',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                          margin: '0 0 var(--space-2) 0',
                        }}
                      >
                        {q.question}
                      </h3>
                      <p
                        style={{
                          fontSize: 'var(--text-sm)',
                          color: 'var(--text-secondary)',
                          margin: 0,
                          lineHeight: 1.6,
                        }}
                      >
                        {q.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 8: Role-based views ──────────────────────────────────── */}
        <section
          ref={rolesSection.ref}
          className="section"
          style={{ background: 'var(--surface-subtle)' }}
        >
          <div className="container px-5 sm:px-8 md:px-12 lg:px-16">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              <div
                style={{
                  ...reveal(rolesSection.visible, 0),
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                  color: 'var(--accent-brand)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: 'var(--space-3)',
                }}
              >
                Find your perspective
              </div>
              <h2
                className="text-2xl sm:text-3xl"
                style={{
                  ...reveal(rolesSection.visible, 0),
                  marginBottom: 'var(--space-3)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}
              >
                Why this matters for your role
              </h2>
            </div>

            {/* Role tabs */}
            <div
              className="flex flex-wrap justify-center gap-2"
              style={{
                ...reveal(rolesSection.visible, 0.1),
                marginBottom: 'var(--space-6)',
              }}
            >
              {ROLE_VIEWS.map((view, i) => {
                const Icon = view.icon
                return (
                  <button
                    key={view.role}
                    onClick={() => setActiveRole(i)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)',
                      padding: 'var(--space-2) var(--space-4)',
                      borderRadius: 'var(--radius-full)',
                      border: `1px solid ${activeRole === i ? 'var(--accent-brand)' : 'var(--border-default)'}`,
                      background:
                        activeRole === i ? 'var(--accent-brand-subtle)' : 'var(--surface-elevated)',
                      color: activeRole === i ? 'var(--accent-brand)' : 'var(--text-secondary)',
                      fontWeight: activeRole === i ? 600 : 400,
                      fontSize: 'var(--text-sm)',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <Icon size={14} />
                    {view.role}
                  </button>
                )
              })}
            </div>

            {/* Active role content */}
            <div
              className="p-5 sm:p-8"
              style={{
                ...reveal(rolesSection.visible, 0.15),
                maxWidth: '640px',
                margin: '0 auto',
                background: 'var(--surface-elevated)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-default)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <h3
                style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--space-5)',
                }}
              >
                {ROLE_VIEWS[activeRole].question}
              </h3>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-3)',
                }}
              >
                {ROLE_VIEWS[activeRole].points.map((point) => (
                  <li
                    key={point}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 'var(--space-3)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                    }}
                  >
                    <CheckCircle
                      size={16}
                      style={{
                        color: 'var(--accent-brand)',
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Section 9: How Originary closes the gap ──────────────────────── */}
        <section
          ref={gapSection.ref}
          className="section"
          style={{ background: 'var(--surface-elevated)' }}
        >
          <div className="container px-5 sm:px-8 md:px-12 lg:px-16">
            <div
              style={{
                ...reveal(gapSection.visible, 0),
                maxWidth: '700px',
                margin: '0 auto',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                  color: 'var(--accent-brand)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: 'var(--space-3)',
                }}
              >
                How Originary closes the gap
              </div>
              <h2
                className="text-2xl sm:text-3xl"
                style={{
                  marginBottom: 'var(--space-4)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}
              >
                Originary does not replace your logs. It makes the decision portable.
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-4)',
                }}
              >
                Keep your gateway, auth, payments, and observability stack. Originary adds a verification layer that evaluates requests, applies policy, and returns signed records you can prove later.
              </p>
              <p
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-tertiary)',
                  marginBottom: 'var(--space-8)',
                }}
              >
                Portable records on the product side. Open standard underneath.
              </p>

              <div
                className="flex flex-col gap-3 text-left"
                style={{
                  ...reveal(gapSection.visible, 0.15),
                }}
              >
                {[
                  {
                    text: 'Verifies requests',
                    detail:
                      'Checks every agent request against the active policy before execution.',
                  },
                  {
                    text: 'Applies policy',
                    detail:
                      'Binds the policy digest to the signed record so you can prove which rules applied.',
                  },
                  {
                    text: 'Returns signed records',
                    detail:
                      'Issues a signed, exportable record for every interaction at the point of action.',
                  },
                  {
                    text: 'Others verify locally',
                    detail:
                      'Any party can verify the record offline with the public key. No callbacks, no infrastructure access.',
                  },
                ].map(({ text, detail }, i) => (
                  <div
                    key={text}
                    style={{
                      ...reveal(gapSection.visible, 0.15 + i * 0.05),
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 'var(--space-4)',
                      padding: 'var(--space-5)',
                      background: 'var(--surface-elevated)',
                      border: '1px solid var(--border-default)',
                      borderRadius: '16px',
                    }}
                  >
                    <CheckCircle
                      size={20}
                      style={{
                        color: 'var(--accent-brand)',
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    />
                    <div>
                      <div
                        style={{
                          fontSize: 'var(--text-sm)',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                          marginBottom: 'var(--space-1)',
                        }}
                      >
                        {text}
                      </div>
                      <div
                        style={{
                          fontSize: 'var(--text-sm)',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.6,
                        }}
                      >
                        {detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 flex-wrap"
                style={{
                  marginTop: 'var(--space-8)',
                }}
              >
                <Link
                  href="/agent-auditor"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '1rem 2.25rem',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    color: 'var(--color-fg-inverse)',
                    background: 'var(--color-accent)',
                    borderRadius: '62px',
                    border: 'none',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    lineHeight: 1,
                  }}
                >
                  <span>See it in action</span>
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="https://peacprotocol.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '1rem 2.25rem',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    color: 'var(--color-fg)',
                    background: 'transparent',
                    border: '1px solid var(--color-border-strong)',
                    borderRadius: '62px',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    lineHeight: 1,
                  }}
                >
                  <span>Learn about PEAC</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 10: Bottom CTA strip ─────────────────────────────────── */}
        <section
          ref={ctaSection.ref}
          className="section"
          style={{
            background: 'var(--surface-subtle)',
            paddingTop: 'var(--space-12)',
            paddingBottom: 'var(--space-12)',
          }}
        >
          <div className="container px-5 sm:px-8 md:px-12 lg:px-16">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
              <h2
                className="text-2xl sm:text-3xl"
                style={{
                  ...reveal(ctaSection.visible, 0),
                  marginBottom: 'var(--space-3)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}
              >
                Use the diagnostic. Then take the next step that fits.
              </h2>
              <p
                style={{
                  ...reveal(ctaSection.visible, 0.1),
                  fontSize: 'var(--text-lg)',
                  color: 'var(--text-secondary)',
                  maxWidth: '560px',
                  margin: '0 auto',
                }}
              >
                Start with your current artifacts. Move to examples, verification, or deployment when you are ready.
              </p>
              <p
                style={{
                  ...reveal(ctaSection.visible, 0.15),
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-tertiary)',
                  marginTop: 'var(--space-3)',
                }}
              >
                No account required for the diagnostic or Agent Auditor.
              </p>
            </div>
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              style={{
                ...reveal(ctaSection.visible, 0.2),
                maxWidth: '960px',
                margin: '0 auto',
              }}
            >
              <Link
                href="/agent-auditor"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-4)',
                  padding: 'var(--space-6)',
                  background: 'var(--surface-elevated)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--border-default)',
                  boxShadow: 'var(--shadow-xs)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 'var(--radius-xl)',
                    background: 'var(--accent-brand-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Eye size={22} style={{ color: 'var(--accent-brand)' }} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 'var(--text-base)',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                    }}
                  >
                    See it in action
                  </div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>
                    Open and verify a signed record
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  style={{ color: 'var(--text-muted)', marginLeft: 'auto', flexShrink: 0 }}
                />
              </Link>

              <a
                href="https://agent-auditor.originary.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-4)',
                  padding: 'var(--space-6)',
                  background: 'var(--surface-elevated)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--border-default)',
                  boxShadow: 'var(--shadow-xs)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 'var(--radius-xl)',
                    background: 'var(--accent-secondary-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Terminal size={22} style={{ color: 'var(--accent-secondary)' }} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 'var(--text-base)',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                    }}
                  >
                    Open Agent Auditor
                  </div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>
                    agent-auditor.originary.xyz
                  </div>
                </div>
                <ExternalLink
                  size={16}
                  style={{ color: 'var(--text-muted)', marginLeft: 'auto', flexShrink: 0 }}
                />
              </a>

              <Link
                href="/contact"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-4)',
                  padding: 'var(--space-6)',
                  background: 'var(--surface-elevated)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--border-default)',
                  boxShadow: 'var(--shadow-xs)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 'var(--radius-xl)',
                    background: 'var(--accent-brand-faint)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MessageSquare size={22} style={{ color: 'var(--accent-brand)' }} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 'var(--text-base)',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                    }}
                  >
                    Talk to us
                  </div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>
                    Questions about integration
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  style={{ color: 'var(--text-muted)', marginLeft: 'auto', flexShrink: 0 }}
                />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Section 11: Distinction note ─────────────────────────────────── */}
        <section
          ref={distinctionSection.ref}
          className="section"
          style={{
            background: 'var(--surface-elevated)',
            paddingTop: 'var(--space-10)',
            paddingBottom: 'var(--space-10)',
          }}
        >
          <div className="container px-5 sm:px-8 md:px-12 lg:px-16">
            <div
              className="px-5 py-5 sm:px-8 sm:py-6"
              style={{
                ...reveal(distinctionSection.visible, 0),
                maxWidth: '700px',
                margin: '0 auto',
                background: 'var(--surface-subtle)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-default)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'var(--space-4)',
                }}
              >
                <FileText
                  size={20}
                  style={{
                    color: 'var(--accent-brand)',
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                />
                <div>
                  <h3
                    style={{
                      fontSize: 'var(--text-base)',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      margin: '0 0 var(--space-2) 0',
                    }}
                  >
                    Have a signed record already?
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--text-secondary)',
                      margin: 0,
                      lineHeight: 1.7,
                    }}
                  >
                    Evidence Check helps you understand whether your current artifacts are enough.
                    Agent Auditor is for opening and verifying a signed record once you already have
                    one.
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--text-tertiary)',
                      margin: 'var(--space-3) 0 0 0',
                      lineHeight: 1.7,
                    }}
                  >
                    Need to inspect a raw JWS instead?{' '}
                    <Link
                      href="/inspector"
                      style={{
                        color: 'var(--accent-brand)',
                        textDecoration: 'underline',
                      }}
                    >
                      Use Inspector
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Inline animation keyframes */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}
