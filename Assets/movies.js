
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

				var movieOverview = $("<h5>");
				movieOverview.text(optionResponse.results[i].overview);

				var movieImg = $("<img>")
				var ImgURL = "https://image.tmdb.org/t/p/w200/" + optionResponse.results[i].poster_path;
				movieImg.attr("src", ImgURL);

				var movieRating = $("<h4>");
				movieRating.text("Average Rating: " + optionResponse.results[i].vote_average + "/10");

				//Appends
				movieInfo.append(movieTitle, movieOverview, movieImg, movieRating);
				movieItem.append(movieInfo);
				movieList.append(movieItem);
			}
			movieListDiv.append(movieList);
		}); 
	});

	// $("#submit-genre").keyup(function () {
	// 	if (event.keyCode === 13) {
	// 		//$("#searchBtn").click();
	// 		getMovies();

	
	

