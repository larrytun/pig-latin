// business
var vowels = ["a","e","i","o","u"];

var translation = function(userInput) {
  if (isNaN(userInput)) {
    for (i = 0; !(vowels).includes(userInput[0]); i += 1) {
      if (userInput[0] === "q" && userInput [0+1] === "u") {
        userInput.push(userInput[0], userInput[1]);
        userInput.splice(0,(0+2));
      } else {
      userInput.push(userInput[0]);
      }
    }
    console.log(userInput[i]);
    userInput.push("a","y");
    return userInput.join("");
  }
};

// user
$(document).ready(function() {
  $("form").submit(function(event) {
    var userInput = [];
    userInput = $("#input").val().split(" ");
    var result = [];

    userInput.forEach(function(word) {
      var chars = word.split("");
      result.push(translation(chars));
    });

    $(".output").text(result.join(" "));
    event.preventDefault();
  });
});
