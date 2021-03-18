import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import handraze from "./logo9.png";
import store from "../../store";


const Navigationbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [profile, setProfile] = useState(0);
  store.subscribe(() => {
    const state = store.getState();
    if (state.profile.instructorProfile) {
      setProfile("instructor");
    } else setProfile("student");
  });

  const authLinks = (
    <Fragment>
      <Link
                to="/lecture/5f3c7939150eb40a7cb94d88"
                className="btn btn-danger"
              >
                Lecture Demo
              </Link>
              <span style={{"margin":"10px"}}></span>
              <Link to="/login"><Button variant="outline-light"><b>Student</b></Button></Link>
      {"   "}
      <span style={{"margin":"10px"}}></span>
      <Link to="/instructor"><Button variant="outline-light"><b>Instructor</b></Button></Link>
      {" "}
      <Nav.Link to="/" onClick={logout} className="navbar-link">
      <b> Log out</b>
      </Nav.Link  >
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Link to="/login"><Button variant="outline-light"><b>Login</b></Button></Link>
      {"   "}
      <span style={{"margin":"10px"}}></span>
      <Link to="/register"><Button variant="outline-light"><b>Register</b></Button></Link>
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
        

        <Navbar.Brand to="/">
        <Link className="navbar-link" to="/">
          <div style={{width:"25px", height:"35px"}} className="d-inline-block align-top"><img
        src={handraze}
      /></div>
        
        {" "}
           <b>handraze</b></Link></Navbar.Brand>
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
