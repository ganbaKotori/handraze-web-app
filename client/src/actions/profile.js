import axios from "axios";

import {
  GET_PROFILE,
  GET_PROFILE2,
  PROFILE_ERROR,
  PROFILE_ERROR2
} from "./types";

//Get current users profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get("/api/instructors/me");

    const res2 = await axios.get("/api/students/me");

    const profile2 = { instructor: res.data, student: res2.data };
    console.log(profile2.student);

    dispatch({
      type: GET_PROFILE,
      payload: profile2
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

//Create or Update profile
export const createProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      header: {
        "Content-type": "application/json"
      }
    };

    const res = await axios.post("/api/instructors", formData, config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    if (!edit) {
      history.push("./instructor");
    }
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

//Create or Update profile
export const createProfile2 = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      header: {
        "Content-type": "application/json"
      }
    };

    const res = await axios.post("/api/students", formData, config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    if (!edit) {
      history.push("./student");
    }
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};