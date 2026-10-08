// src/pages/_document.js
import { jost } from '@/assets/fonts/fonts';
import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * Inject JSON-LD schema markup into document head.
 * Server-side rendered so all pages include them immediately.
 */
function SchemaTags() {
  // We'll use inline scripts for Organization and WebSite
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "DreamCode Software",
            alternateName: "DreamCode",
            description: "Software development and IT outsourcing with specialized teams, aligned with business goals across industries, with AI capabilities.",
            url: "https://dreamcodesoft.com",
            logo: "https://dreamcodesoft.com/logo.png",
            founded: "2013",
            location: { "@type": "City", name: "Cali", country: "CO" },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+57 3152206211",
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

function WebSiteTags() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "DreamCode Software",
            url: "https://dreamcodesoft.com",
            description: "Software development and IT outsourcing with specialized teams, aligned with business goals across industries, with AI capabilities."
          },
          null,
          2
        )
      }}
    />
  );
}

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-TVBBE1WWWG"></script>
          <link rel="icon" href="/favicon.ico" />
          <meta name="facebook-domain-verify" content="4ubb0vjvqvj5b7ip20nza7qsgfuka3" />
          <meta name="robots" content="index,follow" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />

          {/* JSON-LD Schema */}
          <SchemaTags />
          <WebSiteTags />
        </Head>
        <body className={`${jost.className} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W768FRC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;