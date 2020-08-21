const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const sender = require("../services/mailer");
const keys = require("../config/keys")

const User = require("../models/user.model");
const Student = require("../models/student.model");
const Instructor = require("../models/instructor.model");

//Load Input Validation
const validateRegisterInput = require("../validation/user-validation");

// @route   POST api/users/
// @desc    Register user
// @access  Public
router.route("/").post(async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  try {
    let user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ errors: [{ message: "User with email already exists!" }] });
    }

    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newUser = new User({
      email,
      password,
      lastName,
      firstName
    });

    await newUser.save();

    //----- JWT -----
    const payload = {
      user: {
        id: newUser._id
      }
    };

    jwt.sign(
      payload,
      "mysecrettoken",
      { expiresIn: 360000 }, // optional but recommended
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// @route   GET api/users/
// @desc    Get list of users
// @access  Public
/*router.route("/").get((req, res) => {
  User.find().select("-password")
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});*/

// @route   POST API/Users/Register
// @desc    Register user
// @access  Public
router.route("/register").post(async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const avatar = ""; // avatar image url

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json("User already exists!");
    }

    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newUser = new User({
      email,
      password,
      lastName,
      firstName,
      avatar
    });

    await newUser.save();

    // Send an email to new user registered
    const data = {
      templateName: "welcome",
      email: newUser.email,
      userName: newUser.userName,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      password: newUser.password
    };

    //sender.sendEmail(data);

    // Send a new JWT when a user is registered
    const payload = {
      user: {
        id: newUser._id
      }
    };

    jwt.sign(
      payload,
      "mysecrettoken",
      { expiresIn: 360000 }, // optional but recommended
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// @route   POST api/user/login
// @desc    Register user and send welcome email
// @access  Public
router.route("/login").post((req, res, next) => {
  User.authenticate(req.body.logemail, req.body.logpassword, function(
    error,
    user
  ) {
    if (error || !user) {
      var err = new Error("Wrong email or password.");
      err.status = 401;
      return next(err);
    } else {
      req.session.userID = user._id;
      res.status(200).json("Login successful");
    }
  });
});

// @route   GET API/Users/:id
// @desc    Find user
// @access  Public
router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json("Error: " + err));
});

// @route   DELETE API/Users/Delete
// @desc    find and delete user
// @access  Public
router.delete("/delete/:id", getUser, async (req, res) => {
  /* I changed the whole request, it wasn't deleting users at all and kept giving
   * me warnings for using collection.count (deprecated). I haven't tested it for
   * users that are both instuctors and students though.
   * - Skylar
   */
  const user = res.user;

  const student = Student.deleteOne({_id: user.id});
  const instructor = Instructor.deleteOne({_id: user.id});
  const root = User.deleteOne({_id: user.id});

  Promise.all([student, instructor, root]).then(() => {
    res.status(200).json({message: 'User deleted!'});
  }).catch(err => {
    res.status(500).json("Error: " + err);
  });
});

// @route   POST api/users/update/:id
// @desc    Update everything about a user
// @access  Public
router.post("/update/:id", (req, res) => {
  User.findById(res.params.id)
    .then(user => {
      user.email = req.body.email;

      user
        .save()
        .then(() => res.json({ message: "User updated!" }))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});


/* TODO: MERGE WITH UPPER CODE
// @route   PATCH api/users/multi-update/:id
// @desc    Update a single item for a user
// @access  Public
router.patch("/:id", getUser, async (req, res) => {
  if (req.body.email != null) {
    res.user.email = req.body.email;
  }
  if (req.body.username != null) {
    res.user.username = req.body.username;
  }
  if (req.body.u_password != null) {
    res.user.password = req.body.u_password;
  }
  if (req.body.lastName != null) {
    res.user.lastName = req.body.lastName;
  }
  if (req.body.firstName != null) {
    res.user.firstName = req.body.firstName;
  }

  try {
    const upatedUser = await res.user.save(); // give updated version
    res.json(upatedUser); // good - sends users updated info
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});*/

//------------------------------------------------------------------------------

// getUser module: sorts through users to find on by its id
async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find user." });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.user = user;
  next();
}

module.exports = router;
