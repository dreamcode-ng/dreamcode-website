// next-i18next.config.js
const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
  },
  localePath: path.resolve('./public/locales'), // Ruta a tus archivos de traducción
};
