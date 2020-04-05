import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getStudentProfileById } from "../../actions/profile";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const Profile = ({
  getStudentProfileById,
  profile: { studentProfile, loading },
  auth: { user },
  match
}) => {
  useEffect(() => {
    getStudentProfileById(match.params.id);
  }, [getStudentProfileById]);
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
                    </div>
                    <div className="row prof-profile">
                      <div className="col-4">
                        <img
                          src={studentProfile.user && studentProfile.user.avatar ? studentProfile.user && studentProfile.user.avatar : "https://via.placeholder.com/100"}
                          className="profpic"
                        />
                      </div>
                      <div className="col-6">
                        <p className="lead">Student</p>
                        <p className="lead">
                          {studentProfile.user && studentProfile.user.firstName ? studentProfile.user && studentProfile.user.firstName : ""}{" "}
                          {studentProfile.user && studentProfile.user.lastName ? studentProfile.user && studentProfile.user.lastName : ""}
                        </p>
                        <p className="lead">
                          Year:{" "}
                          {studentProfile.user && studentProfile.year
                            ? user && studentProfile.year
                            : ""}
                        </p>
                        <p className="lead">
                          Goes to:{" "}
                          {studentProfile.user && studentProfile.institution
                            ? studentProfile.user && studentProfile.institution
                            : ""}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="car"></div>
                </div>
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
          </Container>
        ) : (
          <Fragment>
            Student Profile Not Found!
          </Fragment>
        )}
        <br />
      </div>
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getStudentProfileById })(Profile);
