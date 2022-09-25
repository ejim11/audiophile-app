import classes from "./Cart.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { AiOutlineClose } from "react-icons/ai";
import modifyNum from "../Helper fns/modifyAmount";
import Button from "../UI/Button/Button";
import emptyCartImg from "../../assets/undraw_empty_cart_co35.svg";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const cartState = useSelector((state) => state.cart.cart);
  const dispatchFn = useDispatch();

  const onCloseCartHandler = () => {
    dispatchFn(cartActions.closeCart());
  };

  const emptyCartHandler = () => {
    dispatchFn(cartActions.emptyCart());
  };

  const totalAmount = cartState
    .map((item) => item.totalAmount)
    .reduce((cur, acc) => cur + acc, 0);

  const cartList = cartState.map((item, i) => (
    <div key={i} className={classes["cart-item"]}>
      <div className={classes["cart-item-img"]}>
        <img src={item.image} alt={item.name} />
      </div>
      <div className={classes["cart-item-name"]}>
        <p>{item.name}</p>
        <p>${modifyNum(String(item.price))}</p>
      </div>
      <div className={classes["qty-box"]}>
        <p
          onClick={() => {
            dispatchFn(
              cartActions.changeQty({
                id: item.id,
                price: item.price,
                operation: "minus",
              })
            );
          }}
        >
          -
        </p>
        <p className={classes["qty"]}>{item.quantity}</p>
        <p
          onClick={() => {
            dispatchFn(
              cartActions.changeQty({
                id: item.id,
                price: item.price,
                operation: "add",
              })
            );
          }}
        >
          +
        </p>
      </div>
    </div>
  ));

  return (
    <div className={classes["cart-container"]}>
      <div className={classes["exit-box"]}>
        {cartState.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <p onClick={emptyCartHandler} className={classes["empty-cart-btn"]}>
            Remove all
          </p>
        )}
        <AiOutlineClose onClick={onCloseCartHandler} className={classes.icon} />
      </div>
      {cartState.length === 0 ? (
        <div className={classes["empty-cart-img"]}>
          <img src={emptyCartImg} alt="empty cart img" />
        </div>
      ) : (
        <div className={classes["cart-list-box"]}>{cartList}</div>
      )}
      {cartState.length > 0 && (
        <div className={classes["round-up-box"]}>
          <div className={classes["total-box"]}>
            <p>Total</p>
            <p>${modifyNum(String(totalAmount))}</p>
          </div>
          <Button
            type={"button"}
            className={"checkout-btn"}
            onClick={() => {
              navigate("/checkout");
              dispatchFn(cartActions.closeCart());
            }}
          >
            Checkout
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
