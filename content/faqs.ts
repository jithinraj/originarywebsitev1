// FAQ content per page
// Each FAQ item has a question (q) and answer (a)
// Answers are direct and non-marketing

export type FaqItem = { q: string; a: string }

export const homeFaqs: FaqItem[] = [
  {
    q: 'What is Originary?',
    a: 'Originary builds tools and services for issuing and verifying PEAC interaction records. PEAC is the open standard; Originary is one production-grade implementation.'
  },
  {
    q: 'What is a PEAC receipt (interaction record)?',
    a: 'A PEAC receipt is a signed record of an automated request and the decision made under published terms. It is designed to be portable so third parties can verify it later.'
  },
  {
    q: 'Do I need Originary to verify receipts?',
    a: 'No. Verification is designed to work offline using public keys and the published policy surface. Originary can optionally host verification infrastructure.'
  },
  {
    q: 'What problem does this solve?',
    a: 'Automated requests usually leave logs that are not portable or independently verifiable. PEAC receipts make compliance, audits, and disputes evidence-based rather than screenshot-based.'
  },
  {
    q: 'What should I try first?',
    a: 'Verify a sample receipt in the verifier, then follow the quickstart to issue receipts from a real endpoint.'
  }
]

export const verifyFaqs: FaqItem[] = [
  {
    q: 'What can I paste into the verifier?',
    a: 'A PEAC receipt value (the signed token). The verifier checks structure, signature, expiry, and policy binding.'
  },
  {
    q: 'What does "Signature verified" mean?',
    a: 'It means the receipt matches the issuer\'s published public key and has not been tampered with since issuance.'
  },
  {
    q: 'Why might verification fail?',
    a: 'Common reasons include an unknown key id, expired receipt, malformed token, mismatched issuer, or missing policy binding information.'
  },
  {
    q: 'Do you store what I paste here?',
    a: 'This demo verifier runs entirely in your browser. No data is sent to our servers. Production verification endpoints would clearly state their data handling policies.'
  },
  {
    q: 'Can I self-host verification?',
    a: 'Yes. Verification is designed to run in your own infrastructure using published keys and PEAC policy files.'
  }
]

export const declareFaqs: FaqItem[] = [
  {
    q: 'What is Policy Kit?',
    a: 'Policy Kit helps you publish machine-readable access terms and keep them consistent across environments (origin, edge, gateway).'
  },
  {
    q: 'Where do I publish policy?',
    a: 'Prefer /.well-known/peac.txt, with a fallback location if needed. Policies should be fetchable by any client before access.'
  },
  {
    q: 'Can I set different terms by path or agent type?',
    a: 'Yes. Policies can express different requirements by route, and can distinguish access classes when needed.'
  },
  {
    q: 'How do receipts relate to policy?',
    a: 'Receipts bind to the relevant policy state so later verification can evaluate what terms applied at the time of the interaction.'
  },
  {
    q: 'Does Policy Kit force payments?',
    a: 'No. Settlement is optional and rail-neutral. Policy describes requirements; receipts record what was enforced.'
  }
]

export const peacFaqs: FaqItem[] = [
  {
    q: 'What is PEAC?',
    a: 'PEAC is an open standard for publishing interaction terms and producing verifiable interaction records for automated requests.'
  },
  {
    q: 'Is PEAC open source?',
    a: 'Yes. The goal is independent implementations and consistent verification behavior across vendors.'
  },
  {
    q: 'How does PEAC relate to x402, MCP, A2A, ACP, AIPREF?',
    a: 'PEAC is designed to interoperate. It focuses on the record and verification layer, while other standards cover payments, agent frameworks, or preference signaling.'
  },
  {
    q: 'What is conformance?',
    a: 'Conformance defines deterministic rules and test vectors so multiple implementations produce verifiable, compatible results.'
  },
  {
    q: 'How can I contribute?',
    a: 'Start with the spec, conformance tests, and reference implementation. Contributions that improve interoperability and determinism are highest value.'
  }
]
