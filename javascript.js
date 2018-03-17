var animals = ["cat", "dog", "mouse", "horse", "cow", "pig", "sheep", "snake", "iguana", "buffalo", "shark", "dolphin", "whale", "kitten", "puppy", "chicken"]

console.log(animals);

function display() {
    var animalButton = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalButton + "&api_key=dc6zaTOxFJmzC&limit=10";
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: 'GET'
        }).then(function(response) {
        console.log(response);
    
        var results = response.data;
        for (var i=0; i < results.length; i++) {
            var gifDiv = $("<div>");
            var gifImage = $("<img>");
            gifImage.attr("src", results[i].images.fixed_height.url);
            gifDiv.append(gifImage);
            $(".gifContainer").prepend(gifDiv);
        }
    });
}

display();

// makes buttons 

function makeButtons() {
    for (var i = 0; i < animals.length; i++) {
        var a = $("<button>");
        a.attr("id", "topic");
        a.attr("data-name", animals[i]);
        a.text(animals[i]);
        $(".buttonContainer").append(a);
    }
}

makeButtons();

// makes buttons grab the input 

$("#search").on("click", function(event) {
    event.preventDefault();
    var searchedAnimal = $("#search-term").val();
    animals.push(searchedAnimal);
    $(".buttonContainer").empty();
    makeButtons();
    console.log(animals);
});

// dispalys gifs 

$(document).on("click", "#topic", display);

