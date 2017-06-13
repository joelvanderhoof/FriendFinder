var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
//var router = require("./routes");

var port = process.env.PORT || 3000;
var app = express();

// Serve front-end files from the public folder
app.use("/", express.static("public"));

// Namespace the api
//app.use("/api", router);

//Serves the root directory relative to the directory that the express app is run from
app.use(express.static(path.join(__dirname, "/")));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/home.html");
});

app.listen(port, function() {
    console.log("The server is listening on port: " + port);
});