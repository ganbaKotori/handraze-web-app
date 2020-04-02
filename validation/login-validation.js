const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!data.password.match(/^[0-9a-z]+$/)) {
    errors.password = "Password format invalid!";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }


  return {
    errors,
    isValid: isEmpty(errors)
  };
};
