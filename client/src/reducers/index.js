import { combineReducers } from "redux";
import auth from "./auth";
import chat from "./chat";
import course from "./course";
import lecture from "./lecture";
import profile from "./profile";
import question from "./question";


export default combineReducers({
  auth,
  course,
  chat,
  lecture,
  profile,
  question
});
