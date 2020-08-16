import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import student from "../../img/handrazelogow.png";
import {Row, Col, Container} from "react-bootstrap"

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
    <section className="whatIsHandraze" >
      <Container fluid>
  <Row>
    <Col xs={12} md={6}><span><h1 className="large" style={{"text-align": "center", "margin-top": "1rem"}}>What is handraze?</h1>
    <p className="lead">
      Hi this is a testsdf opsdkif[ds jfpodsj fposedgfpo ajfd[p wbg;oaf[pb[pwe fgi[p oep[ofp;o[g jqwf [po qjg]] ]] ]]]] asdd asd asd asd asd  asd asd
    </p>
    </span></Col>
    <Col xs={12} md={6}>
    <span><h1 className="large" style={{"text-align": "center", "margin-top": "1rem"}}>Who is handraze for?</h1>
    <p className="lead">
      Hi this is a test
    </p>
    </span>
    </Col>
  </Row>
  </Container>
      </section>
    <section className="whatIsHandraze2" >
    <Container fluid>
  <Row>
    <Col><span><h1 className="large" style={{"text-align": "center", "margin-top": "1rem"}}>how we run handraze</h1>
    <p className="lead">
      Hi this is a test
    </p>
    </span></Col>
    <Col>1 of 1</Col>
  </Row>
</Container>

    </section>
    </React.Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
