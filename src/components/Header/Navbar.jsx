import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import styles from "./menu.module.css";
import ThemeSwitch from './ThemeSwitch';
import LangSwitcher from './LangSwitcher';
import MenuButtons from './MenuButtons';
import MenuLinks from './MenuLinks';


function Navbar () {

  return (
    <header className={`navbar navbar-expand-lg -bg-section px-3  ${styles.header_area}`}>
      <div className="container">
        <Link className="navbar-brand" href="/" passHref>
          <Image 
              className="logoBlue" 
              src="/img/logo-blue.png"
              alt="Desarrolladores de software DreamCode Software" 
              title="Logo DreamCode Software" 
              width={164}
              height={21}
              loading="lazy" /> 
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav 
          className="collapse navbar-collapse justify-content-end" 
          id="navbarNavDropdown">
          <MenuLinks />
          <MenuButtons />
          
          <LangSwitcher />
          <ThemeSwitch />

        </nav>
      </div>
    </header>
  );
}; 

export default Navbar;
