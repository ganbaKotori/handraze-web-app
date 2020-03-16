import axios from "axios";

import {
  GET_PROFILE,
  GET_PROFILES,
  CLEAR_PROFILE,
  GET_ENROLLED_COURSES,
  GET_PROFILE2,
  PROFILE_ERROR,
  PROFILE_ERROR2
} from "./types";

//Get profiles
export const getProfiles = () => async dispatch => {
  dispatch({ type: CLEAR_PROFILE });

  try {
    const res = await axios.get("/api/instructors");

    const res2 = await axios.get("/api/students");

    const profiles2 = [{ instructor: res.data }, { student: res2.data }];
    const profiles3 = [res.data, res2.data];
    //console.log(profiles2);
    const object3 = { ...res.data, ...res2.data };
    /*
    for (var x in res2.data) {
      //console.log(res.data[x]);
      profiles3.push(res2.data[x]);
    }*/
    //console.log(profiles3);

    dispatch({
      type: GET_PROFILES,
      payload: profiles3
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

//Get Enrolled Courses
export const getEnrolledCourses = username => async dispatch => {
  dispatch({ type: CLEAR_PROFILE });

  try {
    //const res = await axios.get("/api/instructors");

    const res = await axios.get(`/api/students/courses/${username}`);

    //const profile2 = { instructor: res.data, student: res2.data };
    //console.log(profile2.student);

    dispatch({
      type: GET_ENROLLED_COURSES,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

//Get profile by ID
export const getStudentProfileById = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/students/user/${userId}`);
    // const profile2 = { instructor: res.data, student: res2.data };
    console.log(res);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

//Get profile by ID
export const getInstructorProfileById = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/instructors/user/${userId}`);
    console.log(res);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

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

//Login USER
export const enrollCourse = (
  { code },
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const body = JSON.stringify({
      code
    });
    console.log(body);
    const res = await axios.put("/api/students/courses", body, config);
    console.log(res.data);
    dispatch({
      type: GET_ENROLLED_COURSES,
      payload: res.data
    });
    history.push("./student");
  } catch (error) {
    console.log(error);
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};
