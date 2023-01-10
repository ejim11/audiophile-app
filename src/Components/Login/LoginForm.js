import useInput from "../../hooks/user-input";
import Button from "../UI/Button/Button";
import classes from "./LoginForm.module.scss";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../store/auth-actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatchFn = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordIsVisible((prevState) => !prevState);
  };

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

    setIsLoading(true);

    const afterAuth = async (msg, state) => {
      setIsLoading(false);
      if (state === "success") {
        toast.success(msg, {
          className: `${classes["success-message"]}`,
        });
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(navigate("/", { replace: true }));
          }, 2000);
        });

        emailInputReset();
        PasswordInputReset();
      }
      if (state === "error") {
        toast.error(msg, {
          className: `${classes["error-message"]}`,
        });
      }
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
          placeholder="alexfreeman@gmail.com"
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
        <div className={classes["password-box"]}>
          <input
            type={passwordIsVisible ? "text" : "password"}
            id="password"
            placeholder="*********"
            value={enteredPassword}
            onChange={passwordInputChangeHandler}
            onBlur={passwordInputBlurHandler}
          />
          {passwordIsVisible ? (
            <FaEyeSlash
              className={classes.icon}
              onClick={togglePasswordVisibility}
            />
          ) : (
            <FaEye
              className={classes["icon"]}
              onClick={togglePasswordVisibility}
            />
          )}
        </div>
        {enteredPasswordIsInValid && (
          <p className={"error-text"}>Enter a valid password!</p>
        )}
      </div>
      <Button className={"login-form-btn"} disabled={!formIsValid}>
        {isLoading ? "logging in..." : "LOGIN"}
      </Button>
    </form>
  );
};

export default LoginForm;
