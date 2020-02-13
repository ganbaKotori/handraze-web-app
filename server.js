const express = require("express");
const mongoose = require("mongoose");
const app = express();
const usersRouter = require("./routes/User");
const authRouter = require("./routes/auth")
<<<<<<< HEAD
=======

const instructorRouter = require("./routes/instructor");
const studentRouter = require("./routes/student");
const courseRouter = require("./routes/Course");

>>>>>>> e97896099d4f35cd989ac62e9f3cf476df43e55a
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
<<<<<<< HEAD
=======
app.use("/api/instructors", instructorRouter);
app.use("/api/students", studentRouter);
app.use("/api/courses", courseRouter);
>>>>>>> e97896099d4f35cd989ac62e9f3cf476df43e55a

const port = 3000; // go to http://localhost:3000

const uri = "mongodb://alex:alex123@ds117145.mlab.com:17145/handraze-dev";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.get("/", (req, res) => {
  //req = requirement ; res = response
  res.send("Handraze Backend Server");
});

app.listen(port, () => {
  console.log(`Handraze Express Server listening on port ${port}`);
});
