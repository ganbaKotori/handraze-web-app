import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getQuestion } from "../../../../actions/question";
import { Spinner } from "react-bootstrap";
import  Answers  from "./Answers";
import { Link } from "react-router-dom";

const DiscussionQuestionPage = ({
  getQuestion,
  question: { question, loading },
  match
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
    
    <div class="container">
      {(document.title = question.question)}
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

          <Link className="btn btn-primary btn-lg center-btn" to={`/new-answer/${question._id}`}> Submit Answer</Link>

        </div>
        <div class="col-8 ">
          <Answers answer={question.answer ? question.answer : []}/>
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
