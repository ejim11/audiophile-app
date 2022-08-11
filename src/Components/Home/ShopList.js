import headphone from "../../assets/shared/desktop/image-headphones.png";
import earphones from "../../assets/shared/desktop/image-earphones.png";
import speakers from "../../assets/shared/desktop/image-speakers.png";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import classes from "./ShopList.module.scss";

const shopData = [
  { img: headphone, title: "HEADPHONES", to: "/category/headphones" },
  { img: speakers, title: "SPEAKERS", to: "/category/speakers" },
  { img: earphones, title: "EARPHONES", to: "/category/earphones" },
];

const ShopList = () => {
  const list = shopData.map((item, i) => (
    <div className={classes.box} key={i}>
      <div className={classes["box-img"]}>
        <img src={item.img} alt={item.title} />
      </div>
      <p>{item.title}</p>
      <Link to={item.to}>
        SHOP <MdKeyboardArrowRight className={classes.icon} />
      </Link>
    </div>
  ));
  return <div className={classes["shop-list"]}>{list}</div>;
};

export default ShopList;
