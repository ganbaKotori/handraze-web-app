const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.liveAnswer = !isEmpty(data.liveAnswer) ? data.liveAnswer : "";
    data.dateLecture = !isEmpty(data.dateLecture) ? data.dateLecture : "";

    if (Validator.isEmpty(data.liveAnswer)) {
        errors.liveAnswer = "Answer is required";
    }

    if (Validator.isEmpty(data.dateLecture)) {
        errors.dateLecture = "Date of lecture is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};