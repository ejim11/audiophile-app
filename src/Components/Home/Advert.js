import AutoFitBox from "../UI/Auto-fit box/AutoFitBox";
import advertImg from "../../assets/shared/desktop/image-best-gear.jpg";
import classes from "./Advert.module.scss";
const Advert = () => {
  return (
    <AutoFitBox className={"advert-box"}>
      <div className={classes["advert-text"]}>
        <h3>
          BRINGING YOU THE <span>BEST</span> AUDIO GEAR
        </h3>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className={classes["advert-img"]}>
        <img src={advertImg} alt="advert-img" />
      </div>
    </AutoFitBox>
  );
};

export default Advert;
