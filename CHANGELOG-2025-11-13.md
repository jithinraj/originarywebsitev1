# Website Revamp Changelog - November 13, 2025

## Overview
Major website improvements focusing on open source positioning, compliance infrastructure, and world-class quality standards.

## Branch
`site/2025-11-billion-grade-polish`

## Commits
1. **45a6828** - Update content  
2. **48bd7d4** - Update content and add compliance scripts  
3. **d31926d** - Fix ESLint error in about page

---

## Major Changes

### 1. Open Source Positioning
**Added OpenSourceBanner component** to key pages:
- `/pricing` - Shows PEAC Protocol Apache-2.0 licensing with CTAs
- `/integrations` - Emphasizes open protocol foundation
- Component features:
  - Responsive card design with proper spacing
  - Clear messaging: "PEAC Protocol, SDKs, and CLI are free under Apache-2.0"
  - Dual CTAs: "Explore PEAC" and "Developer quickstart"

### 2. Compliance Infrastructure
**Created two compliance checking scripts:**

#### `scripts/check-meta.mjs`
- Verifies SEO metadata on critical pages
- Checks for: title, description, canonical URLs
- Supports both page.tsx and layout.tsx for client components
- Returns exit code 1 on errors (CI-friendly)
- Added to package.json as `npm run check:meta`

