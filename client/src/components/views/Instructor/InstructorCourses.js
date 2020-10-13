import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { InstructorCourseCard } from "./InstructorCourseCard";
import { CardDeck, Button, Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom"

const InstructorCourses = ({ course }) => {

  console.log(course)
  const courses = course.map(
    course => (
      
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
