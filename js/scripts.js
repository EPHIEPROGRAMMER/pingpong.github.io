var pingPong = function(number) {
  if ((number % 3 === 0) || (number % 5 === 0)) {
    return true;
  } else {
    return false;
  };
};


$(document).ready(function() {
  $("form#formInput").submit(function(event) {//gives the submit button some action
    $("ul").empty();//creating an empty list.where our numbers will be saved later
    var number = parseInt($("input#numberInput").val()); //converts the number to a string

    for (i = 1; i <= number; i++)
    if (i % 3 === 0 && i % 5 === 0) {
        $("ul").append("<li>pingpong</li>");
//if the number is divisible by both 5 & 3 it prints pingpong in the empty list we created
      } else if (i % 3 === 0) {
      $("ul").append("<li>ping</li>");

    } else if (i % 5 === 0) {
      $("ul").append("<li>pong</li>");

    } else {
      $("ul").append("<li>" + i + "</li>");
    }
    event.preventDefault();
  });
});
