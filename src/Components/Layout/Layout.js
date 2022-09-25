import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useLocation } from "react-router-dom";
import Cart from "../Cart/Cart";
import classes from "./Layout.module.scss";
import { useSelector } from "react-redux";

const Layout = (props) => {
  const location = useLocation();
  const cartVisibleState = useSelector((state) => state.cart.cartIsVisible);

  console.log(location);

  return (
    <>
      <Header />
      <main>
        <div
          className={`${classes["cart-box"]} ${
            cartVisibleState ? classes["open-cart"] : classes["close-cart"]
          }`}
        >
          <Cart />
        </div>
        {props.children}
      </main>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Footer />
      )}
    </>
  );
};

export default Layout;
