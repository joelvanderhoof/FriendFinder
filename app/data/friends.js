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

        console.log(survey);

        sendChoices(survey);
    });
};

var sendChoices = (survey) => {
    var settings = {
  "url": "/api/friends",
  "method": "POST",
  "data": survey
}

$.ajax(settings).done(function (response) {
  console.log(response);
}).done((res) => {
    alert(res);
});
};

$(document).ready(() =>{
    submitChoices();
    
});