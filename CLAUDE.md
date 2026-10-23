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

---

## Standing Rules (apply to every conversation and every new requirement)

These rules are enforced automatically — no exceptions without explicit user override.

### 1. Never Commit or Push Changes
**The user owns all commits and pushes.** Claude Code must never run `git commit`, `git push`, `git add -A`, or `git add -u` without the user's explicit, per-instance approval. This is enforced via permission deny rules in `.claude/settings.local.json`. If a task requires a commit, stop and ask the user to do it themselves.

### 2. Always Plan Before Making Changes
Before editing any code, produce a written plan that covers:
- **Scope**: Which files/modules are affected and why
- **Approach**: How the change will be implemented (pattern, algorithm, dependencies)
- **Phases/Todos**: Break the work into discrete, verifiable steps
- **Risks**: Known edge cases, breaking changes, or assumptions
- **Verification**: How to confirm the change works (build via `npm run build`, lint via `npm run lint`)

For small, isolated changes (single file, single function), the plan can be a brief paragraph. For anything touching multiple files, architecture, or shared utilities, write the plan in full before touching code.

### 3. Wait for User Confirmation Before Starting
After presenting the plan, **wait for the user to confirm** before making any edits. Do not start implementation until explicitly approved. If the user asks for a quick change without a plan, still confirm the approach briefly before proceeding.

### 4. Divide Work into Phases or Todos
When a task has multiple components, break it into numbered phases with clear boundaries. Complete one phase, **wait for user confirmation** before moving to the next phase. Verify the completed phase (e.g., `npm run build` succeeds), then proceed. Never implement multiple phases in a single turn without user confirmation between them.

### 5. Use the Existing Claude Code Automations
This project has pre-configured skills and hooks:
- **Skills**: `/project-conventions`, `/new-blog-post` — invoke these when relevant
- **Hooks**: Auto-lint runs after every Edit|Write — trust their output
- **Subagent**: `code-reviewer` for parallel multi-dimensional review after significant changes
- **Global skills**: `vercel-react-best-practices`, `web-design-guidelines`, `accessibility`, `best-practices` — invoke when relevant

### 6. Follow the Repository Conventions
- **Secrets**: Never commit credentials, API keys, or `.env` files — use local untracked files only
- **Styling**: Hybrid global utilities (`src/styles/common.css`) + scoped CSS Modules per component
- **Images**: Use `next/image` with explicit `width`/`height` to prevent CLS; organize under `public/img/{feature}/`
- **Locale**: Default is `es`; root path `/` serves Spanish; English is `/en/...`
- **i18n namespaces**: Must be listed in `serverSideTranslations` calls per page

### 7. Output Style — Direct, Concise, Structured (ponytail + i-have-adhd)
Apply these principles by default in every conversation:
- **Start with the answer or conclusion** — no preamble
- **Be direct and concise** — eliminate unnecessary introductions, repetition, and code comments
- **Use bullets and tables only when they improve clarity** — dense is better than verbose
- **Prefer the simplest solution** — avoid unnecessary abstractions, dependencies, and tool calls
- **Preserve essential technical details, assumptions, risks, and validation steps** — don't strip substance for brevity
- **Do not repeat information already established in context** — reference it instead
- **For complex tasks** (research, multiple repos, file changes): prioritize correctness and completeness over brevity
- **Keep user-facing explanations concise** while maintaining technical precision

### 8. Documentation Output Path
Save all analysis, implementation plans, implementation logs, and requested documents to:
```
docs/<core-purpose>/
```
The `docs/` folder has subfolders named by the core purpose of the user request (e.g., `docs/seo-updates/`, `docs/landing-page/`). Create the folder if it doesn't exist. Never save ticket-related documents outside this structure.
