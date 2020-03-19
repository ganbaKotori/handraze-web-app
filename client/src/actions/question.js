import axios from "axios";

import { GET_QUESTIONS, QUESTION_ERROR } from "./types";

//Get posts
export const getQuestions = () => async dispatch => {
  try {
    const res = await axios.get("/api/questions");

    dispatch({
      type: GET_QUESTIONS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: QUESTION_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};
