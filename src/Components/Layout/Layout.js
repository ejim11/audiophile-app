import Footer from "../Footer/Footer";
import Header from "../Header/Header";

// import classes from "./Layout.module.scss";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
