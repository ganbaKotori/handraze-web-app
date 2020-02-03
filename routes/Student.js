const express = require('express');
const router = express.Router();
const Student = require('../models/student.model');
const User = require('../models/user.model');

// Get all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch {
    res.status(500).json({message: err.message});
  }
});

// Get a student
router.get('/:id', getStudent, (req, res) => {
  res.json(res.student); // good - responds with user's info
});

// TODO: Have GET display User and Student info togetuer
// Ater you do a POST request for a new student and the do a GET request to view
// it, it doesn't show the params for User. It just lists another id, year,
// and institution.

// Add Student
router.post('/add', async (req, res) => {
  const student = new Student({
    user: req.body.user, // in POST - "user": "/user/[username]"
    year: req.body.year,
    institution: req.body.institution
  })
  try{
    const newStudent = await student.save();
    res.status(201).json(newStudent); // good - send new users info
  } catch (err) {
    res.status(400).json({message: err.message}); // user input error
  }
});

//TODO: Add PATCH for student, not sure how to patch both User and Student in one request
// router.patch('/:id', getStudent, async (req, res) => { ... }

// Delete Student by student id
router.delete('/delete/:id', getStudent, async (req, res) => {
  try{
    await res.student.remove();
    res.json({message: "Successfully deleted student!"}) // good
  } catch (err) {
    res.status(500).json({message: err.message})
  }
});

//------------------------------------------------------------------------------

async function getStudent(req, res, next) {
  let student
  try {
    student = await Student.findById(req.params.id);
    if(student == null) {
      return res.status(404).json({message: 'Cannot find student.'})
    }
  } catch (err) {
    return res.status(500).json({message: err.message});
  }

  res.student = student;
  next();
}

module.exports = router;
