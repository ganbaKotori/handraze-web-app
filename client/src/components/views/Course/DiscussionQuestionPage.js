import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getQuestion } from "../../../actions/question";
import { Spinner } from "react-bootstrap";

const DiscussionQuestionPage = ({
  getQuestion,
  question: { question, loading },
  match
}) => {
  useEffect(() => {
    getQuestion(match.params.id);
  }, [getQuestion]);

  return question === null ? (
    <div>
      <Spinner animation="border" />
    </div>
  ) : (
    <div class="container">
      <div class="row">
        <div class="col ">
          <h4>Question</h4>
          <h1>{question.question ? question.question : ""} </h1>
          <p class="bold">
            {" "}
            Submitted by {question.name
              ? question.name
              : "NO USER FOUND"} on{" "}
            {question.dateSubmitted ? question.dateSubmitted : ""}
          </p>
          <p>
            {question.description
              ? question.description
              : "No description available"}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <a type="button" class="btn btn-primary btn-lg center-btn " href="#">
            Submit Answer
          </a>
        </div>
        <div class="col-8 ">
          <h4>Answers</h4>
          <div class="jumbotron lectureq">
            <div class="card lecture-card">
              <div class="card-body">
                <b>Garza Replied: </b>
                What is the point of this question.
              </div>
            </div>
            <div class="card lecture-card">
              <div class="card-body">
                <b>Garza Replied: </b>
                No.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DiscussionQuestionPage.propTypes = {
  getQuestion: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  question: state.question
});

export default connect(mapStateToProps, { getQuestion })(
  DiscussionQuestionPage
);
