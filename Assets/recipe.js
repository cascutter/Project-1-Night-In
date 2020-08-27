//JS for recipe page(?)

//variable for page number in results
var p = 1;
//variable for ingredient searching, separated by comma
var i = "onions"
//variable for keyword searching
var q = "omelet"

//sets up the website, logs the response
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://recipe-puppy.p.rapidapi.com/?p=" + p + "&i=" + i + "&q=" + q,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
		"x-rapidapi-key": "779922a9bemshc6756065ad9410bp115926jsnfa53da806d8a"
	}
}

$.ajax(settings).done(function (response) {
    console.log(response);
});