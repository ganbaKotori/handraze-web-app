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
          <Route exact path="/register" component={CreateAccount} />
          w32
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
