const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.id = !isEmpty(data.id) ? data.id : "";
    data.year = !isEmpty(data.year) ? data.year : "";
    data.institution = !isEmpty(data.institution) ? data.institution : "";
    var years = ["Freshman", "Sophmore", "Junior", "Senior"];

    if (Validator.isEmpty(data.id)) {
        errors.id = "ID is required";
    }

    if (Validator.isEmpty(data.year)) {
        if (!years.includes(data.year)) {
            errors.year = "Incorrect year";
        }

        errors.year = "Year is required";
    }

    if (Validator.isEmpty(data.institution)) {
        errors.institution = "Institution is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};