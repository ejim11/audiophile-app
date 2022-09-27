import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import cartReducer from "./cart-slice";
import checkoutReducer from "./checkout-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
  },
});

export default store;
