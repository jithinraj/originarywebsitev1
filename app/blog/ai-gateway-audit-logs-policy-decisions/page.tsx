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
import { GatewayObservationPoints, WhoSignedFigure } from '@/components/blog/figures/GatewayDecisionFigures'

const SLUG = 'ai-gateway-audit-logs-policy-decisions'

export const metadata = seriesMetadata(SLUG, 'AI Gateway Audit Logs: Why Was It Allowed? | Originary')

const jsonLd = seriesJsonLd(SLUG, [
  'AI gateway audit logs',
  'policy decision evidence',
  'gateway decision records',
  'OPA decision logs',
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(jsonLd)} />
      <PageShell>
        <ArticleDoc
          category="gateways"
          title="When a customer asks why your AI gateway allowed a request"
          sub="A policy decision, an enforcement action, and a downstream result need distinct evidence."
          author="Originary"
          date="2026-10-11"
          readTime="6 min read"
          parent={{ label: 'Blog', href: '/blog' }}
          plate={<ArticlePlate slug={SLUG} category="gateways" keyword={seriesPart(SLUG)} />}
        >
          <p>
            A customer reports that an agent sent a confidential document to an external model. Your
            gateway shows an allowed request. Its current policy blocks that destination for
            confidential material.
          </p>
          <p>
            Which policy was active when the request passed? What classification did the gateway
            receive? Was the content changed before forwarding? Did the external service receive
            it?
          </p>
          <p>
            This is a hypothetical incident, but the review questions are concrete. A screenshot of
            today&rsquo;s policy cannot answer them. Neither can a request count or a single
            &ldquo;allowed&rdquo; event with no policy context.
          </p>
          <p>
            A gateway sees a large share of an agent&rsquo;s traffic. Its evidence should record
            exactly what the gateway saw and did, and stop there.
          </p>

          <h2>Begin with the policy decision</h2>
          <p>
            Gateways are becoming observation points for more of an agent&rsquo;s work.
            Cloudflare&rsquo;s{' '}
            <ExtLink href="https://developers.cloudflare.com/changelog/post/2026-10-02-introducing-web-search-api/">
              Web Search API announcement on October 2, 2026
            </ExtLink>{' '}
            describes search requests running through AI Gateway, appearing in its logs, and using
            its billing flow. That creates another place where an operator can investigate a
            specific request. A customer reviewing the request still needs evidence with enough
            context to assess it outside that environment.
          </p>
          <p>
            Policy systems already produce valuable audit material. Open Policy Agent&rsquo;s{' '}
            <ExtLink href="https://www.openpolicyagent.org/docs/management-decision-logs">
              decision logs
            </ExtLink>{' '}
            include information about a policy query, its input and result, and the policy bundles
            involved. They also support correlation identifiers and masking of sensitive fields.
          </p>
          <p>
            Those records are a sensible source for investigation. The next step is to make the
            relevant decision understandable to a customer or reviewer outside the operator&rsquo;s
            environment.
          </p>
          <p>
            For the document incident, the reviewer needs the decision tied to the specific attempt.
            That includes the policy revision reported at evaluation, the relevant input
            classification, the destination, and the decision returned. A reference to a policy page
            that has since changed is insufficient for inspecting the earlier rules.
          </p>
          <p>
            Preserve the historical policy material needed for the claim, subject to disclosure
            controls. If the export contains only a revision identifier, say so. Reproducing a
            decision may also require data and runtime conditions that are absent from the export.
          </p>

          <h2>&ldquo;Allowed&rdquo; describes one step</h2>
          <p>
            A policy engine can return an allow decision while the gateway fails to forward the
            request. A gateway can apply redaction while the downstream service rejects the changed
            request. A connection error can leave the gateway uncertain about whether the receiver
            accepted the content.
          </p>
          <p>The incident review therefore needs three separate questions:</p>
          <EvidenceTable
            head={['Question', 'Relevant observation point']}
            rows={[
              ['What decision did policy evaluation return?', 'Policy decision point'],
              ['What action did the gateway report taking?', 'Enforcement point'],
              ['What did the destination report receiving or processing?', 'Downstream service or receiver'],
            ]}
          />
          <p>A deployment may combine the first two components. Their statements still have different meanings.</p>

          <ArticleFigure
            label="fig. 01"
            caption="Three observation points, three statements. In this hypothetical case the destination&rsquo;s observation was not supplied, and the finding says so."
            plate
          >
            <FigureFrame>
              <GatewayObservationPoints />
            </FigureFrame>
          </ArticleFigure>

          <p>
            For redaction, &ldquo;redaction required&rdquo; is a decision. &ldquo;These fields were
            removed from the forwarded representation&rdquo; is an enforcement claim. &ldquo;The
            receiver observed that representation&rdquo; is a receiver claim. A record should not
            slide between them.
          </p>
          <p>
            If the only available event is a policy query returning allow, it cannot establish that
            confidential content reached the external service. If the only event is a receiver
            response, it may not explain why access was allowed. Preserve both when the question
            needs both.
          </p>

          <h2>Identify who actually signed the record</h2>
          <p>There are several ways to produce portable evidence from a gateway workflow.</p>
          <p>
            The gateway may sign a record at the point where it handles a request. A collector may
            receive a gateway event and sign a record describing that observation. An export service
            may later transform a stored log into a signed record.
          </p>
          <p>These approaches offer different evidence.</p>

          <ArticleFigure
            label="fig. 02"
            caption="The signer is whoever held the key. A collector or exporter signature protects that party&rsquo;s statement; it does not become the gateway&rsquo;s signature."
          >
            <FigureFrame>
              <WhoSignedFigure />
            </FigureFrame>
          </ArticleFigure>

          <p>
            A collector&rsquo;s signature protects the collector&rsquo;s statement. It does not
            retroactively become the gateway&rsquo;s signature. A later export does not establish
            that its contents were committed at the time of the original decision. Preserve source
            timestamps and collection times as distinct observations, with their provenance.
          </p>
          <p>
            For an OPA-based example, ordinary decision logs do not become evidence signed by OPA
            because a PEAC exporter signs a derived record. The signer is the exporter. The
            underlying event remains native source material evaluated on its own terms.
          </p>
          <p>
            This precision lets a reviewer understand which part of the account comes from the
            source, which part comes from a collector, and which transformations occurred afterward.
          </p>

          <h2>Disclose enough to review, without exporting the document</h2>
          <p>
            Security review does not automatically require handing the customer every prompt, token,
            header, and payload.
          </p>
          <p>
            For the hypothetical incident, a scoped export might include the destination, a
            classification reference, the relevant decision, policy revision, and identifiers
            connecting the attempt to downstream evidence. The document itself may need a separate
            disclosure process.
          </p>
          <p>
            Choose that boundary before signing. Preserve the representation to which each digest
            refers, and document the transformation used to produce it. A digest of a sanitized
            document and a digest of the original document establish different bindings.
          </p>
          <p>
            Redaction also changes what can be evaluated. If the reviewer cannot inspect the material
            that supplied the classification, they may be able to check the signed classification
            claim without assessing whether it was correct. The findings should make that
            distinction visible.
          </p>
          <p>
            Masking credentials and customer data is necessary. It should not erase the context
            required to answer the agreed review question.
          </p>

          <h2>Include the cases that complicate the timeline</h2>
          <p>
            An allow event is only part of a useful gateway audit trail. Denials, review requests,
            retries, failures, and incomplete observations can explain why an agent took another
            route or repeated an action.
          </p>
          <p>
            Keep a logical operation reference for the intended action and separate attempt
            references for repeated calls. Do not assume adjacent timestamps establish a causal
            order across machines. Use the workflow&rsquo;s explicit links where available and state
            unresolved ordering.
          </p>
          <p>
            Absence needs equally careful treatment. An export containing no deny event does not
            establish that no denial occurred. Logging may have been disabled, filtered, delayed, or
            outside the selected scope. Even a valid chain of supplied records does not establish
            that every relevant action entered that chain.
          </p>
          <p>The reviewer needs the capture and export scope, alongside any known gaps.</p>

          <h2>Start with one route a customer already questions</h2>
          <p>
            A useful first integration has a named recipient and a narrow question. It might be an
            enterprise customer assessing whether a tool call used the approved destination, or a
            security reviewer comparing a requested action with a reported policy decision.
          </p>
          <p>
            Ask that recipient what they need before designing the export. Preserve the native
            evidence, add signed records where they help, and provide a verification path under an
            explicit issuer-and-key policy.
          </p>
          <p>
            Originary develops this record and handoff workflow using PEAC Protocol. The gateway
            continues to route and enforce. The evidence helps another party inspect the selected
            statements without access to the operator&rsquo;s private systems.
          </p>
          <p>Measure the integration by whether the reviewer can reach a supported finding.</p>
          <PullLine>
            &ldquo;The gateway reported allow under revision r17; downstream receipt was not
            supplied&rdquo; is an actionable finding. &ldquo;Everything verified&rdquo; conceals the
            question that remains open.
          </PullLine>

          <NextStep actions={[{ label: 'Gateway decision evidence', href: '/ai-gateway' }]}>
            Explore gateway decision evidence with Originary.
          </NextStep>

          <SeriesIndex current={SLUG} />

          <h2>Sources</h2>
          <ul>
            <li>
              <ExtLink href="https://developers.cloudflare.com/changelog/post/2026-10-02-introducing-web-search-api/">
                Cloudflare Web Search API announcement, October 2, 2026
              </ExtLink>
            </li>
            <li>
              <ExtLink href="https://www.openpolicyagent.org/docs/management-decision-logs">
                OPA decision logs
              </ExtLink>
            </li>
            <li>
              <ExtLink href="https://github.com/peacprotocol/peac/blob/main/docs/guides/verification-options.md">
                PEAC verification options
              </ExtLink>
            </li>
          </ul>
        </ArticleDoc>

        <ArticleRelated
          links={[
            { label: 'An AI agent audit trail has to survive the handoff', href: '/blog/ai-agent-audit-trail-handoff' },
            { label: 'An MCP tool call can succeed while the job is unfinished', href: '/blog/mcp-tool-call-audit-evidence' },
            { label: 'AI gateway decision records', href: '/ai-gateway' },
          ]}
        />
      </PageShell>
    </>
  )
}
