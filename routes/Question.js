const router = require('express').Router();
let QuestionModel = require('../models/question.model');

router.route('/add').post((req,res) => {
  const question = req.body.question;

  const newQuestion = new Question({ title });

  newQuestion.save()
    .then(() => res.json('Question added!'))
    .catch (err => res.status(400).json('Error: ' + err));
});

module.exports = router;
console.log('request was made: ' + request.url);
