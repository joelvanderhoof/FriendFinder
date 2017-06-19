var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");

var router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
})
    .get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

module.exports = router;