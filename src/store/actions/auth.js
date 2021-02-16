import axios from "axios";

export const loginBuynow = (user, history, close) => {
  return async (dispatch) => {
    dispatch({ type: "LOGIN_REQUEST" });
    const res = await axios.post(`${process.env.REACT_APP_API}/otp/verifyOTP`, {
      ...user,
    });

    if (res.status === 200) {
      const { token, phonenumber } = res.data;
      localStorage.setItem("token", token);

      axios
        .post(`${process.env.REACT_APP_API}/auth`, { phonenumber })
        .then((user) => {
          const { phonenumber, isAdmin } = user.data;
          localStorage.setItem("phonenumber", phonenumber);
          localStorage.setItem("isAdmin", isAdmin);
          console.log("DB user saved", user);

          dispatch({
            type: "LOGIN_SUCCESS",
            payload: { token, phonenumber, isAdmin },
          });
        })
        .catch((error) => {
          console.log("DB User Failed", error);
        });

      history.push("/buynow");
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
      const { token, phonenumber } = res.data;
      localStorage.setItem("token", token);

      axios
        .post(`${process.env.REACT_APP_API}/auth`, { phonenumber })
        .then((user) => {
          const { phonenumber, isAdmin } = user.data;
          localStorage.setItem("phonenumber", phonenumber);
          localStorage.setItem("isAdmin", isAdmin);
          console.log("DB user saved", user);

          dispatch({
            type: "LOGIN_SUCCESS",
            payload: { token, phonenumber, isAdmin },
          });
        })
        .catch((error) => {
          console.log("DB User Failed", error);
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
