import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Courses from "./components/layout/Courses";
import CreateAccount from "./components/layout/CreateAccount";
import InstructorDashboard from "./components/layout/InstructorDashboard";
import CreateInstructorProfile from "./components/layout/CreateInstructorProfile";
import CreateStudentProfile from "./components/layout/CreateStudentProfile";
import Footer from "./components/layout/Footer";
import InstructorPage from "./components/layout/FileUpload";
import Landing from "./components/layout/Landing";
import Lecture from "./components/layout/Lecture";
import LoggedOut from "./components/layout/LoggedOut";
import Login from "./components/layout/Login";
import Navbar from "./components/layout/Navbar";
import Popup from "./components/layout/PopUpTest";
import Photo from "./components/layout/Photo";
import PrivateRoute from "./components/routing/PrivateRoute";
import ProfileCreation from "./components/layout/ProfileCreation";
import StudentDashboard from "./components/layout/StudentDashboard";

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
            <section className="container">
              <Route exact path="/courses" component={Courses} />
              <Route exact path="/createcourse" component={Popup} />

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
              <PrivateRoute
                exact
                path="/instructor"
                component={InstructorDashboard}
              />
              <Route exact path="/login" component={Login} />
              <Route exact path="/photo" component={Photo} />
              <Route exact path="/register" component={CreateAccount} />
              <PrivateRoute
                exact
                path="/student"
                component={StudentDashboard}
              />
            </section>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};
export default App;
