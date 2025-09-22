import fs from "fs";
const pages = [
  "components/HomePage.tsx",   // Home component
  "app/originary-ai/page.tsx",
  "app/downloads/page.tsx",
  "app/trademark/page.tsx",
  "app/brand/page.tsx",
  "app/press/page.tsx",
];

let ok = true;

for (const p of pages) {
  try {
    const s = fs.readFileSync(p, "utf8");
    if (/Originary, Inc\./i.test(s)) { console.error("❌ Remove 'Originary, Inc.' from", p); ok = false; }
    if (/®/.test(s)) { console.error("❌ ® not allowed", p); ok = false; }
    const count = (s.match(/Originary<sup>™<\/sup>|<Mark>Originary<\/Mark>|Originary™/g) || []).length;
    if (count < 1) { console.error("❌ Missing ™ on first prominent use in", p); ok = false; }
  } catch (error) {
    console.error("⚠️ Could not read", p, "(may not exist)");
  }
}
if (!ok) process.exit(1);
console.log("✅ ™ checks OK");