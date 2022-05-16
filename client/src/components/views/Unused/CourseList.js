import React, { Fragment, Component, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCourses } from "../../../actions/course";

const CourseList = ({ getCourses, course: { courses, loading } }) => {
  useEffect(() => {
    getCourses();
  }, [getCourses]);
  return (
    <div class="container">
      <br />
      <br />
      <br />
      <br />

      <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-header bg-primary">
              <h5 class="">Introduction to Political Science</h5>
              <h5>MW 9:00am-12:00am</h5>
            </div>
            <div class="card-body">
              <p class="card-text text-muted">
                2 New Questions | 1 New Answer | 3 New Notes
              </p>
            </div>
            <div class="card-footer text-muted"></div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-header bg-danger">
              <h5 class="">Introduction to Political Science</h5>
              <h5>MW 9:00am-12:00am</h5>
            </div>
            <div class="card-body">
              <p class="card-text text-muted">
                2 New Questions | 1 New Answer | 3 New Notes
              </p>
            </div>
            <div class="card-footer text-muted"></div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-header bg-success">
              <h5 class="">Introduction to Political Science</h5>
              <h5>MW 9:00am-12:00am</h5>
            </div>
            <div class="card-body">
              <p class="card-text text-muted">
                2 New Questions | 1 New Answer | 3 New Notes
              </p>
            </div>
            <div class="card-footer text-muted"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

CourseList.propTypes = {
  getCourses: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  course: state.course
});

export default connect(mapStateToProps, { getCourses })(CourseList);
