# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- Development: `npm run dev`
- Production Build: `npm run build`
- Production Start: `npm run start`
- Local Build & Start: `npm run local`
- Linting: `npm run lint`
- Content Processing (Markdown → JSON): `npm run server` — run this before building if Markdown blog posts in `src/assets/posts/{en|es}/` have changed; it outputs `src/assets/posts/postsEn.json` / `postsEs.json`.

There are no test suites configured; no test command exists.

## Architecture & Project Structure

The project is a Next.js 13 website using the **Pages Router**. Do not introduce App Router (`app/` directory) conventions.

### Key Directories

- `src/pages/`: Route-level pages (index, about, blog, careers, contact, success-stories) plus dynamic routes (`landing/[slug].jsx`, `blog/[postId].jsx`, `careers/[urlId].jsx`). Static site generation via `getStaticProps` / `getStaticPaths`.
- `src/components/`: UI components organized by domain/feature (`Home`, `Landing`, `SoftwareDev`, `StaffAug`, `SystemsMod`, `UI`, `Blog`, `Careers`, `Contact`, `About`, `Position`, `Schema`, `MetaDatos`, `StoriesCustomers`, `Great`, `DataBase`). Components are largely functional and data-driven, receiving content via props from localization JSON files.
- `src/styles/`: Global styles (`globals.css`, `common.css`, `layout.css`, `home.css`) plus CSS module directories (e.g., `Banner/`). Global utility classes live in `common.css` (e.g., `.container-dc`, `.w_color`, `.f-lg-40`).
- `src/assets/`: Static content — `jobs/enJobs.json` + `esJobs.json` (job board), `posts/{en|es}/*.md` + generated `postsEn.json`/`postsEs.json` (blog), `SEO/AnalyticsScripts.js`, `Constants.js` (third-party keys/URLs), `fonts/`, `iconos/`, `animations/`, `useLocalStorage.jsx`.
- `src/context/`: `LanguageProvider.jsx` — client-side language toggle context (`en`/`es`), separate from next-i18next's server-side locale.
- `src/pages/landing/[slug].jsx`: Dynamic landing page route. Loads configuration from `public/locales/{lang}/landingPages.json`, renders sections through `LandingPageRenderer`.
- `public/locales/`: Translation JSON files for `next-i18next` (`en/`, `es/`). Contains page-specific namespaces (`home.json`, `layout.json`, `form.json`, `landingPages.json`, etc.) plus an `i18n.js` entry point.
- `middleware.js`: Locale detection/redirection based on `NEXT_LOCALE` cookie or `accept-language` header; redirects root paths without a locale prefix.

### Core Patterns

**Dynamic Landing Pages**
A slug-based dynamic route (`src/pages/landing/[slug].jsx`) assembles pages from JSON configs in `public/locales/{lang}/landingPages.json`. `LandingPageRenderer` maps section `type` values (`headline`, `valueProps`, `offerings`, `pitch`, `proof`, `leadCapture`, `landingDetails`) to section components under `src/components/Landing/`. The `headline` type with `useHorizonScene: true` wraps content in `LandingHorizonScene`.

**Localization**
Implemented with `next-i18next`. Default locale is `es`; supported locales are `es` and `en`. Locale detection is disabled (`localeDetection: false`). Pages use `serverSideTranslations(locale, [...namespaces])` in `getStaticProps` and `useTranslation(ns)` on the client. All page components must export `getStaticProps` and `getStaticPaths` (for dynamic routes) to support per-locale static generation. The middleware redirects bare paths to the locale-prefixed variant.

**Content Pipeline (Blog)**
Markdown posts in `src/assets/posts/{en|es}/*.md` are converted to JSON by `public/main.js` (`npm run server`), producing `src/assets/posts/postsEn.json` and `postsEs.json`. Blog pages import the JSON directly. Always run the pipeline before building if posts changed.

**Schema / Structured Data**
JSON-LD markup is emitted via reusable components under `src/components/Schema/` (`Organization`, `WebSite`, `ProfessionalService`, `JobPosting`, `BlogPosting`, `BreadcrumbList`) and inline in `_document.jsx` (Organization + WebSite on every page). Page-level schema (e.g., `ProfessionalService` on home, `JobPosting` on career offers, `BlogPosting` + `BreadcrumbList` on posts) is included in page JSX.

**Styling**
Hybrid strategy: global utility classes from `src/styles/common.css` + scoped CSS Modules per component. Combined classes use template literals: `className={\`${styles.localClass} ${globalUtilityClass}\`}`. Images use `next/image` with explicit `width`/`height` to prevent CLS.

**Critical Constraints & Gotchas**
- `getStaticProps` and custom scripts use `fs`/`path` to read configs directly from `public/locales` and `src/assets` — these paths resolve at build time, not runtime.
- Blog SSG depends on the JSON output of `npm run server`; stale JSON means missing/stale blog routes.
- Locale is `es` by default; root path `/` serves Spanish. English is `/en/...`.
- i18n namespaces must be listed in `serverSideTranslations` calls per page (e.g., `['home', 'form', 'layout']`).
- Images are organized by feature under `public/img/{feature}/`.
- No test framework is installed; changes are verified via `npm run build` and `npm run lint`.

### Related Guidance

- `AGENTS.md` — AI agent guide with overlapping architecture notes; prefer this CLAUDE.md for command and pattern reference.
- `README.md` — project overview, features, quick start, localization, job board, blog pipeline, deployment.
- `SEO_AUDIT_IMPLEMENTATION_PLAN.md` — SEO fix priorities and progress tracking for dreamcodesoft.com.
- Memory files in `.claude/memory/`: `analytics-tracker-documentation.md` — Apollo tracker decisions; `remove-fabricated-review-schema.md` — fabricated Review schema removal.
