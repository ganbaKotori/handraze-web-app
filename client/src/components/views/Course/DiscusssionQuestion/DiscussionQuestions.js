import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { DiscussionQuestionCard } from "./DiscussionQuestionCard";
import { Alert, ListGroup } from "react-bootstrap";

const DiscussionQuestions = ({ question }) => {
  var questions;
  if (question.length !=0) {
    questions = question.map(question => (
      <DiscussionQuestionCard inputValue={question} />
    )); //create a CourseCard for every course id in the Course array in Student P

    return (
      <Fragment>
        <hr/>
        <h3>Discussion Questions</h3>{" "}
        <ListGroup style={{"max-height":"400px","overflow": "auto", "overflow-x":"hidden"}}>
        {questions}
        </ListGroup>

      </Fragment>
    );
  }
  
  return(
    <Fragment>
       <hr/>
      <h3>Discussion Questions</h3>{" "}
    <Alert variant="warning">
    There are no Discussion Questions
  </Alert>
  </Fragment>
  )

  
};

DiscussionQuestions.propTypes = {
  question: PropTypes.array.isRequired
};

export default DiscussionQuestions;
