export type IntegrationStatus = 'live' | 'coming_soon' | 'draft';

export type Integration = {
  slug: string;
  title: string;
  summary: string;
  status: IntegrationStatus;
  docUrl?: string;     // internal integration guide
  specUrl?: string;    // external spec
  demoUrl?: string;    // live demo endpoint
  openapiUrl?: string; // OpenAPI file
  postmanUrl?: string; // Postman collection
  productTags?: string[]; // ['PEAC Core','Verify API',...]
};

export const INTEGRATIONS: Integration[] = [
  {
    slug: 'x402',
    title: 'x402 (HTTP 402)',
    summary:
      'Internet-native payments in the request/response loop. Challenge with 402, pay on your chosen rail, return with a verifiable receipt.',
    status: 'live',
    docUrl: '/integrations/x402',
    demoUrl: '/api/x402-demo',
    openapiUrl: '/openapi/x402-demo.yaml',
    postmanUrl: '/postman/x402-demo.json',
    productTags: ['Gateway 402', 'Verify API']
  },
  {
    slug: 'mcp',
    title: 'Model Context Protocol (MCP)',
    summary:
      'Receipts for LLM tool calls and context sharing. Attach and verify PEAC-Receipts across MCP tools for audit and policy compliance.',
    status: 'coming_soon',
    docUrl: '/integrations/mcp',
    specUrl: 'https://modelcontextprotocol.io',
    productTags: ['Adapters', 'Verify API']
  },
  {
    slug: 'a2a',
    title: 'Agent-to-Agent (A2A)',
    summary:
      'Verifiable chains of agent interactions. Pass PEAC-Receipts between agents to prove authorization and payment history.',
    status: 'live',
    docUrl: '/integrations/a2a',
    productTags: ['Verify API', 'PEAC Core']
  },
  {
    slug: 'aipref',
    title: 'AI Preferences (AIPREF)',
    summary:
      'Machine-readable AI access policies. Publish `/.well-known/aipref.json` and enforce policies with verifiable receipts.',
    status: 'coming_soon',
    docUrl: '/integrations/aipref',
    specUrl: 'https://datatracker.ietf.org/',
    productTags: ['PEAC Core']
  },
  {
    slug: 'peac',
    title: 'PEAC Protocol',
    summary:
      'Provenance-Enhanced Access and Consent. The open protocol for receipts, policy, and settlement across the agentic web.',
    status: 'live',
    specUrl: 'https://www.peacprotocol.org',
    productTags: ['PEAC Core']
  },
  {
    slug: 'acp',
    title: 'Agent Communication Protocol (ACP)',
    summary:
      'Structured communication for autonomous agents. PEAC-compatible messaging with verifiable receipts and policy enforcement.',
    status: 'coming_soon',
    docUrl: '/integrations/acp',
    productTags: ['PEAC Core', 'Adapters']
  }
];
