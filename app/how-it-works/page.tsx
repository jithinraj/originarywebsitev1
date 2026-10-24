import type { Metadata } from 'next'
import { PageShell, PageHero, PageSection, SectionHeading, Button } from '@/components/home/page-kit'
import { Breadcrumbs } from '@/components/home/Breadcrumbs'
import { RecordPath } from '@/components/heroes/HeroArtifacts'
import { InkBand, InkHeading, InkButton } from '@/components/specimens/parts'
import type { FlowBeat } from '@/components/specimens/FlowPanel'
import { SurfaceTabs } from '@/components/how-it-works/SurfaceTabs'
import { RecordDemo } from '@/components/home/RecordDemo'
import './styles.css'

const TITLE = 'How signed records for AI agents work | Originary'
const DESCRIPTION =
  'An API, MCP server or gateway signs a record of each action. Anyone with the public key can verify it offline, then share related records as one case.'

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
  ],
}

type Beat = FlowBeat

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
      'The API response comes back with a signed record of the request, the response and the terms that applied.',
    intro: (
      <>
        A client, human app, or agent calls an API. The response returns with a signed record in the{' '}
        <code>PEAC-Receipt</code> header. Nothing else about the request or response changes. The publisher&apos;s
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
      "the request digest, the response digest, and the referenced policy for this call, without the vendor's logs or dashboard.",
    carrier: 'carrier: PEAC-Receipt header. discovery: /.well-known/peac.txt.',
    actors: ['agent client', 'api.vendor.example'],
    flow: [
      { kind: 'msg', dir: 'ltr', slot: 1, label: 'GET /reports/q3' },
      { kind: 'msg', dir: 'rtl', slot: 2, label: '200 OK - PEAC-Receipt: eyJhbG...' },
      { kind: 'rec', slot: 3, label: 'record issued: resource + request/response digests + policy bound' },
      { kind: 'chk', slot: 4, label: 'verified later, offline, under the issuer public key' },
    ],
    fails: [
      {
        title: 'It said something different yesterday',
        body: 'A response edited after the fact fails the bound digest. The record freezes what was actually served.',
      },
      {
        title: 'Metering and usage disputes',
        body: "Each call yields its own receipt, so usage claims can be checked against signed records instead of one side's counters.",
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
      "Each tool call gets a signed record inside MCP's own _meta field. Hosts that do not read it need no changes.",
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
      { kind: 'chk', slot: 4, label: 'shows the tool, inputs and output of each call' },
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
      "The approval names one exact action, the execution must match it, and every step links to the one before.",
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
        body: 'The run summary seals a record count and a Merkle root. A record missing from the sealed run is detectable.',
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
    thesis: 'Each allow, deny, redact or review decision becomes a signed record carrying the gateway reason code.',
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
      { kind: 'chk', slot: 5, label: 'shows what left the gateway without revealing it' },
    ],
    fails: [
      {
        title: 'The gateway never blocked it',
        body: 'A signed deny with a reason code and timestamp shows what was refused, when, and under which rule.',
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
    thesis: 'Payment settles on the rail. The record keeps the artifacts the rail produced, alongside the offer, delivery and acknowledgment.',
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
        body: 'Offer, settlement and delivery each get their own record, so each leg of a 402 dispute can be checked separately.',
      },
      {
        title: 'Double charge and replay',
        body: 'Unique ids plus the bounded replay guard classify a re-presented record as replayed, not fresh.',
      },
      {
        title: 'We never received it',
        body: "A delivery digest and the counterparty's own signed acknowledgment answer it directly.",
      },
    ],
  },
  {
    id: 's-provision',
    overline: 'Surface 06 of 06',
    title: 'Provisioning event',
    thesis: 'A signed trail of what the agent created or changed. The schema rejects credential values.',
    intro: (
      <>
        An agent provisions real infrastructure: accounts, resources, credentials, budgets, subscriptions,
        and deployments. Each event becomes an <code>*-observed</code> record. The critical property is
        that <b>credential material is never captured</b>. The schema itself rejects secret values, so the
        record carries a reference and a digest, not the secret itself.{' '}
        <a
          href="/provisioning-records"
          style={{ color: 'var(--link)', textDecoration: 'underline', textUnderlineOffset: 3 }}
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
      { kind: 'chk', slot: 5, label: 'records the lifecycle without the secret' },
    ],
    fails: [
      {
        title: 'Shadow infrastructure',
        body: 'Resources an agent quietly stood up appear in the observed trail with the issuer and time attached.',
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

const MODEL_STEPS: Array<{ n: string; title: string; body: string; mech: string }> = [
  {
    n: '01',
    title: 'Observe',
    body: 'The system that handles the action, such as an API, MCP server, gateway or payment processor, observes what was requested, which policy applied and what came back.',
    mech: 'the issuer is the system that observed the action',
  },
  {
    n: '02',
    title: 'Issue',
    body: 'At the moment the system acts, it signs a record that binds selected facts, such as the request and response digests, the policy in force, the issuer, and the time, to a key it controls. Private logs stay private.',
    mech: 'sign() -> interaction-record+jwt',
  },
  {
    n: '03',
    title: 'Verify',
    body: 'Any party checks the signature and the bound digests offline, outside the system that produced them, with no access to your logs or dashboard, under a supplied key or an explicit expected-issuer policy.',
    mech: 'verify --public-key -> valid (offline)',
  },
  {
    n: '04',
    title: 'Hand off',
    body: 'Optionally, package the records, native artifacts, and verification results into one evidence case for a customer, auditor, or partner to inspect independently.',
    mech: 'records + artifacts + report -> evidence case',
  },
]

export default function HowItWorksPage() {
  return (
    <PageShell>
      <Breadcrumbs current="How it works" href="/how-it-works" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="How it works"
        title="How a signed record is made and checked"
        sub="Your system signs selected facts about an action. The record is kept apart from the logs and the service that produced it, so anyone with the issuer's public key can check it offline."
        display
        aside={<RecordPath />}
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button href="#surfaces" primary>
            See each surface
          </Button>
          <Button href="/verify">Verify a record</Button>
        </div>
      </PageHero>

      <PageSection paddingTop={40} paddingBottom={88}>
        <ol className="hw-steps" role="list" aria-label="Observe, issue, verify, hand off">
          {MODEL_STEPS.map((st) => (
            <li key={st.n}>
              <span className="hw-step-n">{st.n}</span>
              <p className="hw-step-t">{st.title}</p>
              <p className="hw-step-b">{st.body}</p>
              <code className="hw-step-m">{st.mech}</code>
            </li>
          ))}
        </ol>
      </PageSection>

      <PageSection paddingTop={0} paddingBottom={88}>
        <div id="surfaces" style={{ scrollMarginTop: 96 }}>
          <SectionHeading
            eyebrow="Six surfaces, one record"
            title="The same four steps, wherever the action happens."
            sub="Pick a surface to see what the record binds, how it is carried and which questions it answers."
          />
          <SurfaceTabs surfaces={SURFACES} />
        </div>
      </PageSection>

      <PageSection paddingTop={0} paddingBottom={96}>
        <SectionHeading
          eyebrow="Check one"
          title="Try it on the sample record."
          sub="Verify the sample, then change the result field and verify again. The check runs in your browser."
        />
        <div style={{ maxWidth: 1040 }}>
          <RecordDemo />
        </div>
      </PageSection>

      <InkBand>
        <InkHeading maxWidth="24ch">Try it on one of your own workflows.</InkHeading>
        <div style={{ marginTop: 30, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <InkButton href="/contact" primary>
            Start a pilot
          </InkButton>
          <InkButton href="/records">Browse the records</InkButton>
        </div>
      </InkBand>
    </PageShell>
  )
}
