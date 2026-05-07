# Product Requirements Document
## Gordon Wealth Strategies LLC — Official Website

**Version:** 1.0  
**Date:** 2026-05-06  
**Prepared for:** Jordan Mason (Web Development Partner)  
**Client:** Jamere Gordon, CEO & Wealth Strategist  
**Domain:** gordonwealthstrategies.com  
**Confidential**

---

## 1. Executive Summary

Gordon Wealth Strategies LLC is a Florida-based personal finance and credit repair firm founded by Jamere Gordon. The business serves individuals aged 25–50 who are struggling with damaged credit, unmanageable debt, and a lack of financial direction. The company offers two core service pillars — expert credit repair and personalized financial coaching — with a mission to bridge the gap between where clients are financially and where they deserve to be.

The website must function as the primary digital sales and trust-building asset for a one-person firm built on personal brand and credibility. It needs to communicate the premium quality of a boutique wealth management firm while remaining approachable and empathetic to everyday people who feel lost with their finances. Every page should speak directly to the client's pain point and move them toward a free consultation booking.

**MVP Goal:** Launch a production-ready, mobile-first marketing website with five required pages (Home, About, Services, How It Works, Contact), CROA-compliant disclosures, Calendly booking integration, contact form, and SEO foundation — giving Jamere a professional digital presence to convert inbound leads.

---

## 2. Mission

**Product Mission:** Deliver a premium digital presence that earns the trust of financially stressed individuals and converts them into Gordon Wealth Strategies clients through clarity, credibility, and a compelling personal brand.

**Core Principles:**

1. **Trust first** — Every element should reinforce that this is a legitimate, compliant, credible firm — not a predatory credit repair scam.
2. **Personal brand over corporate** — Jamere's face, story, and voice are the product. The site amplifies his identity, not a generic service.
3. **Mobile-first always** — The target audience will predominantly arrive via mobile. Performance and UX on mobile is non-negotiable.
4. **Pain-to-solution storytelling** — Copy and layout guide visitors from recognition of their problem to confidence in the solution.
5. **Compliance by design** — CROA disclosures, privacy policy links, and contact visibility are baked into the architecture, not bolted on.

---

## 3. Target Users

### Primary Persona: "The Credit-Stuck Adult"
- **Age:** 25–50, Florida resident
- **Situation:** Credit score below 650, denied for a mortgage, auto loan, or business funding
- **Pain points:** Doesn't know where to start; has tried DIY credit repair and felt overwhelmed; living paycheck to paycheck; wants to build wealth but feels trapped
- **Tech comfort:** Moderate — primarily mobile (iOS/Android), uses Google, Instagram, Facebook
- **Decision driver:** Trust and relatability. They need to believe Jamere understands their situation and can actually help.

### Secondary Persona: "The Aspiring Homebuyer"
- **Age:** 28–45
- **Situation:** Preparing to qualify for a mortgage within 6–18 months; credit is the barrier
- **Pain points:** Banks keep saying "not yet"; wants a clear timeline and plan
- **Decision driver:** Process clarity and proven results (before/after scores)

### Secondary Persona: "The Small Business Owner"
- **Age:** 30–50
- **Situation:** Needs personal credit improvement to access business capital
- **Pain points:** Business is growing but personal credit is blocking funding
- **Decision driver:** ROI framing — fixing credit unlocks capital

---

## 4. MVP Scope

### Core Functionality
- ✅ Home page with hero, services overview, trust indicators, and CTA
- ✅ About page with Jamere's story, mission, and headshot
- ✅ Services page with credit repair and financial coaching breakdowns
- ✅ How It Works page with visual step-by-step process
- ✅ Contact page with form + phone + email + Calendly booking link
- ✅ Footer with navigation, contact info, social links, and compliance links
- ✅ Privacy Policy page (CROA compliance)
- ✅ Terms of Service page (CROA compliance)
- ✅ CROA disclosure language on relevant pages
- ✅ Contact form with email notification to jamere@gordonwealthstrategies.com

### Technical
- ✅ Next.js 15 App Router with TypeScript
- ✅ Tailwind CSS v4 for styling
- ✅ Mobile-first responsive design
- ✅ SSL / HTTPS (via Vercel)
- ✅ Basic on-page SEO (meta titles, descriptions, Open Graph, alt tags)
- ✅ Google Analytics 4 integration
- ✅ Image optimization (Next.js `<Image>` component)
- ✅ shadcn/ui component library
- ✅ Biome for linting/formatting

