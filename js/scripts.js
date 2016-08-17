// business
var vowels = ["a","e","i","o","u"]

var translation = function(userInput) {
  if (isNaN(userInput)) {
    console.log(userInput[0]);
    if ((vowels).includes(userInput[0])) {
      userInput.push("a","y");
    } else {
      for (i = 0; !(vowels).includes(userInput[i]);) {
        userInput.push(userInput[0]);
        userInput.splice(0,(i+1));
        console.log(userInput)
        console.log(i)
      }
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
