import { useEffect } from "react";
import CheckoutComp from "../Components/CheckoutComp/CheckoutComp";

const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CheckoutComp />
    </>
  );
};

export default Checkout;
