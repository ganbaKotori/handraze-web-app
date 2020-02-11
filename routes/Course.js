const router = require("express").Router();
let Course = require("../models/course.model");

// @route   POST api/courses
// @desc    Create a course
// @access  Public
router.route("/").post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const dayOfWeek = req.body.dayOfWeek;
  const classDuration = req.body.classDuration;
  const location = req.body.location;
  const sectionNumber = req.body.sectionNumber;

  /*function Enum(){
      for(var i in arguments){
        this[arguments[i]] = i;
      }
    }
    var dayOfWeek = new Enum(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);*/

  const newCourse = new Course({
    title,
    description,
    dayOfWeek,
    classDuration,
    location,
    sectionNumber
  });
  newCourse
    .save()
    .then(() => res.json("Course added!"))
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

// @route   POST api/courses/student
// @desc    Add a student to a course
// @access  Public
router.post("/student", (req, res) => {
  Course.findOne({ _id: req.body.cid }).then(course => {
    // Add to exp array
    course.students.unshift(req.body.id);

    course.save().then(course => res.json(course));
  });
});

module.exports = router;
