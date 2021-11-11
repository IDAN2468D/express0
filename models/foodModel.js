const mongoose = require('mongoose');
const Joi = require("joi");

const foodSchema = new mongoose.Schema({
    id: Number,
    name: String,
    image: String,
    price: Number,
    isFavourite: Boolean
})

const FoodModel = mongoose.model("foods", foodSchema);

exports.FoodModel = FoodModel;


exports.validFood = (_bodyData) => {
    let joiSchema = Joi.object({
        name: Joi.string().min(2).max(99).required(),
        img: Joi.string().min(2).max(300),
        cal: Joi.number().min(1).max(9999).required(),
        price: Joi.number().min(1).max(9999).required(),
    })

    return joiSchema.validate(_bodyData);
}