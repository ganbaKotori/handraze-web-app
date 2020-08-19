import React from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import student from "../../img/handrazelogow.png";
import { Row, Col, Container } from "react-bootstrap";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/student" />;
  }
  {
    document.title = "Handraze";
  }
  return (
    <React.Fragment>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <div className="landing-logo">
              <img src={student} alt="student" />
            </div>

            <h1 className="x-large">one hand can do so much</h1>
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
              <Link
                to="/lecture/5f3c7939150eb40a7cb94d88"
                className="btn btn-danger"
              >
                Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="whatIsHandraze">
        <Container fluid>
          <Row>
            <Col xs={12} md={6}>
              <span>
                <h1
                  className="large"
                  style={{ "text-align": "center", "margin-top": "1rem" }}
                >
                  What is handraze?
                </h1>
                <p className="lead">
                  <b>handraze</b> is a free web application for schools to
                  streamline traditional education. Instructors can create
                  courses for students to enroll via an enrollment code. Within
                  these onlines courses, students can ask discussion questions
                  and join an online lecture with synchronized slides and live
                  chat.
                </p>
              </span>
            </Col>
            <Col xs={12} md={6}>
              <span>
                <h1
                  className="large"
                  style={{ "text-align": "center", "margin-top": "1rem" }}
                >
                  Who created handraze?
                </h1>
                <p className="lead">
                  The production of handraze was handled by Team LBP which
                  consists of Alexander Ramirez, David Garza, Diego Gonzalez,
                  Luis Rodriguez, and Skylar Fido
                </p>
              </span>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="whatIsHandraze2">
        <Container fluid>
          <Row>
            <Col>
              <span>
                <h1
                  className="large"
                  style={{ "text-align": "center", "margin-top": "1rem" }}
                >
                  How handraze was developed
                </h1>
                <p
                  className="lead"
                  style={{ "text-align": "center", "margin-top": "1rem" }}
                >
                  handraze was built using the MERN stack. This tech stack
                  involves the usage of MongoDB, Express, React, and NodeJS.
                </p>
              </span>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
