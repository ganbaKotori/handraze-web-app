const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = "";

    data.answer = !isEmpty(data.answer) ? data.answer : "";

    if (Validator.isEmpty(data.answer)) {
        errors = "Answer is required";
    }

    return {
        errors,
        isValid: errors == ""
    };
};