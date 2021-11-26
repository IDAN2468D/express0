const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://idankzm:idankzm2468@cluster0.purdk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", function () {
    console.log("mongo connected")
})

module.exports = db;