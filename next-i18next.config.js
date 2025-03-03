// next-i18next.config.js
const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    localeDetection: true,
  },
  react: { useSuspense: false },
  localePath: path.resolve('./public/locales'),
  
};
