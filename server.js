const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

// DEFINE ROUTES HERE
const userRouter = require("./routes/User");
const studentRouter = require("./routes/Student");
const instructorRouter = require("./routes/Instructor");
const courseRouter = require("./routes/Course");
const classroomRouter = require("./routes/Classroom");
const discussionQuestionRouter = require("./routes/DiscussionQuestion");
//const lqRouter = require("./routes/LectureQuestion");
//const dqRouter = require("./routes/DiscussionQuestion");
//const answerRouter = require("./routes/Answer");
const authRouter = require("./routes/auth");
const fileRouter = require("./routes/FileUpload");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// SETUP ROUTES HERE
app.use("/api/users", userRouter);
app.use("/api/instructors", instructorRouter);
app.use("/api/students", studentRouter);
app.use("/api/courses", courseRouter);
app.use("/api/classes", classroomRouter);
app.use("/api/questions", discussionQuestionRouter);
//app.use("/api/lecture", lqRouter);
//app.use("/api/discussion", dqRouter);
//app.use("/api/answer", answerRouter);
app.use("/api/auth", authRouter);
app.use("/api/upload", fileRouter);

app.use(express.json());

// CONNECT TO MONGODB
const uri = "mongodb://alex:alex123@ds117145.mlab.com:17145/handraze-dev";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.get("/", (req, res) => {
  res.send("Handraze Backend Server");
});

port = 3000; // go to http://localhost:3000
var server = app.listen(port, function() {
  console.log(`Handraze Express Server listening on port ${port}`);
});
