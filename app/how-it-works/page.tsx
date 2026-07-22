import type { Metadata } from 'next'
import { FACTS } from '@/lib/facts'
import { PageShell, PageHero, PageSection, SectionHeading, Card, Pill, Button } from '@/components/home/page-kit'
import { PALETTE } from '@/components/home/palette'
import { InkBand, InkHeading, InkButton, AnchorLine, CodeBlock } from '@/components/specimens/parts'
import FlowObserver from '@/components/how-it-works/FlowObserver'
import '@/components/how-it-works/how-it-works.css'

const TITLE = 'How portable signed interaction records work | Originary'
const DESCRIPTION =
  'See how a system issues a signed record, how the record binds selected facts and context, and how another party verifies it.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/how-it-works' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.originary.xyz/how-it-works',
    type: 'website',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Originary how it works' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/og'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.originary.xyz/how-it-works#webpage',
      url: 'https://www.originary.xyz/how-it-works',
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@id': 'https://www.originary.xyz/#website' },
      breadcrumb: { '@id': 'https://www.originary.xyz/how-it-works#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.originary.xyz/how-it-works#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.originary.xyz' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'How it works',
          item: 'https://www.originary.xyz/how-it-works',
        },
      ],
    },
  ],
}

type Beat =
  | { kind: 'msg'; dir: 'ltr' | 'rtl'; slot: number; label: string; half?: 'l' | 'r' }
  | { kind: 'evt'; slot: number; label: string; bad?: boolean }
  | { kind: 'rec'; slot: number; label: string }
  | { kind: 'chk'; slot: number; label: string }

type Fail = { title: string; body: string }

type SurfaceData = {
  id: string
  overline: string
  title: string
  thesis: string
  intro: React.ReactNode
  binds: string[]
  prove: string
  carrier: string
  actors: string[]
  flow: Beat[]
  fails: Fail[]
}

