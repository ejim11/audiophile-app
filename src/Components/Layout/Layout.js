import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useLocation } from "react-router-dom";

// import classes from "./Layout.module.scss";

const Layout = (props) => {
  const location = useLocation();

  console.log(location);

  return (
    <>
      <Header />
      <main>{props.children}</main>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Footer />
      )}
    </>
  );
};

export default Layout;
