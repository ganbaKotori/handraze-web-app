import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentStudentProfile } from "../../actions/profile";
import { Link } from "react-router-dom";
import { FileUpload } from "./FileUpload";
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
    document.title = "Student";
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
                <div className="row ">
                  <div className="col-12 col-md-8">
                    <div className="row col-md-8">
                      <h3>
                        <a href="#" className="btn btn-primary">
                          EDIT
                        </a>
                      </h3>
                    </div>
                    <div className="row prof-profile">
                      <div className="col-4">
                        <img
                          src={user && user.avatar ? user && user.avatar : "https://via.placeholder.com/100"}
                          className="profpic"
                        />
                      </div>
                      <div className="col-6">
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
                      </div>
                    </div>
                  </div>
                  <div className="car"></div>
                </div>
                <FileUpload />
              </Col>
              <Col>
                <h3> News Feed</h3>
                <div className="newsfeed">
                  <div className="list-group">
                    <a
                      href="#"
                      className="list-group-item list-group-item-action flex-column align-items-start "
                    >
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">New Notes: Chapter 3</h5>
                      </div>
                      <p className="mb-1">Advanced Basket Weaving.</p>
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action flex-column align-items-start "
                    >
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">New Notes: Chapter 2</h5>
                      </div>
                      <p className="mb-1">Introduction to Political Science.</p>
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action flex-column align-items-start "
                    >
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">New Question: Chapter 1</h5>
                      </div>
                      <p className="mb-1">Advanced Basketweaving</p>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={9}>
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
