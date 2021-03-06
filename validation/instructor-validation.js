const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = "";

  data.id = !isEmpty(data.id) ? data.id : "";
  data.department = !isEmpty(data.department) ? data.department : "";
  data.institution = !isEmpty(data.institution) ? data.institution : "";

  if (Validator.isEmpty(data.department)) {
    errors = "Department is required";
  }

  if (Validator.isEmpty(data.institution)) {
    errors = "Department is required";
  }

  return {
    errors,
    isValid: errors == ""
  };
};
