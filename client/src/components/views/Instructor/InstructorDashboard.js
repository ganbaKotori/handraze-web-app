import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentInstructorProfile } from "../../../actions/profile";
import { Link } from "react-router-dom";
import { FileUpload } from "../FileUpload";
import InstructorCourses from "./InstructorCourses";
import { Container, Button, Spinner, Col, Row } from "react-bootstrap";

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
    <div>
      <Fragment>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Fragment>
    </div>
  ) : (
    <Fragment>
      <div>
        {instructorProfile !== null ? (
          <Container>
            <Row>
              <Col xs={7}>
                <Row>
                  <Col>
                    <Row>
                      <Col>
                        <img
                          src={
                            user && user.avatar
                              ? user && user.avatar
                              : "https://via.placeholder.com/100"
                          }
                          className="profpic"
                        />
                      </Col>
                      <Col xs={8}>
                        <h5>Student Dashboard</h5>
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
                            <Link to="/edit-student">
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
                <h3>Courses You're Teaching</h3>
                <Link to="/newcourse">
                  <Button variant="outline-primary">Start a new Course</Button>
                </Link>
                <div className="courses">
                  <InstructorCourses
                    course={
                      instructorProfile.course ? instructorProfile.course : []
                    }
                  />
                </div>
              </Col>
            </Row>
          </Container>
        ) : (
          <Fragment>
            <Container>
              You have not setup a instructor profile
              <Link to="/createinstructorprofile"> Create Profile </Link>
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
