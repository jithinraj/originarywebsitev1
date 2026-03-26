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
  ChevronDown,
  ChevronUp,
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
  'An AI agent called our tool': `2026-03-25T14:32:01.442Z  INFO  mcp-client  tool_call
  tool: "search_documents"
  server: "docs-server.internal:8080"
  args: { query: "quarterly revenue", limit: 10 }
  response_time_ms: 342
  status: "success"
  result_count: 7
  request_id: "req_abc123def456"`,

  'Our MCP server handled a request': `2026-03-25T14:32:01.112Z  INFO  mcp-server  request_received
  method: "tools/call"
  tool: "query_inventory"
  client: "agent-procurement-v2"
  session_id: "sess_9f8e7d6c"
  args: { sku: "SKU-7744", warehouse: "us-east-1" }

2026-03-25T14:32:01.287Z  INFO  mcp-server  tool_executed
  tool: "query_inventory"
  session_id: "sess_9f8e7d6c"
  result: { available: 142, reserved: 8 }
  response_time_ms: 175
  status: "success"`,

  'Our API returned a result': `HTTP/1.1 200 OK
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

  'We\'re reviewing an incident': `Incident Summary - INC-2026-0342
Severity: P2
Time: 2026-03-24 15:47 UTC to 2026-03-24 16:12 UTC (25 min)
Impact: Agent "procurement-bot" executed 3 unauthorized purchase orders
  totaling $12,400 against vendor API.
Root cause: Policy cache expired at 15:45, agent continued with stale
  authorization for 2 minutes before rate limiter triggered.
