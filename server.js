const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//Connect to Mongoose
mongoose.connect("mongodb+srv://mark:1234@cluster0.qsavu.mongodb.net/Models?retryWrites=true&w=majority");

//Require route
app.use("/", require("./routes/drinkRoute"));

app.listen(3001, ()=>{
	console.log("Express server running at port 3001");
})