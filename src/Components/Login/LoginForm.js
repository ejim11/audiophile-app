import useInput from "../../hooks/user-input";
import Button from "../UI/Button/Button";
import classes from "./LoginForm.module.scss";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

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

    if (!enteredEmailIsValid) {
      return;
    }

    if (!enteredPasswordIsValid) {
      return;
    }

    emailInputReset();
    PasswordInputReset();
    navigate("/register");
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
        LOGIN
      </Button>
    </form>
  );
};

export default LoginForm;
