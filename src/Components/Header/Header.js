import Navigation from "../Navigation/Navigation";
import classes from "./Header.module.scss";
import logo from "../../assets/shared/desktop/logo.svg";
import { CgProfile } from "react-icons/cg";
import { CgShoppingCart } from "react-icons/cg";

const Header = () => {
  return (
    <header>
      <div className={classes.container}>
        <div className={classes["logo-pic"]}>
          <img src={logo} alt="logo" />
        </div>
        <Navigation className={"header-nav"} />
        <div>
          <CgProfile className={classes.icon} />
          <CgShoppingCart className={classes.icon} />
        </div>
      </div>
    </header>
  );
};

export default Header;
