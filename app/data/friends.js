var submitChoices = () => {
    $("#submit").on("click", () =>{
        var userName = $('#name').val();
        var userImg = $('#image').val();
        var userChoices = [];

        for(var i=0; i<10; i++) {
            var questionID = "#" + i;
            var answer = $(questionID).val();
            userChoices.push(answer);
        }

        var survey = {
            "userName": userName,
            "userImg": userImg,
            "userChoices": userChoices
        };

        console.log(typeof survey.userChoices[3]);

        sendChoices(survey);
    });
};

var sendChoices = (survey) => {
    var settings = {
  "url": "/api/friends",
  "method": "POST",
  "data": survey
}
    console.log(survey);
$.ajax(settings).done( (response) => {
  console.log(response);
});

};

$(document).ready(() =>{
    submitChoices();
});