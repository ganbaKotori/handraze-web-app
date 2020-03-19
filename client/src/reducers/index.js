import { combineReducers } from "redux";
import auth from "./auth";
import profile from "./profile";
import course from "./course";
import question from "./question";

export default combineReducers({
  auth,
  profile,
  course,
  question
});
