const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = "";

    data.description = !isEmpty(data.description) ? data.description : "";
    data.question = !isEmpty(data.question) ? data.question : "";

    if (!Validator.isLength(data.question, { min: 5, max: 150 })) {
        errors = "Question must be between 5 and 150 characters";
    }

    if (Validator.isEmpty(data.question)) {
        errors = "Enter your question";
    }

    if (Validator.isEmpty(data.description)) {
        errors = "Enter your description";
    }


    return {
        errors,
        isValid: errors == ""
    };
};