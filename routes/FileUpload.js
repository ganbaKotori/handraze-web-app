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
    await singleUpload(req, res, async function(result) {
      const profilePicture = {
        avatar: res.req.file.location,
      }
      await User.findOneAndUpdate(
        { _id: req.user.id },
        { $set: profilePicture },
        { new: true, upsert: true }
      ).then(() => res.json("Profile picture updated!"))
      .catch(err => res.status(400).json(err.message));
    });
  }
  catch (err){
    console.log(err.message)
  }
});

// @route   GET API/Upload/file-upload
// @desc    Upload a single file to s3 bucket
// @access  Private (needs to be Public)
router.post("/file-upload-pdf", async function(req, res) {
  try {

    await singleUpload(req, res, function(result) {
      console.log(res.req.file.location);
      return res.json(res.req.file.location);
      //return res.json("File Uploaded!"); // can't read the file location
    });
  }
  catch (err){
    console.log(err.message)
  }
});

module.exports = router;
