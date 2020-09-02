// Night in js file

$("#searchBtn").on("click", function(){
var query = document.getElementById("searchDrinks").value;
$("#infoDiv").empty();
var drinkArray = [];
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

		var drinkItem = document.createElement("h1");
		$("#infoDiv").append(drinkItem);
		drinkItem.innerHTML = results[i].strDrink;

		var picItem = document.createElement("img");
		$("#infoDiv").append(picItem);
		$(picItem).attr("src", results[i].strDrinkThumb);

		
		var drinkID = (results[i].idDrink);
		
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
		console.log(resultsd[0]);

		for(var d = 0; d < resultsd.length ; d++) {
		var instr = document.createElement("p");
		//$(instr).addClass("ings");
		$("#infoDiv").append(instr);
		instr.innerHTML = resultsd[d].strInstructions;	
	};
	});
	};
});
});
	
 
