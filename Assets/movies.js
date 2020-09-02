//Search Genre
$("searchButton").on("click", function(){

});

// Api
var APIKey = "b84f85bbaa5bb55f4e02b13c7fec393a";
var genreURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + APIKey + "&language=en-US";

var moviesURL = "https://api.themoviedb.org/3/discover/movie?api_key=" + APIKey + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18";

$.ajax({
	url: genreURL,
	method: "GET"
  }).then(function(response) {
	console.log(response);
  });
