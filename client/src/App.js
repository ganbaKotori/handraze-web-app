import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Login from "./components/layout/Login";
import Landing from "./components/layout/Landing";
import Lecture from "./components/layout/Lecture";
import Courses from "./components/layout/Courses";
import CreateAccount from "./components/layout/CreateAccount";
import ProfileCreation from "./components/layout/ProfileCreation";
import InstructorProfileCreation from "./components/layout/InstructorProfileCreation";
import Popup from "./components/layout/PopUpTest";
import Photo from "./components/layout/Photo";
import LoggedOut from "./components/layout/LoggedOut";
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
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={CreateAccount} />
              <Route exact path="/courses" component={Courses} />
              <Route exact path="/createprofile" component={ProfileCreation} />
              <Route exact path="/createcourse" component={Popup} />
              <Route exact path="/photo" component={Photo} />
              <Route
                exact
                path="/createinstructor"
                component={InstructorProfileCreation}
              />
            </section>
          </Switch>

          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
