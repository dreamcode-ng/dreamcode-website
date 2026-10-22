import React from "react";
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

  function MetaDecorator({ url, title, description, type }) {

  const { i18n } = useTranslation();
  const currentLocale = i18n.language || 'es';
  const BASE = 'https://dreamcodesoft.com';
  const X_DEFAULT = 'es'; // default locale

  const normalizePath = (value) => {
    if (!value) return '';
    let clean = String(value).trim();
    // Strip absolute URL origin so callers can pass either bare paths or full URLs
    const originMatch = clean.match(/^(https?:\/\/[^/]+)(\/.*)?$/);
    if (originMatch) {
      clean = originMatch[2] || '';
    }
    clean = clean.replace(/^\/+/, '').replace(/\/+$/, '');
    if (clean.startsWith('en/')) clean = clean.replace(/^en\//, '');
    if (clean.startsWith('es/')) clean = clean.replace(/^es\//, '');
    return clean;
  };

  const localeUrl = (locale) => {
    const cleanPath = normalizePath(url);
    const prefix = locale === X_DEFAULT ? '' : `/${locale}`;

    if (!cleanPath) {
      return `${BASE}${prefix}/`;
    }

    return `${BASE}${prefix}/${cleanPath}`;
  };

  const canonical = localeUrl(currentLocale);
  const enUrl = localeUrl('en');
  const esUrl = localeUrl('es');

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