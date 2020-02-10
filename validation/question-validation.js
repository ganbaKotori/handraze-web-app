const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.question = !isEmpty(data.question) ? data.question : "";
    data.dateSubmitted = !isEmpty(data.dateSubmitted) ? data.dateSubmitted : "";

    if (!Validator.isLength(data.name, { min: 10, max: 150 })) {
        errors.name = "Question must not exceed 150 characters";
    }

    if (Validator.isEmpty(data.dateSubmitted)) {
        errors.dateSubmitted = "Date submitted is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};