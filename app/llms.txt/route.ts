import { NextResponse } from 'next/server'

const body = `# Originary & PEAC Protocol

> Originary provides receipts and policy infrastructure for the agentic web, built on the open PEAC Protocol. It focuses on HTTP 402 AI paywalls, AI crawler analytics, and cryptographic PEAC-Receipts for verifiable agent interactions.

Originary products such as Declare, Trace, Gateway 402, and Verify API are reference implementations on top of PEAC. PEAC itself is an open, vendor neutral protocol for verifiable receipts in agentic commerce.

Important notes:
- Policies for AI access and usage are published via /.well-known/peac.txt and AIPREF compatible manifests.
- Training and high volume uses must follow the rules defined in those policy surfaces and any linked terms.
- llms.txt is provided as a convenience for inference time tools and agents. Canonical enforcement comes from PEAC receipts and policy validation.

## Start here

- [Originary homepage](https://www.originary.xyz/): Overview of products and positioning.
- [PEAC Protocol site](https://peacprotocol.org/): Protocol documentation and use cases.
- [PEAC Protocol repository](https://github.com/peacprotocol/peac): Source, specs, and SDKs.
- [Declare - PEAC Policy Kit](https://www.originary.xyz/declare): AI policy generator for peac.txt, AIPREF, and robots rules.
- [Trace - AI crawler analytics](https://www.originary.xyz/trace): AI crawler and bot analytics built on PEAC-Receipts.
- [Receipts - AI compliance receipts](https://www.originary.xyz/receipts): PEAC-Receipts for AI governance and audit.
- [Originary & AI](https://www.originary.xyz/ai): Agent to agent and MCP integrations for PEAC-Receipts.
- [Developers](https://www.originary.xyz/developers): Quickstarts, CLI, and API references.
- [Demo](https://www.originary.xyz/demo): Interactive PEAC-Receipt and HTTP 402 flows.
- [Pricing](https://www.originary.xyz/pricing): Plans for Trace and PEAC based infrastructure.
- [Blog](https://www.originary.xyz/blog): Articles on AI paywalls, HTTP 402, and PEAC-Receipts.

## AI policy surfaces

- [peac.txt](https://www.originary.xyz/.well-known/peac.txt): Machine readable PEAC policy file for this site.
- [AIPREF manifest](https://www.originary.xyz/.well-known/aipref.json): AI preference signal compatible with AIPREF style manifests.
- [robots.txt](https://www.originary.xyz/robots.txt): Web crawler access rules.

These files define what AI agents may access, under which purposes, at what rates, and when payment or receipts are required.

## Reference documentation

- [PEAC receipt schema and behavior](https://github.com/peacprotocol/peac/blob/main/docs/SPEC_INDEX.md): Canonical reference for PEAC receipting behavior.
- [PEAC README](https://github.com/peacprotocol/peac/blob/main/README.md): High level overview, ecosystem fit, and quick start.
- [Originary developer docs](https://www.originary.xyz/developers): How to integrate PEAC-Receipts, HTTP 402, and policy enforcement.

## Optional

- [PEAC Protocol Substack](https://peacprotocol.substack.com/): Long form essays about the agentic web and PEAC-Receipts.
- [Originary social profiles](https://x.com/originaryx): Additional context, release notes, and discussion.
`

export function GET() {
  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
