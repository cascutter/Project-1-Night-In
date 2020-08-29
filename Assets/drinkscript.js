// Night in js file

$("#searchBtn").on("click", function(){
var query = document.getElementById("searchDrinks").value;
$("#searchDrinks").empty();
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
	console.log(response);



});



});
	
 
