//variable for page number in results
var p = 1;
//variable for ingredient searching, separated by comma


$("#ingredientSearchBtn").on("click", function(){
	var ing = $("#ingredientSearch").value;
	$("#ingredientSearch").empty();

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://recipe-puppy.p.rapidapi.com/?p=1&i=" + ing,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
		"x-rapidapi-key": "779922a9bemshc6756065ad9410bp115926jsnfa53da806d8a"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
	
	
});
})

//when ingredients are entered, display first 10 recipes that match
//when keyword is entered, display first 10 recipes that match
//when both are entered, display first 10 recipes that match