const router = require("express").Router();
let StudentProfile = require("../models/student.model");
const auth = require("../middleware/auth");
const Courses = require("../models/course.model");
let Course = require("../models/course.model");
let User = require("../models/user.model");

// Load Input Validation
const validateStudentInput = require("../validation/student-validation");

// @route   GET api/students/me
// @desc    Retrieve current student profile
// @access  Private
router.route("/me").get(auth, async (req, res) => {
  try {
    const profile = await StudentProfile.findOne({
      user: req.user.id
    }); //.populate("user", ["firstName", "lastName"]);

    if (!profile) {
      return res
        .status(400)
        .json({ msg: "There is no Student Profile for this user" });
    }
    if (profile) {
      profile.populate("user", ["firstName", "lastName"]);
      profile.populate("course", ["title", "description"]);
    }

    //res.json(profile);
    var courses2 = [];
    if (profile.course) {
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
    }

    //var course3 = JSON.stringify(courses2);
    //console.log(courses2);
    //profile.put(courses2);
    var studentProfile = { profile: profile, courses: courses2 };

    console.log(studentProfile);
    res.json(studentProfile);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error);
  }
});

// @route   GET api/students
// @desc    Retrieve all students
// @access  Public
router.route("/").get(async (req, res) => {
  try {
    const studentProfiles = await StudentProfile.find()
      .populate("user", ["firstName", "lastName"])
      .populate("course", ["title", "description"]);
    console.log(studentProfiles);
    res.json(studentProfiles);
  } catch (error) {
    res.status(400).json("Error: " + error);
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
      .populate("user", ["firstName", "lastName"])
      .populate("course", ["title", "description"]);
    console.log(studentProfiles);
    res.json(studentProfiles);
  } catch (error) {
    res.status(400).json("Error: " + error);
  }
});

// @route   POST api/student/enroll
// @desc    Add a new course to student profile
// @access  Public

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
  try {
    const studentProfile = await StudentProfile.findOne({ user: req.user.id });
    console.log("student profile: ");
    console.log(req.body.code);
    const course = await Course.findOne({ code: req.body.code });
    console.log(course);
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

// @route   DELETE api/students/:id
// @desc    Delete a student profile
// @access  Public
router.delete("/delete/:id", getStudent, async (req, res) => {
  try {
    await res.student.remove();
    res.json({ message: "Successfully deleted student!" }); // good
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
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
