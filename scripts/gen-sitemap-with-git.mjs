#!/usr/bin/env node
import { execSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

// Routes to include in sitemap (excludes noindex pages)
// Excluded: legal pages, hub pages, listing pages set to noindex
const routes = [
  "/",
  "/about",
  "/ai",
  "/blog",
  "/blog/adding-402-in-15-minutes",
  "/blog/ai-bot-detection",
  "/blog/aipref-by-ietf",
  "/blog/cloudflare-workers-402",
  "/blog/from-detection-to-settlement-ai-paywall-peac-http-402",
  "/blog/http-402-for-apis",
  "/blog/robots-txt-rfc-9309",
  "/blog/what-is-http-402",
  "/blog/a2a-stack-agent-to-agent-commerce",
  "/brand",
  "/changelog",
  "/checkout/confirmation",
  "/checkout/start",
  "/cloud",
  "/company",
  "/company/about",
  "/company/contact",
  "/contact",
  "/dashboard",
  "/declare",
  "/demo",
  "/developers",
  "/docs/a2a/attach-points",
  "/docs/deploy/cloudflare-worker",
  "/docs/deploy/vercel",
  "/docs/mcp/receipts",
  "/docs/payments/stripe",
  "/docs/payments/x402",
  "/docs/receipts",
  "/downloads",
  "/glossary/a2a",
  "/glossary/acp",
  "/glossary/agentic-web",
  "/glossary/aipref",
  "/glossary/http-402-payment-required",
  "/glossary/mcp",
  "/glossary/peac",
  "/glossary/x402",
  "/guides/http-402",
  "/integrations",
  "/integrations/a2a",
  "/integrations/acp",
  "/integrations/aipref",
  "/integrations/http-402",
  "/integrations/mcp",
  "/integrations/x402",
  "/integrations/x402/cloudflare-workers",
  "/integrations/x402/express-node",
  "/integrations/x402/nextjs",
  "/integrations/x402/python-fastapi",
  "/llms.txt",
  "/originary-ai",
  "/peac",
  "/press",
  "/pricing",
  "/products",
  "/products/adapters",
  "/products/gateway-402",
  "/products/peac",
  "/products/studio",
  "/products/verify",
  "/receipts",
  "/resources",
  "/resources/case-studies",
  "/resources/performance-methodology",
  "/services",
  "/signin",
  "/solutions",
  "/solutions/ai-builders",
  "/solutions/api-providers",
  "/solutions/enterprises",
  "/solutions/publishers",
  "/status",
  "/trace",
  "/trace/demo",
  "/trust",
  "/verify"
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

function priorityForRoute(route) {
  if (route === "/") return 1.0;
  if (["/trace", "/peac", "/originary-ai"].includes(route)) return 0.95;
  if (["/ai", "/cloud", "/pricing", "/developers"].includes(route)) return 0.9;
  if (route.startsWith("/products") || route.startsWith("/solutions")) return 0.8;
  if (route.startsWith("/blog/")) return 0.6;
  if (route.startsWith("/glossary/") || route.startsWith("/legal/")) return 0.5;
  return 0.7;
}

const data = routes.map(route => ({
  url: `https://www.originary.xyz${route}`,
  lastModified: lastmodForRoute(route),
  priority: priorityForRoute(route)
}));

const outputPath = resolve(process.cwd(), "public/sitemap-data.json");
writeFileSync(outputPath, JSON.stringify(data, null, 2));

console.log(`✓ Generated sitemap data with ${data.length} routes`);
console.log(`✓ Written to: ${outputPath}`);
