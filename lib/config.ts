// Site configuration - Poem, Inc. (US Company)
// No DBA, trademark-only usage, Stripe-ready

// Company information
export const COMPANY_LEGAL_NAME = "Poem, Inc.";
export const COMPANY_BRAND = "Originary";
export const COMPANY_ADDRESS = "1111B S Governors Ave, STE 40987, Dover, DE 19904, USA";
export const COMPANY_PHONE_DISPLAY = "+1 415 707 0402";   // Display format for website
export const COMPANY_PHONE_E164 = "+14157070402";         // E.164 format for structured data
export const COMPANY_EMAIL = "contact@originary.xyz";
export const LEGAL_EMAIL = "legal@originary.xyz";
export const PRIVACY_EMAIL = "privacy@originary.xyz";
export const TRADEMARK_LEGEND = "Originary™ is a trademark of Poem, Inc.";
export const GOVERNING_LAW = "Delaware, USA";
export const VENUE = "state or federal courts in Delaware, USA";

// Payment configuration (Stripe)
export const STRIPE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
export const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;
export const PRICE_DEV1 = process.env.PRICE_DEV1; // $1 activation
export const PRICE_PRO = process.env.PRICE_PRO;   // Professional subscription

// Site configuration
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.originary.xyz";
export const SITE_NAME = "Originary";
export const SITE_TAGLINE = "Verification for Automated Interactions";
export const SITE_DESCRIPTION = "Originary provides verification infrastructure for automated interactions. Issue, verify, and handoff interaction records with the open PEAC standard.";

// Protocol reference
export const PROTOCOL_NAME = "PEAC Protocol";
export const PROTOCOL_URL = "https://www.peacprotocol.org";
export const PROTOCOL_GITHUB = "https://github.com/peacprotocol";

// Trademark usage
export const ORIGINARY_TM = "Originary™"; // Use on first mention per page
export const ORIGINARY = "Originary";     // Use on subsequent mentions
