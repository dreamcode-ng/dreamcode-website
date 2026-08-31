# AI Agents Guide: Dreamcode Website

This guide provides the necessary context and conventions for AI agents to be productive in the Dreamcode website codebase.

## 🚀 Quick Start
- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Content Pipeline**: `npm run server` (Converts Markdown posts to JSON)
- **Linting**: `npm run lint`

## 🏗 Architecture & Patterns

### Framework & Routing
- **Next.js 13 (Pages Router)**: The project uses the Pages Router. Do NOT use App Router conventions (e.g., `app/` directory).
- **Dynamic Landing Pages**: 
  - Route: `src/pages/landing/[slug].jsx`.
  - Configuration: Defined in `public/locales/{lang}/landingPages.json`.
  - Assembly: Managed by `LandingPageRenderer` based on JSON config.

### Component Design
- **Pattern**: Functional and data-driven. Components receive content via props.
- **Localization**: Uses `next-i18next`. Content resides in `public/locales/{lang}/*.json`.
- **Structure**: Components are organized by domain in `src/components/` (e.g., `About`, `SoftwareDev`, `UI`) and typically paired with a `.module.css` file.

### Styling
- **Hybrid Strategy**:
  - **Global Utilities**: Located in `src/styles/common.css` (e.g., `.container-dc`, `.box_shadow`, `.border-gradient`).
  - **Scoped Styles**: CSS Modules are used for component-specific styles.
- **Implementation**: Use template literals for combined classes: `className={\`${styles.localClass} ${globalUtilityClass}\`}`.

### Content Pipeline (Blog)
- **Workflow**: Markdown $\rightarrow$ JSON.
- **Source**: `src/assets/posts/{en|es}/*.md`.
- **Processor**: `public/main.js` (executed via `npm run server`).
- **Output**: `src/assets/posts/postsEn.json` and `src/assets/posts/postsEs.json`.
- **Note**: Always run the content pipeline script before building if blog posts have changed.

## ⚠️ Critical Constraints & Gotchas
- **Filesystem Access**: `getStaticProps` and custom scripts use `fs` and `path` to read configurations directly from `public/locales` or `src/assets`.
- **Asset Organization**: Images are strictly organized by feature in `public/img/{feature}/`.
- **Build Dependency**: The static site generation for the blog depends on the JSON output from the content pipeline.

## 🔗 Reference Documentation
- For general project guidance, see [CLAUDE.md](./CLAUDE.md).
