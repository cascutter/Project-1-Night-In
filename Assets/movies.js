
var APIKey = "b84f85bbaa5bb55f4e02b13c7fec393a";
var genresURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + APIKey + "&language=en-US";
var option = "";

$.ajax({
			url: genresURL,
			method: "GET"
		}).then(function(response) {
			for (var i = 0; i < response.genres.length; i++) {
				var newEl = $("<option>");
				newEl.attr("genre-id", response.genres[i].id);
				newEl.text(response.genres[i].name);
				$("#genre").append(newEl);
			}
		});

	//Search Genre
	$("#submit-genre").on("click", function() {
		var option = $("option").attr("genre-id");
		console.log(option);

		var optionsURL = "https://api.themoviedb.org/3/discover/movie?api_key=b84f85bbaa5bb55f4e02b13c7fec393a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + option;

		$.ajax({
			url: optionsURL,
			method: "GET"
		}).then(function(optionResponse) {
			console.log(optionResponse);
			for (var i = 0; optionResponse.results.length; i++) {
				console.log(optionResponse.results[i].title);

				var movieTitle = $("<p>");
				movieTitle.text(optionResponse.results[i].title);
				$("#movie-list").append(movieTitle);
			} 
		});
	});
