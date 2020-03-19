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
      <Link to="/questions">
        <Button variant="primary">Questions</Button>
      </Link>{" "}
      <Link to="/profiles">
        <Button variant="primary">Profiles</Button>
      </Link>{" "}
      <Link to="/student">
        <Button variant="primary">Student</Button>
      </Link>{" "}
      <Link to="/instructor">
        <Button variant="primary">Instructor</Button>
      </Link>{" "}
      <Link to="/" onClick={logout}>
        Logout
      </Link>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Link to="/login">Login</Link> <Link to="/register">Register</Link>
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
        <Link to="/">
          <img src={handraze} className="logo" alt="student" />
        </Link>
        {profile}

        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
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
