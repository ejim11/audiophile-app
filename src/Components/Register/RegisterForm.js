import useInput from "../../hooks/user-input";
import Button from "../UI/Button/Button";
import classes from "./RegisterForm.module.scss";
import { useDispatch } from "react-redux";
import { userRegister } from "../../store/auth-actions";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatchFn = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const {
    value: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    valueHasError: enteredEmailIsInValid,
    valueInputChangeHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    resetValue: emailInputReset,
  } = useInput((val) => val.includes("@"));

  const {
    value: enteredPassword,
    valueIsValid: enteredPasswordIsValid,
    valueHasError: enteredPasswordIsInValid,
    valueInputChangeHandler: passwordInputChangeHandler,
    valueInputBlurHandler: passwordInputBlurHandler,
    resetValue: PasswordInputReset,
  } = useInput((val) => val.trim() !== "");

  const {
    value: enteredName,
    valueIsValid: enteredNameIsValid,
    valueHasError: enteredNameIsInValid,
    valueInputChangeHandler: nameInputChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    resetValue: nameInputReset,
  } = useInput((val) => val.trim() !== "");

  const {
    value: enteredNumber,
    valueIsValid: enteredNumberIsValid,
    valueHasError: enteredNumberIsInValid,
    valueInputChangeHandler: numberInputChangeHandler,
    valueInputBlurHandler: numberInputBlurHandler,
    resetValue: numberInputReset,
  } = useInput((val) => val.trim() !== "");

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const afterAuth = (msg, state) => {
      setIsLoading(false);
      if (state === "success") {
        toast.success(msg, {
          className: `${classes["toast-message"]}`,
        });
        navigate("/login", { replace: true });
      }
      if (state === "error") {
        toast.error(msg);
      }

      emailInputReset();
      nameInputReset();
      numberInputReset();
      PasswordInputReset();
    };

    dispatchFn(
      userRegister(
        {
          email: enteredEmail,
          password: enteredPassword,
        },
        afterAuth
      )
    );
  };

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredNumberIsValid &&
    enteredPasswordIsValid
  ) {
    formIsValid = true;
  }

  const nameInputClasses = enteredNameIsInValid
    ? "form-control invalid"
    : "form-control";

  const numberInputClasses = enteredNumberIsInValid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = enteredEmailIsInValid
    ? "form-control invalid"
    : "form-control";

  const passwordInputClasses = enteredPasswordIsInValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {enteredNameIsInValid && (
          <p className={"error-text"}>Enter a valid name!</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {enteredEmailIsInValid && (
          <p className={"error-text"}>Enter a valid email!</p>
        )}
      </div>
      <div className={numberInputClasses}>
        <label htmlFor="name">Phone Number</label>
        <input
          type="text"
          id="phone-number"
          value={enteredNumber}
          onChange={numberInputChangeHandler}
          onBlur={numberInputBlurHandler}
        />
        {enteredNumberIsInValid && (
          <p className={"error-text"}>Enter a valid number!</p>
        )}
      </div>
      <div className={passwordInputClasses}>
        <label htmlFor="name">Password</label>
        <input
          type="password"
          id="password"
          value={enteredPassword}
          onChange={passwordInputChangeHandler}
          onBlur={passwordInputBlurHandler}
        />
        {enteredPasswordIsInValid && (
          <p className={"error-text"}>Enter a valid password!</p>
        )}
      </div>
      <Button className={"login-form-btn"} disabled={!formIsValid}>
        {isLoading ? "Loading..." : "REGISTER"}
      </Button>
    </form>
  );
};

export default RegisterForm;
