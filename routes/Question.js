const express = require("express");
const router = express.Router();
//const Question = require('../models/question.model');

// @route   GET api/question/:id
// @desc    Get a question by its id
// @access  Public
router.get("/", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch {
    res.status(500).json({ message: err.message });
  }
});

// @route   GET api/question/
// @desc    Get all question
// @access  Public
router.get("/:id", getQuestion, (req, res) => {
  res.json(res.question);
});

// @route   POST api/question/add
// @desc    Create a new question
// @access  Public
router.post("/add", async (req, res) => {
  const question = new Question({
    question: req.body.question, // in POST - "user": "/user/[username]"
    dateSubmitted: req.body.dateSubmitted
  });
  try {
    const newQuestion = await question.save();
    res.status(201).json(newQuestion); // good - send new users info
  } catch (err) {
    res.status(400).json({ message: err.message }); // user input error
  }
});

// @route   PATCH api/question/update/:id
// @desc    Update a question by its id
// @access  Public
router.patch("/update/:id", getQuestion, async (req, res) => {
  if (req.body.question != null) {
    res.question.question = req.body.question;
  }

  try {
    const updatedQuesiton = await res.question.save(); // give updated version
    res.json(updatedQuesiton); // good - sends users updated info
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   POST api/question/delete/:instructorid
// @desc    Delete question by instructor id
// @access  Public
router.delete("/delete/:id", getQuestion, async (req, res) => {
  try {
    await res.question.remove();
    res.json({ message: "Successfully deleted question!" }); // good
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//------------------------------------------------------------------------------

// getQuestion module: sorts through questions to find one by its id
async function getQuestion(req, res, next) {
  let question;
  try {
    question = await Question.findById(req.params.id);
    if (question == null) {
      return res.status(404).json({ message: "Cannot find question." });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.question = question;
  next();
}

module.exports = router;
