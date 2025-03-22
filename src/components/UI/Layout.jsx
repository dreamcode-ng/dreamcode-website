// components/Layout.jsx
import Footer from "./Footer/Footer";
import Nav from "./Nav";
import { Trans, withTranslation, useTranslation } from 'react-i18next';



function Layout ({ children }) {

  const { t, i18n } = useTranslation('layout'); 

    return (
      <>
        <Nav />
            {/* <p>{t('locale')}</p> */}
          {children}
        <Footer />
      </>
    );
  };


  export default Layout;
  


