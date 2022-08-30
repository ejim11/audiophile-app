import classes from "./ProductFeatureBox.module.scss";

const ProductFeatureBox = ({ product }) => {
  const productIncludes = product.includes.map((data, i) => (
    <li key={i} className={classes["features-list"]}>
      <p className={classes.quantity}>{data.quantity}x</p>
      <p>{data.item}</p>
    </li>
  ));

  return (
    <div className={classes["feature-box"]}>
      <div className={classes["feature-box-info"]}>
        <h3>FEATURES</h3>
        <p>{product.features}</p>
      </div>
      <div className={classes["feature-box-features"]}>
        <h3>IN THE BOX</h3>
        <ul>{productIncludes}</ul>
      </div>
    </div>
  );
};

export default ProductFeatureBox;
