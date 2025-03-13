// components/Layout.jsx
import Footer from "./Footer/Footer";
import Nav from "./Nav";


const Layout = ({ children }) => {



    return (
      <>
        <Nav />
            {children}
        <Footer />
      </>
    );
  };
  
  export default Layout;
  
