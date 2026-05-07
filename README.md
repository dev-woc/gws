# GWS

Next.js 15 app with Neon Postgres, Drizzle ORM, and Neon Auth.

## Getting Started

1. Install dependencies:

   ```bash
   npm install --legacy-peer-deps
   ```

2. Configure environment variables:

   ```bash
   cp .env.example .env.local
   ```

3. Push the database schema:

   ```bash
   npm run db:push
   ```

4. Start the dev server:

   ```bash
   npm run dev
   ```

> **Note:** Do not use `--turbopack` — middleware does not execute with Turbopack in Next.js 15.
