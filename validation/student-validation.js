const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = "";

  data.id = !isEmpty(data.id) ? data.id : "";
  data.year = !isEmpty(data.year) ? data.year : "";
  data.institution = !isEmpty(data.institution) ? data.institution : "";
  var years = ["freshman", "sophmore", "junior", "senior"];

  if (!years.includes(data.year)) {
    errors = "Incorrect year";
  }

  if (Validator.isEmpty(data.year)) {
    errors = "Year is required";
  }

  if (Validator.isEmpty(data.institution)) {
    errors = "Institution is required";
  }

  return {
    errors,
    isValid: errors == ""
  };
};
