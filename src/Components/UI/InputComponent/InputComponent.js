import { useDispatch } from "react-redux";
import { checkoutActions } from "../../../store/checkout-slice";
import { useState } from "react";
import classes from "./InputComponent.module.scss";
import { motion } from "framer-motion";

const InputComponent = (props) => {
  const [err, setErr] = useState("");
  const dispatchFn = useDispatch();
  const changeInputHandler = (e) => {
    if (props.field === "name") {
      dispatchFn(checkoutActions.setName(e.target.value));
    }
    if (props.field === "mail") {
      dispatchFn(checkoutActions.setMail(e.target.value));
    }

    if (props.field === "number") {
      dispatchFn(checkoutActions.setPhoneNumber(e.target.value));
    }

    if (props.field === "address") {
      dispatchFn(checkoutActions.setAddress(e.target.value));
    }

    if (props.field === "zip-code") {
      dispatchFn(checkoutActions.setZipcode(e.target.value));
    }

    if (props.field === "city") {
      dispatchFn(checkoutActions.setCity(e.target.value));
    }

    if (props.field === "country") {
      dispatchFn(checkoutActions.setCountry(e.target.value));
    }

    if (props.field === "e-money-number") {
      dispatchFn(checkoutActions.setEmoneyNumber(e.target.value));
    }

    if (props.field === "pin") {
      dispatchFn(checkoutActions.setPin(e.target.value));
    }

    if (props.type === "text" && e.target.value.length > 0) {
      setErr("");
    }
    if (props.type === "number" && e.target.value.length > 0) {
      setErr("");
    }

    if (props.type === "email" && e.target.value.length > 0) {
      setErr("");
    } else if (props.type === "email" && e.target.value.includes("@")) {
      setErr("");
    }
  };

  const blurHandler = (e) => {
    if (props.type === "text" && e.target.value === "") {
      setErr("field is empty");
    }
    if (props.type === "number" && e.target.value === "") {
      setErr("field is empty");
    }
    if (props.type === "email" && e.target.value === "") {
      setErr("email is empty");
    } else if (props.type === "email" && !e.target.value.includes("@")) {
      setErr("email is invalid");
    }
  };

  return (
    <div className={`${classes["input-box"]} ${classes[props.className]}`}>
      <label>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeInputHandler}
        value={props.value}
        onBlur={blurHandler}
        className={err ? classes["error-input"] : classes["normal-input"]}
      />
      {err && (
        <motion.p
          initial={{ opacity: 0, y: "-30" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeIn" }}
          className={classes["error-text"]}
        >
          {err}
        </motion.p>
      )}
    </div>
  );
};

export default InputComponent;
