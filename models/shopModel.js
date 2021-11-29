const mongoose = require('mongoose');
const Joi = require("joi");

const shopSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    image: String,
    description: String,
    isFavourite: Boolean,
    NutritionName: String,
    DiscountPercentages: Number,
    Percentages: Number,
    StockNumber: Number,
    Nutrition: Array,
})

const ShopModel = mongoose.model("shops", shopSchema);

exports.ShopModel = ShopModel;


exports.validShop = (_bodyData) => {
    let joiSchema = Joi.object({
        id: Joi.number().min(1).max(9999).required(),
        cat: Joi.string().min(1).max(99).required(),
        name: Joi.string().min(2).max(99).required(),
        price: Joi.number().min(1).max(9999).required(),
        image: Joi.string().min(2).max(300),
    })

    return joiSchema.validate(_bodyData);
}