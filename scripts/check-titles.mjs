import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = ".next/server/app";
let failures = [];
let checked = 0;

function walk(dir) {
  try {
    for (const f of readdirSync(dir)) {
      const p = join(dir, f);
      const s = statSync(p);
      if (s.isDirectory()) {
        walk(p);
      } else if (p.endsWith(".html")) {
        const html = readFileSync(p, "utf8");
        const titleMatch = html.match(/<title>(.*?)<\/title>/i);
        if (titleMatch) {
          checked++;
          const title = titleMatch[1];
          if (!title.includes("Originary")) {
            failures.push({ file: p, title });
          }
        }
      }
    }
  } catch (err) {
    console.warn(`Skipping directory ${dir}: ${err.message}`);
  }
}

console.log("Checking page titles for 'Originary' brand...");
walk(root);

if (failures.length) {
  console.error(`\n❌ Found ${failures.length} page(s) missing 'Originary' in <title>:\n`);
  failures.slice(0, 20).forEach(({ file, title }) => {
    console.error(`  ${file}`);
    console.error(`    Title: "${title}"\n`);
  });
  if (failures.length > 20) {
    console.error(`  ... and ${failures.length - 20} more`);
  }
  process.exit(1);
}

console.log(`✅ All ${checked} page titles include 'Originary'`);
