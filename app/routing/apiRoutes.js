var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");

var api = express.Router();

// Data
var friends = [
    {
        name: "Me",
        photo: "Cool Guy",
        scores: []
    }
];

api.get("/friends", (req, res) => {
    res.json(friends);
})
    .post("/friends", (req, res) => {
        console.log(req.body);
       res.send("Joel is your best friend"); 
    });

module.exports = api;