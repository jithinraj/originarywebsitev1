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
import { RefundEvidenceLevels, TimeoutRetrySequence } from '@/components/blog/figures/McpToolCallFigures'

const SLUG = 'mcp-tool-call-audit-evidence'

export const metadata = seriesMetadata(SLUG, 'MCP Tool Audit Logs: Success Is Not Completion | Originary')

const jsonLd = seriesJsonLd(SLUG, [
  'MCP tool audit logs',
  'MCP tool call evidence',
  'agent approvals',
  'tool execution errors',
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(jsonLd)} />
      <PageShell>
        <ArticleDoc
          category="mcp"
          title="An MCP tool call can succeed while the job is unfinished"
          sub="Record the result at the level where the result happened."
          author="Originary"
          date="2026-10-11"
          readTime="6 min read"
          parent={{ label: 'Blog', href: '/blog' }}
          plate={<ArticlePlate slug={SLUG} category="mcp" keyword={seriesPart(SLUG)} />}
        >
          <p>
            A support agent calls a tool to refund an order. The tool returns a refund identifier.
            The agent tells the customer the refund is complete.
          </p>
          <p>
            In this hypothetical workflow, the payment provider has accepted the request for
            processing. The customer&rsquo;s money has not arrived yet.
          </p>
          <p>The tool did its job. The agent&rsquo;s summary still went too far.</p>
          <p>
            This is an evidence problem as much as a wording problem. If the only durable record
            says &ldquo;refund successful,&rdquo; a later reviewer cannot tell whether that means the
            tool ran, the provider accepted a refund, or the customer received the funds.
          </p>
          <p>
            MCP makes tools available to agents. The meaning of a business outcome still has to come
            from the systems responsible for that outcome.
          </p>

          <ArticleFigure
            label="fig. 01"
            caption="The tool result supports the first three events. The agent&rsquo;s summary claimed all five."
            plate
          >
            <FigureFrame>
              <RefundEvidenceLevels />
            </FigureFrame>
          </ArticleFigure>

          <h2>Tool results have a specific scope</h2>
          <p>
            The{' '}
            <ExtLink href="https://modelcontextprotocol.io/specification/2026-07-28/server/tools">
              MCP tools specification
            </ExtLink>{' '}
            distinguishes protocol errors from tool execution errors. A tool can return a result
            containing an execution error, indicated by <code>isError: true</code>. Receiving a
            result message is therefore not the same as successful execution.
          </p>
          <p>
            Even a result with no reported tool error has a limit. It tells the client what the
            server returned. A successful submission to a downstream service may still require later
            processing. A valid output schema tells you the result has the expected structure; it
            does not establish that every claim in the result is correct.
          </p>
          <p>
            The{' '}
            <ExtLink href="https://tasks.extensions.modelcontextprotocol.io/specification/2026-07-28/tasks">
              MCP Tasks extension, in its revision dated July 28, 2026
            </ExtLink>
            , makes this separation explicit: a task can reach <code>completed</code> while its tool
            result contains <code>isError: true</code>. That status reflects protocol completion,
            not a successful business outcome. The extension is versioned separately and continues
            to change, so check the revision your implementation uses. The lesson for audit design
            holds regardless: inspect the result as well as the terminal status.
          </p>
          <p>
            Tool annotations also need care. A tool described as read-only or idempotent is making a
            behavioral claim. The MCP specification tells clients to treat annotations as untrusted
            unless they come from trusted servers. An annotation is no substitute for the access
            controls and enforcement around a consequential call.
          </p>
          <p>
            For audit purposes, record the tool result at its actual level of certainty.
            &ldquo;Provider accepted refund request&rdquo; is useful. &ldquo;Customer
            refunded&rdquo; requires evidence supporting that later state.
          </p>

          <h2>Approval, invocation, and outcome are separate events</h2>
          <p>For the refund example, review should distinguish at least these events:</p>
          <ol>
            <li>An approval system permitted a refund for a specific order and amount.</li>
            <li>The tool server received an invocation with specific arguments.</li>
            <li>The server reported a downstream response with a refund identifier.</li>
            <li>The provider later reported a status for that refund.</li>
          </ol>
          <p>
            If the customer or another system supplies a receipt observation, that is another event
            with another source. It should retain that source.
          </p>
          <p>
            These distinctions matter when the amounts differ. Suppose the approval allows
            &#8377;2,000, but the tool invocation requests &#8377;2,500. A record of a valid
            approval is insufficient unless the review compares its scope with the actual
            invocation.
          </p>
          <p>
            The same applies to time and target. An approval for one account cannot establish
            authority for another. An expired approval may remain a validly signed artifact while
            being unsuitable for a later action. Authorization enforcement belongs in the execution
            path; review must preserve enough evidence to assess what that path reported doing.
          </p>

          <h2>What useful MCP tool audit evidence contains</h2>
          <p>
            Start with a consequential tool, such as changing an entitlement or submitting a refund.
            Preserve enough information to answer a concrete review question.
          </p>
          <EvidenceTable
            head={['Review question', 'Material to preserve']}
            rows={[
              ['Which tool was invoked?', 'Tool identity and the service exposing it'],
              ['What action was requested?', 'Necessary arguments or a documented, inspectable representation'],
              ['What approval applied?', 'Approval reference, scope, and relevant validity period'],
              ['What did the server report?', 'Result, error state, and downstream references'],
              ['Was this a retry?', 'Logical operation reference and a distinct attempt reference'],
              ['Who can assess the outcome?', 'The responsible downstream system and its native evidence'],
            ]}
          />
          <p>
            This is a review design, not a proposed MCP message schema. The exact mapping depends on
            the tool and the record format in use.
          </p>
          <p>
            Signing a tool-server record makes its statement portable and protects its integrity. It
            does not make the tool server an independent witness to everything beyond it. If an
            exporter signs a statement derived from a tool log, identify the exporter as the signer
            and preserve the transformation it performed.
          </p>
          <p>
            An argument digest is useful when the reviewer has the corresponding representation and
            can recompute it. Without that material, it is a commitment to content the reviewer
            cannot inspect. Report that limit rather than presenting the digest as proof that the
            arguments were acceptable.
          </p>

          <h2>Timeouts deserve their own evidence</h2>
          <p>
            Imagine the refund request reaches the provider, but the tool server times out before
            receiving the response. The agent retries.
          </p>
          <p>
            The first timeout does not establish that no refund was created. The second invocation
            does not establish that two refunds were created. Resolving the uncertainty requires the
            provider&rsquo;s state and the workflow&rsquo;s retry semantics.
          </p>

          <ArticleFigure
            label="fig. 02"
            caption="Two attempts, one intended operation. The log alone cannot say how many refunds exist; the provider&rsquo;s state and the retry contract can."
          >
            <FigureFrame>
              <TimeoutRetrySequence />
            </FigureFrame>
          </ArticleFigure>

          <p>
            Preserve both attempts. Connect them to the same intended operation without collapsing
            their different observations. Keep idempotency enforcement in the tool and downstream
            service; signed records document attempts and reported results but cannot prevent
            duplicate execution.
          </p>
          <PullLine>
            The uncomfortable state is sometimes the accurate one: &ldquo;Request sent; downstream
            result unknown.&rdquo;
          </PullLine>
          <p>
            An agent should be able to carry that uncertainty into its response instead of
            converting it into success or failure for conversational convenience.
          </p>

          <h2>Make the recipient part of the design</h2>
          <p>
            A tool audit trail becomes useful when someone can act on it. For the refund workflow,
            that might be a finance operator checking duplicate refunds or a merchant answering a
            customer&rsquo;s escalation.
          </p>
          <p>
            Design the handoff for that recipient. Include the records they need, identify the
            issuers they accept, and preserve provider evidence under its own verification rules.
            Explain what is missing. Do not require a full transcript if scoped evidence answers the
            question.
          </p>
          <p>
            PEAC Protocol provides signed interaction records that can accompany MCP workflows.
            Originary&rsquo;s work is to help select, issue, verify, and hand off those records for
            review. Neither the record nor its signature takes over the tool&rsquo;s execution or
            the payment provider&rsquo;s state machine.
          </p>
          <p>
            For a first implementation, pick one write operation and one failure worth
            investigating. Run the normal path, an approval mismatch, and a timeout followed by a
            retry. Give the resulting evidence to the person responsible for reconciliation.
          </p>
          <p>
            The acceptance criterion is whether they can distinguish an authorized request, a
            reported execution, and an unresolved outcome. A tool call counter cannot make that
            distinction for them.
          </p>

          <NextStep
            actions={[
              {
                label: 'PEAC MCP integration kit',
                href: 'https://github.com/peacprotocol/peac/blob/main/integrator-kits/mcp/README.md',
              },
              { label: 'Explore a verification pilot', href: '/product' },
            ]}
          >
            Start with the PEAC MCP integration kit or explore a verification pilot with Originary.
          </NextStep>

          <SeriesIndex current={SLUG} />

          <h2>Sources</h2>
          <ul>
            <li>
              <ExtLink href="https://modelcontextprotocol.io/specification/2026-07-28/server/tools">
                MCP tools specification, July 28, 2026
              </ExtLink>
            </li>
            <li>
              <ExtLink href="https://tasks.extensions.modelcontextprotocol.io/specification/2026-07-28/tasks">
                MCP Tasks extension, July 28, 2026 revision
              </ExtLink>
            </li>
            <li>
              <ExtLink href="https://github.com/peacprotocol/peac/blob/main/integrator-kits/mcp/README.md">
                PEAC MCP integration kit
              </ExtLink>
            </li>
          </ul>
        </ArticleDoc>

        <ArticleRelated
          links={[
            { label: 'The agent paid. What did it receive?', href: '/blog/agentic-commerce-payment-fulfillment-evidence' },
            { label: 'When a customer asks why your AI gateway allowed a request', href: '/blog/ai-gateway-audit-logs-policy-decisions' },
            { label: 'Records for MCP tool calls', href: '/mcp' },
          ]}
        />
      </PageShell>
    </>
  )
}
