import Navigation from "../Navigation/Navigation";
import classes from "./Header.module.scss";
import logo from "../../assets/shared/desktop/logo.svg";
import { CgProfile } from "react-icons/cg";
import { CgShoppingCart } from "react-icons/cg";
import { HiMenuAlt2 } from "react-icons/hi";
import { useState } from "react";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const displayMenuHandler = () => {
    setMenuVisible((prevState) => !prevState);
  };

  return (
    <header>
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

        <div className={classes.name}>Ejim</div>
        <div className={classes["icon-div"]}>
          <CgProfile className={classes.icon} />
          <CgShoppingCart className={classes.icon} />
        </div>
      </div>
    </header>
  );
};

export default Header;
