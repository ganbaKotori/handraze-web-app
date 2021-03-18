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
  Row,
  Container,
  Jumbotron,
  Badge
} from "react-bootstrap";

const Course = ({
  getCourse,
  course: { course, loading },
  match,
}) => {
  useEffect(() => {
    getCourse(match.params.id);
  }, [getCourse]);
  var dayOfWeek;
  if (course !== null) {
    dayOfWeek = course.dayOfWeek.map((day) => (
      <Fragment>
        {" "}
        <b>{" " + day + " "}</b>{" "}
      </Fragment>
    ));
  }

  return course === null ? (
    <div>
      <Container className="center">
        <Row>
          <Col>
            <h1 className="large">Loading!</h1>
            {"  "}
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      </Container>
    </div>
  ) : (
    // /document.title = course.titledocument.title = course.title
    <Fragment>
      <Jumbotron>
        <Container>
          <h1>{course.title}  </h1><span><Badge variant="secondary">Section {course.sectionNumber}</Badge></span>
          <p className="lead">
          {course.description}
          </p>
          <hr />
          <Row>
            <Col>
            <p className="lead">Lectures every {dayOfWeek} from <b>{course.classStart}</b> to{" "}
                  <b>{course.classEnd}</b></p>
            
            </Col>
            <Col>
            <p className="lead"></p>
            </Col>
          </Row>
          
                  
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col xs="12">
          </Col>
        </Row>
        <Row>
        <Col xs="12">
        <Link
            to={`/new-lecture/${course._id}`}
            className="btn btn-primary btn-lg btn-block btn-margin"
          >
            Create Lecture
          </Link>
        </Col>
          <br />
        </Row>
        <Row>
          <Col md="8" xs="12">
            <LectureList lecture={course.lecture ? course.lecture : []} />
          </Col>
          <Col md="4" xs="12">
            <ClassRoster students={course.students ? course.students : []} instructor={course.instructor ? course.instructor : null}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <DiscussionQuestions
              question={course.discussion ? course.discussion : []}
            />
            <Link
              to={`/new-question/${course._id}`}
              className="btn btn-danger btn-lg btn-block btn-margin"
            >
              Ask Question
            </Link>
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
  lectures: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  course: state.course,
  lectures: state.lecture,
});

export default connect(mapStateToProps, { getCourse, getLectures })(Course);