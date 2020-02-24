const Validator = require("validator");
const isEmpty = require("./is-empty");

const Course = require("../routes/Course")

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.topic = !isEmpty(data.topic) ? data.topic : "";
  // data.studentsAttending = !isEmpty(data.studentsAttending) ? data.studentsAttending: "";
  data.cid = !isEmpty(data.description) ? data.description : "";
  data.inSession = !isEmpty(data.isEmpty) ? data.isEmpty : "";
  data.sessionStart = !isEmpty(data.classStart) ? data.classStart : "";
  data.sessionEnd = !isEmpty(data.classDuration) ? data.classDuration : "";

  if (!Validator.isLength(data.topic, { min: 5, max: 30 })) {
    errors.classTopic = "Classroom topic must be between 5 and 30 characters";
  }

  if (Validator.isEmpty(data.cid)) {
    errors.classID = "Classroom ID is required";
  }

// need to check if cid is part of a Course by looking for sectionID?
  //Course.count({_id: sectionNumber}, function (err, count){
      //if(count < 0){
          //document doesn't existt
          //errors.classID = "Classroom ID does not exist"
      //}
  //});

  if (Validator.isEmpty(data.inSession)) {
    errors.classInSession = "Must specify if classroom is in session";
  }

  if (Validator.isEmpty(data.sessionStart)) {
    errors.classSessionStart = "Session Start is required";
  }

  if (Validator.isEmpty(data.sessionEnd)) {
    errors.classSessionEnd = "Session End is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
