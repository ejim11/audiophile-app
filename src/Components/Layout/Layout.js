import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useLocation } from "react-router-dom";
import Cart from "../Cart/Cart";
import classes from "./Layout.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { userLogout } from "../../store/auth-actions";

const Layout = (props) => {
  const dispatchFn = useDispatch();
  const location = useLocation();
  const cartVisibleState = useSelector((state) => state.cart.cartIsVisible);

  const logoutBoxVisibleState = useSelector(
    (state) => state.auth.logoutBoxIsVisible
  );
  console.log(logoutBoxVisibleState);

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
        <div
          className={`${classes["logout-btn"]}  ${
            logoutBoxVisibleState ? classes["open-cart"] : classes["close-cart"]
          }`}
          onClick={() => {
            dispatchFn(userLogout());
          }}
        >
          Logout
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
