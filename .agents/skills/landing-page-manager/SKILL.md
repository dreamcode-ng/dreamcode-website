# Skill: Landing Page Manager

This skill provides specialized guidance and automation for managing dynamic landing pages in the Dreamcode website.

## Purpose
To ensure that new landing pages are created consistently by coordinating the JSON configuration in the localization files with the required assets and routing.

## Context
- **Dynamic Route**: `src/pages/landing/[slug].jsx`
- **Renderer**: `LandingPageRenderer`
- **Configuration**: `public/locales/{lang}/landingPages.json`

## Workflow for Creating a New Landing Page

### 1. Define the Slug and Structure
Determine the URL slug for the new page. Identify which existing components from `src/components/` will be used to build the page.

### 2. Update Localization Configuration
Add a new entry to `public/locales/en/landingPages.json` and `public/locales/es/landingPages.json`.
- The key should be the slug.
- The value must define the sequence of components and the specific content (text, image paths) for each.
- **Constraint**: Ensure structural parity between English and Spanish versions to avoid rendering mismatches.

### 3. Asset Management
- Place all new images in `public/img/landing/{slug}/`.
- Use absolute paths relative to the public root (e.g., `/img/landing/my-new-page/hero.png`).

### 4. Validation
- Verify that all components referenced in the JSON configuration actually exist in `src/components/`.
- Check that the `LandingPageRenderer` can handle the provided configuration.

## Common Patterns
- **Hero Section**: Typically uses a background image and a heading/subheading from the JSON.
- **Feature Grid**: Uses a list of items from the JSON mapped to a grid component.
- **CTA Section**: Standard call-to-action buttons with links defined in the config.

## Pitfalls to Avoid
- **Typing Errors in Slugs**: A typo in the JSON key will lead to a 404 or a default page.
- **Missing Assets**: Referencing an image that hasn't been uploaded to `public/img/` will cause broken links.
- **JSON Syntax**: Ensure commas and brackets are correctly placed to avoid crashing the build.
