import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { ClassRosterCard } from "./ClassRosterCard";
import { Alert, ListGroup } from "react-bootstrap";

const ClassRoster = ({ students, instructor }) => {
  var instructorRosterCard;
  var classRoster;
  if (instructor != null){
    instructorRosterCard = <ClassRosterCard classRoster={instructor}/>
  }
  if (students.length !== 0 ) {
    classRoster = students.map((students) => <ClassRosterCard classRoster={students} />); //create a CourseCard for every course id in the Course array in Student P
  }

  if(students.length !== 0 || instructor != null){
    return (
      <Fragment>
        <hr/>
        <h3>Class Roster</h3>{" "}
        <ListGroup style={{"maxHeight":"400px","overflow": "auto", "overflowX":"hidden"}}>
        {instructorRosterCard}
          {classRoster}
        </ListGroup>
        </Fragment>
    );
  }
    


  
  return (
    <Fragment>
       <hr/>
      <h3>Class Roster</h3>{" "}
    <Alert variant="warning">
    No students currently enrolled
  </Alert>
  </Fragment>
  )

  
};

ClassRoster.propTypes = {
  students: PropTypes.array.isRequired,
};

export default ClassRoster;
