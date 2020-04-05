const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const upload = require("../services/file-upload");
const User = require("../models/user.model");


const singleUpload = upload.single("file");

// @route   GET API/Upload/file-upload
// @desc    Upload a single file to s3 bucket
// @access  Private (needs to be Public)
router.post("/file-upload", [auth], async function(req, res) {
  try {
    console.log("user start")
    console.log(req.user.id)
    console.log("user end")
    var user = await User.findById({
      _id: req.user.id
    })
    await singleUpload(req, res, function(result) {
      console.log(res.req.file.location);
      user.avatar = res.req.file.location;
        user.save();
        console.log(user)
        console.log("profile pic added to user!")
      return res.json('imageUrl');
      //return res.json("File Uploaded!"); // can't read the file location
    });
  }
  catch (err){
    console.log(err.message)
  }
  
});

module.exports = router;
