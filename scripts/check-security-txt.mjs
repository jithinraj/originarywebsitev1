#!/usr/bin/env node
/**
 * security.txt freshness gate: warns 45 days before Expires, fails inside
 * 14 days or after expiry, and requires the canonical fields.
 */
import { readFileSync } from 'node:fs'

const FILE = 'public/.well-known/security.txt'
const text = readFileSync(FILE, 'utf8')

const required = ['Contact:', 'Policy:', 'Expires:', 'Canonical:', 'Preferred-Languages:']
const missing = required.filter((k) => !text.includes(k))
if (missing.length) {
  console.error(`security.txt missing required fields: ${missing.join(', ')}`)
  process.exit(1)
}

const match = text.match(/Expires:\s*(\S+)/)
const expires = new Date(match[1])
if (Number.isNaN(expires.getTime())) {
  console.error(`security.txt has an unparseable Expires value: ${match[1]}`)
  process.exit(1)
}

const daysLeft = Math.floor((expires.getTime() - Date.now()) / 86400000)
if (daysLeft < 14) {
  console.error(`security.txt expires in ${daysLeft} day(s) (${match[1]}). Renew it now.`)
  process.exit(1)
}
if (daysLeft < 45) {
  console.warn(`WARNING: security.txt expires in ${daysLeft} day(s) (${match[1]}). Schedule renewal.`)
}
console.log(`security.txt gate passed (${daysLeft} days until expiry)`)
