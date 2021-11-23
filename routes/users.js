const express = require("express");
const { UsersModel, validUser } = require("../models/usersModel")
const router = express.Router();

router.get("/", (req, res) => {
    UsersModel.find()
        .then((shop) => res.send(shop))
        .catch((error) => {
            res.status(500).send("Something went wrong");
        })
});

router.post("/user", async (req, res) => {
    let validBody = validUser(req.body);
    if (validBody.error) {
        return res.status(400).json(validBody.error.details);
    }
    let user = new UsersModel(req.body);
    await user.save();
    res.json(user);
})

module.exports = router;