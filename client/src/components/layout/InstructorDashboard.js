import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentInstructorProfile } from "../../actions/profile";
import { Link } from "react-router-dom";
import { FileUpload } from "./FileUpload";
import InstructorCourses from "./InstructorCourses";
import { Button, Spinner } from "react-bootstrap";

const Dashboard = ({
  getCurrentInstructorProfile,
  auth: { user },
  profile: { instructorProfile, loading }
}) => {
  useEffect(() => {
    getCurrentInstructorProfile();
  }, []);
  {
    document.title = "Instructor";
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
          <Fragment>
            <div className="container">
              <FileUpload user={user._id} />
              <br />
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
                    <div className="col-2">
                      <img
                        src="https://via.placeholder.com/100"
                        className="profpic"
                      />
                    </div>
                    <div className="col-6">
                      <p className="lead"> Instructor </p>
                      <p className="lead">
                        {user && user.firstName} {user && user.lastName}
                      </p>
                      <p className="lead">
                        Department: {user && instructorProfile.department}
                      </p>

                      <p className="lead">
                        {" "}
                        Teaches at: {user && instructorProfile.institution}
                      </p>
                    </div>
                  </div>

                  <div className="car">
                    <h3>Courses You're Teaching</h3>
                    <Link to="/newcourse">
                      <Button variant="outline-primary">
                        Start a new Course
                      </Button>
                    </Link>
                    <div className="courses">
                      <div className="row">
                        <div className="col-sm-5">
                          <InstructorCourses
                            course={
                              instructorProfile.course
                                ? instructorProfile.course
                                : []
                            }
                          />
                        </div>
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
            You have not setup a instructor profile
            <Link to="/createinstructorprofile"> Create Profile </Link>
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
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, {
  getCurrentInstructorProfile
})(Dashboard);
