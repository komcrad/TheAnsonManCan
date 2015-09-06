$(document).ready(function(){
	//loadToSwap('hello.html');
	//$('#swap').load("html/home.html");
	loadHome();
});

function loadHome() {
	$("#swap").load("html/home.html", function() {
		$("#campaignPoster").load(function() {
			$('#imageLoader').prop("src", "images/high-campaignPoster.jpg");
			$("#imageLoader").load(function() {
				$("#campaignPoster").prop("src", "images/high-campaignPoster.jpg");
			});
		});
	});
	
	//loadImage("#campaignPoster", "images/high-campaignPoster.jpg");
}

function loadInfo() {
	loadToSwap("info.html");
}

function loadToSwap(stringToLoad) {
	$('#swap').load(stringToLoad);
}

function addToSwap(newHtml) {
	$('#swap').html($('#swap').html() + newHtml);
}
