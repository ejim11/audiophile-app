import Button from "../../UI/Button/Button";
import classes from "./ProductAlternatives.module.scss";
import { useNavigate } from "react-router-dom";

const ProductAlternatives = ({ product }) => {
  const navigate = useNavigate();

  const alternatives = product.others.map((item, i) => (
    <div key={i} className={classes["alternative-item"]}>
      <div>
        <img src={item.image.desktop} alt={item.name} />{" "}
      </div>
      <p className={classes["product-name"]}>{item.name}</p>
      <Button
        onClick={() => {
          navigate(`/product/${item.slug}`);
        }}
        className={"see-product-btn"}
      >
        SEE PRODUCT
      </Button>
    </div>
  ));

  return (
    <div className={classes["alternative-box"]}>
      <h3>YOU MAY ALSO LIKE</h3>
      <div className={classes["alternatives"]}>{alternatives}</div>
    </div>
  );
};

export default ProductAlternatives;
