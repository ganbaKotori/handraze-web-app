import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/student" />;
  }
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">one hand can do so much</h1>
          <p className="lead"></p>
          <div className="buttons">
            <a href="register.html" className="btn btn-primary">
              About
            </a>
            <a href="login.html" className="btn btn-danger">
              Get Started
            </a>
            <a href="login.html" className="btn btn-dark">
              User's Guide
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
