const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.topic = !isEmpty(data.topic) ? data.topic : "";

    if (Validator.isEmpty(data.topic)) {
        errors.topic = "Discussion topic is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};