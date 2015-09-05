$(document).ready(function(){
	//loadToSwap('hello.html');
	$('#swap').load("html/home.html");
});

function loadHome() {
	loadToSwap("home.html");
}

function loadInfo() {
	loadToSwap("info.html");
}

function loadToSwap(stringToLoad) {
	$('#swap').load(stringToLoad + " #swap");
}

function addToSwap(newHtml) {
	$('#swap').html($('#swap').html() + newHtml);
}
