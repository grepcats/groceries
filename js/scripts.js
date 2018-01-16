$(document).ready(function() {
  var grocCount = 3;
  var grocID = ["groc1", "groc2", "groc3"];
  $("#more-input-button").click(function(event) {
    grocCount++
    $("#more-fields").append("<div class='form-group'><input type='text' id='groc" + grocCount + "' class='form-control'></div>");

    grocID.push("groc" + grocCount.toString());
    event.preventDefault();

  });

  $("#groceries").submit(function(event) {
    var grocList = grocID.map(function(groc){
      return $("#" + groc).val();

    });

    var sortList = grocList.slice().sort().toString().toUpperCase().split(",");
    //console.log(sortList);
    //$(this).hide();
    $("#listOutput").html("<ul id='grocItems'></ul>");
    sortList.forEach(function(item) {
      if (item != "") {
        $("#grocItems").append("<li>" + item + "</li>");
      } else {
      }
    });
    event.preventDefault();
  });


  // $("#sentence").submit(function(event) {
  //   var sentenceList = $("#food4").val().split(" ")
  //   console.log(sentenceList);
  //   var largeSentence = sentenceList.filter(function(word) {
  //     return word.length > 3;
  //   });
  //
  //   $("#listOutput").html("<p>" + largeSentence.reverse().join(" ") + "</p>");
  //
  //   event.preventDefault();
  // })
});
