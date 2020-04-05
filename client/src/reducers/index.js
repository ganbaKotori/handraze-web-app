import { combineReducers } from "redux";
import auth from "./auth";
import profile from "./profile";
import course from "./course";
import question from "./question";
import chat from "./chat"

export default combineReducers({
  auth,
  profile,
  course,
  chat,
  question
});
