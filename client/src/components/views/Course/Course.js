import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCourse } from "../../../actions/course";
import { Link } from "react-router-dom";
import DiscussionQuestions from "./DiscusssionQuestion/DiscussionQuestions";
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
import chalkboard from "../../../img/chalkboard.jpg";

const Course = ({ getCourse, course: { course, loading }, match }) => {
  useEffect(() => {
    getCourse(match.params.id);
  }, [getCourse]);
  console.log("course info should appear here");
  console.log(course);
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
        <Container className="jumbotron_text">
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          <p>Section {course.sectionNumber}</p>
          Lectures: {dayOfWeek} from <b>{course.classStart}</b> to{" "}
          <b>{course.classEnd}</b>
        </Container>
      </Jumbotron>
      <div className="container">
        <Container>
          <Row>
            {" "}
            <a href="#" class="btn btn-primary btn-lg btn-block btn-margin">
              Join Lecture
            </a>
            <a href="#" class="btn btn-primary btn-lg btn-block btn-margin">
              Ask Lecture Question
            </a>
            <br />
          </Row>
          <Row>
            <Col>
              <h3>Activity Board</h3>{" "}
              <div class="newsfeed">
                <div class="list-group activity-board">
                  <a
                    href="#"
                    class="list-group-item list-group-item-action flex-column align-items-start "
                  >
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">Lecture 10/27/19</h5>
                    </div>
                    <p class="mb-1">6 Questions</p>
                    <p class="mb-1">6 Solved</p>
                  </a>
                  <a
                    href="#"
                    class="list-group-item list-group-item-action flex-column align-items-start "
                  >
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">Lecture 11/27/19</h5>
                    </div>
                    <p class="mb-1">5 Questions</p>
                    <p class="mb-1">3 Solved</p>
                  </a>
                  <a
                    href="#"
                    class="list-group-item list-group-item-action flex-column align-items-start "
                  >
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">Lecture 10/12/19</h5>
                    </div>
                    <p class="mb-1">6 Questions</p>
                    <p class="mb-1">2 Solved</p>
                  </a>
                  <a
                    href="#"
                    class="list-group-item list-group-item-action flex-column align-items-start "
                  >
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">Lecture 1/27/19</h5>
                    </div>
                    <p class="mb-1">6 Questions</p>
                    <p class="mb-1">2 Solved</p>
                  </a>
                  <a
                    href="#"
                    class="list-group-item list-group-item-action flex-column align-items-start "
                  >
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">Lecture 9/27/19</h5>
                    </div>
                    <p class="mb-1">7 Questions</p>
                    <p class="mb-1">4 Solved</p>
                  </a>
                </div>
              </div>
            </Col>
            <Col xs={6}>
              <h3>Lectures</h3>
              <div class="row">
                <div class="col">
                  <img
                    src="https://via.placeholder.com/50"
                    class="img-thumbnail lectures "
                  />
                </div>
                <div class="col">
                  <img
                    src="https://via.placeholder.com/50"
                    class="lectures img-thumbnail"
                  />
                </div>
                <div class="w-100"></div>
                <div class="col">
                  <img
                    src="https://via.placeholder.com/50"
                    class="lectures img-thumbnail"
                  />
                </div>
                <div class="col">
                  <img
                    src="https://via.placeholder.com/50"
                    class="lectures img-thumbnail"
                  />
                </div>
              </div>
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
              <h3>Peer Notes</h3>
              <div class="newsfeed">
                <div class="list-group notes-board">
                  <a
                    href="#"
                    class="list-group-item list-group-item-action flex-column align-items-start "
                  >
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">Chapter 4 Notes</h5>
                    </div>
                    <p class="mb-1">Diego Gonzalez</p>
                  </a>
                  <a
                    href="#"
                    class="list-group-item list-group-item-action flex-column align-items-start "
                  >
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">Chapter 4 Notes</h5>
                    </div>
                    <p class="mb-1">Matt Pfiefer</p>
                  </a>
                  <a
                    href="#"
                    class="list-group-item list-group-item-action flex-column align-items-start "
                  >
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">Chapter 4 Notes</h5>
                    </div>
                    <p class="mb-1">Joe Furt</p>
                  </a>
                  <a
                    href="#"
                    class="list-group-item list-group-item-action flex-column align-items-start "
                  >
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">Chapter 4 Notes</h5>
                    </div>
                    <p class="mb-1">Sarah Poster</p>
                  </a>
                  <a
                    href="#"
                    class="list-group-item list-group-item-action flex-column align-items-start "
                  >
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">Chapter 4 Notes</h5>
                    </div>
                    <p class="mb-1">Diego Gonzalez</p>
                  </a>
                </div>
                <a href="#" class="btn btn-danger btn-lg btn-block btn-margin">
                  Add Notes
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div class="container">
        <div class="row dashboard"></div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-2 col-md-4"></div>
        </div>
      </div>
      <br />
      <br />
    </Fragment>
  );
};

Course.propTypes = {
  getCourse: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  course: state.course
});

export default connect(mapStateToProps, { getCourse })(Course);
