import axios from "axios";

import { GET_LECTURE, GET_LECTURES, CREATE_LECTURE, LECTURE_ERROR } from "./types";

//@usage  PUT /api/questions/answer
//@desc   Post new discussion question to a course
export const startLecture = (
    { topic,
      course, },
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
        topic,
        course,
      });
      const res = await axios.post("/api/lectures", body, config);
      dispatch({
        type: CREATE_LECTURE,
        payload: res.data
      });
      console.log(res);
      history.push(`/lecture/${res.data._id}`);
    } catch (error) {
      console.log(error);
      dispatch({
        type: LECTURE_ERROR,
        payload: { msg: error.response.statusText, status: error.response.status }
      });
    }
  };

//Get all lectures
export const getLectures = () => async dispatch => {
    try {
      const res = await axios.get("/api/lectures");
  
      dispatch({
        type: GET_LECTURES,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: LECTURE_ERROR,
        payload: { msg: error.response.statusText, status: error.response.status }
      });
    }
  };

  //Get all lectures
export const getLecture = id => async dispatch => {
  try {
    const res = await axios.get(`/api/lectures/${id}`);

    dispatch({
      type: GET_LECTURE,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: LECTURE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};