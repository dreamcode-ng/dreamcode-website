// src/pages/_document.js
import { jost } from '@/assets/fonts/fonts';
import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
  render() {
    return (
      <Html lang="en"> 
        <Head>
          <link rel="icon" href="/favicon.ico" /> 
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

