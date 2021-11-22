const express = require("express");
const { ShopModel, validShop } = require("../models/shopModel");
const router = express.Router();
const cors = require("cors");


router.use(cors({
    methods: ["GET", "POST", "PUT", "DELETE"]
}))

router.get("/", async (req, res) => {
    let data = await ShopModel.send({});
    res.json(data);
})


router.post("/", async (req, res) => {
    let validBody = validShop(req.body);
    if (validBody.error) {
        return res.status(400).json(validBody.error.details);
    }
    let shop = new ShopModel(req.body);
    await shop.save();
    res.json(shop);
})

router.delete("/:idDel", async (req, res) => {
    try {
        let data = await ShopModel.deleteOne({ _id: req.params.idDel });
        res.json(data);
    }
    catch {
        console.log(err);
        res.status(400).send(err)
    }
})

router.put("/:idEdit", async (req, res) => {
    let validBody = validShop(req.body);
    if (validBody.error) {
        return res.status(400).json(validBody.error.details);
    }
    try {
        let data = await ShopModel.updateOne({ _id: req.params.idEdit }, req.body);
        res.json(data);
    }
    catch {
        console.log(err);
        res.status(400).send(err)
    }
})


module.exports = router;