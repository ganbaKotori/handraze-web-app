const express = require('express');
const router = express.Router();
const Answer = require('../models/answer.model');

// Get all answers
router.get('/', async (req, res) => {
  try {
    const answers = await Answer.find();
    res.json(answers);
  } catch {
    res.status(500).json({message: err.message});
  }
});

// Get a answer
router.get('/:id', getAnswer, (req, res) => {
  res.json(res.answer);
});

// Add answer
router.post('/add', async (req, res) => {
  const answer = new Answer({
    answer: req.body.answer,
    dateSubmitted: req.body.dateSubmitted
  })
  try{
    const newAnswer = await answer.save();
    res.status(201).json(newAnswer); // good - send new users info
  } catch (err) {
    res.status(400).json({message: err.message}); // user input error
  }
});

//TODO: Add PATCH for answer
// router.patch('/:id', getAnswer, async (req, res) => { ... }

// Delete answer by isntructor id
router.delete('/delete/:id', getAnswer, async (req, res) => {
  try{
    await res.answer.remove();
    res.json({message: "Successfully deleted answer!"}) // good
  } catch (err) {
    res.status(500).json({message: err.message})
  }
});

//------------------------------------------------------------------------------

async function getAnswer(req, res, next) {
  let answer
  try {
    answer = await Answer.findById(req.params.id);
    if(answer == null) {
      return res.status(404).json({message: 'Cannot find answer.'})
    }
  } catch (err) {
    return res.status(500).json({message: err.message});
  }

  res.answer = answer;
  next();
}

module.exports = router;
