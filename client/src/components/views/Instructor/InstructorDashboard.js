import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentInstructorProfile } from "../../../actions/profile";
import { Link } from "react-router-dom";
import { FileUpload } from "../FileUpload";
import InstructorCourses from "./InstructorCourses";
import { Container, Button, Spinner, Col, Row, Image } from "react-bootstrap";

const Dashboard = ({
  getCurrentInstructorProfile,
  auth: { user },
  profile: { instructorProfile, loading },
}) => {
  useEffect(() => {
    getCurrentInstructorProfile();
  }, []);
  {
    document.title = "Instructor Dashboard";
  }
  return loading ? (
      <Container className="center">
        <h1 className="large">Loading!</h1>{"  "}
      <Spinner  animation="border" role="status" >
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Container>
  ) : (
    <Fragment >
      <div>
        {instructorProfile !== null ? (
          <Container >
            
            <Row>
              <Col xs={7}>
                <Row>
                  <Col>
                    <Row>
                      <Col>
                      <Image src={
                            user && user.avatar
                              ? user && user.avatar
                              : "https://via.placeholder.com/100"
                          } rounded /> 
                      </Col>
                      <Col xs={8}>
                        <h5>Instructor Dashboard</h5>
                        <Row>
                          <Col>
                            <b>Name</b>
                            <p className="lead">
                              {user && user.firstName
                                ? user && user.firstName
                                : ""}{" "}
                              {user && user.lastName
                                ? user && user.lastName
                                : ""}
                            </p>
                          </Col>
                          <Col>
                            <b>Department</b>
                            <p className="lead">
                              {user && instructorProfile.department
                                ? user && instructorProfile.department
                                : ""}
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <b>Institution</b>
                            <p className="lead">
                              {user && instructorProfile.institution
                                ? user && instructorProfile.institution
                                : ""}
                            </p>
                          </Col>
                          <Col>
                            <Link to="/edit-instructor">
                              <Button variant="outline-primary">
                                Edit Profile
                              </Button>
                            </Link>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col>
              
                <InstructorCourses
                  course={instructorProfile.course ? instructorProfile.course : []}
                />
              </Col>
            </Row>

          </Container>
        ) : (
          <Fragment>
            <Container>
            <h2 className="medium" style={{"text-align" : "center"}}>You have not setup an Instructor Profile!</h2>
              <Link to="/createinstructorprofile" style={{"text-align" : "center"}}><p style={{"text-align" : "center"}}> Create Profile</p> </Link>
            </Container>
          </Fragment>
        )}
        <br />
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentInstructorProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, {
  getCurrentInstructorProfile,
})(Dashboard);
