import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { CourseCard } from "../CourseCard";

const StudentCourses = ({ course }) => {
  const courses = course.map(course => <CourseCard inputValue={course} />); //create a CourseCard for every course id in the Course array in Student P
  return (
    <Fragment>
      <h3>Courses</h3>
      <div className="courses">
        <div className="row">
          {courses}
          <div className="col-sm-5">
            <div className="card bg-success">
              <div className="card-body">
                <h5 className="card-title">Political Science 101</h5>
                <p className="card-text">MW 7:30AM to 11:00AM</p>
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="card bg-danger">
              <div className="card-body">
                <h5 className="card-title">Advanced Basket Weaving</h5>
                <p className="card-text">TTH 7:30AM to 11:00AM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-5">
            <div className="card">
              <div className="card-body bg-primary">
                <h5 className="card-title">Database Fundamentals</h5>
                <p className="card-text">MW 7:30AM to 11:00AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

StudentCourses.propTypes = {
  course: PropTypes.array.isRequired
};

export default StudentCourses;
