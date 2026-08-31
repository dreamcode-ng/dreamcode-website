# Skill: Blog Post Creator

This skill automates and validates the process of creating new blog posts, ensuring compatibility with the content pipeline.

## Purpose
To standardize the creation of Markdown blog posts and ensure they are correctly processed into JSON for the website's front-end.

## Context
- **Source Directory**: `src/assets/posts/{en|es}/`
- **Processor**: `public/main.js` (executed via `npm run server`)
- **Output Files**: `src/assets/posts/postsEn.json`, `src/assets/posts/postsEs.json`

## Workflow for Creating a Blog Post

### 1. Content Authoring (Markdown)
Create a `.md` file in both `src/assets/posts/en/` and `src/assets/posts/es/` with the same filename.
- **Frontmatter**: Every post must start with a YAML block delimited by `---`.
  - Required fields:
    - `title`: The title of the post.
    - `date`: Date in `YYYY-MM-DD` format (used for sorting).
    - `url`: A slug for the URL.
    - `image`: Path to the featured image (e.g., `/img/blog/my-post.jpg`).
    - `excerpt`: A short summary for the blog list page.
- **Body**: The main content in Markdown format.

### 2. Asset Management
- Upload the featured image to `public/img/blog/`.
- Ensure the image filename matches the `image` field in the frontmatter.

### 3. Processing the Content
Run the content pipeline to convert the new Markdown files into JSON:
```bash
npm run server
```
- Verify that the output files (`postsEn.json`, `postsEs.json`) have been updated with the new entry.
- Check that the sorting by date is correct.

### 4. Verification
- Run the development server: `npm run dev`.
- Navigate to the blog list and the individual post to verify rendering.

## Constraints & Pitfalls
- **Date Format**: Incorrect date formats will break the sorting logic in `public/main.js`.
- **Frontmatter Syntax**: Avoid using unquoted special characters (like colons) in YAML values; use quotes if necessary.
- **Filename Consistency**: The `.md` files for English and Spanish versions must have the exact same name to be treated as translations of the same post.
- **Pipeline Execution**: Remember that changes to `.md` files are NOT reflected on the site until `npm run server` is executed.
