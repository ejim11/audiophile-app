import { authActions } from "./auth-slice";
import calculateExpirationTime from "../Components/Helper fns/calcuateExpirationTime";
import authRequest from "../Components/Helper fns/authRequest";
let logoutTimer;

export const userRegister = (data, afterAuth) => {
  return async (dispatch) => {
    try {
      const url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDrprWxNEW62K1OaNI1G4GvXHv1kH18OJ8";

      const res = await authRequest(url, data);

      if (res.ok) {
        afterAuth("Signup succesful!", "success");
      } else {
        const data = await res.json();

        let errorMsg = "Authentication failed!";

        if (data && data.error && data.error.message) {
          errorMsg = data.error.message;
          throw new Error(errorMsg);
        }
      }
    } catch (err) {
      afterAuth(err.message, "error");
    }
  };
};

export const userLogin = (data, afterAuth) => {
  return async (dispatch) => {
    try {
      const url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDrprWxNEW62K1OaNI1G4GvXHv1kH18OJ8";
      const res = await authRequest(url, data);

      if (res.ok) {
        const data = await res.json();

        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );

        dispatch(
          authActions.loginHandler({
            token: data.idToken,
            expirationTime: expirationTime.toISOString(),
          })
        );

        const remainingTime = calculateExpirationTime(
          expirationTime.toISOString()
        );

        logoutTimer = setTimeout(() => {
          dispatch(authActions.logoutHandler());
        }, remainingTime);

        afterAuth("Login succesful!", "success");
      } else {
        const data = await res.json();

        let errorMsg = "Authentication failed!";

        if (data && data.error && data.error.message) {
          errorMsg = data.error.message;
          throw new Error(errorMsg);
        }
      }
    } catch (err) {
      afterAuth(err.message, "error");
    }
  };
};

export const userLogout = (data) => {
  return (dispatch) => {
    dispatch(authActions.logoutBoxHandler({ logoutTimer }));
  };
};

export const autoLogout = (tokenDuration) => {
  return (dispatch) => {
    console.log(tokenDuration);
    logoutTimer = setTimeout(() => {
      dispatch(authActions.logoutHandler());
    }, tokenDuration);
  };
};
