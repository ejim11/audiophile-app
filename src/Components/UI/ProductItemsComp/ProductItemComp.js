import AutoFitBox from "../Auto-fit box/AutoFitBox";
import Button from "../Button/Button";
import classes from "./ProductItemComp.module.scss";
import { useNavigate } from "react-router-dom";

const ProductItemComp = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <AutoFitBox className={props.className}>
        <div className={`${classes["product-text"]} ${"product-text"}`}>
          {props.newProduct && (
            <p className={classes["new-product"]}>NEW PRODUCT</p>
          )}
          <h3>{props.title}</h3>
          <p>{props.text}</p>
          <Button
            className={"btn-sample-4"}
            onClick={() => {
              navigate(props.slug);
            }}
          >
            SEE PRODUCT
          </Button>
        </div>
        <div className={`${classes["product-img"]} ${"product-img"}`}>
          <img src={props.img} alt={props.alt} />
        </div>
      </AutoFitBox>
    </>
  );
};

export default ProductItemComp;
