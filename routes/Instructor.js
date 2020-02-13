const router = require("express").Router();
let InstructorProfile = require("../models/instructor.model");
let User = require("../models/user.model");

//Load Input Validation
const validateRegisterInput = require("../validation/instructor-validation");

// @route   GET api/instructors
// @desc    Retrieve all instructors
// @access  Public
router.route("/").get((req, res) => {
  InstructorProfile.find()
    .then(instructors => res.json(instructors))
    .catch(err => res.status(400).json("Error: " + err));
});

// @route   POST api/instructors
// @desc    Create instructor profile
// @access  Public
router.route("/").post((req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const profileFields = {};

  profileFields.department = req.body.department;
  profileFields.user = req.body.id;

  const newInstructorProfile = new InstructorProfile(profileFields);

  newInstructorProfile
    .save()
    .then(() => res.json("Instructor profile added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;

//console.log("request was made: " + req.url);
