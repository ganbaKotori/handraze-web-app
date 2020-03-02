import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import handraze from "../../img/handrazelogow.png";

const Navigationbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div>
      <Nav.Link href="#deets">
        <Link to="/student">Student Dashboard</Link>{" "}
        <Link to="/instructor">Instructor Dashboard</Link>{" "}
        <Link onClick={logout}>Logout</Link>
      </Nav.Link>
    </div>
  );

  const guestLinks = (
    <div>
      <Nav.Link href="#deets">
        <Link to="/login">Login</Link>
      </Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        <Link to="/register">Register</Link>
      </Nav.Link>
    </div>
  );
  return (
    <Navbar collapseOnSelect expand="lg" bg="orange" variant="dark">
      <Link to="/">
        <img src={handraze} className="logo" alt="student" />
      </Link>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </Nav>
      </Navbar.Collapse>
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
