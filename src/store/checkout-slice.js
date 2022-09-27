import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    eMoneyNumber: "",
    pin: "",
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setMail(state, action) {
      state.email = action.payload;
    },
    setPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    setAddress(state, action) {
      state.address = action.payload;
    },
    setZipcode(state, action) {
      state.zipCode = action.payload;
    },
    setCity(state, action) {
      state.city = action.payload;
    },
    setCountry(state, action) {
      state.country = action.payload;
    },
    setEmoneyNumber(state, action) {
      state.eMoneyNumber = action.payload;
    },
    setPin(state, action) {
      state.pin = action.payload;
    },
  },
});

export const checkoutActions = checkoutSlice.actions;

export default checkoutSlice.reducer;
