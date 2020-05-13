import { GET_LECTURE, GET_LECTURES, CREATE_LECTURE, LECTURE_ERROR } from "../actions/types";

const initialState = {
  lectures: [],
  lecture: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_LECTURE:
      return {
        ...state,
        lectures: [payload,...state.lectures],
        loading: false
      }
    case GET_LECTURES:
        return {
          ...state,
          lectures: payload,
          loading: false
        };
    case GET_LECTURE:
        return {
          ...state,
          lecture: payload,
          loading: false
        };
    case LECTURE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
