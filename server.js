var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var router = require("./app/routing/htmlRoutes");
var api = require("./app/routing/apiRoutes");

var port = process.env.PORT || 3000;
var app = express();

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

// Serve front-end files from the public folder
app.use("/", express.static(__dirname + "public"));

app.use("/", router);

// Namespace the api
app.use("/api", api);

//Serves the root directory relative to the directory that the express app is run from
app.use(express.static(path.join(__dirname, "/")));

app.listen(port, () => {
    console.log("The server is listening on port: " + port);
});