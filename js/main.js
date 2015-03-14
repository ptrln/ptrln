$(function(){

  var addLine = function(str, size) {
    var letters = (str || "").toUpperCase().split("");
    var line = $("<div class='line " + (size || "large") + "'></div>");
    _.each(letters, function(letter) {
      line.append("<div><div class='" + letter + "'></div></div>");
    });
    $(".lines").append(line);
  }

  addLine("Peter");
  addLine("Lin");
  addLine("Sr Software Engineer", 'small');
  addLine("Instacart", 'small');
})