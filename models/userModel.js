const mongoose = require("mongoose");

const userSchema = {
	usernam: String,
	password: String
}

const User = mongoose.model("User", userSchema);

module.exports = User;