import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentStudentProfile } from "../../../actions/profile";
import { Link } from "react-router-dom";
import { FileUpload } from "../FileUpload";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import StudentCourses from "./StudentCourses";
const Dashboard = ({
  getCurrentStudentProfile,
  auth: { user },
  profile: { studentProfile, loading }
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
      <Fragment>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Fragment>
    </div>
  ) : (
    <Fragment>
      <div>
        {studentProfile !== null ? (
          <Container>
            <Row>
              <Col xs={7}>
                {" "}
                <Row>
                  <Col>
                    <Col>
                      <h3>
                        <a href="#" className="btn btn-primary">
                          EDIT
                        </a>
                      </h3>
                    </Col>
                    <Row>
                      <Col>
                        <img
                          src={user && user.avatar ? user && user.avatar : "https://via.placeholder.com/100"}
                          className="profpic"
                        />
                      </Col>
                      <Col>
                        <p className="lead">Student</p>
                        <p className="lead">
                          {user && user.firstName ? user && user.firstName : ""}{" "}
                          {user && user.lastName ? user && user.lastName : ""}
                        </p>
                        <p className="lead">
                          Year:{" "}
                          {user && studentProfile.year
                            ? user && studentProfile.year
                            : ""}
                        </p>
                        <p className="lead">
                          Goes to:{" "}
                          {user && studentProfile.institution
                            ? user && studentProfile.institution
                            : ""}
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <FileUpload />
              </Col>
              
            </Row>
            <br />
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
            You have not setup a student profile
            <Link to="/createstudentprofile"> Create Student Profile </Link>
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
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, {
  getCurrentStudentProfile
})(Dashboard);
