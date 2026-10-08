import React from "react";

/**
 * BlogPosting JSON-LD schema.org markup.
 * Hook-free. For individual blog posts.
 *
 * Props:
 *  - headline (string): Article headline/title.
 *  - url (string): Absolute URL of the post.
 *  - datePublished (string): ISO 8601 date string (YYYY-MM-DD).
 *  - dateModified (string): ISO 8601 date string (YYYY-MM-DD). Defaults to datePublished.
 *  - author (string|object): Author name or Person object.
 *  - publisher (object): Publisher Organization.
 *  - image (string|object): Image URL or ImageObject.
 *  - description (string): Article description.
 *  - articleSection (string): Blog category/section.
 *  - keywords (string[]): Keywords.
 */
export default function BlogPosting({
  headline,
  url,
  datePublished,
  dateModified,
  author = "DreamCode Software",
  publisher = {
    "@type": "Organization",
    name: "DreamCode Software",
    logo: "https://dreamcodesoft.com/logo.png"
  },
  image = "https://dreamcodesoft.com/default-blog-image.jpg",
  description,
  articleSection = "Software Development",
  keywords = ["software", "development", "consulting"]
}) {
  if (!headline || !url || !datePublished || !description) {
    return null;
  }

  const post = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    },
    headline,
    datePublished,
    dateModified: dateModified || datePublished,
    author,
    publisher,
    image: {
      "@type": "ImageObject",
      url: typeof image === "string" ? image : image.url,
      width: typeof image === "string" ? 1200 : image.width || 1200,
      height: typeof image === "string" ? 600 : image.height || 600
    },
    description,
    articleSection,
    keywords
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(post, null, 2)
      }}
    />
  );
}