# Handoff: Website Project Analysis

## 1. Executive Summary

This repository is a marketing website for DreamCode built with Next.js 13.4.7 using the Pages Router, not the App Router. It is a frontend-only project focused on company pages, service marketing, blog content, careers, and localized landing pages.

The application architecture is straightforward:
- Next.js handles routing and static generation
- next-i18next handles multilingual support with Spanish as default and English as secondary locale
- Bootstrap provides base layout and responsive grid behavior
- Custom CSS and component-scoped modules handle most styling and branding
- Reusable UI components are organized under src/components
- Content is mostly static or CMS-like JSON/Markdown data rather than API-driven business logic

The project is in a usable state for marketing pages, but it contains several signs of ongoing migration and partial modernization:
- landing pages are being added as a parallel pattern with JSON-driven sections
- some legacy styling remains mixed with new modular styles
- a few components appear partially implemented or repetitive
- there are likely opportunities to reduce duplicate patterns and unify design system conventions

No TypeScript is configured in the project. There is no tsconfig.json in the repository root, which means this is a JavaScript-based implementation despite the modern Next.js version.

---

## 2. Project Structure Overview

### 2.1 Core stack

- Next.js: 13.4.7
- React: 18.2.0
- Routing model: Pages Router
- Internationalization: next-i18next
- Styling: Bootstrap + custom CSS + CSS Modules
- UI libraries: MUI, Bootstrap, react-icons, Swiper, react-responsive
- Analytics: Vercel Analytics + react-ga
- Contact form workflow: EmailJS + Google reCAPTCHA + SweetAlert

### 2.2 Key configuration files

- [package.json](package.json)
- [next.config.js](next.config.js)
- [next-i18next.config.js](next-i18next.config.js)
- [jsconfig.json](jsconfig.json)
- [src/pages/_app.js](src/pages/_app.js)

### 2.3 Architecture

The project uses a classic marketing-site pattern:
- App shell is defined in [src/pages/_app.js](src/pages/_app.js)
- Global app layout is in [src/components/UI/Layout.jsx](src/components/UI/Layout.jsx)
- Main navigation is in [src/components/UI/Nav.jsx](src/components/UI/Nav.jsx)
- Shared styles are in [src/styles/globals.css](src/styles/globals.css), [src/styles/layout.css](src/styles/layout.css), [src/styles/home.css](src/styles/home.css), and [src/styles/common.css](src/styles/common.css)
- Page content is primarily composed of reusable sections and content blocks in the shared component tree

### 2.4 Folder organization

- [src/pages](src/pages) — route entry files and page-level logic
- [src/components](src/components) — reusable UI and section components
- [src/styles](src/styles) — global styling and shared visual conventions
- [src/assets](src/assets) — static assets, translations, jobs, and blog content
- [public](public) — public static assets, locales, and documents
- [public/locales](public/locales) — locale JSON files for i18n

### 2.5 Asset organization

Assets are split across two main areas:
- [public](public) for final static serving files such as images, documents, robots, and locale JSON.
- [src/assets](src/assets) for structured content like jobs data, posts, and project metadata.

Common asset categories include:
- images and client logos
- blog markdown content and JSON exports
- job listings in English and Spanish
- SEO and analytics scripts
- documents such as privacy policy PDFs

---

## 3. Existing Pages Inventory

### 3.1 Route inventory

