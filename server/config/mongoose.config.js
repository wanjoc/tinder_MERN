/**
 * Create a mongoose.config.js file and setup your mongoose.connect function
 */
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/tinder", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));