$(document).ready(function() {
  $("#groceries").submit(function(event) {
    var grocList = [$("#food1").val(), $("#food2").val(), $("#food3").val()];
    var sortList = grocList.slice().sort().toString().toUpperCase().split(",");
    console.log(sortList);
    $(this).hide();
    $("#listOutput").html("<ul id='grocItems'></ul>");
    sortList.forEach(function(item) {
      $("#grocItems").append("<li>" + item + "</li>");
    });
    event.preventDefault();
  });

  $("#sentence").submit(function(event) {
    var sentenceList = $("#food4").val().split(" ")
    console.log(sentenceList);
    var largeSentence = sentenceList.filter(function(word) {
      return word.length > 3;
    });

    $("#listOutput").html("<p>" + largeSentence.reverse().join(" ") + "</p>");

    event.preventDefault();
  })
});
