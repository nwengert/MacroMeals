const express = require("express");
const app = express();
require("dotenv").config()
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8181;
const morgan = require("morgan");
const path = require("path")


app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")));


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/meals', {useNewUrlParser: true})  
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.error(err));

app.use("/meals", require("./routes/meals.js"));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(PORT, ()=> console.log(`Your server is currently running briskly on ${PORT}`))