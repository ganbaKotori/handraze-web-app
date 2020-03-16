import { combineReducers } from "redux";
import auth from "./auth";
import profile from "./profile";
import course from "./course";

export default combineReducers({
  auth,
  profile,
  course
});
