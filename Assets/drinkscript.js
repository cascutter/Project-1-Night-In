// Night in js file


// On click function
$("#searchBtn").on("click", function () {

	var query = document.getElementById("searchDrinks").value;
	$("#infoDiv").empty();

	//API call for drink name, id, & image
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

		for (var i = 0; i < results.length; i++) {

			var newEl = $("<div>");
			var h1El = $("<p>");
			var imgEl = $("<img>");

			// ID call
			var drinkID = (results[i].idDrink);

			// Drink name call
			newEl.addClass("card");
			newEl.attr("drink-id", drinkID)
			$("#infoDiv").append(newEl);

			h1El.text(results[i].strDrink);
			newEl.append(h1El);
			h1El.addClass("list");

			// Image call
			imgEl.attr('src', results[i].strDrinkThumb);
			newEl.append(imgEl);

			// API call for instructions and ingredients
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

				for (var d = 0; d < resultsd.length; d++) {

					// Ingredients call
					var ingredEl = $("<p>");
					$(ingredEl).addClass("ings");
					ingredEl.text("Ingredients");
					$('.card[drink-id =' + resultsd[d].idDrink + ']').append(ingredEl);

					var ingredOneEl = $("<p>");
					$(ingredOneEl).addClass("text");
					ingredOneEl.text(resultsd[d].strIngredient1 + "   -   " + resultsd[d].strMeasure1);
					$('.card[drink-id =' + resultsd[d].idDrink + ']').append(ingredOneEl);

					var ingredTwoEl = $("<p>");
					$(ingredTwoEl).addClass("text");
					ingredTwoEl.text(resultsd[d].strIngredient2 + "   -   " + resultsd[d].strMeasure2);
					$('.card[drink-id =' + resultsd[d].idDrink + ']').append(ingredTwoEl);

					if (resultsd[d].strIngredient3) {
						var ingredThrEl = $("<p>");
						$(ingredThrEl).addClass("text");
						ingredThrEl.text(resultsd[d].strIngredient3 + "   -   " + resultsd[d].strMeasure3);
						$('.card[drink-id =' + resultsd[d].idDrink + ']').append(ingredThrEl);
					};

					if (resultsd[d].strIngredient4) {
						var ingredFourEl = $("<p>");
						$(ingredFourEl).addClass("text");
						ingredFourEl.text(resultsd[d].strIngredient4 + "   -   " + resultsd[d].strMeasure4);
						$('.card[drink-id =' + resultsd[d].idDrink + ']').append(ingredFourEl);
					};

					if (resultsd[d].strIngredient5) {
						var ingredFivEl = $("<p>");
						$(ingredFivEl).addClass("text");
						ingredFivEl.text(resultsd[d].strIngredient5 + "   -   " + resultsd[d].strMeasure5);
						$('.card[drink-id =' + resultsd[d].idDrink + ']').append(ingredFivEl);
					};

					if (resultsd[d].strIngredient6) {
						var ingredSixEl = $("<p>");
						$(ingredSixEl).addClass("text");
						ingredSixEl.text(resultsd[d].strIngredient6 + "   -   " + resultsd[d].strMeasure6);
						$('.card[drink-id =' + resultsd[d].idDrink + ']').append(ingredSixEl);
					};

					if (resultsd[d].strIngredient7) {
						var ingredSevEl = $("<p>");
						$(ingredSevEl).addClass("text");
						ingredSevEl.text(resultsd[d].strIngredient7 + "   -   " + resultsd[d].strMeasure7);
						$('.card[drink-id =' + resultsd[d].idDrink + ']').append(ingredSevEl);
					};

					// Instructions call
					var instEl = $("<p>");
					$(instEl).addClass("ings");
					instEl.text("Instructions");
					$('.card[drink-id =' + resultsd[d].idDrink + ']').append(instEl);

					var instructEl = $("<p>");
					$(instructEl).addClass("text");
					instructEl.text(resultsd[d].strInstructions);
					$('.card[drink-id =' + resultsd[d].idDrink + ']').append(instructEl);
				};
			});
		};
	});
});

// Return to top button function
homebutton = document.getElementById("homeBtn");


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
		homebutton.style.display = "block";
	} else {
		homebutton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}




