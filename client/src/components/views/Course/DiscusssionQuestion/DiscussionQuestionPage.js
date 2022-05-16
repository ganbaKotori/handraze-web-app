import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getQuestion } from "../../../../actions/question";
import { Spinner, Row, Col, Jumbotron, Container } from "react-bootstrap";
import Answers from "./Answers";
import { Link } from "react-router-dom";

const DiscussionQuestionPage = ({
  getQuestion,
  question: { question, loading },
  match,
}) => {
  useEffect(() => {
    getQuestion(match.params.id);
  }, [getQuestion]);
  {
    document.title = "Question";
  }

  return question === null ? (
    <div>
      <Spinner animation="border" />
    </div>
  ) : (
    <Fragment>
      <Jumbotron>
        <Container>
          <span className="lead">Discussion Question</span>
          <h1>{question.question ? question.question : ""}</h1>
          <h4>
            {question.description
              ? question.description
              : "No description available"}
          </h4>
          <hr />
          <p className="lead">
            {" "}
            Submitted by {question.name
              ? question.name
              : "NO USER FOUND"} on{" "}
            {question.dateSubmitted
              ? new Date(question.dateSubmitted).toDateString()
              : ""}
          </p>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col xs lg="2">
            <Link
              className="btn btn-primary btn-lg center-btn"
              to={`/new-answer/${question._id}`}
            >
              Add Answer
            </Link>
          </Col>
          <Col>
            <Answers answer={question.answer ? question.answer : []} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

DiscussionQuestionPage.propTypes = {
  getQuestion: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  question: state.question,
});

export default connect(mapStateToProps, { getQuestion })(
  DiscussionQuestionPage
);
