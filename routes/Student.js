const router = require("express").Router();
let StudentProfile = require("../models/student.model");
let Course = require("../models/course.model");
const auth = require("../middleware/auth");
const validateStudentInput = require("../validation/student-validation"); // Load Input Validation

// @route   POST api/students
// @desc    Create a student profile
// @access  Private
router.route("/").post([auth], async (req, res) => {
  const { errors, isValid } = validateStudentInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const newStudentProfile = new StudentProfile({
    year: req.body.year,
    institution: req.body.institution,
    user: req.user.id
  });
  newStudentProfile
    .save()
    .then(() => res.json("Student profile added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

// @route   GET api/students
// @desc    Retrieve all students
// @access  Public
router.route("/").get(async (req, res) => {
  try {
    const studentProfiles = await StudentProfile.find()
      .populate("user", ["firstName", "lastName"])
      .populate("course", ["title", "description", "classStart", "classEnd","dayOfWeek"]);
    res.json(studentProfiles);
  } catch (error) {
    res.status(400).json("Error: " + error);
  }
});

// @route   DELETE api/students/:id
// @desc    Delete a student profile
// @access  Private
router.delete("/delete/:id", getStudent, async (req, res) => {
  try {
    await res.student.remove();
    res.json({ message: "Successfully deleted student!" }); // good
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   GET api/students/me
// @desc    Retrieve current student profile
// @access  Private
router.route("/me").get(auth, async (req, res) => {
  try {
    const profile = await StudentProfile.findOne({
      user: req.user.id
    })
      .populate("user", ["firstName", "lastName"])
      .populate("course", ["title", "description","classStart", "classEnd","dayOfWeek"]);
    if (!profile) {
      return res
        .status(400)
        .json({ msg: "There is no Student Profile for this user" });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).send(error);
  }
});


// @route   GET api/students/user/:user_id
// @desc    Retrieve student profile by user ID
// @access  Public
router.route("/user/:user_id").get(async (req, res) => {
  try {
    const studentProfiles = await StudentProfile.findOne({
      user: req.params.user_id
    })
      .populate("user", ["firstName", "lastName","avatar"])
      .populate("course", ["title", "description"]);
    res.json(studentProfiles);
  } catch (error) {
    res.status(400).json("Error: " + error);
  }
});



//@route    PUT api/student/courses
//@desc     Add course
//@access   Private
router.put("/courses", auth, async (req, res) => {
  try {
    const studentProfile = await StudentProfile.findOne({ user: req.user.id });
    const course = await Course.findOne({ code: req.body.code });
    if (course) {
      studentProfile.course.unshift(course._id);
      await studentProfile.save();
    }
    res.json(studentProfile);
  } catch (error) {
    res.json(error.message);
  }
});

// @route   GET api/students/:id
// @desc    Get a student's profile
// @access  Public
router.get("/:id", getStudent, (req, res) => {
  res.json(res.student); // good - responds with user's info
});

// @route  GET api/students/courses/:id
// @desc   Get all classes a student is registered to
// @access Public
router.get("/courses/:id", getStudent, (req, res) => {
  res.json(res.student); // gets a single student with that ID

  // Call the attribute courses
});



//------------------------------------------------------------------------------

// getStudent module: sorts through students to find one by its id
async function getStudent(req, res, next) {
  let student;
  try {
    student = await Student.findById(req.params.id);
    if (student == null) {
      return res.status(404).json({ message: "Cannot find student." });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.student = student;
  next();
}

module.exports = router;