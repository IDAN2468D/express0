const express = require("express");
const path = require("path");
const http = require("http");



const dbConnect = require("./db/mongoConnect");
const { routesInit } = require("./routes/config_route");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
routesInit(app)



const server = http.createServer(app)

const port = process.env.PORT || 3001;
server.listen(port);

app.listen(port, "192.168.1.102", function () {
    console.log("Running RestHab on port" + port)
})