### Integration
- ✅ Calendly embed or redirect for free consultation booking
- ✅ Contact form with server action (email via Resend or similar)
- ✅ Social media links (Instagram, Facebook)
- ❌ QR code generator (static QR image included as asset instead)

### Deferred to Phase 2
- ❌ Blog / Resources section with CMS
- ❌ Testimonials page (content not yet available)
- ❌ FAQ page (can be added once content is ready)
- ❌ Client portal or account login
- ❌ Payment integration
- ❌ Live chat widget
- ❌ Animated credit score counters / dynamic statistics
- ❌ Newsletter signup / email marketing integration
- ❌ Multi-language support
- ❌ Neon Postgres / Drizzle ORM (not needed for marketing site MVP)
- ❌ Neon Auth (not needed for MVP — no authenticated user flows)

---

## 5. User Stories

**1. First-time visitor arriving from Instagram**
> As someone who was denied a mortgage due to my credit score, I want to immediately understand what Gordon Wealth Strategies does and how it's different, so that I feel hopeful and curious enough to keep reading instead of bouncing.

*Example:* Hero section headline "Repair Your Credit. Rebuild Your Life." with Jamere's headshot and a "Book Your Free Consultation" CTA visible above the fold on mobile.

**2. Prospect evaluating legitimacy**
> As a skeptical visitor who has been scammed by credit repair companies before, I want to see proof that Gordon Wealth Strategies is licensed, bonded, and legally compliant, so that I trust them with my personal financial information.

*Example:* Trust badges on the home page — Florida LLC, Surety Bond, CROA Compliance, EIN Registered — with a short explainer.

**3. Prospect exploring services**
> As someone overwhelmed by credit issues, I want to clearly understand what the credit repair process looks like step by step, so that I know what I'm signing up for before I book a call.

*Example:* Services page with process timeline: Review → Dispute → Monitor → Results, with expected timelines (6–12 months).

**4. Ready-to-book visitor**
> As a prospect who is ready to get started, I want to book a free consultation call directly from the website without having to send an email and wait, so that I can take action while my motivation is high.

*Example:* "Book Your Free Consultation" button in the hero, services page footer, and contact page — all linking to Calendly.

**5. Visitor researching Jamere personally**
> As someone considering trusting a financial professional with sensitive personal data, I want to learn about Jamere's background, mission, and why he started this business, so that I feel a personal connection and confidence in his expertise.

*Example:* About page with Jamere's headshot, origin story, credentials, and mission statement quote.

**6. Mobile user on the go**
> As someone browsing on my phone between work shifts, I want the entire site to load quickly and be easy to navigate with my thumb, so that I can get the information I need without pinching and zooming.

*Example:* Mobile-first layout with tap-friendly CTAs, minimal content density, and sub-2-second load time on 4G.

**7. Visitor with a specific question**
> As someone unsure about pricing or timelines, I want to find answers to common questions without having to call, so that I can pre-qualify myself before booking.

*Example:* FAQ section embedded on the Services page or a standalone FAQ page (Phase 2).

**Technical Story — Developer:**
> As the developer, I want a well-organized Next.js App Router project with reusable layout components and consistent design tokens, so that adding Phase 2 pages (Blog, Testimonials, FAQ) requires minimal rework.

---

## 6. Core Architecture & Patterns

### High-Level Architecture
Static-first marketing site built on Next.js 15 App Router. No authentication required for MVP. Contact form uses a Next.js Server Action to send email via a transactional email service. All pages are statically generated at build time (SSG) except the contact form endpoint (Server Action).

### Directory Structure
```
src/
├── app/
│   ├── layout.tsx              # Root layout — fonts, metadata, analytics
│   ├── page.tsx                # Home page
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── how-it-works/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   │   └── actions.ts          # Server Action for contact form
│   ├── privacy-policy/
│   │   └── page.tsx
│   ├── terms/
│   │   └── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   ├── sections/               # Page section components
│   │   ├── hero.tsx
│   │   ├── services-overview.tsx
│   │   ├── trust-indicators.tsx
│   │   ├── process-timeline.tsx
│   │   └── cta-banner.tsx
│   └── ui/                     # shadcn/ui components
└── lib/
    ├── validations.ts          # Zod schemas for contact form
    └── utils.ts
```

