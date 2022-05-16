import {
  CREATE_COURSE,
  GET_COURSES,
  GET_COURSE,
  COURSE_ERROR
} from "../actions/types";

const initialState = {
  courses: [],
  course: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COURSES:
      return {
        ...state,
        courses: payload,
        loading: false
      };
    case CREATE_COURSE:
      return {
        ...state,
        courses: [...state.courses, payload],
        loading: false
      };
    case GET_COURSE:
      return {
        ...state,
        course: payload,
        loading: false
      };
    case COURSE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
