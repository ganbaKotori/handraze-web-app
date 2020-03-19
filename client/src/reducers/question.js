import { GET_QUESTIONS, QUESTION_ERROR } from "../actions/types";

const initialState = {
  questions: [],
  question: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_QUESTIONS:
      return {
        ...state,
        posts: payload,
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
