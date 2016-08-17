// business
var vowels = ["a","e","i","o","u"]
var translation = function(userInput) {
  if (isNaN(userInput)) {
    for (var i = 0; i < userInput.length; i += 1 ) {
      if ((vowels).indexOf(userInput[1])) {
        alert("vowel");
      }
    }
  }

};


// user
$(document).ready(function() {
  $("form").submit(function(event) {
    var userInput = $("#input").val().split("");
    var result = translation(userInput);
    $(".output").text(userInput);
    event.preventDefault();

  });
});
