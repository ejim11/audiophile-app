import classes from "./Footer.module.scss";
import logo from "../../assets/shared/desktop/logo.svg";
import Navigation from "../Navigation/Navigation";
import { ImFacebook2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className  = {classes.footer}>
      <div className={classes["first-div"]}>
        <div className={classes["color-div-box"]}></div>
      </div>
      <div className={classes["second-div"]}>
        <div className={classes["logo-div"]}>
          <img src={logo} alt="logo-img" />
        </div>
        <div className={classes["nav-div"]}>
          <Navigation
            className={"footer-nav"}
            active={"footer-nav-active"}
            inactive={"footer-nav-inactive"}
          />
        </div>
      </div>
      <div className={classes["footer-auto-box"]}>
        <div className={classes["text-div"]}>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
        </div>
        <div className={classes["icon-div"]}>
          <Link to={"http://www.facebook.com"}>
            <ImFacebook2 className={classes["icon"]} />
          </Link>
          <Link to={"http://www.facebook.com"}>
            <ImTwitter className={classes["icon"]} />
          </Link>
          <Link to={"http://www.facebook.com"}>
            <FaInstagram className={classes["icon"]} />
          </Link>
        </div>
      </div>
      <div className={classes["copyright-div"]}>
        <p>Copyright 2021. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
