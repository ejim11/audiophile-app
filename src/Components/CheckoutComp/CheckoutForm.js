import InputComponent from "../UI/InputComponent/InputComponent";
import { useSelector } from "react-redux";
import { useState } from "react";
import classes from "./CheckoutForm.module.scss";
import cashTransaction from "../../assets/shared/desktop/cashTransaction.svg";

const CheckoutForm = () => {
  const authCtxLoginState = useSelector((state) => state.auth.isLoggedIn);
  const name = useSelector((state) => state.checkout.name);
  const mail = useSelector((state) => state.checkout.email);
  const phoneNumber = useSelector((state) => state.checkout.phoneNumber);
  const address = useSelector((state) => state.checkout.address);
  const zipCode = useSelector((state) => state.checkout.zipCode);
  const city = useSelector((state) => state.checkout.city);
  const country = useSelector((state) => state.checkout.country);
  const eMoneyNumber = useSelector((state) => state.checkout.eMoneyNumber);
  const pin = useSelector((state) => state.checkout.pin);

  const [emoney, setEmoney] = useState(true);

  const deliveryChangeHandler = (e) => {
    setEmoney(false);
  };

  const emoneyChangeHandler = () => {
    setEmoney(true);
  };

  return (
    <form className={classes["checkout-form"]}>
      {!authCtxLoginState && (
        <div className={classes["details-div"]}>
          <h3>BILLING DETAILS</h3>
          <div className={classes["grid-div"]}>
            <InputComponent
              label={"Name"}
              type={"text"}
              placeholder={"Alexis Grey"}
              value={name}
              field={"name"}
            />
            <InputComponent
              label={"Email Address"}
              type={"email"}
              placeholder={"alexisgrey@gmail.com"}
              value={mail}
              field={"mail"}
            />
            <InputComponent
              label={"Phone Number"}
              type={"number"}
              placeholder={"081-6730-4689"}
              value={phoneNumber}
              field={"number"}
            />
          </div>
        </div>
      )}
      <div className={classes["details-div"]}>
        <h3>SHIPPING INFO</h3>
        <InputComponent
          label={"Address"}
          type={"text"}
          placeholder={"1137 Williams Avenue"}
          value={address}
          field={"address"}
        />
        <div className={classes["grid-div"]}>
          <InputComponent
            label={"Zip Code"}
            type={"text"}
            placeholder={"400001"}
            value={zipCode}
            field={"zip-code"}
          />
          <InputComponent
            label={"City"}
            type={"text"}
            placeholder={"Enugu"}
            value={city}
            field={"city"}
          />
          <InputComponent
            label={"Country"}
            type={"text"}
            placeholder={"Nigeria"}
            value={country}
            field={"country"}
          />
        </div>
      </div>
      <div className={classes["details-div"]}>
        <h3>PAYMENT DETAILS</h3>
        <div className={`${classes["grid-div"]} ${classes["payment-div"]}`}>
          <p>Payment Method</p>
          <div className={classes["payment-choice"]}>
            <label
              htmlFor={"e-money"}
              className={
                emoney ? classes["label-active"] : classes["label-inactive"]
              }
            >
              E-money
              <input
                type={"radio"}
                id={"e-money"}
                defaultChecked={true}
                onChange={emoneyChangeHandler}
                name={"payment"}
              />
              <span className={classes["checkmark"]}>
                <span className={classes["inner-checkmark"]}></span>
              </span>
            </label>

            <label
              htmlFor={"delivery"}
              className={
                emoney ? classes["label-inactive"] : classes["label-active"]
              }
            >
              Cash on delivery
              <input
                type={"radio"}
                id={"delivery"}
                name={"payment"}
                onChange={deliveryChangeHandler}
              />
              <span className={classes["checkmark"]}>
                <span className={classes["inner-checkmark"]}></span>
              </span>
            </label>
          </div>
        </div>
        {emoney ? (
          <div className={classes["flex-div"]}>
            <InputComponent
              label={"E-money Number"}
              type={"number"}
              placeholder={"8834-8884-7283-2234"}
              value={eMoneyNumber}
              field={"e-money-number"}
              className={"first-box"}
            />
            <InputComponent
              label={"E-Money Pin"}
              type={"number"}
              placeholder={"1111"}
              value={pin}
              field={"pin"}
            />
          </div>
        ) : (
          <div className={classes["delivery-box"]}>
            <div className={classes["delivery-box-img"]}>
              <img src={cashTransaction} alt={"cash-transaction"} />
            </div>
            <p className={classes["delivery-box-text"]}>
              The 'Cash on Delivery' option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        )}
      </div>
    </form>
  );
};

export default CheckoutForm;
