import Button from "../UI/Button/Button";
import sample from "../../assets/home/desktop/image-speaker-zx9.png";
import classes from "./ProductSample.module.scss";
import { motion } from "framer-motion";

const ProductSample = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={classes["sample-1"]}
      >
        <div className={` ${classes["sample-1-box-1"]}`}>
          <div className={classes["sample-1-box-img"]}>
            <img src={sample} alt={"product-sample"} />
          </div>
        </div>
        <div className={` ${classes["sample-1-box-2"]}`}>
          <h3>
            ZX9 <br /> SPEAKER
          </h3>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button className={"btn-sample-1"}>SEE PRODUCT</Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={classes["sample-2"]}
      >
        <h3>ZX7 SPEAKER</h3>
        <Button className={"btn-sample-2"}>SEE PRODUCT</Button>
      </motion.div>
      <div className={classes["sample-3"]}>
        <div className={classes["sample-3-box-1"]}>
          {/* <img src={sample2} alt="product-sample" /> */}
        </div>
        <div className={classes["sample-3-box-2"]}>
          <h3>
            YX1 WIRELESS <br /> EARPHONES
          </h3>
          <Button className={"btn-sample-2"}>SEE PRODUCT</Button>
        </div>
      </div>
    </>
  );
};

export default ProductSample;
