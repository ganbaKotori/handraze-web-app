const router = require('express').Router();
let AnswerModel = require('../models/answer.model');

router.route('/add').post((req,res) => {
  const answer = req.body.question;

  const newAnswer = new AnswerModel(topic);

  new DiscussionQuestion.save()
  .then(() => res.json('Discussion Question added!'))
  .catch(err => res.status(400).json('Error: ' + err));
)};

module.exports = router;
console.log('request was made: ' + request.url);
