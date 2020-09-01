$("#ingredientSearchBtn").on("click", function () {
	var query = $("#ingredientSearch").val;
	$("#recipeListDiv").empty();

	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://recipe-puppy.p.rapidapi.com/?p=1&i=" + query,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
			"x-rapidapi-key": "779922a9bemshc6756065ad9410bp115926jsnfa53da806d8a"
		}
	}
$.ajax(settings).done(function (response) {
	
	var parseResponse = (JSON.parse(response));
	console.log(parseResponse);
})
})