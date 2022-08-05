import classes from "./Navigation.module.scss";

import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav className={classes[props.className]}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive ? classes["nav-active"] : classes["nav-inactive"]
            }
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/headphones"
            className={(navData) =>
              navData.isActive ? classes["nav-active"] : classes["nav-inactive"]
            }
          >
            HEADPHONES
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/speakers"
            className={(navData) =>
              navData.isActive ? classes["nav-active"] : classes["nav-inactive"]
            }
          >
            SPEAKERS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/earphones"
            className={(navData) =>
              navData.isActive ? classes["nav-active"] : classes["nav-inactive"]
            }
          >
            EARPHONES
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
