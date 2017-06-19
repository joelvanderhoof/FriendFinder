var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");

var api = express.Router();

// Data
var friends = [
    {
        userName: "John Rambo",
        userImg: "http://cdn3.thr.com/sites/default/files/2011/08/rambo_a.jpg",
        userChoices: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        userName: "John Matrix",
        userImg: "https://thelittle.org/sites/default/files/imges/film/Commando-645x370.jpg",
        userChoices: [1, 3, 4, 2, 1, 3, 1, 2, 4, 1]
    },
    {
        userName: "Conan",
        userImg: "https://i.ytimg.com/vi/DPfPbQOnSDk/hqdefault.jpg",
        userChoices: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    },
    {
        userName: "The Terminator",
        userImg: "https://static.comicvine.com/uploads/original/3/38511/794443-terminator_1.png",
        userChoices: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
    },
    {
        userName: "Dutch",
        userImg: "http://www.writeups.org/wp-content/uploads/Dutch-Schaefer-Predator-Schwarzenegger-a.jpg",
        userChoices: [2, 2, 2, 2, 2, 4, 4, 4, 4, 1]
    }
];

api.get("/friends", (req, res) => {
    res.json(friends);
})
    .post("/friends", (req, res) => {
        var newFriend = req.body;
        var friendDiff = [];
        var bestFriend;

        //convert userChoice to numbers
        for(var i=0; i<newFriend.userChoices.length; i++) {
            newFriend.userChoices[i] = parseInt(newFriend.userChoices[i]);
        }

        //Compare the new friend's choices with each friend in the array
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

        //Find the index of the best friend
        bestFriend = friendDiff.indexOf(Math.min(...friendDiff));
        console.log(friends[bestFriend]);
        
        //Add newFriend to the friends array
        friends.push(newFriend);

        res.send(friends[bestFriend].userName + " is your best friend \n" +
        "see the awesome pic" + friends[bestFriend].userImg);
    });

module.exports = api;