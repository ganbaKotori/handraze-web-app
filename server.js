require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log("MongoDB database connection established successfully"));

// define routes here
const userRouter = require('./routes/User'); // localhost:3000/user
const studentProfile = require('./routes/Student');
const instructorProfile = require('./routes/Instructor')
const courseRouter = require('./routes/Course');
const questionRouter = require('./routes/Question');
const lqRouter = require('./routes/LectureQuestion');
const dqRouter = require('./routes/DiscussionQuestion');
const answerRouter = require('./routes/Answer');

app.use('/user', userRouter);
app.use('/student', studentProfile);
app.use('/instructor', instructorProfile);
app.use('/course', courseRouter);
app.use('/question', questionRouter);
app.use('/lecture', lqRouter);
app.use('/discussion', dqRouter);
app.use('/answer', answerRouter);

var server = app.listen(port, function() { // go to http://localhost:3000
  console.log(`Handraze Express Server listening on port ${port}`);
});
