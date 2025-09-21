# PEAC Templates

Ready-to-use policy templates for different use cases.

## Templates

- **basic.peac.txt** - Simple policy for general use
- **publisher.peac.txt** - For content publishers requiring attribution
- **api.peac.txt** - For API providers with rate limits
- **strict.peac.txt** - High-compliance environments

## Usage

1. Copy the template that matches your use case
2. Update the contact email and customize purposes
3. Validate with the Originary CLI: `originary verify`
4. Deploy to `/.well-known/peac.txt` on your domain

## Validation

Use the Originary CLI to verify your policy file:

```bash
originary verify
```