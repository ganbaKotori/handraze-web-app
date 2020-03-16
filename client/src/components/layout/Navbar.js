import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import handraze from "../../img/handrazelogow.png";

const Navigationbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Fragment>
      <Link to="/profiles">
        <Button variant="primary">Profiles</Button>
      </Link>{" "}
      <Link to="/student">
        <Button variant="primary">Student</Button>
      </Link>{" "}
      <Link to="/instructor">
        <Button variant="primary">Instructor</Button>
      </Link>{" "}
      <Link onClick={logout}>Logout</Link>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Link to="/login">Login</Link> <Link to="/register">Register</Link>
    </Fragment>
  );
  return (
    <Navbar collapseOnSelect expand="lg" bg="orange" variant="dark">
      <Link to="/">
        <img src={handraze} className="logo" alt="student" />
      </Link>

      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </Navbar>
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
