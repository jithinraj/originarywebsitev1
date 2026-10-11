import { PageShell, ArticleDoc, ArticleRelated } from '@/components/home'
import {
  ArticlePlate,
  ArticleFigure,
  FigureFrame,
  SeriesIndex,
  EvidenceTable,
  NextStep,
  PullLine,
  ExtLink,
  seriesPart,
  seriesMetadata,
  seriesJsonLd,
  jsonLdHtml,
} from '@/components/blog'
import { HandoffCaseDiagram, VerificationQuestions } from '@/components/blog/figures/AuditHandoffFigures'

const SLUG = 'ai-agent-audit-trail-handoff'

export const metadata = seriesMetadata(SLUG, 'AI Agent Audit Trails That Survive the Handoff | Originary')

const jsonLd = seriesJsonLd(SLUG, [
  'AI agent audit trail',
  'AI audit evidence',
  'OpenTelemetry and signed records',
  'offline verification',
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(jsonLd)} />
      <PageShell>
        <ArticleDoc
          category="audit"
          title="An AI agent audit trail has to survive the handoff"
          sub="The test is whether another team can review the action after your dashboard is out of reach."
          author="Originary"
          date="2026-10-11"
          readTime="6 min read"
          parent={{ label: 'Blog', href: '/blog' }}
          plate={<ArticlePlate slug={SLUG} category="audit" keyword={seriesPart(SLUG)} />}
        >
          <p>
            Consider an agent that changes a customer&rsquo;s account permissions. The application
            logs the request. A trace connects the agent run to the API call. The identity service
            records a successful update.
          </p>
          <p>
            A week later, the customer asks who approved the change and which permissions were
            granted.
          </p>
          <p>
            Your engineers can investigate. They have access to the services, know the identifiers,
            and understand which events belong together. The customer&rsquo;s security team has none
            of those advantages. Sending a dashboard screenshot transfers your conclusion. Giving
            them dashboard access transfers far more information than they need.
          </p>
          <p>
            An AI agent audit trail has two jobs here: help your team investigate and give the other
            team evidence it can assess. Those jobs have different requirements.
          </p>

          <ArticleFigure
            label="fig. 01"
            caption="Internal telemetry stays where it is. What crosses the boundary is a selected case the reviewer can check on their own; a screenshot only carries your conclusion."
            plate
          >
            <FigureFrame>
              <HandoffCaseDiagram />
            </FigureFrame>
          </ArticleFigure>

          <h2>Telemetry gives you visibility. A handoff needs context.</h2>
          <p>
            OpenTelemetry collects and exports traces, metrics, logs, and other signals. It is built
            for observing systems, and that includes activity across services. Logs can be exported.
            Traces can cross company boundaries. None of that is inherently confined to one
            dashboard.
          </p>
          <p>The difficulty is what remains understandable and verifiable after the export.</p>
          <p>
            A reviewer needs to know which system made each statement, which action it refers to,
            what the record covers, and how to check that it has not changed. They also need enough
            context to distinguish a permission request from an approval and an approval from an
            applied change.
          </p>
          <p>
            A trace identifier helps join events. It does not answer all those questions. A CSV
            export may contain the answers, but the recipient still needs a way to establish its
            provenance and interpret its fields.
          </p>
          <p>
            Sampling adds another consideration. OpenTelemetry&rsquo;s{' '}
            <ExtLink href="https://opentelemetry.io/docs/concepts/sampling/">
              sampling documentation
            </ExtLink>{' '}
            explains how teams can retain a representative selection of traces. That can be
            appropriate for diagnosing aggregate behavior. An approval required for reviewing one
            particular permission change cannot depend on that change happening to survive a
            sampling decision.
          </p>
          <p>
            Keep operational telemetry. Define a separate capture rule for the actions that require
            individual review.
          </p>

          <h2>Start with the decision the recipient must make</h2>
          <p>
            For the permission change, the customer&rsquo;s question might be: &ldquo;Did this
            update stay within the administrator&rsquo;s approval?&rdquo;
          </p>
          <p>That question tells you what to preserve:</p>
          <EvidenceTable
            head={['Evidence', 'Why the reviewer needs it']}
            rows={[
              ['The approval, with its scope', 'Establishes what the approval system reported allowing'],
              ['The requested permission change', 'Shows what the caller asked the service to do'],
              ['The identity service’s result', 'Shows what that service reported applying'],
              [
                'A later state observation, if available',
                'Helps assess whether the relevant permissions were present afterward',
              ],
            ]}
          />
          <p>
            These are related statements from different points in the workflow. Combining them into
            a single &ldquo;success&rdquo; label would discard the distinctions the reviewer needs.
          </p>
          <p>
            The issuing system should record only what it can support. An API can report receiving a
            request and returning a result. An approval service can report the approval it issued. A
            separate observer can report the state it read. Each statement has a source and a limit.
          </p>
          <p>That is the useful starting point for signed interaction records.</p>

          <h2>What the signature contributes</h2>
          <p>
            A digital signature lets a recipient check whether a record validates under a particular
            public key and whether the protected content has changed. The recipient must separately
            establish why that key is acceptable for the claimed issuer.
          </p>
          <p>
            This is stronger than relying on a screenshot&rsquo;s appearance. It is also narrower
            than proving the entire event occurred as described.
          </p>
          <p>
            An issuer can sign an incorrect statement. A compromised system can produce valid
            signatures. An operator can omit an event. A timestamp inside a record remains a claim
            made by its issuer unless additional evidence supports it.
          </p>
          <p>Good verification keeps four questions separate:</p>
          <ol>
            <li>Does the signature validate under the supplied key?</li>
            <li>Does the record satisfy the applicable format and claim constraints?</li>
            <li>Does the key meet the recipient&rsquo;s issuer and trust policy?</li>
            <li>What additional evidence supports the underlying event?</li>
          </ol>
          <p>
            The first three questions can support a repeatable verification process. The fourth
            depends on the workflow and the evidence available. A green signature check should never
            silently answer it.
          </p>

          <ArticleFigure
            label="fig. 02"
            caption="Three questions form a repeatable check. The fourth stays open until the workflow supplies evidence for the underlying event."
          >
            <FigureFrame>
              <VerificationQuestions />
            </FigureFrame>
          </ArticleFigure>

          <h2>Preserve a reviewable case</h2>
          <p>
            For this example, a useful handoff would contain the selected records, the relevant
            approval artifact, verification material, and a short account of the findings.
          </p>
          <p>
            It should say whether the permission set reported by the identity service matches the
            approved scope. It should also say whether the approval artifact was independently
            checked, whether a later state observation exists, and whether any relevant attempts are
            missing.
          </p>
          <p>
            An attached public key is not automatically a trusted public key. Preserve the
            recipient&rsquo;s basis for accepting the issuer, along with the verification time and
            checks performed. Offline verification can reproduce checks against supplied material;
            it cannot discover a later key compromise or revocation without updated information.
          </p>
          <p>
            The export also needs a privacy boundary. Permission identifiers and scoped references
            may be sufficient. Session tokens, unrelated account data, and whole conversation
            histories usually are not. Choose what to disclose before signing the record. Editing
            protected fields afterward invalidates the signature.
          </p>
          <p>
            Keep any restricted originals under the appropriate access controls, and state when the
            reviewer is assessing a reduced representation. A digest alone does not make sensitive
            content anonymous or available for inspection.
          </p>

          <h2>Where Originary fits</h2>
          <p>
            Originary develops software for issuing, verifying, and packaging selected interaction
            records. PEAC Protocol is the open protocol behind those records. A recipient can verify
            them locally with the required material, without depending on an Originary-hosted
            service.
          </p>
          <p>
            The useful contribution is a handoff that preserves who reported what and gives the
            recipient a repeatable way to inspect it. That work sits alongside observability,
            authorization, and the systems that execute the action.
          </p>
          <p>
            There are workflows where an existing native export already does the job. Use it. There
            are also workflows where the other party cannot accept your internal investigation as
            its sole evidence. That is where a portable signed record earns its place.
          </p>
          <p>
            Before instrumenting every agent action, choose one action another team already reviews.
            Assemble the evidence and give it to that team without your dashboard. Ask whether they
            can identify the issuer, reproduce the checks, and make the intended decision.
          </p>
          <PullLine>
            If they still need an engineer to explain every field on a call, the handoff is
            unfinished.
          </PullLine>

          <NextStep actions={[{ label: 'Explore a verification pilot', href: '/product' }]}>
            Explore an Originary verification pilot for one workflow with a named evidence
            recipient.
          </NextStep>

          <SeriesIndex current={SLUG} />

          <h2>Further reading</h2>
          <ul>
            <li>
              <ExtLink href="https://opentelemetry.io/docs/concepts/signals/">OpenTelemetry signals</ExtLink>
            </li>
            <li>
              <ExtLink href="https://opentelemetry.io/docs/concepts/sampling/">OpenTelemetry sampling</ExtLink>
            </li>
            <li>
              <ExtLink href="https://github.com/peacprotocol/peac/blob/main/docs/guides/verification-options.md">
                PEAC verification options
              </ExtLink>
            </li>
            <li>
              <ExtLink href="https://github.com/peacprotocol/peac/blob/main/docs/THREAT_MODEL.md">
                PEAC threat model
              </ExtLink>
            </li>
          </ul>
        </ArticleDoc>

        <ArticleRelated
          links={[
            { label: 'When a customer asks why your AI gateway allowed a request', href: '/blog/ai-gateway-audit-logs-policy-decisions' },
            { label: 'An MCP tool call can succeed while the job is unfinished', href: '/blog/mcp-tool-call-audit-evidence' },
            { label: 'Originary evidence case', href: '/evidence-case' },
          ]}
        />
      </PageShell>
    </>
  )
}
