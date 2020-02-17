const router = require('express').Router();
let PeerNotes = require('../models/peer.course.model');
let Course = require('../models/course.model');

router.route('/').get((req,res) => {
  PeerNotes.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + errs));
});

router.route('/add').post((req, res) => {
  const notes = req.body.notes;

  const newPeerNotes = new PeerNotes(questionfields);

  new PeerNotes.save()
  .then(() => res.json('Peer Notes added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
console.log('request was made: ' + request.url);