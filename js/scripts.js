// business
var vowels = ["a","e","i","o","u"]

var translation = function(userInput) {
  if (isNaN(userInput)) {
    if ((vowels).indexOf(userInput[1])) {

      userInput.push("a","y");
    }
  }
};

// user
$(document).ready(function() {
  $("form").submit(function(event) {
    var userInput = $("#input").val().split("");
    var result = translation(userInput);
    userInput = userInput.join("");
    $(".output").text(userInput);
    event.preventDefault();

  });
});
