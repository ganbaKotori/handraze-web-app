const router = require('express').Router();
let StudentProfile = require('../models/student.profile.model');
let User = require("../models/user.model");

router.route('/').get((req, res) => {
  StudentProfile.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const profilefields = {};

  profilefields.year = req.body.year;
  profilefields.institution = req.body.institution;

  const newStudentProfile = new StudentProfile(profilefields);

  newStudentProfile.save()
    .then(() => res.json('Student profile added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router; 
console.log('request was made: ' + request.url);
