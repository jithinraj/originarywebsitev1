// Sample PEAC-Receipt for demonstration purposes
// This is a valid JWT structure that can be decoded locally
// Header: { alg: "EdDSA", typ: "peac-receipt/0.1", kid: "2025-01-key1" }
// Payload: { iss: "originary.xyz", iat: 1737290800, resource: "/api/content", decision: "allow", policy: "sha256:abcd1234" }

// Base64URL encode helper (for reference - these are pre-computed)
// Header: eyJhbGciOiJFZERTQSIsInR5cCI6InBlYWMtcmVjZWlwdC8wLjEiLCJraWQiOiIyMDI1LTAxLWtleTEifQ
// Payload: eyJpc3MiOiJvcmlnaW5hcnkueHl6IiwiaWF0IjoxNzM3MjkwODAwLCJyZXNvdXJjZSI6Ii9hcGkvY29udGVudCIsImRlY2lzaW9uIjoiYWxsb3ciLCJwb2xpY3kiOiJzaGEyNTY6YWJjZDEyMzQifQ

export const SAMPLE_RECEIPT = {
  // The full JWT token (header.payload.signature)
  // Note: signature is a demo placeholder - in production this would be a real Ed25519 signature
  token: 'eyJhbGciOiJFZERTQSIsInR5cCI6InBlYWMtcmVjZWlwdC8wLjEiLCJraWQiOiIyMDI1LTAxLWtleTEifQ.eyJpc3MiOiJvcmlnaW5hcnkueHl6IiwiaWF0IjoxNzM3MjkwODAwLCJyZXNvdXJjZSI6Ii9hcGkvY29udGVudCIsImRlY2lzaW9uIjoiYWxsb3ciLCJwb2xpY3kiOiJzaGEyNTY6YWJjZDEyMzQifQ.demo_signature_placeholder',

  // Pre-decoded values for display (matches the JWT payload)
  decoded: {
    header: {
      alg: 'EdDSA',
      typ: 'peac-receipt/0.1',
      kid: '2025-01-key1'
    },
    payload: {
      iss: 'originary.xyz',
      iat: 1737290800, // 2025-01-19T12:00:00Z
      resource: '/api/content',
      decision: 'allow',
      policy: 'sha256:abcd1234'
    }
  },

  // Metadata about this fixture
  meta: {
    description: 'Sample PEAC-Receipt for homepage demo widget',
    note: 'Signature is a placeholder - this demonstrates JWT structure and local decoding only',
    generatedAt: '2025-01-19'
  }
}

export default SAMPLE_RECEIPT
