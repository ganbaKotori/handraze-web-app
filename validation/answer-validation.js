const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.answer = !isEmpty(data.answer) ? data.answer : "";

    if (Validator.isEmpty(data.answer)) {
        errors.answer = "Answer is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};