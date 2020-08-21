import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { InstructorCourseCard } from "./InstructorCourseCard";
import { CardDeck, Button, Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom"

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
      (<Col><InstructorCourseCard inputValue={course} /></Col>)
    )
  );

  return (
    <Fragment>
       <hr/>
       <h3>Course You're Teaching</h3>{" "}
       <CardDeck>
      {courses}
      </CardDeck>
      <Link to="/newcourse">
        <Button variant="outline-primary">Start a new Course</Button>
      </Link>
      <hr/>

    </Fragment>
  );
};

InstructorCourses.propTypes = {
  course: PropTypes.array.isRequired
};

export default InstructorCourses;
