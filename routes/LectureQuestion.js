const router = require('express').Router();
let LectureQuestion = require('../models/lecture.question.model');
let QuestionModel = require('../models/question.model');

router.route('/').get((req,res) => {
  LectureQuestion.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + errs));
});

router.route('/add').post((req, res) => {
  const liveAnswer = req.body.liveAswer;

  const newLectureQuestion = new LectureQuestion(questionfields);

  new LectureQuestion.save()
  .then(() => res.json('Lecture Question added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
console.log('request was made: ' + request.url);
