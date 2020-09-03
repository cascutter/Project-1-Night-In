$("#ingredientSearchBtn").click (function () {
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

			var infoDiv = $("<div>");
			$(infoDiv).attr("class", "box");
			recipeList.append(infoDiv);

			var imgField = $("<img>");
			imgField.width(200);
			infoDiv.append(imgField);
			var imgURL = parseResponse.results[i].thumbnail;
			$(imgField).attr("src", imgURL);

			var ingField = $("<p>")
			infoDiv.append(ingField);
			var ingredients = "Some ingredients you'll need: " + parseResponse.results[i].ingredients;
			ingField.append(ingredients);

			var linkField = $("<p>")
			infoDiv.append(linkField);

			var recipeLinkText = "Click the link to view the recipe! ";
			infoDiv.append(recipeLinkText);

			var recipeLink = $("<a>");
			recipeLink.attr("href", parseResponse.results[i].href);
			recipeLink.attr("target", "_blank");
			recipeLink.text(parseResponse.results[i].href);
			infoDiv.append(recipeLink);
			


		}
		
	});
});