import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Login from "./components/layout/Login";
import Landing from "./components/layout/Landing";
import CreateAccount from "./components/layout/CreateAccount";
import LoggedOut from "./components/layout/LoggedOut";
import InstructorPage from "./components/layout/InstructorPage";
import CreateCourse from "./components/layout/CreateCourse";
import EnrollCourse from "./components/layout/EnrollCourse";



import "./App.css";

const App = () => (
  <Fragment>
    <Navbar/>
    <EnrollCourse/>
  </Fragment>
);

export default App;
