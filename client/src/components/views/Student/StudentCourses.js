import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { CourseCard } from "./StudentCourseCard";
import { CardDeck, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const StudentCourses = ({ course }) => {
  var max = 3;
  var count = 0;
  function func(number) {
    console.log(number);
    return <CourseCard inputValue={course} />;
  }
  const courses = course.map(
    course => (
      (count += 1),
      console.log(count),
      func(count),
      (<Col><CourseCard inputValue={course} /></Col>)
    )
  ); //create a CourseCard for every course id in the Course array in Student P

  return (
    <Fragment>
      <hr/>
      <h3>Courses</h3>{" "}
      <CardDeck>
      {courses}
      </CardDeck>
      <Link to="/enroll">
        <Button variant="outline-primary">Enroll Course</Button>
      </Link>
      <hr/>
    </Fragment>
  );
};

StudentCourses.propTypes = {
  course: PropTypes.array.isRequired
};

export default StudentCourses;
