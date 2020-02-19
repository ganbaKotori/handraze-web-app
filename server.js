const express = require("express");
const mongoose = require("mongoose");
const app = express();
const usersRouter = require("./routes/User");
const authRouter = require("./routes/auth");
require("dotenv").config();
const fileRouter = require("./routes/FileUpload");

const instructorRouter = require("./routes/instructor");
const studentRouter = require("./routes/student");

// define routes here
const userRouter = require("./routes/User"); // localhost:3000/user
const studentProfile = require("./routes/Student");
const instructorProfile = require("./routes/Instructor");
const courseRouter = require("./routes/Course");
const questionRouter = require("./routes/Question");
const lqRouter = require("./routes/LectureQuestion");
const dqRouter = require("./routes/DiscussionQuestion");
const answerRouter = require("./routes/Answer");

var bodyParser = require("body-parser");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", usersRouter);
app.use("/api/instructors", instructorRouter);
app.use("/api/students", studentRouter);
app.use("/api/courses", courseRouter);
app.use("/api/question", questionRouter);
app.use("/api/lecture", lqRouter);
app.use("/api/discussion", dqRouter);
app.use("/api/answer", answerRouter);
app.use("/api/auth", authRouter);
app.use("/api/upload", fileRouter);

app.use(express.json());

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
  //req = requirement ; res = response
  res.send("Handraze Backend Server");
});
port = 3000;
var server = app.listen(port, function() {
  // go to http://localhost:3000
  console.log(`Handraze Express Server listening on port ${port}`);
});
