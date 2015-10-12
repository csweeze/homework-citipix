//user types in city name
//user clicks submit
//background is changed


//wait for elements to load

$(document).ready(function() {
    console.log( "ready!" );

//create function to change background
function backgroundSelect() {
	//prevent from refreshing on submit
	event.preventDefault();
//declare city variable
	var city = $("#city-type").val();
	//get rid of any other css class on body
	$("body").removeClass();
	// var city = $.toUpperCase() === $.toUpperCase();
// "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
	if ((city.toLowerCase() === 'nyc')  || (city.toLowerCase()==='new york city')|| (city.toLowerCase()==='new york')) {
	$("body").toggleClass("nyc");
		console.log("ny");
	// 	else {
	// 	console.log("not ny");


// "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
	} else if ((city.toLowerCase() === "san francisco") || (city.toLowerCase()=== "sf") || (city.toLowerCase()==="bay area")){
	 $("body").toggleClass("sf");
	 console.log("sf");
	 }
	// "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
	 else if ((city.toLowerCase() === "los angeles") ||(city.toLowerCase()==="la") || (city.toLowerCase()==="lax")) {
	 $("body").toggleClass("la");
	 console.log("LAX");
	 }
	// "Austin" or "ATX" make the background of the page austin.jpg
	 else if ((city.toLowerCase() === "austin") || (city.toLowerCase()==="atx")) {
	 $("body").toggleClass("austin");
	 console.log("ATX");
	 }
	//change for Sydbey
	 else if ((city.toLowerCase() === "sydney") || (city.toLowerCase()==="syd")) {
	 $("body").toggleClass("sydney");
	 console.log("Sydney");
	 }
}
//on click of submit button fire background select function
    $("#submit-btn").click(backgroundSelect);

});



