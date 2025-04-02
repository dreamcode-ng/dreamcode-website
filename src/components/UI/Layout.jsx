// components/Layout.jsx
import Footer from "./Footer/Footer";
import Nav from "./Nav";
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import Flotantes from "./Flotantes";


function Layout ({ children }) {

  const { t, i18n } = useTranslation('layout'); 

    return (
      <>
        <Nav />
          {children}
        <Footer />
        <Flotantes />
      </>
    );
  };


  export default Layout;
  


