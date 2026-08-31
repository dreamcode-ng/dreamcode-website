# Localization & Translation Guide

This guide provides instructions for maintaining the localization system using `next-i18next`.

## Overview
The site uses a JSON-based translation system where each language has its own directory. 
- **English**: `public/locales/en/`
- **Spanish**: `public/locales/es/`

## General Principles

### 1. Structural Parity
Always ensure that the JSON structure is identical between `en` and `es` files. 
- If you add a key `home.hero_title` to `en/home.json`, you **must** add the same key to `es/home.json`.
- Missing keys will cause the system to fallback to the default language or show the key name, creating a poor user experience.

### 2. Naming Conventions
- Use `snake_case` for keys.
- Organize keys logically by section (e.g., `hero.title`, `hero.subtitle`, `features.item_1_title`).
- Avoid overly generic keys like `text1`, `text2`; use descriptive names like `contact_form_submit_button`.

### 3. Content Types
- **Static Text**: Simple strings.
- **Arrays**: Used for lists of features or team members. Ensure the number of elements in the array is consistent across languages.
- **Landing Page Config**: Found in `landingPages.json`. This file controls both content and the *structure* of dynamic pages. Be extremely careful not to break the JSON syntax here, as it drives the `LandingPageRenderer`.

## Workflow for Adding New Content

### 1. Identify the File
Determine which JSON file corresponds to the feature (e.g., `about.json` for the About page).

### 2. Add to Source Language
Add the new key and translation in the source language file (e.g., `en/about.json`).

### 3. Mirror to Target Language
Immediately add the same key to the target language file (e.g., `es/about.json`) and provide the translation.

### 4. Test
- Run `npm run dev`.
- Switch languages in the UI to ensure the new text appears correctly in both versions.

## Common Pitfalls
- **Trailing Commas**: JSON does not allow trailing commas. Ensure the last item in an object or array does not have a comma.
- **Special Characters**: Escape double quotes (`\"`) and newlines (`\n`) correctly within JSON strings.
- **Dynamic Values**: When using interpolation in `next-i18next`, ensure the variable names match between the code and the JSON.
