const router = require('express').Router();
let DiscussionQuestion = require('../models/discussion.question.model');
let QuestionModel = require('../models/question.model');

router.route('/').get((req,res) => {
  DiscussionQuestion.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + errs));
});

router.route('/add').post((req, res) => {
  const topic = req.body.topic;

  const newDiscussionQuestion = new DiscussionQuestion(topic);

  new DiscussionQuestion.save()
  .then(() => res.json('Discussion Question added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
console.log('request was made: ' + request.url);
