import React from "react";

/**
 * JobPosting JSON-LD schema.org markup.
 * For individual job-offer pages (careers/[urlId]).
 * Hook-free so it can be used in SSR pages.
 *
 * Props:
 *  - jobTitle (string): Job title. Defaults to "DreamCode Software".
 *  - description (string): Job description. Defaults to jobTitle.
 *  - datePosted (string): ISO 8601 date string (YYYY-MM-DD).
 *  - employmentType (string): e.g. "FULL_TIME", "CONTRACT", "TEMPORARY".
 *  - url (string): Absolute URL of the job posting.
 *  - jobLocation (object): { "@type": "Place", "address": { ... } }
 *  - hiringOrganization (object): { "@type": "Organization", "name", "url", "logo" }
 *  - experienceRequirements (string): Experience required.
 *  - qualifications (string): Required skills/qualifications.
 *  - responsibilities (string): Job responsibilities.
 *  - jobLocationType (string): "ON_SITE" | "TELECOMMUTE" | "HYBRID".
 */
export default function JobPosting({
  jobTitle = "DreamCode Software",
  description,
  datePosted,
  employmentType,
  url,
  jobLocation,
  hiringOrganization = {
    "@type": "Organization",
    name: "DreamCode Software",
    url: "https://dreamcodesoft.com",
    logo: "https://dreamcodesoft.com/logo.png"
  },
  experienceRequirements,
  qualifications,
  responsibilities,
  jobLocationType = "ON_SITE"
}) {
  if (!jobTitle || !url) {
    return null;
  }

  const jobPosting = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: jobTitle,
    description: description || jobTitle,
    url,
    hiringOrganization,
    jobLocationType,
    ...(datePosted && { datePosted }),
    ...(employmentType && { employmentType }),
    ...(jobLocation && { jobLocation }),
    ...(experienceRequirements && { experienceRequirements }),
    ...(qualifications && { qualifications }),
    ...(responsibilities && { responsibilities })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jobPosting, null, 2)
      }}
    />
  );
}