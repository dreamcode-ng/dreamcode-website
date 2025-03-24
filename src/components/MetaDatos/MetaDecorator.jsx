import React from "react";
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

  function MetaDecorator({ url, title, description, type}) {

    const { i18n } = useTranslation();
    let lang = i18n.language;

    return (
      <Head>
        <title>{title}</title>
        <meta property="og:title" content= {title} />
        <meta property="og:url" content={`https://dreamcodesoft.com/${lang}/${url}`} />
        <meta property="og:type" content={type}></meta>
        <meta property="og:description" content= {description} />
        <meta name="description" content={description} />
        <link rel="alternate" hrefLang={`${lang}`} href={`https://dreamcodesoft.com/${lang}/`} />
        <link rel="canonical" href={`https://dreamcodesoft.com/${url}`} />
      </Head>
    )
  }
  
  export default MetaDecorator;