import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
//import { setAlert } from "./alert";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_PROFILE,
  COURSE_CREATED,
  COURSE_CREATED_FAILED
} from "./types";

//axios.defaults.proxy = "http://localhost:3000";
//Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/auth");
    console.log(res)

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

//Register USER
export const register = ({
  email,
  userName,
  password,
  lastName,
  firstName
}) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({
    email,
    userName,
    password,
    lastName,
    firstName
  });

  try {
    const res = await axios.post("/api/users/register", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    console.log(err.response);
    for (var property in err.response.data) {
      alert(err.response.data[property]);
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

//Login USER
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({
    email,
    password
  });

  try {
    const res = await axios.post("/api/auth", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response;
    if (errors) {
      ///    errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

//Logout / Clear
export const logout = () => dispatch => {
  dispatch({
    type: CLEAR_PROFILE
  });
  dispatch({
    type: LOGOUT
  });
};
