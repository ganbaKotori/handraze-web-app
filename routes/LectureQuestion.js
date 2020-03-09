const express = require('express');
const router = express.Router();
const LectureQuestion = require('../models/lecture.model');
const Question = require('../models/question.model');

// @route   POST api/lecture/add
// @desc    Create a new lecture question
// @access  Public
router.post('/add', async (req, res) => {
  const lectureQuestion = new LectureQuestion({
    question: req.body.question, // in POST - "question": "/question/[question]"
    topic: req.body.topic
  })
  try{
    const newLectureQuestion = await lectureQuestion.save();
    res.status(201).json(newLectureQuestion); // good - send new users info
  } catch (err) {
    res.status(400).json({message: err.message}); // user input error
  }
});

// @route   GET api/lecture
// @desc    Get all lecture questions
// @access  Public
router.get('/', async (req, res) => {
  try {
    const lectureQuestions = await LectureQuestion.find();
    res.json(lectureQuestions);
  } catch {
    res.status(500).json({message: err.message});
  }
});

// @route   GET api/lecture/:id
// @desc    Get a lecture question by its id
// @access  Public
router.get('/:id', getLectureQuestion, (req, res) => {
  res.json(res.lectureQuestion);
});

// TODO: Have GET display Question and LectureQuestion info together

//TODO: Add PATCH for lectureQuestion, not sure how to patch both Question and LectureQuestion in one request
// router.patch('/:id', getLectureQuestion, async (req, res) => { ... }

// Delete LectureQuestion by lectureQuestion id
router.delete('/delete/:id', getLectureQuestion, async (req, res) => {
  try{
    await res.lectureQuestion.remove();
    res.json({message: "Successfully deleted lecture question!"}) // good
  } catch (err) {
    res.status(500).json({message: err.message})
  }
});

//------------------------------------------------------------------------------

// getLectureQuestion module: sorts through lectuer questions to find one by its id
async function getLectureQuestion(req, res, next) {
  let lectureQuestion
  try {
    lectureQuestion = await LectureQuestion.findById(req.params.id);
    if(lectureQuestion == null) {
      return res.status(404).json({message: 'Cannot find lecture question.'})
    }
  } catch (err) {
    return res.status(500).json({message: err.message});
  }

  res.lectureQuestion = lectureQuestion;
  next();
}

module.exports = router;
