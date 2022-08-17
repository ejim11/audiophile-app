import classes from "./Navigation.module.scss";

import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
const Links = [
  { to: "/", text: "HOME" },
  { to: "/category/headphones", text: "HEADPHONES" },
  { to: "/category/speakers", text: "SPEAKERS" },
  { to: "/category/earphones", text: "EARPHONES" },
];

const Navigation = (props) => {
  const navLinksList = Links.map((item, i) => (
    <li key={i}>
      <NavLink
        to={item.to}
        className={(navData) =>
          navData.isActive ? classes[props.active] : classes[props.inactive]
        }
      >
        {item.text}
      </NavLink>
    </li>
  ));

  return (
    <nav className={classes[props.className]}>
      <FaTimes className={classes["times-icon"]} />
      <ul>{navLinksList}</ul>
    </nav>
  );
};

export default Navigation;
