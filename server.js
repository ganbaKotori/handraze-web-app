const express = require("express");
const mongoose = require("mongoose");
const { Chat } = require("./models/chat.model");
const app = express();
const cors = require("cors");
const path = require("path");
mongoose.Promise  = require("bluebird");
const server = require("http").createServer(app);
const io = require("socket.io")(server);

require("dotenv").config();
const cookieParser = require("cookie-parser");

app.use(cors());

// DEFINE ROUTES HERE
const authRouter = require("./routes/auth");
const chatRouter = require("./routes/Chat");
const courseRouter = require("./routes/Course");
const discussionQuestionRouter = require("./routes/DiscussionQuestion");
const fileRouter = require("./routes/FileUpload");
const instructorRouter = require("./routes/Instructor");
const lectureRouter = require("./routes/Lecture");
const peerNoteRouter = require("./routes/PeerNote");
const studentRouter = require("./routes/Student");
const userRouter = require("./routes/User");

app.use(function (req, res, next) {
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
app.use(cookieParser());

// SETUP ROUTES HERE
app.use("/api/auth", authRouter);
app.use("/api/courses", courseRouter);
app.use("/api/chats", chatRouter);
app.use("/api/instructors", instructorRouter);
app.use("/api/lectures", lectureRouter);
app.use("/api/peernotes", peerNoteRouter);
app.use("/api/students", studentRouter);
app.use("/api/questions", discussionQuestionRouter);
app.use("/api/upload", fileRouter);
app.use("/api/users", userRouter);

app.use(express.json());

let rooms = {};

// CONNECT TO MONGODB
const uri = "mongodb://alex:alex123@ds235378.mlab.com:35378/handraze-beta";

const  connect  =  mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
const PORT = process.env.PORT || 3000; // go to http://localhost:3000

server.listen(PORT, function () {
  console.log(`Handraze Express Server listening on port ${PORT}`);
});

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}



io.on("connection", (socket) => {
  socket.on("room", function (room) {
    if (!rooms[room]) {
      rooms[room] = {};
    }
    socket.join(room);
    if (rooms[room]["pdf"]) {
      let pdf = rooms[room]["pdf"];
      io.in(room).emit("Get PDF", { pdf });
    }
    if (rooms[room]["page"]) {
      let page = rooms[room]["page"];
      io.in(room).emit("Get Page", { page });
    }
  });
  socket.on("Set PDF", (msg) => {
    if (msg.pdf) {
      rooms[msg.lecture]["pdf"] = msg.pdf;
    }
    var pdf = msg.pdf;
    io.in(msg.lecture).emit("Get PDF", { pdf });
  });
  socket.on("Set Page", (msg) => {
    if (msg.page) {
      rooms[msg.lecture]["page"] = msg.page;
    }
    var page = msg.page;
    io.in(msg.lecture).emit("Get Page", { page });
  });

  socket.on("Input Chat Message", (msg) => {
    connect.then(db => {
      try {
        let chat = new Chat({
          message: msg.chatMessage,
          sender: msg.userId,
          room: msg.room,
          type: msg.type,
        });
        chat.save((err, doc) => {
          if (err) return res.json({ success: false, err });
          Chat.find({ room: msg.room })
            .populate("sender")
            .exec((err, doc) => {
              socket.join(msg.room);
              //console.log(doc)
              return io
                .to(msg.room)
                .emit("Output Chat Message", doc.slice(-1).pop());
            });
        });
      } catch (error) {
        console.error(error);
      }
    });
  });
});

//app.listen(PORT, function() {

//});
