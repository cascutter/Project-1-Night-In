
var APIKey = "b84f85bbaa5bb55f4e02b13c7fec393a";
var genresURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + APIKey + "&language=en-US";
var option = "";


//Initial call to Genre API for list of Genres
$( document ).ready(function() {

	$.ajax({
		url: genresURL,
		method: "GET"
	}).then(function(response) { 
		for (var i = 0; i < response.genres.length; i++) {
			var newEl = $("<option>");
			newEl.attr("value", response.genres[i].id);
			newEl.text(response.genres[i].name);
			$("#genre").append(newEl);
		}
	});

});

//Submit Button
$("#submit-genre").on("click", function() {
	$("#movieList").empty();

	var option = $("#genre option:selected").val();

	var optionsURL = "https://api.themoviedb.org/3/discover/movie?api_key=b84f85bbaa5bb55f4e02b13c7fec393a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + option;

	$.ajax({
			url: optionsURL,
			method: "GET"
	}).then(function(optionResponse) {
			
		//Calling the div where the list of movies go
		var movieListDiv = $("#movieList");
		var movieList = $("<ul>").addClass("movieList");

		//adding the info from the API into the div
		for (var i = 0; i < optionResponse.results.length; i++) {

			//List
			var movieItem = $("<li>");

			//Info Div
			var movieInfo = $("<div>");
			var movieTitle = $("<p>")
			movieTitle.addClass("list");
			movieTitle.text(optionResponse.results[i].title);

			//movie Summary
			var movieOverview = $("<p>");
			movieOverview.text(optionResponse.results[i].overview);

			//movie Image
			var movieImg = $("<img>")
			var ImgURL = "https://image.tmdb.org/t/p/w200/" + optionResponse.results[i].poster_path;
			movieImg.attr("src", ImgURL);

			//movie Rating
			var movieRating = $("<p>");
			movieRating.text("Average Rating: " + optionResponse.results[i].vote_average + "/10");

			//IMDB BUTTON
			var imdbLink = $("<button>");
			imdbLink.text("More on IMDB...");
			imdbLink.attr("value", optionResponse.results[i].id);
			imdbLink.addClass("button is-light is-outlined");
			//Another AJAX call to get IMDB ID
			imdbLink.click(function() {
				//API with IMDB ID
				var movieURL = "https://api.themoviedb.org/3/movie/" + $(this).val() + "?api_key=" + APIKey + "&language=en-US";

				$.ajax({
					url: movieURL,
					method: "GET"
				}).then(function(imdbResponse) { 
							
					//IMDB LINK
					imdbID = imdbResponse.imdb_id;
					var imdbURL = "https://www.imdb.com/title/" + imdbID + "/?ref_=fn_al_tt_1";
					//Makes link open in new tab
					window.open(imdbURL, "_blank");
				});
			});

			//Appends
			movieInfo.append(movieTitle, movieOverview, movieImg, movieRating, imdbLink);
			$(movieItem).attr("class", "card");
			movieItem.append(movieInfo);
			movieList.append(movieItem);
		}
		
		movieListDiv.append(movieList);
	}); 
	
});
	