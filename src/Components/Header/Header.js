import Navigation from "../Navigation/Navigation";
import classes from "./Header.module.scss";
import logo from "../../assets/shared/desktop/logo.svg";
import Button from "../UI/Button/Button";
import { CgProfile } from "react-icons/cg";
import { CgShoppingCart } from "react-icons/cg";
import { HiMenuAlt2 } from "react-icons/hi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { cartActions } from "../../store/cart-slice";

const Header = () => {
  const dispatchFn = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const authCtxLoginState = useSelector((state) => state.auth.isLoggedIn);
  const cartState = useSelector((state) => state.cart.cart);
  console.log(cartState);

  const [menuVisible, setMenuVisible] = useState(false);

  const displayMenuHandler = () => {
    setMenuVisible((prevState) => !prevState);
  };

  const navigateToLogin = () => {
    navigate("/login");
  };
  const navigateToRegister = () => {
    navigate("/register");
  };

  const checkLocation = location.pathname === "/login";
  const checkHome = location.pathname === "/";

  const openCarthandler = () => {
    dispatchFn(cartActions.openCart());
  };

  return (
    <header
      className={checkHome ? classes["bg-transparent"] : classes["bg-black"]}
    >
      <div className={classes.container}>
        <HiMenuAlt2
          className={classes["icon-menu-bar"]}
          onClick={displayMenuHandler}
        />
        <div className={classes["logo-pic"]}>
          <img src={logo} alt="logo" />
        </div>
        <div
          onClick={displayMenuHandler}
          className={`${classes["nav-div"]} ${
            menuVisible ? classes["display-menu"] : classes["hide-menu"]
          }`}
        >
          <Navigation
            className={"header-nav"}
            active={"header-nav-active"}
            inactive={"header-nav-inactive"}
          />
        </div>

        {authCtxLoginState && <div className={classes.name}>Ejim</div>}

        <div className={classes["icon-div"]}>
          {authCtxLoginState && <CgProfile className={classes.icon} />}
          {!checkLocation && !authCtxLoginState && (
            <Button className="login-btn" onClick={navigateToLogin}>
              Login
            </Button>
          )}
          {checkLocation && !authCtxLoginState && (
            <Button className="login-btn" onClick={navigateToRegister}>
              Register
            </Button>
          )}
          <div className={classes["cart-box"]} onClick={openCarthandler}>
            <CgShoppingCart className={classes.icon} />
            {cartState.length > 0 && <span>{cartState.length}</span>}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