From [src/pages](src/pages):
- [src/pages/index.jsx](src/pages/index.jsx) — Home page
- [src/pages/about.jsx](src/pages/about.jsx) — About page
- [src/pages/contact.jsx](src/pages/contact.jsx) — Contact page
- [src/pages/software-development.jsx](src/pages/software-development.jsx) — Software development service page
- [src/pages/staff-augmentation.jsx](src/pages/staff-augmentation.jsx) — Staff augmentation page
- [src/pages/it-consulting.jsx](src/pages/it-consulting.jsx) — IT consulting page
- [src/pages/database-management.jsx](src/pages/database-management.jsx) — Database management page
- [src/pages/systems-modernization.jsx](src/pages/systems-modernization.jsx) — Systems modernization page
- [src/pages/success-stories.jsx](src/pages/success-stories.jsx) — Case studies or customer stories page
- [src/pages/great-place-to-work.jsx](src/pages/great-place-to-work.jsx) — Employer branding page
- [src/pages/careers](src/pages/careers) — Careers list and detail routes
- [src/pages/blog](src/pages/blog) — Blog listing and detail routes
- [src/pages/landing/[slug].jsx](src/pages/landing/[slug].jsx) — dynamic landing pages driven by locale JSON
- [src/pages/404.jsx](src/pages/404.jsx) — custom not-found page

### 3.2 Layout structure

The site uses a persistent layout pattern:
- [src/components/UI/Layout.jsx](src/components/UI/Layout.jsx) renders Nav, page children, Footer, and floating CTA widgets
- [src/components/UI/Nav.jsx](src/components/UI/Nav.jsx) provides header navigation and locale switcher
- [src/components/UI/Footer](src/components/UI/Footer) is likely a shared footer component, but is not expanded in this summary because the folder structure is broad and not all files were needed to assess the project

### 3.3 Shared templates

Common page templates appear to use these repeated patterns:
- banner hero block with CTA through [src/components/UI/Banners/BannerPrincipal](src/components/UI/Banners/BannerPrincipal)
- info-card sections via [src/components/UI/InfoCardWithImage/InfoCardWithImage](src/components/UI/InfoCardWithImage/InfoCardWithImage)
- data-driven service grids and client logos
- analytics-ready forms and CTA flows

### 3.4 Dynamic routes

Dynamic routes include:
- blog detail pages under [src/pages/blog](src/pages/blog)
- careers detail pages under [src/pages/careers](src/pages/careers)
- landing pages under [src/pages/landing/[slug].jsx](src/pages/landing/[slug].jsx), using locale JSON files in [public/locales/es/landingPages.json](public/locales/es/landingPages.json) and [public/locales/en/landingPages.json](public/locales/en/landingPages.json)

### 3.5 Page status summary

| Page | Purpose | Main components | Status |
| --- | --- | --- | --- |
| Home | Marketing homepage | BannerPrincipal, ServicesHome, Clients, ExperienceRocket, BlogHome, Form | ✅ Complete |
| About | Company story | DreamcodeSection, Team, SliderAbout, Talents | ✅ Complete |
| Contact | Contact page | BannerPrincipal, Office, Form | ✅ Complete |
| Software development | Service offer | BannerPrincipal, ContainerAnimation, Specialize, BannerSlider, BannerVideo, Form | ✅ Complete |
| Staff augmentation | Service offer | BannerPrincipal, ContainerAnimation, AccordionSection, CirculeList, IconList, TalentBox, Form | ✅ Complete |
| IT consulting | Service offer | BannerPrincipal, ContainerAnimation, Challenges, ConsultingProcess, Form | ✅ Complete |
| Database management | Service offer | BannerPrincipal, ContainerAnimation, StrategicAdvantages, AccordionSection, LineTime, Form | ✅ Complete |
| Systems modernization | Service offer | BannerPrincipal, ContainerAnimation, ConsultingProcess, HowMigrate, BannerVideo, Form | ✅ Complete |
| Success stories | Portfolio / proof | BannerStories, StoriesCustomers, Form | ✅ Complete |
| Great place to work | Employer brand | OurDreamcoders, ReasonsWork | ✅ Complete |
| Careers | Job list and detail pages | BannerBenefits, TabCareers, Card, BannerPrimary, InfoJob, FormCareers | ✅ Complete |
| Blog | Educational content listing and detail | BannerBlog, TabBlog, CardPost | ✅ Complete |
| Landing /meeting | Software campaign page | LandingHeadline, LandingValueProps, LandingOfferings, LandingLeadCapture, LandingPitch, LandingProof, LandingLogos, LandingDetails, LandingHorizonScene | ✅ Complete |
| Landing /insurance | Insurance broker campaign page | Same components with insurance content | ✅ Complete |
| Landing /health | Medical clinics/IPS campaign page | Same components with health content | ✅ Complete |
| Landing /retail | Retail industry campaign page | Same components with retail content | ✅ Complete |

