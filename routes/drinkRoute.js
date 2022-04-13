const express = require("express");
const router = express.Router();
const Drink = require("../models/drinkModel");
const User = require("../models/userModel");

router.route("/create").post((req, res) => {

	const temperature = req.body.temperature;
	const gender = req.body.gender;
	const age = req.body.age;
	const caffeine = req.body.caffeine;
	const daytime = req.body.daytime;
	const pregnancy = req.body.pregnancy;
	const health = req.body.health;
	const drinksperday = req.body.drinksperday;
	const drinkstoday = req.body.drinkstoday;
	
	const newDrink = new Drink({
		temperature,
		gender,
		age,
		caffeine,
		daytime,
		pregnancy,
		health,
		drinksperday,
		drinkstoday
	});
	
	newDrink.save();
})

router.route("/users").get((req, res) => {

	User.find().then(foundLogins => res.json(foundLogins))
})

module.exports = router;