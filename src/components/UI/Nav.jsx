import React from 'react';
import Link from 'next/link';
import LangSwitcher from './Header/LangSwitcher';
import MenuButtons from './Header/MenuButtons';
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { withTranslation } from 'react-i18next';



function Nav({ t }) {

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-md -bg-secondary">
        <div className="container container-dc">
          <Link className="navbar-brand pt-0" href="/" passHref>
            <Image 
                className="logoBlue" 
                src="/img/logo-blue.png"
                alt="Desarrolladores de software DreamCode Software" 
                title="Logo DreamCode Software" 
                width={140}
                height={17}
                loading="lazy" /> 
          </Link>
          <button className="navbar-toggler collapsed" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
          <span className="menu_toggle">
            <span className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span className="hamburger-cross">
              <span></span>
              <span></span>
            </span>
          </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link dropdown-toggle f_400 w_color"
                    data-bs-toggle="collapse" 
                    href="#collapseExample" 
                    role="button" 
                    aria-expanded="false" 
                    aria-controls="collapseExample">{t('solutions')}</Link>
                </li>
                {
                  isMobile ?
                   <MenuButtons /> 
                   : ''
                }
                <li className="nav-item">
                  <Link className="nav-link f_400 w_color" href="/projects">{t('projects')}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link f_400 w_color" href="/about">{t('about')}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link f_400 w_color" href="/careers">{t('careers')}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link f_400 w_color" href="/blog">DreamBlog</Link>
                </li>
            </ul>
            <ul className="navbar-nav nav mb-2 mb-lg-0">
              <li>
                  <Link href="/contact#form-primary" className="btn" type="submit">{t('letstalk')}</Link>
              </li>
              <LangSwitcher />
            </ul>
          </div>

        </div>
      </nav>
      {
        isMobile ? '' : 
        <MenuButtons />
        
      }
    </>
  )
}

  export default withTranslation('layout')(Nav);
