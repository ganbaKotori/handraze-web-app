<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
=======
import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Login from "./components/layout/Login";
import Landing from "./components/layout/Landing";
import CreateAccount from "./components/layout/CreateAccount";
import ProfileCreation from "./components/layout/ProfileCreation";
import InstructorProfileCreation from "./components/layout/InstructorProfileCreation";
import Popup from "./components/layout/PopUpTest";
import LoggedOut from "./components/layout/LoggedOut";
import "./App.css";

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path="/" component={Landing} />
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
>>>>>>> dev

export default App;
