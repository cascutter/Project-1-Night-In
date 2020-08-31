//variable for page number in results
var p = 1;
//variable for ingredient searching, separated by comma
var ing = "blueberries"

// $("#ingredientSearchBtn").on("click", function () {
// 	var ing = //$("#ingredientSearch").value;
// 		$("#ingredientSearch").empty();

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
		var parseResponse = (JSON.parse(response));
		var recipeTitle = parseResponse.results[0].title;
		console.log(recipeTitle);
		for (var i = 0; i <= 10; i++) {

		}


	});
// })
