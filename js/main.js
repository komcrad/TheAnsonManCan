$(document).ready(function(){
	$('#loadHome').click(function() {
		loadHome();
	});
	$('#loadInfo').click(function() {
		loadInfo();
	});
	//loadToSwap('hello.html');
	$('#swap').load("hello.html #swap");
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