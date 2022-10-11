import Button from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import Summary from "../Summary/Summary";
import classes from "./CheckoutComp.module.scss";
import { useSelector } from "react-redux";

const CheckoutComp = () => {
  const authCtxLoginState = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  return (
    <section className={classes["checkout-section"]}>
      <Button
        className={"back-btn"}
        onClick={() => {
          navigate(-1);
        }}
      >
        back
      </Button>
      <div className={classes["checkout-box"]}>
        <div className={classes["checkout-box-1"]}>
          <h2>CHECKOUT</h2>
          {!authCtxLoginState && (
            <div className={classes["login-choice"]}>
              <Button
                className={"btn-sample-2"}
                onClick={() => {
                  navigate("/login", { replace: true });
                }}
              >
                LOGIN
              </Button>
              <p>OR</p>
              <p>CONTINUE AS GUEST:</p>
            </div>
          )}
          <CheckoutForm />
        </div>
        <>
          <Summary />
        </>
      </div>
    </section>
  );
};

export default CheckoutComp;
