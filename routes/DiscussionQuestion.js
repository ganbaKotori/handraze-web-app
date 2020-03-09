const express = require('express');
const router = express.Router();
const DiscussionQuestion = require('../models/discussion.model');
const Question = require('../models/question.model');

// @route   GET api/discussion/
// @desc    Get all discussion questionss
// @access  Public
router.get('/', async (req, res) => {
  try {
    const discussionQuestions = await DiscussionQuestion.find();
    res.json(discussionQuestions);
  } catch {
    res.status(500).json({message: err.message});
  }
});

// @route   GET api/discussion/:id
// @desc    Get a discussion question by its id
// @access  Public
router.get('/:id', getDiscussionQuestion, (req, res) => {
  res.json(res.discussionQuestion);
});

// TODO: Have GET display Question and DiscussionQuestion info together

// @route   POST api/discussion/
// @desc    Create a discussion question
// @access  Public
router.post('/', async (req, res) => {
  const discussionQuestion = new DiscussionQuestion({
    question: req.body.question, // in POST - "question": "/question/[question]"
    topic: req.body.topic
  })
  try{
    const newDiscussionQuestion = await discussionQuestion.save();
    res.status(201).json(newDiscussionQuestion); // good - send new users info
  } catch (err) {
    res.status(400).json({message: err.message}); // user input error
  }
});

//TODO: Add PATCH for discussionQuestion, not sure how to patch both Question and DiscussionQuestion in one request
// router.patch('/:id', getDiscussionQuestion, async (req, res) => { ... }

// @route   DELETE api/discussion/delete/:id
// @desc    Delete discussion question by its id
// @access  Public
router.delete('/delete/:id', getDiscussionQuestion, async (req, res) => {
  try{
    await res.discussionQuestion.remove();
    res.json({message: "Successfully deleted discussion question!"}) // good
  } catch (err) {
    res.status(500).json({message: err.message})
  }
});

//------------------------------------------------------------------------------

// getDiscussionQuestion module: sorts through discussion questions to find on by its id
async function getDiscussionQuestion(req, res, next) {
  let discussionQuestion
  try {
    discussionQuestion = await DiscussionQuestion.findById(req.params.id);
    if(discussionQuestion == null) {
      return res.status(404).json({message: 'Cannot find discussion question.'})
    }
  } catch (err) {
    return res.status(500).json({message: err.message});
  }

  res.discussionQuestion = discussionQuestion;
  next();
}

module.exports = router;
