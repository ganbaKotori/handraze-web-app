const express = require("express");
const mongoose = require("mongoose");
const app = express();
const usersRouter = require("./routes/User");
const authRouter = require("./routes/auth")
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);

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
