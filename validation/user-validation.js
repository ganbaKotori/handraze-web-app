const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
    data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.userName = !isEmpty(data.userName) ? data.userName : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
        errors.name = "Name must be between 2 and 30 characters";
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    if (Validator.isEmpty(data.userName)) {
        errors.userName = "Username field is required";
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.userName = "Password must be at least 6 characters";
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = "Email is required";
    }

    if (Validator.isEmpty(data.firstName)) {
        errors.firstName = "First name is required";
    }

    if (Validator.isEmpty(data.lastName)) {
        errors.lastName = "Last name is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};