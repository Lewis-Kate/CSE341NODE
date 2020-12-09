
    
function findMovie() {
	// Get the value from the search box
	let searchTitle = $("#title").val();
	console.log("Searching for: " + searchTitle);

	// Set up the parameters to send to the API
	let params = {s: searchTitle, apikey:"c214de2e"};

	// Use jQuery to make the get request
	$.get("https://www.omdbapi.com/", params, function(data, status){
		// For debugging purposes, make a note that we're back
		console.log("Results from API:")
		console.log(status);
    	console.log(data);

    	updateResults(data)
	});
}

function updateResults(data) {

	if (data.Search && data.Search.length > 0) {
		var resultList = $("#dataResults");
		resultList.empty();

		for (let i = 0; i < data.Search.length; i++) {
			let title = data.Search[i].Title;
			let poster = data.Search[i].Poster;
            let year = data.Search[i].Year;
            let imdbID = data.Search[i].imdbID;
            let type = data.Search[i].Type;
			resultList.append("<div class='title imgContainer'><a href='http://www.imdb.com/title/" + imdbID 
 + "' target='_blank'><img class='poster' src='" + poster + "' alt='" + title + "'><p class='titleText'>" + title +"<br>"+ year + "<br>"+ type + "</p></a></div>");
		} 
	} else {
			let resultList = $("#dataResults");
			resultList.empty();
			resultList.append("<p class='title warning'>Please try again</p>");
		}
    
    function findPlot() {
	// Get the value from the search box
	let searchTitle = $("#title").val();
	console.log("Searching for: " + searchTitle);

	// Set up the parameters to send to the API
	let params = {t: searchTitle, apikey:"c214de2e"};

	// Use jQuery to make the get request
	$.get("https://www.omdbapi.com/", params, function(data, status){
		// For debugging purposes, make a note that we're back
		console.log("Plot from API:")
		console.log(status);
    	console.log(data);

    	updateResults(data)
	});
}
    
    function updatePlot(data) {

	if (data.Search && data.Search.length > 0) {
		var resultList = $("#plot");
		resultList.empty();

		for (let i = 0; i < data.Search.length; i++) {
			let plot = data.Search[i].Plot;
            
            resultList.append("<div class='plot'><p class='titleText'>" + plot + "</p></div>");
		} 
	} else {
			let resultList = $("#plot");
			resultList.empty();
			resultList.append("<p class='title warning'>Please try again</p>");
		}
			

}
