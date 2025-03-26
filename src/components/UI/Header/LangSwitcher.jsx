import { MdLanguage } from "react-icons/md";
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
            <li className="nav-item btn-lang">
              { locale === 'en' ? 
                  <button 
                    className="dropdown-item w_color" 
                    onClick={() => changeLanguage('es')}
                    disabled={locale === 'es'}
                  >
                    ES
                  </button>
                  :
                  <button 
                    className="dropdown-item w_color" 
                    onClick={() => changeLanguage('en')}
                    disabled={locale === 'en'}
                  >
                    EN
                  </button>
              } 
                </li>

    )
  }
  