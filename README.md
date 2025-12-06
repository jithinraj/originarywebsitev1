# Originary Website

Official marketing site for Originary - receipts for the agentic web, built on the PEAC Protocol.

Maintained by Poem, Inc.
Live site: https://www.originary.xyz/

---

## Getting started

Prerequisites:

- Node.js and npm
- A Postgres database (for Vercel Postgres or equivalent) if you use the auth and dashboard flows

Install dependencies:

```bash
npm install
```

Set up environment variables:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

* `DATABASE_URL` - Postgres connection string
* `NEXTAUTH_SECRET` - generate with `openssl rand -base64 32`
* `NEXTAUTH_URL` - your domain, for example `https://your-app.vercel.app`

Apply database schema:

```bash
npx prisma db push
```

Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## Deployment

This project is designed to be deployed on Vercel.

1. Create a new Vercel project and Postgres database.

2. Configure the following environment variables in the Vercel dashboard:

   * `DATABASE_URL`
   * `NEXTAUTH_URL`
   * `NEXTAUTH_SECRET`

3. Deploy by pushing to the default branch or using the Vercel CLI:

```bash
vercel --prod
```

After the first deployment, run:

```bash
npx prisma db push
```

to apply the schema in the hosted environment.

---

## Features

* Next.js app router based site
* Optional authentication and protected dashboard
* Postgres database integration via Prisma
* Stripe integration hooks for payments
* Responsive marketing layout and components

---

## Directory structure

```text
app/
  (auth)/
    signin/page.tsx
    signup/page.tsx
  api/
    auth/[...nextauth]/
  dashboard/page.tsx
  layout.tsx
  page.tsx
components/
  Header.tsx
  Footer.tsx
lib/
  auth.ts
  db.ts
prisma/
  schema.prisma
public/
  assets/
```

---

## Originary CLI

The Originary CLI is a separate tool for working with PEAC policy files and receipts.

For downloads and documentation, see:
[https://www.originary.xyz/downloads](https://www.originary.xyz/downloads)

---

## Development scripts

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Database helpers
npm run db:push       # Apply schema changes
npm run db:studio     # Open Prisma Studio
npm run db:generate   # Generate Prisma client

# Production build
npm run build
npm start
```

---

## License and usage

This repository is not open source.

All contents are proprietary to Poem, Inc. and may be viewed in read-only form for informational purposes. No copying, modification, redistribution, or reuse of this code, design, or content is permitted without prior written permission from Poem, Inc.

Originary is a trademark of Poem, Inc. All rights reserved.

---

## Our open source projects

Originary is committed to open protocols and tooling for the agentic web. If you are looking for our open source work, see:

* PEAC Protocol core and SDK: [https://github.com/peacprotocol/peac](https://github.com/peacprotocol/peac)
* Trace: [https://github.com/originaryx/trace](https://github.com/originaryx/trace)
