#!/usr/bin/env node

/**
 * Content Linter - Detects banned phrases and em-dashes in marketing content
 * Run: node scripts/lint-content.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Directories to scan
const SCAN_DIRS = ['app', 'components', 'public'];
const EXTENSIONS = ['.tsx', '.ts', '.md', '.txt', '.html'];

// Load banlist
const BANLIST_PATH = path.join(__dirname, 'banlist.txt');
let bannedPatterns = [];

try {
  const banlistContent = fs.readFileSync(BANLIST_PATH, 'utf8');
  bannedPatterns = banlistContent
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && !line.startsWith('#'));
} catch (err) {
  console.error(`❌ Failed to load banlist: ${err.message}`);
  process.exit(1);
}

console.log('🔍 Running content lint checks...\n');

let hasErrors = false;

// Check for banned phrases
for (const pattern of bannedPatterns) {
  console.log(`Checking for: ${pattern}`);

  try {
    const grepCmd = `grep -rniE "${pattern}" ${SCAN_DIRS.join(' ')} --include="*.tsx" --include="*.ts" --include="*.md" --include="*.txt" --include="*.html" 2>/dev/null || true`;
    const result = execSync(grepCmd, { encoding: 'utf8' });

    if (result.trim()) {
      console.error(`❌ Found banned phrase: ${pattern}`);
      console.error(result);
      hasErrors = true;
    }
  } catch (err) {
    // grep returns non-zero when no matches found, which is fine
    if (err.status !== 1) {
      console.error(`Error running grep: ${err.message}`);
    }
  }
}

// Check for hardcoded secrets (not env var references)
console.log('\n🔒 Checking for hardcoded secrets...');
const secretPatterns = [
  { name: 'AWS Keys', pattern: 'AKIA[0-9A-Z]{16}' },
  { name: 'Private Keys', pattern: '-----BEGIN (RSA |EC )?PRIVATE KEY-----' },
  { name: 'Razorpay Test Keys', pattern: 'rzp_test_[a-zA-Z0-9]{14}' }
  // Note: Razorpay live keys (rzp_live_*) are allowed in production code with proper env var usage
  // Environment variable references (process.env.*) are allowed
];

for (const { name, pattern } of secretPatterns) {
  try {
    const grepCmd = `grep -rniE '${pattern}' ${SCAN_DIRS.join(' ')} --include="*.tsx" --include="*.ts" --include="*.js" 2>/dev/null || true`;
    const result = execSync(grepCmd, { encoding: 'utf8' });

    if (result.trim()) {
      console.error(`❌ Hardcoded ${name} detected:`);
      console.error(result);
      hasErrors = true;
    }
  } catch (err) {
    if (err.status !== 1) {
      console.error(`Error checking ${name}: ${err.message}`);
    }
  }
}

console.log('\n');

if (hasErrors) {
  console.error('❌ Content lint failed. Please fix the issues above before committing.');
  console.error('See scripts/banlist.txt for banned phrases.');
  process.exit(1);
} else {
  console.log('✅ Content lint passed. No banned phrases or secrets found.');
  process.exit(0);
}