### Key Design Patterns
- **Server Components by default** — only client components where interactivity is needed (mobile nav toggle, contact form)
- **Server Actions** for contact form submission — no separate API routes needed
- **CSS variables for design tokens** — brand colors and fonts defined in `globals.css` and consumed via Tailwind
- **Metadata API** — each page exports a `generateMetadata` function for SEO
- **Zod validation** on both client and server for the contact form

---

## 7. Features

### 7.1 Home Page
- **Hero Section:** Full-bleed dark (navy/black) background, Jamere's headshot prominent, headline options from brief, tagline, primary CTA button ("Book Your Free Consultation")
- **Services Overview:** Two-column card layout summarizing Credit Repair and Financial Coaching with icons and "Learn More" links
- **Trust Indicators Bar:** Florida LLC · Surety Bond · CROA Compliant · EIN Registered
- **Pain Point Section:** Short copy block addressing the four key pain points from the brief
- **Testimonial Teaser:** Placeholder section ready for real testimonials in Phase 2
- **Footer CTA:** Repeating "Start Your Journey" CTA before the footer

### 7.2 About Page
- Jamere's headshot (large, professional)
- Origin story and mission statement
- "Why I started GWS" narrative copy
- Credentials and trust indicators
- Brand statement quote (pull quote design)

### 7.3 Services Page
- **Credit Repair Section:** What's included, process, timeline (6–12 months), pricing reference ($99–$149/mo), CROA-compliant language
- **Financial Coaching Section:** What's included, session format, pricing reference ($200–$400/mo)
- **No Guarantee Disclaimer:** Required by CROA — no promises of specific score improvements
- **CTA:** "Book Your Free Consultation" at the bottom

### 7.4 How It Works Page
- 5-step visual timeline: Consultation → Credit Audit → Strategy Development → Execution & Disputing → Results & Monitoring
- Each step has icon, title, and 2–3 sentence description
- Timeline format (horizontal on desktop, vertical on mobile)

### 7.5 Contact Page
- Contact form: Name, Email, Phone, Message, Service Interest (dropdown: Credit Repair / Financial Coaching / Both)
- Direct contact info: (813) 480-8325 · jamere@gordonwealthstrategies.com
- Calendly embed or prominent booking link for free consultation
- Form validation with Zod
- Server Action sends email notification on submission
- Success/error toast feedback (Sonner)

### 7.6 Footer (Global)
- Navigation links to all pages
- Contact info (phone + email) visible on every page
- Social links: Instagram, Facebook
- Privacy Policy and Terms of Service links (required on every page — CROA)
- Copyright line

### 7.7 CROA Compliance Layer
- Disclosure on Services page: client's right to dispute for free
- No guarantees language throughout
- Privacy Policy page
- Terms of Service page
- Footer compliance links on every page

---

## 8. Technology Stack

### Core
| Technology | Version | Purpose |
|---|---|---|
| Next.js | 15.x | Framework — App Router, SSG, Server Actions |
| React | 19.x | UI rendering |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility-first styling |
| shadcn/ui | 3.x | Accessible component library |

### Libraries
| Library | Version | Purpose |
|---|---|---|
| Zod | 4.x | Form validation schemas |
| Sonner | 2.x | Toast notifications (form feedback) |
| Lucide React | 0.575+ | Icons |
| clsx + tailwind-merge | Latest | Conditional class utilities |

### Dev Tools
| Tool | Purpose |
|---|---|
| Biome | Linting and formatting |
| Vitest | Unit testing |
| Drizzle Kit | DB schema tooling (Phase 2 only) |

### Third-Party Integrations
| Service | Purpose |
|---|---|
| Calendly | Free consultation booking |
| Resend (or Nodemailer) | Contact form email delivery |
| Google Analytics 4 | Visitor tracking |
| Vercel | Hosting, SSL, CI/CD |

### Fonts (Google Fonts / Next.js font optimization)
- **Display:** Playfair Display (serif — luxury, elegant)
- **Body:** Montserrat (sans-serif — clean, readable)

---

## 9. Security & Configuration

### Authentication
No user authentication required for MVP. The site is a public marketing site.

### Environment Variables
```bash
# Contact form
RESEND_API_KEY=                    # Transactional email service
CONTACT_EMAIL=jamere@gordonwealthstrategies.com

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=     # Google Analytics 4

# Calendly (if embedding)
NEXT_PUBLIC_CALENDLY_URL=          # Calendly scheduling link
```

