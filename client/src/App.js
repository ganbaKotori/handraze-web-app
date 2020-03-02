import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Login from "./components/layout/Login";
import Landing from "./components/layout/Landing";
import CreateAccount from "./components/layout/CreateAccount";
import ProfileCreation from "./components/layout/ProfileCreation";
import InstructorProfileCreation from "./components/layout/InstructorProfileCreation";
import CourseHome from "./components/layout/CourseHome";
import CourseDashboard from "./components/layout/CourseDashboard";
import Popup from "./components/layout/PopUpTest";
import LoggedOut from "./components/layout/LoggedOut";
import Lecture from "./components/layout/LectureQuestion";
import "./App.css";
import LectureQuestion from "./components/layout/LectureQuestion";

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path="/" component={LectureQuestion} />
      <section className="container">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={CreateAccount} />w32
          <Route exact path="/createprofile" component={ProfileCreation} />
          <Route exact path="/createcourse" component={Popup} />
          <Route
            exact
            path="/createinstructor"
            component={InstructorProfileCreation}
          />
        </Switch>
      </section>
    </Fragment>
  </Router>
);

export default App;
