import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCourse } from "../../actions/course";
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

const Course = ({ getCourse, course: { course, loading }, match }) => {
  useEffect(() => {
    getCourse(match.params.id);
  }, [getCourse]);
  console.log("course info should appear here");
  console.log(course);
  return course === null ? (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Spinner animation="border" />
    </div>
  ) : (
    <Fragment>
      {(document.title = course.title)}
      <br />
      <br />
      <br />

      <Jumbotron fluid>
        <Container>
          <br />
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          <p>Section {course.sectionNumber}</p>
        </Container>
      </Jumbotron>
      <div className="container">
        {" "}
        <Nav variant="pills" defaultActiveKey="/home">
          <Nav.Item>
            <Button variant="danger">Join Lecture</Button>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Ask a Question</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled">Post Your Notes</Nav.Link>
          </Nav.Item>
        </Nav>
        <br />
        <Container>
          <Row>
            <Col>
              <h3>Activity Board</h3>
            </Col>
            <Col>
              <h3>Questions</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <ListGroup defaultActiveKey="#link1">
                <ListGroup.Item action href="#link1">
                  Link 1
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  Link 2
                </ListGroup.Item>
                <ListGroup.Item action>This one is a button</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col xs={8}>
              {" "}
              <div className="courses">
                <div className="row">
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
            </Col>
          </Row>
        </Container>
        test
      </div>
      <div class="container">
        <div class="row dashboard">
          <div class="col tr">
            <div class="card">
              <div class="card-header bg-success">
                <h5 class="">Introduction to Political Science</h5>
                <h5>MW 9:00am-12:00am</h5>
              </div>

              <div class="card-footer text-muted"></div>
            </div>
          </div>
          <div class="col tl">
            <h4>Lectures</h4>
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
          </div>
          <div class="w-100"></div>

          <div class="col br">
            <h3>Activity Board</h3>
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
              <a href="#" class="btn btn-danger btn-lg btn-block btn-margin">
                Ask Question
              </a>
            </div>
          </div>
          <div class="col bl">
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
          </div>
        </div>
      </div>
      <div class="container">
        <h1>CECS 229</h1>
        <div class="row">
          <div class="col-2 col-md-4">
            <a href="#" class="btn btn-primary btn-lg btn-block btn-margin">
              Join Lecture
            </a>
            <a href="#" class="btn btn-primary btn-lg btn-block btn-margin">
              Ask Lecture Question
            </a>
          </div>
          <div class="col-5 col-md-4">
            <h2 class="text-center"> Questions</h2>
            <div class="newsfeed">
              <div class="list-group">
                <a
                  href="#"
                  class="list-group-item list-group-item-action flex-column align-items-start "
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">[Solved] How to upload C# files?</h5>
                  </div>
                  <p class="mb-1">Diego Gonzalez</p>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action flex-column align-items-start "
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">[Open] How to delete files?</h5>
                  </div>
                  <p class="mb-1">Matt Pfiefer</p>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action flex-column align-items-start "
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">[Open] Whats 2+2?</h5>
                  </div>
                  <p class="mb-1">Joe Furt</p>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action flex-column align-items-start "
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">
                      [Solved] What is the distance to the moon?
                    </h5>
                  </div>
                  <p class="mb-1">Sarah Poster</p>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action flex-column align-items-start "
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">[Solved] How to find a bug?</h5>
                  </div>
                  <p class="mb-1">Diego Gonzalez</p>
                </a>
              </div>
              <a href="#" class="btn btn-danger btn-lg btn-block btn-margin">
                Ask Question
              </a>
            </div>
          </div>
          <div class="col-5 col-md-4">
            <h2 class="text-center"> Notes</h2>
            <div class="newsfeed">
              <div class="list-group">
                <a
                  href="#"
                  class="list-group-item list-group-item-action flex-column align-items-start "
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1"> Chapter 4 Notes</h5>
                  </div>
                  <p class="mb-1">Diego Gonzalez</p>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action flex-column align-items-start "
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1"> Chapter 3 Notes</h5>
                  </div>
                  <p class="mb-1">Diego Gonzalez</p>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action flex-column align-items-start "
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1"> Chapter 3 Notes</h5>
                  </div>
                  <p class="mb-1">David Camo</p>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action flex-column align-items-start "
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1"> Chapter 2/3 Notes</h5>
                  </div>
                  <p class="mb-1">Mike George</p>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action flex-column align-items-start "
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1"> Chapter 1 Notes</h5>
                  </div>
                  <p class="mb-1">David Garza</p>
                </a>
              </div>
              <a href="#" class="btn btn-danger btn-lg btn-block btn-margin">
                Ask Question
              </a>
            </div>
          </div>
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
