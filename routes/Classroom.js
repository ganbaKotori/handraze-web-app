const router = require("express").Router();
let Classroom = require("../models/classroom.model");
let Student = require("../models/student.model");
let Course = require("../models/course.model");

//Load Input Validation
const validateClassroomInput = require("../validation/classroom-validation");

// @route   POST api/classes
// @desc    Create a class
// @access  Public
router.route("/").post((req, res) => {
  const topic = req.body.topic;
  const cid = req.body.cid;
  const inSession = req.body.inSession;
  const sessionStart = req.body.sessionStart;
  const sessionEnd = req.body.sessionEnd;

  const { errors, isValid } = validateClassroomInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newClassroom = new Classroom ({
    topic,
    cid,
    inSession,
    sessionStart,
    sessionEnd
  });
  newClassroom
    .save()
    .then(() => res.json("Classroom added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

// @route   GET api/classes/:id
// @desc    Get a class
// @access  Public
router.get('/:id', getClassroom, (req, res) => {
  res.json(res.classroom);
});

// @route   GET api/classes
// @desc    Get all classes
// @access  Public
router.route("/").get((req, res) => {
  Classroom.find()
    .then(classrooms => res.json(classrooms))
    .catch(err => res.status(400).json("Error: " + err));
});


// Update a classroom
// Patch updates one thing, put updates everything
// router.patch('/:id', getCourse, async (req, res) => { ... }


// @route   DELETE api/classes/delete/:id
// @desc    Delete a class
// @access  Public
router.delete('/delete/:cid', getClassroom, async (req, res) => {
  try{
    await res.classroom.remove();
    res.json({message: "Successfully deleted classroom!"}) // good
  } catch (err) {
    res.status(500).json({message: err.message})
  }
});


// @route   POST api/classes/student/:studentid
// @desc    Add a student to a classroom
// @access  Public
router.post("/addstudent/:id", (req, res) => {
  Classroom.findOne({ _id: req.body.cid }).then(classroom => {
    Student.count({ _id: req.body.id }, function(err, count) {
      if (count > 0) {
        classroom.students.unshift(req.body.id);
        classroom
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

//------------------------------------------------------------------------------

// getClassroom module: sorts through classrooms to find on by its id
async function getClassroom(req, res, next) {
  let classroom
  try {
    classroom = await Classroom.findById(req.params.id);
    if(classroom == null) {
      return res.status(404).json({message: 'Cannot find classroom.'})
    }
  } catch (err) {
    return res.status(500).json({message: err.message});
  }

  res.classroom = classroom;
  next();
}

module.exports = router;
