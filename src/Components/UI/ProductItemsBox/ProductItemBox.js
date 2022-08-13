import AutoFitBox from "../Auto-fit box/AutoFitBox";
import Button from "../Button/Button";
import classes from "./ProductItemBox.module.scss";

const ProductItemBox = (props) => {
  return (
    <>
      <AutoFitBox className={props.className}>
        <div className={`${classes["product-text"]} ${"product-text"}`}>
          {props.newProduct && (
            <p className={classes["new-product"]}>NEW PRODUCT</p>
          )}
          <h3>{props.title}</h3>
          <p>{props.text}</p>
          <Button className={"btn-sample-4"}>SEE PRODUCT</Button>
        </div>
        <div className={`${classes["product-img"]} ${"product-img"}`}>
          <img src={props.img} alt={props.alt} />
        </div>
      </AutoFitBox>
    </>
  );
};

export default ProductItemBox;
