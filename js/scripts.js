// business
var translation = function(word) {

  if (isNaN(word)) {
    alert("number");
  }
};


// user
$(document).ready(function() {
  $("form").submit(function(event) {
    var userInput = $("#input").val();
    debugger;
    var result = translation(userInput);
    $(".output").text(userInput);
    event.preventDefault();

  });
});
