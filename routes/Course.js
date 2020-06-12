const router = require("express").Router();
let Course = require("../models/course.model");
let Student = require("../models/student.model");
let Instructor = require("../models/instructor.model");

//Load Input Validation
const validateCourseInput = require("../validation/course-validation");

// @route   POST api/courses
// @desc    Create a course
// @access  Public
router.route("/").post(async (req, res) => {
  const instructor = req.body.instructor;
  const title = req.body.title;
  const description = req.body.description;
  const dayOfWeek = req.body.dayOfWeek;
  const classEnd = req.body.classEnd;
  const classStart = req.body.classStart;
  const location = req.body.location;
  const sectionNumber = req.body.sectionNumber;

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
    instructor,
    title,
    description,
    dayOfWeek,
    location,
    sectionNumber,
    code,
    classEnd,
    classStart
  });
  newCourse
    .save()
    .then(async result => {
      try {
        console.log(newCourse._id);
        const instructorProfile = await Instructor.findOne({
          _id: req.body.instructor
        });
        instructorProfile.course.unshift(newCourse._id);
        await instructorProfile.save().then(result => {
          console.log(result);
          console.log("course added to instructor profile");
          console.log("course added!");
        });
        //res.json(instructorProfile);
        res.json(result);
      } catch (error) {
        res.json(error.message);
      }
    })
    .catch(err => res.status(400).json("Error: " + err));
});

// @route   GET api/courses/:id
// @desc    Get a course by its id
// @access  Public
router.get("/:id", getCourse, (req, res) => {
  res.json(res.course);
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

// @route   DELETE api/courses/:id
// @desc    Delete a course by its id
// @access  Public
router.delete("/delete/:id", getCourse, async (req, res) => {
  const course = res.course;

    const student = Student.deleteOne({_id: course.id});
    const root = Course.deleteOne({_id: course.id});

    Promise.all([student, root]).then(() => {
      res.status(200).json({message: 'Course deleted!'});
    }).catch(err => {
      res.status(500).json("Error: " + err);
    });
});

// @route   POST api/courses/student/:studentid
// @desc    Add a student to a course by the student id
// @access  Public
/*
router.put("/student/:id", async (req, res) => {
  try {
    const course = await Course.findOne({ _id: req.params.id });
    await Student.findOne({ _id: req.body.student }).then(student => {
      course.students.unshift(student._id);
      course.save();
      res.json(course);
    });
  } catch (error) {
    res.status(400).json("Error adding student: " + error);
  }
});
*/

//------------------------------------------------------------------------------
// getCourse module: sorts through courses to find on by its id
async function getCourse(req, res, next) {
  var course;
  try {  
    course = await Course.findById({
      _id: req.params.id
    }).populate("discussion", [
      "question",
      "description",
      "dateSubmitted",
      "name",
      "_id"
    ]).populate({ 
      path: 'students',
      populate: {
        path: 'user',
        model: 'User'
      } 
   })
    if (course == null) {
      return res.status(404).json({ message: "Cannot find course." });
    }

    console.log(course.students)
  } catch (err) {
    console.log(err.message)
    return res.status(500).json({ message: err.message });
  }

  res.course = course;
  next();
}

module.exports = router;
