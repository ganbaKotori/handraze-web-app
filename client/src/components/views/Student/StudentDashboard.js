import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentStudentProfile } from "../../../actions/profile";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Spinner } from "react-bootstrap";
import StudentCourses from "./StudentCourses";

const Dashboard = ({
  getCurrentStudentProfile,
  auth: { user },
  profile: { studentProfile, loading },
}) => {
  useEffect(() => {
    getCurrentStudentProfile();
  }, []);
  console.log(studentProfile);
  {
    document.title = "Student Dashboard";
  }
  return loading ? (
    <div>
      <Container className="center">
        <Row>
          <Col>
            <h1 className="large">Loading!</h1>
            {"  "}
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      </Container>
    </div>
  ) : (
    <Fragment>
      <div>
        {studentProfile !== null ? (
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
                            <b>Year</b>
                            <p className="lead">
                              {user && studentProfile.year
                                ? user && studentProfile.year
                                : ""}
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <b>Attends</b>
                            <p className="lead">
                              {user && studentProfile.institution
                                ? user && studentProfile.institution
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
                <StudentCourses
                  course={studentProfile.course ? studentProfile.course : []}
                />
              </Col>
            </Row>
          </Container>
        ) : (
          <Fragment>
            <Container>
              <h2 className="medium" style={{ "text-align": "center" }}>
                You have not setup a Student Profile!
              </h2>
              <Link to="/createstudentprofile">
                <p style={{ "text-align": "center" }}>Create Student Profile</p>
              </Link>
            </Container>
          </Fragment>
        )}
        <br />
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentStudentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, {
  getCurrentStudentProfile,
})(Dashboard);
