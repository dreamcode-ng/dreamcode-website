// src/pages/_document.js
import { jost } from '@/assets/fonts/fonts';
import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
  render() {
    return (
      <Html lang="en"> 
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
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

