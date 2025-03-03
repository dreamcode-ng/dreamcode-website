import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

// Función para cargar las traducciones de un archivo JSON por página
const loadPageTranslation = (lang, page) => {
  return import(`./${lang}/${page}.json`).then((module) => module.default);
};

// Inicialización de i18next
i18n
  .use(LanguageDetector)  // Detecta el idioma del navegador
  .use(initReactI18next)  // Configura React con i18next
  .init({
    lng: "es", // Idioma por defecto
    fallbackLng: "es", // Idioma por defecto si no se encuentra la traducción
    resources: {
      es: {
        translation: {} // Inicialmente vacío, se llenará dinámicamente
      },
      en: {
        translation: {} // Inicialmente vacío, se llenará dinámicamente
      },
    },
    interpolation: {
      escapeValue: false, // React ya maneja el escape de caracteres
    },
    react: {
      useSuspense: false, // Desactivar suspense, ya que Next.js maneja esto
    },
    load: 'currentOnly', // Cargar solo el idioma actual
    // Cargar las traducciones de la página actual al cambiar de página
    async loadNamespaces(namespaces) {
      const namespacePromises = namespaces.map(async (namespace) => {
        // Cargar las traducciones de las páginas
        const translations = await loadPageTranslation(i18n.language, namespace);
        i18n.addResourceBundle(i18n.language, namespace, translations);
      });
      await Promise.all(namespacePromises);
    },
  });

export default i18n;
