const express = require('express');
const router = express.Router();
const Course = require('../models/course.model');

// Get all courses
router.get('/', async (req, res) => {
  try{
    const courses = await Course.find();
    res.json(courses);
  } catch {
    res.status(500).json({message: err.message});
  }
});

// Get a course
router.get('/:id', getCourse, (req, res) => {
  res.json(res.course);
});

// Create a course
router.post('/add', async (req, res) => {
  const course = new Course({
    //question: req.body.question, // in POST -- "question": "/question/[question]"
    code: req.body.code,
    classTitle: req.body.classTitle,
    classDescription: req.body.classDescription,
    courseDate: req.body.courseDate,
    weekDay: req.body.weekDay,
    classDuration: req.body.classDuration,
    c_location: req.body.c_location,
    sectionNum: req.body.sectionNum
  })
  try{
    const newCourse = await course.save();
    res.status(201).json(newCourse); // good - send new courses info
  } catch (err) {
    res.status(400).json({message: err.message}); // course input error
  }
});

// Update a course
// Patch updates one thing, put updates everything
// router.patch('/:id', getCourse, async (req, res) => { ... }


// Delete a course
router.delete('/delete/:id', getCourse, async (req, res) => {
  try{
    await res.course.remove();
    res.json({message: "Successfully deleted course!"}) // good
  } catch (err) {
    res.status(500).json({message: err.message})
  }
});

//------------------------------------------------------------------------------

async function getCourse(req, res, next) {
  let course
  try {
    course = await Course.findById(req.params.id);
    if(course == null) {
      return res.status(404).json({message: 'Cannot find course.'})
    }
  } catch (err) {
    return res.status(500).json({message: err.message});
  }

  res.course = course;
  next();
}

module.exports = router;
