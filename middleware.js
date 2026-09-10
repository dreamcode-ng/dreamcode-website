import { NextResponse } from 'next/server';

const LOCALES = ['es', 'en'];
const DEFAULT_LOCALE = 'es';
const COOKIE_NAME = 'NEXT_LOCALE';

function getLocaleFromAcceptLanguage(acceptLanguageHeader) {
  if (!acceptLanguageHeader) return DEFAULT_LOCALE;

  const locales = acceptLanguageHeader.split(',').map((entry) => {
    const [lang, qPart] = entry.trim().split(';');
    const q = qPart ? parseFloat(qPart.replace('q=', '')) : 1;
    return { lang: lang.toLowerCase().split('-')[0], q };
  });

  locales.sort((a, b) => b.q - a.q);

  for (const { lang } of locales) {
    if (LOCALES.includes(lang)) {
      return lang;
    }
  }

  return DEFAULT_LOCALE;
}

function getLocale(request) {
  const cookieLocale = request.cookies.get(COOKIE_NAME)?.value;
  if (cookieLocale && LOCALES.includes(cookieLocale)) {
    return cookieLocale;
  }

  const acceptLanguage = request.headers.get('accept-language');
  return getLocaleFromAcceptLanguage(acceptLanguage);
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const pathnameIsMissingLocale = LOCALES.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (!pathnameIsMissingLocale) {
    return NextResponse.next();
  }

  const locale = getLocale(request);

  if (locale === DEFAULT_LOCALE) {
    return NextResponse.next();
  }

  const newUrl = new URL(
    `/${locale}${pathname === '/' ? '' : pathname}${request.nextUrl.search}`,
    request.url
  );

  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|img|assets|favicon.ico|robots.txt|sitemap.xml|sw.js|workbox-.*\\.js).*)',
  ],
};
