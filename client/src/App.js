import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Login from "./components/layout/Login";
import Landing from "./components/layout/Landing";
import CreateAccount from "./components/layout/CreateAccount";
import LoggedOut from "./components/layout/LoggedOut";
import "./App.css";

const App = () => (
  <Fragment>
    <LoggedOut/>
    <Navbar />
    
    <Landing/>
    <LoggedOut/>
  </Fragment>
);

export default App;
