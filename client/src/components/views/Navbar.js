import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import handraze from "../../img/handrazelogow.png";
import store from "../../store";

const Navigationbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [profile, setProfile] = useState(0);
  store.subscribe(() => {
    console.log("hope this works");
    const state = store.getState();
    if (state.profile.instructorProfile) {
      setProfile("instructor");
    } else setProfile("student");
  });

  const authLinks = (
    <Fragment>
      <Nav.Link to="/profiles">
        <Button variant="primary">Profiles</Button>
      </Nav.Link>{" "}
      <Nav.Link to="/student">
        <Button variant="primary">Student</Button>
      </Nav.Link>{" "}
      <Nav.Link to="/instructor">
        <Button variant="primary">Instructor</Button>
      </Nav.Link>{" "}
      <Nav.Link to="/" onClick={logout}>
        Logout
      </Nav.Link  >
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Nav.Link to="/login">Login</Nav.Link> <Nav.Link to="/register">Register</Nav.Link>
    </Fragment>
  );
  return (
    <>
      <style type="text/css">
        {`
    .bg-flat {
      background-color: purple;
      color: white;
    }

    .bg-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
      </style>

      <Navbar
        collapseOnSelect
        expand="lg"
        bg={profile == "instructor" ? "flat" : "orange"}
        variant="dark"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Brand to="/">HandRaze</Navbar.Brand>
        <br />

        <Navbar.Collapse id="responsive-navbar-nav">

        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
        </Navbar.Collapse >
      </Navbar>
    </>
  );
};

Navigationbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navigationbar);
