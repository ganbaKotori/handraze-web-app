const router = require('express').Router();
let Course = require('../models/course.model');

router.route('/add').post((req,res) =>{
    const title = req.body.title;
    const description = req.body.description;
    const classDuration = req.body.classDuration;
    const location = req.body.location;
    const sectionNum = req.body.sectionNum;

    function Enum(){
      for(var i in arguments){
        this[arguments[i]] = i;
      }
    }
    var dayOfWeek = new Enum(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);

    const newCourse = new Course({
        title, description, dayOfWeek, classDuration, location, sectionNum
    });
    newCourse.save()
        .then(()=> res.json('Course added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router; 
console.log('request was made: ' + request.url);
