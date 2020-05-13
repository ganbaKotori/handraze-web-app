const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = "";

    data.notes = !isEmpty(data.notes) ? data.notes : "";
    data.noteDate = !isEmpty(data.noteDate) ? data.noteDate : "";

    if (Validator.isEmpty(data.notes)) {
        errors = "Notes are required";
    }

    if (Validator.isEmpty(data.noteDate)) {
        errors = "Date of peerNotes is required";
    }

    return {
        errors,
        isValid: errors == ""
    };
};