const router = require("express").Router();
let InstructorProfile = require("../models/instructor.model");
let User = require("../models/user.model");

//Load Input Validation
const validateRegisterInput = require("../validation/instructor-validation");

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

// @route   GET api/instructors
// @desc    Get all instructors
// @access  Public
router.route("/").get((req, res) => {
  InstructorProfile.find()
    .then(instructors => res.json(instructors))
    .catch(err => res.status(400).json("Error: " + err));
});

// @route   GET api/instructors/:id
// @desc    Get an instructor by its id
// @access  Public
router.get("/:id", getInstructor, (req, res) => {
  res.json(res.instructor);
});

//TODO: Add PATCH for instructor, not sure how to patch both User and Instructor in one request
// router.patch('/:id', getInstructor, async (req, res) => { ... }

// @route   DELETE api/instructors/delete/:id
// @desc    Delete an instructor by its id
// @access  Public
router.delete("/delete/:id", getInstructor, async (req, res) => {
  try {
    await res.instructor.remove();
    res.json({ message: "Successfully deleted instructor!" }); // good
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//------------------------------------------------------------------------------

// getInstructor module: sorts through instructors to find one by its id
async function getInstructor(req, res, next) {
  let instructor;
  try {
    instructor = await Instructor.findById(req.params.id);
    if (instructor == null) {
      return res.status(404).json({ message: "Cannot find instructor." });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.instructor = instructor;
  next();
}

module.exports = router;
