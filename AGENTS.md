# AI Agents Guide: Dreamcode Website

## Commands
- **Development**: `npm run dev` — Next.js dev server on `localhost:3000`
- **Build**: `npm run build` — static production build (Pages Router SSG)
- **Local build + start**: `npm run local` — `next build && next start`
- **Start production server**: `npm run start`
- **Lint**: `npm run lint`
- **Content pipeline**: `npm run server` — converts Markdown posts to JSON (`src/assets/posts/postsEn.json` / `postsEs.json`)

## Critical: no test suite
No test framework installed and no `test` script. Changes are verified via `npm run build` and `npm run lint` only.

## Content pipeline (blog)
Markdown → JSON. Source: `src/assets/posts/{en|es}/*.md` → `src/assets/posts/postsEn.json` / `postsEs.json`.
- **Always run `npm run server` before `npm run build` if blog posts changed.**
- Pipeline: `public/main.js` reads Markdown front-matter + content, outputs sorted JSON by date (newest first).
- Blog dynamic route `src/pages/blog/[postId].jsx` reads from generated JSON; uses `fallback: true` (ISR `revalidate: 10`).
- Markdown requires front-matter fields: `title`, `metaTitle`, `meta_description`, `read`, `date`, `url`, `imglink`, `category`.

## Framework & routing
- **Next.js 13 Pages Router only.** Do **not** introduce App Router (`app/`) conventions.
- Pages live in `src/pages/` and export `getStaticProps`/`getStaticPaths` for per-locale static generation.
- `pages/404.jsx`, `pages/_app.js`, `pages/_document.jsx` are custom.
- Import alias `@/` maps to `src/`; `@*` maps to `public/` (see `jsconfig.json`).
- **No TypeScript** — plain JavaScript only.

## Localization (next-i18next)
- Supported locales: `es` (default) and `en`. `localeDetection: false` in config.
- Root path `/` serves Spanish; English is `/en/...`.
- `middleware.js` redirects bare paths to locale-prefixed variant using `NEXT_LOCALE` cookie or `accept-language` header (except `es`, which stays at root).
- Translation files: `public/locales/{en|es}/{page}.json` (e.g., `home.json`, `layout.json`, `form.json`, `landingPages.json`, `posts.json`, `profile.json`).
- Every page using translations calls `serverSideTranslations(locale, [...namespaces])` in `getStaticProps` and `useTranslation(ns)` client-side. **List every namespace used** (e.g., `['home', 'form', 'layout']`).
- Client-side language toggle lives in `src/context/LanguageProvider.jsx`, separate from next-i18next server-side locale.

## Dynamic landing pages
- Route: `src/pages/landing/[slug].jsx` — ISR `revalidate: 60`, `fallback: false` (unknown slugs return 404).
- Config: `public/locales/{lang}/landingPages.json` (4 slugs: `meeting`, `insurance`, `health`, `retail` × 2 locales = 8 pages).
- Assembly: `LandingPageRenderer` maps section `type` → components in `src/components/Landing/`:
  - `headline` → `LandingHeadline` (supports `useHorizonScene: true` for animated background)
  - `valueProps` → `LandingValueProps` (dynamic icon resolver from any react-icons library)
  - `offerings` → `LandingOfferings` (MUI Accordion; fields: `title`, `description`, `question`, `list[]`, `answer` — `description` and `answer` are **independent**, both render when present)
  - `pitch` → `LandingPitch` (rotating keyword slider + CTA)
  - `proof` → `LandingProof` (YouTube embed grid; optional `image` field)
  - `leadCapture` → `LandingLeadCapture` (NeetoCal booking widget embed)
  - `landingDetails` → `LandingDetails` (multi-card section; controlled by `showDetailsSection` flag)
- CSS: `src/components/Landing/landingPage.module.css` + design tokens in `src/styles/globals.css` `:root` (`--landing-cyan`, `--landing-bg-dark`, etc.).
- Responsive breakpoints: Mobile ≤512px, Tablet 513-900px, Laptop ≥901px.

## Career pages (jobs)
- Route: `src/pages/careers/[urlId].jsx` — ISR `revalidate: 10`, `fallback: true`.
- Data: `src/assets/jobs/enJobs.json` + `esJobs.json` (fields: `name`, `experts[]`, `english`, `location`, `remote`, `years`, `rol[]`, `url`, `datePosted`, `employmentType`).
- Schema: `JobPosting` JSON-LD component rendered on detail pages.

## Styling
- Hybrid: global utilities in `src/styles/common.css` + scoped CSS Modules per component.
- Combined classes via template literals: `className={\`${styles.localClass} ${globalUtilityClass}\`}`.
- Global utility patterns: `.container-dc` (1200px max-width), `.w_color`, `.m_color`, `.f-lg-*`, `.f_*`, `mt_*`, `mb_*`, `sec--area`, `sec_pad`.
- `next/image` with explicit `width`/`height` to prevent CLS (required).
- Bootstrap 5 grid used alongside custom CSS.

## Schema / SEO
- JSON-LD components in `src/components/Schema/` (`Organization`, `WebSite`, `ProfessionalService`, `JobPosting`, `BlogPosting`, `BreadcrumbList`).
- Organization + WebSite rendered inline in `_document.jsx` (on every page); page-level schema included in page JSX.
- **Security headers + CSP** defined in `next.config.js` — allows GTM/GA, Google Fonts, Apollo.io, NeetoCal, YouTube, Vercel Live, Google Ads.
- `robots.txt` + `sitemap.xml` in `public/` with reciprocal hreflang (en/es) + x-default.
- `_document.jsx` dynamically sets `<html lang={this.props.locale}>` (es/en).
- `MetaDecorator.jsx` outputs canonical + hreflang alternates per page.

## Assets
- Images organized by feature under `public/img/{feature}/`; blog images in `public/img/posts/`.
- Landing page static assets: `public/img/landing/talento-tecnologico.png`.

## Deployment
- Easiest path: Vercel. Preserve language routing in deployment settings.
- No CI workflows configured in this repo.
- Build generates ~101 static pages (verified).

## Known console warnings (intentional, accepted)
- **Apollo.io 400 Bad Request** on `POST https://aplo-evnt.com/...` — third-party tracker, non-functional impact. CSP allows `connect-src apolo-evnt.com`.
- **next/image aspect-ratio warnings** for logo, Clutch/TopDevelopers badges, career images — CSS overrides one dimension; rendering is correct.

## Related guidance
- `CLAUDE.md` — overlapping command and pattern reference.
- `README.md` — project overview and features.
- `SEO_AUDIT_IMPLEMENTATION_PLAN.md` — SEO fix priorities and progress tracking.
- `handoff.md` — detailed architecture, component inventory, landing page system docs.
- `.claude/memory/analytics-tracker-documentation.md` — third-party tracking scripts reference.