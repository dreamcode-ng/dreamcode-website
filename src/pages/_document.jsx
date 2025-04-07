// src/pages/_document.js
import { jost } from '@/assets/fonts/fonts';
import Document, { Html, Head, Main, NextScript } from 'next/document';


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

