const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

// Get all users
router.get('/', async (req, res) => {
  try{
    const users = await User.find();
    res.json(users);
  } catch {
    res.status(500).json({message: err.message});
  }
});

// Get a user
router.get('/:id', getUser, (req, res) => {
  res.json(res.user);
});

// Create a user
router.post('/', async (req, res) => {
  const user = new User({
    email: req.body.email,
    username: req.body.username,
    u_password: req.body.u_password,
    lastName: req.body.lastName,
    firstName: req.body.firstName
  })
  try{
    const newUser = await user.save();
    res.status(201).json(newUser); // good - send new users info
  } catch (err) {
    res.status(400).json({message: err.message}); // user input error
  }
});

// Update a user
// Patch updates one thing, put updates everything
router.patch('/:id', getUser, async (req, res) => {
  if(req.body.email != null) {
    res.user.email = req.body.email;
  }
  if(req.body.username != null) {
    res.user.username = req.body.username;
  }
  if(req.body.u_password != null) {
    res.user.password = req.body.u_password;
  }
  if(req.body.lastName != null) {
    res.user.lastName = req.body.lastName;
  }
  if(req.body.firstName != null) {
    res.user.firstName = req.body.firstName;
  }

  try {
    const upatedUser = await res.user.save(); // give updated version
    res.json(upatedUser); // good - sends users updated info
  } catch (err) {
    res.status(500).json({message: err.message})
  }
});

// Delete a user
router.delete('/:id', getUser, async (req, res) => {
  try{
    await res.user.remove();
    res.json({message: "Successfully deleted user!"}) // good
  } catch (err) {
    res.status(500).json({message: err.message})
  }
});

//------------------------------------------------------------------------------

async function getUser(req, res, next) {
  let user
  try {
    user = await User.findById(req.params.id);
    if(user == null) {
      return res.status(404).json({message: 'Cannot find user.'})
    }
  } catch (err) {
    return res.status(500).json({message: err.message});
  }

  res.user = user;
  next();
}

module.exports = router;
