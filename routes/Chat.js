const express = require("express");
const router = express.Router();
const {Chat} = require("../models/Chat");
const auth = require("../middleware/auth");

router.get("/getchats",auth, async (req, res) => {
    console.log("chat router is bneing used")
    await Chat.find()
        .populate("sender")
        .exec((err, chats) => {
            console.log(chats)
            if(err) return res.status(400).send(err);
            res.status(200).send(chats)
        })
});

module.exports = router; 