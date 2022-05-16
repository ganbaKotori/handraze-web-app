import { CREATE_QUESTION, GET_QUESTION, GET_QUESTIONS, QUESTION_ERROR, CREATE_ANSWER } from "../actions/types";

const initialState = {
  questions: [],
  question: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_QUESTION:
      return {
        ...state,
        questions: [...state.questions, payload],
        loading: false
      }
    case CREATE_ANSWER:
      return {
        ...state,
        questions : [...state.questions, payload],
        loading: false
      }
    case GET_QUESTIONS:
      return {
        ...state,
        questions: payload,
        loading: false
      };
    case GET_QUESTION:
      return {
        ...state,
        question: payload,
        loading: false
      };
    case QUESTION_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
