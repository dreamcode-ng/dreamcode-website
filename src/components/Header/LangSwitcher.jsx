import { MdLanguage } from "react-icons/md";
import style from './menu.module.css';
import { useRouter } from 'next/router';


export default function LangSwitcher() {

      // Obtenemos la ruta
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;  
      // Obtenemos el idioma actual
    const changeLanguage = (newLocale) => {
    router.push({ pathname, query }, asPath, { locale: newLocale }); // Cambia el idioma y refleja el cambio en la URL
  };

    return (
            <div className="nav-item dropdown pl_20 pr_20">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <MdLanguage />
              </a>
              <ul className="dropdown-menu ">
                <li>
                  <button 
                    className="dropdown-item" 
                    onClick={() => changeLanguage('es')}
                    disabled={locale === 'es'}
                  >
                     {locale === 'en' ? 'Spanish' : 'Español'}
                  </button>
                </li>
                <li>
                  <button 
                    className="dropdown-item" 
                    onClick={() => changeLanguage('en')}
                    disabled={locale === 'en'}
                  >
                    {locale === 'en' ? 'English' : 'Inglés'}
                  </button>
                </li>
              </ul>
            </div>
    )
  }
  