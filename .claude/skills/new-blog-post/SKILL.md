---
name: new-blog-post
description: Scaffold a new blog post in the correct Markdown format for the DreamCode blog pipeline
disable-model-invocation: true
---

<!-- @dsCard group="Content" -->

## New Blog Post

Creates a Markdown post in the correct format for `public/main.js` to convert into `postsEn.json` / `postsEs.json`.

### Usage

Tell me: **"Write a new blog post about [topic]"** or **"Create a new blog post"**.

### Steps

1. Ask for the topic, language (en/es), and any metadata (category, read time, image filename).
2. Write the Markdown file to `src/assets/posts/{en|es}/<slug>.md`.
3. Run `npm run server` to regenerate `postsEn.json` / `postsEs.json`.
4. Verify the post appears in the blog listing.

### Markdown Format

```md
---
title: Post Title
metaTitle: SEO title (≤60 chars)
meta_description: Meta description (≤160 chars)
read: 5 min read
date: YYYY-MM-DD
url: post-slug
imglink: image-filename.jpg
category: Software Development
---
# Post Title

Body content in Markdown...
```

### Critical Rules

- **Frontmatter keys must match exactly** — `public/main.js` splits on `": "` and assigns `line.split(": ")[0]` as the key. A typo (e.g., `metaTitle` vs `metatitle`) silently drops that field from the generated JSON.
- **`date` must be a valid `YYYY-MM-DD`** — `public/main.js` runs `new Date(metadata.date)`; invalid dates produce `NaN` timestamps.
- **`url` becomes the route segment** — the blog page at `/blog/[postId]` looks up posts by `post.url`. Keep it URL-safe (lowercase, hyphens, no spaces).
- **`imglink` is the filename only** — the blog page prepends `/img/posts/`, so store the image at `public/img/posts/<imglink>`.
- **Run `npm run server` after creating the post** — otherwise the static page will 404.
- **Both languages** — if writing a bilingual post, create one `.md` in `src/assets/posts/en/` and one in `src/assets/posts/es/` with the same `url`.

### Common Mistakes

| Mistake | Consequence |
|---------|-------------|
| Missing `---` delimiters | Whole file treated as content, no metadata parsed |
| `metaTitle` typo | `metaTitle` field missing from JSON |
| `date` in Spanish (e.g., "15 de octubre de 2026") | `new Date()` returns `Invalid Date`, post gets `NaN` id |
| `url` with spaces or uppercase | Route mismatch, 404 on the blog page |
| Skipping `npm run server` | New post not in `postsEn.json`, blog listing shows nothing |