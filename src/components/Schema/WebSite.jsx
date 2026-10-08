import React from "react";

/**
 * WebSite JSON-LD schema.org markup.
 * Hook-free. Intended for homepage only.
 *
 * Props:
 *  - name (string, optional): Site name. Defaults to "DreamCode Software".
 *  - url (string, optional): Absolute URL. Defaults to "https://dreamcodesoft.com".
 *  - description (string, optional): Site description.
 */
export default function WebSite({
  name = "DreamCode Software",
  url = "https://dreamcodesoft.com",
  description = "Software development and IT outsourcing with specialized teams, aligned with business goals across industries, with AI capabilities."
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name,
            url,
            description
          },
          null,
          2
        )
      }}
    />
  );
}