// Night in js file

$("#searchBtn").on("click", function(){
var query = document.getElementById("searchDrinks").value;
$("#drinksHere").empty();
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

		var drinkList = document.getElementById("drinksHere");
		var listItem = document.createElement("ul");
		drinkList.append(listItem);

		var drinkItem = document.createElement("li");
		listItem.append(drinkItem);
		$(drinkItem).addClass("list")
		var cocktail = results[i].strDrink;
		drinkItem.innerHTML = cocktail;

		var infoDiv = document.createElement("div")
		$(infoDiv).attr("class", "box");
		listItem.append(infoDiv);
		var picItem = document.createElement("img");
		infoDiv.append(picItem);
		var picUrl = results[i].strDrinkThumb;
		$(picItem).attr("src", picUrl);

		// testing code for next api call
		var instr = document.createElement("section");
		infoDiv.append(instr);
		instr.innerHTML = ("testing");
	};

	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://the-cocktail-db.p.rapidapi.com/lookup.php?i=11007",
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
			"x-rapidapi-key": "d0db1deb8cmsh5d63bd8fa1ad8adp19a620jsnb8fb75ceb2ec"
		}
	}
	
	$.ajax(settings).done(function (response) {
		console.log(response);
	});
});
});
	
 
