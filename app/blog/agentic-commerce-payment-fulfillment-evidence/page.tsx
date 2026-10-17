import { PageShell, ArticleDoc, ArticleRelated } from '@/components/home'
import {
  ArticlePlate,
  ArticleFigure,
  FigureFrame,
  SeriesIndex,
  EvidenceTable,
  FindingsCard,
  NextStep,
  PullLine,
  ExtLink,
  seriesPart,
  seriesMetadata,
  seriesJsonLd,
  jsonLdHtml,
} from '@/components/blog'
import { PurchaseParts } from '@/components/blog/figures/CommerceRequestFigures'

const SLUG = 'agentic-commerce-payment-fulfillment-evidence'

export const metadata = seriesMetadata(SLUG, 'Agentic Commerce Evidence: Payment vs. Delivery | Originary')

const jsonLd = seriesJsonLd(SLUG, [
  'agentic commerce evidence',
  'payment receipts',
  'paid API delivery',
  'payment versus fulfillment',
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(jsonLd)} />
      <PageShell>
        <ArticleDoc
          category="commerce"
          title="The agent paid. What did it receive?"
          sub="A payment record answers a payment question. Fulfillment needs its own evidence."
          author="Originary"
          date="2026-10-11"
          readTime="6 min read"
          parent={{ label: 'Blog', href: '/blog' }}
          plate={<ArticlePlate slug={SLUG} category="commerce" keyword={seriesPart(SLUG)} />}
        >
          <p>
            Imagine an agent buying a market-data report from an API. It pays the quoted price,
            sends the request, and waits. The provider generates the report, but the connection
            drops before the agent receives the response.
          </p>
          <p>
            The buyer reports that it paid and got nothing. The provider reports that it produced
            the result.
          </p>
          <p>Both accounts could be accurate.</p>
          <p>
            The payment system may resolve whether a payment was authorized, captured, or settled.
            The provider may know what it generated. The buyer may know what arrived. Reviewing the
            purchase requires bringing those observations together without treating one as a
            substitute for another.
          </p>
          <p>
            For agentic commerce, that remains true whether the purchase uses a card, an account
            balance, or an HTTP-native payment flow.
          </p>

          <h2>A purchase has several outcomes</h2>
          <p>For a paid API, separate the commercial question into parts:</p>

          <ArticleFigure
            label="fig. 01"
            caption="Seven parts of one purchase. The payment system answers one of them; the rest need evidence from the provider, the buyer, and the agreed terms."
            plate
          >
            <FigureFrame>
              <PurchaseParts />
            </FigureFrame>
          </ArticleFigure>

          <EvidenceTable
            head={['Part of the purchase', 'Question the evidence should answer']}
            rows={[
              ['Offer', 'What resource, price, and terms were presented?'],
              ['Authority', 'What purchase did the caller report being permitted to make?'],
              ['Payment', 'What state does the responsible payment system support?'],
              ['Production', 'What result did the provider report generating?'],
              ['Transmission', 'What did the provider report sending?'],
              ['Receipt', 'What did the buyer report receiving?'],
              ['Acceptance', 'Did the result meet the agreed criteria?'],
            ]}
          />
          <p>
            Treat the table as a review structure rather than a universal transaction model. A synchronous
            data request and a long-running research job will have different evidence and
            acceptance criteria.
          </p>
          <p>
            For the market-data example, the buyer&rsquo;s criteria might specify the instrument,
            date range, output format, and freshness requirement. Receiving a file does not
            establish that the file satisfies those terms. A correct content digest does not
            establish that the market data is accurate.
          </p>
          <p>Agree on the relevant outcome before deciding what a receipt should contain.</p>

          <h2>Payment evidence stays tied to the payment system</h2>
          <p>
            Authorization, capture, settlement, and refund are distinct states. Use the upstream
            artifact that supports the state you report. Preserve its identifiers and relevant
            context so the reviewer can evaluate it under the provider&rsquo;s rules.
          </p>
          <p>
            A reference to a payment is not verification of that payment. A signed wrapper around a
            provider response is a statement by the wrapper&rsquo;s signer about the material it
            observed. The wrapper does not acquire the provider&rsquo;s authority or establish a
            stronger state than the original evidence supports.
          </p>
          <p>
            Arrival order also needs care. Stripe&rsquo;s{' '}
            <ExtLink href="https://docs.stripe.com/webhooks">webhook guidance</ExtLink> says event
            delivery is not guaranteed to follow generation order and that duplicate deliveries can
            occur. A commerce timeline should not silently interpret the latest-arriving webhook as
            the latest business state.
          </p>
          <p>
            Retain native event identifiers, distinguish event time from observation time, and use
            the provider&rsquo;s documented state semantics. Resolve uncertainty through the
            provider where necessary. Signed records preserve the account of that process; they do
            not settle money.
          </p>

          <h2>A result digest is useful when its meaning is clear</h2>
          <p>
            Suppose the provider signs a record containing a digest of the generated report. The
            buyer later supplies a file matching that digest.
          </p>
          <p>
            If the digest is correctly computed and checked, the reviewer can establish that the
            supplied file matches the bound representation. This is useful for assessing whether
            both parties are discussing the same artifact.
          </p>
          <p>
            If the buyer supplies no file, the provider&rsquo;s digest does not establish receipt.
            If the file exists but its quality is disputed, a match does not resolve the quality
            dispute. If the API compresses, normalizes, or reformats the output, the binding must
            identify which representation was hashed and how it was produced.
          </p>
          <p>
            These details belong in the verification design. &ldquo;Content verified&rdquo; is too
            vague when it hides whether the check covered bytes, a documented canonical
            representation, or only the presence of a digest field.
          </p>
          <p>
            Also separate connection-level signals from application receipt. A successful write to a
            socket is different from an acknowledgment that the buyer application received a
            complete usable result. Preserve the signal you have and describe it accurately.
          </p>

          <h2>Retries complicate both charging and delivery</h2>
          <p>
            After the connection drops, the agent may retry the purchase. Did it repeat the same
            intended operation, request another report, or create a second payment?
          </p>
          <p>
            That depends on the integration. Stripe&rsquo;s{' '}
            <ExtLink href="https://docs.stripe.com/api/idempotent_requests">
              idempotency documentation
            </ExtLink>{' '}
            describes how an idempotency key lets a client retry a request without repeating the
            operation within the documented conditions. Those conditions belong to Stripe&rsquo;s
            API. Other payment and fulfillment systems need their own retry contracts.
          </p>
          <p>
            Preserve a reference for the intended purchase and separate references for attempts.
            Connect payment and fulfillment records using the identifiers appropriate to each
            system. Do not assume that idempotent payment also makes report generation or delivery
            idempotent.
          </p>
          <p>
            Evidence cannot repair a duplicate charge. It can help the operator determine what each
            attempt reported and which provider state needs reconciliation.
          </p>

          <h2>Make disagreement visible</h2>
          <p>For the interrupted report request, an evidence case might support these findings:</p>

          <ArticleFigure
            label="fig. 02"
            caption="Each finding keeps its source and its status. The open line is the useful part: it tells the operator where to look next."
          >
            <FindingsCard
              title="Evidence case / interrupted report request (illustrative)"
              findings={[
                {
                  status: 'reported',
                  text: 'The payment provider reports a specified payment state.',
                  source: 'payment provider',
                },
                {
                  status: 'reported',
                  text: 'The API provider’s signed record describes a report generated for the requested date range.',
                  source: 'API provider, signed record',
                },
                {
                  status: 'matched',
                  text: 'The available report matches the digest bound by that record.',
                  source: 'reviewer recomputation',
                },
                {
                  status: 'missing',
                  text: 'No buyer acknowledgment of application receipt was supplied.',
                  source: 'buyer',
                },
              ]}
              footer={
                <>
                  <strong>Still open:</strong> the fulfillment question. The case now shows where the
                  missing evidence has to come from.
                </>
              }
            />
          </ArticleFigure>

          <p>
            A single &ldquo;purchase verified&rdquo; badge would have hidden that gap. Here the
            operator can see that the next question goes to the buyer.
          </p>
          <p>
            If the buyer supplies a conflicting observation, preserve it. A reviewer may need to
            compare the attempts, the representations, or the terms. The purpose of the case is to
            make the disagreement inspectable, not to manufacture agreement between two signatures.
          </p>

          <h2>Build for the person who reconciles the exception</h2>
          <p>
            For a paid API provider, the first evidence workflow should serve the operator who
            handles failed purchases and billing questions. That person needs enough information to
            distinguish payment failure, generation failure, interrupted delivery, duplicate
            attempts, and a dispute about the result itself.
          </p>
          <p>
            PEAC Protocol can preserve bounded, signed interaction statements alongside native
            commerce artifacts. Originary helps issue, verify, and package selected records for
            handoff. External payment evidence still needs its own evaluation, and the underlying
            data or service may need a separate acceptance check.
          </p>
          <p>
            A useful pilot does not need every payment rail. It needs one paid endpoint, a specific
            exception, and a recipient who can use the evidence to decide what to investigate or
            reconcile.
          </p>
          <PullLine>
            Start with the interrupted-delivery case. If your export can show what was paid for,
            what the provider reported producing, and where receipt remains unknown, it has already
            improved on a success label that hides all three.
          </PullLine>

          <NextStep
            actions={[
              {
                label: 'PEAC commerce evidence pattern',
                href: 'https://github.com/peacprotocol/peac/blob/main/docs/SOLUTIONS/commerce-evidence-bundle.md',
              },
              { label: 'Discuss a paid API workflow', href: '/contact' },
            ]}
          >
            See PEAC&rsquo;s commerce evidence pattern or discuss a paid API workflow with
            Originary.
          </NextStep>

          <SeriesIndex current={SLUG} />

          <h2>Sources</h2>
          <ul>
            <li>
              <ExtLink href="https://docs.stripe.com/webhooks">Stripe webhook guidance</ExtLink>
            </li>
            <li>
              <ExtLink href="https://docs.stripe.com/api/idempotent_requests">Stripe idempotent requests</ExtLink>
            </li>
            <li>
              <ExtLink href="https://github.com/peacprotocol/peac/blob/main/docs/SOLUTIONS/commerce-evidence-bundle.md">
                PEAC commerce evidence pattern
              </ExtLink>
            </li>
          </ul>
        </ArticleDoc>

        <ArticleRelated
          links={[
            { label: 'An MCP tool call can succeed while the job is unfinished', href: '/blog/mcp-tool-call-audit-evidence' },
            { label: 'Your next customer may be an agent. Can it tell whether you finished?', href: '/blog/ai-agent-customer-requests-completion' },
            { label: 'Evidence for agentic commerce', href: '/agentic-commerce' },
          ]}
        />
      </PageShell>
    </>
  )
}
