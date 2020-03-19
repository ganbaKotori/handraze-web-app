import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { InstructorCourseCard } from "../InstructorCourseCard";

const InstructorCourses = ({ course }) => {
  var max = 3;
  var count = 0;
  function func(number) {
    console.log(number);
    return <InstructorCourseCard inputValue={course} />;
  }
  const courses = course.map(
    course => (
      (count += 1),
      console.log(count),
      func(count),
      (<InstructorCourseCard inputValue={course} />)
    )
  ); //create a CourseCard for every course id in the Course array in Student P

  return (
    <Fragment>
      <div className="courses">
        <div className="row">
          {courses}
          <div className="col-sm-5"></div>
        </div>
        <div className="row"></div>
      </div>
    </Fragment>
  );
};

InstructorCourses.propTypes = {
  course: PropTypes.array.isRequired
};

export default InstructorCourses;
