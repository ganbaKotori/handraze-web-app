const router = require("express").Router();
let PeerNote = require("../models/peer.note.model");
let Course = require("../models/course.model");
const auth = require("../middleware/auth");

// @route   POST api/discussion/
// @desc    Create a discussion question
// @access  PublicS
router.route("/").post([auth], async (req, res) => {
  try {
    let peerNoteFields = {
      text: req.body.text,
      user: req.user.id,
    };
    if (req.body.course) {
      console.log("theres a course for this peer note");
      const course = await Course.findById({
        _id: req.body.course,
      });
      console.log(course);
      peerNoteFields.course = req.body.course;
    }
    const peerNote = new PeerNote(peerNoteFields);
    await peerNote.save().then(async (result) => {
      res.json(result);
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json(err.message);
  }
});

/*
// @route   GET api/peernote/
// @desc    Get peer notes
// @access  Public
router.route("/").get((req, res) => {
  PeerNotes.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + errs));
});

// @route   POST api/peernote/add
// @desc    Create a new peer note
// @access  Public
router.route("/add").post((req, res) => {
  const notes = req.body.notes;

  const newPeerNotes = new PeerNotes(questionfields);

  new PeerNotes.save()
    .then(() => res.json("Peer Notes added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
console.log("request was made: " + request.url);
*/

module.exports = router;
