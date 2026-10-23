# AI Assistant Usage Guide — DreamCode Website

This project uses Claude Code for development assistance. The following files and configurations govern how Claude Code operates in this repository.

## 1. CLAUDE.md (Project Context)
**File:** `CLAUDE.md` (project root)

This is the primary guidance file for Claude Code sessions. It documents:
- Available commands (`npm run dev`, `npm run build`, `npm run start`, `npm run lint`, `npm run server`)
- Code architecture (Pages Router, next-i18next, landing pages, blog pipeline, schema)
- Key directory structures and patterns
- Critical constraints (build-time fs reads, locale defaults, SSG dependencies)
- Related references (AGENTS.md, README.md, SEO_AUDIT_IMPLEMENTATION_PLAN.md, memory files)

Every Claude Code session should read this file first.

## 2. AGENTS.md (Agent Conventions)
**File:** `AGENTS.md` (project root)

Defines the conventions and patterns for AI agents working with this codebase. Covers:
- Framework constraints (Pages Router only)
- Component design patterns
- Localization system
- Styling strategy (global utilities + CSS Modules)
- Content pipeline (Markdown → JSON)
- Critical constraints and gotchas

## 3. Skills Guide.txt
**File:** `Skills Guide.txt` (project root)

User-facing guide listing when to invoke each project-specific skill:
- `"Create a new landing page for [Topic]"` → Landing Page Manager workflow
- `"Help me write a new blog post"` → Blog Post Creator standards
- `"I need to add some new text to the About page"` → Localization Guide
- `"Review this code"` → Code Reviewer subagent (correctness, readability, architecture, security, performance)
- `"Help me understand the project conventions"` → Project Conventions skill
- `"Look up the Next.js / React / MUI documentation for [topic]"` → context7 MCP server

## 4. Claude Code Automations
The project includes the following Claude Code automations, configured in `.claude/`:

### MCP Servers
- **context7** — Live documentation for Next.js 13 / React 18 / next-i18next / MUI. Prevents writing App Router code or outdated i18n APIs. Installed via `claude mcp add context7`.

### Skills (`.claude/skills/`)
- **project-conventions** — Encodes non-obvious project conventions: Pages Router only, i18n namespace requirements, blog Markdown→JSON pipeline, landing section type mappings, schema rules. Always consult before writing code.
- **new-blog-post** — Scaffolds Markdown posts with the exact frontmatter format `public/main.js` expects. Documents critical gotchas: key-name typos silently drop fields, `date` must be `YYYY-MM-DD`, `url` must be URL-safe, `npm run server` must run after creating a post.

### Global Skills (installed via `npx skills add -g`, available across all agents)
- **vercel-react-best-practices** — React/Next.js performance optimization, data fetching, routing patterns, bundle optimization. From Vercel Engineering (Next.js creators). 831K+ installs.
- **web-design-guidelines** — Web UI guidelines, accessibility, responsive design compliance, color theory, typography scale. From Vercel Labs. 775K+ installs.
- **accessibility** — WCAG 2.2 compliance, screen reader testing, ARIA patterns, keyboard navigation. From Addy Osmani (Google Chrome team). 63K+ installs.
- **best-practices** — Security, compatibility, code quality review, modern web standards. From Addy Osmani. Medium risk rating.

### Hooks (`.claude/settings.json`)
- **PreToolUse: block-sensitive-files** — Prevents Write/Edit on `.env*`, `package-lock.json`, `node_modules/`. Uses `.claude/hooks/block-sensitive-files.sh` script.
- **PostToolUse: lint-on-edit** — Runs `npm run lint` after every Write/Edit to catch JSX/lint errors at edit time.

### Subagents (`.claude/agents/`)
- **code-reviewer** — Senior reviewer across correctness, readability, architecture, security, and performance. Project-aware: knows Pages Router, i18n, SSG, SEO schema rules.

## 5. Files to Know

### Project Knowledge (`.claude/memory/`)
- `brand-name-cleanup.md` — "DreamCode Soft" → "DreamCode Software" normalization
- `schema-data-accuracy.md` — Organization/ProfessionalService schema corrected for Cali/CO location, real phone (+57 3152206211)
- `date-parser-fix.md` — `toISODate` handles Spanish month names in blog schema dates
- `seo-implementation-plan.md` — Full 30-item audit fix tracking

### Automation Reference (`.claude/skills/`)
- `project-conventions/SKILL.md` — Project conventions
- `new-blog-post/SKILL.md` — New blog post scaffolding

### Custom Agents (`.claude/agents/`)
- `code-reviewer.md` — Code reviewer with project-specific guidelines

### MCP Configuration (`.mcp.json`)
- `context7` — Live docs server

### Project Context (project root)
- `CLAUDE.md` — Primary session guidance
- `AGENTS.md` — Agent conventions
- `Skills Guide.txt` — User-facing skill invocations
- `SEO_AUDIT_IMPLEMENTATION_PLAN.md` — SEO fix priorities and progress

## 6. Quick Start for New Claude Sessions

1. Read `CLAUDE.md` for project context and commands
2. Read `AGENTS.md` for codebase conventions
3. Run `npm run dev` to start development server
4. Use `/skill-name` to invoke project skills (e.g., `/project-conventions`, `/new-blog-post`)
5. Code reviews use the `code-reviewer` subagent
6. Lint is auto-run on every edit (PostToolUse hook)
7. Contact the team if adding new skills or modifying the automation config

## 6. What Should NOT Be Shared

- `.claude/memory/` — session-specific notes (per-user, not team-relevant)
- `.claude/projects/` — cross-session memory (per-user, not team-relevant)
- `.env*` files — environment-specific secrets
- Personal hook preferences in `.claude/settings.local.json`

---

## 7. Adding New Automations

To add a new skill:
1. Create `.claude/skills/<name>/SKILL.md` with `name`, `description`, and `disable-model-invocation: true`
2. Document the invocation in `Skills Guide.txt`
3. Add any supporting scripts to `.claude/skills/<name>/`

To add a new hook:
1. Add the hook to `.claude/settings.json` with appropriate matcher and command
2. Create the hook script in `.claude/hooks/` (bash, executable)
3. Ensure the script handles the tool event correctly

To add an MCP server:
1. Add the server config to `.mcp.json`
2. Run `claude mcp add <name>` or manually add the config
3. Document in this guide

---

This guide is current as of the `jquintero/seo-updates` branch (SEO implementation complete, build passing 101/101 static pages, brand normalized "DreamCode Software", all schema and i18n fixes applied).