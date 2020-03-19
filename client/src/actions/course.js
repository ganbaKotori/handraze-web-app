import axios from "axios";

import { GET_COURSES, GET_COURSE, COURSE_ERROR, CREATE_COURSE } from "./types";

// Get Courses
export const getCourses = () => async dispatch => {
  try {
    const res = await axios.get("/api/courses");
    console.log(res.data);

    dispatch({
      type: GET_COURSES,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: COURSE_ERROR,
      payload: { msg: error.responseStatusText, status: error.response.status }
    });
  }
};

//Login USER
export const createCourse = (
  {
    title,
    description,
    dayOfWeek,
    classStart,
    location,
    sectionNumber,
    classDuration
  },
  history,
  edit = false
) => async dispatch => {
  var instructor;
  try {
    const res = await axios.get("/api/instructors/me");
    console.log(res.data);
    instructor = res.data._id;
  } catch (error) {
    console.log(error);
  }
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({
    instructor,
    title,
    description,
    dayOfWeek,
    classStart,
    location,
    sectionNumber,
    classDuration
  });

  try {
    const res = await axios.post("/api/courses", body, config);

    dispatch({
      type: CREATE_COURSE,
      payload: res.data
    });
    history.push("./instructor");
  } catch (error) {
    const errors = error.response;
    if (errors) {
      ///    errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    if (!edit) {
    }
    dispatch({
      type: COURSE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Get Courses
export const getCourse = id => async dispatch => {
  try {
    const res = await axios.get(`/api/courses/${id}`);
    console.log(res.data);

    dispatch({
      type: GET_COURSE,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: COURSE_ERROR,
      payload: { msg: error.responseStatusText, status: error.response.status }
    });
  }
};