Evidence: CloudWatch logs, API gateway access logs, agent trace spans.
Status: Resolved. Orders reversed manually by ops team.
Action items: Add policy TTL hard-stop, require signed policy binding.`,

  'A payment or authorization happened': `{
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

  'We need an audit trail for agent activity': `Our compliance team needs to verify that:
1. Every agent action in the last 30 days was authorized by active policy
2. Each tool invocation has a record of who called it, what was returned, and what policy applied
3. Payment-related agent actions have proper authorization evidence
4. All agent interactions can be independently verified by a third party without dashboard access

Currently we have: CloudWatch logs, Datadog traces, MCP server logs, and Stripe webhooks.
We do not have signed records, portable evidence, or an audit trail that survives handoff.`,
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
    label: 'AI agent tool call',
    narrative: 'An AI agent calls a tool through your API or MCP server.',
    mostTeamsHave: [
      'Timestamps, tool name, response status',
      'Internal request ID',
    ],
    otherPartyCanVerify: ['Nothing independently'],
    withSignedRecord: [
      'Issuer identity',
      'Policy that applied',
      'Timestamp integrity',
      'Portable proof',
    ],
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
    label: 'API access decision',
    narrative: 'An API request is allowed or denied.',
    mostTeamsHave: [
      'Request path, auth check result',
      'Rate limits, status code',
    ],
    otherPartyCanVerify: ['Nothing without dashboard access'],
    withSignedRecord: [
      'Who authorized it',
      'What policy applied',
      'When it happened',
    ],
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
    label: 'MCP server request',
    narrative: 'An MCP server handles a tool call and returns a result.',
    mostTeamsHave: [
      'Server logs, tool name, session ID',
      'Internal request trace and response status',
    ],
    otherPartyCanVerify: ['Nothing independently; logs stay inside the server'],
    withSignedRecord: [
      'Who issued the record and what tool was called',
      'Policy that applied, timestamp integrity',
    ],
    log: `2026-03-25T14:32:01Z INFO mcp-server request_received
  method: "tools/call"
  tool: "query_inventory"
  client: "agent-procurement-v2"
  session_id: "sess_9f8e7d6c"
  result: { available: 142, reserved: 8 }
  status: success  175ms`,
    signed: `{
  "iss": "https://mcp-server.example.com",
  "sub": "agent-procurement-v2",
  "type": "org.peacprotocol/access",
  "kind": "evidence",
  "iat": 1711374721,
  "peac": {
    "policy": {
      "uri": "https://mcp-server.example.com/.well-known/peac.txt",
      "digest": "sha256:a1b2c3..."
    }
  },
  "ext": {
    "access": {
      "resource": "query_inventory",
      "action": "tool_call"
    }
  }
}
// Signed at the MCP server, verifiable by any party`,
  },
  {
    label: 'Payment or settlement',
    narrative: 'A payment or settlement event needs review.',
    mostTeamsHave: [
      'Payment ID, webhook status, amount',
      'Authorization result',
    ],
    otherPartyCanVerify: ['Fragments, but not the full decision context'],
    withSignedRecord: [
      'Decision boundary linked to event',
      'Policy and timing',
    ],
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
    role: 'Operator',
    icon: Terminal,
    problem: 'Your team receives agent traffic you do not fully control.',
    whyLogsFail: 'Observability helps debug but does not travel across boundaries.',
    originaryAdds: 'Captures the decision boundary for later review without replaying the incident.',
    cta: 'See it in action',
    ctaHref: '/agent-auditor',
  },
  {
    role: 'Builder',
    icon: Code,
    problem: 'Other systems need to verify what your API or tool did.',
    whyLogsFail: 'They stay local and require your dashboard to explain them.',
    originaryAdds: 'A signed record that can travel with the decision.',
    cta: 'See how to issue one',
    ctaHref: '/agent-auditor',
  },
  {
    role: 'Security',
    icon: Shield,
    problem: 'You need artifacts that survive review, not just screenshots.',
    whyLogsFail: 'Internal traces do not give counterparties independent verification.',
    originaryAdds: 'Signed records that are inspectable, exportable, and locally verifiable.',
    cta: 'Review trust model',
    ctaHref: '/agent-auditor',
  },
  {
    role: 'Support',
    icon: Headphones,
    problem: 'A customer asks what happened and you need to explain fast.',
    whyLogsFail: 'You can describe the event but cannot provide portable proof of the decision.',
    originaryAdds: 'A durable artifact for escalations and dispute handling.',
    cta: 'See a customer example',
    ctaHref: '#examples',
  },
  {
    role: 'Finance',
    icon: DollarSign,
    problem: 'You need to reconcile authorization and settlement across systems.',
    whyLogsFail: 'Payment logs show events but not enough decision context for review.',
    originaryAdds: 'Links decision evidence to operational events.',
    cta: 'See settlement example',
    ctaHref: '#examples',
  },
  {
    role: 'Legal / Compliance',
    icon: Scale,
    problem: 'You need reviewable records that stand outside internal tooling.',
    whyLogsFail: 'Exports and dashboards are hard to treat as durable evidence.',
    originaryAdds: 'Signed, exportable records for review, procurement, and audit.',
    cta: 'Talk to us',
    ctaHref: '/contact',
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
  {
    question: 'Can I prove what an MCP server or tool actually returned?',
    detail: 'Logs may show the call path. They do not give another party a portable record of the decision and result.',
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
    label: 'Wrong signer',
    description: 'Change who appears to have issued the record',
    errorMessage: 'FAIL: Issuer "https://attacker.example.com" does not match the signing key. The key ID resolves to a different origin.',
  },
  {
    label: 'Content changed',
    description: 'Modify the contents after the record was created',
    errorMessage: 'FAIL: Signature verification failed. The payload has been modified after signing. Ed25519 signature does not match.',
  },
  {
    label: 'Wrong policy version',
    description: 'Make the record point to a different policy than the one that actually applied',
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
  const builtForSection = useReveal()
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
  const [showDevDetails, setShowDevDetails] = useState(false)

  // Break the proof state
  const [tamperStates, setTamperStates] = useState([false, false, false])

  // Role-based view state
  const [activeRole, setActiveRole] = useState(0)

  const heroRef = useRef<HTMLElement>(null)

  // Analysis type for dynamic CTAs
  const [analysisType, setAnalysisType] = useState<string>('')

  const analyzeArtifact = useCallback((input: string) => {
    if (!input.trim()) return
    const result = analyzeInput(input)
    const detectedType = detectInputType(input)
    setAnalysisResult(result)
    setAnalysisType(detectedType)
  }, [])

  const runAnalysis = useCallback(() => {
    analyzeArtifact(analyzerInput)
  }, [analyzerInput, analyzeArtifact])

  const loadScenario = useCallback((scenario: string) => {
    const input = SCENARIO_INPUTS[scenario]
    if (input) {
      setAnalyzerInput(input)
      setAnalysisResult(null)
      analyzeArtifact(input)
      setTimeout(() => {
        const resultEl = document.getElementById('analysis-result')
        if (resultEl) {
          resultEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
        } else {
          document.getElementById('analyzer')?.scrollIntoView({ behavior: 'smooth' })
        }
      }, 200)
    }
  }, [analyzeArtifact])

  const loadExample = useCallback(() => {
    setAnalyzerInput(EXAMPLE_JWS)
    setAnalysisResult(null)
    document.getElementById('analyzer')?.scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => textareaRef.current?.focus(), 400)
  }, [])

  const handleCopyResult = useCallback(() => {
    if (!analysisResult) return
    const text = `Proof Check Score: ${analysisResult.score}/100 (${analysisResult.badge})
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

  const getResultCTAs = useCallback((type: string) => {
    switch (type) {
      case 'log':
        return {
          primary: { label: 'See how signed records change this', href: '/agent-auditor', external: false, scroll: false },
          secondary: { label: 'Compare before and after', href: '#examples', external: false, scroll: true },
        }
      case 'json':
      case 'trace':
        return {
          primary: { label: 'Compare before and after', href: '#examples', external: false, scroll: true },
          secondary: { label: 'See it in action', href: '/agent-auditor', external: false, scroll: false },
        }
      case 'jws':
        return {
          primary: { label: 'Open in Agent Auditor', href: 'https://agent-auditor.originary.xyz/', external: true, scroll: false },
          secondary: { label: 'See verification flow', href: '/demo', external: false, scroll: false },
        }
      default:
        return {
          primary: { label: 'Load a similar example', href: '#examples', external: false, scroll: true },
          secondary: { label: 'Talk to us', href: '/contact', external: false, scroll: false },
        }
    }
  }, [])

  const typeHints = ['Logs', 'Trace', 'Webhook', 'Signed record', 'Plain English']

  return (
    <>
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        {/* ── Section 1: Hero ──────────────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="section pt-24 sm:pt-28 md:pt-36 lg:pt-40 pb-12 sm:pb-16 md:pb-20"
          style={{
            background: 'var(--surface-elevated)',
          }}
        >
          <div className="container px-5 sm:px-8 md:px-12 lg:px-16">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              {/* Left side: headline, subhead, trust, CTAs */}
              <div className="lg:w-1/2">
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
                  Proof Check
                </div>

                {/* H1 */}
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl"
                  style={{
                    ...reveal(heroReady, 0.1),
                    fontWeight: 700,
                    lineHeight: 1.1,
                    letterSpacing: '-0.04em',
                    marginBottom: 'var(--space-6)',
                    color: 'var(--text-primary)',
                  }}
                >
                  Can you prove what your AI agent did?
                </h1>

                {/* Subhead */}
                <p
                  className="text-base sm:text-lg md:text-xl"
                  style={{
                    ...reveal(heroReady, 0.2),
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    maxWidth: '560px',
                    marginBottom: 'var(--space-6)',
                  }}
                >
                  Paste what you already have: a log, trace, webhook, signed record, or plain-English incident summary from an AI agent, API call, tool invocation, or MCP server. See what your team can observe, what another party can verify, and what is still missing.
                </p>

                <p
                  style={{
                    ...reveal(heroReady, 0.22),
                    fontSize: '0.8125rem',
                    color: 'var(--text-tertiary)',
                    marginBottom: 'var(--space-4)',
                  }}
                >
                  Built for API operators, MCP hosts, platform teams, security, support, and compliance.
                </p>

                {/* Trust line */}
                <p
                  style={{
                    ...reveal(heroReady, 0.25),
                    fontSize: 'var(--text-sm)',
                    color: 'var(--text-tertiary)',
                    marginBottom: 'var(--space-6)',
                  }}
                >
                  No signup. Runs in your browser.
                </p>

                {/* CTAs */}
                <div
                  className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4"
                  style={{
                    ...reveal(heroReady, 0.3),
                    marginBottom: 'var(--space-6)',
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
                      color: 'var(--text-inverted)',
                      background: 'var(--accent-brand)',
                      borderRadius: '12px',
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
                    <span>Analyze what happened</span>
                    <ArrowRight size={18} />
                  </a>
                  <button
                    type="button"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      padding: '1rem 2.25rem',
                      fontSize: '0.9375rem',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      background: 'transparent',
                      border: '1px solid var(--border-hover)',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      lineHeight: 1,
                      fontFamily: 'inherit',
                    }}
                    onClick={loadExample}
                  >
                    <span>Try a real example</span>
                    <FileText size={16} />
                  </button>
                </div>

                {/* Trust strip */}
                <div
                  className="flex flex-wrap gap-4"
                  style={{
                    ...reveal(heroReady, 0.35),
                  }}
                >
                  {['Open source', 'Self-hostable', 'Offline verification', 'No outbound fetches'].map((item) => (
                    <div
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-2)',
                        fontSize: 'var(--text-xs)',
                        color: 'var(--text-tertiary)',
                        fontWeight: 500,
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: 'var(--radius-full)',
                          background: 'var(--accent-success)',
                          display: 'inline-block',
                          flexShrink: 0,
                        }}
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side: sample result card */}
              <div
                className="lg:w-1/2 w-full"
                style={{
                  ...reveal(heroReady, 0.25),
                }}
              >
                <div
                  style={{
                    background: 'var(--surface-subtle)',
                    border: '1px solid var(--border-default)',
                    borderRadius: '20px',
                    padding: 'var(--space-6)',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  {/* Score badge */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: 'var(--space-1)',
                      }}
                    >
                      <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Evidence strength</span>
                    </div>
                    <span
                      style={{
                        padding: 'var(--space-1) var(--space-3)',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--accent-error)',
                        color: '#fff',
                        fontSize: 'var(--text-xs)',
                        fontWeight: 700,
                      }}
                    >
                      14 / 100
                    </span>
                    <span
                      style={{
                        fontSize: 'var(--text-xs)',
                        color: 'var(--text-tertiary)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      Logs detected
                    </span>
                  </div>

                  {/* 4 compact items */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                    {[
                      { label: 'Observable', value: 'Timestamps and events', color: 'var(--accent-brand)' },
                      { label: 'Provable', value: 'Nothing independently', color: 'var(--accent-secondary)' },
                      { label: 'Missing', value: 'Signature, issuer, policy binding', color: 'var(--accent-error)' },
                      { label: 'Next step', value: 'Add signed records at decision time', color: 'var(--accent-warning)' },
                    ].map(({ label, value, color }) => (
                      <div
                        key={label}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--space-3)',
                        }}
                      >
                        <span
                          style={{
                            fontSize: 'var(--text-xs)',
                            fontWeight: 700,
                            color,
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em',
                            minWidth: 72,
                            flexShrink: 0,
                          }}
                        >
                          {label}
                        </span>
                        <span
                          style={{
                            fontSize: 'var(--text-sm)',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.4,
                          }}
                        >
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p
                    style={{
                      fontSize: 'var(--text-xs)',
                      color: 'var(--text-muted)',
                      marginTop: 'var(--space-4)',
                      marginBottom: 0,
                      fontStyle: 'italic',
                    }}
                  >
                    Sample result from a typical log excerpt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Page navigation ─────────────────────────────────────────────── */}
        <nav
          aria-label="Page sections"
          style={{
            background: 'var(--surface-elevated)',
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          <div
            className="container px-5 sm:px-8 md:px-12 lg:px-16 flex flex-wrap gap-2 justify-center"
            style={{
              paddingTop: 'var(--space-4)',
              paddingBottom: 'var(--space-4)',
            }}
          >
            {[
              { label: 'Scenarios', href: '#scenarios' },
              { label: 'Analyzer', href: '#analyzer' },
              { label: 'Examples', href: '#examples' },
              { label: 'Compare', href: '#compare' },
              { label: 'Questions', href: '#questions' },
              { label: 'By role', href: '#roles' },
              { label: 'How Originary helps', href: '#gap' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  padding: '6px 16px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-default)',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>

        {/* ── Section 2: Scenario chips ────────────────────────────────────── */}
        <section
          id="scenarios"
          ref={scenarioSection.ref}
          className="section"
          style={{ background: 'var(--surface-subtle)', scrollMarginTop: '100px' }}
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
                { label: 'An AI agent called our tool', icon: Wrench },
                { label: 'Our MCP server handled a request', icon: Terminal },
                { label: 'Our API returned a result', icon: Globe },
                { label: 'A customer asked what happened', icon: MessageSquare },
                { label: 'We\'re reviewing an incident', icon: Search },
                { label: 'A payment or authorization happened', icon: CreditCard },
                { label: 'We need an audit trail for agent activity', icon: Scale },
              ].map(({ label, icon: Icon }, i) => (
                <button
                  type="button"
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
            scrollMarginTop: '100px',
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
                  Start with what you already have
                </h2>
                <p
                  style={{
                    ...reveal(analyzerSection.visible, 0.1),
                    fontSize: 'var(--text-lg)',
                    color: 'var(--text-secondary)',
                    maxWidth: '520px',
                    margin: '0 auto var(--space-2) auto',
                  }}
                >
                  Logs, traces, webhooks, signed records, and short incident summaries all work. Paste an artifact from an AI agent, API request, tool invocation, or MCP server response.
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
                {typeHints.map((hint, i) => (
                  <span
                    key={hint}
                    style={{
                      fontSize: '0.8125rem',
                      color: 'var(--text-muted)',
                      fontWeight: 400,
                    }}
                  >
                    {hint}{i < typeHints.length - 1 ? ' · ' : ''}
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
                  placeholder="Paste a log excerpt, request trace, webhook payload, tool result, MCP response, or signed record. Include timestamps, request IDs, decisions, and any relevant context."
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
                  type="button"
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
                    color: 'var(--text-inverted)',
                    background: 'var(--accent-brand)',
                    borderRadius: '12px',
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
                  type="button"
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
                  Try a real example
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
                    Logs, traces, webhooks, signed records, and even a short incident summary are enough to begin. The point is not perfect input. The point is to see where proof breaks down.
                  </p>
                </div>
              )}

              {/* ── Analysis result ─────────────────────────────────────────── */}
              {analysisResult && (
                <div
                  id="analysis-result"
                  aria-live="polite"
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
                        type="button"
                        onClick={handleCopyResult}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem',
                          padding: '0.5rem 1rem',
                          fontSize: '0.8125rem',
                          fontWeight: 500,
                          color: 'var(--text-primary)',
                          background: 'transparent',
                          border: '1px solid var(--border-hover)',
                          borderRadius: '12px',
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

                  {/* Dynamic CTAs based on analysis type */}
                  {(() => {
                    const ctas = getResultCTAs(analysisType)
                    return (
                      <div
                        className="flex flex-col sm:flex-row items-center justify-center gap-3"
                        style={{ marginTop: 'var(--space-6)' }}
                      >
                        {ctas.primary.scroll ? (
                          <a
                            href={ctas.primary.href}
                            onClick={(e) => {
                              e.preventDefault()
                              document.querySelector(ctas.primary.href)?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '0.5rem',
                              padding: '0.75rem 1.5rem',
                              fontSize: '0.875rem',
                              fontWeight: 500,
                              color: 'var(--text-inverted)',
                              background: 'var(--accent-brand)',
                              borderRadius: '12px',
                              textDecoration: 'none',
                              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                              lineHeight: 1,
                            }}
                          >
                            <span>{ctas.primary.label}</span>
                            <ArrowRight size={16} />
                          </a>
                        ) : ctas.primary.external ? (
                          <a
                            href={ctas.primary.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '0.5rem',
                              padding: '0.75rem 1.5rem',
                              fontSize: '0.875rem',
                              fontWeight: 500,
                              color: 'var(--text-inverted)',
                              background: 'var(--accent-brand)',
                              borderRadius: '12px',
                              textDecoration: 'none',
                              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                              lineHeight: 1,
                            }}
                          >
                            <span>{ctas.primary.label}</span>
                            <ExternalLink size={16} />
                          </a>
                        ) : (
                          <Link
                            href={ctas.primary.href}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '0.5rem',
                              padding: '0.75rem 1.5rem',
                              fontSize: '0.875rem',
                              fontWeight: 500,
                              color: 'var(--text-inverted)',
                              background: 'var(--accent-brand)',
                              borderRadius: '12px',
                              textDecoration: 'none',
                              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                              lineHeight: 1,
                            }}
                          >
                            <span>{ctas.primary.label}</span>
                            <ArrowRight size={16} />
                          </Link>
                        )}

                        {ctas.secondary.scroll ? (
                          <a
                            href={ctas.secondary.href}
                            onClick={(e) => {
                              e.preventDefault()
                              document.querySelector(ctas.secondary.href)?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '0.5rem',
                              padding: '0.75rem 1.5rem',
                              fontSize: '0.875rem',
                              fontWeight: 500,
                              color: 'var(--text-primary)',
                              background: 'transparent',
                              border: '1px solid var(--border-hover)',
                              borderRadius: '12px',
                              textDecoration: 'none',
                              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                              lineHeight: 1,
                            }}
                          >
                            <span>{ctas.secondary.label}</span>
                            <ArrowRight size={14} />
                          </a>
                        ) : (
                          <Link
                            href={ctas.secondary.href}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '0.5rem',
                              padding: '0.75rem 1.5rem',
                              fontSize: '0.875rem',
                              fontWeight: 500,
                              color: 'var(--text-primary)',
                              background: 'transparent',
                              border: '1px solid var(--border-hover)',
                              borderRadius: '12px',
                              textDecoration: 'none',
                              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                              lineHeight: 1,
                            }}
                          >
                            <span>{ctas.secondary.label}</span>
                            <ArrowRight size={14} />
                          </Link>
                        )}
                      </div>
                    )
                  })()}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── Section 4: Side-by-side comparison ──────────────────────────── */}
        <section
          id="compare"
          ref={comparisonSection.ref}
          className="section"
          style={{ background: 'var(--surface-subtle)', scrollMarginTop: '100px' }}
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

        {/* ── Built for AI agents, APIs, tools, and MCP servers ───────── */}
        <section className="section" style={{ background: 'var(--surface-elevated)', scrollMarginTop: '100px' }}>
          <div className="container px-5 sm:px-8 md:px-12 lg:px-16">
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', ...reveal(builtForSection.visible, 0) }} ref={builtForSection.ref}>
              <div style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent-brand)', marginBottom: 'var(--space-4)' }}>Where this shows up</div>
              <h2 className="text-2xl sm:text-3xl" style={{ fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text-primary)', marginBottom: 'var(--space-4)' }}>Built for AI agents, APIs, tools, and MCP servers</h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: 'var(--space-10)' }}>If an agent calls a tool, hits your API, triggers a payment, or goes through an MCP server, the same question comes up later: what happened, what was allowed, and what can another party verify without trusting your dashboard?</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              {[
                { title: 'AI agent calls', desc: 'Track what the agent asked for, what policy applied, and what happened next.' },
                { title: 'MCP servers', desc: 'Keep a portable record of tool invocations and decisions without changing the developer workflow.' },
                { title: 'APIs and gateways', desc: 'Make access decisions explicit and keep signed records that survive handoff.' },
                { title: 'Payments and audits', desc: 'Connect authorizations, outcomes, and review-ready records without exposing internal infrastructure.' },
              ].map((card) => (
                <div key={card.title} style={{ background: 'var(--surface-subtle)', border: '1px solid var(--border-default)', borderRadius: '16px', padding: 'var(--space-6)' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>{card.title}</h3>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 5: Worked examples ───────────────────────────────────── */}
        <section
          id="examples"
          ref={examplesSection.ref}
          className="section"
          style={{ background: 'var(--surface-elevated)', scrollMarginTop: '100px' }}
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
              role="tablist"
              className="flex flex-wrap justify-center gap-2"
              style={{
                ...reveal(examplesSection.visible, 0.15),
                marginBottom: 'var(--space-6)',
              }}
            >
              {WORKED_EXAMPLES.map((ex, i) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeExample === i}
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

            {/* Example content: narrative-first */}
            <div
              role="tabpanel"
              style={{
                maxWidth: '720px',
                margin: '0 auto',
              }}
            >
              {/* Narrative */}
              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--space-6)',
                  textAlign: 'center',
                }}
              >
                {WORKED_EXAMPLES[activeExample].narrative}
              </p>

              <div
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                style={{ marginBottom: 'var(--space-6)' }}
              >
                {/* What most teams have */}
                <div
                  style={{
                    padding: 'var(--space-5)',
                    background: 'var(--accent-warning-muted)',
                    borderRadius: '16px',
                    border: '1px solid var(--accent-warning)20',
                  }}
                >
                  <h4
                    style={{
                      fontSize: 'var(--text-xs)',
                      fontWeight: 700,
                      color: 'var(--accent-warning)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: 'var(--space-3)',
                    }}
                  >
                    What most teams have
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                    {WORKED_EXAMPLES[activeExample].mostTeamsHave.map((item) => (
                      <li key={item} style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What another party can verify */}
                <div
                  style={{
                    padding: 'var(--space-5)',
                    background: 'var(--accent-error-muted)',
                    borderRadius: '16px',
                    border: '1px solid var(--accent-error)20',
                  }}
                >
                  <h4
                    style={{
                      fontSize: 'var(--text-xs)',
                      fontWeight: 700,
                      color: 'var(--accent-error)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: 'var(--space-3)',
                    }}
                  >
                    Another party can verify
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                    {WORKED_EXAMPLES[activeExample].otherPartyCanVerify.map((item) => (
                      <li key={item} style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What changes with a signed record */}
                <div
                  style={{
                    padding: 'var(--space-5)',
                    background: 'var(--accent-success-subtle)',
                    borderRadius: '16px',
                    border: '1px solid var(--accent-success-border)',
                  }}
                >
                  <h4
                    style={{
                      fontSize: 'var(--text-xs)',
                      fontWeight: 700,
                      color: 'var(--accent-success)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: 'var(--space-3)',
                    }}
                  >
                    With a signed record
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                    {WORKED_EXAMPLES[activeExample].withSignedRecord.map((item) => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        <CheckCircle size={14} style={{ color: 'var(--accent-success)', flexShrink: 0, marginTop: 2 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Developer details toggle */}
              <div style={{ textAlign: 'center' }}>
                <button
                  type="button"
                  onClick={() => setShowDevDetails(!showDevDetails)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                    padding: 'var(--space-2) var(--space-4)',
                    background: 'var(--surface-subtle)',
                    border: '1px solid var(--border-default)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 500,
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {showDevDetails ? 'Hide' : 'View'} developer details
                  {showDevDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
              </div>

              {showDevDetails && (
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  style={{ marginTop: 'var(--space-4)' }}
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
                      Raw log / trace
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
                      Signed record payload
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
              )}
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
                    type="button"
                    role="switch"
                    aria-checked={tamperStates[i]}
                    aria-label={`Toggle ${toggle.label}: ${toggle.description}`}
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
          id="questions"
          ref={questionsSection.ref}
          className="section"
          style={{ background: 'var(--surface-elevated)', scrollMarginTop: '100px' }}
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
          id="roles"
          ref={rolesSection.ref}
          className="section"
          style={{ background: 'var(--surface-subtle)', scrollMarginTop: '100px' }}
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
                What changes for each team
              </h2>
            </div>

            {/* Role tabs */}
            <div
              role="tablist"
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
                    type="button"
                    role="tab"
                    aria-selected={activeRole === i}
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
              role="tabpanel"
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                <div>
                  <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--accent-error)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 'var(--space-2)' }}>
                    Problem
                  </div>
                  <p style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--text-primary)', margin: 0, lineHeight: 1.6 }}>
                    {ROLE_VIEWS[activeRole].problem}
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--accent-warning)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 'var(--space-2)' }}>
                    Why logs fail
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                    {ROLE_VIEWS[activeRole].whyLogsFail}
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--accent-success)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 'var(--space-2)' }}>
                    What Originary adds
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                    {ROLE_VIEWS[activeRole].originaryAdds}
                  </p>
                </div>
                <div>
                  <Link
                    href={ROLE_VIEWS[activeRole].ctaHref}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1.5rem',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 500,
                      color: 'var(--text-inverted)',
                      background: 'var(--accent-brand)',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      lineHeight: 1,
                    }}
                  >
                    <span>{ROLE_VIEWS[activeRole].cta}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 9: How Originary closes the gap ──────────────────────── */}
        <section
          id="gap"
          ref={gapSection.ref}
          className="section"
          style={{ background: 'var(--surface-elevated)', scrollMarginTop: '100px' }}
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
                    color: 'var(--text-inverted)',
                    background: 'var(--accent-brand)',
                    borderRadius: '12px',
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
                    color: 'var(--text-primary)',
                    background: 'transparent',
                    border: '1px solid var(--border-hover)',
                    borderRadius: '12px',
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
              <p
                style={{
                  ...reveal(ctaSection.visible, 0.2),
                  fontSize: 'var(--text-base)',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginTop: 'var(--space-4)',
                }}
              >
                For AI agents, MCP servers, APIs, and tool integrations.
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
                    See how records are issued
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
                    Talk to an engineer
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
            <p
              style={{
                textAlign: 'center',
                marginTop: 'var(--space-6)',
                fontSize: 'var(--text-sm)',
                color: 'var(--text-tertiary)',
              }}
            >
              Planning a rollout?{' '}
              <Link
                href="/enterprise"
                style={{
                  color: 'var(--accent-brand)',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                }}
              >
                Talk about enterprise deployment
              </Link>
            </p>
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
                    Proof Check helps you understand whether your current artifacts are enough.
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
        {/* ── FAQ section ──────────────────────────────────────────────── */}
        <section className="section" style={{ background: 'var(--surface-subtle)', scrollMarginTop: '100px' }}>
          <div className="container px-5 sm:px-8 md:px-12 lg:px-16" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              <div style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent-brand)', marginBottom: 'var(--space-4)' }}>Questions</div>
              <h2 className="text-2xl sm:text-3xl" style={{ fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>Frequently asked</h2>
            </div>
            {[
              { q: 'How is this different from logs and traces?', a: 'Logs and traces help your team debug internally. They do not give another party independent, portable proof of what happened. Signed records do.' },
              { q: 'Does this work with MCP servers?', a: 'Yes. The same gap shows up in MCP servers as in APIs and tool calls: teams can see what happened internally, but later review still depends on local systems. Originary adds signed, portable records that can be verified without those systems.' },
              { q: 'Can I use this with AI agent tool calls?', a: 'Yes. When an AI agent invokes a tool through your API or MCP server, Originary can issue a signed record of the decision at the point of action.' },
              { q: 'What does another party actually verify?', a: 'They verify who issued the record, whether the contents have been modified, what policy was in effect, and when the action occurred. All using the issuer public key, with no dependency on your systems.' },
              { q: 'Do I need to replace my gateway or observability stack?', a: 'No. Originary works alongside your existing auth, payments, observability, and agent runtimes. It adds signed records that travel outside your system.' },
            ].map(({ q, a }) => (
              <div key={q} style={{ borderBottom: '1px solid var(--border-default)', paddingTop: 'var(--space-6)', paddingBottom: 'var(--space-6)' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>{q}</h3>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>{a}</p>
              </div>
            ))}
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
