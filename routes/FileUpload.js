const express = require("express");
const router = express.Router();

const upload = require('../services/file-upload');

const singleUpload = upload.single('file');

// @route   GET API/Upload/file-upload
// @desc    Upload a single file to s3 bucket
// @access  Private (needs to be Public)
router.post('/file-upload', function(req, res) {
  singleUpload(req, res, function(err) {
    return res.json({'fileUrl': req.file.location}); // can't read the file location
  });
});

module.exports = router;
