# Originary Website

Official website for Originary - creators of the PEAC Protocol. Features authentication, payment integration, and developer resources.

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

In Vercel dashboard → Settings → Environment Variables, add:

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

## Features

✅ **Authentication System**
- Email/password signup and signin
- JWT sessions (no database sessions needed)
- Protected dashboard routes

✅ **Database**
- Vercel Postgres integration
- User management with Prisma
- API key generation ready

✅ **Payment Integration**
- Razorpay payment button (already configured)
- Webhook endpoints ready for implementation

✅ **Existing Design**
- All your existing CSS preserved
- Responsive design maintained
- Same visual appearance

## File Structure

```
├── app/
│   ├── (auth)/
│   │   ├── actions.ts          # Server actions for auth
│   │   ├── signin/page.tsx     # Sign in page
│   │   └── signup/page.tsx     # Sign up page
│   ├── api/auth/[...nextauth]/ # NextAuth API routes
│   ├── dashboard/page.tsx      # Protected dashboard
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Homepage
├── components/
│   ├── Header.tsx              # Navigation header
│   └── Footer.tsx              # Site footer
├── lib/
│   ├── auth.ts                 # NextAuth configuration
│   └── db.ts                   # Prisma client
├── prisma/
│   └── schema.prisma           # Database schema
└── public/assets/              # Your existing CSS/assets
```

## API Endpoints

- `POST /api/auth/signin` - Sign in
- `POST /api/auth/signup` - Sign up (server action)
- `GET /api/auth/session` - Get current session

## Next Steps

1. **Add more pages** - Convert remaining HTML pages to Next.js
2. **API key management** - Build API key generation/management
3. **Payment webhooks** - Handle Razorpay payment confirmations
4. **Email verification** - Add email verification flow
5. **Dashboard features** - Add usage analytics, billing, etc.

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

## Authentication Flow

1. User visits `/signup` → Creates account → Redirected to signin
2. User visits `/signin` → Authenticates → Redirected to `/dashboard`
3. Protected routes check authentication automatically
4. Session persists via JWT (no database sessions)

## Security Features

- Passwords hashed with bcryptjs
- JWT sessions with NextAuth.js
- CSRF protection built-in
- Environment variables for secrets
- Vercel security headers

Ready to deploy! 🚀