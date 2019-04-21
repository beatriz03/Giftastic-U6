// Initial array of fruit
var fruits = ["Mango", "Banana", "Grape", "Pineapple"];


function displayFruitInfo() {

  var fruit = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    fruit + "&api_key=dRCINSriroZWT5KDfbGhXDxku9EFPzlm&limit=10";

  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  })

    .then(function (response) {
      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        // Creating and storing a div tag
        var fruitDiv = $("<div>");
        var p = $("<p>").text("Rating: " + results[i].rating);
        var fruitImage = $("<img>");

        fruitImage.attr("src", results[i].images.fixed_height_still.url);
        fruitDiv.append(p);
        fruitDiv.append(fruitImage);

        $("#gifs-view").prepend(fruitDiv);
      }
    });
};


function renderButtons() {
  $("#buttons-view").empty();

  for (var i = 0; i < fruits.length; i++) {
    var a = $("<button>");

    a.addClass("fruit-btn");
    a.attr("data-name", fruits[i]);
    a.text(fruits[i]);
    $("#buttons-view").append(a);
  }
}

//Add fruit
$("#add-fruit").on("click", function (event) {
  event.preventDefault();

  var fruit = $("#fruit-input").val().trim();

  fruits.push(fruit);

  renderButtons();
});

$(document).on("click", ".fruit-btn", displayFruitInfo);

renderButtons();


