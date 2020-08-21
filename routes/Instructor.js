const router = require("express").Router();
let InstructorProfile = require("../models/instructor.model");
const User = require("../models/user.model");
const auth = require("../middleware/auth");

//Load Input Validation
const validateInstructorInput = require("../validation/instructor-validation");

// @route   POST api/instructors
// @desc    Create instructor profile
// @access  Public
router.route("/").post([auth], async (req, res) => {
  const { errors, isValid } = validateInstructorInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const profileFields = {
    department: req.body.department,
    institution: req.body.institution,
    user: req.user.id,
  };

  let profile = await InstructorProfile.findOneAndUpdate(
    { user: req.user.id },
    { $set: profileFields },
    { new: true, upsert: true }
  )
    .then(() => res.json("Instructor profile added/updated!"))
    .catch((err) => res.status(400).json(err.message));
});

// @route   GET api/instructors/me
// @desc    Retrieve current instructor profile
// @access  Private
router.route("/me").get(auth, async (req, res) => {
  try {
    const profile = await InstructorProfile.findOne({
      user: req.user.id
    })
      .populate("user", ["firstName", "lastName"])
      .populate("course", ["title", "description", "code",  "classStart", "classEnd","dayOfWeek"]);

    if (!profile) {
      return res
        .status(400)
        .json({ msg: "There is no Instructor Profile for this user" });
    }
    res.json(profile);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error);
  }
});

// @route   GET api/instructors
// @desc    Get all instructors
// @access  Public
router.route("/").get((req, res) => {
  InstructorProfile.find()
    .populate("user", ["firstName", "lastName"])
    .then(instructors => res.json(instructors))
    .catch(err => res.status(400).json("Error: " + err));
});

// @route   GET api/instructors/:id
// @desc    Get an instructor by its id
// @access  Public
router.get("/:id", getInstructor, (req, res) => {
  res.json(res.instructor);
});

// @route   GET api/instructor/user/:user_id
// @desc    Retrieve instructor profile by user ID
// @access  Public
router.route("/user/:user_id").get(async (req, res) => {
  try {
    const instructorProfiles = await InstructorProfile.findOne({
      user: req.params.user_id
    })
      .populate("user", ["firstName", "lastName", "avatar"])
      .populate("course", ["title", "description",  "classStart", "classEnd","dayOfWeek"]);
    console.log(instructorProfiles);
    res.json(instructorProfiles);
  } catch (error) {
    res.status(400).json("Error: " + error);
  }
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
