# Bloom Spa

Luxury marketing & booking site for **Bloom Spa** — Kibagabaga, Kigali, Rwanda.

Built with Next.js 15 (App Router), Tailwind CSS v4, Framer Motion, and EmailJS.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in EmailJS keys and your business info
npm run dev
```

Open <http://localhost:3000>.

## Environment

All configuration lives in `.env.local` (see `.env.example`). Notable knobs:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL — drives sitemap, OG, JSON-LD |
| `NEXT_PUBLIC_BUSINESS_*` | Address, phone, email, WhatsApp, IG |
| `NEXT_PUBLIC_HOURS_*` | Opening hours per day (used in booking time grid + schema) |
| `NEXT_PUBLIC_NOTIFY_EMAIL_ENABLED` | Show "Email" channel option in booking |
| `NEXT_PUBLIC_NOTIFY_WHATSAPP_ENABLED` | Show "WhatsApp" channel option in booking |
| `NEXT_PUBLIC_EMAILJS_*` | Service ID, template ID, public key from <https://www.emailjs.com> |

If EmailJS keys are empty, the booking form still submits — it just logs the payload to the console and (if enabled) opens the pre-filled WhatsApp link. Useful for local dev.

### EmailJS template

The booking form posts these variables to your EmailJS template:

```
{{to_business}}      {{business_email}}
{{service_name}}     {{service_duration}}    {{service_price}}
{{booking_date}}     {{booking_time}}
{{customer_name}}    {{customer_phone}}      {{customer_email}}
{{customer_notes}}   {{notification_channel}}
```

## Swapping in your own photos

Stock photos from Unsplash are referenced by URL inside `src/data/services.ts`. To use your own:

1. Drop JPGs into `public/images/services/<slug>.jpg`.
2. Replace the `image:` field in the service entry with `/images/services/<slug>.jpg`.
3. Same pattern for the hero (`src/components/sections/Hero.tsx`), About (`src/components/sections/About.tsx`), and Gallery (`src/components/sections/Gallery.tsx`).

## Scripts

```bash
npm run dev        # local dev
npm run build      # production build
npm run start      # serve production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

## Deployment

The whole site is statically renderable. Recommended: Vercel (zero-config). Netlify and Cloudflare Pages also work — point them at `next build`.
