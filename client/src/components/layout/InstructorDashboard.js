import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import { Link } from "react-router-dom";
import { FileUpload } from "./FileUpload";
import InstructorCourses from "./InstructorCourses";
import { Button, Spinner } from "react-bootstrap";

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  return profile === null ? (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Fragment>
        You have not setup an instructor profile
        <Link to="/createinstructorprofile"> Create Instructor Profile </Link>
      </Fragment>
    </div>
  ) : (
    <Fragment>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {profile.instructor !== null ? (
          <Fragment className="container">
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
                      src="https://handraze-test-bucket.s3-us-west-1.amazonaws.com/5e545ad861d1d83a44be32ea/1583208500576-MOSHED-2019-11-26-17-42-43.jpg"
                      className="profpic"
                    />
                  </div>
                  <div className="col-6">
                    <p className="lead"> Instructor </p>
                    <p className="lead">
                      {user && user.firstName} {user && user.lastName}
                    </p>
                    <p className="lead">
                      Department: {user && profile.instructor.department}
                    </p>

                    <p className="lead"> Teaches at: </p>
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
                        <InstructorCourses course={profile.instructor.course} />
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
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, {
  getCurrentProfile
})(Dashboard);
