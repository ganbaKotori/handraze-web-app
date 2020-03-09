const router = require("express").Router();
let StudentProfile = require("../models/student.model");
const auth = require("../middleware/auth");
const Courses = require("../models/course.model");

//Load Input Validation
const validateStudentInput = require("../validation/student-validation");

// @route   GET api/students/me
// @desc    Retrieve current student profile
// @access  Private
router.route("/me").get(auth, async (req, res) => {
  try {
    const profile = await await StudentProfile.findOne({ user: req.user.id }); //.populate("user", ["firstName", "lastName"]);

    /*if (!profile) {
      return res
        .status(400)
        .json({ msg: "There is no Student Profile for this user" });
    }*/

    //res.json(profile);
    var courses2 = [];
    for (var key in profile.course) {
      //console.log(profile.course[key]);
      /*const course = Courses.findOne(profile.course[key]).then(result => {
        //console.log(result);
        courses2.push(result);
      });*/
      const course = await Courses.findOne(profile.course[key]);
      //console.log(course);
      courses2.push(course);
    }
    //var course3 = JSON.stringify(courses2);
    //console.log(courses2);
    //profile.put(courses2);
    var studentProfile = { profile: profile, courses: courses2 };

    console.log(studentProfile);
    res.json(studentProfile);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

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
router.route("/").post([auth], async (req, res) => {
  //const { errors, isValid } = validateStudentInput(req.body);

  //if (!isValid) {
  //  return res.status(400).json(errors);
  //}
  const profileFields = {};

  profileFields.year = req.body.year;
  profileFields.institution = req.body.institution;
  profileFields.user = req.user.id;

  const newStudentProfile = new StudentProfile(profileFields);

  newStudentProfile
    .save()
    .then(() => res.json("Student profile added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

//@route    PUT api/student/courses
//@desc     Add profile experience
//@access   Private
router.put("/courses", auth, async (req, res) => {
  const newCourse = {
    id: req.body.cid
  };

  try {
    const studentProfile = await StudentProfile.findOne({ user: req.user.id });
    studentProfile.course.unshift(req.body.cid);
    await studentProfile.save();
    res.json(studentProfile);
  } catch (error) {
    res.json(error.message);
  }
});

// @route   GET api/students
// @desc    Create a student profile
// @access  Public
router.get("/:id", getStudent, (req, res) => {
  res.json(res.student); // good - responds with user's info
});

// @route   DELETE api/students
// @desc    Delete student profile
// @access  Public
router.delete("/:id", getStudent, async (req, res) => {
  try {
    await res.student.remove();
    res.json({ message: "Successfully deleted student!" }); // good
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//fucntion to get student profile
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
