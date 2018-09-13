const mongoose = require("mongoose");
const { Schema } = mongoose;

const mealSchema = new Schema({
    gender: {
        type: String,
        required: true,
    },
    intent: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: false,
    },
    prep: {
        type: String,
        required: false,
    },
    protein: {
        type: String,
        required: true,
    },
	proteinAmt: {
        type: String,
        required: true,
    },
	veggie: {
        type: String,
        required: true,
    },
	veggieAmt: {
        type: String,
        required: true,
    },
    carb: {
        type: String,
        required: true,
    },
	carbAmt: {
        type: String,
        required: true,
    },
	fat: {
        type: String,
        required: true,
    },
	fatAmt: {
        type: String,
        required: true,
    }
})
const mealModel = mongoose.model("Meal", mealSchema);
module.exports = mealModel;