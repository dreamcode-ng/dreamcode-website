// src/pages/_document.js
import { jost } from '@/assets/fonts/fonts';
import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
  render() {
    return (
      <Html lang="en"> 
        <Head>
          {/* <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W768FRC');
          </script> */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-TVBBE1WWWG"></script>
          <link rel="icon" href="/favicon.ico" />
          <meta name="facebook-domain-verify" content="4ubb0vjvqvj5b7ip20nza7qsgfuka3" />
          <meta name="robots" content="index,follow" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        </Head>
        <body className={`${jost.className} antialiased`}>
          <Main /> 
          <NextScript /> 
        </body>
      </Html>
    );
  }
}

export default MyDocument;