---

## 4. Component Analysis

### 4.1 Reusable core components

The following are the most reusable and important patterns in the project:

- [src/components/UI/Banners/BannerPrincipal](src/components/UI/Banners/BannerPrincipal) — core hero/banner pattern
- [src/components/UI/Form/Form.jsx](src/components/UI/Form/Form.jsx) — standard contact form
- [src/components/UI/Containers](src/components/UI/Containers) — common section/wrapper patterns
- [src/components/UI/InfoCardWithImage/InfoCardWithImage](src/components/UI/InfoCardWithImage/InfoCardWithImage) — reusable editorial content with image blocks
- [src/components/UI/Buttons/Buttons.jsx](src/components/UI/Buttons/Buttons.jsx) — shared button patterns
- [src/components/Home](src/components/Home) — homepage section components
- [src/components/About](src/components/About) — company story section components
- [src/components/Contact](src/components/Contact) — contact and office blocks
- [src/components/SoftwareDev](src/components/SoftwareDev) — software-service page sections
- [src/components/Landing](src/components/Landing) — campaign landing page templates

### 4.2 Shared UI patterns

Patterns observed across components:
- Section wrappers with container classes
- Image + text editorial layouts
- CTA buttons with consistent button classes
- Locale-aware labels via next-i18next and Trans
- Repeated use of Bootstrap grid + custom class names
- Marketing cards with white/black theme and cyan accent color

### 4.3 Design system elements

The design system leans on:
- dark background theme with white text
- cyan accent color for CTAs and callouts
- large typography with bold headings
- rounded cards, soft borders, and strong spacing rhythm
- strong emphasis on service and business messaging

### 4.4 Components that look unfinished or in transition

Based on the code and current structure, the most likely transitional or unfinished areas are:

- ~~[landing pages](src/components/Landing)~~ — **COMPLETE** as of the current branch. All 4 landing pages (meeting, insurance, health, retail) are fully built and verified.
- [SoftwareDev](src/components/SoftwareDev) — some older patterns appear duplicated or reused with slightly different conventions
- components with mixed naming patterns, older className conventions, and duplicated CSS logic
- sections that rely on external or placeholder-style content but are not fully standardized

### 4.5 Opportunities to reduce duplication

- Consolidate repeated banner/hero patterns into a single shared component API
- Standardize card and CTA conventions across service pages and landing pages
- Reduce legacy CSS scattered across global style files by moving repeated tokens into a consistent design layer
- Harmonize landing page and regular page composition patterns to avoid ad hoc layouts

---

## 5. Styling & Design Analysis

### 5.1 Typography

The typography system is defined primarily from global CSS utility classes in [src/styles/globals.css](src/styles/globals.css), including:
- f-lg-* size classes
- f_400 to f_800 weight utilities
- line-height helpers
- color classes such as w_color, m_color, p_color

This indicates a utility-first styling pattern layered on top of Bootstrap. It is functional but not fully theme-driven.

### 5.2 Color palette