### Security Scope
**In scope:**
- HTTPS via Vercel SSL
- Server-side form validation (Zod) to prevent malformed submissions
- Rate limiting on contact form Server Action (prevent spam)
- No sensitive data stored — contact form emails and exits the system

**Out of scope (MVP):**
- User accounts or session management
- Database with PII
- Payment processing
- Admin dashboard

### Deployment
- **Platform:** Vercel (recommended — zero-config Next.js)
- **Domain:** gordonwealthstrategies.com — configure DNS to Vercel nameservers
- **Branch strategy:** `main` → production, `develop` → preview deployments
- **Build command:** `next build`
- **Output:** Static + serverless (contact form Server Action)

---

## 10. API Specification

### Contact Form — Server Action
**File:** `src/app/contact/actions.ts`

```typescript
// Input schema (Zod)
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.enum(["credit-repair", "financial-coaching", "both"]),
  message: z.string().min(10).max(1000),
})

// Response
type ActionResult = 
  | { success: true }
  | { success: false; errors: Record<string, string[]> }
```

**On success:** Sends email to `jamere@gordonwealthstrategies.com` with form data, returns `{ success: true }`, shows success toast.

**On failure:** Returns field-level errors, shows error toast, preserves form state.

No external REST API endpoints are needed for MVP.

---

## 11. Success Criteria

### MVP Definition
The MVP is complete when Gordon Wealth Strategies has a live, publicly accessible website at gordonwealthstrategies.com that Jamere can confidently share with leads and on social media.