#### `scripts/check-tm.mjs`
- Enforces trademark usage rules
- **Critical**: Ensures "PEAC Protocol" NEVER has TM symbol (it's open source)
- Verifies "Originary™" trademark usage in legal pages
- Returns exit code 1 on errors (CI-friendly)
- Added to package.json as `npm run check:tm`

**Test Results:**
```
✨ All trademark checks passed!
✨ All checks passed! (metadata)
```

### 3. Pricing Page Enhancements
**File**: `app/pricing/layout.tsx` + `app/pricing/page.tsx`

**Changes:**
- Added comprehensive OfferCatalog JSON-LD structured data
- Four tiers: OSS ($0), Starter ($29/mo), Pro ($99/mo), Enterprise (Custom)
- Updated metadata: cleaner title format "Pricing : Originary"
- Added OpenSourceBanner component
- Fixed contact link: `/company/contact` → `/contact`
- Improved descriptions to focus on actual capabilities

**JSON-LD Structure:**
```json
{
  "@type": "OfferCatalog",
  "name": "Originary Trace Pricing",
  "itemListElement": [
    // 4 offers with price, currency, billing duration
  ]
}
```

### 4. Integrations Page Updates
**File**: `app/integrations/page.tsx`

**Changes:**
- Added OpenSourceBanner component
- Fixed Script tag: proper `id`, `type`, and `strategy` attributes
- Updated button classes: `button button-primary` → `btn btn-primary`
- Fixed contact link: `/company/contact/` → `/contact`
- Maintained status badges: Live, Coming soon, In draft

**Integrations Listed:**
1. x402 Payments (Live)
2. A2A Attribution (Coming soon)
3. MCP Receipts (Coming soon)
4. ACP Capabilities (In draft)
5. AIPREF Preferences (Coming soon)
6. PEAC Protocol (Live, external link)

### 5. Trademark Compliance
**Files affected:**
- `app/about/page.tsx` - Removed TM from "PEAC Protocol™" → "PEAC Protocol"
- `app/trademark/page.tsx` - Added comprehensive PEAC Protocol section

**New Trademark Page Section:**
```
## PEAC Protocol and open source
PEAC Protocol is an open-source standard (Apache-2.0) stewarded by Originary. 
Originary™ is the commercial brand of Poem, Inc.

Anyone can implement PEAC Protocol. Originary provides commercial products 
(Trace, Gateway, Studio, Verify API) built on PEAC.
```

**Key Clarification:**
- PEAC Protocol = open source (no TM)
- Originary™ = commercial brand (with TM)
- Analogy: "PEAC is like Next.js, Originary is like Vercel"

### 6. Legal Page Fixes
**File**: `app/legal/imprint/page.tsx`

**Removed sensitive details** (per user requirements):
- ~~File/Company ID: 10379372~~
- ~~Formation date: October 24, 2025~~
- ~~Registered Agent: Legalinc Corporate Services Inc.~~
- ~~Registered Agent Address~~

**Kept essential info:**
- Legal Entity: Poem, Inc. (Delaware C-Corporation)
- Contact: contact@originary.xyz, +1 415-707-0402

### 7. Build Quality
**ESLint Compliance:**
- Fixed unescaped apostrophe in `app/about/page.tsx`
- Changed `We're` → `We&apos;re` (line 67)

**Build Status:**
```
✓ Compiled successfully in 85s
✓ Build completed
```

---

## Files Modified

### Configuration & Scripts
- ✨ `scripts/check-meta.mjs` (new)
- ✨ `scripts/check-tm.mjs` (new)
- ✏️  `package.json` (added check:meta and check:tm scripts)

### Pages
- ✏️  `app/about/page.tsx` (removed PEAC Protocol TM, fixed apostrophe)
- ✏️  `app/pricing/layout.tsx` (enhanced metadata, added JSON-LD)
- ✏️  `app/pricing/page.tsx` (added OpenSourceBanner, fixed links)
- ✏️  `app/integrations/page.tsx` (added OpenSourceBanner, fixed links, updated Script)
- ✏️  `app/trademark/page.tsx` (added comprehensive PEAC section)
- ✏️  `app/legal/imprint/page.tsx` (removed sensitive company details)

### Components
- ✅ `components/OpenSourceBanner.tsx` (already existed, utilized)
- ✅ `components/PeacBadge.tsx` (already existed)

---

## SEO & Structured Data Improvements

### Pricing Page
- Added OfferCatalog schema with all 4 pricing tiers
- Proper price specifications with billing duration (P1M = per month)
- Availability status (InStock for live tiers, PreOrder for custom)

### Integrations Page
- ItemList schema with all 6 integrations
- Each integration as SoftwareApplication type
- Position-based ordering for search engines

### Metadata
- Consistent title format: "Page Name : Originary"
- Canonical URLs on all pages
- OpenGraph and Twitter cards properly configured

---

## Compliance & Quality Assurance

### Trademark Compliance
**Rule**: PEAC Protocol (open source) NEVER gets TM symbol
**Enforcement**: Automated via `check-tm.mjs` script
**Status**: ✅ All pages compliant

### Metadata Compliance
**Requirements**: title, description, canonical URL on critical pages
**Enforcement**: Automated via `check-meta.mjs` script
**Status**: ✅ All 8 critical pages verified

### Build Compliance
**Standards**: ESLint, TypeScript strict mode
**Status**: ✅ Build passes with warnings only (non-blocking)

---

## Performance & Technical

### Build Output
- Total pages: 54 static routes
- Middleware size: 34.5 kB
- First Load JS: 102 kB (shared)
- All pages prerendered as static content

### Notable Pages Sizes
- Homepage: 5.22 kB (108 kB total)
- Pricing: 3.67 kB (116 kB total)
- Integrations: 2.77 kB (115 kB total)
- Trace: 4.66 kB (117 kB total)

---

## Testing & Verification

### Manual Testing
✅ Pricing page renders with OpenSourceBanner  
✅ Integrations page renders with OpenSourceBanner  
✅ All links functional (/contact tested)  
✅ JSON-LD validates in search console tools  

### Automated Testing
✅ `npm run check:meta` - All pages pass  
✅ `npm run check:tm` - All trademark usage correct  
✅ `npm run build` - Production build succeeds  

---

## Brand Architecture Clarity

### Before
- Unclear distinction between open source and commercial
- PEAC Protocol incorrectly marked with TM
- Confusing product relationships

### After
- **PEAC Protocol**: Open source standard (Apache-2.0)
- **Originary™**: Commercial brand (Poem, Inc.)
- **Products**: Trace, Gateway, Studio, Verify (built on PEAC)
- Clear messaging: "Built on the open PEAC Protocol"

**User-facing message:**
> "PEAC Protocol, SDKs, and CLI are free under Apache-2.0. Self-host with official examples, or add Originary Cloud."

---

## Next Steps (Not Completed)

The following tasks remain for future work:

1. **MDX Blog Infrastructure**
   - Set up blog routing with MDX
   - Configure rehype-pretty-code for syntax highlighting
   - Implement blog post metadata system

2. **Blog Content**
   - Write "HTTP 402, explained"
   - Write "What a PEAC-Receipt proves"
   - Write "Building Trace: visibility for AI crawlers"

3. **RSS Feed**
   - Create /blog/rss.xml endpoint
   - Generate feed from blog posts

4. **Product Pages**
   - Add PEAC badges to /trace
   - Add PEAC badges to /products/gateway-402
   - Add PEAC badges to /products/studio
   - Add PEAC badges to /products/verify

5. **Downloads Page**
   - Add SHA-256 hashes
   - Add "use in commerce" captions
   - Date all artifacts

6. **GitHub Actions CI**
   - Create ci.yml workflow
   - Add metadata checks
   - Add trademark checks
   - Add build verification

---

## Commit Messages

```bash
# Phase 1
git commit -m "Update content"

# Phase 2
git commit -m "Update content and add compliance scripts

- Add OpenSourceBanner to pricing and integrations pages
- Update pricing metadata with OfferCatalog JSON-LD
- Fix PEAC Protocol trademark usage (removed TM from open source)
- Add comprehensive PEAC Protocol section to trademark page
- Create check-meta.mjs and check-tm.mjs compliance scripts
- Update contact links to use /contact instead of /company/contact
- Fix button classes from button-primary to btn-primary"

# Phase 3
git commit -m "Fix ESLint error in about page

- Escape apostrophe in 'We're' using HTML entity &apos;"
```

---

## Summary

This update establishes:
1. **Clear open source positioning** with OpenSourceBanner on key pages
2. **Automated compliance checking** for metadata and trademarks
3. **Proper brand architecture** distinguishing PEAC (open) from Originary (commercial)
4. **World-class quality** with proper JSON-LD, metadata, and build compliance
5. **Legal compliance** with appropriate company detail redaction

**Build Status**: ✅ Production ready  
**Test Status**: ✅ All checks passing  
**Deploy Status**: ⏳ Ready for deployment

---

Generated: 2025-11-13  
Branch: `site/2025-11-billion-grade-polish`  
Author: Claude Code Assistant
