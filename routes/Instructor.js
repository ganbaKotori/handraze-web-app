const router = require('express').Router();
let InstructorProfile = require('../models/instructor.profile.model');
let User = require("../models/user.model");

router.route('/').get((req, res) => {
  InstructorProfile.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const profilefields = {};

  profilefields.department = req.body.department;

  const newInstructorProfile = new InstructorProfile(profilefields);

  newStudentProfile.save()
    .then(() => res.json('Instructor profile added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
console.log('request was made: ' + request.url);
