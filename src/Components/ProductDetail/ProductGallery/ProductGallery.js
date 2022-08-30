import classes from "./ProductGallery.module.scss";

const ProductGallery = ({ product }) => {
  return (
    <div className={classes["gallery-box"]}>
      <div className={classes["first-box"]}>
        <div className={classes["first-img"]}>
          <img src={product.gallery.first.desktop} alt={"first gallery img"} />
        </div>
        <div className={classes["second-img"]}>
          <img
            src={product.gallery.second.desktop}
            alt={"second gallery img"}
          />
        </div>
      </div>

      <div className={classes["third-img"]}>
        <img src={product.gallery.third.desktop} alt={"third gallery img"} />
      </div>
    </div>
  );
};

export default ProductGallery;
