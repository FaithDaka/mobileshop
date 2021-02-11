import axios from "axios";

export const loginBuynow = (user, history, close) => {
  return async (dispatch) => {
    dispatch({ type: "LOGIN_REQUEST" });
    const res = await axios.post(`${process.env.REACT_APP_API}/otp/verifyOTP`, {
      ...user,
    });

    if (res.status === 200) {
      const { token, phonenumber, role } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("phonenumber", phonenumber);
      localStorage.setItem("role", role);

      axios
        .post(`${process.env.REACT_APP_API}/auth`, { phonenumber, role })
        .then((user) => {
          console.log("DB user saved", user);
        })
        .catch((error) => {
          console.log("DB User Failed", error);
        });

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { token, phonenumber, role },
      });

      history.push("/buynow");
      close()

    } else {
      if (res.status === 400) {
        dispatch({
          type: "LOGOUT_SUCCESS"
        });
      }
    }
  };
};

export const login = (user, history,close) => {
    return async (dispatch) => {
      dispatch({ type: "LOGIN_REQUEST" });
      const res = await axios.post(`${process.env.REACT_APP_API}/otp/verifyOTP`, {
        ...user,
      });
  
      if (res.status === 200) {
        const { token, phonenumber, role } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("phonenumber", phonenumber);
        localStorage.setItem("role", role);
  
        axios
          .post(`${process.env.REACT_APP_API}/auth`, { phonenumber, role })
          .then((user) => {
            console.log("DB user saved", user);
          })
          .catch((error) => {
            console.log("DB User Failed", error);
          });
  
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: { token, phonenumber, role },
        });
  
        history.push("/");
        close();
  
      } else {
        if (res.status === 400) {
          dispatch({
            type: "LOGOUT_SUCCESS"
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
      const role = localStorage.getItem("role");
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { token, phonenumber, role },
      });
    } else {
      dispatch({
        type: "LOGOUT_SUCCESS"
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
