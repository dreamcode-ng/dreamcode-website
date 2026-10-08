import React from "react";

/**
 * Organization JSON-LD schema.org markup.
 * Hook-free so it can be used in both client pages and _document.js.
 *
 * Props:
 *  - name (string, optional): Organization name. Defaults to "DreamCode Software".
 *  - description (string, optional): Organization description.
 *  - logo (string, optional): Absolute URL to logo. Defaults to "/logo.png".
 *  - founded (string, optional): Year founded. Defaults to "2024".
 *  - telephone (string, optional): Contact phone.
 *  - locationCity (string, optional): City name. Defaults to "Cali".
 *
 * Usage:
 *  <Organization />                           // defaults
 *  <Organization name="DreamCode" description="..." />  // localized
 */
export default function Organization({
  name = "DreamCode Software",
  description = "Software development and IT outsourcing with specialized teams, aligned with business goals across industries, with AI capabilities.",
  logo = "https://dreamcodesoft.com/logo.png",
  founded = "2024",
  telephone = "+57 3152206211",
  locationCity = "Cali",
  locationCountry = "CO"
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name,
            alternateName: "DreamCode",
            description,
            url: "https://dreamcodesoft.com",
            logo,
            founded,
            location: {
              "@type": "City",
              name: locationCity,
              country: locationCountry
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone,
              contactType: "customer service"
            }
          },
          null,
          2
        )
      }}
    />
  );
}