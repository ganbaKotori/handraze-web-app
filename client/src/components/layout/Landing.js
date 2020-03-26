import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import student from "../../img/handrazelogow.png";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/student" />;
  }
  {
    document.title = "Handraze";
  }
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <div className="landing-logo">
            <img src={student} alt="student" />
          </div>

          <h1 className="x-large">one hand can do so much</h1>
          <p className="medium">
            <b>
              Developed by Alexander Ramirez, David Garza, Diego Gonzalez, Luis
              Rodriguez, and Skylar Fido
            </b>
          </p>
          <p className="lead"></p>
          <div className="buttons">
            <a
              href="https://github.com/ganbaKotori/handraze-web-app"
              className="btn btn-primary"
            >
              GitHub
            </a>
            <a href="http://docs.handraze.org" className="btn btn-dark">
              Documents
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
