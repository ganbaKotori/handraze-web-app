const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const bcrypt = require("bcrypt-nodejs");
const jwt = require("jsonwebtoken");
const Validator = require("validator");
const User = require("../models/user.model");

// @route   GET API/auth/
// @desc    Test route
// @access  Public
router.get("/", auth, async (req, res) => {
  try {
    // Return all of the users data, except password
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res, next) => {
  try {
    if (!Validator.isEmail(req.body.email)) {
      errors.email = "Email is invalid";
    }
    User.findOne({ email: req.body.email }, function(err, userInfo) {
      if (err) {
        res.status(500).send("Couldnt find user");
      } else {
        if (!req.body.password.match(/^[0-9a-z]+$/)) {
          res.status(500).send("Password format invalid!");
        }

        if (bcrypt.compareSync(req.body.password, userInfo.password)) {
          const payload = {
            user: {
              id: userInfo._id
            }
          };
          jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 360000 }, // optional but recommended
            (err, token) => {
              if (err) throw err;
              res.json({ token });
            }
          );
        }
      }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
