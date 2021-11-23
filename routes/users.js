const express = require("express");
const { UsersModel, validUser } = require("../models/usersModel")
const router = express.Router();

router.get("/", async (req, res) => {
    let data = await UsersModel.find(req.body);
    res.json(data);
})

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