---
name: project-conventions
description: Essential conventions for the DreamCode website codebase — i18n, SSG, landing pages, styling, and schema patterns
disable-model-invocation: true
---

<!-- @dsCard group="Project" -->

## Project Conventions for DreamCode Website

This skill encodes the non-obvious, project-specific conventions for this Next.js 13 Pages Router codebase. Always consult before writing code.

### Framework & Routing
- **Pages Router only** — never introduce App Router (`app/` directory) conventions. All pages live in `src/pages/`.
- **Static generation** — all pages use `getStaticProps`; dynamic routes use `getStaticPaths`.
- **Default locale is `es`** — root path `/` serves Spanish. English is `/en/...`.

### Internationalization (next-i18next)
- Config: `next-i18next.config.js` — `i18n: { defaultLocale: 'es', locales: ['es', 'en'], localeDetection: false }`
- **Locale detection is OFF** — middleware.js handles redirection via `NEXT_LOCALE` cookie or `accept-language` header.
- Every page's `getStaticProps` must call `serverSideTranslations(locale, [...namespaceNames])`. Missing a namespace = missing translations at runtime.
- Namespaces are per-page: `home.json`, `layout.json`, `form.json`, `about.json`, `careers.json`, `profile.json`, etc. in `public/locales/{en|es}/`.
- Client components access translations via `const { t } = useTranslation('namespace')`.
- `src/context/LanguageProvider.jsx` is a **client-side toggle** — separate from next-i18next's server locale.

### Content Pipeline (Blog)
- Markdown posts live in `src/assets/posts/{en|es}/*.md`.
- Run `npm run server` (executes `public/main.js`) to convert Markdown → JSON. This writes `postsEn.json` / `postsEs.json`.
- **Always run before building** if posts changed — stale JSON means missing/stale blog routes.
- Blog pages import JSON directly: `import postlistEn from '@/assets/posts/postsEn.json'`.

### Dynamic Landing Pages
- Route: `src/pages/landing/[slug].jsx`.
- Config source: `public/locales/{lang}/landingPages.json`.
- `LandingPageRenderer` maps section `type` → component:
  `headline`, `valueProps`, `offerings`, `pitch`, `proof`, `leadCapture`, `landingDetails`.
- The `headline` type with `useHorizonScene: true` wraps content in `LandingHorizonScene`.
- Section components live in `src/components/Landing/`.

### Styling
- **Hybrid**: global utility classes from `src/styles/common.css` (`.w_color`, `.f-lg-40`, `.container-dc`, `.box_shadow`) + scoped CSS Modules per component.
- Combine classes with template literals: `className={`${styles.localClass} ${globalUtility}`}`.
- Images use `next/image` with explicit `width`/`height` to prevent CLS.
- Images are organized by feature under `public/img/{feature}/`.

### Schema / Structured Data
- JSON-LD via reusable components in `src/components/Schema/` (exported via `index.js`).
- `_document.jsx` includes `Organization` + `WebSite` schema on **every page**.
- Page-specific schema: `<ProfessionalService>` on home, `<JobPosting>` on careers, `<BlogPosting>` + `<BreadcrumbList>` on blog.
- `src/components/MetaDatos/MetaDecorator.jsx` handles `<Head>` — pass `title`, `description`, `url`, `type`. It computes canonical + hreflang URLs.

### Key Files
- `src/assets/Constants.js` — third-party keys/URLs (client-side only).
- `src/assets/SEO/AnalyticsScripts.js` — GA4, GTM, Apollo tracker.
- `next.config.js` — CSP, security headers, i18n import.
- `middleware.js` — locale detection/redirect.

### Build Gotchas
- `getStaticProps` and `public/main.js` use `fs`/`path` to read configs at **build time**. Paths like `@/assets/posts/postsEn.json` resolve at build, not runtime.
- No test framework is installed — verify changes via `npm run build` and `npm run lint`.
