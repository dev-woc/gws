# Feature: GWS Marketing Website — MVP

The following plan is complete. Validate documentation and codebase patterns before implementing.
Pay special attention to: naming of existing utils, correct import paths (`@/`), Biome formatting rules (tabs, double quotes, trailing commas, 100-char line width), and shadcn/ui component API.

---

## Feature Description

Build the MVP marketing website for Gordon Wealth Strategies LLC — a Florida-based credit repair and financial coaching firm. The site must function as the primary digital sales and trust-building asset. It has five required pages (Home, About, Services, How It Works, Contact) plus Privacy Policy and Terms of Service, a fully functional contact form that emails Jamere, Calendly booking integration, GA4 analytics, and CROA compliance disclosures throughout.

The codebase was previously scaffolded as a Neon Auth dashboard app. Most content was deleted. What remains is the shell: root layout (has AuthProvider — must be removed), globals.css (has Neon Auth import — must be removed), the UI components library, rate-limiter utility, cn utility, and auth route group (keep — needed for Phase 3). The marketing site is built on top of this shell.

## User Story

As a credit-stressed Florida resident who discovers Gordon Wealth Strategies online,
I want to quickly understand what GWS does, trust that it's legitimate, and book a free consultation,
So that I can start fixing my credit and moving toward financial freedom.

## Problem Statement

Jamere Gordon has no web presence. Potential clients who find him via social media or referrals have nowhere to go for credibility, service details, or booking. Without a professional website, leads drop off before ever contacting him.

## Solution Statement

A premium, mobile-first marketing website with luxury brand aesthetics (navy/gold/dark), clear service messaging, trust signals (CROA compliance, FL LLC, Surety Bond), and frictionless paths to consultation booking via Calendly and a contact form.

## Feature Metadata

**Feature Type**: New Capability  
**Estimated Complexity**: Medium  
**Primary Systems Affected**: All `src/app` pages, `globals.css`, `src/app/layout.tsx`, new components
**Dependencies**: Resend (new — email delivery), existing: Zod, Sonner, shadcn/ui, Lucide React, next/font/google

---

## CONTEXT REFERENCES

### Relevant Codebase Files — MUST READ BEFORE IMPLEMENTING

- `src/app/layout.tsx` (lines 1–35) — Root layout. Has AuthProvider and Geist fonts. Both must be replaced. Toaster stays.
- `src/app/globals.css` (lines 1–125) — CSS design tokens in oklch format. Replace brand colors. Remove Neon Auth import.
- `src/app/page.tsx` (lines 1–20) — Current placeholder. Full replacement with Home page.
- `src/lib/utils.ts` (line 4) — `cn()` utility. Import as `import { cn } from "@/lib/utils"` in every component.
- `src/lib/rate-limit.ts` (lines 6–31) — `createRateLimiter(maxRequests, windowMs)` factory. Reuse for contact form Server Action.
- `src/lib/validations.ts` (line 1) — Empty stub. Add contact form Zod schema here.
- `src/components/ui/button.tsx` (lines 7–62) — shadcn Button. Variants: `default | destructive | outline | secondary | ghost | link`. Sizes: `default | xs | sm | lg | icon`. Use `asChild` + `<Link>` for nav CTAs.
- `src/components/ui/input.tsx` — Existing input. Use in contact form.
- `src/components/ui/label.tsx` — Existing label. Use in contact form.
- `src/components/ui/textarea.tsx` — Existing textarea. Use for message field.
- `src/components/ui/sonner.tsx` (lines 1–40) — Toaster component already in root layout. Call `toast.success()` / `toast.error()` from `sonner` package.
- `src/components/auth/signup-form.tsx` (lines 1–99) — Client component pattern: `"use client"`, `useState`, controlled inputs, error display. MIRROR this pattern for `ContactForm`.
- `src/middleware.ts` (lines 1–19) — Only protects `/dashboard` routes. No changes needed.

### New Files to Create

```
src/app/layout.tsx                          — Rewrite: GWS fonts + metadata, remove AuthProvider
src/app/globals.css                         — Rewrite: GWS brand tokens, remove Neon Auth import
src/app/page.tsx                            — Rewrite: Full Home page
src/app/about/page.tsx                      — About page
src/app/services/page.tsx                   — Services page with CROA disclosures
src/app/how-it-works/page.tsx               — How It Works 5-step timeline
src/app/contact/page.tsx                    — Contact page
src/app/contact/actions.ts                  — Server Action: contact form email
src/app/privacy-policy/page.tsx             — Privacy Policy page
src/app/terms/page.tsx                      — Terms of Service page
src/components/layout/navbar.tsx            — Global navbar with mobile hamburger
src/components/layout/footer.tsx            — Global footer with compliance links
src/components/sections/hero.tsx            — Home hero section
src/components/sections/services-overview.tsx — Home services card grid
src/components/sections/trust-indicators.tsx  — Trust badges bar
src/components/sections/pain-points.tsx     — Pain point copy block
src/components/sections/process-timeline.tsx  — Reusable timeline (How It Works)
src/components/sections/cta-banner.tsx      — Repeating CTA section
src/components/contact/contact-form.tsx     — Client component: controlled contact form
src/lib/analytics.tsx                       — GA4 Script component
.env.example                                — Environment variable template
```

