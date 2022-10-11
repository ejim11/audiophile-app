import { createSlice } from "@reduxjs/toolkit";

const storedCart = JSON.parse(localStorage.getItem("cart"));

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: storedCart?.cart || [],
    cartIsVisible: false,
  },
  reducers: {
    openCart(state, action) {
      state.cartIsVisible = true;
    },
    closeCart(state, action) {
      state.cartIsVisible = false;
    },
    emptyCart(state, action) {
      state.cart = [];
    },

    changeQty(state, action) {
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      const existingItem = state.cart[existingItemIndex];

      if (existingItem) {
        if (action.payload.operation === "add") {
          existingItem.quantity = existingItem.quantity + 1;
          existingItem.totalAmount =
            existingItem.totalAmount + action.payload.price;
        } else if (action.payload.operation === "minus") {
          if (existingItem.quantity === 0) {
            return;
          }
          if (existingItem.quantity === 1) {
            existingItem.quantity = existingItem.quantity - 1;
            existingItem.totalAmount =
              existingItem.totalAmount - action.payload.price;

            state.cart = state.cart.filter(
              (item) => item.id !== existingItem.id
            );
          }
          existingItem.quantity = existingItem.quantity - 1;
          existingItem.totalAmount =
            existingItem.totalAmount - action.payload.price;
        }
      }

      localStorage.setItem("cart", JSON.stringify({ cart: state.cart }));
    },

    addItemToCart(state, action) {
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      const existingItem = state.cart[existingItemIndex];

      if (existingItem) {
        console.log("existing");
        existingItem.quantity = existingItem.quantity + action.payload.quantity;
        existingItem.totalAmount =
          existingItem.totalAmount +
          action.payload.quantity * action.payload.price;
      } else {
        console.log("new");
        state.cart.push(action.payload);
      }

      localStorage.setItem("cart", JSON.stringify({ cart: state.cart }));
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