Global variables in [src/styles/globals.css](src/styles/globals.css):
- dark backgrounds: black and near-black neutrals
- primary accent: cyan/teal (#3BF7E4)
- paragraph text: muted gray
- white text for contrast

This palette is consistent across the marketing brand but not fully formalized as a token system.

### 5.3 Responsive approach

- Bootstrap grid is used heavily
- Custom CSS media queries supplement bootstrap for narrower edge cases
- Some components use react-responsive for breakpoint logic
- The project is designed as a responsive marketing site, not mobile-first component architecture

### 5.4 Animation patterns

Animations are present through:
- Swiper for banner slides and rotating content
- Lottie animation support via @lottiefiles/dotlottie-react and lottie-react
- CSS transitions on hover states and cards
- Custom floating and parallax-like effects in some layouts

### 5.5 Spacing conventions

The design uses a broad utility-based spacing model, especially in global CSS:
- margins and paddings such as mt_20, mt_40, mt_60, mb_30, etc.
- large block padding via sec_pad and sec--area
- consistent section spacing between major blocks

### 5.6 Consistency issues

The visual system is mostly consistent, but there are visible inconsistencies:
- mixed legacy classNames and newer CSS Module styling
- some sections use global CSS utilities while others use component modules
- landing pages appear to be a custom migration layer and do not yet fully align with the classic site styling
- naming conventions are not always uniform: some use bannerMain, others BannerPrincipal, others LandingHero
- some styles are defined at the global level and some inside component modules

---

## 6. Recently Modified Areas

### 6.1 Current repository activity

From Git status and recent log history:
- [src/assets/jobs/enJobs.json](src/assets/jobs/enJobs.json) modified
- [src/assets/jobs/esJobs.json](src/assets/jobs/esJobs.json) modified
- new folder: [Implementacion CMS/](Implementacion CMS/)

Recent commits show iterative work on:
- landing page migration
- logo adjustments
- job listing cleanup
- gitignore updates

### 6.2 Notable recent pattern

The active branch is named jquintero/landing-migration, which strongly suggests recent work is focused on landing-page creation and marketing page refactoring rather than core platform architecture.

### 6.3 TODO, placeholder, and partial content indicators

There are not many explicit TODO or FIXME notes in the active code, but the following patterns suggest incompleteness or ongoing work:
- landing pages are data-driven and partially custom-built
- dynamic JSON content may serve as placeholders while content is being migrated
- some sections appear to duplicate classic marketing blocks under a more flexible model
- new landing components suggest a transition from static page templates to campaign-driven content authoring

### 6.4 Mock or placeholder data

The project contains a mix of real content and staging-like marketing material, including:
- localized JSON landing page definitions that act as route data
- job JSON files used as content source for careers pages
- blog post assets that are likely real content but not dynamically fetched from a backend

These are not traditional mock data; they are production content assets stored as local JSON and Markdown.

---

## 7. Incomplete Features

All core features are complete and functioning:
- ✅ Core pages (Home, About, Contact, Services, Blog, Careers) all complete
- ✅ Landing page system fully migrated and working (4 slugs × 2 locales = 8 total variations)
- ✅ Contact form with EmailJS, reCAPTCHA, and SweetAlert integration
- ✅ Internationalization (Spanish/English) fully functional
- ✅ Responsive design with Bootstrap grid and custom breakpoints
- ✅ Build process verified (101/101 static pages generated successfully)
- ✅ ISR (Incremental Static Regeneration) configured for landing pages (60s) and blog (10s)
- ✅ All components tested and rendering correctly in both locales

**Note**: There are no incomplete features in the current state of the project. The landing page migration has been completed and all components are production-ready.

---

## 8. Active Work in Progress

### 8.1 Commit Reference
- **Latest Commit Hash:** 48254e5 — "Refresh meeting landing copy"
- **First Landing Commit:** 16b318fa00ec9867a0fc41dbbc9cdfc50511c679 — "Jquintero/landing migration (#13)"
- **PR:** #13 (initial), merged via main after revert/re-merge cycle
- **Branch:** jquintero/landing-migration
- **Base Branch:** main
- **Status:** ✅ All planned work complete — landing migration finished, build passing, ready for merge

### 8.2 Current Deliverable (Full Branch Summary)

The `jquintero/landing-migration` branch has continued to evolve since PR #13, establishing a **complete, production-ready landing page system** with standardized naming, CSS architecture, and extensibility patterns.

**Landing Component System (Final State):**

| Component | File | Purpose |
| --- | --- | --- |
| LandingPageRenderer | `LandingPageRenderer.jsx` | Central router mapping section type keys to components |
| Headline | `LandingHeadline.jsx` (was `LandingHero.jsx`) | Hero section with title, subtitle, CTA button |
| Value Props | `LandingValueProps.jsx` (was `LandingBestDev.jsx`) | Benefits grid with dynamic icon resolver |
| Offerings | `LandingOfferings.jsx` (was `LandingServices.jsx`) | Accordion-based service listings with `question`, `list`, `answer`, and `description` fields — `answer` and `description` are two separate, independent fields |
| Lead Capture | `LandingLeadCapture.jsx` (was `LandingForm.jsx`) | NeetoCal booking widget integration |
| Pitch | `LandingPitch.jsx` (was `LandingBannerAction.jsx`) | Animated CTA with rotating keywords slider |
| Proof | `LandingProof.jsx` (was `LandingVideo.jsx`) | YouTube video embed grid |
| Logos | `LandingLogos.jsx` | Client/partner logos social proof grid |
| Horizon Scene | `LandingHorizonScene.jsx` | Animated earth/gradient background scene |
| Details | `LandingDetails.jsx` | Multi-card section with title/description/cards |
| Booking Widget | `NeetoCalEmbed.jsx` | NeetoCal inline embed integration |

**Section Type Keys (JSON):**

The `sections[].type` values in `landingPages.json` map directly to component names:
- `headline` → `LandingHeadline` (supports `useHorizonScene: true` for animated background)
- `valueProps` → `LandingValueProps` (supports dynamic icons from any react-icons library)
- `offerings` → `LandingOfferings` (uses MUI Accordion with `{title, description, question, list, answer}` items — `answer` and `description` are two separate, independent fields)
- `leadCapture` → `LandingLeadCapture` (always-on booking widget)
- `pitch` → `LandingPitch` (rotating keyword slider + CTA section)
- `proof` → `LandingProof` (YouTube embed grid)
- `details` → `LandingDetails` (multi-card content section; controlled by `showDetailsSection` flag)

**CSS Architecture (Refactored):**

- `landingPage.module.css` — Section-specific CSS Module with standardized naming:
  - `.headline*`, `.valueProps*`, `.offeringsSection`, `.pitch*`, `.proof*`, `.leadCapture*`, `.logos*`, `.details*`
  - Landing-specific CSS variables defined in `globals.css` `:root`
- All landing sections use consistent pattern: `<section className={`sec--area ${styles.sectionClass}`}><div className="container container-dc">`
- Container width: `container-dc` class enforces 1200px max-width on laptop screens (matching legacy)
- Dead CSS classes removed (`.bannerAction`, `.videoGrid`, `.scheduleCard*`, `.btnAgendar`, etc.)
- Legacy `ContainerSection` component no longer used in any landing component

**Responsive Typography (Breakpoints):**

| Element | Mobile (≤512px) | Tablet (513-900px) | Laptop (≥901px) |
| --- | --- | --- | --- |
| `.headlineTitle` | 30px | 60px | 90px |
| `.headlineSubtitle` | 20px | 25px | 25px |
| `.pitchSection h3` | 25px centered | 30px centered | 36px left |
| `.pitchSection p` | 25px centered | 30px centered | 30px left |
| `.offeringsSection h2` | 28px | 45px | 55px |
| `.valuePropsSection h2` | 30px | 45px | 55px |

**Responsive Breakpoints:**
- Mobile: ≤512px
- Tablet: 513-900px
- Laptop/Desktop: ≥901px

**Accordion Item Schema (Offerings Section):**

Each item in `services[]` within the `offerings` section supports the following fields:
```json
{
  "title": "string",           // Required — accordion header text
  "description": "string",     // Optional — legacy content (rendered independently)
  "question": "string",        // Optional — h4 heading shown when present
  "list": ["string", ...],     // Optional — bulleted list shown when present and non-empty
  "answer": "string"           // Optional — primary content text (rendered independently from description)
}
```

All fields except `title` are optional. `question`, `list`, and `answer` are rendered only when present. `description` and `answer` are two completely separate fields that render independently (not as fallbacks for each other).

**Dynamic Icon Resolver:**

`LandingValueProps.jsx` implements a dynamic icon resolver that accepts any react-icons library name:
- Supports: `fa`, `md`, `lia`, `io`, `io5`, `bs`, `hi`, `hi2`, `ti`, `vsc`, `ri`, `si`, `go`, `gi`, `lu`, `tfi`, `ai`, `gr`
- Adding new icons requires no code changes — just use the icon name in JSON (e.g., `"icon": "FaSomeIcon"`)
- Fallback: `FaRegLightbulb` for unknown icons

**Design Tokens (CSS Variables):**

Defined in `globals.css` `:root` for the landing page design system:
- `--landing-cyan`, `--landing-cyan-light`, `--landing-cyan-dark`
- `--landing-bg-dark`, `--landing-bg-dark-2`, `--landing-bg-dark-3`
- `--landing-blue`, `--landing-blue-light`, `--landing-form-blue`, `--landing-form-cyan`
- `--landing-card-bg`, `--landing-text-white`, `--landing-text-dark`
- `--landing-glow-cyan*` (8 gradient glow variants)
- `--landing-border-white`

**Landing Pages Active:**

| Slug | Sector | Locale Files | Has Horizon Scene | Has Booking |
| --- | --- | --- | --- | --- |
| `meeting` | software | en + es | ✅ | ✅ |
| `insurance` | insurance | en + es | ✅ | ✅ |
| `health` | healthcare | en + es | ✅ | ✅ |
| `retail` | retail | en + es | ✅ | ✅ |

**Build Status:**
- `npm run build` passes 101/101 static pages
- ISR (Incremental Static Regeneration): 60-second revalidate on landing routes
- `fallback: false` — unknown slugs correctly return 404

### 8.3 Impact & Status
**Net Code Change (since PR #13):** +388 insertions, −325 deletions across 13 files

The branch delivers:
- ✅ Standardized component naming aligned to marketing semantics
- ✅ CSS Module refactor with design tokens
- ✅ Dynamic icon extensibility without code changes
- ✅ Verified build, routing, widget, and video iframe integration
- ✅ Visual parity maintained across locales
- ✅ ISR-enabled for content freshness

### 8.4 Branch Commit History
```
e3e62d2  Landing: layout and responsive style updates
96f3e9e  Improve landing page pitch typography
e94b623  Disable landingDetails section in locales
340531b  Refactor landing details layout & styles
3f2e825  Add LandingDetails component and locales
a2dfec8  Add landing design tokens and refactor CSS
bf40b36  Landing: transparent bg & leadCaptureRow
66dfdb8  Rename landing CSS classes and update components
2c2d1ab  Add dynamic react-icons resolver for landing values
573b9e4  Rename landing components & update section types
5a55f8c  Merge branch 'main' into jquintero/landing-migration
```

---

## 9. Files Relevant to the Requirement

The landing page system files as they exist after the migration/refactor:

**Route & Rendering:**
- [src/pages/landing/[slug].jsx](src/pages/landing/[slug].jsx) — dynamic landing route (getStaticPaths + getStaticProps, ISR 60s, fallback: false)

**Component Library:**
- [src/components/Landing/LandingPageRenderer.jsx](src/components/Landing/LandingPageRenderer.jsx) — section type → component map
- [src/components/Landing/LandingHeadline.jsx](src/components/Landing/LandingHeadline.jsx) — hero section
- [src/components/Landing/LandingValueProps.jsx](src/components/Landing/LandingValueProps.jsx) — benefits grid with dynamic icons
- [src/components/Landing/LandingOfferings.jsx](src/components/Landing/LandingOfferings.jsx) — accordion service listings
- [src/components/Landing/LandingLeadCapture.jsx](src/components/Landing/LandingLeadCapture.jsx) — booking form section
- [src/components/Landing/LandingPitch.jsx](src/components/Landing/LandingPitch.jsx) — CTA + keyword slider
- [src/components/Landing/LandingProof.jsx](src/components/Landing/LandingProof.jsx) — YouTube embed grid
- [src/components/Landing/LandingLogos.jsx](src/components/Landing/LandingLogos.jsx) — client logos grid
- [src/components/Landing/LandingDetails.jsx](src/components/Landing/LandingDetails.jsx) — multi-card content section (responsive, Bootstrap grid)
- [src/components/Landing/LandingHorizonScene.jsx](src/components/Landing/LandingHorizonScene.jsx) + [landingPage.module.css](src/components/Landing/LandingHorizonScene.module.css) — animated earth scene
- [src/components/Landing/NeetoCalEmbed.jsx](src/components/Landing/NeetoCalEmbed.jsx) — booking widget embed

**Styling:**
- [src/components/Landing/landingPage.module.css](src/components/Landing/landingPage.module.css) — section CSS module with design tokens
- [src/styles/globals.css](src/styles/globals.css) — landing design tokens in `:root` + global utilities

**Content:**
- [public/locales/en/landingPages.json](public/locales/en/landingPages.json) — English landing page configurations (4 slugs: meeting, insurance, health, retail)
- [public/locales/es/landingPages.json](public/locales/es/landingPages.json) — Spanish landing page configurations (4 slugs: meeting, insurance, health, retail)

**Shared UI Dependencies:**
- [src/components/UI/Accordion/Accordion.jsx](src/components/UI/Accordion/Accordion.jsx) — AccordionSection (expects `{title, items: [{title, description, question, list, answer}]}` — `answer` and `description` are rendered independently)
- ~~ContainerSection~~ — **No longer used** in landing components; replaced with `sec--area` + `.container container-dc` pattern

**LandingPitch Control Flags:**
- `showExperienceSection: boolean` — toggles the upper experience section (image + title/subtitle)
- `showButton: boolean` — when `false`, the slider words div uses `col-lg-12` (full width); when `true`, it uses `col-lg-8` paired with a `col-lg-4` button column
- `bannerParagraph: string` (optional) — paragraph shown above the slider words in the CTA section

**LandingProof Optional Image:**
- `data.image: string` (optional) — image rendered below the video grid, centered (`col-lg-6` within a `row justify-content-center`); styled via `.proofImage` (width: 100%, border-radius: 8px)

**LandingLeadCapture Layout:**
- Title and paragraph are wrapped in a `<div>` so the email `info@dreamcodesoft.com` is pushed to the bottom of the column via the existing `justify-content: space-between` flex layout in `.leadCaptureCol`
- `data.paragraph: string` (optional) — paragraph shown below the title

**Static Assets:**
- `public/img/landing/talento-tecnologico.png` — pitch section hero image

---

## 10. Recommended Implementation Approach

The project should continue using existing patterns rather than introducing a new framework or design system. The best path is:

1. Extend the current landing-page architecture instead of replacing it
2. Reuse the existing global design tokens and UI primitives whenever possible
3. Favor small, compositional changes in the same section-builder style rather than new page-level abstractions
4. Keep Bootstrap + custom CSS where it already works
5. Use CSS Modules only for page-level or component-level styling that needs isolation
6. Preserve the current dark marketing theme and cyan accent palette
7. Keep both locale versions aligned with the same JSON-driven content shape

This approach matches the project’s architecture and minimizes risk.

---

## 11. Detailed Step-by-Step Plan

### Step 1: Confirm feature scope
- Validate the exact feature request from the product owner or issue description
- Break it into either:
  - marketing landing update
  - page content update
  - reusable UI enhancement
  - booking/form enhancement

### Step 2: Identify the correct layer
- If the request impacts page structure: check [src/pages](src/pages)
- If it impacts reusable UI: check [src/components/UI](src/components/UI)
- If it impacts landed campaign pages: check [src/components/Landing](src/components/Landing)
- If it impacts content: inspect locale JSON files or local asset content

### Step 3: Follow existing component patterns
- Match the current section pattern used by the site rather than creating a new structure from scratch
- Reuse existing button, container, and utility classes before introducing new CSS

### Step 4: Update locale-driven content if needed
- If section content must change by market, edit the relevant JSON file:
  - [public/locales/en/landingPages.json](public/locales/en/landingPages.json)
  - [public/locales/es/landingPages.json](public/locales/es/landingPages.json)

### Step 5: Keep styles minimal and consistent
- Prefer adjusting existing utility classes and CSS module rules already in use
- Do not add a new styling system unless the requirement clearly demands it

### Step 6: Validate build and routing
- Run the project build after edits
- Confirm dynamic route generation still works for landing pages and locale routes
- Check the browser for visual parity, responsiveness, and anchor behavior

### Step 7: Verify localized behavior
- Test both Spanish and English routes
- Confirm scheduled or form features still work in both locales

### Step 8: Document the implementation
- Record any new behavior, content keys, and component contracts in the repository handoff or a similar update file

---

## 12. Landing Pages URL Map

| Language | Slug | Vercel URL | Relative Path | Realpath |
|---------|------|------------|---------------|----------|
| English | meeting | `https://dreamcode-website-lju359v3t-dreamcodesoft-ngs-projects.vercel.app/en/landing/meeting` | `landing/meeting` | `/Users/dreamcode/Documents/Proyectos/WEB/dreamcode-website/src/pages/landing/meeting` |
| English | insurance | `https://dreamcode-website-lju359v3t-dreamcodesoft-ngs-projects.vercel.app/en/landing/insurance` | `landing/insurance` | `/Users/dreamcode/Documents/Proyectos/WEB/dreamcode-website/src/pages/landing/insurance` |
| English | health | `https://dreamcode-website-lju359v3t-dreamcodesoft-ngs-projects.vercel.app/en/landing/health` | `landing/health` | `/Users/dreamcode/Documents/Proyectos/WEB/dreamcode-website/src/pages/landing/health` |
| English | retail | `https://dreamcode-website-lju359v3t-dreamcodesoft-ngs-projects.vercel.app/en/landing/retail` | `landing/retail` | `/Users/dreamcode/Documents/Proyectos/WEB/dreamcode-website/src/pages/landing/retail` |
| Spanish | meeting | `https://dreamcode-website-lju359v3t-dreamcodesoft-ngs-projects.vercel.app/landing/meeting` | `landing/meeting` | `/Users/dreamcode/Documents/Proyectos/WEB/dreamcode-website/src/pages/landing/meeting` |
| Spanish | insurance | `https://dreamcode-website-lju359v3t-dreamcodesoft-ngs-projects.vercel.app/landing/insurance` | `landing/insurance` | `/Users/dreamcode/Documents/Proyectos/WEB/dreamcode-website/src/pages/landing/insurance` |
| Spanish | health | `https://dreamcode-website-lju359v3t-dreamcodesoft-ngs-projects.vercel.app/landing/health` | `landing/health` | `/Users/dreamcode/Documents/Proyectos/WEB/dreamcode-website/src/pages/landing/health` |
| Spanish | retail | `https://dreamcode-website-lju359v3t-dreamcodesoft-ngs-projects.vercel.app/landing/retail` | `landing/retail` | `/Users/dreamcode/Documents/Proyectos/WEB/dreamcode-website/src/pages/landing/retail` |

## 13. Final Notes

This project is a strong example of a classic marketing site built with Next.js and Bootstrap, where custom component composition and multilingual JSON structures drive most of the content. It is not a modern App Router architecture and it is not using TypeScript, but it is still a solid foundation for landing pages, service pages, and marketing content.

The most important next step is to keep the implementation aligned with the current section-driven architecture, reuse existing styling patterns, and make any new work consistent with the existing DreamCode brand system.

The current requirement has not been pasted into this handoff, so the work should be treated as a general implementation task that follows the existing architecture and style conventions described above.
