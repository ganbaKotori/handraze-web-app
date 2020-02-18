// FIXME: Can't create a new question in POST using "question": "/question/[question]"

const express = require('express');
const router = express.Router();
const DiscussionQuestion = require('../models/discussion.model');
const Question = require('../models/question.model');

// Get all discussionQuestions
router.get('/', async (req, res) => {
  try {
    const discussionQuestions = await DiscussionQuestion.find();
    res.json(discussionQuestions);
  } catch {
    res.status(500).json({message: err.message});
  }
});

// Get a discussionQuestion
router.get('/:id', getDiscussionQuestion, (req, res) => {
  res.json(res.discussionQuestion);
});

// TODO: Have GET display Question and DiscussionQuestion info together

// Add DiscussionQuestion
router.post('/add', async (req, res) => {
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

// Delete DiscussionQuestion by discussionQuestion id
router.delete('/delete/:id', getDiscussionQuestion, async (req, res) => {
  try{
    await res.discussionQuestion.remove();
    res.json({message: "Successfully deleted discussion question!"}) // good
  } catch (err) {
    res.status(500).json({message: err.message})
  }
});

//------------------------------------------------------------------------------

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