### Functional Requirements
- ✅ All 5 required pages render correctly on mobile and desktop
- ✅ Contact form submits successfully and Jamere receives an email notification
- ✅ Calendly booking is accessible from at least 3 locations on the site
- ✅ CROA disclosures are present on Services page and footer
- ✅ Privacy Policy and Terms of Service pages exist and are linked in the footer
- ✅ Jamere's headshot is displayed on Home and About pages
- ✅ Brand colors (Navy #1B3A6B, Gold #C9A84C) are consistently applied
- ✅ Google Analytics 4 is tracking page views
- ✅ Site passes Lighthouse mobile score ≥ 85 (Performance, Accessibility, SEO)
- ✅ All pages have unique meta titles and descriptions
- ✅ SSL certificate is active (HTTPS)

### Quality Indicators
- Lighthouse Performance ≥ 85 on mobile
- Lighthouse Accessibility ≥ 90
- Lighthouse SEO ≥ 90
- Contact form has server-side rate limiting
- No console errors in production

### User Experience Goals
- Above-the-fold CTA visible without scrolling on iPhone 14 screen
- Font sizes readable without zooming on mobile
- Navigation accessible via hamburger menu on mobile
- Page load < 2 seconds on 4G connection

---

## 12. Implementation Phases

### Phase 1 — Foundation & Core Pages (Week 1–2)
**Goal:** Establish project scaffolding and deliver the most critical pages.

**Deliverables:**
- ✅ Next.js 15 project setup with TypeScript, Tailwind v4, shadcn/ui, Biome
- ✅ Design tokens in `globals.css` (brand colors, fonts)
- ✅ Global layout: Navbar and Footer components
- ✅ Home page (hero, services overview, trust indicators, CTA)
- ✅ About page (headshot, story, mission)
- ✅ Google Fonts integration (Playfair Display + Montserrat)

**Validation:** Home and About pages render on localhost with correct brand colors and fonts; headshot asset placed.

---

### Phase 2 — Services, Process & Contact (Week 2–3)
**Goal:** Complete all required pages and functional contact/booking flows.

**Deliverables:**
- ✅ Services page with credit repair + coaching breakdowns and CROA language
- ✅ How It Works page with 5-step visual timeline
- ✅ Contact page with validated form (Zod) and Server Action
- ✅ Email notification on contact form submission (Resend integration)
- ✅ Calendly integration (embed or redirect) on Contact page
- ✅ Privacy Policy page
- ✅ Terms of Service page

**Validation:** Contact form successfully delivers email; Calendly link functional; CROA disclosures present.

---

### Phase 3 — SEO, Analytics & Polish (Week 3–4)
**Goal:** Production-ready quality with SEO and tracking in place.

**Deliverables:**
- ✅ Metadata (title, description, Open Graph) for all pages
- ✅ Alt text on all images
- ✅ Google Analytics 4 integration
- ✅ Mobile responsiveness audit and fixes across all pages
- ✅ Lighthouse audit — hit target scores
- ✅ Contact form rate limiting
- ✅ Final content review with Jamere

**Validation:** Lighthouse mobile scores meet targets; GA tracking events firing in real-time report.

---

### Phase 4 — Launch & Handoff (Week 4)
**Goal:** Deploy to production and hand off to Jamere.

**Deliverables:**
- ✅ Deploy to Vercel production
- ✅ DNS configuration for gordonwealthstrategies.com
- ✅ SSL certificate active
- ✅ QR code asset generated pointing to booking URL
- ✅ Jamere walkthrough of contact form, GA dashboard, and Calendly

**Validation:** Site live and accessible at gordonwealthstrategies.com; Jamere can independently monitor analytics and receive form submissions.

---

## 13. Future Considerations

### Phase 2 Features (Post-Launch)
- **Testimonials page** — Client success stories with before/after credit scores (collect after first month of clients)
- **FAQ page** — Common questions on process, pricing, timelines
- **Blog / Resources section** — SEO content targeting "credit repair Florida," "how to fix credit score," etc. — significant long-term traffic driver
- **Live chat** — Intercom or Crisp for instant engagement of hot leads

### Phase 3 — Client Portal
- **Neon Auth + Drizzle integration** — existing scaffolding in the repo supports this
- Client progress dashboard (dispute status, score tracking)
- Document upload portal (credit reports, intake forms)
- Payment integration (Stripe) for retainer billing

### Marketing Integrations
- Email marketing (Mailchimp / Klaviyo) with newsletter signup
- Facebook Pixel / Meta Ads conversion tracking
- Instagram feed embed
- Google Business Profile integration

### Advanced SEO
- Structured data (LocalBusiness schema for GWS)
- Sitemap.xml and robots.txt
- Core Web Vitals monitoring (Vercel Analytics)

---

## 14. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| **CROA compliance gap** — Missing required disclosures could expose the business to legal liability | Medium | High | Review all service copy against CROA checklist before launch; include attorney-reviewed disclaimer templates |
| **Headshot / asset quality** — Low-resolution headshot degrades the luxury brand feel | Medium | High | Request highest-resolution source file from Jamere before development; test at multiple viewport sizes |
| **Calendly dependency** — If Calendly embed breaks or URL changes, booking flow is broken | Low | High | Use a redirect link (not embed) as fallback; document the Calendly URL in env vars for easy updates |
| **Contact form spam** — Without rate limiting, the form endpoint gets flooded | Medium | Medium | Implement server-side rate limiting on the Server Action; add honeypot field; consider Turnstile CAPTCHA |
| **Content delays from client** — Testimonials, real statistics, and final copy not ready at launch | High | Medium | Design sections to gracefully handle placeholder content; launch with what's available and update via Phase 2 |

---

## 15. Appendix

### Brand Colors
| Name | Hex | Usage |
|---|---|---|
| Navy Blue | `#1B3A6B` | Primary — headers, buttons, accents |
| Gold | `#C9A84C` | Secondary — highlights, icons, borders |
| Dark Background | `#0d1117` | Hero sections, dark areas |
| Off White | `#F5F5F0` | Page backgrounds, light sections |
| Charcoal | `#333333` | Body text |

### Contact Information (Client)
- **Client:** Jamere Gordon, CEO & Wealth Strategist
- **Phone:** (813) 480-8325
- **Email:** jamere@gordonwealthstrategies.com
- **Domain:** gordonwealthstrategies.com

### Key Dependencies
- [Next.js 15 Docs](https://nextjs.org/docs)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Drizzle ORM](https://orm.drizzle.team) (Phase 3)
- [Neon Auth](https://neon.tech/docs/guides/neon-auth) (Phase 3)
- [Resend](https://resend.com/docs) — email delivery for contact form
- [Calendly](https://calendly.com) — consultation booking

### Repository Structure
```
/Users/jordanmason/WOC/2026/gws
├── .claude/
│   ├── PRD.md                  # This document
│   └── commands/
├── src/
│   ├── app/                    # Next.js App Router pages
│   ├── components/             # Reusable React components
│   ├── lib/                    # Utilities, validations, DB
│   └── types/                  # TypeScript type definitions
├── public/                     # Static assets (headshot, logos)
├── tests/                      # E2E and unit tests
├── package.json
├── next.config.ts
└── tailwind.config.ts
```

### Source Document
- `GWS Website Brief.docx` — original client brief with full business context, brand guidelines, and content direction
