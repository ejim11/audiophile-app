import { useSelector } from "react-redux";
import modifyNum from "../Helper fns/modifyAmount";
import classes from "./Summary.module.scss";
import Button from "../UI/Button/Button";

const Summary = () => {
  const cartState = useSelector((state) => state.cart.cart);

  const cartList = cartState.map((item, i) => (
    <div key={i} className={classes["cart-item"]}>
      <div className={classes["cart-item-img"]}>
        <img src={item.image} alt={item.name} />
      </div>
      <div className={classes["cart-item-name"]}>
        <p>{item.name}</p>
        <p>${modifyNum(String(item.price))}</p>
      </div>
      <p className={classes["cart-item-qty"]}>X{item.quantity}</p>
    </div>
  ));

  const totalAmount = cartState
    .map((item) => item.totalAmount)
    .reduce((acc, cur) => acc + cur, 0);

  const vat = Math.ceil((totalAmount / 100) * 10);

  const shippingFee = 200;

  const grandTotal = totalAmount + vat + shippingFee;

  return (
    <div className={classes["summary-container"]}>
      <h3>SUMMARY</h3>
      <div className={classes["cart-list"]}>{cartList}</div>
      <div className={classes["summary-prices"]}>
        <p>TOTAL</p>
        <p>${modifyNum(String(totalAmount))}</p>
      </div>
      <div className={classes["summary-prices"]}>
        <p>SHIPPING</p>
        <p>${shippingFee}</p>
      </div>
      <div className={classes["summary-prices"]}>
        <p>VAT(INCLUDED)</p>
        <p>${modifyNum(String(vat))}</p>
      </div>
      <div className={`${classes["summary-prices"]} ${classes["grand-price"]}`}>
        <p>GRAND TOTAL</p>
        <p>${modifyNum(String(grandTotal))}</p>
      </div>
      <Button className={"checkout-btn"}>CONTINUE & PAY</Button>
    </div>
  );
};

export default Summary;