const SURFACES: SurfaceData[] = [
  {
    id: 's-api',
    overline: 'Surface 01 of 06',
    title: 'API call',
    thesis:
      'A metered response you can hold onto. The API answers, and the answer carries its own signed evidence.',
    intro: (
      <>
        A client, human app, or agent calls an API. The response returns with a signed record in the{' '}
        <code>PEAC-Receipt</code> header: same request, same wire, one extra header. The publisher&apos;s
        terms live at <code>/.well-known/peac.txt</code>, and the record binds a digest of the policy
        that was in force <b>at the moment of the call</b>.
      </>
    ),
    binds: [
      'resource + method',
      'request digest',
      'response digest',
      'policy digest',
      'issuer + key id',
      'time + unique id',
    ],
    prove:
      "the request digest, the response digest, and the referenced policy for this call, without the vendor's logs, dashboard, or cooperation.",
    carrier: 'carrier: PEAC-Receipt header. discovery: /.well-known/peac.txt.',
    actors: ['agent client', 'api.vendor.example'],
    flow: [
      { kind: 'msg', dir: 'ltr', slot: 1, label: 'GET /reports/q3' },
      { kind: 'msg', dir: 'rtl', slot: 2, label: '200 OK - PEAC-Receipt: eyJhbG...' },
      { kind: 'rec', slot: 3, label: 'record issued: resource + request/response digests + policy bound' },
      { kind: 'chk', slot: 4, label: 'verified offline - by any party - years later - no vendor login' },
    ],
    fails: [
      {
        title: 'It said something different yesterday',
        body: 'A response edited after the fact fails the bound digest. The record freezes what was actually served.',
      },
      {
        title: 'Metering and usage disputes',
        body: "Each call yields its own receipt. Usage claims reconcile against signed records, not counters in one side's database.",
      },
      {
        title: 'Those were not the terms',
        body: 'The policy digest pins the exact published terms in force at call time.',
      },
    ],
  },
  {
    id: 's-mcp',
    overline: 'Surface 02 of 06',
    title: 'MCP tool run',
    thesis:
      "Every tool call, signed at the source, carried inside the protocol's own metadata. Unaware hosts need no changes.",
    intro: (
      <>
        An agent host calls a tool over the Model Context Protocol. The tool result returns with the
        record tucked into <code>_meta</code>, a standard MCP extension point, so hosts that do not know
        PEAC simply ignore it. A separately signed <b>tool-definition manifest</b> pins what the tool{' '}
        <i>was</i>, meaning its name, schema, and version, when it ran.
      </>
    ),
    binds: [
      'tool name',
      'canonicalized args digest',
      'result digest',
      'tool-manifest ref',
      'trace correlation',
      'issuer + time',
    ],
    prove:
      'Which tool version ran, what it received, and what it returned. Per call, offline, across host and server boundaries.',
    carrier: 'carrier: _meta["org.peacprotocol/receipt_ref"] and _meta["org.peacprotocol/receipt_jws"].',
    actors: ['mcp host (agent)', 'tool server'],
    flow: [
      { kind: 'msg', dir: 'ltr', slot: 1, label: 'tools/call - search_flights { args }' },
      { kind: 'msg', dir: 'rtl', slot: 2, label: 'result - _meta carries the signed record' },
      { kind: 'rec', slot: 3, label: 'record binds tool name + args digest + result digest + manifest ref' },
      { kind: 'chk', slot: 4, label: 'prove which tool, which inputs, which output, per call' },
    ],
    fails: [
      {
        title: 'Silently swapped tools',
        body: 'If the tool definition changes, new calls bind a different manifest ref. Drift becomes visible and datable.',
      },
      {
        title: 'Altered results downstream',
        body: 'A result modified after the run fails its bound digest even though the signature still verifies.',
      },
      {
        title: 'Which agent did what',
        body: 'Per-call records with issuer, time, and trace correlation reconstruct the run without server logs.',
      },
    ],
  },
  {
    id: 's-action',
    overline: 'Surface 03 of 06',
    title: 'Agent action',
    thesis:
      "Approvals that bind. Actions that chain. An agent's run becomes a verifiable sequence, not a story.",
    intro: (
      <>
        An agent proposes an action, and a human or policy approves it. The approval record binds{' '}
        <b>exactly one proposal digest</b>. The execution record must bind <b>that same digest</b>. If the
        action changed after approval, the flow emits a denied record and <b>fails closed</b>. Every step
        links to the previous one, building a per-run lineage chain.
      </>
    ),
    binds: [
      'proposal digest',
      'approval to execution link',
      'parent_jti / depends_on',
      'delegation chain',
      'outcome kind',
      'run summary + count',
    ],
    prove:
      'The action that executed was byte-for-byte the action approved, who delegated to whom, and that the run chain matches the issuer\'s sealed run summary and count.',
    carrier:
      'types: agent-action-approved, -invoked, -denied, -delegated, -cancelled, -timed-out, -observed.',
    actors: ['agent', 'approver (human or policy)'],
    flow: [
      { kind: 'msg', dir: 'ltr', slot: 1, label: 'proposal - digest A (sha256:9c41...)' },
      { kind: 'msg', dir: 'rtl', slot: 2, label: 'approval record - binds digest A' },
      { kind: 'msg', dir: 'ltr', slot: 3, label: 'execute - must bind digest A' },
      { kind: 'rec', slot: 4, label: 'records linked: approved to invoked - parent_jti chain' },
      { kind: 'evt', slot: 5, label: 'proposal changed? digest B not equal to A: denied record - fail closed', bad: true },
      { kind: 'chk', slot: 6, label: 'each run bound to the approval and run summary the issuer sealed' },
    ],
    fails: [
      {
        title: 'Approval reused for a different action',
        body: 'The modified action hashes to a different digest, so verification fails and the flow emits a denial instead.',
      },
      {
        title: 'Silent extra actions',
        body: 'The run summary seals a record count and a Merkle root. An absent record is detectable, not deniable.',
      },
      {
        title: 'Delegation disputes',
        body: 'Delegated-observed records with delegation chain context show who handed work to whom.',
      },
    ],
  },
  {
    id: 's-gateway',
    overline: 'Surface 04 of 06',
    title: 'Gateway decision',
    thesis: 'The decision is the evidence. Allow, deny, redact: each one signed and reasoned by the issuer.',
    intro: (
      <>
        Traffic passes a gateway or guardrail: an AI proxy, an MCP gateway, an egress filter. The gateway
        decides to <b>allow, deny, or route to review</b>, and sometimes <b>redacts</b> on the way through.
        PEAC records the decision facts: the outcome, a reason code, the digest of the policy the
        issuer recorded, and <b>two content digests</b>, one for what was produced and one for what was
        delivered.
      </>
    ),
    binds: [
      'decision (allow/deny/review)',
      'reason code',
      'policy digest',
      'produced-content digest',
      'delivered-content digest',
      'trace correlation',
    ],
    prove:
      'the issuer-reported policy reference and distinct produced and delivered digests, so a verifier can confirm the delivered content differs from what was produced, without revealing either. A signed refusal is evidence too.',
    carrier: 'types: org.peacprotocol/access-decision. extension: org.peacprotocol/access.',
    actors: ['app / agent', 'gateway', 'recipient'],
    flow: [
      { kind: 'msg', dir: 'ltr', slot: 1, label: 'content produced - sha256:7f3a...', half: 'l' },
      { kind: 'evt', slot: 2, label: 'policy check - pii detected: redact - reason: pii_email' },
      { kind: 'msg', dir: 'ltr', slot: 3, label: 'delivered redacted - sha256:e01b...', half: 'r' },
      { kind: 'rec', slot: 4, label: 'decision record - allow + redact - policy digest - produced not equal to delivered' },
      { kind: 'chk', slot: 5, label: 'prove what left the boundary without revealing it' },
    ],
    fails: [
      {
        title: 'The gateway never blocked it',
        body: 'A signed deny with a reason code and timestamp settles what was refused, and when, and why.',
      },
      {
        title: 'Redaction disputes',
        body: 'The produced and delivered digest pair proves the delivered content differs from what was produced, and lets anyone holding a copy confirm which version it is.',
      },
      {
        title: 'Which policy version applied',
        body: 'The policy digest pins it without publishing the policy itself.',
      },
    ],
  },
  {
    id: 's-payment',
    overline: 'Surface 05 of 06',
    title: 'Payment event',
    thesis: 'The money moves on the rail. The evidence moves with you: offer, payment, delivery, acknowledgment.',
    intro: (
      <>
        An agent hits a paid resource and gets a <b>402 response with a signed offer</b>. Payment settles
        on the rail, such as x402, Stripe, or paymentauth, <b>never on PEAC</b>. The seller then issues a
        record that <b>preserves the rail&apos;s own signed artifacts</b> alongside the amount and the
        delivery digest. The counterparty can add a linked acknowledgment record.
      </>
    ),
    binds: [
      'rail + amount_minor + currency',
      'offer artifact (preserved)',
      'settlement receipt digest',
      'delivery digest',
      'acknowledgment triple',
      'issuer + time + jti',
    ],
    prove:
      'What was offered, what was paid, and what was delivered: the exact dispute triangle. Replay-guarded, bundle-exportable, and verifiable offline.',
    carrier: 'types: org.peacprotocol/payment. extension: org.peacprotocol/commerce. rails: x402, Stripe, paymentauth, ACP, UCP, AP2.',
    actors: ['buyer agent', 'seller api'],
    flow: [
      { kind: 'msg', dir: 'ltr', slot: 1, label: 'GET /dataset' },
      { kind: 'msg', dir: 'rtl', slot: 2, label: '402 - signed offer' },
      { kind: 'evt', slot: 3, label: 'payment settles on the rail, not on PEAC' },
      { kind: 'msg', dir: 'rtl', slot: 4, label: '200 - content + settlement receipt' },
      { kind: 'rec', slot: 5, label: 'payment record - preserves offer + receipt artifacts - 12.50 USD' },
      { kind: 'chk', slot: 6, label: 'counterparty acknowledgment links back - each record verifies offline' },
    ],
    fails: [
      {
        title: 'Paid but denied, or served but unpaid',
        body: 'Offer, settlement, and delivery records make each leg separately provable. The classic 402 dispute pair dissolves.',
      },
      {
        title: 'Double charge and replay',
        body: 'Unique ids plus the bounded replay guard classify a re-presented record as replayed, not fresh.',
      },
      {
        title: 'We never received it',
        body: "A delivery digest, and the counterparty's own acknowledgment record, answer it with signatures, not assertions.",
      },
    ],
  },
  {
    id: 's-provision',
    overline: 'Surface 06 of 06',
    title: 'Provisioning event',
    thesis: 'What the agent stood up, on the record, with credential-value fields rejected by the schema.',
    intro: (
      <>
        An agent provisions real infrastructure: accounts, resources, credentials, budgets, subscriptions,
        and deployments. Each event becomes an <code>*-observed</code> record. The critical property is
        that <b>credential material is never captured</b>. The schema itself rejects secret values, so the
        record carries a reference and a digest, and a leak through the evidence layer is structurally
        impossible.{' '}
        <a
          href="/provisioning-records"
          style={{ color: PALETTE.success, textDecoration: 'underline', textUnderlineOffset: 3 }}
        >
          See provisioning records
        </a>
        .
      </>
    ),
    binds: [
      'event kind (10 observed kinds)',
      'provider / account refs',
      'resource refs',
      'credential ref, never value',
      'budget / subscription deltas',
      'issuer + time',
    ],
    prove:
      'Every account, resource, credential, and budget an agent created, changed, or removed: the anti-shadow-infrastructure trail, without a single secret in the evidence.',
    carrier:
      'extension: org.peacprotocol/provisioning-lifecycle. kinds: catalog, account, resource, credential, budget, subscription, deployment, and more.',
    actors: ['agent', 'cloud provider'],
    flow: [
      { kind: 'msg', dir: 'ltr', slot: 1, label: 'create service account + api key' },
      { kind: 'msg', dir: 'rtl', slot: 2, label: 'created - secret: sk_live_9f2...' },
      { kind: 'evt', slot: 3, label: 'redaction: secret never captured, reference + digest only' },
      { kind: 'rec', slot: 4, label: 'credential-observed record - account / resource / budget trail' },
      { kind: 'chk', slot: 5, label: 'prove the lifecycle, never the secret' },
    ],
    fails: [
      {
        title: 'Shadow infrastructure',
        body: 'Resources an agent quietly stood up appear in the observed trail with issuer and time: discoverable, datable, attributable.',
      },
      {
        title: 'Secrets leaking through audit logs',
        body: 'Sharply reduced here: the schema rejects known secret-bearing fields before anything is signed. Integrations must still keep secrets out of free-text and reference fields.',
      },
      {
        title: 'Who created this account',
        body: 'Issuer, delegation context, and the linked action chain answer it without grepping provider logs.',
      },
    ],
  },
]

