import axios from "axios";

export const loginBuynow = (user, history, close) => {
  return async (dispatch) => {
    dispatch({ type: "LOGIN_REQUEST" });
    const res = await axios.post(`${process.env.REACT_APP_API}/otp/verifyOTP`, {
      ...user,
    });

    if (res.status === 200) {
      const token = res.data.token
      const phonenumber = res.data.profile.phonenumber
      const isAdmin = res.data.profile.isAdmin

      localStorage.setItem("token", token);
      localStorage.setItem("phonenumber", phonenumber);
      localStorage.setItem("isAdmin", isAdmin);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { token, phonenumber, isAdmin },
        });

      history.push("/checkout");
      close();
    } else {
      if (res.status === 400) {
        dispatch({
          type: "LOGOUT_SUCCESS",
        });
      }
    }
  };
};

export const loginCheckout = (user, history, close) => {
  return async (dispatch) => {
    dispatch({ type: "LOGIN_REQUEST" });
    const res = await axios.post(`${process.env.REACT_APP_API}/otp/verifyOTP`, {
      ...user,
    });

    if (res.status === 200) {
      const token = res.data.token
      const phonenumber = res.data.profile.phonenumber
      const isAdmin = res.data.profile.isAdmin

      localStorage.setItem("token", token);
      localStorage.setItem("phonenumber", phonenumber);
      localStorage.setItem("isAdmin", isAdmin);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { token, phonenumber, isAdmin },
        });

      history.push("/checkout");
      close();
    } else {
      if (res.status === 400) {
        dispatch({
          type: "LOGOUT_SUCCESS",
        });
      }
    }
  };
};

export const login = (user, history, close) => {
  return async (dispatch) => {
    dispatch({ type: "LOGIN_REQUEST" });
    const res = await axios.post(`${process.env.REACT_APP_API}/otp/verifyOTP`, {
      ...user,
    });

    if (res.status === 200) {
      const token = res.data.token
      const phonenumber = res.data.profile.phonenumber
      const isAdmin = res.data.profile.isAdmin

      localStorage.setItem("token", token);
      localStorage.setItem("phonenumber", phonenumber);
      localStorage.setItem("isAdmin", isAdmin);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { token, phonenumber, isAdmin },
        });

      history.push("/");
      close();
    } else {
      if (res.status === 400) {
        dispatch({
          type: "LOGOUT_SUCCESS",
        });
      }
    }
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const phonenumber = localStorage.getItem("phonenumber");
      const isAdmin = localStorage.getItem("isAdmin");
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { token, phonenumber, isAdmin },
      });
    } else {
      dispatch({
        type: "LOGOUT_SUCCESS",
      });
    }
  };
};

export const signout = (history) => {
  return async (dispatch) => {
    dispatch({ type: "LOGOUT_REQUEST" });
    localStorage.clear();
    dispatch({ type: "LOGOUT_SUCCESS" });
    history.push("/");
  };
};
