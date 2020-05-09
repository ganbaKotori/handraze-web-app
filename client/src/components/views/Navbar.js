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
      <Nav.Link className="navbar-link" to="/student">
      <Link to="/student"><b>Student</b></Link>
      </Nav.Link>{" "}
      <Nav.Link to="/instructor">
      <Link to="/instructor"><b>Instructor</b></Link>
      </Nav.Link>{" "}
      <Nav.Link to="/" onClick={logout}>
      <b> Logout</b>
      </Nav.Link  >
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Nav.Link to="/login"><b>Login</b></Nav.Link> <Nav.Link to="/register"><b>Register</b></Nav.Link>
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
    a:hover {
      color: blue;
    } 
    `}
      </style>

      <Navbar
        collapseOnSelect
        expand="lg"
        bg={profile == "instructor" ? "flat" : "orange"}
        variant="dark"
        className="navbar-link"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Brand to="/"> <Link className="navbar-link" to="/instructor"><b>handraze</b></Link></Navbar.Brand>
        <br />

        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">

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
