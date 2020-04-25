const express = require("express");
const mongoose = require("mongoose");
const { Chat } = require("./models/chat.model");
const app = express();
const cors = require('cors')
const path = require("path");

require("dotenv").config();
const cookieParser = require("cookie-parser");
const server = require("http").createServer(app);
const io = require("socket.io")(server)

app.use(cors());

// DEFINE ROUTES HERE
const authRouter = require("./routes/Auth");
const chatRouter = require("./routes/Chat");
const courseRouter = require("./routes/Course");
const discussionQuestionRouter = require("./routes/DiscussionQuestion");
const fileRouter = require("./routes/FileUpload");
const instructorRouter = require("./routes/Instructor");
const lectureRouter = require("./routes/Lecture");
const studentRouter = require("./routes/Student");
const userRouter = require("./routes/User");

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
app.use(cookieParser());    

// SETUP ROUTES HERE
app.use("/api/auth", authRouter);
app.use("/api/courses", courseRouter);
app.use("/api/chats", chatRouter);
app.use("/api/instructors", instructorRouter);
app.use("/api/lectures", lectureRouter);
app.use("/api/students", studentRouter);
app.use("/api/questions", discussionQuestionRouter);
app.use("/api/upload", fileRouter);
app.use("/api/users", userRouter);

app.use(express.json());

/*const connect = mongoose.connect(config.mongoURI,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));*/

// CONNECT TO MONGODB
const uri = "mongodb://alex:alex123@ds117145.mlab.com:17145/handraze-dev";
const connect = mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.get("/", (req, res) => {
  res.send("Handraze Backend Server");
});

io.on("connection", socket => {
  var defaultRoom = 'general';
  var rooms = ["General", "angular", "socket.io", "express", "node", "mongo", "PHP", "laravel"];
  //Emit the rooms array
  socket.emit('setup', {
    rooms: rooms
  });
  
  socket.on("Input Chat Message", msg => {
    connect.then(db => {
      try {
        let chat = new Chat({message: msg.chatMessage, sender: msg.userId, room: msg.room, type: msg.userName })
        chat.save((err,doc)=> {
          if(err) return res.json({success: false, err})
          Chat.find({room: msg.room})
          .populate("sender")
          .exec((err, doc) => {
            socket.join(msg.room);
            console.log(doc)
            return io.to(msg.room).emit("Output Chat Message", doc.slice(-1).pop());
          })
        })
      } catch (error) {
        console.error(error);
      }
    })
  })
})

port = process.env.PORT || 3000; // go to http://localhost:3000
server.listen(port, function() {
  console.log(`Handraze Express Server listening on port ${port}`);
});