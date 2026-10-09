import React from "react";
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

  function MetaDecorator({ url, title, description, type}) {

    const { i18n } = useTranslation();
    const lang = i18n.language;
    const BASE = "https://dreamcodesoft.com";
    const X_DEFAULT = "es"; // default locale

    const localeUrl = (locale) => {
      if (!url) {
        return locale === X_DEFAULT ? BASE : `${BASE}/${locale}`;
      }
      const prefix = locale === X_DEFAULT ? "" : `/${locale}`;
      return `${BASE}${prefix}/${url}`;
    };

    const canonical = localeUrl(lang);
    const enUrl = localeUrl("en");
    const esUrl = localeUrl("es");

    return (
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta property="og:title" content= {title} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content={type}></meta>
        <meta property="og:description" content= {description} />
        <meta name="description" content={description} />
        <link rel="alternate" hrefLang="en" href={enUrl} />
        <link rel="alternate" hrefLang="es" href={esUrl} />
        <link rel="alternate" hrefLang={X_DEFAULT} href={esUrl} />
        <link rel="canonical" href={canonical} />
      </Head>
    )
  }
  
  export default MetaDecorator;