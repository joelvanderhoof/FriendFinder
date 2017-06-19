var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");

var api = express.Router();

// Data
var friends = [
    {
        userName: "Me",
        userImg: "http://cdn3.thr.com/sites/default/files/2011/08/rambo_a.jpg",
        userChoices: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    }
];

api.get("/friends", (req, res) => {
    res.json(friends);
})
    .post("/friends", (req, res) => {
        var newFriend = req.body;
        console.log(req.body)
        var friendDiff = [];
        var bestFriend;

        for(var i=0; i<friends.length; i++) {
            //compare each friend
            
            for(var j=0; j<friends[i].userChoices.length; j++) {
                //compare survey answers
                var totalDiff = 0;
                var thisDiff = newFriend.userChoices[j] - friends[i].userChoices[j];
                totalDiff += Math.abs(thisDiff);
                if(j === 9) {
                    friendDiff.push(totalDiff);
                }
            }
        }

        //Find the best friend
        bestFriend = friends.indexOf(Math.min(...friendDiff));

        //Add newFriend to the friends array

       res.send(bestFriend + " is your best friend"); 
    });

module.exports = api;