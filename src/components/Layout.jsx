// components/Layout.jsx
import Navbar from "./Header/Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
      <>
        <Navbar />
          {children}
        {/* <Footer /> */}
      </>
    );
  };
  
  export default Layout;
  
