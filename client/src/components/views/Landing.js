import React from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import student from "../../img/handrazelogow.png";
import { Row, Col, Container, Image } from "react-bootstrap";
import mern from "../../img/mern.jpg"
import instructorImage from "../../img/instructorDashboard.png"

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
                Lecture Demo
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
                  chat. Accounts are designed so you can be a student, an instructor, or both without creating a second account.
                </p>
              </span>
              <br/>
              <br/>
              <span>
                <h1
                  className="large"
                  style={{ "text-align": "center", "margin-top": "1rem" }}
                >
                  Who created handraze?
                </h1>
                <p className="lead">
                  The production of handraze was handled by Team LBP which
                  consists of Alexander Ramirez (fullstack), David Garza(backend), Diego Gonzalez(frontend),
                  Luis Rodriguez(backend), and Skylar Fido(backend). 
                </p>
              </span>
            </Col>
            <Col xs={12} md={6}>
            <Image src={instructorImage} style={{"height" : "auto" , "width" : "80%", "display": "block",
  "margin-left": "auto",
  "margin-right": "auto"}} />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="whatIsHandraze2">
        <Container fluid>
          <Row>
            <Col xs={12} md={6}>
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
                  <b>handraze</b> was built using the <b>MERN stack</b>. This tech stack
                  involves the usage of <b>MongoDB, Express, React, and NodeJS</b>. A build from the Master branch is pushed to a server on Heroku with a Hobby Dyno so the server is running 24/7.
                </p>
              </span>
            </Col>
            <Col xs={12} md={6}>
            <Image src={mern} style={{"height" : "auto" , "width" : "40%", "display": "block",
  "margin-left": "auto",
  "margin-right": "auto"}} />
            </Col>
          </Row>
          <Row >
          
            </Row>
            
        </Container>
      </section>
      <div style={{"height" : "200px", "background-color" : "black"}}>
            <p style={{"color" : "gray" , "text-align" : "center", "padding": "20px"}}>&#169;LBP 2020</p>
            </div>
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
