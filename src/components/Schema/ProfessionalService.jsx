import React from "react";

/**
 * ProfessionalService JSON-LD schema.org markup.
 * For agency/consulting service pages (homepage, services pages).
 * Hook-free so it can be used anywhere.
 *
 * Props:
 *  - name (string): Service name. Defaults to "DreamCode Software".
 *  - description (string): Service description.
 *  - url (string): Absolute URL of the service page.
 *  - serviceArea (string|string[]): Geographic area(s) served.
 *  - addressCountry (string): Country code. Default "BO".
 *  - addressLocality (string): City. Default "Santa Cruz".
 *  - latitude/longitude (number): Geo coordinates.
 *  - openingHours (string[]): e.g. ["Mo-Fr 09:00-18:00"]
 *  - priceRange (string): e.g. "$$"
 */
export default function ProfessionalService({
  name = "DreamCode Software",
  description = "Software development and IT outsourcing with specialized teams, aligned with business goals across industries, with AI capabilities.",
  url = "https://dreamcodesoft.com",
  serviceArea = ["Colombia", "United States", "LATAM", "North America"],
  addressCountry = "CO",
  addressLocality = "Cali",
  latitude = 3.4516,
  longitude = -76.5320,
  openingHours = ["Mo-Fr 09:00-18:00"],
  priceRange = "$$"
}) {
  const areas = Array.isArray(serviceArea) ? serviceArea : [serviceArea];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name,
            description,
            url,
            serviceArea: areas.map((area) => ({
              "@type": "Country",
              name: area
            })),
            address: {
              "@type": "PostalAddress",
              addressCountry,
              addressLocality
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude,
              longitude
            },
            openingHours,
            priceRange
          },
          null,
          2
        )
      }}
    />
  );
}