# Originary Website

Official website for Originary - receipts for the agentic web. Built on the PEAC Protocol.

**Maintained by Poem, Inc.**
Website: https://www.originary.xyz/

## About Originary and PEAC

Originary builds infrastructure for the agentic web, including the open PEAC Protocol.

- PEAC Protocol spec and core SDK are open source
- This repository only hosts the Originary marketing website

## License

This repository is **not** open source.

All contents are proprietary to Poem, Inc. and may only be viewed in read-only form for informational purposes. No copying, modification, redistribution, or reuse of this code, design, or content is permitted without prior written permission from Poem, Inc.

Originary is a trademark of Poem, Inc. All rights reserved.

## Our open source projects

If you are looking for our open source work, see:

- PEAC Protocol core: https://github.com/peacprotocol/peac
- Trace: https://github.com/originaryx/trace

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```

   Then edit `.env.local` with your actual values:
   - `DATABASE_URL` - Your Vercel Postgres connection string
   - `NEXTAUTH_SECRET` - Generate with: `openssl rand -base64 32`
   - `NEXTAUTH_URL` - Your domain (https://your-app.vercel.app)

3. **Set up database:**
   ```bash
   npx prisma db push
   ```

4. **Run development server:**
   ```bash
   npm run dev
   ```

## Deployment on Vercel

### Step 1: Create Vercel Postgres Database

1. Go to your Vercel dashboard
2. Select your project (or create new one)
3. Go to "Storage" tab
4. Create a new "Postgres" database
5. Copy the `DATABASE_URL` from the connection details

### Step 2: Set Environment Variables

In Vercel dashboard > Settings > Environment Variables, add:

```
DATABASE_URL=your_postgres_connection_string
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your_long_random_string
```

### Step 3: Deploy

```bash
# Deploy to Vercel
vercel --prod

# Or push to GitHub (if auto-deploy is enabled)
git add .
git commit -m "Initial Next.js deployment"
git push origin main
```

### Step 4: Run Database Migration

After first deployment, run:
```bash
npx prisma db push
```

## Originary CLI

Command-line tool for verifying PEAC policy files and generating receipts.

### Downloads

Available at https://www.originary.xyz/downloads or via direct links:

- **macOS (Apple silicon)** - `originary-cli-1.0.0-darwin-arm64.zip`
- **macOS (Intel)** - `originary-cli-1.0.0-darwin-x64.zip`
- **Linux** - `originary-cli-1.0.0-linux-x64.tar.gz`
- **Windows** - `originary-cli-1.0.0-win-x64.zip`

Each build includes SHA-256 checksums for verification.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Database commands
npm run db:push      # Push schema changes
npm run db:studio    # Open Prisma Studio
npm run db:generate  # Generate Prisma client

# Build for production
npm run build
npm start
```
