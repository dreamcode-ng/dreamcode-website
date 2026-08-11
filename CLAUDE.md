# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- Development: `npm run dev`
- Production Build: `npm run build`
- Production Start: `npm run start`
- Local Build & Start: `npm run local`
- Linting: `npm run lint`
- Content Processing (Markdown $\rightarrow$ JSON): `npm run server`

## Architecture & Project Structure
The project is a Next.js 13 website using the Pages Router.

### Key Directories
- `src/pages/`: Page definitions and routing.
- `src/components/`: UI components, organized by domain/feature (e.g., `Landing`, `SoftwareDev`, `UI`).
- `src/styles/`: Global styles and CSS modules.
- `src/assets/`: Static assets, constants, and helper hooks.
- `src/context/`: React Context providers for global state (e.g., `LanguageProvider`).
- `public/locales/`: Translation JSON files for `next-i18next` localization.

### Core Patterns
- **Dynamic Landing Pages**: Uses a slug-based dynamic route (`src/pages/landing/[slug].jsx`) and a `LandingPageRenderer` to dynamically assemble pages based on JSON configurations in the localization files.
- **Localization**: Implemented with `next-i18next`. Content and structural configurations for landing pages are stored in `public/locales/{lang}/landingPages.json`.
- **Content Pipeline**: Blog posts in Markdown format are converted to JSON using a script at `public/main.js` (executed via `npm run server`), which the site then consumes for rendering.
- **Styling**: A combination of global CSS and CSS Modules. Common utility classes (e.g., `w_color`, `f-lg-40`) are used for consistent typography and colors.
- **Component Design**: Components are largely functional and data-driven, receiving content via props from localization files.
