import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { DiscussionQuestionCard } from "./DiscussionQuestionCard";
import { Button, Jumbotron } from "react-bootstrap";
import {AnswerCard} from "./AnswerCard";

const Answers = ({ answer }) => {
  var answers;
  console.log(answer);
  if (answer) {
    answers = answer.map(answer => (
      <AnswerCard inputValue={answer} />
    )); //create a CourseCard for every course id in the Course array in Student P
  }

  return (
    <Fragment>
      <h4>Answers</h4>
      <hr/>
      {answers}
    </Fragment>
  );
};

Answers.propTypes = {
  question: PropTypes.array.isRequired
};

export default Answers;
