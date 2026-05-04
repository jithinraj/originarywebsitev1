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
      'Internet-native payments in the request/response loop. PEAC reads x402 v1/v2 payment responses, maps offer and receipt evidence, and returns PEAC-Receipt as the verifiable record.',
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
      'Carry verifiable interaction records through A2A v1.0.0 metadata. Prove authorization and policy compliance across agent hops.',
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
      'ACP delegated commerce sessions mapped into access, session, payment-observation, and capability evidence without treating session evidence as payment finality.',
    status: 'available',
    docUrl: '/integrations/acp',
    productTags: ['PEAC Core']
  },
  {
    slug: 'paymentauth-mpp',
    title: 'paymentauth / MPP',
    summary:
      'HTTP Payment Authentication and MPP payment-attempt or settlement flows mapped into PEAC evidence so paymentauth receipts and PEAC records can coexist.',
    status: 'available',
    specUrl: 'https://mpp.dev/',
    productTags: ['PEAC Core', 'Gateway 402']
  },
  {
    slug: 'openclaw',
    title: 'OpenClaw',
    summary:
      'Capture OpenClaw agent tool calls with hashed inputs and outputs, then emit tamper-evident signed records asynchronously.',
    status: 'available',
    specUrl: 'https://github.com/peacprotocol/peac/tree/main/packages/adapters/openclaw',
    productTags: ['PEAC Core', 'Verify']
  },
  {
    slug: 'managed-agents',
    title: 'Managed agents and runtime governance',
    summary:
      'Managed-agent event families and runtime-governance observations for sessions, tasks, tool use, MCP calls, permissions, and outcomes.',
    status: 'available',
    specUrl: 'https://github.com/peacprotocol/peac/tree/main/packages/adapters/managed-agents',
    productTags: ['PEAC Core', 'Verify']
  },
  {
    slug: 'supply-chain',
    title: 'in-toto / SLSA',
    summary:
      'Supply-chain mappings connect PEAC signed records to provenance and attestation workflows without replacing existing build systems.',
    status: 'available',
    specUrl: 'https://github.com/peacprotocol/peac/tree/main/packages/mappings',
    productTags: ['PEAC Core']
  }
];
