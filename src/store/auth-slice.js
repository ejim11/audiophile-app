import { createSlice } from "@reduxjs/toolkit";
import { retrieveStoredToken } from "../Components/Helper fns/calcuateExpirationTime";

const tokenData = retrieveStoredToken();
let storedToken;
let storedDuration;
if (tokenData) {
  storedToken = tokenData.token;
  storedDuration = tokenData.duration;
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    logoutBoxIsVisible: false,
    isLoggedIn: !!storedToken || false,
    token: storedToken || "",
    remainingTime: storedDuration || 0,
  },
  reducers: {
    loginHandler(state, action) {
      state.token = action.payload.token;
      state.isLoggedIn = true;
      localStorage.setItem("token", action.payload.token);

      localStorage.setItem("expirationTime", action.payload.expirationTime);

      console.log("logged");
    },
    toggleLogoutBox(state, action) {
      state.logoutBoxIsVisible = !state.logoutBoxIsVisible;
    },
    logoutBoxHandler(state, action) {
      state.token = "";
      state.isLoggedIn = false;
      localStorage.removeItem("token");
      localStorage.removeItem("expirationTime");
      state.logoutBoxIsVisible = false;

      if (action.payload.logoutTimer) {
        clearTimeout(action.payload.logoutTimer);
      }
    },
    // auto logout
    logoutHandler(state, action) {
      state.token = "";
      state.isLoggedIn = false;
      localStorage.removeItem("token");
      localStorage.removeItem("expirationTime");
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
