// Night in js file

$("#searchBtn").on("click", function(){
var query = document.getElementById("searchDrinks").value;
$("#infoDiv").empty();

//API call for
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://the-cocktail-db.p.rapidapi.com/filter.php?i=" + query,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		"x-rapidapi-key": "d0db1deb8cmsh5d63bd8fa1ad8adp19a620jsnb8fb75ceb2ec"
	}
}

$.ajax(settings).done(function (response) {

	var results = response.drinks;
	console.log(results);

	for(var i = 0; i < 10; i++) {
		var newEl = $("<div>");
		var h1El = $("<h1>");
		var imgEl = $("<img>");
		var instruct = $("<div>");

		// Drink name call
		var drinkID = (results[i].idDrink);
		newEl.addClass("card");
		newEl.attr("drink-id", drinkID)
		$("#infoDiv").append(newEl);
		h1El.text(results[i].strDrink);
		newEl.append(h1El);

		// Image call
		imgEl.attr('src', results[i].strDrinkThumb);
		newEl.append(imgEl);
		
		//API call for ingredients and instructions
		var settings = {
		"async": true,
		"crossDomain": true,	
		"url": "https://the-cocktail-db.p.rapidapi.com/lookup.php?i=" + drinkID,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
			"x-rapidapi-key": "d0db1deb8cmsh5d63bd8fa1ad8adp19a620jsnb8fb75ceb2ec"
		}
	}
		
	$.ajax(settings).done(function (respond) {
		
		var resultsd = respond.drinks;

		// Call for drink insructions
		for(var d = 0; d < resultsd.length ; d++) {
		var instructEl = $("<p>");
		instructEl.text(resultsd[d].strInstructions);
		$('.card[drink-id =' +resultsd[d].idDrink+ ']').append(instructEl);		
	};
	});
	};
});
});
	
 
