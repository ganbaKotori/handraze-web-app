const express = require('express');
const router = express.Router();
const Question = require('../models/question.model');

// Get all questions
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch {
    res.status(500).json({message: err.message});
  }
});

// Get a question
router.get('/:id', getQuestion, (req, res) => {
  res.json(res.question);
});

// Add question
router.post('/add', async (req, res) => {
  const question = new Question({
    question: req.body.question, // in POST - "user": "/user/[username]"
    dateSubmitted: req.body.dateSubmitted
  })
  try{
    const newQuestion = await question.save();
    res.status(201).json(newQuestion); // good - send new users info
  } catch (err) {
    res.status(400).json({message: err.message}); // user input error
  }
});

// Edit a question
router.patch('/:d', getQuestion, async (req, res) => {
  if(req.body.question != null) {
    res.question.question = req.body.question;
  }

  try {
    const updatedQuesiton = await res.question.save(); // give updated version
    res.json(updatedQuesiton); // good - sends users updated info
  } catch (err) {
    res.status(500).json({message: err.message})
  }
});

// Delete question by isntructor id
router.delete('/delete/:id', getQuestion, async (req, res) => {
  try{
    await res.question.remove();
    res.json({message: "Successfully deleted question!"}) // good
  } catch (err) {
    res.status(500).json({message: err.message})
  }
});

//------------------------------------------------------------------------------

async function getQuestion(req, res, next) {
  let question
  try {
    question = await Question.findById(req.params.id);
    if(question == null) {
      return res.status(404).json({message: 'Cannot find question.'})
    }
  } catch (err) {
    return res.status(500).json({message: err.message});
  }

  res.question = question;
  next();
}

module.exports = router;
