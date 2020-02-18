const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.classStart = !isEmpty(data.classStart) ? data.classStart : "";
  //data.dayOfWeek = !isEmpty(data.dayOfWeek) ? data.dayOfWeek : "";
  data.classDuration = !isEmpty(data.classDuration) ? data.classDuration : "";
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
    errors.classTitle = "Class title must be between 10 and 30 characters";
  }

  if (Validator.isEmpty(data.description)) {
    errors.classDescription = "Class descripton is required";
  }

  if (Validator.isEmpty(data.classStart)) {
    errors.classStart = "Class start is required";
  }

  if (!data.dayOfWeek.some(r => week.indexOf(r) >= 0)) {
    errors.weekDay = "Incorrect day of the week";
  }

  //if (Validator.isEmpty(data.dayOfWeek)) {
  //  errors.weekDay = "Day of the week is required";
  //}

  if (isNaN(data.classDuration)) {
    errors.classDuration = "Class duration must be a number";
  }

  if (Validator.isEmpty(data.classDuration)) {
    errors.classDuration = "Class Duration is required";
  }

  if (Validator.isEmpty(data.location)) {
    errors.location = "Location is required";
  }

  if (isNaN(data.sectionNumber)) {
    errors.sectionNumber = "Section number must be a number";
  }

  if (Validator.isEmpty(data.sectionNumber)) {
    errors.sectionNumber = "Section number is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
