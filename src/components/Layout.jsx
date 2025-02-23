// components/Layout.jsx
import Footer from "./Footer";
import Nav from "./Nav";


const Layout = ({ children }) => {



    return (
      <>
        <Nav />
            {children}
      </>
    );
  };
  
  export default Layout;
  
