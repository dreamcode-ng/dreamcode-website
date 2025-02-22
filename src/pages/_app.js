import '@/styles/globals.css'
import '@/styles/layout.css'
import '@/styles/home.css'
import Layout from '@/components/Layout';
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState, useEffect } from "react";
import { appWithTranslation } from 'next-i18next';
import nextI18nextConfig from '../../next-i18next.config'; // Importar configuración
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const ThemeContext = createContext(null);

function MyApp({ Component, pageProps }) {
    
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const [theme, setTheme] = useState(true);
  const toggleTheme = () => { setTheme(!theme) };

    return (
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div data-theme={theme ? "dark" : "light"}>
              <Layout>
                  <Component {...pageProps} />
              </Layout>
            </div>
          </ThemeContext.Provider>
    );
}

export default appWithTranslation(MyApp, nextI18nextConfig);
