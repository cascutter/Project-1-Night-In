//click function for search query
$("#ingredientSearchBtn").click(function () {
	//ingredient search variable
	var query = $("#ingredientSearch").val();
	//keyword search variable
	var keyword = $("#keywordSearch").val();
	//variable for page number, 10 recipes per page, gives a random page between 1 and 30
	var p = Math.floor((Math.random() * 30) + 1);
	console.log(p)
	$("#recipeList").empty();

	

	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://recipe-puppy.p.rapidapi.com/?p=" + p + "&i=" + query + "&q=" + keyword,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
			"x-rapidapi-key": "779922a9bemshc6756065ad9410bp115926jsnfa53da806d8a"
		}
	}

	$.ajax(settings).done(function (response) {
		
		//parse response
		var parseResponse = (JSON.parse(response));
		//log an array for each recipe result
		console.log(parseResponse.results);

		for (var i = 0; i < 10; i++) {
			//variables for the title and list items
			var recipeListDiv = $("#recipeList");
			var recipeList = $("<ul>");
			var recipeItem = $("<li>")
			var recipeTitle = parseResponse.results[i].title;			

			//add list of recipes and each li item to the div
			recipeListDiv.append(recipeList);
			recipeList.append(recipeItem);

			//adds class name to recipe items
			$(recipeItem).addClass("list");

			//adds recipe title to the recipe card
			recipeItem.text(recipeTitle);

			//variables for information elements to go into
			var infoDiv = $("<div>");
			var imgField = $("<img>");
			var imgURL = parseResponse.results[i].thumbnail;
			var ingField = $("<p>")
			var ingredients = "Some ingredients you'll need: " + parseResponse.results[i].ingredients;
			var linkField = $("<p>")
			var recipeLink = $("<a>");

			//styles the info div to a box, put the recipe list into it
			$(infoDiv).attr("class", "card");
			recipeList.append(infoDiv);

			//sets img source to the thumbnail from DOM
			$(imgField).attr("src", imgURL);
			//sets img alt to the recipe title
			$(imgField).attr("alt", recipeTitle);
			//expand img to be 350px wide
			imgField.width(350);
			//add ingredients to its field
			ingField.append(ingredients);
			//locates the link location
			recipeLink.attr("href", parseResponse.results[i].href);
			//opens link in new tab
			recipeLink.attr("target", "_blank");
			//link to recipe page
			recipeLink.text("Click here to view the recipe!");	

			//appends all elements of the info div
			infoDiv.append(imgField, ingField, linkField, recipeLink);
		}

	});
});