const Validator = require("validator");
const isEmpty = require("./is-empty");

// TODO: Need to check if classroom already exist
// const Course = require("../routes/Course");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  const minRating = 1;
  const maxRating = 5;

  data.topic = !isEmpty(data.topic) ? data.topic : "";
  data.cid = !isEmpty(data.cid) ? data.cid : "";
  data.inSession = !isEmpty(data.inSession) ? data.inSession : "";
  data.sessionStart = !isEmpty(data.sessionStart) ? data.sessionStart : "";
  data.sessionEnd = !isEmpty(data.sessionEnd) ? data.sessionEnd : "";

  //data.rating =  !isEmpty(data.topic) ? data.topic : "";

/*
  if(!Validator.isInt(data.rating, {min: 1, max:5})) {
    errors.classRating = "Classroom rating must be a number between 1 and 5";
  }
*/

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
