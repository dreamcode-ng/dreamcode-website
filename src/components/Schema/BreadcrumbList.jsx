import React from "react";

/**
 * BreadcrumbList JSON-LD schema.org markup.
 * Hook-free. For pages with hierarchical navigation.
 *
 * Props:
 *  - items (array): Breadcrumb items array of objects.
 *    Each item: { name: string, url?: string }
 *    Example: [
 *      { name: "Home", url: "https://dreamcodesoft.com/" },
 *      { name: "Blog", url: "https://dreamcodesoft.com/es/blog" },
 *      { name: "Insurance software development", url: "https://dreamcodesoft.com/es/blog/insurance-software-development" }
 *    ]
 */
export default function BreadcrumbList({ items = [] }) {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  const itemListElement = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@id": item.url || "",
      name: item.name
    }
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement
          },
          null,
          2
        )
      }}
    />
  );
}