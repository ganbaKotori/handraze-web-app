import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getInstructorProfileById } from "../../actions/profile";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import InstructorCourses from "./InstructorCourses";

const Profile = ({
  getInstructorProfileById,
  profile: { instructorProfile, loading },
  auth: { user },
  match
}) => {
  useEffect(() => {
    getInstructorProfileById(match.params.id);
  }, [getInstructorProfileById]);
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
          <Fragment>
            <div className="container">
            {(document.title = instructorProfile.user.firstName+ " " + instructorProfile.user.lastName)}
              <br />
              <div className="row ">
                <div className="col-12 col-md-8">
                  <div className="row col-md-8">
                  </div>
                  <div className="row prof-profile">
                    <div className="col-2">
                      <img
                        src={instructorProfile.user && instructorProfile.user.avatar ? instructorProfile.user && instructorProfile.user.avatar : "https://via.placeholder.com/100"}
                        className="profpic"
                      />
                    </div>
                    <div className="col-6">
                      <p className="lead"> Instructor </p>
                      <p className="lead">
                        {instructorProfile.user && instructorProfile.user.firstName} {instructorProfile.user && instructorProfile.user.lastName}
                      </p>
                      <p className="lead">
                        Department: {instructorProfile.user && instructorProfile.department}
                      </p>

                      <p className="lead">
                        {" "}
                        Teaches at: {instructorProfile.user && instructorProfile.institution}
                      </p>
                    </div>
                  </div>

                  <div className="car">
                    <h3>Courses You're Teaching</h3>
                    <div className="courses">
                      <div className="row">
                        <div className="col-sm-5"></div>
                      </div>
                      <div className="row">
                        <div className="col-sm-5"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
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
                        <p className="mb-1">
                          Introduction to Political Science.
                        </p>
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
                </div>
              </div>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            Instructor Profile Not Found!
            <Link to="/"> Home </Link>
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

export default connect(mapStateToProps, { getInstructorProfileById })(Profile);
