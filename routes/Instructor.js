const express = require('express');
const router = express.Router();
const Instructor = require('../models/instructor.model');
const User = require('../models/user.model');

router.get('/', async (req, res) => {
  try {
    const instructors = await Instructor.find();
    res.json(instructors);
  } catch {
    res.status(500).json({message: err.message});
  }
});

// Get one Instructor
router.get('/:id', getInstructor, (req, res) => {
  res.json(res.instructor);
});

// Add Instructor
router.post('/add', async (req, res) => {
  const instructor = new Instructor({
    user: req.body.user, // in POST - "user": "/user/[username]"
    department: req.body.department,
  })
  try{
    const newInstructor = await instructor.save();
    res.status(201).json(newInstructor); // good - send new users info
  } catch (err) {
    res.status(400).json({message: err.message}); // user input error
  }
});

//TODO: Add PATCH for instructor, not sure how to patch both User and Instructor in one request
// router.patch('/:id', getInstructor, async (req, res) => { ... }

// Delete Instructor by isntructor id
router.delete('/delete/:id', getInstructor, async (req, res) => {
  try{
    await res.instructor.remove();
    res.json({message: "Successfully deleted instructor!"}) // good
  } catch (err) {
    res.status(500).json({message: err.message})
  }
});

//------------------------------------------------------------------------------

async function getInstructor(req, res, next) {
  let instructor
  try {
    instructor = await Instructor.findById(req.params.id);
    if(instructor == null) {
      return res.status(404).json({message: 'Cannot find instructor.'})
    }
  } catch (err) {
    return res.status(500).json({message: err.message});
  }

  res.instructor = instructor;
  next();
}

module.exports = router;
