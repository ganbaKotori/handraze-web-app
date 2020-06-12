import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCourse } from "../../../actions/course";
import { getLectures } from "../../../actions/lecture";
import { Link } from "react-router-dom";
import DiscussionQuestions from "./DiscusssionQuestion/DiscussionQuestions";
import ClassRoster from "./ClassRoster";
import LectureList from "../Lecture/LectureList";
import {
  Col,
  Spinner,
  Jumbotron,
  Container,
  Nav,
  Button,
  Row,
  ListGroup
} from "react-bootstrap";

const Course = ({ getLectures, getCourse, course: { course, loading }, lectures: { lectures, loading2 }, match }) => {
  useEffect(() => {
    getCourse(match.params.id);
    getLectures();
  }, [getCourse, getLectures]);
  console.log("course info should appear here");
  console.log(course);
  console.log(lectures);
  
  var dayOfWeek;
  if (course !== null) {
    dayOfWeek = course.dayOfWeek.map(day => (
      <Fragment>
        {" "}
        <b>{" " + day + " "}</b>{" "}
      </Fragment>
    ));
  }

  return course === null ? (
    <div>
      <Spinner animation="border" />
    </div>
  ) : (
    <Fragment>
      {(document.title = course.title)}
      <Jumbotron fluid className="Logo">
        <div className="jumbotron_text">
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          <p>Section {course.sectionNumber}</p>
          Lectures: {dayOfWeek} from <b>{course.classStart}</b> to{" "}
          <b>{course.classEnd}</b>
        </div>
      </Jumbotron>
        <Container>
          <Row>
            {" "}
            <Link to={`/new-lecture/${course._id}`} className="btn btn-primary btn-lg btn-block btn-margin">Create Lecture</Link>
            <br />
          </Row>
          <Row>
            <Col >
              <LectureList lecture={ lectures ? lectures : []}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <DiscussionQuestions
                question={course.discussion ? course.discussion : []}
              />              
              <Link to={`/new-question/${course._id}`} class="btn btn-danger btn-lg btn-block btn-margin">
              Ask Question
              </Link>
            </Col>
            <Col>
            <ClassRoster students={ course.students ? course.students : []}/>
            
            </Col>
          </Row>
        </Container>
    </Fragment>
  );
};

Course.propTypes = {
  getCourse: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
  getLectures: PropTypes.func.isRequired,
  lectures: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  course: state.course,
  lectures: state.lecture
});

export default connect(mapStateToProps, { getCourse,getLectures })(Course);