const router = require("express").Router();
let StudentProfile = require("../models/student.model");
let User = require("../models/user.model");

//Load Input Validation
const validateStudentInput = require("../validation/student-validation");

// @route   GET api/students
// @desc    Retrieve all students
// @access  Public
router.route("/").get((req, res) => {
  StudentProfile.find()
    .then(students => res.json(students))
    .catch(err => res.status(400).json("Error: " + err));
});

// @route   POST api/students
// @desc    Create a student profile
// @access  Public
router.route("/").post((req, res) => {
  const { errors, isValid } = validateStudentInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  const profileFields = {};

  profileFields.year = req.body.year;
  profileFields.institution = req.body.institution;
  profileFields.user = req.body.id;

  const newStudentProfile = new StudentProfile(profileFields);

  newStudentProfile
    .save()
    .then(() => res.json("Student profile added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
//console.log("request was made: " + request.url);
