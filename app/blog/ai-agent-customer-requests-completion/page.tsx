import Link from 'next/link'
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
import { DelegatedRequestStatus, CompletionPerspectives } from '@/components/blog/figures/CommerceRequestFigures'

const SLUG = 'ai-agent-customer-requests-completion'

export const metadata = seriesMetadata(SLUG, 'AI Agent Customer Service: Did You Finish? | Originary')

const jsonLd = seriesJsonLd(SLUG, [
  'AI agent customer service',
  'delegated requests',
  'cancellation status',
  'completion evidence',
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(jsonLd)} />
      <PageShell>
        <ArticleDoc
          category="agents"
          title="Your next customer may be an agent. Can it tell whether you finished?"
          sub="Businesses handling delegated requests need to make acceptance and completion distinguishable."
          author="Originary"
          date="2026-10-11"
          readTime="6 min read"
          parent={{ label: 'Blog', href: '/blog' }}
          plate={<ArticlePlate slug={SLUG} category="agents" keyword={seriesPart(SLUG)} />}
        >
          <p>
            A customer asks an agent to cancel a subscription before renewal. The agent submits the
            request and receives a polite response: &ldquo;We&rsquo;ve received your cancellation
            request.&rdquo;
          </p>
          <p>Should it stop?</p>
          <p>
            In this hypothetical example, the business has opened a support ticket. The
            subscription is still active. If the agent reports completion, the customer may discover
            the mistake only when the next charge arrives. If it keeps submitting requests, the
            business gets duplicate tickets.
          </p>
          <p>
            The problem is familiar to anyone who has dealt with an unresolved support case.
            Delegating the interaction to an agent makes the ambiguity an input to software: should
            it wait, retry, escalate, or tell the customer the job is done?
          </p>
          <p>A fluent reply is not enough information to make that choice.</p>

          <h2>AI agent customer service needs a defined outcome</h2>
          <p>Before designing an agent-facing interface, define the operation from the business&rsquo;s perspective.</p>
          <p>
            For a subscription, &ldquo;cancel&rdquo; might mean stopping the next renewal while
            retaining access until the paid period ends. It might mean immediate termination. A
            refund is a separate question. The agent needs to know which operation the business
            accepted and its effective date.
          </p>
          <p>
            An address update has a different boundary. Updating the customer profile may leave an
            order already in fulfillment unchanged. A return request can be accepted while the
            refund remains conditional on receiving and inspecting the item.
          </p>
          <p>
            Those distinctions already exist in business systems. Expose them accurately rather than
            asking an agent to infer them from a support message.
          </p>
          <p>
            A useful response identifies the requested operation, the relevant object, its current
            status, and the next step. Completion should refer to a defined business state, not
            simply the end of a conversation.
          </p>

          <h2>Give the agent enough state to choose its next action</h2>
          <p>Here is one possible status model for a delegated request:</p>
          <EvidenceTable
            head={['Status', 'What it tells the caller']}
            rows={[
              ['Received', 'The business recorded the request'],
              ['Needs information', 'Processing is waiting for specified input'],
              ['Accepted', 'The business accepted the operation for processing'],
              ['In progress', 'Work continues; completion has not been reported'],
              ['Completed', 'The responsible system reports the defined outcome'],
              ['Rejected or failed', 'The business reports a reason and any available next step'],
            ]}
          />

          <ArticleFigure
            label="fig. 01"
            caption="One possible status model, not a PEAC schema. The polite reply lands at Received; Completed comes from the system that owns the outcome."
            plate
          >
            <FigureFrame>
              <DelegatedRequestStatus />
            </FigureFrame>
          </ArticleFigure>

          <p>
            This is an application design recommendation, not a PEAC schema or a claim that every
            business uses these states. Some workflows need fewer states. Others need explicit
            expiry, cancellation, or review states.
          </p>
          <p>
            The interface should also give the agent a stable request reference and a documented
            way to check status. Tell it when to check again and when further input is necessary.
            Repeated submission should not be the only way to ask what happened.
          </p>
          <p>
            An agent can then distinguish waiting from failure. The business can reduce ambiguity
            without turning every interaction into another conversation.
          </p>

          <h2>A completion record should come from the responsible system</h2>
          <p>
            For the subscription example, the billing system is the relevant source for whether
            renewal was disabled. A support system can report that it opened a ticket. The
            customer&rsquo;s agent can report that it received a reply. Those are useful
            observations, but they do not have the billing system&rsquo;s perspective.
          </p>

          <ArticleFigure
            label="fig. 02"
            caption="Three observers of one cancellation. Only the billing system can report whether renewal was disabled."
          >
            <FigureFrame>
              <CompletionPerspectives />
            </FigureFrame>
          </ArticleFigure>

          <p>
            A completion record could preserve the subscription reference, the operation performed,
            the effective date, and the state the issuer reported. It should include only the
            customer information needed for the recipient&rsquo;s review.
          </p>
          <p>
            If a collector issues a signed record based on a billing export, identify the
            collector&rsquo;s role. Its signature protects the statement it makes about that export.
            It does not turn an unsigned billing event into a billing-provider signature.
          </p>
          <p>
            PEAC Protocol provides a format for portable signed interaction records. It can be used
            around these observations, subject to the workflow&rsquo;s mapping and evidence rules.
            It does not create the request-status service, disable the subscription, or establish
            whether the business is entitled to charge the customer.
          </p>
          <p>Those responsibilities remain with the application and its operating policies.</p>

          <h2>Preserve a history when the outcome changes</h2>
          <p>Suppose the business reports that renewal is disabled. Later, an administrator reactivates it.</p>
          <p>
            The earlier record may still be a valid signed statement about what its issuer reported
            at that time. It should not be treated as a guarantee of the current state. The later
            change needs its own record and a clear relationship to the subscription and earlier
            operation.
          </p>
          <p>
            Keep status observations distinct from promises about the future. A signed effective
            date does not ensure every downstream system will honor it. A customer may still need a
            later billing event or state check to assess a disputed charge.
          </p>
          <p>
            Likewise, if an agent acknowledges a completion response, record what it acknowledged.
            Receiving the business&rsquo;s statement is different from independently checking the
            business state. An acknowledgment should not silently mean satisfaction, giving up a claim, or
            acceptance of unrelated terms.
          </p>
          <p>
            Precise records give both parties something useful to compare when the expected outcome
            and later state diverge.
          </p>

          <h2>Authentication still comes before execution</h2>
          <p>
            An incoming request needs appropriate authentication and authorization. A cancellation
            may require account access or a supported delegation mechanism. A machine-readable
            request is not inherently authorized, and a signed post-action record does not grant
            authority retroactively.
          </p>
          <p>
            The business also needs controls for duplicate submissions, abusive request volume,
            conflicting instructions, and withdrawal of authority. Record design helps review those
            events. The service itself must enforce the rules.
          </p>
          <p>
            For the agent, user approval is another scoped event. Permission to cancel one
            subscription should not become permission to close every account with the same
            merchant. Preserve the target and scope when the workflow requires them for review.
          </p>

          <h2>Start with one request whose outcome is already well defined</h2>
          <p>
            Subscription cancellation is a useful design exercise because the business can specify
            a concrete result: the responsible billing system reports renewal disabled for a
            particular subscription from a particular date.
          </p>
          <p>
            Implement request tracking and status retrieval first. Then decide which observations
            need signed records because another party must review them later. Test whether a
            separate recipient can connect the request to the reported result and identify what
            remains unverified.
          </p>
          <p>
            The metrics should reflect the workflow: how often the caller can distinguish
            acknowledgment from completion, how many duplicate submissions occur, and how much
            reconstruction a later escalation requires. Establish a baseline before claiming
            improvement.
          </p>
          <p>
            This is a product hypothesis worth testing with businesses handling delegated requests.
            It is not evidence that every customer interaction needs a new protocol, or that every
            business needs another support platform.
          </p>
          <p>
            Originary&rsquo;s role is the record and verification handoff where those records are
            useful.
          </p>
          <PullLine>
            The business still serves the customer. The agent still acts within the customer&rsquo;s
            authority. Both should be able to retain a precise account of the result they were
            given.
          </PullLine>

          <NextStep actions={[{ label: 'Talk to Originary', href: '/contact' }]}>
            Talk to Originary about a delegated-request workflow. Bring one request, the system that
            owns its outcome, and the party who needs to review it.
          </NextStep>

          <SeriesIndex current={SLUG} />

          <h2>Further reading</h2>
          <ul>
            <li>
              <ExtLink href="https://github.com/peacprotocol/peac">
                PEAC Protocol source and interaction record model
              </ExtLink>
            </li>
            <li>
              <Link href="/evidence-case">Originary&rsquo;s illustrative evidence case</Link>
            </li>
          </ul>
        </ArticleDoc>

        <ArticleRelated
          links={[
            { label: 'An AI agent audit trail has to survive the handoff', href: '/blog/ai-agent-audit-trail-handoff' },
            { label: 'The agent paid. What did it receive?', href: '/blog/agentic-commerce-payment-fulfillment-evidence' },
            { label: 'Originary evidence case', href: '/evidence-case' },
          ]}
        />
      </PageShell>
    </>
  )
}
