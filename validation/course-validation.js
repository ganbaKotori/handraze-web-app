const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.classTitle = !isEmpty(data.classTitle) ? data.classTitle : "";
    data.classDescription = !isEmpty(data.classDescription) ? data.classDescription : "";
    data.courseStart = !isEmpty(data.courseStart) ? data.courseStart : "";
    data.weekDay = !isEmpty(data.weekDay) ? data.weekDay : "";
    data.classDuration = !isEmpty(data.classDuration) ? data.classDuration : "";
    data.location = !isEmpty(data.location) ? data.location : "";
    data.sectionNumber = !isEmpty(data.sectionNumber) ? data.sectionNumber : "";
    var dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if (!Validator.isLength(data.classTitle, { min: 10, max: 30 })) {
        errors.classTitle = "Class title must be between 10 and 30 characters";
    }

    if (Validator.isEmpty(data.classDescription)) {
        errors.classDescription = "Class descripton is required";
    }

    if (Validator.isEmpty(data.courseStart)) {
        errors.courseStart = "Course start is required";
    }

    if (Validator.isEmpty(data.weekDay)) {
        if (!dayOfWeek.includes(data.weekDay)) {
            errors.weekDay = "Incorrect day of the week";
        }

        errors.weekDay = "Day of the week is required";
    }

    if (Validator.isEmpty(data.classDuration)) {
        errors.classDuration = "Class Duration is required";
    }

    if (Validator.isEmpty(data.location)) {
        errors.location = "Location is required";
    }

    if (Validator.isEmpty(data.sectionNumber)) {
        if (!isNaN(data.sectionNumber)) {
            errors.sectionNumber = "Section number must be a number";
        }
        errors.sectionNumber = "Section number is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};