const router = require("express").Router();
let StudentProfile = require("../models/student.model");
let Course = require("../models/course.model");
let User = require("../models/user.model");


// Load Input Validation
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

// @route   GET api/students/:id
// @desc    Get a student's profile
// @access  Public
router.get('/:id', getStudent, (req, res) => {
  res.json(res.student); // good - responds with user's info
});

// @route  GET api/students/courses/:id
// @desc   Get all classes a student is registered to
// @access Public
router.get('/courses/:id', getStudent, (req, res) => {
  res.json(res.student); // gets a single student with that ID

  // Call the attribute courses

});

// @route   DELETE api/students/:id
// @desc    Delete a student profile
// @access  Public
router.delete('/delete/:id', getStudent, async (req, res) => {
  try{
    await res.student.remove();
    res.json({message: "Successfully deleted student!"}) // good
  } catch (err) {
    res.status(500).json({message: err.message})
  }
});

//------------------------------------------------------------------------------

// getStudent module: sorts through students to find one by its id
async function getStudent(req, res, next) {
  let student
  try {
    student = await Student.findById(req.params.id);
    if(student == null) {
      return res.status(404).json({message: 'Cannot find student.'})
    }
  } catch (err) {
    return res.status(500).json({message: err.message});
  }

  res.student = student;
  next();
}

module.exports = router;
