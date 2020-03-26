const express = require("express");
const router = express.Router();
const DiscussionQuestion = require("../models/discussion.model");
const Course = require("../models/course.model");
const User = require("../models/user.model");

//const Answer = require("../models/answer.model");

// @route   GET api/discussion/
// @desc    Get all discussion questionss
// @access  Public
router.get("/", async (req, res) => {
  try {
    const discussionQuestions = await DiscussionQuestion.find();
    res.json(discussionQuestions);
  } catch {
    res.status(500).json({ message: err.message });
  }
});

// @route   GET api/discussion/:id
// @desc    Get a discussion question by its id
// @access  Public
router.get("/:id", getDiscussionQuestion, (req, res) => {
  res.json(res.discussionQuestion);
});

// TODO: Have GET display Question and DiscussionQuestion info together

// @route   POST api/discussion/
// @desc    Create a discussion question
// @access  Public
router.post("/", async (req, res) => {
  try {
    const course = await Course.findOne({ _id: req.body.course });
    const user = await User.findOne({ _id: req.body.user });
    const name = user.firstName + " " + user.lastName;
    const discussionQuestion = new DiscussionQuestion({
      question: req.body.question, // in POST - "question": "/question/[question]"
      description: req.body.description,
      user: req.body.user,
      name: name
    });
    if (course) {
      await discussionQuestion.save().then(question => {
        course.discussion.unshift(question._id);
        course.save();
        res.json(course);
      });
    }
  } catch (err) {
    res.status(400).json({ message: err.message }); // user input error
  }
});

//TODO: Add PATCH for discussionQuestion, not sure how to patch both Question and DiscussionQuestion in one request
// router.patch('/:id', getDiscussionQuestion, async (req, res) => { ... }

// @route   DELETE api/discussion/delete/:id
// @desc    Delete discussion question by its id
// @access  Public
router.delete("/delete/:id", getDiscussionQuestion, async (req, res) => {
  try {
    await res.discussionQuestion.remove();
    res.json({ message: "Successfully deleted discussion question!" }); // good
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/*
// @route   GET api/answer/:id
// @desc    Get a single answer
// @access  Public
router.get("/:id", getAnswer, (req, res) => {
  res.json(res.answer);
});
*/

/*
// @route   POST api/answer/add/
// @desc    Create an answer
// @access  Public
router.post("/add", async (req, res) => {
  const answer = new Answer({
    answer: req.body.answer,
    dateSubmitted: req.body.dateSubmitted
  });
  try {
    const newAnswer = await answer.save();
    res.status(201).json(newAnswer); // good - send new users info
  } catch (err) {
    res.status(400).json({ message: err.message }); // user input error
  }
});

router.delete("/delete/:id", getAnswer, async (req, res) => {
  try {
    await res.answer.remove();
    res.json({ message: "Successfully deleted answer!" }); // good
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
*/

//------------------------------------------------------------------------------

// getDiscussionQuestion module: sorts through discussion questions to find on by its id
async function getDiscussionQuestion(req, res, next) {
  let discussionQuestion;
  try {
    discussionQuestion = await DiscussionQuestion.findById({
      _id: req.params.id
    });
    if (discussionQuestion == null) {
      return res
        .status(404)
        .json({ message: "Cannot find discussion question." });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.discussionQuestion = discussionQuestion;
  next();
}

module.exports = router;
