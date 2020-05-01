import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { DiscussionQuestionCard } from "./DiscussionQuestionCard";
import { Button } from "react-bootstrap";

const DiscussionQuestions = ({ question }) => {
  var questions;
  console.log(question);
  if (question) {
    questions = question.map(question => (
      <DiscussionQuestionCard inputValue={question} />
    )); //create a CourseCard for every course id in the Course array in Student P
  }

  return (
    <Fragment>
      <br/>
      <h3>Discussion Questions</h3>{" "}
      <div class="newsfeed">
        <div class="list-group notes-board">{questions}</div>
      </div>
    </Fragment>
  );
};

DiscussionQuestions.propTypes = {
  question: PropTypes.array.isRequired
};

export default DiscussionQuestions;
