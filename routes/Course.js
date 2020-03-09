const router = require("express").Router();
let Course = require("../models/course.model");
let Student = require("../models/student.model");

//Load Input Validation
const validateCourseInput = require("../validation/course-validation");

// @route   GET api/courses/:id
// @desc    Create a course
// @access  Public
router.get("/:id", getCourse, (req, res) => {
  res.json(res.course);
});

// @route   POST api/courses
// @desc    Create a course
// @access  Public
router.route("/").post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const dayOfWeek = req.body.dayOfWeek;
  const classStart = req.body.classStart;
  const location = req.body.location;
  const sectionNumber = req.body.sectionNumber;
  const classDuration = req.body.classDuration;

  const { errors, isValid } = validateCourseInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  var code = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 5; i++) {
    code += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  const newCourse = new Course({
    title,
    description,
    dayOfWeek,
    classDuration,
    location,
    sectionNumber,
    code,
    classStart
  });
  newCourse
    .save()
    .then(result => res.json(result))
    .catch(err => res.status(400).json("Error: " + err));
});

// @route   GET api/courses
// @desc    Get all courses
// @access  Public
router.route("/").get((req, res) => {
  Course.find()
    .then(courses => res.json(courses))
    .catch(err => res.status(400).json("Error: " + err));
});

// Update a course
// Patch updates one thing, put updates everything
// router.patch('/:id', getCourse, async (req, res) => { ... }

// Delete a course
router.delete("/delete/:id", getCourse, async (req, res) => {
  try {
    await res.course.remove();
    res.json({ message: "Successfully deleted course!" }); // good
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   POST api/courses/student
// @desc    Add a student to a course
// @access  Public
router.post("/student", (req, res) => {
  Course.findOne({ _id: req.body.cid }).then(course => {
    Student.count({ _id: req.body.id }, function(err, count) {
      if (count > 0) {
        course.students.unshift(req.body.id);
        course
          .save()
          .then(course => res.json(course))
          .catch(err => res.status(400).json("Error: " + err));
      } else {
        console.log("Student not found!");
        res.status(400).json("Error: " + err);
      }
    });
  });
});

async function getCourse(req, res, next) {
  let course;
  try {
    course = await Course.findById(req.params.id);
    if (course == null) {
      return res.status(404).json({ message: "Cannot find course." });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.course = course;
  next();
}

module.exports = router;
