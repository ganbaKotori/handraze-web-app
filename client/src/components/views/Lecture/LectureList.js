import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { LectureCard } from "./LectureCard";
import { Button, ListGroup, Alert } from "react-bootstrap";

const LectureList = ({ lecture }) => {
  var lectures;
  console.log(lecture);
  if (lecture.length != 0) {
    lectures = lecture.map((lecture) => <LectureCard inputValue={lecture} />); //create a CourseCard for every course id in the Course array in Student P
    return (
      <Fragment>
        <hr />
        <h3>Lectures</h3>{" "}
        <ListGroup
          style={{
            "max-height": "200px",
            overflow: "auto",
            "overflow-x": "hidden",
          }}
        >
          {lectures}
        </ListGroup>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <hr />
      <h3>Lectures</h3> <Alert variant="warning">No Lectures Yet!</Alert>
    </Fragment>
  );
};

LectureList.propTypes = {
  lecture: PropTypes.array.isRequired,
};

export default LectureList;
