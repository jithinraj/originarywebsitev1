/**
 * Canonical vocabulary registry. Public copy must use these terms; "receipt"
 * is reserved for commerce or Wire 0.1 compatibility contexts.
 */
export const VOCABULARY = {
  company: 'Originary',
  product: 'Originary Verify',
  protocol: 'PEAC Protocol',
  plainArtifact: 'signed record',
  formalArtifact: 'verifiable interaction record',
  multiRecordArtifact: 'evidence bundle',
} as const
