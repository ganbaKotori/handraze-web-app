const aws = require("aws-sdk");
const express = require("express");
const multer = require("multer");
const multerS3 = require("multer-s3");
const keys = require("../config")

//process.env.AWS_SECRET_ACCESS_KEY
//process.env.AWS_ACCESS_KEY
aws.config.update({
  secretAccessKey: keys.AWSSecretAccessKey , 
  accessKeyId: keys.AWSAccessKey ,
  region: "us-west-1"
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "dev-handraze",
    //process.env.S3_BUCKET
    // //FIXME:"TypeError: Cannot read property 'location' of undefined" in FileUpload
    //acl: 'public-read',
    metadata: function(req, file, cb) {
      cb(null, { fieldName: "TESTING_META_DATA!" });
    },
    key: function(request, file, ab_callback) {
      console.log(request.headers.user);
      var newFileName = Date.now() + "-" + file.originalname;
      var fullPath =
        "profilepictures/" + request.headers.user + "/" + newFileName;
      ab_callback(null, fullPath);
    }
  })
});

module.exports = upload;
