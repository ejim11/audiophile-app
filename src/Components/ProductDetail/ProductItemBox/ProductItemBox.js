import Button from "../../UI/Button/Button";
import classes from "./ProductItemBox.module.scss";
import modifyNum from "../../Helper fns/modifyAmount";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

const ProductItemBox = ({ product }) => {
  const dispatchFn = useDispatch();
  const [inputValue, setInputValue] = useState(0);

  const increaseInputHandler = () => {
    setInputValue((prevState) => prevState + 1);
  };
  const decreaseInputHandler = () => {
    if (inputValue === 0) {
      return;
    }
    setInputValue((prevState) => prevState - 1);
  };

  const submitAmount = () => {
    if (inputValue === 0) {
      return;
    }

    dispatchFn(
      cartActions.addItemToCart({
        id: product.id,
        name: product.name,
        image: product.image.mobile,
        quantity: inputValue,
        price: product.price,
        totalAmount: inputValue * product.price,
      })
    );

    setInputValue(0);
  };

  return (
    <div className={classes["item-box"]}>
      <div className={classes["item-box-img"]}>
        <img src={product.image.desktop} alt={product.name} />
      </div>
      <div className={classes["item-box-info"]}>
        {product.new && <p className={classes["new-product"]}>NEW PRODUCT</p>}
        <h2>{product.name}</h2>
        <p className={classes["description"]}>{product.description}</p>
        <p className={classes.price}>${modifyNum(String(product.price))}</p>
        <div className={classes["add-to-cart-box"]}>
          <div className={classes["amount-box"]}>
            <button onClick={decreaseInputHandler}>-</button>
            <p>{inputValue}</p>
            <button onClick={increaseInputHandler}>+</button>
          </div>
          <Button className={"add-to-cart-btn"} onClick={submitAmount}>
            ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItemBox;
