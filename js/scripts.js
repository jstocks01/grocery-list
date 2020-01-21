$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var blanks = ["item1", "item2", "item3", "item4", "item5"];

    var groceries = [];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      groceries.push(userInput);
    });

    var list = groceries.sort();

    list.forEach(function(item) {
      $("ul").append("<li>" + item.toUpperCase() + "</li>");

      $("#list").show();
    });
  });
});