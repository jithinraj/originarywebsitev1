#!/usr/bin/env node
import { execSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const routes = [
  "/",
  "/products",
  "/products/gateway-402",
  "/products/peac",
  "/products/studio",
  "/products/verify",
  "/products/adapters",
  "/developers",
  "/verify",
  "/solutions",
  "/solutions/ai-builders",
  "/solutions/api-providers",
  "/solutions/publishers",
  "/solutions/enterprises",
  "/integrations",
  "/integrations/x402",
  "/integrations/http-402",
  "/integrations/mcp",
  "/integrations/acp",
  "/integrations/a2a",
  "/integrations/aipref",
  "/integrations/x402/cloudflare-workers",
  "/integrations/x402/express-node",
  "/integrations/x402/nextjs",
  "/integrations/x402/python-fastapi",
  "/company/about",
  "/company/contact",
  "/pricing",
  "/ai",
  "/receipts",
  "/demo",
  "/downloads",
  "/blog",
  "/blog/aipref-by-ietf",
  "/blog/robots-txt-rfc-9309",
  "/blog/cloudflare-workers-402",
  "/blog/http-402-for-apis",
  "/blog/adding-402-in-15-minutes",
  "/glossary/http-402-payment-required",
  "/glossary/x402",
  "/glossary/aipref",
  "/glossary/peac",
  "/glossary/agentic-web",
  "/glossary/acp",
  "/glossary/a2a",
  "/glossary/mcp",
  "/guides/http-402",
  "/docs/receipts",
  "/docs/payments/x402",
  "/docs/payments/stripe",
  "/docs/mcp/receipts",
  "/docs/a2a/attach-points",
  "/docs/deploy/cloudflare-worker",
  "/docs/deploy/vercel",
  "/legal/terms",
  "/legal/privacy",
  "/trademark",
  "/privacy",
  "/copyright",
  "/refund",
  "/checkout/start",
  "/checkout/confirmation",
  "/changelog"
];

function lastmodForRoute(route) {
  const fileGuess = route === "/"
    ? "app/page.tsx"
    : `app${route}/page.tsx`;

  try {
    const iso = execSync(
      `git log -1 --format=%cI -- ${fileGuess}`,
      { stdio: ["ignore", "pipe", "ignore"], encoding: "utf-8" }
    ).toString().trim();

    return iso || new Date().toISOString().split('T')[0];
  } catch {
    return new Date().toISOString().split('T')[0];
  }
}

const data = routes.map(url => ({
  url: `https://www.originary.xyz${url}`,
  lastModified: lastmodForRoute(url)
}));

const outputPath = resolve(process.cwd(), "public/sitemap-data.json");
writeFileSync(outputPath, JSON.stringify(data, null, 2));

console.log(`✓ Generated sitemap data with ${data.length} routes`);
console.log(`✓ Written to: ${outputPath}`);
