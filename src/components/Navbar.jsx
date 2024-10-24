import { useRouter } from 'next/router';
import { ThemeContext } from "../pages/_app"; 
import Link from 'next/link';
import { MdLanguage } from "react-icons/md";
import { BiSun, BiMoon } from "react-icons/bi";
import React, { useContext } from 'react';

const Navbar = () => {

  // Gestion theme dark
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Obtenemos la ruta
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;  

  // Obtenemos el idioma actual
  const changeLanguage = (newLocale) => {
    router.push({ pathname, query }, asPath, { locale: newLocale }); // Cambia el idioma y refleja el cambio en la URL
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/" passHref>Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                {locale === 'en' ? 'About' : 'Acerca de'}
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item">
            <Link href="/careers" className="nav-link">
                {locale === 'en' ? 'Careers' : 'Carreras'}
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <MdLanguage />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <button 
                    className="dropdown-item" 
                    onClick={() => changeLanguage('es')}
                    disabled={locale === 'es'}
                  >
                    Español
                  </button>
                </li>
                <li>
                  <button 
                    className="dropdown-item" 
                    onClick={() => changeLanguage('en')}
                    disabled={locale === 'en'}
                  >
                    English
                  </button>
                </li>
              </ul>
            </li>
            <button onClick={toggleTheme} className='btn-dark-mode'>
                {theme ?  <BiSun /> : <BiMoon /> }
            </button> 
          </ul>
        </div>
      </div>
    </nav>
  );
}; 

export default Navbar;
