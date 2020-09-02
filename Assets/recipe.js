$("#ingredientSearchBtn").on("click", function () {
	var query = $("#ingredientSearch").val();
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
	 console.log(parseResponse.results);

	 for (var i = 0; i < 10; i++) {

	     var recipeListDiv = $("#recipeList");
	     var recipeList = $("<ul>");
		 recipeListDiv.append(recipeList);
		 

	     var recipeItem = $("<li>")
	     recipeList.append(recipeItem);
	     $(recipeItem).addClass("list");
	     var recipeTitle = parseResponse.results[i].title;
		 recipeItem.text(recipeTitle);
		 
		//  var recipeLink = parseResponse.results[i].href;
		 
		//  var infoDiv = $("<div>");
	    //  $(infoDiv).attr("class", "box");
	    //  recipeList.append(infoDiv);
	    //  var imgField = $("<img>");
	    //  infoDiv.append(imgField);
	    //  var imgURL = parseResponse.results[i].thumbnail;
	    //  $(imgField).attr("src", imgURL);
	 }
});
});