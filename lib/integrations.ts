export type IntegrationStatus = 'available' | 'preview' | 'draft' | 'research';

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
    status: 'available',
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
      'Open-source MCP server with five tools for verifying, inspecting, and issuing interaction records. Works with Claude Desktop, Cursor, and any MCP client.',
    status: 'available',
    docUrl: '/integrations/mcp',
    specUrl: 'https://modelcontextprotocol.io',
    productTags: ['MCP Server', 'Verify']
  },
  {
    slug: 'a2a',
    title: 'Agent-to-Agent (A2A)',
    summary:
      'Carry verifiable interaction records through A2A metadata. Prove authorization and policy compliance across agent hops.',
    status: 'available',
    docUrl: '/integrations/a2a',
    productTags: ['Verify', 'PEAC Core']
  },
  {
    slug: 'aipref',
    title: 'AI Preferences (AIPREF)',
    summary:
      'Machine-readable AI access policies. Publish preferences and enforce them with verifiable interaction records.',
    status: 'available',
    docUrl: '/integrations/aipref',
    specUrl: 'https://datatracker.ietf.org/',
    productTags: ['PEAC Core']
  },
  {
    slug: 'peac',
    title: 'PEAC Protocol',
    summary:
      'The open standard for verifiable interaction records. Policy discovery, signed record format, and deterministic verification.',
    status: 'available',
    specUrl: 'https://www.peacprotocol.org',
    productTags: ['PEAC Core']
  },
  {
    slug: 'acp',
    title: 'Agentic Commerce Protocol (ACP)',
    summary:
      'Protocol support for agent-initiated commerce. Verifiable interaction records for agent transactions.',
    status: 'draft',
    docUrl: '/integrations/acp',
    productTags: ['PEAC Core']
  }
];
