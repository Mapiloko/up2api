const mongoose = require("mongoose");

const drinkSchema = {
	temperature: Number,
	gender: String,
	age: Number,
	caffeine: String,
	daytime: String,
	pregnancy: String,
	health: String,
	drinksperday: Number,
	drinkstoday: Number
	// var1: String,
	// var2: Number
}

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;