import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Courses from "./components/layout/Courses";
import Course from "./components/layout/Course/Course";
import CreateAccount from "./components/layout/CreateAccount";
import CreateCourse from "./components/layout/CreateCourse";
import InstructorDashboard from "./components/layout/InstructorDashboard";
import CreateInstructorProfile from "./components/layout/CreateInstructorProfile";
import CreateStudentProfile from "./components/layout/CreateStudentProfile";
import EnrollCourse from "./components/layout/EnrollCourse2";
import Footer from "./components/layout/Footer";
import InstructorProfile from "./components/layout/InstructorProfile";
import Landing from "./components/layout/Landing";
import Lecture from "./components/layout/Lecture";
import LoggedOut from "./components/layout/LoggedOut";
import Login from "./components/layout/Login";
import Navbar from "./components/layout/Navbar";
import NewQuestion from "./components/layout/Course/NewQuestion";
import Photo from "./components/layout/Photo";
import PrivateRoute from "./components/routing/PrivateRoute";
import Profiles from "./components/layout/Profiles";
import Questions from "./components/layout/Questions";
import StudentDashboard from "./components/layout/StudentDashboard";
import ThreadDisplay from "./components/layout/ThreadDisplay";
import Post from "./components/layout/Post";
import PostEditor from "./components/layout/PostEditor";
import DiscussionBoard from "./components/layout/Discussion";

import StudentProfile from "./components/layout/StudentProfile";

import DiscussionQuestionPage from "./components/layout/Course/DiscussionQuestionPage";
import EditInstructor from "./components/layout/EditStudent";
import EditStudent from "./components/layout/EditStudent";

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
          <Route exact path="/" component={Landing} />
          <Switch>
            <Route exact path="/lecture" component={Lecture} />
            <PrivateRoute exact path="/course/:id" component={Course} />
            <Fragment>
              <div className="container">
                <Route exact path="/courses" component={Courses} />
                <Route exact path="/edit" component={EditStudent} />
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
                <Route exact path="/photo" component={Photo} />
                <Route
                  exact
                  path="/question/:id"
                  component={DiscussionQuestionPage}
                />
                <Route exact path="/new-question/:id" component={NewQuestion} />
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