function FlowDiagram({ beats, actors }: { beats: Beat[]; actors: string[] }) {
  return (
    <div className="hiw-flow" data-flow>
      <div className="hiw-factors">
        {actors.map((a) => (
          <span className="hiw-fa" key={a}>
            {a}
          </span>
        ))}
      </div>
      <div className="hiw-fsteps">
        {beats.map((b, i) => {
          if (b.kind === 'msg') {
            const half = b.half ? ` half-${b.half}` : ''
            return (
              <div className={`hiw-fmsg ${b.dir}${half} hiw-s${b.slot}`} key={i}>
                <span className="hiw-fline" />
                <span className="hiw-fhead" />
                <span className="hiw-flabel">{b.label}</span>
                <span className="hiw-fdot" />
              </div>
            )
          }
          if (b.kind === 'evt') {
            return (
              <div className={`hiw-fevt${b.bad ? ' bad' : ''} hiw-s${b.slot}`} key={i}>
                {b.label}
              </div>
            )
          }
          if (b.kind === 'rec') {
            return (
              <div className={`hiw-frec hiw-s${b.slot}`} key={i}>
                <span className="hiw-fchit">{b.label}</span>
              </div>
            )
          }
          return (
            <div className={`hiw-fchk hiw-s${b.slot}`} key={i}>
              {b.label}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function SurfaceSection({
  s,
  first = false,
  background,
}: {
  s: SurfaceData
  first?: boolean
  background?: string
}) {
  return (
    <PageSection paddingTop={first ? 8 : 0} paddingBottom={0} background={background}>
      <div
        className="hiw-sdeep"
        id={s.id}
        style={first ? { marginTop: 0, paddingTop: 0, borderTop: 'none', scrollMarginTop: 96 } : { scrollMarginTop: 96 }}
      >
        <span className="hiw-sno">{s.overline}</span>
        <h2 className="hiw-title">{s.title}</h2>
        <p className="hiw-thesis">{s.thesis}</p>

        <div className="hiw-walk">
          <div className="hiw-wtext">
            <span className="hiw-wno">what happens</span>
            <p className="hiw-intro">{s.intro}</p>
            <div className="hiw-wbind">
              <span className="hiw-label">the record binds</span>
              <ul className="hiw-bindlist">
                {s.binds.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <p className="hiw-wprove">
              <b>Later, a verifier can confirm the issuer signed a record binding:</b> {s.prove}
            </p>
            <code className="hiw-wtype" tabIndex={0}>{s.carrier}</code>
            <div className="hiw-actors">actors: {s.actors.join(', ')}</div>
          </div>
          <FlowDiagram beats={s.flow} actors={s.actors} />
        </div>

        <div className="hiw-duo">
          <div className="hiw-fails">
            {s.fails.map((f) => (
              <div className="hiw-failc" key={f.title}>
                <b>{f.title}</b>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  )
}

const HOW_IT_WORKS_JUMP = [
  { href: '#s-api', label: 'API call' },
  { href: '#s-mcp', label: 'MCP tool run' },
  { href: '#s-action', label: 'Agent action' },
  { href: '#s-gateway', label: 'Gateway decision' },
  { href: '#s-payment', label: 'Payment event' },
  { href: '#s-provision', label: 'Provisioning event' },
]

function JumpIndex({ items }: { items: Array<{ href: string; label: string }> }) {
  return (
    <Card padding={24}>
      <span
        style={{
          fontFamily: 'var(--font-plex-mono)',
          fontSize: 10,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: PALETTE.faint,
        }}
      >
        contents
      </span>
      <nav aria-label="Page contents">
        <ul style={{ listStyle: 'none', margin: '12px 0 0', padding: 0 }}>
          {items.map((it, i) => (
            <li key={it.href}>
              <a
                href={it.href}
                className="home-footer-link"
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 14,
                  padding: '10px 0',
                  textDecoration: 'none',
                  borderTop: i > 0 ? `1px solid ${PALETTE.hairline}` : undefined,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-plex-mono)',
                    fontSize: 11,
                    color: PALETTE.accent,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ fontFamily: 'var(--font-plex-sans)', fontSize: 14.5, color: PALETTE.ink }}>
                  {it.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Card>
  )
}

const MODEL_STEPS: Array<{ n: string; title: string; body: string; mech: string }> = [
  {
    n: '01',
    title: 'Issue',
    body: 'At the moment a system acts, it signs a record that binds selected facts, such as the request and response digests, the policy in force, the issuer, and the time, to a key it controls. Private logs stay private.',
    mech: 'sign() -> interaction-record+jwt',
  },
  {
    n: '02',
    title: 'Carry',
    body: 'The record travels with the interaction: a PEAC-Receipt header on an API response, _meta inside an MCP tool result, or an evidence bundle. Systems that do not know PEAC ignore it.',
    mech: 'PEAC-Receipt header . MCP _meta . bundle',
  },
  {
    n: '03',
    title: 'Verify and bundle',
    body: 'Any party checks the signature and the bound digests offline, with no access to your logs or dashboard, then packages related records into a bundle for review, audit, or dispute.',
    mech: 'verify --public-key -> valid (offline)',
  },
]

function ModelSection() {
  return (
    <PageSection paddingTop={8} paddingBottom={0}>
      <SectionHeading index="00" eyebrow="the primitive" title="One record. Issue, carry, verify and bundle." />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 20,
          marginTop: 4,
        }}
      >
        {MODEL_STEPS.map((s) => (
          <Card key={s.n} padding={26}>
            <div
              style={{
                fontFamily: 'var(--font-plex-mono)',
                fontSize: 11,
                letterSpacing: '0.2em',
                color: PALETTE.accent,
              }}
            >
              {s.n}
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-plex-sans)',
                fontSize: 21,
                lineHeight: 1.2,
                letterSpacing: '-0.01em',
                fontWeight: 500,
                color: PALETTE.ink,
                margin: '10px 0 0',
              }}
            >
              {s.title}
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-plex-sans)',
                fontSize: 14.5,
                lineHeight: 1.6,
                color: PALETTE.muted,
                margin: '10px 0 14px',
              }}
            >
              {s.body}
            </p>
            <code
              style={{
                display: 'block',
                fontFamily: 'var(--font-plex-mono)',
                fontSize: 11.5,
                color: PALETTE.faint,
                whiteSpace: 'pre-wrap',
              }}
            >
              {s.mech}
            </code>
          </Card>
        ))}
      </div>
    </PageSection>
  )
}

export default function HowItWorksPage() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="how it works"
        title="Six surfaces. One primitive."
        sub="The same signed record structure covers every surface where an agent or automated system acts: one verification path for all of it. Each section below shows what happens, what the record binds, and the failure mode it closes."
        display
        aside={<JumpIndex items={HOW_IT_WORKS_JUMP} />}
        strip={['Six surfaces', 'One primitive', 'One verification path', 'Offline verification']}
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button href="/records" primary>
            See the records
          </Button>
          <Button href="/verify">Verify one</Button>
        </div>
      </PageHero>

      <ModelSection />

      {SURFACES.map((s, i) => (
        <SurfaceSection s={s} first={i === 0} background={i % 2 === 1 ? PALETTE.paper : undefined} key={s.id} />
      ))}

      {/* v0.16.2 */}
      <PageSection paddingTop={0} paddingBottom={64}>
        <SectionHeading index="07" eyebrow="Beyond single records" title="Broader evidence coverage, same wire format." />
        <Card padding={28} style={{ maxWidth: 860 }}>
          <div
            style={{
              fontFamily: 'var(--font-plex-mono)',
              fontSize: 10.5,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: PALETTE.accent,
            }}
          >
            PEAC v0.16.3
          </div>
          <p
            style={{
              fontFamily: 'var(--font-plex-sans)',
              fontSize: 15.5,
              lineHeight: 1.6,
              color: PALETTE.ink,
              margin: '12px 0 16px',
              maxWidth: '58ch',
            }}
          >
            Portable evidence beyond single signed records: the wire format stays stable while evidence coverage
            broadens.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {[
              'Paid resource records',
              'Paid MCP tool records',
              'Linked counterparty acknowledgments',
              'Merkle commitment helpers',
              'External evidence anchoring',
              'Agent spend attribution',
              'Agent run lineage records',
              'Consented action records',
              'Runtime lineage exports',
            ].map((c) => (
              <Pill key={c}>{c}</Pill>
            ))}
          </div>
          <p
            style={{
              fontFamily: 'var(--font-plex-sans)',
              fontSize: 13,
              lineHeight: 1.6,
              color: PALETTE.muted,
              margin: '16px 0 0',
            }}
          >
            Broader evidence coverage, not a new payment rail, gateway, or policy engine.
          </p>
        </Card>
      </PageSection>

      {/* Closing */}
      <InkBand>
        <InkHeading>Generate these yourself in one command.</InkHeading>
        <div style={{ maxWidth: 760, margin: '28px auto 0', textAlign: 'left' }}>
          <CodeBlock tone="ink">{`pnpm dlx @peac/cli@0.16.3 samples generate -o ./s
pnpm dlx @peac/cli@0.16.3 verify ./s/valid/basic-record.jws --public-key ./s/bundles/sandbox-jwks.json`}</CodeBlock>
        </div>
        <p style={{ fontFamily: 'var(--font-plex-mono)', fontSize: 12, color: '#7fa98c', marginTop: 18 }}>
          Signature valid (offline) - PEAC {FACTS.currentVersion}
        </p>
        <div style={{ marginTop: 34, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <InkButton href="/verify" primary>
            Verify a record
          </InkButton>
          <InkButton href="/contact">Start a pilot</InkButton>
        </div>
        <AnchorLine onInk style={{ marginTop: 36 }}>
          Logs stay local. Signed records travel.
        </AnchorLine>
      </InkBand>

      <FlowObserver />
    </PageShell>
  )
}
