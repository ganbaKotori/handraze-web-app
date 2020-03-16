const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.description = !isEmpty(data.description) ? data.description : "";
    data.question = !isEmpty(data.question) ? data.question : "";

    if (!Validator.isLength(data.question, { min: 10, max: 150 })) {
        errors.question = "Question must not exceed 150 characters";
    }

    if (Validator.isEmpty(data.dateSubmitted)) {
        errors.dateSubmitted = "Date submitted is required";
    }
    
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};