const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = "";

  data.title = !isEmpty(data.title) ? data.title : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.classStart = !isEmpty(data.classStart) ? data.classStart : "";
  data.classEnd = !isEmpty(data.classEnd) ? data.classEnd : "";
  //data.dayOfWeek = (data.dayOfWeek === undefined || data.dayOfWeek.length == 0 ) ? data.dayOfWeek :"";
  data.location = !isEmpty(data.location) ? data.location : "";
  data.sectionNumber = !isEmpty(data.sectionNumber) ? data.sectionNumber : "";
  var week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  if (!Validator.isLength(data.title, { min: 10, max: 30 })) {
    errors = "Class title must be between 10 and 30 characters";
  }

  if (Validator.isEmpty(data.description)) {
    errors = "Class descripton is required";
  }

  if (Validator.isEmpty(data.classStart)) {
    errors = "Class start is required";
  }



  if (Validator.isEmpty(data.classEnd)) {
    errors = "Class end is required";
  }

  //if (!data.dayOfWeek.some(r => week.indexOf(r) >= 0)) {
  //  errors = "Incorrect day of the week";
  //}

  if (Validator.isEmpty(data.classStart)) {
    errors = "Class start is required";
  }

  if (data.dayOfWeek === undefined || data.dayOfWeek.length == 0) {
    errors.weekDay = "Day of the week is required";
  }


  if (Validator.isEmpty(data.location)) {
    errors = "Location is required";
  }

  if (isNaN(data.sectionNumber)) {
    errors = "Section number must be a number";
  }

  return {
    errors,
    isValid: errors == ""
  };
};
