const express = require("express");
const router = express.Router();
const {Chat} = require("../models/chat.model");
const auth = require("../middleware/auth");

router.get("/getchats/:id", async (req, res) => {
    await Chat.find({
        "room" : req.params.id
    })
        .populate("sender")
        .exec((err, chats) => {
            console.log(chats)
            if(err) return res.status(400).send(err);
            res.status(200).send(chats)
        })
});

module.exports = router; 