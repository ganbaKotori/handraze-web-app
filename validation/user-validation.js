const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = "";

  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors= "Email is invalid";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors= "Password must be at least 6 characters";
  }

  if (Validator.isEmpty(data.email)) {
    errors = "Email is required";
  }

  if (Validator.isEmpty(data.firstName)) {
    errors = "First name is required";
  }

  if (Validator.isEmpty(data.lastName)) {
    errors = "Last name is required";
  }

  return {
    errors,
    isValid: errors == ""
  };
};
