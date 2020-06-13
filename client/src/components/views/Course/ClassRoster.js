import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { ClassRosterCard } from "./ClassRosterCard";
import { Button } from "react-bootstrap";

const ClassRoster = ({ students }) => {
  var classRoster;
  if (students) {
    classRoster = students.map((students) => <ClassRosterCard classRoster={students} />); //create a CourseCard for every course id in the Course array in Student P
  }

  return (
    <Fragment>
      <br/>
      <h3>Class Roster</h3>{" "}
      <div class="newsfeed">
        <div class="list-group notes-board">{classRoster}</div>
      </div>
    </Fragment>
  );
};

ClassRoster.propTypes = {
  students: PropTypes.array.isRequired,
};

export default ClassRoster;
