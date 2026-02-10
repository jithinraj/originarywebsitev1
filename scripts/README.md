# Local Git Hooks

## Sensitive Keyword Check

**Script:** `check-sensitive-keywords.sh`
**Hook:** `.git/hooks/pre-push` (local only, not tracked)

### What it does

Checks commit messages for sensitive keywords before pushing:
- trademark
- Class 9, Class 42
- USPTO
- positioning
- competitive
- entity confusion
- brand

### Setup

The pre-push hook should already be installed at `.git/hooks/pre-push`. If not:

```bash
# Install the hook
cp scripts/check-sensitive-keywords.sh .git/hooks/pre-push
chmod +x .git/hooks/pre-push
```

Or manually create `.git/hooks/pre-push`:

```bash
#!/usr/bin/env bash
bash "$(git rev-parse --show-toplevel)/scripts/check-sensitive-keywords.sh"
exit $?
```

### Usage

The hook runs automatically before every push. To bypass it:

```bash
git push --no-verify
```

### Why local-only?

This check helps catch sensitive content before it goes public, but doesn't block PRs on GitHub. You can still push with `--no-verify` if needed.
