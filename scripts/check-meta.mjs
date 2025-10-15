import fs from 'fs';

// Check built robots.txt (App Router metadata route output)
const robots = fs.readFileSync('.next/server/app/robots.txt.body','utf8');
const peac = fs.readFileSync('public/.well-known/peac.txt','utf8');

if (!/^User-Agent: \*\nAllow: \/\n\nSitemap: https:\/\/www\.originary\.xyz\/sitemap\.xml\n?$/.test(robots))
  throw new Error('robots.txt must point to https://www.originary.xyz/sitemap.xml');

if (!/\n/.test(peac) || peac.split('\n').length < 5)
  throw new Error('peac.txt must be multi-line canonical');

if (/originary\.org|http:\/\//i.test(robots)) throw new Error('robots.txt must not reference originary.org or http://');

console.log('✅ robots.txt and peac.txt OK');