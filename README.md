# DreamCode Website

A modern Next.js 13 website showcasing the DreamCode team's work, featuring a blog, job board, and internationalization support for English and Spanish audiences.

## Overview

This is a Next.js 13 web application developed for DreamCode SAS services division. The site presents:
- Company culture and team highlights
- Comprehensive job board with bilingual listings
- Collection of technical blog posts
- Interactive UI components demonstrating development capabilities

Built using the `@vercel/next.js` framework, it combines modern web development practices with localization features for global reach.

## Key Features

- **SAS Solution Showcase**: Highlights DreamCode's SAS software development expertise
- **Internationalization**: Full English/Spanish support using `next-i18next`
- **Dynamic Job Board**: Real-time listings from English and Spanish JSON files
- **Interactive Blog**: Content managed through Markdown-to-JSON pipeline
- **Modern Architecture**: Server-side rendering with React components
- **SEO Optimized**: Includes analytics scripts and structured metadata

## Project Structure

```
├── src/
│   ├── assets/               # Job listings & static assets
│   ├── components/           # Reusable UI components
│   ├── pages/                # Route-level pages (index, about, blog, etc.)
│   ├── context/              # React context (LanguageProvider)
│   ├── styles/               # Global styles and CSS modules
│   └── public/               # Static assets, locales, SEO files
└── public/
    └── locales/              # Translation JSON files (en/, es/)
```

## Quick Start

1. **Develop the application**
   ```bash
   cd dreamcode-website
   npm run dev
   ```

2. **Run the production build**
   ```bash
   npm run build
   ```

3. **Start the server**
   ```bash
   npm run start
   ```

Visit [http://localhost:3000](http://localhost:3000) to view the live site.

## Localization System

The site supports both English and Spanish content through:
- Separate translation JSON files in `public/locales/`
- Dynamic routing based on locale selection
- Consistent UI components that adapt to language changes

## Job Board Implementation

- Job listings are stored in:
  - `src/assets/jobs/enJobs.json` (English)
  - `src/assets/jobs/esJobs.json` (Spanish)
- Both files are rendered through component props
- Maintains dual-language career opportunities tracking

## Blog Pipeline

Markdown content is processed through `public/main.js` to generate structured blog data served through:
- Static blog posts in JSON format
- API routes for content retrieval

## Deployment

The easiest deployment path is through Vercel:
1. Connect to a Vercel account
2. Follow the visual deployment wizard
3. Ensure language routing is preserved in deployment settings

## License

This project is maintained by the DreamCode SAS team.