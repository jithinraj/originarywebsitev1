#!/bin/bash

# Content lint script to prevent banned phrases from being committed
# Add this to your CI/CD pipeline or as a pre-commit hook

echo "Running content lint checks..."

# Define banned phrases
BANNED_PHRASES=(
    "Introducing PEAC Protocol v2\.0"
    "Trusted by.*(Anthropic|OpenAI|Mistral|Cohere)"
    "VERIFIED.*\d+\.\d+ms"
    "Originary's PEAC"
    "PEAC by Originary"
    "PEAC Protocol access"
    "99\.99%.*SLA"
    "Enterprise SLA.*99\.99"
)

# Search for banned phrases in marketing pages
MARKETING_DIRS="app/ components/"
FOUND_ISSUES=false

for phrase in "${BANNED_PHRASES[@]}"; do
    echo "Checking for: $phrase"
    if grep -rniE "$phrase" $MARKETING_DIRS --include="*.tsx" --include="*.ts" --include="*.md"; then
        echo "❌ Found banned phrase: $phrase"
        FOUND_ISSUES=true
    fi
done

if [ "$FOUND_ISSUES" = true ]; then
    echo ""
    echo "❌ Content lint failed. Please remove banned phrases before committing."
    echo "See brand guidelines for approved alternatives."
    exit 1
else
    echo "✅ Content lint passed. No banned phrases found."
    exit 0
fi