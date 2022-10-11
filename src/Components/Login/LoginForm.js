import useInput from "../../hooks/user-input";
import Button from "../UI/Button/Button";
import classes from "./LoginForm.module.scss";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../store/auth-actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
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

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const afterAuth = (msg, state) => {
      setIsLoading(false);
      if (state === "success") {
        toast.success(msg, {
          className: `${classes["toast-message"]}`,
        });
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 800);
      }
      if (state === "error") {
        toast.error(msg);
      }

      emailInputReset();
      PasswordInputReset();
    };
    setIsLoading(true);
    dispatchFn(
      userLogin(
        {
          email: enteredEmail,
          password: enteredPassword,
        },
        afterAuth
      )
    );
  };

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const emailInputClasses = enteredEmailIsInValid
    ? "form-control invalid"
    : "form-control";

  const passwordInputClasses = enteredPasswordIsInValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
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
        {isLoading ? "loading..." : "LOGIN"}
      </Button>
    </form>
  );
};

export default LoginForm;
