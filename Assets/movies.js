
var APIKey = "b84f85bbaa5bb55f4e02b13c7fec393a";
var genresURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + APIKey + "&language=en-US";

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
	});