import axios from "axios";

import {
  GET_QUESTION,
  GET_QUESTIONS,
  CREATE_QUESTION,
  QUESTION_ERROR
} from "./types";

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

// Get Question By Id
export const getQuestion = id => async dispatch => {
  try {
    const res = await axios.get(`/api/questions/${id}`);
    console.log(res.data);

    dispatch({
      type: GET_QUESTION,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: QUESTION_ERROR,
      payload: { msg: error.responseStatusText, status: error.response.status }
    });
  }
};

//@usage  /api/questions
//@desc   Post new discussion question to a course
export const createQuestion = (
  { id, question, description },
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
      id,
      question,
      description
    });
    console.log(body);
    const res = await axios.post("/api/questions", body, config);
    console.log("question data");
    console.log(res.data);
    dispatch({
      type: CREATE_QUESTION,
      payload: res.data
    });
    history.push(`/question/${res.data._id}`);
  } catch (error) {
    alert(error.response.data)
    dispatch({
      type: QUESTION_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

//@usage  PUT /api/questions/answer
//@desc   Post new discussion question to a course
export const postAnswer = (
  { id, text },
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
      id,
      text
    });
    console.log(body);
    const res = await axios.put("/api/questions/answer", body, config);
    console.log(res.data);
    dispatch({
      type: CREATE_QUESTION,
      payload: res.data
    });
    history.push(`/question/${id}`);
  } catch (error) {
    console.log(error);
    dispatch({
      type: QUESTION_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

