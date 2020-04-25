import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { LectureCard } from "./LectureCard";
import { Button } from "react-bootstrap";

const LectureList = ({ lecture }) => {
  var lectures;
  console.log(lecture);
  if (lecture) {
    lectures = lecture.map(lecture => (
      <LectureCard inputValue={lecture} />
    )); //create a CourseCard for every course id in the Course array in Student P
  }

  return (
    <Fragment>
      <h3>Lectures</h3>{" "}
      <div class="newsfeed">
        <div class="list-group notes-board">{lectures}</div>
      </div>
    </Fragment>
  );
};

LectureList.propTypes = {
  lecture: PropTypes.array.isRequired
};

export default LectureList;