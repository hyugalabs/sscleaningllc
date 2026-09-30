# SS Cleaning LLC: one-page site

A one-page spec site for SS Cleaning LLC (Shellie Kiser, Atwater, OH). The quote request is a carbon-copy work order. When a visitor sends it, their messages app (SMS to 234-233-0504) or email app (seamanshellie@gmail.com) opens with the order already filled in. There is no backend and there are no API keys.

Stack: Next.js 16 (App Router), TypeScript, Tailwind CSS v4, lucide-react.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build check
```

## Deploy to Vercel

```bash
npx vercel         # first run links the project
npx vercel --prod
```

Or push to GitHub and import the repo at vercel.com/new. No environment variables are needed. The canonical URL, sitemap and robots file read `VERCEL_PROJECT_PRODUCTION_URL` automatically. If you attach a custom domain, it is picked up on the next deploy.

## Business facts

Every phone number, email, county and rating is in [lib/business.ts](lib/business.ts). Change it there and it updates everywhere, including the Google structured data.

## Placeholders to replace with Shellie's real material

| What | Where | Note |
|---|---|---|
| Residential photo | `public/photos/residential.jpg` | Unsplash stock (photo-1649083048337) |
| Commercial photo | `public/photos/commercial.jpg` | Unsplash stock (photo-1577412647305) |
| Post-construction photo | `public/photos/post-construction.jpg` | Unsplash stock (photo-1665507279458) |
| "Sample photo" captions + footer credit | `app/page.tsx` | Remove once real job photos are in |
| Service descriptions / "Good for" lists | `lib/business.ts` | Written from her listed services; confirm scope with Shellie |
| Towns served | not listed | Only the three counties are shown; add specific towns once she confirms them |

Nothing on the page is invented: no prices, no hours, no testimonials. The rating (5.0, 12 reviews), BBB A+, insured and workers' comp all come from her Google listing, business card and Facebook page.