### Relevant Documentation — READ BEFORE IMPLEMENTING

- [Next.js 15 Fonts](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
  - Section: Using Google Fonts with `next/font/google`
  - Why: Playfair Display + Montserrat setup with CSS variable injection
- [Next.js 15 Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
  - Section: `generateMetadata` function, `title.template` for pages
  - Why: Per-page SEO metadata and Open Graph tags
- [Next.js 15 Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
  - Section: Form submission, `"use server"` directive, `useActionState`
  - Why: Contact form Server Action pattern
- [Resend React Email docs](https://resend.com/docs/send-with-nextjs)
  - Section: `resend.emails.send()` API, `from`/`to`/`subject`/`html` params
  - Why: Contact form email delivery
- [Zod v4 object schema](https://zod.dev/?id=objects)
  - Why: Contact form validation schema
- [Tailwind CSS v4 theme configuration](https://tailwindcss.com/docs/v4-upgrade#using-css-variables)
  - Section: `@theme inline` block for CSS variable aliases
  - Why: Mapping GWS brand colors to Tailwind utility classes
- [shadcn/ui components list](https://ui.shadcn.com/docs/components)
  - Check: Select component for service dropdown — install if needed: `npx shadcn@latest add select`
  - Why: Service interest dropdown in contact form

---

### Patterns to Follow

**Naming Conventions:**
- Components: PascalCase filenames (`navbar.tsx` exports `Navbar`, `hero.tsx` exports `Hero`)
- Utilities: camelCase (`cn`, `createRateLimiter`)
- CSS vars: kebab-case with `--` prefix (`--color-navy`, `--font-playfair`)
- Files: kebab-case directories and filenames

**Biome Formatting (enforced — violations will fail `npm run lint`):**
```
- Indentation: tabs (not spaces)
- Quotes: double quotes
- Trailing commas: always
- Line width: 100 characters
- Imports: auto-organized by biome assist
```

**Client Component Pattern** (mirror from `signup-form.tsx:1`):
```tsx
"use client";
import { useState } from "react";
// Only use "use client" when: state, event handlers, browser APIs, or hooks needed
```

**Server Component Pattern** (default — no directive):
```tsx
// No "use client" — RSC by default
// Can import and use async functions, Server Actions, generateMetadata
export default function PageName() { ... }
export async function generateMetadata(): Promise<Metadata> { ... }
```

**Server Action Pattern:**
```tsx
"use server";
import { createRateLimiter } from "@/lib/rate-limit";
const rateLimiter = createRateLimiter(5, 60_000); // 5 req/min per IP
export async function submitContactForm(formData: FormData): Promise<ActionResult> {
  // validate → rate limit → send email → return result
}
```

**cn() usage** (from `src/lib/utils.ts`):
```tsx
import { cn } from "@/lib/utils";
<div className={cn("base-classes", condition && "conditional-class", className)} />
```

**Button + Link CTA pattern** (from `src/app/page.tsx:10`):
```tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
<Button asChild size="lg">
  <Link href="/contact">Book Your Free Consultation</Link>
</Button>
```

**CSS Token Pattern** (from `src/app/globals.css`):
```css
/* Add GWS custom properties to :root */
:root {
  --gws-navy: oklch(0.283 0.109 256.8);      /* #1B3A6B */
  --gws-gold: oklch(0.726 0.125 78.2);        /* #C9A84C */
  --gws-dark: oklch(0.093 0.012 261.5);       /* #0d1117 */
  --gws-offwhite: oklch(0.971 0.003 91.3);    /* #F5F5F0 */
  --gws-charcoal: oklch(0.245 0 0);           /* #333333 */
}
/* In @theme inline block, expose as Tailwind colors */
@theme inline {
  --color-navy: var(--gws-navy);
  --color-gold: var(--gws-gold);
  --color-dark: var(--gws-dark);
  --color-offwhite: var(--gws-offwhite);
  --color-charcoal: var(--gws-charcoal);
}
/* Usage in components: bg-navy text-gold bg-dark text-offwhite text-charcoal */
```

**Toast pattern** (Sonner already in layout):
```tsx
import { toast } from "sonner";
toast.success("Message sent! We'll be in touch soon.");
toast.error("Something went wrong. Please try again.");
```

---

## IMPLEMENTATION PLAN

### Phase 1: Foundation — Design Tokens, Fonts & Global Layout

Strip auth scaffolding, inject GWS brand tokens, set up fonts, and build the global Navbar + Footer that wraps every page.

**Tasks:**
- Rewrite `globals.css` — remove Neon Auth import, add GWS CSS custom properties + Tailwind color aliases
- Rewrite `layout.tsx` — remove AuthProvider, inject Playfair Display + Montserrat via `next/font/google`, update root metadata
- Create `src/components/layout/navbar.tsx` — desktop nav + mobile hamburger
- Create `src/components/layout/footer.tsx` — 4-column footer with compliance links

### Phase 2: Core Marketing Pages

Build all five required pages plus the Privacy Policy and Terms pages as server components.

**Tasks:**
- Rewrite `src/app/page.tsx` — assemble Home page sections
- Create shared section components: `hero.tsx`, `services-overview.tsx`, `trust-indicators.tsx`, `pain-points.tsx`, `cta-banner.tsx`
- Create `src/app/about/page.tsx`
- Create `src/app/services/page.tsx` with CROA disclosures
- Create `src/app/how-it-works/page.tsx` with `process-timeline.tsx` component
- Create `src/app/privacy-policy/page.tsx`
- Create `src/app/terms/page.tsx`

### Phase 3: Contact Form & Email

Implement the functional contact form with Server Action, Resend integration, Zod validation, and Calendly booking link.

**Tasks:**
- Install Resend: `npm install resend --legacy-peer-deps`
- Add contact form Zod schema to `src/lib/validations.ts`
- Create `src/app/contact/actions.ts` Server Action
- Create `src/components/contact/contact-form.tsx` client component
- Create `src/app/contact/page.tsx`
- Add Select shadcn/ui component: `npx shadcn@latest add select`

### Phase 4: SEO, Analytics & Environment

Add per-page metadata, GA4 integration, and `.env.example`.

**Tasks:**
- Add `generateMetadata` to every page file
- Create `src/lib/analytics.tsx` GA4 Script component
- Add GA4 `<Analytics />` to root layout
- Create `.env.example`

---

## STEP-BY-STEP TASKS

### 1. UPDATE `src/app/globals.css`

- **REMOVE**: `@import "@neondatabase/auth/ui/tailwind";` (line 4 — Neon Auth UI styles, not needed for marketing site)
- **ADD** GWS brand CSS custom properties to `:root` block
- **ADD** GWS color aliases to `@theme inline` block so they're available as Tailwind utilities (`bg-navy`, `text-gold`, etc.)
- **ADD** font variable aliases to `@theme inline`: `--font-display: var(--font-playfair)` and `--font-body: var(--font-montserrat)`
- **KEEP**: All existing shadcn `:root` variables (background, foreground, primary, etc.) — they're used by existing UI components
- **GOTCHA**: Tailwind v4's `@theme inline` registers CSS variable aliases. Custom color names like `navy` become `bg-navy`/`text-navy`/`border-navy` utilities automatically.
- **VALIDATE**: `npm run lint`

```css
/* Add after existing @theme inline block closes */
:root {
  /* GWS Brand Colors */
  --gws-navy: oklch(0.283 0.109 256.8);
  --gws-gold: oklch(0.726 0.125 78.2);
  --gws-dark: oklch(0.093 0.012 261.5);
  --gws-offwhite: oklch(0.971 0.003 91.3);
  --gws-charcoal: oklch(0.245 0 0);
}

/* Inside @theme inline { ... } — add these lines */
--color-navy: var(--gws-navy);
--color-gold: var(--gws-gold);
--color-dark: var(--gws-dark);
--color-offwhite: var(--gws-offwhite);
--color-charcoal: var(--gws-charcoal);
--font-display: var(--font-playfair);
--font-body: var(--font-montserrat);
```

---

### 2. REWRITE `src/app/layout.tsx`

- **REMOVE**: `AuthProvider` import and wrapper (auth is Phase 3)
- **REMOVE**: Geist / Geist_Mono font imports and body class variables
- **ADD**: Playfair Display and Montserrat via `next/font/google` — inject as CSS variables `--font-playfair` and `--font-montserrat`
- **UPDATE**: root `<Metadata>` — title, description, Open Graph for GWS
- **UPDATE**: `<body>` className to apply Montserrat as default body font via `font-[family-name:var(--font-montserrat)]`
- **KEEP**: `<Toaster />` — already imported from `@/components/ui/sonner`
- **ADD**: `<Navbar />` and `<Footer />` wrappers around `{children}` (import from `@/components/layout/navbar` and `@/components/layout/footer`)
- **PATTERN**: Font injection mirrors `src/app/layout.tsx:7-15` but with new fonts
- **GOTCHA**: `next/font/google` font name with spaces uses underscore: `Playfair_Display`, `Montserrat`
- **GOTCHA**: `suppressHydrationWarning` stays on `<html>` — needed for Sonner theme detection
- **VALIDATE**: `npm run dev` — home page loads with serif display font on headings

```tsx
import { Playfair_Display, Montserrat } from "next/font/google";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gordon Wealth Strategies | Credit Repair & Financial Coaching",
    template: "%s | Gordon Wealth Strategies",
  },
  description:
    "Florida's trusted credit repair and financial coaching firm. We help you repair damaged credit, eliminate debt, and build lasting wealth — one strategy at a time.",
  openGraph: {
    siteName: "Gordon Wealth Strategies",
    locale: "en_US",
    type: "website",
  },
};
```

---

### 3. CREATE `src/components/layout/navbar.tsx`

- **IMPLEMENT**: Fixed/sticky top navbar. Logo left, nav links center/right, CTA button right.
- **IMPLEMENT**: Mobile hamburger menu — `"use client"` component, `useState(false)` for menu open state, toggles a full-width mobile nav drawer
- **NAV LINKS**: Home (`/`), About (`/about`), Services (`/services`), How It Works (`/how-it-works`), Contact (`/contact`)
- **CTA**: `<Button asChild size="sm">` + `<Link href="/contact">Book Free Consultation</Link>` — gold bg variant
- **BRAND**: Logo text "Gordon Wealth Strategies" in Playfair Display (`font-[family-name:var(--font-playfair)]`), navy color
- **STYLING**: White/light background, border-bottom on scroll, `z-50` sticky
- **ACTIVE STATE**: Use `usePathname()` from `next/navigation` to highlight current page link
- **GOTCHA**: `usePathname` requires `"use client"` — the entire Navbar is a client component
- **PATTERN**: Follow `signup-form.tsx:1` for `"use client"` + `useState` pattern
- **VALIDATE**: `npm run dev` — hamburger opens/closes on mobile; active link is highlighted

---

### 4. CREATE `src/components/layout/footer.tsx`

- **IMPLEMENT**: Dark navy background (`bg-navy`), gold accents. 3-column layout: Brand/tagline | Navigation | Contact info. Bottom row: copyright + legal links.
- **REQUIRED LINKS** (CROA compliance — must be present on every page via footer):
  - Privacy Policy → `/privacy-policy`
  - Terms of Service → `/terms`
- **CONTACT INFO**: `(813) 480-8325` and `jamere@gordonwealthstrategies.com` visible in footer
- **SOCIAL LINKS**: Instagram icon + Facebook icon (Lucide: `Instagram`, `Facebook`) linking to `#` (real URLs TBD by client)
- **COPYRIGHT**: `© {new Date().getFullYear()} Gordon Wealth Strategies LLC. All rights reserved.`
- **CROA MICRO-DISCLOSURE**: One-line text in footer: "You have the right to dispute inaccurate information on your credit report for free through the credit bureaus."
- **Server Component**: No interactivity needed — no `"use client"`
- **VALIDATE**: Every page shows footer; Privacy Policy and ToS links visible

---

### 5. CREATE `src/components/sections/hero.tsx`

- **IMPLEMENT**: Full-bleed section with dark background (`bg-dark`). Two-column on desktop: left = headline + tagline + CTA buttons, right = headshot image.
- **HEADLINE**: `"Repair Your Credit. Rebuild Your Life. Build Your Wealth."` in Playfair Display, large, text-white
- **TAGLINE**: `"Gordon Wealth Strategies helps individuals repair damaged credit, eliminate financial stress, and build a clear path to lasting wealth — one strategy at a time."` in Montserrat, text-white/80
- **CTA BUTTONS**: Primary: `"Book Your Free Consultation"` → `/contact`. Secondary: `"Explore Our Services"` → `/services`. Both use `<Button asChild>` + `<Link>`.
- **HEADSHOT**: `<Image src="/images/jamere-headshot.jpg" alt="Jamere Gordon, CEO of Gordon Wealth Strategies" .../>` — use placeholder path; client will provide asset to `/public/images/`
- **GOLD ACCENT**: Thin gold horizontal line (`border-t border-gold`) above the headline or as a divider
- **Server Component**: Static content only
- **PATTERN**: `cn()` for conditional classes; `<Image>` from `next/image` for optimization
- **GOTCHA**: Add `priority` prop to the headshot `<Image>` — it's above the fold, must not lazy-load
- **VALIDATE**: `npm run dev` — hero visible on home page; headshot placeholder shows; CTA buttons link correctly

---

### 6. CREATE `src/components/sections/trust-indicators.tsx`

- **IMPLEMENT**: Horizontal bar of 4 trust badges with icons and labels
- **BADGES**: 
  1. `Shield` icon — "Florida Licensed LLC"
  2. `Award` icon — "Surety Bond Protected"  
  3. `Scale` icon — "CROA Federal Compliant"
  4. `Building` icon — "EIN Registered"
- **STYLING**: Light background (`bg-offwhite`), navy text, gold icons, centered layout, `flex-wrap` for mobile
- **Server Component**
- **VALIDATE**: Trust bar visible below hero on home page

---

### 7. CREATE `src/components/sections/services-overview.tsx`

- **IMPLEMENT**: Two-column card grid (1-col on mobile, 2-col on desktop)
- **CARD 1 — Credit Repair**: Icon `CreditCard`, title, 3-bullet summary, `"Learn More"` link → `/services#credit-repair`
- **CARD 2 — Financial Coaching**: Icon `TrendingUp`, title, 3-bullet summary, `"Learn More"` link → `/services#financial-coaching`
- **STYLING**: White card background, navy heading, charcoal body text, gold accent border-top on card
- **PATTERN**: Use `Card`, `CardHeader`, `CardContent` from `@/components/ui/card`
- **Server Component**
- **VALIDATE**: Two cards visible on home page; icons render

---

### 8. CREATE `src/components/sections/pain-points.tsx`

- **IMPLEMENT**: Section with heading "Does This Sound Familiar?" and 4 pain point callouts
- **PAIN POINTS** (from brief):
  1. "I don't know where to start"
  2. "I've been denied for loans because of my credit"
  3. "I'm living paycheck to paycheck and can't get ahead"
  4. "I want to build wealth but my credit is holding me back"
- **FORMAT**: 2×2 grid on desktop, 1-col on mobile. Each item: gold checkmark icon + bold text + brief empathetic sub-copy
- **SECTION CLOSING**: Transition sentence: "You don't have to figure this out alone. That's exactly why Gordon Wealth Strategies exists."
- **Server Component**
- **VALIDATE**: Pain points grid renders on home page

---

### 9. CREATE `src/components/sections/cta-banner.tsx`

- **IMPLEMENT**: Reusable dark navy CTA section. Props: `heading`, `subtext`, `ctaLabel`, `ctaHref`
- **DEFAULT CONTENT**: "Ready to Start Your Credit Journey?" / "Book a free consultation and get your personalized strategy today." / "Book Your Free Consultation" → `/contact`
- **STYLING**: `bg-navy`, white text, gold CTA button
- **USAGE**: Imported on Home page bottom, Services page bottom, How It Works page bottom
- **Server Component** (props only, no interactivity)
- **VALIDATE**: Banner renders with correct text and link on home page

---

### 10. REWRITE `src/app/page.tsx` — Home Page

- **ASSEMBLE** sections in order: `<Hero />` → `<TrustIndicators />` → `<ServicesOverview />` → `<PainPoints />` → `<CtaBanner />` (testimonials placeholder optional)
- **ADD** `generateMetadata` export for home page (use root default — template handles it)
- **Server Component**
- **VALIDATE**: `npm run dev` — full home page renders with all 5 sections; no console errors

---

### 11. CREATE `src/app/about/page.tsx`

- **LAYOUT**: Two-column on desktop — left: large headshot + pull quote, right: narrative copy
- **SECTIONS**:
  - Page hero: dark background, "About Jamere Gordon" heading
  - Story section: "Why I Started Gordon Wealth Strategies" — 3–4 paragraph narrative (placeholder copy)
  - Mission statement: Large pull quote in Playfair Display with gold left border
  - Credentials block: 3 credential cards (FL LLC, CROA Compliance, Community Advocate)
- **HEADSHOT**: `<Image src="/images/jamere-headshot.jpg" ... />` — same asset as hero
- **generateMetadata**: `title: "About Jamere Gordon"`, description focused on his story
- **Server Component**
- **VALIDATE**: Page renders at `/about`; headshot shows; pull quote styled with gold accent

---

### 12. CREATE `src/app/services/page.tsx`

- **LAYOUT**: Two service sections (Credit Repair, Financial Coaching) each with included items, process, pricing, and CTA
- **CREDIT REPAIR SECTION** (id="credit-repair"):
  - What's included: 4 bullet points (bureau review, dispute letters, monthly updates, full analysis)
  - Timeline: "Typical engagement: 6–12 months"
  - Pricing: "Starting at $99/month — No advance fees collected"
  - **CROA DISCLOSURE** (required): 
    ```
    "Important: You have the right to dispute inaccurate information on your own credit report 
    directly with the credit bureaus for free. Gordon Wealth Strategies does not guarantee the 
    removal of accurate information from your credit report."
    ```
- **FINANCIAL COACHING SECTION** (id="financial-coaching"):
  - What's included: budget planning, debt strategy, savings roadmap, bi-weekly sessions
  - Pricing: "3-month program starting at $200/month"
- **BOTTOM**: `<CtaBanner />` component
- **generateMetadata**: `title: "Our Services"`, description covering both pillars
- **Server Component**
- **VALIDATE**: Page renders at `/services`; CROA disclosure text visible; anchor links from home page cards work

---

### 13. CREATE `src/components/sections/process-timeline.tsx`

- **IMPLEMENT**: Reusable vertical (mobile) / horizontal (desktop) step timeline component
- **PROPS**: `steps: Array<{ number: number; icon: LucideIcon; title: string; description: string }>`
- **STYLING**: Numbered circles in gold, connector lines in navy, step titles in Playfair Display
- **Desktop**: Horizontal row with connector lines between steps (`flex` with `::after` pseudo-element via Tailwind arbitrary selector, or simple `<div>` dividers)
- **Mobile**: Vertical list with left-side gold line
- **Server Component** (static props)
- **GOTCHA**: Lucide icons must be passed as JSX elements, not component references, if server component: `icon: React.ReactNode`

---

### 14. CREATE `src/app/how-it-works/page.tsx`

- **LAYOUT**: Page hero → intro paragraph → `<ProcessTimeline steps={gwsSteps} />` → `<CtaBanner />`
- **5 STEPS**:
  1. Free Consultation — "We start with a no-obligation call to understand your situation and goals."
  2. Credit Audit — "We pull and analyze all three bureau reports to identify every negative item."
  3. Strategy Development — "We build your personalized credit repair and wealth roadmap."
  4. Execution & Disputing — "We prepare and submit dispute letters on your behalf, month after month."
  5. Results & Monitoring — "We track your progress and celebrate every point improvement with you."
- **Icons**: `Phone`, `Search`, `Map`, `FileText`, `TrendingUp` from lucide-react
- **generateMetadata**: `title: "How It Works"`
- **Server Component**
- **VALIDATE**: Page renders at `/how-it-works`; 5 steps visible; timeline responsive

---

### 15. ADD `src/lib/validations.ts` — Contact Form Schema

- **ADD** Zod schema for contact form. File currently has placeholder comment.
- **PATTERN**: Mirror the shape of the Server Action input
- **GOTCHA**: Zod v4 is installed. Check `z.enum` syntax — same as v3.

```ts
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.enum(["credit-repair", "financial-coaching", "both"], {
    message: "Please select a service",
  }),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
```

- **VALIDATE**: `npm run lint` — no type errors in validations.ts

---

### 16. INSTALL Resend

- **RUN**: `npm install resend --legacy-peer-deps`
- **GOTCHA**: Use `--legacy-peer-deps` — required per README (peer dep conflicts with React 19)
- **VALIDATE**: `cat package.json | grep resend` — confirms `"resend"` in dependencies

---

### 17. CREATE `src/app/contact/actions.ts` — Server Action

- **IMPLEMENT**: Server Action that validates form data, rate-limits by IP, and sends email via Resend
- **DIRECTIVE**: `"use server"` at top of file
- **RATE LIMIT**: Use `createRateLimiter(5, 60_000)` — 5 submissions per minute per IP. Get IP from `headers()` from `next/headers`.
- **VALIDATION**: Parse with `contactFormSchema.safeParse(data)`. Return `{ success: false, errors }` on failure.
- **EMAIL**: Use `new Resend(process.env.RESEND_API_KEY)`. Send to `process.env.CONTACT_EMAIL`.
- **PATTERN**: `createRateLimiter` from `src/lib/rate-limit.ts:6`
- **GOTCHA**: `headers()` in Next.js 15 is async — must `await headers()`. Rate limiter key = `x-forwarded-for` header or `"unknown"`.
- **GOTCHA**: Resend `from` address must use a verified domain. Use `"GWS Website <noreply@gordonwealthstrategies.com>"` — client needs to verify domain in Resend.
- **RETURN TYPE**: `Promise<{ success: true } | { success: false; errors?: Record<string, string[]>; message?: string }>`

```ts
"use server";

import { Resend } from "resend";
import { headers } from "next/headers";
import { createRateLimiter } from "@/lib/rate-limit";
import { contactFormSchema } from "@/lib/validations";

const resend = new Resend(process.env.RESEND_API_KEY);
const contactRateLimiter = createRateLimiter(5, 60_000);

export async function submitContactForm(formData: FormData) {
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for") ?? "unknown";
  const { success: allowed } = contactRateLimiter.check(ip);

  if (!allowed) {
    return { success: false as const, message: "Too many requests. Please try again later." };
  }

  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") || undefined,
    service: formData.get("service"),
    message: formData.get("message"),
  };

  const result = contactFormSchema.safeParse(raw);
  if (!result.success) {
    return { success: false as const, errors: result.error.flatten().fieldErrors };
  }

  const { name, email, phone, service, message } = result.data;

  await resend.emails.send({
    from: "GWS Website <noreply@gordonwealthstrategies.com>",
    to: process.env.CONTACT_EMAIL ?? "jamere@gordonwealthstrategies.com",
    subject: `New Inquiry: ${service} — ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone ?? "Not provided"}</p>
      <p><strong>Service Interest:</strong> ${service}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  return { success: true as const };
}
```

- **VALIDATE**: `npm run lint` — no type errors

---

### 18. ADD shadcn Select component

- **RUN**: `npx shadcn@latest add select`
- **CONFIRM**: `src/components/ui/select.tsx` created
- **VALIDATE**: `npm run lint`

---

### 19. CREATE `src/components/contact/contact-form.tsx`

- **DIRECTIVE**: `"use client"`
- **IMPLEMENT**: Controlled form with `useState` for field values and errors. Calls `submitContactForm` Server Action on submit.
- **FIELDS**: Name (`Input`), Email (`Input` type=email), Phone (`Input` type=tel, optional), Service Interest (`Select`), Message (`Textarea`)
- **VALIDATION**: Show inline field errors below each input (mirror `signup-form.tsx:65-66` pattern)
- **SUBMIT**: `disabled` + loading text during submission. On success: `toast.success(...)` + reset form. On error: `toast.error(...)` + show field errors.
- **PATTERN**: Mirror `signup-form.tsx` structure for state management and error display
- **GOTCHA**: Server Actions can be called directly from a client event handler. Do NOT use `<form action={submitContactForm}>` — use `onSubmit` with `FormData` constructed manually to maintain controlled input state.
- **GOTCHA**: Use `toast` from `"sonner"` (not from `@/components/ui/sonner` — that exports `Toaster`, not `toast`)

```tsx
"use client";
import { toast } from "sonner";
import { submitContactForm } from "@/app/contact/actions";
```

- **VALIDATE**: `npm run dev` — form renders at `/contact`; submit shows loading state; (test without real API key — should show error gracefully)

---

### 20. CREATE `src/app/contact/page.tsx`

- **LAYOUT**: Two-column on desktop — left: `<ContactForm />`, right: direct contact info + Calendly block
- **CALENDLY BLOCK**: Prominent section with heading "Prefer to book directly?" and a `<Button asChild>` linking to `process.env.NEXT_PUBLIC_CALENDLY_URL ?? "#"` (target="_blank" rel="noopener noreferrer")
- **DIRECT CONTACT**: Phone number, email address, with `tel:` and `mailto:` links
- **generateMetadata**: `title: "Contact Us"`
- **Server Component**: Only `<ContactForm />` sub-component is client
- **VALIDATE**: Page renders at `/contact`; form visible; Calendly button present; phone/email links work on mobile

---

### 21. CREATE `src/app/privacy-policy/page.tsx`

- **CONTENT**: Standard privacy policy covering: data collected (name, email, phone via contact form), how it's used (responding to inquiries), third parties (Resend for email, Google Analytics), user rights, contact info for privacy inquiries.
- **FORMAT**: Long-form text page with H2 sections, prose styling
- **generateMetadata**: `title: "Privacy Policy"`
- **Server Component**
- **VALIDATE**: Page renders at `/privacy-policy`; reachable from footer link

---

### 22. CREATE `src/app/terms/page.tsx`

- **CONTENT**: Terms of Service covering: nature of services (informational, not legal/financial advice), CROA compliance statement, no guarantee of specific credit score improvements, client responsibilities, governing law (Florida), contact info for legal notices.
- **CROA KEY CLAUSE**: "No service provider can legally guarantee removal of accurate, timely information from your credit report. Gordon Wealth Strategies does not make such guarantees."
- **generateMetadata**: `title: "Terms of Service"`
- **Server Component**
- **VALIDATE**: Page renders at `/terms`; reachable from footer link

---

### 23. ADD `generateMetadata` to all pages

- **UPDATE** each page file to export `generateMetadata`. Use the `title.template: "%s | Gordon Wealth Strategies"` format set in root layout — each page just sets `title: "Page Name"`.
- **ADD** `description` specific to each page
- **ADD** `openGraph` with `title`, `description`, `url` for each page
- **FILES TO UPDATE**: `page.tsx`, `about/page.tsx`, `services/page.tsx`, `how-it-works/page.tsx`, `contact/page.tsx`, `privacy-policy/page.tsx`, `terms/page.tsx`
- **VALIDATE**: View page source — `<title>` tags are unique per page

---

### 24. CREATE `src/lib/analytics.tsx`

- **IMPLEMENT**: Google Analytics 4 Script component using Next.js `<Script>` from `next/script`
- **STRATEGY**: `strategy="afterInteractive"` — loads after page is interactive, doesn't block render
- **CONDITION**: Only render if `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set (skip in dev if not configured)

```tsx
import Script from "next/script";

export function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!id) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${id}');
      `}</Script>
    </>
  );
}
```

- **ADD** `<Analytics />` to `src/app/layout.tsx` inside `<body>`
- **VALIDATE**: In browser network tab with real ID — GTM script loads

---

### 25. CREATE `.env.example`

- **CREATE** at project root: `/Users/jordanmason/WOC/2026/gws/.env.example`
- **CONTENT**:

```bash
# Contact form email delivery (https://resend.com)
RESEND_API_KEY=re_xxxxxxxxxxxx

# Email address to receive contact form submissions
CONTACT_EMAIL=jamere@gordonwealthstrategies.com

# Google Analytics 4 Measurement ID (https://analytics.google.com)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Calendly scheduling link (https://calendly.com)
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-link
```

- **VALIDATE**: `cat .env.example` shows all 4 variables

---

### 26. FINAL: Build verification

- **RUN**: `npm run build` — must complete with 0 errors
- **RUN**: `npm run lint` — must complete with 0 errors
- **RUN**: `npm run dev` — visit all pages, confirm no console errors:
  - `http://localhost:3000/`
  - `http://localhost:3000/about`
  - `http://localhost:3000/services`
  - `http://localhost:3000/how-it-works`
  - `http://localhost:3000/contact`
  - `http://localhost:3000/privacy-policy`
  - `http://localhost:3000/terms`
- **CHECK**: Footer visible on all pages with Privacy Policy + Terms links
- **CHECK**: Navbar visible on all pages with hamburger menu on mobile viewport (375px width)
- **CHECK**: Brand colors render (navy headers, gold accents, dark hero backgrounds)
- **VALIDATE**: `npm run build && npm run lint`

---

## TESTING STRATEGY

### Unit Tests (Vitest — `npm run test`)

Tests go in `src/` alongside the code or in `src/test/`. The existing `src/test/setup.ts` configures jsdom.

**Contact form validation schema** (`src/lib/validations.test.ts`):
```ts
import { describe, it, expect } from "vitest";
import { contactFormSchema } from "@/lib/validations";

describe("contactFormSchema", () => {
  it("accepts valid input", () => {
    const result = contactFormSchema.safeParse({
      name: "John Doe",
      email: "john@example.com",
      service: "credit-repair",
      message: "I need help with my credit score.",
    });
    expect(result.success).toBe(true);
  });

  it("rejects short name", () => {
    const result = contactFormSchema.safeParse({ name: "J", email: "j@j.com", service: "both", message: "hello world" });
    expect(result.success).toBe(false);
  });

  it("rejects invalid email", () => {
    const result = contactFormSchema.safeParse({ name: "John", email: "not-an-email", service: "both", message: "hello world" });
    expect(result.success).toBe(false);
  });

  it("rejects short message", () => {
    const result = contactFormSchema.safeParse({ name: "John", email: "j@j.com", service: "both", message: "hi" });
    expect(result.success).toBe(false);
  });
});
```

**Rate limiter** (`src/lib/rate-limit.test.ts`) — already deleted from git history but pattern exists:
- Test `createRateLimiter(3, 1000)`: first 3 calls return `success: true`, 4th returns `success: false`
- Test reset: after `limiter.reset()`, check returns `success: true` again

### Integration Tests

- Contact form Server Action: mock Resend, verify email payload matches form data
- Rate limiting on Server Action: verify 6th call in window is rejected

### Edge Cases to Test

- Contact form: empty required fields → specific field errors shown
- Contact form: message exactly 10 chars → passes; 9 chars → fails
- Contact form: phone field omitted → passes (optional)
- Rate limiter: exactly `maxRequests` calls succeed; `maxRequests + 1` fails
- Metadata: pages without client-specific metadata use root template title

---

## VALIDATION COMMANDS

### Level 1: Syntax & Style
```bash
npm run lint          # Biome check (0 errors required)
npm run lint:fix      # Auto-fix Biome issues
npx tsc --noEmit      # TypeScript type check (0 errors required)
```

### Level 2: Unit Tests
```bash
npm run test:run      # Vitest — all unit tests
npm run test:coverage # Coverage report
```

### Level 3: Build Verification
```bash
npm run build         # Next.js production build — 0 errors required
```

### Level 4: Manual Validation
```bash
npm run dev
# Then verify in browser:
# - All 7 pages load without console errors
# - Hamburger nav works on 375px viewport
# - Contact form shows inline validation errors
# - Footer has Privacy Policy + Terms links on every page
# - CROA disclosure text visible on /services
# - Brand colors: navy headers, gold accents, dark hero backgrounds
# - Fonts: Playfair Display on headings, Montserrat on body text
```

---

## ACCEPTANCE CRITERIA

- [ ] All 7 pages (Home, About, Services, How It Works, Contact, Privacy Policy, Terms) render at their respective routes
- [ ] Contact form validates inputs and shows field-level errors
- [ ] Contact form Server Action submits without crashing (Resend call may fail without real API key — error is handled gracefully)
- [ ] Rate limiter rejects contact form after 5 submissions per minute per IP
- [ ] Footer displays Privacy Policy and Terms of Service links on every page
- [ ] CROA disclosure text ("You have the right to dispute...") visible on `/services` and in footer
- [ ] Navbar renders hamburger menu on mobile (≤768px) and desktop links on wider screens
- [ ] GWS brand colors applied: `bg-navy`, `text-gold`, `bg-dark`, `bg-offwhite` work as Tailwind utilities
- [ ] Playfair Display applied to headings; Montserrat applied to body text
- [ ] "Book Your Free Consultation" CTA appears in hero, services page, how-it-works page, and contact page
- [ ] Calendly link accessible from contact page
- [ ] `npm run build` completes with 0 errors
- [ ] `npm run lint` completes with 0 errors
- [ ] `npx tsc --noEmit` completes with 0 errors
- [ ] Unit tests for `contactFormSchema` and rate limiter pass

---

## COMPLETION CHECKLIST

- [ ] All 26 tasks completed in order
- [ ] Each task's VALIDATE command passed immediately after completion
- [ ] `npm run build` passes (Level 3 validation)
- [ ] `npm run lint` passes (Level 1 validation)
- [ ] `npm run test:run` passes (Level 2 validation)
- [ ] Manual browser check confirms all 7 pages render correctly
- [ ] Acceptance criteria all met

---

## NOTES

**Asset dependency**: The headshot image (`/public/images/jamere-headshot.jpg`) must be provided by Jamere before the site can be fully reviewed. Build with a placeholder (Next.js `<Image>` with a solid color div fallback, or a high-quality generic placeholder).

**Resend domain verification**: The `from` email `noreply@gordonwealthstrategies.com` requires Jamere to verify the domain in his Resend account before email delivery works. Document this in the README handoff section.

**Calendly URL**: The `NEXT_PUBLIC_CALENDLY_URL` env var must be set before the Calendly button is functional. Design the button to gracefully degrade to the contact form if the env var is missing.

**Auth scaffolding preservation**: The `src/app/(auth)/` route group, `src/lib/auth/`, and `src/components/auth/` are kept untouched. These are the Phase 3 client portal foundation. The `AuthProvider` is removed from the root layout only because it's not needed for the public marketing site. When Phase 3 begins, it can be added back to a `(dashboard)` sub-layout.

**Biome tab indentation**: All new files must use tabs for indentation. Biome will fail CI if spaces are used. Configure your editor to use tabs in this project.

**`--legacy-peer-deps` requirement**: Per README, all `npm install` commands in this project require `--legacy-peer-deps` due to React 19 peer dependency conflicts.

**Confidence Score: 9/10** — High confidence because: the tech stack is fully established, patterns are well-defined, no external unknowns beyond Resend API key setup, and the rate-limiter + Zod + Server Action pattern has direct codebase precedent. The 1-point deduction accounts for potential Tailwind v4 `@theme inline` color registration gotchas that may require minor CSS debugging.
