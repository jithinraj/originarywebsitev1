#!/usr/bin/env bash
# Local-only check for sensitive keywords in commit messages
# This runs before push to catch issues early, but doesn't block GitHub PRs
set -euo pipefail

echo "Checking commit messages for sensitive keywords..."

SENSITIVE_KEYWORDS=(
  "trademark"
  "Class 9"
  "Class 42"
  "USPTO"
  "positioning"
  "competitive"
  "entity confusion"
  "brand"
)

# Get commits that would be pushed
if [ -z "${1:-}" ]; then
  # If no argument, check unpushed commits on current branch
  REMOTE_BRANCH=$(git rev-parse --abbrev-ref --symbolic-full-name @{u} 2>/dev/null || echo "origin/main")
  COMMITS=$(git log --format=%B "$REMOTE_BRANCH"..HEAD 2>/dev/null || echo "")
else
  # If argument provided, check that range
  COMMITS=$(git log --format=%B "$1" 2>/dev/null || echo "")
fi

if [ -z "$COMMITS" ]; then
  echo "✅ No new commits to check"
  exit 0
fi

FOUND_KEYWORDS=()

for keyword in "${SENSITIVE_KEYWORDS[@]}"; do
  if echo "$COMMITS" | grep -iq "$keyword"; then
    FOUND_KEYWORDS+=("$keyword")
  fi
done

if [ ${#FOUND_KEYWORDS[@]} -gt 0 ]; then
  echo ""
  echo "⚠️  Found sensitive keywords in commit messages:"
  for kw in "${FOUND_KEYWORDS[@]}"; do
    echo "   - $kw"
  done
  echo ""
  echo "These keywords are fine for local commits, but consider using"
  echo "generic technical language before pushing to public repository."
  echo ""
  echo "To skip this check: git push --no-verify"
  exit 1
fi

echo "✅ Commit messages are clean"
exit 0
