import '@/styles/globals.css';
import '@/styles/layout.css';
import '@/styles/home.css';
import '@/styles/common.css';
import Layout from '@/components/UI/Layout';
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState, useEffect } from "react";
import { appWithTranslation } from 'next-i18next';
import AnalyticsScripts from '@/assets/SEO/AnalyticsScripts';

import nextI18nextConfig from '../../next-i18next.config'; // Importar configuración
import 'swiper/css';
import '../../public/locales/i18n'

export const ThemeContext = createContext(null);

function MyApp({ Component, pageProps }) {
    
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);


    return (
          <>
          <AnalyticsScripts />
              <Layout>
                  <Component {...pageProps} />
              </Layout>
          </>
    );
}

export default appWithTranslation(MyApp, nextI18nextConfig);
