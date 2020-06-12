import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Alert from "./components/views/Alert";
import ChatPage from "./components/views/Lecture/ChatPage";
import Course from "./components/views/Course/Course";
import CreateAccount from "./components/views/Auth/CreateAccount";
import CreateCourse from "./components/views/Course/CreateCourse";
import InstructorDashboard from "./components/views/Instructor/InstructorDashboard";
import CreateInstructorProfile from "./components/views/Instructor/CreateInstructorProfile";
import CreateStudentProfile from "./components/views/Student/CreateStudentProfile";
import EnrollCourse from "./components/views/Student/EnrollCourse2";
import InstructorProfile from "./components/views/Instructor/InstructorProfile";
import Landing from "./components/views/Landing";
import Lecture from "./components/views/Lecture/Lecture";
import LoggedOut from "./components/views/LoggedOut";
import Login from "./components/views/Auth/Login";
import Navbar from "./components/views/Navbar";
import PostQuestion from "./components/views/Course/DiscusssionQuestion/PostQuestion";
import PostAnswer from "./components/views/Course/DiscusssionQuestion/PostAnswer";
import PrivateRoute from "./components/routing/PrivateRoute";
import Profiles from "./components/views/Profiles";
import Questions from "./components/views/Course/Questions";
import StartLecture from "./components/views/Lecture/StartLecture";
import StudentDashboard from "./components/views/Student/StudentDashboard";
import StudentProfile from "./components/views/Student/StudentProfile";
import DiscussionQuestionPage from "./components/views/Course/DiscusssionQuestion/DiscussionQuestionPage";
import EditInstructor from "./components/views/Student/EditStudent";
import EditStudent from "./components/views/Student/EditStudent";

import "./App.css";
//Redux
import { Provider } from "react-redux";
import store from "./store";
//import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Alert/>
          <Route exact path="/" component={Landing} />
          
          <Switch>
            <PrivateRoute exact path="/course/:id" component={Course} />
            <Route exact path="/lecture/:id" component={Lecture} />
            <Fragment>
              <div className="container">
              
              <Route exact path="/chat" component={ChatPage} />
                <PrivateRoute exact path="/edit-student" component={EditStudent} />
                <PrivateRoute
                  exact
                  path="/newcourse"
                  component={CreateCourse}
                />
                <PrivateRoute
                  exact
                  path="/createinstructorprofile"
                  component={CreateInstructorProfile}
                />
                <PrivateRoute
                  exact
                  path="/createstudentprofile"
                  component={CreateStudentProfile}
                />
                <PrivateRoute exact path="/enroll" component={EnrollCourse} />
                <PrivateRoute
                  exact
                  path="/instructor"
                  component={InstructorDashboard}
                />
                <Route
                  exact
                  path="/instructor/:id"
                  component={InstructorProfile}
                />
                <Route exact path="/login" component={Login} />
                <Route
                  exact
                  path="/question/:id"
                  component={DiscussionQuestionPage}
                />
                <Route exact path="/new-question/:id" component={PostQuestion} />
                <Route exact path="/new-answer/:id" component={PostAnswer} />
                <Route exact path="/new-lecture/:id" component={StartLecture} />
                <Route exact path="/student/:id" component={StudentProfile} />
                <Route exact path="/profiles" component={Profiles} />
                <Route exact path="/questions" component={Questions} />
                <Route exact path="/register" component={CreateAccount} />
                <PrivateRoute
                  exact
                  path="/student"
                  component={StudentDashboard}
                />
              </div>
            </Fragment>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};
export default App;
